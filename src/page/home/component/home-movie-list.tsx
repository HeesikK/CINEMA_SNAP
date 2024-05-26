import React, { useEffect, useState } from "react";
import { getHomePageMovieList } from "../../../api/api";

const HomePageMovieList = () => {
  const categories = ["now_playing", "popular", "top_rated", "upcoming"];
  const [allMovies, setAllMovies] = useState([[], [], [], []]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const res = await Promise.all(categories.map((category) => getHomePageMovieList({ paramKeyword: category, pageParam: 1 })));
      const movies = res.map((res) => res.results.slice(0, 4));
      setAllMovies(movies);
    };

    fetchAllMovies();
  }, []);

  console.log(allMovies);

  return <></>;
};

export default HomePageMovieList;
