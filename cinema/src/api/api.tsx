import { axiosInstance } from "./core";

type apiParamProps = {
  paramKeyword: string;
  pageParam: number;
};

export const getTopMovieList = async () => {
  const res = await axiosInstance.get(`movie/popular`);
  return res.data;
};

export const getHomePageMovieList = async ({ paramKeyword, pageParam }: apiParamProps) => {
  const res = await axiosInstance.get(`movie/${paramKeyword}?page=${pageParam}`);
  return res.data;
};
