// IMPORTS
import { lazy, createElement } from "react";
import { createSuspense } from "@/utils/suspenseCreator";
import { AppRoute } from "@/shared/types/route";
import AppLayout from "@/layouts/AppLayout";

const Auth = lazy(() => import("@/pages/Auth/Auth"));
const Home = lazy(() => import("@/pages/Home/Home"));
const Test = lazy(() => import("@/pages/Test/test"));
const Plans = lazy(() => import("@/screens/Plans/Plans"));
const BaseInfo = lazy(() => import("@/screens/BaseInfo/BaseInfo"));

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
      {
        id: 13,
        path: "/incidentor/plans",
        element: createSuspense(Plans),
        index: false,
      },
      {
        id: 14,
        path: "/incidentor/base-info",
        element: createSuspense(BaseInfo),
        index: false,
      },
    ],
  },
];
