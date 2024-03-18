import React from "react";


function CenterOthers({record}) {
     return (
    <div className="">
      <table className="table my-1">
        <thead className="bg-dark text-white text-center rounded-top">
          <tr>
            <th
              className="bg-dark border-end rounded-start-3 text-center text-white"
              scope="col"
            >
              Sr. #
            </th>
            <th
              scope="col"
              className="w-50 bg-dark border-end text-center text-white"
            >
              DESCRIPTION
            </th>
            <th
              scope="col"
              className="bg-dark text-white text-center border-end"
            >
              QTY.
            </th>
            <th
              scope="col"
              className="bg-dark text-white text-center border-end"
            >
              RATE
            </th>
            <th
              scope="col"
              className="bg-dark rounded-end-3 text-center text-white"
            >
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark text-center">1</th>
            {/* <td className="border border-dark ">{record[0].ArticleName}</td> */}
            <td className="border border-dark ">{record[0].PO === "0" || record[0].PO === "00" || record[0].PO === "000" || record[0].PO === "0000" ?  record[0].ArticleName : `PO # ${record[0].PO}  ${record[0].ArticleName} `}</td>
            <td className="border border-dark text-center">{record[0].Quantity} mtr</td>
            <td className="border border-dark text-center">Rs {record[0].Rate}/-</td>
            <td className="border border-dark text-center">{record[0].Amount}/-</td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark text-center">{record.length > 1 ? 2 : ""}</th>
            {/* <td className="border border-dark ">{record[1].PO === "0" ? record[1].ArticleName : `PO # ${record[1].PO}  ${record[1].ArticleName} `}</td> */}
            <td className="border border-dark ">
  {record.length > 1 &&
    (record[1].PO === "0" || record[1].PO === "00" || record[1].PO === "000" || record[1].PO === "0000"
      ? record[1].ArticleName
      : `PO # ${record[1].PO}  ${record[1].ArticleName} `)}
</td>
            <td className="border border-dark text-center">{record.length > 1 ? record[1].Quantity + " mtr" : ""}</td>
            <td className="border border-dark text-center">{record.length > 1 ? "Rs " + record[1].Rate + "/-" : ""}</td>
            <td className="border border-dark text-center">{record.length > 1 ? record[1].Amount + "/-" : ""}</td>
          </tr>
          <tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 2 ? 3 : ""}</th>
{/* <td className="border border-dark ">{record[2].PO === "0" ? record[2].ArticleName : `PO # ${record[2].PO}  ${record[2].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 2 &&
    (record[2].PO === "0" || record[2].PO === "00" || record[2].PO === "000" || record[2].PO === "0000"
      ? record[2].ArticleName
      : `PO # ${record[2].PO}  ${record[2].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 2 ? record[2].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 2 ? "Rs " + record[2].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 2 ? record[2].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 3 ? 4 : ""}</th>
{/* <td className="border border-dark ">{record[3].PO === "0" ? record[3].ArticleName : `PO # ${record[3].PO}  ${record[3].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 3 &&
    (record[3].PO === "0" || record[3].PO === "00" || record[3].PO === "000" || record[3].PO === "0000"
      ? record[3].ArticleName
      : `PO # ${record[3].PO}  ${record[3].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 3 ? record[3].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 3 ? "Rs " + record[3].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 3 ? record[3].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 4 ? 5 : ""}</th>
{/* <td className="border border-dark ">{record[4].PO === "0" ? record[4].ArticleName : `PO # ${record[4].PO}  ${record[4].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 4 &&
    (record[4].PO === "0" || record[4].PO === "00" || record[4].PO === "000" || record[4].PO === "0000"
      ? record[4].ArticleName
      : `PO # ${record[4].PO}  ${record[4].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 4 ? record[4].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 4 ? "Rs " + record[4].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 4 ? record[4].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 5 ? 6 : ""}</th>
{/* <td className="border border-dark ">{record[5].PO === "0" ? record[5].ArticleName : `PO # ${record[5].PO}  ${record[5].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 5 &&
    (record[5].PO === "0" || record[5].PO === "00" || record[5].PO === "000" || record[5].PO === "0000"
      ? record[5].ArticleName
      : `PO # ${record[5].PO}  ${record[5].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 5 ? record[5].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 5 ? "Rs " + record[5].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 5 ? record[5].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 6 ? 7 : ""}</th>
{/* <td className="border border-dark ">{record[6].PO === "0" ? record[6].ArticleName : `PO # ${record[6].PO}  ${record[6].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 6 &&
    (record[6].PO === "0" || record[6].PO === "00" || record[6].PO === "000" || record[6].PO === "0000"
      ? record[6].ArticleName
      : `PO # ${record[6].PO}  ${record[6].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 6 ? record[6].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 6 ? "Rs " + record[6].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 6 ? record[6].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 7 ? 8 : ""}</th>
{/* <td className="border border-dark ">{record[7].PO === "0" ? record[7].ArticleName : `PO # ${record[7].PO}  ${record[7].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 7 &&
    (record[7].PO === "0" || record[7].PO === "00" || record[7].PO === "000" || record[7].PO === "0000"
      ? record[7].ArticleName
      : `PO # ${record[7].PO}  ${record[7].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 7 ? record[7].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 7 ? "Rs " + record[7].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 7 ? record[7].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 8 ? 9 : ""}</th>
{/* <td className="border border-dark ">{record[8].PO === "0" ? record[8].ArticleName : `PO # ${record[8].PO}  ${record[8].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 8 &&
    (record[8].PO === "0" || record[8].PO === "00" || record[8].PO === "000" || record[8].PO === "0000"
      ? record[8].ArticleName
      : `PO # ${record[8].PO}  ${record[8].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 8 ? record[8].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 8 ? "Rs " + record[8].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 8 ? record[8].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 9 ? 10 : ""}</th>
{/* <td className="border border-dark ">{record[9].PO === "0" ? record[9].ArticleName : `PO # ${record[9].PO}  ${record[9].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 9 &&
    (record[9].PO === "0" || record[9].PO === "00" || record[9].PO === "000" || record[9].PO === "0000"
      ? record[9].ArticleName
      : `PO # ${record[9].PO}  ${record[9].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 9 ? record[9].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 9 ? "Rs " + record[9].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 9 ? record[9].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 10 ? 11 : ""}</th>
{/* <td className="border border-dark ">{record[10].PO === "0" ? record[10].ArticleName : `PO # ${record[10].PO}  ${record[10].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 10 &&
    (record[10].PO === "0" || record[10].PO === "00" || record[10].PO === "000" || record[10].PO === "0000"
      ? record[10].ArticleName
      : `PO # ${record[10].PO}  ${record[10].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 10 ? record[9].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 10 ? "Rs " + record[10].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 10 ? record[10].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 11 ? 12 : ""}</th>
{/* <td className="border border-dark ">{record[11].PO === "0" ? record[11].ArticleName : `PO # ${record[11].PO}  ${record[11].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 11 &&
    (record[11].PO === "0" || record[11].PO === "00" || record[11].PO === "000" || record[11].PO === "0000"
      ? record[11].ArticleName
      : `PO # ${record[11].PO}  ${record[11].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 11 ? record[11].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 11 ? "Rs " + record[11].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 11 ? record[11].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 12 ? 13 : ""}</th>
{/* <td className="border border-dark ">{record[12].PO === "0" ? record[12].ArticleName : `PO # ${record[12].PO}  ${record[12].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 12 &&
    (record[12].PO === "0" || record[12].PO === "00" || record[12].PO === "000" || record[12].PO === "0000"
      ? record[12].ArticleName
      : `PO # ${record[12].PO}  ${record[12].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 12 ? record[12].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 12 ? "Rs " + record[12].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 12 ? record[12].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 13 ? 14 : ""}</th>
{/* <td className="border border-dark ">{record[13].PO === "0" ? record[13].ArticleName : `PO # ${record[13].PO}  ${record[13].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 13 &&
    (record[13].PO === "0" || record[13].PO === "00" || record[13].PO === "000" || record[13].PO === "0000"
      ? record[13].ArticleName
      : `PO # ${record[13].PO}  ${record[13].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 13 ? record[13].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 13 ? "Rs " + record[13].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 13 ? record[13].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 14 ? 15 : ""}</th>
{/* <td className="border border-dark ">{record[14].PO === "0" ? record[14].ArticleName : `PO # ${record[14].PO}  ${record[14].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 14 &&
    (record[14].PO === "0" || record[14].PO === "00" || record[14].PO === "000" || record[14].PO === "0000"
      ? record[14].ArticleName
      : `PO # ${record[14].PO}  ${record[14].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 14 ? record[14].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 14 ? "Rs " + record[14].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 14 ? record[14].Amount + "/-" : ""}</td>
</tr>
<tr style={{ height: '2.5rem' }}>

<th scope="row" className="border border-dark text-center">{record.length > 15 ? 16 : ""}</th>
{/* <td className="border border-dark ">{record[15].PO === "0" ? record[15].ArticleName : `PO # ${record[15].PO}  ${record[15].ArticleName} `}</td> */}
<td className="border border-dark ">
  {record.length > 15 &&
    (record[15].PO === "0" || record[15].PO === "00" || record[15].PO === "000" || record[15].PO === "0000"
      ? record[15].ArticleName
      : `PO # ${record[15].PO}  ${record[15].ArticleName} `)}
</td>
<td className="border border-dark text-center">{record.length > 15 ? record[15].Quantity + " mtr" : ""}</td>
<td className="border border-dark text-center">{record.length > 15 ? "Rs " + record[15].Rate + "/-" : ""}</td>
<td className="border border-dark text-center">{record.length > 15 ? record[15].Amount + "/-" : ""}</td>
</tr>
        </tbody>
        
      </table> 
    </div>
  );
}

export default CenterOthers;
