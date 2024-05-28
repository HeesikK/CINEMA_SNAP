import { PartialMovie } from "../type/movie-type";
import { axiosInstance } from "./core";

export interface ApiResponse {
  page: number;
  total_pages: number;
  results: PartialMovie[];
}

export const getTopMovieList = async () => {
  const res = await axiosInstance.get(`movie/popular`);
  return res.data;
};

export const getHomePageMovieList = async ({ paramKeyword, pageParam = 1 }: { paramKeyword: string; pageParam?: number }): Promise<ApiResponse> => {
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

export const getSimilarMovie = async ({ id, pageParam = 1 }: { id: number; pageParam?: number }): Promise<ApiResponse> => {
  const res = await axiosInstance.get(`movie/${id}/similar?page=${pageParam}`);
  return res.data;
};

export const getVideoMovie = async (id: string): Promise<any> => {
  const res = await axiosInstance.get(`movie/${id}/videos`);
  return res.data;
};

export const getSearchMovie = async ({ paramKeyword, pageParam = 1 }: { paramKeyword: string; pageParam?: number }): Promise<ApiResponse> => {
  const res = await axiosInstance.get(`search/movie?query=${paramKeyword}&page=${pageParam}`);
  return res.data;
};
