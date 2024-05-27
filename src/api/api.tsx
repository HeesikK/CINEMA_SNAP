import { axiosInstance } from "./core";

type apiParamProps = {
  paramKeyword?: string;
  pageParam?: number;
  id?: string;
};

export const getTopMovieList = async () => {
  const res = await axiosInstance.get(`movie/popular`);
  return res.data;
};

export const getHomePageMovieList = async ({ paramKeyword, pageParam }: apiParamProps) => {
  const res = await axiosInstance.get(`movie/${paramKeyword}?page=${pageParam}`);
  return res.data;
};

export const getDetailMovie = async (id: string): Promise<any> => {
  const res = await axiosInstance.get(`movie/${id}`);
  return res.data;
};

export const getReviewMovie = async (id: string): Promise<any> => {
  const res = await axiosInstance.get(`movie/${id}/reviews`);
  return res.data;
};

export const getSimilarMovie = async ({ id, pageParam = 1 }: apiParamProps): Promise<any> => {
  const res = await axiosInstance.get(`movie/${id}/similar?page=${pageParam}`);
  return res.data;
};

export const getVideoMovie = async (id: string): Promise<any> => {
  const res = await axiosInstance.get(`movie/${id}/videos`);
  return res.data;
};

export const getSearchMovie = async ({ paramKeyword, pageParam = 1 }: apiParamProps): Promise<any> => {
  const res = await axiosInstance.get(`search/movie?query=${paramKeyword}&page=${pageParam}`);
  return res.data;
};
