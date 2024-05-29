import { useInfiniteQuery, UseInfiniteQueryResult } from "react-query";
import { useEffect, useRef, useCallback } from "react";
import { ApiResponse } from "../type/api-type";

const useInfiniteScrollQuery = ({
  queryKey,
  queryFn,
  getNextPageParam,
}: {
  queryKey: any[];
  queryFn: ({ pageParam }: { pageParam?: number }) => Promise<ApiResponse>;
  getNextPageParam: (lastPage: ApiResponse) => number | undefined;
}) => {
  const {
    data: movieList,
    fetchNextPage,
    isFetchingNextPage,
  }: UseInfiniteQueryResult<ApiResponse> = useInfiniteQuery({
    queryKey,
    queryFn,
    getNextPageParam,
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const element = observerRef.current;
    const option = { root: null, rootMargin: "20px", threshold: 1.0 };

    const observer = new IntersectionObserver(handleObserver, option);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver]);

  return { movieList, observerRef, isFetchingNextPage };
};

export default useInfiniteScrollQuery;
