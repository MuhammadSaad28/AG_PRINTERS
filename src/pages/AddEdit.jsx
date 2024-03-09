import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEdit.css';
import database from '../firebase';
import { ref, push, onValue, update } from 'firebase/database'; // Import 'update' for editing records
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
}

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    // const [lastInvoiceNo, setLastInvoiceNo] = useState(0);
    const [numberOfInvoices, setNumberOfInvoices] = useState(1);
    const navigate = useNavigate();
    const { id,index } = useParams();

    useEffect(() => {
        if (id) {
            // Load existing record for editing
            const dbRef = ref(database, `/records/${id}/${index}`);
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setState(data);
                } else {
                    toast.error('Record not found');
                    navigate('/');
                }
            });
        }
    }, [id,index, navigate]);

    const HandleInputChange = (e) => {
        const { name, value } = e.target;
        let updatedState = { ...state };
    
        // Update the state with the new value
        updatedState[name] = value;
    
        // If Rate or Quantity is changed, recalculate the Amount
        if (name === 'Rate' || name === 'Quantity') {
            const rate = parseFloat(updatedState.Rate || 0);
            const quantity = parseFloat(updatedState.Quantity || 0);
            updatedState.Amount = rate * quantity;
        }
    
        // Update the state
        setState(updatedState);
    };
    

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!state.date || !state.Company ) {
            toast.error('Please provide all the details');
            return;
        }

       
        if (id) {
            // If editing an existing record, update it
            const dbRef = ref(database, `/records/${id}/${index}`);
            update(dbRef, { ...state, ArticleName: state.ArticleName || '' }) // Ensure ArticleName is not undefined
                .then(() => {
                    toast.success('Record updated successfully');
                    setTimeout(() => navigate('/'), 1000);
                })
                .catch(err => toast.error(err.message));
        } else {
            // Otherwise, add a new record
            // const newInvoiceNo = lastInvoiceNo + 1; // Common invoice number for all invoices

            const invoices = [];
            for (let i = 0; i < numberOfInvoices; i++) {
                const invoice = {
                    InvoiceNo: state.InvoiceNo, // Assigning the same invoice number to all invoices
                    date: state.date,
                    Company: state.Company,
                    ArticleName: state[`ArticleName${i}`],
                    RGP: state[`RGP${i}`],
                    PO: state[`PO${i}`],
                    Quantity: state[`Quantity${i}`],
                    Rate: state[`Rate${i}`],
                    Amount: parseFloat(state[`Rate${i}`]) * parseFloat(state[`Quantity${i}`]),
                    Total: 0, // Placeholder for total
                };
                invoices.push(invoice);
            }

            // Calculate total for each invoice
            const totalAmount = invoices.reduce((total, invoice) => total + invoice.Amount, 0);
            invoices.forEach(invoice => invoice.Total = totalAmount);

            const dbRef = ref(database, '/records');
            push(dbRef, invoices) // Pushing all invoices as a single object
                .then(() => {
                    toast.success('Records added successfully');
                    setState(initialState);
                    setTimeout(() => navigate('/'), 1000);
                })
                .catch(err => toast.error(err.message));
        }
    };

    return (
        <>
        { id ? 
        <div style={{ marginTop: '10px' }} onSubmit={HandleSubmit}>
        <form style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}>
            <input type="date" id='date' name='date' placeholder='date' value={state.date || ''} onChange={HandleInputChange} />
            <input type="text" id='Company' name='Company' placeholder='Company' value={state.Company || ''} onChange={HandleInputChange} />
           
            <div>
               
                    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <input type="number" name="InvoiceNo" placeholder='Invoice Number' value={state.InvoiceNo} onChange={HandleInputChange} />
                        <input type="number" name="RGP" placeholder='RGP' value={state.RGP} onChange={HandleInputChange} />
                        <input type="number" name="PO" placeholder='PO' value={state.PO} onChange={HandleInputChange} />
                        <input type="text" name="ArticleName" placeholder='Article Name' value={state.ArticleName} onChange={HandleInputChange} />
                        <input type="number" name="Rate" placeholder='Rate' value={state.Rate} onChange={HandleInputChange} />
                        <input type="number" name="Quantity" placeholder='Quantity' value={state.Quantity} onChange={HandleInputChange} />
                        <input type="number" name="Amount" placeholder='Amount' value={state.Amount} disabled />
                    </div>
              
            </div>
            <input type="submit" value={id ? "Update" : "Save"} />
        </form>
    </div>
        :
        <div style={{ marginTop: '10px' }} onSubmit={HandleSubmit}>
            <form style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}>
                <input type="number" id='InvoiceNo' name='InvoiceNo' placeholder='InvoiceNo'  value={state.InvoiceNo} onChange={HandleInputChange}/>
                <input type="date" id='date' name='date' placeholder='date' value={state.date || ''} onChange={HandleInputChange} />
                <input type="text" id='Company' name='Company' placeholder='Company' value={state.Company || ''} onChange={HandleInputChange} />
                <select name="numberOfInvoices" id="numberOfInvoices" value={numberOfInvoices} onChange={(e) => setNumberOfInvoices(parseInt(e.target.value))}>
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                <div>
                    {[...Array(numberOfInvoices)].map((_, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h3>Invoice {index + 1}</h3>
                            <input type="number" name={`RGP${index}`} placeholder='RGP' value={state[`RGP${index}`] || ''} onChange={HandleInputChange} />
                            <input type="number" name={`PO${index}`} placeholder='PO' value={state[`PO${index}`] || ''} onChange={HandleInputChange} />
                            <input type="text" name={`ArticleName${index}`} placeholder='Article Name' value={state[`ArticleName${index}`] || ''} onChange={HandleInputChange} />
                            <input type="number" name={`Rate${index}`} placeholder='Rate' value={state[`Rate${index}`] || ''} onChange={HandleInputChange} />
                            <input type="number" name={`Quantity${index}`} placeholder='Quantity' value={state[`Quantity${index}`] || ''} onChange={HandleInputChange} />
                            {/* <input type="number" name={`Amount${index}`} placeholder='Amount' value={state[`Amount${index}`] || ''} disabled /> */}
                        </div>
                    ))}
                </div>
                <input type="submit" value={id ? "Update" : "Save"} />
            </form>
        </div>
        }
        </>
    );
};

export default AddEdit;
