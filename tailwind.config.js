/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces
        background: 'var(--color-bg)',
        section:    'var(--color-section)',
        brand:      'var(--color-brand)',
        card:       'var(--color-card)',
        logos:      'var(--color-logos)',      // LogosBar
        surface:    'var(--color-surface, var(--color-bg))', // optional alias if used

        // Text
        ink:        'var(--color-ink)',
        'ink-90':   'var(--color-ink-90)',
        'ink-80':   'var(--color-ink-80)',
        'ink-70':   'var(--color-ink-70)',

        // Cards (light)
        'card-border':     'var(--color-card-border)',
        'on-card':         'var(--color-on-card)',
        'on-card-muted':   'var(--color-on-card-muted)',

        // Cards (alt / brand-tinted)
        'card-alt':        'var(--color-card-alt)',
        'card-alt-border': 'var(--color-card-alt-border)',

        // Form fields / placeholders
        'field-border': 'var(--color-field-border)',
        placeholder:    'var(--color-placeholder)',

        // Lines / overlays
        'line-subtle':  'var(--color-line-subtle)',
        'line-strong':  'var(--color-line-strong)',
        scrim:          'var(--color-scrim)',
        'scrim-weak':   'var(--color-scrim-weak)',
        'scrim-strong': 'var(--color-scrim-strong)',
      },
      fontFamily: {
        primary: [
          "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto",
          "Helvetica Neue","Arial","Noto Sans","Liberation Sans",
          "sans-serif","Apple Color Emoji","Segoe UI Emoji",
          "Segoe UI Symbol","Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
