import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./conponents/Home/Home"


function App({ children }) {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout></Layout>, children: [
        { path: "/", element: <Home></Home> }
      ]
    }
  ])

  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  )
}

export default App
