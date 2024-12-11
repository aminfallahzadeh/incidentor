// IMPORTS
import { lazy } from "react";
import { createSuspense } from "@/utils/suspenseCreator";
import { AppRoute } from "@/shared/types/route";

const AppLayout = lazy(() => import("@/layouts/AppLayout"));
const Auth = lazy(() => import("@/pages/Auth/Auth"));
const Home = lazy(() => import("@/pages/Home/Home"));

export const ROUTES: AppRoute[] = [
  {
    id: 1,
    element: createSuspense(AppLayout),
    children: [
      {
        id: 2,
        path: "/incidentor/",
        element: createSuspense(Auth),
        index: true,
      },
      {
        id: 3,
        path: "/incidentor/home",
        element: createSuspense(Home),
        index: false,
      },
    ],
  },
];
