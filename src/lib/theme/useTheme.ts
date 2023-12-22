import { useState, useEffect } from "react"
import { getCurrentTheme } from "./utils"

const useTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme())
  useEffect(() => {
    const observerCallback: MutationCallback = (
      mutationsList: MutationRecord[]
    ) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          setTheme(getCurrentTheme())
        }
      }
    }

    // Create an observer to watch for class changes on the <html> element
    setTheme(getCurrentTheme())
    const observer = new MutationObserver(observerCallback)
    observer.observe(document.documentElement, { attributes: true })

    // Cleanup function to disconnect the observer
    return () => observer.disconnect()
  }, [])

  return theme
}

export default useTheme
