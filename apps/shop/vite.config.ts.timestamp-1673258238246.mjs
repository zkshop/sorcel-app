// vite.config.ts
import { defineConfig } from "file:///Users/sinane/zkshop-app/node_modules/vite/dist/node/index.js";
import { createCommonConfig } from "file:///Users/sinane/zkshop-app/packages/vite-config/vite.config.common.js";
var __vite_injected_original_dirname = "/Users/sinane/zkshop-app/apps/shop";
var envVars = [
  "APP_ID",
  "PAPER_CLIENT_ID",
  "PUBLIC_MAGIC_PUBLISHABLE_KEY",
  "PUBLIC_FUNCTIONS_URL",
  "PUBLIC_HASURA_API_URL",
  "SECRET_ALCHEMY",
  "SECRET_HASURA",
  "SECRET_MAGIC",
  "PUBLIC_STRIPE_PUBLISHABLE_KEY",
  "SECRET_POAP"
];
var dirname = __vite_injected_original_dirname;
var commonConfig = createCommonConfig({ envVars, dirname });
var vite_config_default = defineConfig(({ command, mode }) => {
  var _a;
  return {
    ...commonConfig,
    server: {
      port: 4e3
    },
    build: {
      ...commonConfig.build,
      rollupOptions: {
        ...(_a = commonConfig.build) == null ? void 0 : _a.rollupOptions,
        output: {
          inlineDynamicImports: true,
          entryFileNames: "[name].js",
          assetFileNames: "[name].[ext]"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2luYW5lL3prc2hvcC1hcHAvYXBwcy9zaG9wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2luYW5lL3prc2hvcC1hcHAvYXBwcy9zaG9wL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zaW5hbmUvemtzaG9wLWFwcC9hcHBzL3Nob3Avdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGNyZWF0ZUNvbW1vbkNvbmZpZyB9IGZyb20gJ0Azc2hvcC92aXRlLWNvbmZpZy92aXRlLmNvbmZpZy5jb21tb24uanMnO1xuXG5jb25zdCBlbnZWYXJzID0gW1xuICAnQVBQX0lEJyxcbiAgJ1BBUEVSX0NMSUVOVF9JRCcsXG4gICdQVUJMSUNfTUFHSUNfUFVCTElTSEFCTEVfS0VZJyxcbiAgJ1BVQkxJQ19GVU5DVElPTlNfVVJMJyxcbiAgJ1BVQkxJQ19IQVNVUkFfQVBJX1VSTCcsXG4gICdTRUNSRVRfQUxDSEVNWScsXG4gICdTRUNSRVRfSEFTVVJBJyxcbiAgJ1NFQ1JFVF9NQUdJQycsXG4gICdQVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWScsXG4gICdTRUNSRVRfUE9BUCcsXG5dO1xuXG5jb25zdCBkaXJuYW1lID0gX19kaXJuYW1lO1xuXG5jb25zdCBjb21tb25Db25maWcgPSBjcmVhdGVDb21tb25Db25maWcoeyBlbnZWYXJzLCBkaXJuYW1lIH0pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiAoe1xuICAuLi5jb21tb25Db25maWcsXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDQwMDAsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgLi4uY29tbW9uQ29uZmlnLmJ1aWxkLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC4uLmNvbW1vbkNvbmZpZy5idWlsZD8ucm9sbHVwT3B0aW9ucyxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBpbmxpbmVEeW5hbWljSW1wb3J0czogdHJ1ZSxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tuYW1lXS5bZXh0XScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVMsb0JBQW9CO0FBQ3JULFNBQVMsMEJBQTBCO0FBRG5DLElBQU0sbUNBQW1DO0FBR3pDLElBQU0sVUFBVTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUVBLElBQU0sVUFBVTtBQUVoQixJQUFNLGVBQWUsbUJBQW1CLEVBQUUsU0FBUyxRQUFRLENBQUM7QUFHNUQsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBRztBQXJCaEQ7QUFxQm9EO0FBQUEsSUFDbEQsR0FBRztBQUFBLElBQ0gsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLEdBQUcsYUFBYTtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxRQUNiLElBQUcsa0JBQWEsVUFBYixtQkFBb0I7QUFBQSxRQUN2QixRQUFRO0FBQUEsVUFDTixzQkFBc0I7QUFBQSxVQUN0QixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLENBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
