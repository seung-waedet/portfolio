/**
 * Build-time Strava fetch. Uses the long-lived refresh token to mint a
 * short-lived access token, then queries athlete stats.
 *
 * Required env (.env):
 *   STRAVA_CLIENT_ID
 *   STRAVA_CLIENT_SECRET
 *   STRAVA_REFRESH_TOKEN
 *   STRAVA_ATHLETE_ID
 *
 * Returns null if any of the above are missing — callers should fall back
 * gracefully so the site still builds without Strava configured.
 */

export type Miles = {
  ytd: number;
  longest: number;
  runs: number;
  pace: string;
};

const M_PER_MILE = 1609.344;

const formatPace = (secPerMile: number): string => {
  const m = Math.floor(secPerMile / 60);
  const s = Math.round(secPerMile % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export async function fetchStravaMiles(): Promise<Miles | null> {
  const clientId = import.meta.env.STRAVA_CLIENT_ID;
  const clientSecret = import.meta.env.STRAVA_CLIENT_SECRET;
  const refreshToken = import.meta.env.STRAVA_REFRESH_TOKEN;
  const athleteId = import.meta.env.STRAVA_ATHLETE_ID;

  if (!clientId || !clientSecret || !refreshToken || !athleteId) {
    return null;
  }

  // 1. exchange refresh token for access token
  const tokenRes = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  if (!tokenRes.ok) throw new Error(`Strava token exchange failed: ${tokenRes.status}`);
  const { access_token }: { access_token: string } = await tokenRes.json();

  // 2. athlete stats (ytd_run_totals, all_run_totals, recent_run_totals)
  const statsRes = await fetch(
    `https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
    { headers: { Authorization: `Bearer ${access_token}` } }
  );
  if (!statsRes.ok) throw new Error(`Strava stats failed: ${statsRes.status}`);
  const stats: {
    ytd_run_totals: { distance: number; count: number; moving_time: number };
  } = await statsRes.json();

  // 3. longest run (top 100 recent activities, max distance among Runs)
  const actsRes = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?per_page=100&page=1`,
    { headers: { Authorization: `Bearer ${access_token}` } }
  );
  const acts: { type: string; distance: number }[] = actsRes.ok ? await actsRes.json() : [];
  const longestM = acts
    .filter((a) => a.type === "Run")
    .reduce((max, a) => Math.max(max, a.distance), 0);

  const ytdMiles = stats.ytd_run_totals.distance / M_PER_MILE;
  const longestMiles = longestM / M_PER_MILE;
  const secPerMile =
    stats.ytd_run_totals.distance > 0
      ? stats.ytd_run_totals.moving_time / (stats.ytd_run_totals.distance / M_PER_MILE)
      : 0;

  return {
    ytd: Math.round(ytdMiles),
    longest: Math.round(longestMiles * 10) / 10,
    runs: stats.ytd_run_totals.count,
    pace: secPerMile > 0 ? formatPace(secPerMile) : "—",
  };
}
