import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {IPicOfTheDay, RoverResponse} from "../../models/models";

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
    curiosityInfo: build.query<RoverResponse, string>({
      query: (earthDate: string) => ({
        url: `mars-photos/api/v1/rovers/curiosity`,
        params: {
          earth_date: earthDate,
          api_key: apiKey,
        }
      }),
    }),
  }),
});

export const { usePicOfTheDayQuery, useCuriosityInfoQuery } = nasaApi;
