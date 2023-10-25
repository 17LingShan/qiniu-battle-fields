import { RouteObject } from "react-router-dom"
import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"
import DefaultLayout from "../layouts/DefaultLayout"

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
]
