// IMPORTS
import { lazy, createElement } from "react";
import { createSuspense } from "@/utils/suspenseCreator";
import { AppRoute } from "@/shared/types/route";
import AppLayout from "@/layouts/AppLayout";

const Auth = lazy(() => import("@/pages/Auth/Auth"));
const Home = lazy(() => import("@/pages/Home/Home"));
const Test = lazy(() => import("@/pages/Test/test"));

export const ROUTES: AppRoute[] = [
  {
    id: 1,
    element: createElement(AppLayout),
    children: [
      {
        id: 10,
        path: "/incidentor/",
        element: createSuspense(Auth),
        index: true,
      },
      {
        id: 11,
        path: "/incidentor/home",
        element: createSuspense(Home),
        index: false,
      },
      {
        id: 12,
        path: "/incidentor/test",
        element: createSuspense(Test),
        index: false,
      },
    ],
  },
];
