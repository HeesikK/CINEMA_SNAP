import { axiosInstance } from "./core";

export const getHomePageMovieList = async () => {
  const res = await axiosInstance.get(`discover/movie`);
  return res.data;
};
