
"use client";
import React, { useState } from "react";

export default function DocumentsPage() {
  // Transactions state
  const [transactions, setTransactions] = useState([
    { date: "2025-08-01", type: "Payment", amount: "₹10,000", status: "Completed" },
    { date: "2025-08-05", type: "Receipt", amount: "₹5,000", status: "Pending" },
  ]);
  const [newTransaction, setNewTransaction] = useState({ date: "", type: "", amount: "", status: "" });

  // Invoices state
  const [invoices, setInvoices] = useState([
    { number: "INV-001", client: "ABC Corp", amount: "₹15,000", due: "2025-08-10", status: "Paid" },
    { number: "INV-002", client: "XYZ Ltd", amount: "₹8,000", due: "2025-08-15", status: "Unpaid" },
  ]);
  const [newInvoice, setNewInvoice] = useState({ number: "", client: "", amount: "", due: "", status: "" });

  // Bills state
  const [bills, setBills] = useState([
    { number: "BILL-001", vendor: "Electricity Board", amount: "₹2,500", due: "2025-08-12", status: "Paid" },
    { number: "BILL-002", vendor: "Water Supply", amount: "₹1,200", due: "2025-08-18", status: "Unpaid" },
  ]);
  const [newBill, setNewBill] = useState({ number: "", vendor: "", amount: "", due: "", status: "" });

  // Add transaction
  const handleAddTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ date: "", type: "", amount: "", status: "" });
  };
  // Add invoice
  const handleAddInvoice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvoices([...invoices, newInvoice]);
    setNewInvoice({ number: "", client: "", amount: "", due: "", status: "" });
  };
  // Add bill
  const handleAddBill = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBills([...bills, newBill]);
    setNewBill({ number: "", vendor: "", amount: "", due: "", status: "" });
  };

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Documents</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Transactions</h2>
        <form className="mb-4 flex gap-2" onSubmit={handleAddTransaction}>
          <input type="date" required value={newTransaction.date} onChange={e => setNewTransaction({ ...newTransaction, date: e.target.value })} className="border px-2 py-1" placeholder="Date" />
          <input type="text" required value={newTransaction.type} onChange={e => setNewTransaction({ ...newTransaction, type: e.target.value })} className="border px-2 py-1" placeholder="Type" />
          <input type="text" required value={newTransaction.amount} onChange={e => setNewTransaction({ ...newTransaction, amount: e.target.value })} className="border px-2 py-1" placeholder="Amount" />
          <input type="text" required value={newTransaction.status} onChange={e => setNewTransaction({ ...newTransaction, status: e.target.value })} className="border px-2 py-1" placeholder="Status" />
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
        </form>
        <table className="min-w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Type</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{t.date}</td>
                <td className="border px-2 py-1">{t.type}</td>
                <td className="border px-2 py-1">{t.amount}</td>
                <td className="border px-2 py-1">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Invoices</h2>
        <form className="mb-4 flex gap-2" onSubmit={handleAddInvoice}>
          <input type="text" required value={newInvoice.number} onChange={e => setNewInvoice({ ...newInvoice, number: e.target.value })} className="border px-2 py-1" placeholder="Invoice #" />
          <input type="text" required value={newInvoice.client} onChange={e => setNewInvoice({ ...newInvoice, client: e.target.value })} className="border px-2 py-1" placeholder="Client" />
          <input type="text" required value={newInvoice.amount} onChange={e => setNewInvoice({ ...newInvoice, amount: e.target.value })} className="border px-2 py-1" placeholder="Amount" />
          <input type="date" required value={newInvoice.due} onChange={e => setNewInvoice({ ...newInvoice, due: e.target.value })} className="border px-2 py-1" placeholder="Due Date" />
          <input type="text" required value={newInvoice.status} onChange={e => setNewInvoice({ ...newInvoice, status: e.target.value })} className="border px-2 py-1" placeholder="Status" />
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
        </form>
        <table className="min-w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Invoice #</th>
              <th className="border px-2 py-1">Client</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Due Date</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{inv.number}</td>
                <td className="border px-2 py-1">{inv.client}</td>
                <td className="border px-2 py-1">{inv.amount}</td>
                <td className="border px-2 py-1">{inv.due}</td>
                <td className="border px-2 py-1">{inv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Bills</h2>
        <form className="mb-4 flex gap-2" onSubmit={handleAddBill}>
          <input type="text" required value={newBill.number} onChange={e => setNewBill({ ...newBill, number: e.target.value })} className="border px-2 py-1" placeholder="Bill #" />
          <input type="text" required value={newBill.vendor} onChange={e => setNewBill({ ...newBill, vendor: e.target.value })} className="border px-2 py-1" placeholder="Vendor" />
          <input type="text" required value={newBill.amount} onChange={e => setNewBill({ ...newBill, amount: e.target.value })} className="border px-2 py-1" placeholder="Amount" />
          <input type="date" required value={newBill.due} onChange={e => setNewBill({ ...newBill, due: e.target.value })} className="border px-2 py-1" placeholder="Due Date" />
          <input type="text" required value={newBill.status} onChange={e => setNewBill({ ...newBill, status: e.target.value })} className="border px-2 py-1" placeholder="Status" />
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
        </form>
        <table className="min-w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Bill #</th>
              <th className="border px-2 py-1">Vendor</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Due Date</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{bill.number}</td>
                <td className="border px-2 py-1">{bill.vendor}</td>
                <td className="border px-2 py-1">{bill.amount}</td>
                <td className="border px-2 py-1">{bill.due}</td>
                <td className="border px-2 py-1">{bill.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Contracts & Agreements</h2>
        <p>Store and manage company contracts, agreements, and legal documents.</p>
        {/* Add contracts list/table here */}
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Employee Documents</h2>
        <p>Access employee-related documents such as offer letters, ID proofs, and HR forms.</p>
        {/* Add employee documents list/table here */}
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Company Policies</h2>
        <p>View and update company policies, guidelines, and compliance documents.</p>
        {/* Add policies list/table here */}
      </section>
    </main>
  );
}
