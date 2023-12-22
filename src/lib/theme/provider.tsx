import { PropsWithChildren, useLayoutEffect } from "react"
import { loadSavedTheme } from "./utils"

type ThemeProviderProps = PropsWithChildren & {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useLayoutEffect(() => {
    loadSavedTheme()
  }, [])
  return <>{children}</>
}

export default ThemeProvider
