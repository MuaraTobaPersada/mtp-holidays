import React from 'react';
import videoSource from '../assets/vidbackground.mp4';

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
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center h-full px-4">
                <div className="max-w-lg text-left">
                    <h1 className="text-4xl font-bold text-white">Muara Toba Persada</h1>
                    <p className="mt-4 text-white">
                        Kami tuangkan semua kegiatan foto, video, dari semua kegiatan & acara berlibur disini, cobalah sedikit berpetualang lalu download bagian penting kalian. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BackgroundVideo;