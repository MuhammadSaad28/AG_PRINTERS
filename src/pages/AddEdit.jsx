import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEdit.css';
import database from '../firebase';
import { ref, push, onValue, set } from 'firebase/database';
import { toast } from 'react-toastify';

const initialState = {
    InvoiceNo: '',
    date: '',
    Company: '',
    ArticleName: '',
    RGP: '',
    PO: '',
    Quantity: '',
    Rate: '',
    Amount: '',
    Total: '',
    Status: ''
}

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [records, setRecords] = useState({});
    const [lastInvoiceNo, setLastInvoiceNo] = useState(0); // State to hold the last invoice number
    const navigate = useNavigate();
    const { id } = useParams();

    const { InvoiceNo, date, Company, ArticleName, RGP, PO, Quantity, Rate, Status } = state;

    const HandleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    useEffect(() => {
        const calculateAmountAndTotal = () => {
            const amount = parseFloat(state.Rate) * parseFloat(state.Quantity);
            const total = amount; // Adjust total based on your calculation logic
            setState(prevState => ({ ...prevState, Amount: amount, Total: total }));
        }

        calculateAmountAndTotal();
    }, [state.Rate, state.Quantity]);

    useEffect(() => {
        const dbRef = ref(database, '/records');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                setRecords(data);
                const invoiceNos = Object.values(data).map(record => parseInt(record.InvoiceNo));
                const maxInvoiceNo = Math.max(...invoiceNos);
                setLastInvoiceNo(maxInvoiceNo);
            } else {
                setRecords({});
                setLastInvoiceNo(188);
            }
        })

        return () => {
            setRecords({});
            setLastInvoiceNo(0);
        }
    }, [])

    useEffect(() => {
        if (id) {
            setState({ ...records[id] })
        } else {
            setState({ ...initialState, InvoiceNo: lastInvoiceNo + 1 }); // Incrementing the invoice number from the last one
        }

        return () => {
            setState({ ...initialState })
        }

    }, [id, records, lastInvoiceNo])

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!InvoiceNo || !date || !Company || !ArticleName || !RGP || !PO || !Quantity || !Rate || !Status) {
            toast.error('Please provide all the details');
        } else {
            if (!id) {
                const dbRef = ref(database, '/records');
                push(dbRef, state)
                    .then(() => {
                        toast.success('Record added successfully');
                        setState({ ...initialState });
                    })
                    .catch(err => toast.error(err.message))
            } else {
                const dbRef = ref(database, `/records/${id}`);
                set(dbRef, state)
                    .then(() => {
                        toast.success('Record updated successfully');
                        setState({ ...initialState });
                    })
                    .catch(err => toast.error(err.message))
            }
        }
        setTimeout(() => { navigate('/'); }, 1000);
    }

    return (
        <div style={{ marginTop: "10px" }} onSubmit={HandleSubmit}>
            <form style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
                <input type="number" id='InvoiceNo' name='InvoiceNo' placeholder='Invoice Number' value={InvoiceNo || ""} onChange={HandleInputChange} disabled />
                <input type="date" id='date' name='date' placeholder='date' value={date || ""} onChange={HandleInputChange} />
                <input type="text" id='Company' name='Company' placeholder='Company' value={Company || ""} onChange={HandleInputChange} />
                <input type="text" id='ArticleName' name='ArticleName' placeholder='Article Name' value={ArticleName || ""} onChange={HandleInputChange} />
                <input type="number" id='RGP' name='RGP' placeholder='RGP' value={RGP || ""} onChange={HandleInputChange} />
                <input type="number" id='PO' name='PO' placeholder='PO' value={PO || ""} onChange={HandleInputChange} />
                <input type="number" id='Quantity' name='Quantity' placeholder='Quantity' value={Quantity || ""} onChange={HandleInputChange} />
                <input type="number" id='Rate' name='Rate' placeholder='Rate' value={Rate || ""} onChange={HandleInputChange} />
                <input type="number" id='Amount' name='Amount' placeholder='Amount' value={state.Amount || ""} disabled />
                <input type="number" id='Total' name='Total' placeholder='Total' value={state.Total || ""} disabled />
                <select name="Status" id="Status" value={Status} onChange={HandleInputChange}>
                    <option>Status</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                </select>
                <input type="submit" value={id ? "Update" : "Save"} />
            </form>
        </div>
    )
}

export default AddEdit;
