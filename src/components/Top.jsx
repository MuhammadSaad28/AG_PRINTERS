import React from "react";
import './Top.css';
function Top({ company, invoiceNo, date}) {
  return (
    <div>
      <p className="display-1 fw-bold text-center mb-0">A. G. PRINTERS</p>
      <p className="fw-bolder text-center mb-0">
        360-4-C-II Green Town Lahore. Near Shoukat Chowk
      </p>
      <p className="fw-bolder text-center">Mob: 0300-4832640</p>

      <div className=" d-flex justify-content-between mb-3">
        <div className="mx-2 text-left border border-black border-1 rounded w-100 shadow bg-body-tertiary rounded">
          <p className="fw-bolder mx-2">M/s.</p>
          <h3 className="name">{company}</h3>
        </div>
        <div className="w-50">
          <div className="mx-1 mb-2 text-left border border-black border-1 rounded shadow bg-body-tertiary rounded d-flex gap-5">
            <p className="fw-bolder mx-2">No. </p>
            <h3 fw-bolder mx-2>{invoiceNo}</h3>
          </div>
          <div className="mx-1 text-left border border-black border-1 rounded shadow bg-body-tertiary rounded d-flex gap-4">
            <p className="fw-bolder mx-2">Date: </p>
            <h3 className="fw-bolder mx-2">{date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
