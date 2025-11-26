import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0f172a', // Slate 900
        lime: '#10b981', // Emerald 500
        magenta: '#6366f1', // Indigo 500
        'lime-dim': '#059669', // Emerald 600
        'magenta-dim': '#4f46e5', // Indigo 600
      },
      fontFamily: {
        display: ['var(--font-clash)'],
        mono: ['var(--font-berkeley)'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.lime'),
            a: {
              color: theme('colors.magenta'),
              '&:hover': {
                color: theme('colors.lime'),
              },
            },
            h1: { color: theme('colors.lime') },
            h2: { color: theme('colors.lime') },
            h3: { color: theme('colors.lime') },
            h4: { color: theme('colors.lime') },
            strong: { color: theme('colors.lime') },
            code: { color: theme('colors.magenta') },
            blockquote: {
              borderLeftColor: theme('colors.lime'),
              color: theme('colors.lime-dim'),
            },
          },
        },
      }),
    },
    typography: (theme: any) => ({
      DEFAULT: {
        css: {
          maxWidth: 'none',
          color: theme('colors.lime'),
          '--tw-prose-body': theme('colors.lime'),
          '--tw-prose-headings': theme('colors.lime'),
          '--tw-prose-links': theme('colors.magenta'),
          '--tw-prose-bold': theme('colors.lime'),
          '--tw-prose-counters': theme('colors.lime-dim'),
          '--tw-prose-bullets': theme('colors.lime-dim'),
          '--tw-prose-hr': theme('colors.lime-dim'),
          '--tw-prose-quotes': theme('colors.lime-dim'),
          '--tw-prose-quote-borders': theme('colors.lime'),
          '--tw-prose-captions': theme('colors.lime-dim'),
          '--tw-prose-code': theme('colors.magenta'),
          '--tw-prose-pre-code': theme('colors.lime'),
          '--tw-prose-pre-bg': '#0f172a', // Match void/slate-900
          '--tw-prose-th-borders': theme('colors.lime-dim'),
          '--tw-prose-td-borders': theme('colors.lime-dim'),

          // Spacing
          p: {
            marginTop: '1.5em',
            marginBottom: '1.5em',
            lineHeight: '1.8',
          },

          // Links
          a: {
            color: theme('colors.magenta'),
            textDecoration: 'none',
            borderBottom: `1px solid ${theme('colors.magenta')}`,
            transition: 'all 0.2s',
            '&:hover': {
              color: theme('colors.lime'),
              borderColor: theme('colors.lime'),
            },
            '&:active': {
              color: theme('colors.lime'),
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderColor: theme('colors.lime'),
            },
          },

          // Headings
          h1: { color: theme('colors.lime'), marginTop: '2em' },
          h2: { color: theme('colors.lime'), marginTop: '2em', borderBottom: `1px solid ${theme('colors.lime-dim')}`, paddingBottom: '0.5em' },
          h3: { color: theme('colors.lime'), marginTop: '1.5em' },
          h4: { color: theme('colors.lime') },

          // Inline Code
          code: {
            color: theme('colors.magenta'),
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            padding: '0.2em 0.4em',
            borderRadius: '0.25rem',
            fontWeight: '400',
          },
          'code::before': { content: '""' },
          'code::after': { content: '""' },

          // Code Blocks
          pre: {
            backgroundColor: '#020617', // Darker slate
            border: `1px solid ${theme('colors.lime-dim')}`,
            borderRadius: '0.5rem',
            padding: '1.5rem',
            overflowX: 'auto',
          },
          'pre code': {
            backgroundColor: 'transparent',
            padding: '0',
            color: theme('colors.lime'),
            fontSize: '0.9em',
          },

          // Blockquotes
          blockquote: {
            borderLeftColor: theme('colors.lime'),
            color: theme('colors.lime-dim'),
            fontStyle: 'italic',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            padding: '1rem',
            borderRadius: '0 0.5rem 0.5rem 0',
          },

          // Lists
          ul: {
            listStyleType: 'square',
          },
        },
      },
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
