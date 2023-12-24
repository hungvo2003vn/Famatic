import { API } from "../base";

export interface Plant {
  id: number;
  name: string;
}


const plantApi = API.injectEndpoints({
  endpoints: (build) => ({
    getPlant: build.query<Plant, string>({
      query: () => `plant`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetPlantQuery } = plantApi;