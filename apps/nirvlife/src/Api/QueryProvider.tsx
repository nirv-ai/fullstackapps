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
      queryFn({ queryKey }) {
        const [firstKey, secondKey] = queryKey as string[];

        /**
         * return placeholder data based on some key (currently checking first key)
         * disables isLoading (i.e. it always returns true)
         * thus you need to manage isLoading imperatively at source
         * @see https://github.com/TanStack/query/issues/1753
         */
        switch (firstKey) {
          default: {
            console.info(
              `\n\n TODO: should return placeholder data for ${queryKey.toString()}`
            );
          }
        }
      },
      // @see https://tkdodo.eu/blog/react-query-render-optimizations
      enabled: true,
      retry: false,
      cacheTime: cacheTimeMaxAge,
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

const persistOptions = {
  persister,
  maxAge: cacheTimeMaxAge,
  hydrateOptions: {
    defaultOptions: {
      queries: { retry: false },
    },
  },
};

const onSuccess = () => {
  // resume mutations after initial restore from localStorage was successful
  queryClient
    .resumePausedMutations()
    .then(() => {
      queryClient.invalidateQueries().catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
};

/**
 * @see https://tanstack.com/query/latest/docs/react/plugins/persistQueryClient#persistqueryclientprovider
 */
export const QueryProvider = ({ Router }) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}
      onSuccess={onSuccess}
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
