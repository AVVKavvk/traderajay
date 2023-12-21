import react, { useState } from "react";
import Spin from "./component/Spin";
import Loader from "./component/Loader";
import Link from "./component/Link";
import Ajay from "./component/Ajay";
import Vipin from "./component/Vipin";

function App() {
  const [spin, setSpin] = useState(false);
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setSpin(true);
    setLoader(false);
  }, 2000);
  return (
    <>
      {loader ? <Loader /> : " "}
      <div
        className={` ${
          spin ? "flex" : "hidden"
        } backgr text-white flex-col  w-full `}
      >
        <Spin />
        <Link />

        <Ajay />
        <div className="hidden justify-end items-end absolute bottom-0 right-10 md:flex ">
          <Vipin />
        </div>
        <p className="flex md:hidden justify-center items-center mx-auto ">
          Site created by Vipin, +91 8107099646
        </p>
      </div>
    </>
  );
}

export default App;
