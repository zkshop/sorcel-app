import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';


export default {
  input: 'src/index.ts', // Your main TypeScript file
  output: {
    file: './index.js', // Output bundle file with .mjs extension
    format: 'es', // ES module format
  },
  plugins: [
    json(),
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Compiles TypeScript
  ],
};