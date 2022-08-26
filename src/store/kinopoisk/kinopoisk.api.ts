import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {filterParams, FilmsResponse} from "../../models/FilmsModels";



export const kinopoiskApi = createApi({
  reducerPath: "kinopoisk/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech",
  }),
  endpoints: build => ({
      getSpaceFilms: build.query<FilmsResponse, filterParams>({
          query: (params)=> ({
              url: '/api/v2.2/films',
              headers: {
                  'X-API-KEY': 'f3743a5d-5a2d-4f7a-bb28-b6c46bc4c725',
                  'Content-Type': 'application/json',
              },
              params: {
                  genres: 22,
                  keyword: 'space',
                  page: params.currentPage,
                  type: params.categoryType,
                  order: params.sortType,
                  ratingFrom: 6,
                  ratingTo: 10,
              }
          })
      })
  })
});

export const {useGetSpaceFilmsQuery} = kinopoiskApi