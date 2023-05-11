import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { APP_KEY } from "../constants"; // TODO(noah): shouldnt need any relative imports

const inHours = 24;
const cacheTimeMaxAge = 1000 * 60 * 60 * inHours;

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
      cacheTime: 1,
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

/**
 * required since we automatically subscribe & restore the query client
 * outside of the a components lifecycle
 * A: syncs to reacts component lifeycle
 * B: pauses queries until cache has been restored
 */
const persister = createSyncStoragePersister({
  storage: window.localStorage,
  key: APP_KEY,
});

/**
 * @see https://tanstack.com/query/latest/docs/react/plugins/persistQueryClient#persistqueryclientprovider
 */
export const QueryProvider = ({ Router }) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
        maxAge: cacheTimeMaxAge,
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
      <Router key="router" queryClient={queryClient} />
      {/* @see https://tanstack.com/query/v4/docs/devtools */}
      <ReactQueryDevtools
        key="devtools"
        initialIsOpen={false}
        position="top-right"
      />
    </PersistQueryClientProvider>
  );
};
