import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { QueryClient } from "@tanstack/react-query";
import type { FC } from "react";

const router = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundScreen />,
      children: [
        {
          // pathless route enables NotFound to load within Outlet
          errorElement: <NotFoundScreen />,
          children: [
            {
              index: true,
              element: <AppLandingScreen />,
            },
            // one-off routes
            {
              path: "learn", // all about NIRV.ai
              element: <LearnScreen />,
            },
            {
              path: "join", // signup
              action: RouteActionPipeline(queryClient),
              element: <PlayerJoinScreen />,
            },
            {
              path: "play", // login
              element: <PlayerPlayScreen />,
              action: RouteActionPipeline(queryClient),
            },

            // player related
            {
              path: "players",
              element: <PlayersRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      path: ":callsign", // a specific player
                      loader: playerLoaders.loadPlayer(queryClient),
                      element: <PlayerProfileScreen />,
                      action: RouteActionPipeline(queryClient),
                      id: D.PLAYER_KEY,
                    },
                  ],
                },
              ],
            },
            // PATHS
            {
              path: "paths",
              element: <PathsRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      index: true,
                      id: D.PATHS_KEY, // list of paths
                      loader: pathLoaders.loadPaths(queryClient),
                      element: <PathsScreen />,
                      action: RouteActionPipeline(queryClient),
                    },
                    {
                      path: ":pathName", // a specific path
                      loader: pathLoaders.loadPath(queryClient),
                      id: D.PATH_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <PathScreen />,
                    },
                    {
                      path: ":pathName/strategy/:strategyName", // a specific path
                      loader: pathStrategyLoaders.loadPathStrategy(queryClient),
                      id: D.PATH_STRATEGY_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <PathStrategyScreen />,
                    },
                  ],
                },
              ],
            },

            // ACTIONS
            {
              path: "actions",
              element: <ActionsRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      index: true,
                      id: D.ACTIONS_KEY, // list of actions
                      loader: actionLoaders.loadActions(queryClient),
                      element: <ActionsScreen />,
                      action: RouteActionPipeline(queryClient),
                    },
                    {
                      path: ":actionName", // a specific action
                      loader: actionLoaders.loadAction(queryClient),
                      id: D.ACTION_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <ActionScreen />,
                    },
                  ],
                },
              ],
            },

            // SKILLS
            {
              path: "skills",
              element: <SkillsRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      index: true,
                      id: D.SKILLS_KEY, // list of skills
                      loader: skillLoaders.loadSkills(queryClient),
                      element: <SkillsScreen />,
                      action: RouteActionPipeline(queryClient),
                    },
                    {
                      path: ":skillName", // a specific skill
                      loader: skillLoaders.loadSkill(queryClient),
                      id: D.SKILL_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <SkillScreen />,
                    },
                  ],
                },
              ],
            },

            // ACADEMIAS
            {
              path: "academias",
              element: <AcademiasRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      index: true,
                      id: D.ACADEMIAS_KEY, // list of academias
                      // need to set filters in Screen
                      loader: academiaLoaders.loadAcademias(queryClient),
                      element: <AcademiasScreen />,
                      action: RouteActionPipeline(queryClient),
                    },
                    {
                      path: ":academiaName", // a specific academia
                      loader: academiaLoaders.loadAcademia(queryClient),
                      id: D.ACADEMIA_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <AcademiaScreen />,
                    },
                  ],
                },
              ],
            },

            // disciplines
            {
              path: "disciplines",
              element: <DisciplinesRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      index: true,
                      id: D.DISCIPLINES_KEY, // list of disciplines
                      loader: disciplineLoaders.loadDisciplines(queryClient),
                      element: <DisciplinesScreen />,
                      action: RouteActionPipeline(queryClient),
                    },
                    {
                      path: ":disciplineName", // a specific discipline
                      loader: disciplineLoaders.loadDiscipline(queryClient),
                      id: D.DISCIPLINE_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <DisciplineScreen />,
                    },
                  ],
                },
              ],
            },

            // incentives
            {
              path: "incentives",
              element: <IncentivesRouter />,
              errorElement: <NotFoundScreen />,
              children: [
                {
                  // pathless route enables NotFound to load within Outlet
                  errorElement: <NotFoundScreen />,
                  children: [
                    {
                      index: true,
                      id: D.INCENTIVES_KEY, // list of incentives
                      loader: incentiveLoaders.loadIncentives(queryClient),
                      element: <IncentivesScreen />,
                      action: RouteActionPipeline(queryClient),
                    },
                    {
                      path: ":incentiveName", // a specific incentive
                      loader: incentiveLoaders.loadIncentive(queryClient),
                      id: D.INCENTIVE_KEY,
                      action: RouteActionPipeline(queryClient),
                      element: <IncentiveScreen />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
};

export interface RouterInterface {
  queryClient: QueryClient;
}
export const Router: FC<RouterInterface> = ({ queryClient }) => (
  <RouterProvider router={router(queryClient)} />
);
