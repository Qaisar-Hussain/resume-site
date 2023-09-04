import React from "react";

export default function About() {
  return (
    <>
      <div>
        {" "}
        <div className="bg-slate-600 py-4 px-4  ">
          <h1 className="text-gray-400 rounded-xl">About</h1>
        </div>
        <div className="text-sky-500 py-4 px-4 max-[570px]:text-2xl ">
          Name : Qaisar Hussain <br />
          Age : 28 years
        </div>
        <div className="text-sky-500 py-4 px-4 max-[570px]:text-2xl">
          Role : Blockchain Developer <br />
          From : Pakistan <br />
        </div>
        <div className="text-sky-500 py-4 px-4 max-[570px]:text-2xl">
          Education : 14 years
          <br />
          Experience : 10+ years <br />
        </div>
      </div>

      <div className="flex mt-12 justify-center bg-slate-600 py-4 px-4"></div>
    </>
  );
}
