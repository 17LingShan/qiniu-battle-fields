import { RouteObject } from "react-router-dom"
import DefaultLayout from "../layouts/default/DefaultLayout"
import Home from "../pages/home/Home"
import Recommend from "../pages/recommend/Recommend"
import Profile from "../pages/profile/Profile"
import Friend from "../pages/friend/Friend"
import Follow from "../pages/follow/Follow"
import ChannelLayout from "../layouts/channel/ChannelLayout"

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/recommend",
        element: <Recommend />
      },
      {
        path: "/friend",
        element: <Friend />
      },
      {
        path: "/follow",
        element: <Follow />
      },
      {
        element: <ChannelLayout />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
]
