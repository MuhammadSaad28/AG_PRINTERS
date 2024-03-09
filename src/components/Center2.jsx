import React from "react";

function Center2({ rgp1, po1, articleName1, quantity1, rate1, amount1,rgp2, po2, articleName2, quantity2, rate2, amount2}) {
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
            <td className="border border-dark ">RGP # {rgp1}</td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark ">PO # {po1}</td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark ">{articleName1}</td>
            <td className="border border-dark text-center">{quantity1} mtr</td>
            <td className="border border-dark text-center">Rs {rate1}/-</td>
            <td className="border border-dark text-center">{amount1}/-</td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark text-center">2</th>
            <td className="border border-dark ">RGP # {rgp2}</td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark ">PO # {po2}</td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark ">{articleName2}</td>
            <td className="border border-dark text-center">{quantity2} mtr</td>
            <td className="border border-dark text-center">Rs {rate2}/-</td>
            <td className="border border-dark text-center">{amount2}/-</td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        <tr style={{ height: '2.5rem' }}>

            <th scope="row" className="border border-dark"></th>
            <td className="border border-dark "></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
            <td className="border border-dark"></td>
          </tr>
        </tbody>
        
      </table> 
    </div>
  );
}

export default Center2;
