import React from "react";
import "./VideoSection.css";

import ReactPlayer from "react-player";
const VideoSection = () => {
  return (
    <>
      <div className="bg-[#FFFEF2] py-8">
        <div className="container mx-auto">
          <div className="flex md:flex-row video-section">
            <div className="flex flex-col h-[100vh]  items-start video-text">
              <h3 className="mb-3">The Athenaeum</h3>
              <h2 className="font-[Zapf Humanist] mb-3 text-[1.875rem] font-[100]">
                Ouranon: the sixth Othertopias fragrance
              </h2>
              <p className="w-[50%] mb-3 paragraph-video-section">
                Each of the six Othertopias fragrances is a doorway to another
                realm, real and imagined. Ouranon—a woody, spicy, resinous
                scent, distinguished by Frankincense, Hay and Myrrh—is the final
                chapter of that journey.
              </p>
              <button class="outline outline-offset-1 outline-black outline-1 flex justify-between p-3 py-5 mt-3 w-[53%] hover:bg-[#333] hover:text-[#fffef2] hover:outline-[0] video-button">
                <a href="#">Discover Ouranon</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            {/* <iframe
              
              className="w-full aspect-video  m-0"
              allowFullScreen
              autoplay={1}
              mute={1}
              allow="autoplay"
              src="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4?autoplay=1&mute=1&enablejsapi=1"
            ></iframe> */}

            {/* <ReactPlayer
              url="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4"
              playing={true}
              loop={true}
              controls={true}
            /> */}
            <div className="background-video">
              <video
                src={
                  "https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4?autoplay=1&mute=1&enablejsapi=1"
                }
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
