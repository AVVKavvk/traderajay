import react, { useState } from "react";
import Spin from "./component/Spin";
import Loader from "./component/Loader";
import Link from "./component/Link";
import Ajay from "./component/Ajay";
import Vipin from "./component/Vipin";
import gmail from './img/gmail.png'
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
        <div className="hidden justify-end items-end absolute bottom-10 right-10 md:flex ">
          <Vipin />
        </div>
        <p className="flex md:hidden justify-center items-center px-5 flex-wrap mx-auto ">
          Site created by Vipin,
        </p>
        <p className="flex md:hidden gap-3 justify-center items-center px-5 flex-wrap mx-auto ">
          {" "}
          <img src={gmail} alt="" width="20px" /> kumawatvipin066@gmail.com
        </p>
      </div>
    </>
  );
}

export default App;
