 import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,          // data fresh for 1 min
      gcTime: 10 * 60_000,        // cache kept 10 min
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
