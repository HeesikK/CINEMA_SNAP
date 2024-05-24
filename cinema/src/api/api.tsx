import { axiosInstance } from "./core";

export const getHomePageMovieList = async (pageParam: number) => {
  const res = await axiosInstance.get(`discover/movie?page=${pageParam}`);
  return res.data;
};
