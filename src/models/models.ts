export interface IPicOfTheDay {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export interface Camera {
    name: string;
    full_name: string;
}

export interface IRover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Camera[];
}

export interface RoverResponse {
    rover: IRover;
}

// заготовленный массив названий, для запросов
export interface IRoverObj {
    name: string;
    image: string;
}

// типы при запросе фото марсоходов
export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

export interface RoverPhotoRes {
    photos: Photo[];
}

