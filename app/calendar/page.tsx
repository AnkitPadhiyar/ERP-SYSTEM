"use client";
import React, { useState } from "react";
import { Calendar } from "../../components/ui/calendar";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Company Events & Holidays</h2>
        <p>See upcoming company-wide events, meetings, and holidays.</p>
        <div className="mb-4">
          <Calendar selected={selectedDate} onChange={setSelectedDate} />
        </div>
        <table className="min-w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Event</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Department</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Annual Meeting</td>
              <td className="border px-2 py-1">2025-08-20</td>
              <td className="border px-2 py-1">Management</td>
              <td className="border px-2 py-1">Scheduled</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Project Deadline</td>
              <td className="border px-2 py-1">2025-08-25</td>
              <td className="border px-2 py-1">Development</td>
              <td className="border px-2 py-1">Upcoming</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Employee Schedules</h2>
        <p>View employee work schedules, leave dates, and shift timings.</p>
        <table className="min-w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Employee</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Type</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">John Doe</td>
              <td className="border px-2 py-1">2025-08-21</td>
              <td className="border px-2 py-1">Leave</td>
              <td className="border px-2 py-1">Approved</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Jane Smith</td>
              <td className="border px-2 py-1">2025-08-22</td>
              <td className="border px-2 py-1">Shift</td>
              <td className="border px-2 py-1">Scheduled</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Deadlines & Reminders</h2>
        <p>Track bill payments, contract renewals, and project deadlines.</p>
        <table className="min-w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Task</th>
              <th className="border px-2 py-1">Due Date</th>
              <th className="border px-2 py-1">Department</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Pay Electricity Bill</td>
              <td className="border px-2 py-1">2025-08-12</td>
              <td className="border px-2 py-1">Finance</td>
              <td className="border px-2 py-1">Pending</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Renew Contract</td>
              <td className="border px-2 py-1">2025-08-30</td>
              <td className="border px-2 py-1">Legal</td>
              <td className="border px-2 py-1">Upcoming</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* ...existing code... */}
    </main>
  );
}
