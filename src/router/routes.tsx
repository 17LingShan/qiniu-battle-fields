import { RouteObject } from "react-router-dom"
import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "profile",
    element: <Profile />
  }
]
