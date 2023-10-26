import { RouteObject } from "react-router-dom"
import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"
import DefaultLayout from "../layouts/DefaultLayout"
import Recommend from "../pages/Recommend"

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
      },
      {
        path: "/recommend",
        element: <Recommend />
      }
    ]
  }
]
