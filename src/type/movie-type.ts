import React from "react";

export type Movie = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
};

export type PartialMovie = Partial<Movie>;

export type DetailMovieProps = {
  detail: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Review = {
  author: string;
  content: string;
};

export type ReviewData = {
  results: Review[];
};

export type ModalProps = {
  detail: string;
  setIsShowYoutubeModal: React.Dispatch<React.SetStateAction<boolean>>;
};
