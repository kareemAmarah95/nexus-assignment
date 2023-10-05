import React from "react";
import "./HeaderOne.css";
const HeaderOne = () => {
  return (
    <>
      <header className="flex justify-center my-header-one py-3">
        <div className="me-3">
          Trained Aesop consultants are available to provide bespoke skin care
          advice.
        </div>
        <div className="">
          <a className="hover:underline" href="#">
            Book a video consultation
          </a>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
