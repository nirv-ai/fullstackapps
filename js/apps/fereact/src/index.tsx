import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { Router } from "Router";
import { reportWebVitals } from "./reportWebVitals";
import { DataKeys as K, ActionTypes as A } from "@nirvai-web/data";

const root = createRoot(document.getElementById("root")!);
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * return placeholder data, maps ACTION_TYPES and DATA_KEYS to locations in cache based on queryKey
       * this will cause isLoading to always be true
       * i.e. why show placeholder data if you want to show loading?
       * ^ thus you need to manage isLoading imperatively at source
       * @see https://github.com/TanStack/query/issues/1753
       * @param param0 {Object} poop queryFn props
       * @param param0 {string[]} poop.queryKey see tanstack docs
       * @returns (placeholder) data from cache
       */
      queryFn: async ({ queryKey }) => {
        await Promise.resolve();
        const [firstKey, secondKey] = queryKey as string[];

        switch (firstKey) {
          // NEVER SET DEFAULTS FOR THESE

          // defaults
          // skill defaults
          case A.SKILL_CREATE:
          case A.SKILL_EDIT:
          case K.SKILL_KEY:
          case A.ACTION_CREATE:
          case A.ACTION_EDIT:
          case A.INCENTIVE_CREATE:
          case A.INCENTIVE_EDIT:
          case K.INCENTIVE_KEY:
          case K.ACTION_KEY:
          case A.DISCIPLINE_CREATE:
          case A.DISCIPLINE_EDIT:
          case K.DISCIPLINE_KEY:
          case A.ACADEMIA_CREATE:
          case A.ACADEMIA_EDIT:
          case A.PATH_STRATEGY_CREATE:
          case A.PATH_STRATEGY_EDIT:
          case A.PATH_STRATEGY_JOIN:
          case A.PATH_STRATEGY_LEAVE:
          case K.PATH_STRATEGY_KEY:
          case A.PATH_EDIT:
          case A.PATH_LEAVE:
          case A.PATH_JOIN:
          case A.PATH_CREATE:
          case K.PATH_KEY:
          case K.ACADEMIA_KEY:
          case A.PLAYER_EDIT:
          case A.PLAYER_JOIN:
          case A.PLAYER_PLAY:
            return { item: {} };
          case A.SKILLS_SEARCH:
          case K.SKILLS_KEY:
          case A.ACTIONS_SEARCH:
          case K.ACTIONS_KEY:
          case A.INCENTIVES_SEARCH:
          case K.INCENTIVES_KEY:
          case A.DISCIPLINES_SEARCH:
          case A.ACADEMIAS_SEARCH:
          case K.ACADEMIAS_KEY:
          case A.PATHS_SEARCH:
          case K.PATHS_KEY:
          case K.DISCIPLINES_KEY:
            return { items: [] };
          // add remove defaults
          case A.PATH_ACADEMIAS_ADD_REMOVE:
          case A.PATH_ACTIONS_ADD_REMOVE:
          case A.PATH_DISCIPLINES_ADD_REMOVE:
          case A.PATH_INCENTIVES_ADD_REMOVE:
          case A.PATH_PATHS_ADD_REMOVE:
          case A.PATH_SKILLS_ADD_REMOVE:
          case A.PATH_STRATEGY_ACADEMIAS_ADD_REMOVE:
          case A.PATH_STRATEGY_ACTIONS_ADD_REMOVE:
          case A.PATH_STRATEGY_DISCIPLINES_ADD_REMOVE:
          case A.PATH_STRATEGY_INCENTIVES_ADD_REMOVE:
          case A.PATH_STRATEGY_SKILLS_ADD_REMOVE:
            return { added: [], removed: [] };

          // player defaults
          case K.PLAYER_AUTH:
            return "";
          case K.PLAYER_KEY: {
            // dont return placeholder data unless a key is set
            // check useAuthNz & playerLoader: we redirect to play screen
            if (!Boolean(secondKey)) break;
            return { item: {} };
          }
          default: {
            console.info(
              `\n\n TODO: should we set default return for ${queryKey.toString()}`
            );
          }
        }
      },
      // @see https://tkdodo.eu/blog/react-query-render-optimizations
      enabled: true,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 2,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
      retryOnMount: false,
      /**
       * '"data" | "error" | "isError" | "isLoading" | "isLoadingError" |
       * "isRefetchError" | "isSuccess" | "status" | "fetchNextPage" |
       *  "fetchPreviousPage" | "hasNextPage" | "hasPreviousPage" | "isFetchingNextPage" |
       *  "isFetchingPreviousPage" | "dataUpdatedAt" | "errorUpdatedAt" |
       * "failureCount" | "failureReason" | "errorUpdateCount" | "isFetched" |
       * "isFetchedAfterMount" | "isFetching" | "isInitialLoading" | "isPaused" |
       * "isPlaceholderData" | "isPreviousData" | "isRefetching" | "isStale" | "refetch" |
       * "remove" | "fetchStatus"
       */
      // DONT fkn change this else fear the staleness non rerender bugs
      notifyOnChangeProps: "all",
      onError: (err) => console.error("query err", err),
      // onSuccess: (data) => console.info("\n\n on success data", data),
      useErrorBoundary: true,
    },
  },
});

declare global {
  interface Window {
    queryClient: QueryClient;
  }
}

if (typeof window !== "undefined") {
  window.queryClient = queryClient;
}

const persister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "nirvai",
});
root.render(
  <StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
        maxAge: 1000 * 60 * 60 * 24,
        hydrateOptions: {
          defaultOptions: {
            queries: { retry: false },
          },
        },
      }}
      onSuccess={() => {
        // resume mutations after initial restore from localStorage was successful
        queryClient
          .resumePausedMutations()
          .then(() => {
            queryClient.invalidateQueries().catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
      }}
    >
      <Router queryClient={queryClient} />
      {/* @see https://tanstack.com/query/v4/docs/devtools */}
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </PersistQueryClientProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
