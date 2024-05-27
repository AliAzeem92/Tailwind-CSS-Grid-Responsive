import React from "react";

export default function Unequal() {
  return (
    <div>
      <div className="flex justify-center mt-[10px] ">
        <div className="text-[20px] sm:text-[50px] text-[#EEEEEE] bg-[#7E8EF1] p-[10px] rounded-lg flex justify-center  grid sm:grid-cols-1 mx-4 ">
          Non-Equal Section
        </div>
      </div>
      <div className="m-6 grid gap-6 sm:grid-cols-12 grid-cols-2 ">
        <div className="sm:col-span-2 sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          1
        </div>
        <div className="sm:col-span-7 sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          2
        </div>
        <div className="sm:col-span-3 sm:h-[150px] h-[50px] bg-[#7E8EF1] rounded-lg text-[#EEEEEE] sm:text-[100px] text-[25px] flex justify-center border-[6px] border-[#D1D8C5] ">
          3
        </div>
      </div>
    </div>
  );
}
