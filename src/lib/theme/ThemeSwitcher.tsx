import clsx from "clsx"
import styles from "./ThemeSwitcher.module.css"
import useTheme from "./useTheme"

type ThemeSwitcherProps = {
  width?: number
  height?: number
}

const ThemeSwitcher = ({ width = 24, height = 24 }: ThemeSwitcherProps) => {
  const current_theme = useTheme()
  const is_light_mode = current_theme === "light"
  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark")
    const newTheme = isDarkMode ? "dark" : "light"
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }
  return (
    <button onClick={() => toggleTheme()}>
      <svg
        className={styles.theme_btn}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          pathLength={1}
          className={clsx(styles.moon, is_light_mode ? "opacity-0" : "")}
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          strokeDasharray={is_light_mode ? "0px 1px" : "1px 1px"}
        />
        <circle
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          cx={12}
          cy={12}
          r={5}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1="12"
          y1={1}
          x2={12}
          y2={3}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={12}
          y1={21}
          x2={12}
          y2={23}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={4.22}
          y1={4.22}
          x2={5.64}
          y2={5.64}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={18.36}
          y1={18.36}
          x2={19.78}
          y2={19.78}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={1}
          y1={12}
          x2={3}
          y2={12}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={21}
          y1={12}
          x2={23}
          y2={12}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={4.22}
          y1={19.78}
          x2={5.64}
          y2={18.36}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
        <line
          pathLength={1}
          className={clsx(styles.sun, is_light_mode ? "" : "opacity-0")}
          x1={18.36}
          y1={5.64}
          x2={19.78}
          y2={4.22}
          strokeDasharray={is_light_mode ? "1px 1px" : "0px 1px"}
        />
      </svg>
    </button>
  )
}

export default ThemeSwitcher
