const esbuildPluginTsc = require('esbuild-plugin-tsc');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { TsconfigPathsPlugin } = require('@esbuild-plugins/tsconfig-paths');
const fs = require('fs');

function createBuildSettings(options) {
  const tsconfigRaw = fs.readFileSync('./tsconfig.json', 'utf8');
  const tsconfig = JSON.parse(tsconfigRaw);
  console.log('tsconfig!', tsconfig);
  return {
    entryPoints: ['src/index.ts'],
    outfile: 'index.cjs',
    format: 'cjs', // Set the format to CommonJS
    bundle: true,
    // external: ['./node_modules/*'], // Avoid bundling node_modules
    plugins: [
      esbuildPluginTsc({
        force: true
      }),
      nodeExternalsPlugin(),
      TsconfigPathsPlugin({ tsconfig })
    ],
    ...options
  };
}

module.exports = { createBuildSettings };