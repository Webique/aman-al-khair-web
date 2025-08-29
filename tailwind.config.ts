import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				english: ['Poppins', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				arabic: ['Noto Kufi Arabic', 'Noto Sans Arabic', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					blue: 'hsl(var(--primary-blue))',
					green: 'hsl(var(--primary-green))',
					cream: 'hsl(var(--primary-cream))',
					dark: 'hsl(var(--primary-dark))',
					blush: 'hsl(var(--primary-blush))',
					beige: 'hsl(var(--primary-beige))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'soft-gray': 'hsl(var(--soft-gray))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-cta': 'var(--gradient-cta)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'navbar': 'var(--shadow-navbar)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			// RTL-specific utilities
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			},
			// RTL-aware positioning
			inset: {
				'1/10': '10%',
				'2/10': '20%',
				'3/10': '30%',
				'4/10': '40%',
				'5/10': '50%',
				'6/10': '60%',
				'7/10': '70%',
				'8/10': '80%',
				'9/10': '90%',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Custom RTL plugin
		function({ addUtilities, theme }) {
			const rtlUtilities = {
				'.rtl-text-right': {
					'[dir="rtl"] &': {
						'text-align': 'right'
					}
				},
				'.rtl-text-left': {
					'[dir="rtl"] &': {
						'text-align': 'left'
					}
				},
				'.rtl-float-right': {
					'[dir="rtl"] &': {
						'float': 'right'
					}
				},
				'.rtl-float-left': {
					'[dir="rtl"] &': {
						'float': 'left'
					}
				},
				'.rtl-margin-auto': {
					'[dir="rtl"] &': {
						'margin-left': 'auto',
						'margin-right': '0'
					}
				}
			};
			addUtilities(rtlUtilities);
		}
	],
} satisfies Config;
