import React from 'react';

const GamesPage = () => {
    return (
        <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/P_nj6wW6Gsc"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            <iframe className='mt-4'
                width="560" height="315" src="https://www.youtube.com/embed/YR_wIb_n4ZU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default GamesPage;