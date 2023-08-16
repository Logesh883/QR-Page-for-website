import React from "react";
import img from "./images/image-qr-code.png";
export class CompClass extends React.Component {
  render() {
    return (
      <div className=" h-screen bg-blue-200  shadow-md overflow-hidden font-outfit">
        <div className="flex flex-col   border border-white bg-white h-[500px] w-[330px] box-border  mx-auto  my-32  p-4 rounded-lg">
          <div className="">
            <img src={img} alt="qrimage" className="rounded-lg" />
          </div>

          <p className="font-[700] text-[23px]/tight pt-5 text-center">
            Improve your front-end skills by building projects
          </p>
          <p className="  text-[17px]/tight text-center text-slate-400 font-[400] my-2 ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to next level
          </p>
        </div>
      </div>
    );
  }
}
