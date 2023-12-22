import ThemeSwitcher from "@/lib/theme/ThemeSwitcher"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const dimmingThreshold = 24

const Header = () => {
  const [dim, setDim] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setDim(window.scrollY > dimmingThreshold)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={clsx(
        "sticky top-0",
        "flex items-center justify-between",
        "h-[48px] bg-opacity-25 backdrop-blur-md duration-200",
        {
          "bg-black": dim,
        }
      )}
    >
      <div className="ml-2 hidden lg:flex">
        <h1 className="font-shadows-into-light text-3xl font-bold text-emerald-400">
          {"<Keibo/>"}
        </h1>
      </div>
      <div className="lg:hidden">
        <GiHamburgerMenu className="h-8 w-8" />
      </div>
      <h1 className="font-shadows-into-light text-3xl font-bold text-emerald-400 lg:hidden">
        {"<Keibo/>"}
      </h1>
      <div className="lg:hidden"></div>
      <div className="hidden place-content-end items-center gap-3 lg:flex">
        {/* <Lang /> */}
        <div className="h-6 w-[2px] bg-surface-500" />
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Header
