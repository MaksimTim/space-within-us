import React from 'react';
import {Photo} from "../../models/models";

const RoverPhotoItem: React.FC<Photo> = ({camera, img_src, sol}) => {
    return (
        <div className='text-lg text-center border-2 rounded-3xl shadow-md m-2 p-2' >
            <div className='bg-blue-100 m-1 rounded-lg'>{camera.full_name}</div>
            <div ><img className='rounded-md' width={300} src={img_src}/></div>
            <div className='bg-amber-200 m-1 rounded-lg'>Sol: {sol}</div>
        </div>
    );
};

export default RoverPhotoItem;