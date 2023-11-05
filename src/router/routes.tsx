import { RouteObject } from "react-router-dom"
import DefaultLayout from "../layouts/default/DefaultLayout"
import Home from "../pages/home/Home"
import Recommend from "../pages/recommend/Recommend"
import Profile from "../pages/profile/Profile"
import Friend from "../pages/friend/Friend"
import Follow from "../pages/follow/Follow"
import Channel from "../pages/channel/Channel"

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/",
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
        path: "profile/:userId",
        element: <Profile />
      },
      {
        path: "channel/:channelId",
        element: <Channel />
      }
    ]
  }
]
