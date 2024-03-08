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
        const date = new Date(data.date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const dateString = `${day}/${month}/${year}`;
        setRecord({ ...data, date: dateString });
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
      console.log(imgWidth, imgHeight, ratio, imgX, imgY);

      // Add the captured image to the PDF
      doc.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight *ratio);

      // Save the PDF
      doc.save("view.pdf");
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
        <Top
          company={record.Company}
          invoiceNo={record.InvoiceNo}
          date={record.date}
        />
        <Center rgp={record.RGP} po={record.PO} articleName={record.ArticleName} quantity={record.Quantity} rate={record.Rate} amount={record.Amount} />
        <Bottom total={record.Total}/>
      </div>
    </div>
  );
};

export default View;
