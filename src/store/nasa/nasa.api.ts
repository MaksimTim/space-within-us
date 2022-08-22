import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {IPicOfTheDay, IRover, Photo, RoverPhotoRes, RoverResponse} from "../../models/models";

export const apiKey = 'lSBSduqJZsO7iSkptn1hLax8QAFrkfIl0CWxOSfm'

export const nasaApi = createApi({
  reducerPath: "nasa/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nasa.gov/",
  }),
  endpoints: (build) => ({
    picOfTheDay: build.query<IPicOfTheDay, void>({
      query: () => ({
        url: "planetary/apod",
        params: {
          api_key: apiKey
        }
      }),
    }),
    getRoverInfo: build.query<IRover, string>({
      query: (roverName) => ({
        url: `mars-photos/api/v1/rovers/${roverName}`,
        params: {
          api_key: apiKey,
        }
      }),
      transformResponse: (response: RoverResponse) => response.rover
    }),
    getRoverPhotos: build.query<Photo[], any>({
      query: (rovParams) => ({
        url: `mars-photos/api/v1/rovers/${rovParams.name}/photos`,
        params: {
          earth_date: rovParams.value,
          api_key: apiKey
        }
      }),
      transformResponse: (response: RoverPhotoRes) => response.photos
    }),
  }),
});

export const { usePicOfTheDayQuery, useGetRoverInfoQuery, useGetRoverPhotosQuery } = nasaApi;
