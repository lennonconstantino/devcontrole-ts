/** @type {import('tailwindcss').Config} */
export const content = [
    // Se você está usando App Router (Next.js 13+)
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Se você está usando Pages Router (Next.js 12 e anterior)
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    // Outros diretórios comuns
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',

    // Arquivo raiz (se aplicável)
    './*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {},
};
export const plugins = [];