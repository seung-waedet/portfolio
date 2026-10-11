/**
 * Lucide icon sizing for UI chrome (arrows, theme toggle). Components import icons
 * directly from @lucide/astro and spread one of these, so the site keeps a single
 * stroke weight and size scale.
 */
const STROKE = 1.5;

export const ICON_PROPS = {
  /** Inline with 12-14px mono text. */
  inline: { size: 14, "stroke-width": STROKE },
} as const;
