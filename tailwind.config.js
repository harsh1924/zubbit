const {heroui} = require('@heroui/theme');
// tailwind.config.js
  plugins: [heroui()],
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|card|divider|input|ripple|spinner|form).js"
],
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/@heroui/theme/dist/components/(card|divider|ripple).js"
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [heroui()];