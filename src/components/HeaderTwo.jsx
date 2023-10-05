import React from "react";
import "./HeaderTwo.css";
const HeaderTwo = () => {
  return (
    <>
      <header className="flex justify-center my-header-two py-3">
        <div className="text-white hover:underline cursor-pointer">
          Click and Collect is now available in Hong Kong. Enjoy complimentary
          shipping on orders over $400.
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
