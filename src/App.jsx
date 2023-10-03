import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./conponents/Home/Home"
import HotelDetails from "./conponents/HotelDetails"
import SearchPage from "./conponents/SearchPage"
import FilterPage from "./conponents/FilterPage"


function App({ children }) {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout></Layout>, children: [
        { path: "/", element: <Home></Home> },
        { path: "/hotel/:id", loader: ({ params }) => fetch(`https://room-booking-server.vercel.app/hotel/${params.id}`), element: <HotelDetails></HotelDetails> },
        { path: "/search/hotel", loader: () => fetch(`https://room-booking-server.vercel.app/hotels`), element: <SearchPage></SearchPage> },
        { path: "/filter/hotel", loader: () => fetch(`https://room-booking-server.vercel.app/hotels`), element: <FilterPage></FilterPage> },
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
