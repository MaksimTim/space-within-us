export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}

export interface IItem {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn?: any;
    nameOriginal: string;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk?: number;
    ratingImdb?: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface FilmsResponse {
    total: number;
    totalPages: number;
    items: IItem[];
}

export interface filterParams {
    categoryType: string,
    sortType: string,
    currentPage: number,
}