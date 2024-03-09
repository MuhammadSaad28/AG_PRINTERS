import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import database from '../firebase';
import { ref, onValue, remove } from 'firebase/database';
import { toast } from 'react-toastify';

const Search = () => {
  const [records, setRecords] = useState({});
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  let articleName = query.get('articleName');

  useEffect(() => {
    const dbRef = ref(database, '/records');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setRecords(data);
      } else {
        setRecords({});
      }
    });

    return () => {
      setRecords({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      const dbRef = ref(database, `/records/${id}`);
      remove(dbRef);
      toast.success('Record has been deleted');
    } else {
      toast.error('Unable to Delete the Record');
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Date</th>
            <th style={{ textAlign: 'center' }}>Invoice No.</th>
            <th style={{ textAlign: 'center' }}>Company</th>
            <th style={{ textAlign: 'center' }}>Article Name</th>
            <th style={{ textAlign: 'center' }}>RGP</th>
            <th style={{ textAlign: 'center' }}>PO</th>
            <th style={{ textAlign: 'center' }}>Quantity</th>
            <th style={{ textAlign: 'center' }}>Rate</th>
            <th style={{ textAlign: 'center' }}>Amount</th>
            <th style={{ textAlign: 'center' }}>Total</th>
            <th style={{ textAlign: 'center' }}>Status</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(records).map((id, index) => {
            // Iterate over each sub-record of the current record
            return Object.keys(records[id]).map((subId) => {
              const subRecord = records[id][subId];
              // Check if the sub-record matches the filter
              if (subRecord.ArticleName.toLowerCase().includes(articleName.toLowerCase())) {
                return (
                  <tr key={`${id}-${subId}`}>
                    <td style={{ textAlign: 'center' }}>{index + 1}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.date}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.InvoiceNo}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.Company}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.ArticleName}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.RGP}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.PO}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.Quantity}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.Rate}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.Amount}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.Total}</td>
                    <td style={{ textAlign: 'center' }}>{subRecord.Status}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Link to={`/view/${id}`}>
                        <button className="btn btn-view">View</button>
                      </Link>
                      <Link to={`/edit-record/${id}`}>
                        <button className="btn btn-edit">Edit</button>
                      </Link>
                      <button className="btn btn-delete" onClick={() => onDelete(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
