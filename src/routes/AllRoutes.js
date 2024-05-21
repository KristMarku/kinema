import { Routes, Route } from "react-router-dom"
import { PageNotFound, MovieDetail, Search, MovieList } from "../pages"

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}></Route>
        <Route path="movie/:id" element={<MovieDetail/>}></Route>
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}></Route>
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>}></Route>
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}></Route>
        <Route path="search" element={<Search apiPath="search/movie"/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>

      </Routes>
    </main>
  )
}

