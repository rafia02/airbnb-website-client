import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./conponents/Home/Home"
import HotelDetails from "./conponents/HotelDetails"


function App({ children }) {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout></Layout>, children: [
        { path: "/", element: <Home></Home> },
        { path: "/hotel/:id", loader: ({ params }) => fetch(`https://room-booking-server.vercel.app/hotel/${params.id}`), element: <HotelDetails></HotelDetails> },
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
