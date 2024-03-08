import React from "react";

function Bottom({ total}) {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <p className=" mt-2">Sign _________________________</p>
      </div>
      <div className="d-flex w-25 my-2">
        <span className="w-25"></span>
        <span className="bg-dark text-white text-center rounded-2 w-25 justify-content-center align-items-center"   >
            Total
            </span>
            
        <span className="border border-dark rounded-2 w-50 text-center">{total}/-</span>
      </div>
    </div>
  );
}

export default Bottom;
