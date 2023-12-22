export const getCurrentTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light"

export const setInitialTheme = () => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  if (userPrefersDark) {
    document.documentElement.classList.add("dark")
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    document.documentElement.setAttribute("data-theme", "light")
  }
}

export const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.setAttribute("data-theme", "light")
    }
  } else {
    // If no saved theme, set theme based on system preference
    setInitialTheme()
  }
}
