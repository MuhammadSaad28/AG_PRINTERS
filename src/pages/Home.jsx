import React, { useState, useEffect, useRef } from "react";
import database from "../firebase";
import { ref, onValue, remove } from "firebase/database";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Home = () => {
  const [records, setRecords] = useState({});
  const [filteredRecords, setFilteredRecords] = useState({});
  const [rgpFilter, setRgpFilter] = useState("");
  const [poFilter, setPoFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
const [endDateFilter, setEndDateFilter] = useState("");
const [isDownloading, setIsDownloading] = useState(false);
const viewRef = useRef(null);


  

  useEffect(() => {
    const dbRef = ref(database, "/records");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setRecords(data);
        setFilteredRecords(data); // Initialize filteredRecords with all records
      } else {
        setRecords({});
        setFilteredRecords({});
      }
    });

    return () => {
      setRecords({});
      setFilteredRecords({});
    };
  }, []);

 

  useEffect(() => {
    const applyFilters = () => {
      const filteredData = {};
      Object.keys(records).forEach((key) => {
        const record = records[key];
        let isFiltered = false;
        Object.keys(record).forEach((subKey) => {
          const subRecord = record[subKey];
          // Check if the sub-record has the necessary properties and matches the filters
          if (
            subRecord &&
            subRecord["ArticleName"] && // Assuming this property is present in all sub-records
            (!rgpFilter || subRecord["RGP"].includes(rgpFilter)) &&
            (!poFilter || subRecord["PO"].includes(poFilter)) &&
            (!dateFilter || subRecord["date"].includes(dateFilter)) &&
            (!companyFilter || subRecord["Company"].toLowerCase().includes(companyFilter.toLowerCase())) &&
            (!startDateFilter || subRecord["date"] >= startDateFilter) &&
            (!endDateFilter || subRecord["date"] <= endDateFilter)
          ) {
            isFiltered = true;
          }
        });
        if (isFiltered) {
          filteredData[key] = record;
        }
      });
      setFilteredRecords(filteredData);
    };
    applyFilters();
  }, [records, rgpFilter, poFilter, dateFilter, companyFilter, startDateFilter, endDateFilter]);
  
  

  
  

  const handleResetFilters = () => {
    setRgpFilter("");
    setPoFilter("");
    setDateFilter("");
    setCompanyFilter("");
    setStartDateFilter("");
    setEndDateFilter("");
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const dbRef = ref(database, `/records/${id}`);
      remove(dbRef);
      toast.success("Record has been deleted");
    } else {
      toast.error("Unable to Delete the Record");
    }
  };

  const handleSaveAsPDF = () => {
    // Get the container element for the view
  const viewContainer = viewRef.current;
  const head = document.querySelector('.head');
  const ledger = document.querySelector('.ledger');
  const action_head = document.querySelector('.action-head');
  // const action_data = document.querySelector('.action-data');
  const action_data = document.querySelectorAll('.action-data');

  // Hide the buttons container
  head.style.display = 'none';
  ledger.style.display = 'none';
  action_head.style.display = 'none';
  // action_data.style.display = 'none';
  action_data.forEach((element, index) => {
    if (index !== -1) {
      element.style.display = 'none';
    }
  });  

  setIsDownloading(true);

  // Delay the capture process
  setTimeout(() => {
    // Use html2canvas to capture the view as an image
    html2canvas(viewContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

     

      // Create a new jsPDF instance
      const doc = new jsPDF("p", "mm", "a4");
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      

      // Add the captured image to the PDF
      doc.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight *ratio);

      // Save the PDF
      doc.save("Ledger.pdf");
      setIsDownloading(false);
    });
  }, 1000); // Adjust the delay as needed
  
  setTimeout(() => {
    head.style.display = 'flex';
    ledger.style.display = 'flex';
    action_head.style.display = 'flex';
    // action_data.style.display = 'flex';
    action_data.forEach((element) => {
      element.style.display = 'table-cell';
    });
  }, 1000); // Adjust the delay as needed    

    };

  return (
    <div style={{ marginTop: "10px" }} ref={viewRef}>
      {isDownloading &&
      <div className="ledger-main">
       <h2 className="Ledger-Info">
        {companyFilter !== "" ? companyFilter + " Ledger" : "Ledger"}
      </h2>
      <h2 className="Ledger-Info">
        {startDateFilter !== "" ? "(" + startDateFilter : ""} - {endDateFilter !== "" ? endDateFilter + ")" : ""}
      </h2>
      </div>
      }
      <div className="head">
        <input type="text" placeholder="Filter by RGP" value={rgpFilter} onChange={(e) => setRgpFilter(e.target.value)} />
        <input type="text" placeholder="Filter by PO" value={poFilter} onChange={(e) => setPoFilter(e.target.value)} />
        <input type="date" placeholder="Filter by Date" value={dateFilter} className="datee" onChange={(e) => setDateFilter(e.target.value)} />
        <input type="text" placeholder="Filter by Company" value={companyFilter} onChange={(e) => setCompanyFilter(e.target.value)} />
        <button className="btn btn-reset"  onClick={handleResetFilters}>Reset Filters</button>
      </div>
      <div className="ledger">
        <div className="da">
        <label>Start Date: </label>
      <input type="date" placeholder="Start Date" value={startDateFilter} className="datee" onChange={(e) => setStartDateFilter(e.target.value)} />
      </div>
        <div className="da">
        <label>End Date: </label>
      <input type="date" placeholder="End Date" value={endDateFilter} className="datee" onChange={(e) => setEndDateFilter(e.target.value)} />
      </div>
      <button className="btn btn-edit"  onClick={handleSaveAsPDF}>Download Ledger</button>
      </div>
      <table className="styled-table mb-5">
        <thead>
          <tr>
            {/* <th style={{ textAlign: "center" }}>No.</th> */}
            <th style={{ textAlign: "center" }}>Date</th>
            <th style={{ textAlign: "center" }}>Invoice No.</th>
            <th style={{ textAlign: "center" }}>Company</th>
            <th style={{ textAlign: "center" }}>Article Name</th>
            <th style={{ textAlign: "center" }}>RGP</th>
            <th style={{ textAlign: "center" }}>PO</th>
            <th style={{ textAlign: "center" }}>Quantity</th>
            <th style={{ textAlign: "center" }}>Rate</th>
            <th style={{ textAlign: "center" }}>Amount</th>
            <th style={{ textAlign: "center" }} className="action-head">Action</th>
          </tr>
        </thead>
        <tbody>
  {Object.keys(filteredRecords).map((id) => {
    const record = filteredRecords[id];
    return Object.keys(record).map((index) => {
      const subRecord = record[index];
      return (
        <tr key={`${id}-${index}`}>
          {/* <td style={{ textAlign: "center" }}>{index + 1}</td> */}
          <td style={{ textAlign: "center" }}>{subRecord.date}</td>
          <td style={{ textAlign: "center" }}>{subRecord.InvoiceNo}</td>
          <td style={{ textAlign: "center" }}>{subRecord.Company}</td>
          <td style={{ textAlign: "center" }}>{subRecord.ArticleName}</td>
          <td style={{ textAlign: "center" }}>{subRecord.RGP}</td>
          <td style={{ textAlign: "center" }}>{subRecord.PO}</td>
          <td style={{ textAlign: "center" }}>{subRecord.Quantity}</td>
          <td style={{ textAlign: "center" }}>{subRecord.Rate}</td>
          <td style={{ textAlign: "center" }}>{subRecord.Amount}</td>
          <td style={{ textAlign: "center" }} className="action-data">
            <Link to={`/view/${id}`}>
              <button className="btn btn-view">View</button>
            </Link>
            <Link to={`/edit-record/${id}/${index}`}>
              <button className="btn btn-edit">Edit</button>
            </Link>
            <button className="btn btn-delete" onClick={() => onDelete(id, index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  })}
</tbody>
      </table>
    </div>
  );
};

export default Home;
