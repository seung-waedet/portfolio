/**
 * Icon names content may reference (frontmatter `icon:`). Kept free of component
 * imports so the content schema can validate against it. Each name maps to a Lucide
 * icon in src/components/Icon.astro; TypeScript fails the build if one is missing.
 *
 * To add one: pick a name from https://lucide.dev/icons, add it here and to Icon.astro.
 */
export const ICON_NAMES = [
  "briefcase",
  "file-search",
  "gem",
  "messages-square",
  "wallet",
  "waves",
  "zap",
] as const;

export type IconName = (typeof ICON_NAMES)[number];

/** One stroke weight site-wide; sizes match the text they sit beside. */
const STROKE = 1.5;

export const ICON_PROPS = {
  /** Leading icon in a RowList row. */
  row: { size: 18, "stroke-width": STROKE },
  /** Inline with 12-14px mono text (arrows, theme toggle). */
  inline: { size: 14, "stroke-width": STROKE },
} as const;
