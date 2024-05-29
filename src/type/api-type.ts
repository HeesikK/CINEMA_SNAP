import { PartialMovie } from "./movie-type";

export type ApiResponse = {
  page: number;
  total_pages: number;
  results: PartialMovie[];
};
