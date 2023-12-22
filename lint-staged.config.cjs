module.exports = {
  "*.json": [
    "prettier --write",
  ],
  "*.{js,jsx}": [
    "prettier --write",
    "eslint --cache --fix",
  ],
  "*.{ts,tsx}": [
    "prettier --write",
    () => "tsc --skipLibCheck --noEmit", 
    "eslint --cache --fix",
  ],
}
