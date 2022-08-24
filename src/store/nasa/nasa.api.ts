import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IPicOfTheDay,
  IRover,
  Photo,
  RoverPhotoRes,
  RoverResponse,
} from "../../models/models";
import {
  IFullProject, IProject,
  Project,
  SearchProjectResponse,
} from "../../models/ProjectModels";

export const apiKey = "lSBSduqJZsO7iSkptn1hLax8QAFrkfIl0CWxOSfm";

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
          api_key: apiKey,
        },
      }),
    }),
    getRoverInfo: build.query<IRover, string>({
      query: (roverName) => ({
        url: `mars-photos/api/v1/rovers/${roverName}`,
        params: {
          api_key: apiKey,
        },
      }),
      transformResponse: (response: RoverResponse) => response.rover,
    }),
    getRoverPhotos: build.query<Photo[], any>({
      query: (rovParams) => ({
        url: `mars-photos/api/v1/rovers/${rovParams.name}/photos`,
        params: {
          earth_date: rovParams.value,
          page: rovParams.page,
          api_key: apiKey,
        },
      }),
      transformResponse: (response: RoverPhotoRes) => response.photos,
    }),
    searchProjects: build.query<Project[], string>({
      query: (search) => ({
        url: `techport/api/projects/search`,
        params: {
          searchQuery: search,
          api_key: apiKey,
        },
      }),
      transformResponse: (response: SearchProjectResponse) => response.projects,
    }),
    getProject: build.query<IProject, number>({
      query: (projectId) => ({
        url: `techport/api/projects/${projectId}`,
        params: {
          api_key: apiKey,
        },
      }),
      transformResponse: (response: IFullProject) => response.project,
    }),
  }),
});

export const {
  usePicOfTheDayQuery,
  useLazyGetRoverInfoQuery,
  useLazyGetRoverPhotosQuery,
  useSearchProjectsQuery,
  useLazyGetProjectQuery,
} = nasaApi;
