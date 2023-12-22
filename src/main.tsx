import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/tailwind.css"
import "./styles/global.css"

import Root from "./routes/root"
import ErrorPage from "./routes/error-page"
import PageUno from "./routes/page-uno"
import PageDos from "./routes/page-dos"
import ThemeProvider from "./lib/theme/provider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    /**
     * If layout nesting is needed
     * element (<Root/> here) will need to specify in the jsx output
     * 'where' the children should be rendered, just like {children},
     * by instantiating <Outlet /> instead of {children}.
     * children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
       ],
     *
     */
  },
  {
    path: "uno",
    element: <PageUno />,
  },
  {
    path: "dos",
    element: <PageDos />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
