import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    // footer
    <>
      <div className="bg-[#252525]">
        <div className="container mx-auto">
          <div className="grid grid-rows-5 grid-cols-9  gap-4 mobile-view">
            <div className="col-span-3">
              {/* 1 */}
              <h3 class="text-white py-4">Subscribe to Aesop communications</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-2">
              {/* 2 */}
              <h3 class="text-white py-4">Order & Support</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-2">
              {/* 3 */}
              <h3 class="text-white py-4">Services</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-2">
              {/* 4 */}
              <h3 class="text-white py-4">Location Preferences</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-3">
              {/* 5 */}

              <input
                className="w-full border border-white rounded-sm py-2 ps-3 bg-transparent email-address-input"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="col-span-2 flex">
              {/* 6 */}
              <div className="flex flex-col">
                <li className="flex">
                  <a href="#" className="text-white">
                    Contact us
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ms-3"
                    style={{ color: "white" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="flex">
                  <a href="#" className="text-white">
                    FAQS
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ms-3"
                    style={{ color: "white" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="flex">
                  <a href="#" className="text-white">
                    Shipping
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ms-3"
                    style={{ color: "white" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="flex">
                  <a href="#" className="text-white">
                    Returns
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ms-3"
                    style={{ color: "white" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="flex">
                  <a href="#" className="text-white">
                    Order History
                  </a>
                </li>
                <li className="flex">
                  <a href="#" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
              </div>
            </div>
            <div className="flex items-center col-span-2">
              {/* 7 */}
              <a href="#" className="text-white">
                Live assistance
              </a>
            </div>
            <div className="col-span-2">
              {/* 8 */}
              <li className="list-none text-white">
                <span>Shipping :</span>
              </li>
              <a href="#" className="underline text-white">
                Hong Kong SAR, China
              </a>
            </div>
            <div className="col-span-3 flex items-center">
              <div>
                <input
                  type="checkbox"
                  className="bg-transparent border rounded-sm"
                />
              </div>
              <div>
                <p className="ms-2 text-[0.8rem] text-white items-center">
                  Subscribe to receive communications from Aesop. By
                  subscribing, you confirm you have read and understood our
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              {/* 10 */}
              <a href="#" className="text-white">
                Faqs
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 11 */}
              <a href="#" className="text-white">
                Corporate Gifts
              </a>
            </div>
            <div className=" col-span-2">
              {/* 12 */}
              <li className="list-none text-white">
                <span>Language :</span>
              </li>
              <a href="#" className="underline text-white block">
                English
              </a>
              <a href="#" className="underline text-white">
                繁體中文
              </a>
            </div>
            <div className="col-span-3">{/* 13 */}</div>
            <div className=" col-span-2 flex items-center">
              {/* 14 */}
              <a href="#" className="text-white">
                Shipping
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 15 */}
              <a href="#" className="text-white">
                Facial Appointments
              </a>
            </div>
            <div className="col-span-2">{/* 16 */}</div>
            <div className="col-span-3">{/* 17 */}</div>
            <div className="col-span-2 flex items-center">
              {/* 18 */}
              <a href="#" className="text-white">
                Returns
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 19 */}
              <a href="#" className="text-white">
                Click And Collect
              </a>
            </div>
            <div className="col-span-2">{/* 20 */}</div>
            <div className="col-span-3">{/* 21 */}</div>
            <div className="col-span-2 flex items-center">
              {/* 22 */}
              <a href="#" className="text-white">
                Order History
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 23 */}
              <a href="#" className="text-white">
                Click And Collect
              </a>
            </div>
            <div className="col-span-2">{/* 24 */}</div>
          </div>

          <div className="grid grid-rows-5 grid-cols-9  gap-4 mobile-view mt-5">
            <div className="col-span-3">
              {/* 1 */}
              <h3 class="text-white py-4">Sustainability</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-2">
              {/* 2 */}
              <h3 class="text-white py-4">Order & Support</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-2">
              {/* 3 */}
              <h3 class="text-white py-4">Services</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-2">
              {/* 4 */}
              <h3 class="text-white py-4">Location Preferences</h3>
              <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="col-span-3">
              {/* 5 */}
              <p className="text-white">
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>
            <div className="col-span-2 flex">
              {/* 6 */}

              <div className="flex flex-col ">
                <li>
                  <a href="#" className="text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Foundation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Cookie Policy
                  </a>
                </li>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 7 */}
              {/* 7 */}
              <a href="#" className="text-white">
                Live assistance
              </a>
            </div>
            <div className="col-span-2">
              {/* 8 */}
              <li className="list-none text-white">
                <span>Shipping :</span>
              </li>
              <a href="#" className="underline text-white">
                Hong Kong SAR, China
              </a>
            </div>
            <div className="col-span-3 flex items-center">
              <div>
                <input
                  type="checkbox"
                  className="bg-transparent border rounded-sm"
                />
              </div>
              <div>
                <p className="ms-2 text-[0.8rem] text-white items-center">
                  Subscribe to receive communications from Aesop. By
                  subscribing, you confirm you have read and understood our
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              {/* 10 */}
              <a href="#" className="text-white">
                Faqs
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 11 */}
              <a href="#" className="text-white">
                Corporate Gifts
              </a>
            </div>
            <div className=" col-span-2">
              {/* 12 */}
              <li className="list-none text-white">
                <span>Language :</span>
              </li>
              <a href="#" className="underline text-white block">
                English
              </a>
              <a href="#" className="underline text-white">
                繁體中文
              </a>
            </div>
            <div className="col-span-3">{/* 13 */}</div>
            <div className=" col-span-2 flex items-center">
              {/* 14 */}
              <a href="#" className="text-white">
                Shipping
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 15 */}
              <a href="#" className="text-white">
                Facial Appointments
              </a>
            </div>
            <div className="col-span-2">{/* 16 */}</div>
            <div className="col-span-3">{/* 17 */}</div>
            <div className="col-span-2 flex items-center">
              {/* 18 */}
              <a href="#" className="text-white">
                Returns
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 19 */}
              <a href="#" className="text-white">
                Click And Collect
              </a>
            </div>
            <div className="col-span-2">{/* 20 */}</div>
            <div className="col-span-3">{/* 21 */}</div>
            <div className="col-span-2 flex items-center">
              {/* 22 */}
              <a href="#" className="text-white">
                Order History
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ms-3"
                style={{ color: "white" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-2">
              {/* 23 */}
              <a href="#" className="text-white">
                Click And Collect
              </a>
            </div>
            <div className="col-span-2">{/* 24 */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
