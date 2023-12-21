import React from "react";
import gmail from "../img/gmail.png";
function Vipin() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <p>Site created by Vipin</p>

        <p className="flex justify-center items-center gap-3">
          {" "}
          <img src={gmail} alt="" width="20px" /> kumawatvipin066@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Vipin;
