import React from "react";
import Equal from "./components/equal";
import Unequal from "./components/nonequal";

export default function App() {
  return (
    <div className="mt-[30px]">
      <div className="flex justify-center ">
        <div className="text-[20px] sm:text-[50px] text-[#615EFC] bg-[#EEEEEE] p-[10px] rounded-lg flex justify-center  grid sm:grid-cols-1 mx-4 ">
          Tailwind CSS - Grid Responsive
        </div>
      </div>
      <Equal />
      <Unequal />
    </div>
  );
}
