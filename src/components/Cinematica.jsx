import React from "react";
import Vip from "../assets/vip.svg";

function Tickets({
  zal = "1",
  time = "11:45",
  vip = true,
  appearance = "2",
  price = "100 000",
}) {
  return (
    <div className="flex flex-col w-[180px]">
      <div className="flex flex-col py-3 px-3 bg-[#111111] rounded-t-xl">
        <p className="text-[#444444] text-[14px]">Зал № {zal}</p>
        <div className="flex justify-between">
          <h6 className="text-[16px]">{time}</h6>
          {vip === true ? (
            <div className="flex gap-1">
              <h6 className="text-[16px]">VIP</h6> <img src={Vip} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bg-[#2D2D2D] py-2 px-3 flex justify-between rounded-b-xl">
        <h6 className="text-[14px]">{appearance}D</h6>
        <h6 className="text-[14px]">{price} сум</h6>
      </div>
    </div>
  );
}

export default Tickets;
