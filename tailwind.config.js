/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{html,js}',
        './index.html',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: {
                    accent:   '#dc2626',

                    first:    '#52525B',
                    second:   '#71717A',
                    third:    '#A1A1AA',

                    backdrop: '#F4F4F5',
                    box:      '#E4E4E7',
                },
                dark: {
                    accent:   '#ef4444',

                    first:    '#94A3B8',
                    second:   '#64748B',
                    third:    '#334155',

                    backdrop: '#0F172A',
                    box:      '#1E293B',
                }
            }
        }
    },
    safelist: [
        'text-light-accent',
        'text-dark-accent',
    ],
    plugins: [],
}