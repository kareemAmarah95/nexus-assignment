import React from "react";
import "./GridSection.css";
const GridSection = () => {
  return (
    <div className="bg-[#FFFEF2]">
      <div className="container mx-auto">
        <div className="grid grid-rows-5 grid-cols-5 items-center gap-4 mobile-view">
          <div className=" col-span-3 p-[20px] mobile-zero-col sm:col-span-0"></div>
          <div className="col-span-2 p-[20px] ">
            <div class="flex flex-col h-[100vh]  items-start video-text">
              <h2 class="font-[Zapf Humanist] mb-3 text-[1.875rem] font-[100]">
                Efficacious pairings
              </h2>
              <p class="w-[80%] mb-3 paragraph-video-section">
                Our consultants have long combined complementary formulations to
                effect additional benefits for the skin. Incorporate this
                time-honoured practice into your regimen with our recommended
                bundles.
              </p>
              <button class="outline outline-offset-1 outline-black outline-1 flex justify-between p-3 py-5 mt-3 w-[53%] hover:bg-[#333] hover:text-[#fffef2] hover:outline-[0] video-button">
                <a href="#">Browse Skin Care Bundles</a>
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
          </div>
          <div className="col-span-3 p-[20px]">
            <div class="flex flex-col h-[100vh]  items-start video-text">
              <h2 class="font-[Zapf Humanist] mb-3 text-[1.875rem] font-[100]">
                Store locator
              </h2>
              <p class="w-[80%] mb-3 paragraph-video-section">
                Our consultants are available to host you in-store and provide
                tailored guidance on gift purchases.
              </p>
              <button class="outline outline-offset-1 outline-black outline-1 flex justify-between p-3 py-5 mt-3 w-[53%] hover:bg-[#333] hover:text-[#fffef2] hover:outline-[0] video-button">
                <a href="#">Find a nearby store</a>
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
          </div>
          <div className="col-span-2 p-[20px] "></div>
          <div className="col-span-3 p-[20px]"></div>
          <div className="col-span-2 p-[20px]">
            <div class="flex flex-col h-[100vh]  items-start video-text">
              <h3 class="mb-3">Facial Appointments</h3>
              <h2 class="font-[Zapf Humanist] mb-3 text-[1.875rem] font-[100]">
                Composure for the skin and senses
              </h2>
              <p class="w-[80%] mb-3 paragraph-video-section">
                For a well-rounded skin care regimen, Aesop Facial Appointments
                offer a series of treatments tailored to balance, stimulate and
                intensely nourish the skin.
              </p>
              <button class="outline outline-offset-1 outline-black outline-1 flex justify-between p-3 py-5 mt-3 w-[53%] hover:bg-[#333] hover:text-[#fffef2] hover:outline-[0] video-button">
                <a href="#">Learn more</a>
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
          </div>

          {/* <div className=" p-[20px]">08</div> */}
        </div>
        <div className=" p-[20px]  text-center">
          <div className="quote-wrapper">
            <blockquote className="text-[1.875rem] text-center mb-[20px]">
              ‘Nothing is ever ended, everything only begun.’
            </blockquote>
            <cite className="text-center block">Sara Teasdale</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
