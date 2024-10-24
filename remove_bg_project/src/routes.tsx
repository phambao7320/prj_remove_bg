import { PATH } from "@constants/path";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { HomePage, OfferPage, ResultPage } from "./pages";
import PrimaryLayout from "./layouts/primary-layout";

const ErrorFallback = ({ error }: { error?: Error }) => (
  <div>{`Page Error`}</div>
);

type ProtectedRouteProps = {
  children: JSX.Element;
  fallbackUrl?: string;
  allowedRoles?: string[];
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallbackUrl = PATH.HOME,
  allowedRoles = [],
}: ProtectedRouteProps) => {
  //   const isAuthenticated = userSession.isAuthenticated();
  //   const userProfile = userSession.getUserProfile();
  //   const isNotAllowedRole =
  //     userProfile &&
  //     allowedRoles?.length > 0 &&
  //     !allowedRoles.includes(userProfile?.role);
  //   if (!isAuthenticated) {
  //     return <Navigate to={fallbackUrl} />;
  //   }

  //   if (isNotAllowedRole) {
  //     return <Navigate to="/403" />;
  //   }

  return children;
};

const getRoutes = (routes: RouteObject[]) => {
  return routes.map((route) => ({
    ...route,
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {route.element}
      </ErrorBoundary>
    ),
  }));
};

const router = createBrowserRouter(
  getRoutes([
    {
      path: PATH.HOME,
      element: <PrimaryLayout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: PATH.RESULT,
          element: (
            <ProtectedRoute>
              <ResultPage />
            </ProtectedRoute>
          ),
        },
        {
          path: PATH.OFFFER,
          element: (
            <ProtectedRoute>
              <OfferPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <div>Not found</div>,
    },
  ])
);

export default router;
