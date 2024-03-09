import React, { useState, useEffect, useRef } from "react";
import "./View.css";
import Top from "../components/Top";
import Center from "../components/Center";
import Bottom from "../components/Bottom";
import database from "../firebase";
import { ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Center2 from "../components/Center2";
import Center3 from "../components/Center3";
import Center4 from "../components/Center4";
import Center5 from "../components/Center5";
import CenterOthers from "../components/CenterOthers";


const View = () => {
  const [record, setRecord] = useState({});
    const { id } = useParams();
    const viewRef = useRef(null);

  useEffect(() => {
    const dbRef = ref(database, `/records/${id}`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setRecord(data);
        // console.log("Record: ",data.length, data);
        // const date = new Date(data.date);
        // const day = date.getDate();
        // const month = date.getMonth() + 1;
        // const year = date.getFullYear();
        // const dateString = `${day}/${month}/${year}`;
        // setRecord({ ...data, date: dateString });
      } else {
        setRecord({});
      }
    });
   

    return () => {
      setRecord({});
    };
    // eslint-disable-next-line
  }, []);
    const handlePrint = () => {
        window.print();
    };
    const handleSaveAsPDF = () => {
    // Get the container element for the view
  const viewContainer = viewRef.current;
  const buttonsContainer = document.querySelector('.buttons-container');

  // Hide the buttons container
  buttonsContainer.style.display = 'none';

  // Delay the capture process
  setTimeout(() => {
    // Use html2canvas to capture the view as an image
    html2canvas(viewContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

     

      // Create a new jsPDF instance
      const doc = new jsPDF("p", "mm", "a4");
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const imgWidth = 2928;
      const imgHeight = 3800;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      

      // Add the captured image to the PDF
      doc.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight *ratio);

      // Save the PDF
      doc.save("Invoice.pdf");
    });
  }, 1000); // Adjust the delay as needed
  setTimeout(() => {
    // Show the buttons container
    buttonsContainer.style.display = 'flex';
  },3000)
    

    };

    

  return (
    <div className="container-fluid mt-4" id="view-content" ref={viewRef}>
      <div>
      <div className="buttons-container">
          <button onClick={handlePrint}>Print</button>
          <button onClick={handleSaveAsPDF}>Save as PDF</button>
        </div>
        {record && record.length > 0 && record[0].Company !== "MJMS" && (
  <div>
    <Top
      company={record[0].Company}
      invoiceNo={record[0].InvoiceNo}
      date={record[0].date}
    />
    <CenterOthers record={record}  />
    <Bottom total={record[0].Total}/>
  </div>
)}
      {record && record.length === 1 && record[0].Company === "MJMS" && (
       <div>
        <Top
          company={record[0].Company}
          invoiceNo={record[0].InvoiceNo}
          date={record[0].date}
        />
        <Center rgp={record[0].RGP} po={record[0].PO} articleName={record[0].ArticleName} quantity={record[0].Quantity} rate={record[0].Rate} amount={record[0].Amount}  />
        <Bottom total={record[0].Total}/>
       </div>
      )}
      {record && record.length === 2 && record[0].Company === "MJMS" && (
       <div>
        <Top
          company={record[0].Company}
          invoiceNo={record[0].InvoiceNo}
          date={record[0].date}
        />
        <Center2 rgp1={record[0].RGP} po1={record[0].PO} articleName1={record[0].ArticleName} quantity1={record[0].Quantity} rate1={record[0].Rate} amount1={record[0].Amount} rgp2={record[1].RGP} po2={record[1].PO} articleName2={record[1].ArticleName} quantity2={record[1].Quantity} rate2={record[1].Rate} amount2={record[1].Amount} />
        <Bottom total={record[0].Total}/>
       </div>
      )}
      {record && record.length === 3 && record[0].Company === "MJMS" && (
       <div>
        <Top
          company={record[0].Company}
          invoiceNo={record[0].InvoiceNo}
          date={record[0].date}
        />
        <Center3 rgp1={record[0].RGP} po1={record[0].PO} articleName1={record[0].ArticleName} quantity1={record[0].Quantity} rate1={record[0].Rate} amount1={record[0].Amount} rgp2={record[1].RGP} po2={record[1].PO} articleName2={record[1].ArticleName} quantity2={record[1].Quantity} rate2={record[1].Rate} amount2={record[1].Amount} rgp3={record[2].RGP} po3={record[2].PO} articleName3={record[2].ArticleName} quantity3={record[2].Quantity} rate3={record[2].Rate} amount3={record[2].Amount} />
        <Bottom total={record[0].Total}/>
       </div>
      )}
      {record && record.length === 4 && record[0].Company === "MJMS" && (
       <div>
        <Top
          company={record[0].Company}
          invoiceNo={record[0].InvoiceNo}
          date={record[0].date}
        />
        <Center4 rgp1={record[0].RGP} po1={record[0].PO} articleName1={record[0].ArticleName} quantity1={record[0].Quantity} rate1={record[0].Rate} amount1={record[0].Amount} rgp2={record[1].RGP} po2={record[1].PO} articleName2={record[1].ArticleName} quantity2={record[1].Quantity} rate2={record[1].Rate} amount2={record[1].Amount} rgp3={record[2].RGP} po3={record[2].PO} articleName3={record[2].ArticleName} quantity3={record[2].Quantity} rate3={record[2].Rate} amount3={record[2].Amount} rgp4={record[3].RGP} po4={record[3].PO} articleName4={record[3].ArticleName} quantity4={record[3].Quantity} rate4={record[3].Rate} amount4={record[3].Amount} />
        <Bottom total={record[0].Total}/>
       </div>
      )}
      {record && record.length === 5 && record[0].Company === "MJMS" && (
       <div>
        <Top
          company={record[0].Company}
          invoiceNo={record[0].InvoiceNo}
          date={record[0].date}
        />
        <Center5 rgp1={record[0].RGP} po1={record[0].PO} articleName1={record[0].ArticleName} quantity1={record[0].Quantity} rate1={record[0].Rate} amount1={record[0].Amount} rgp2={record[1].RGP} po2={record[1].PO} articleName2={record[1].ArticleName} quantity2={record[1].Quantity} rate2={record[1].Rate} amount2={record[1].Amount} rgp3={record[2].RGP} po3={record[2].PO} articleName3={record[2].ArticleName} quantity3={record[2].Quantity} rate3={record[2].Rate} amount3={record[2].Amount} rgp4={record[3].RGP} po4={record[3].PO} articleName4={record[3].ArticleName} quantity4={record[3].Quantity} rate4={record[3].Rate} amount4={record[3].Amount} rgp5={record[4].RGP} po5={record[4].PO} articleName5={record[4].ArticleName} quantity5={record[4].Quantity} rate5={record[4].Rate} amount5={record[4].Amount} />
        <Bottom total={record[0].Total}/>
       </div>
      )}
      </div>
    </div>
  );
};

export default View;
