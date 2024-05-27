import React from "react";

export default function App() {
  return (
    <div className="mt-[30px]">
      <div className="flex justify-center ">
        <div className="text-[20px] sm:text-[50px] text-[#615EFC] bg-[#EEEEEE] p-[10px] rounded-lg flex justify-center  grid sm:grid-cols-1 mx-4 ">
          Tailwind CSS - Grid Responsive
        </div>
      </div>
      <div className="flex justify-center mt-[10px] ">
        <div className="text-[20px] sm:text-[50px] text-[#EEEEEE] bg-[#7E8EF1] p-[10px] rounded-lg flex justify-center  grid sm:grid-cols-1 mx-4 ">
          Equal Section
        </div>
      </div>
      <div className="m-6 grid gap-6 sm:grid-cols-2 ">
        <div className="sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          Box 1
        </div>
        <div className="sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          Box 2
        </div>
        <div className="sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          Box 3
        </div>
        <div className="sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          Box 4
        </div>
        <div className="sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          Box 5
        </div>
      </div>
    </div>
  );
}
