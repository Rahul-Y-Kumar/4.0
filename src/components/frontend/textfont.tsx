import { Orbitron, Poppins } from 'next/font/google';

// Configure the main heading font (Orbitron)
export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Include multiple weights
  variable: '--font-orbitron', // CSS variable for easy use
});

// Configure the primary/body font (Poppins)
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-poppins',
});
