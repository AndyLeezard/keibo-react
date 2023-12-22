import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from "path"
import { execSync } from "child_process"

// const __DEV__ = process.env.NODE_ENV === "development"

const commitHash = execSync("git rev-parse --short HEAD").toString().trim()
const commitDateCommand =
  'git log -1 --format=%cd --date=format:"%H:%M %d-%B-%Y"'
const commitDateTime = execSync(commitDateCommand).toString().trim()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __COMMIT_DATETIME__: JSON.stringify(commitDateTime),
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
