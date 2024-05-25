import { axiosInstance } from "./core";

export const getTopMovieList = async () => {
  const res = await axiosInstance.get(`movie/popular`);
  return res.data;
};

export const getHomePageMovieList = async (pageParam: number) => {
  const res = await axiosInstance.get(`discover/movie?page=${pageParam}`);
  return res.data;
};
