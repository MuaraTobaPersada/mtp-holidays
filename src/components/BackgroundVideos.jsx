import React from 'react';
import videoSource from '../assets/vid-01.mp4';

const BackgroundVideo = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={videoSource}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="relative z-10 flex items-center h-full px-4">
                <div className="max-w-lg text-left md:ml-8 lg:ml-16">
                    <h1 className="text-4xl lg:text-4xl font-bold text-[#0A51B2]">Muara Toba Persada Holiday.</h1>
                    <p className="mt-4 text-white text-base md:text-lg lg:text-xl">
                        Momen bersenang - senang melepas penat, mencari kebahagiaan bersama - sama, berlibur dengan seluruh jajaran karyawan dan manajemen pengelola.
                    </p>
                    <a
                        href={videoSource}
                        download="video.mp4"
                        className="mt-7 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Download Video
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BackgroundVideo;