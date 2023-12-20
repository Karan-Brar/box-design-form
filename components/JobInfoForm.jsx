"use client";

import { useState, useEffect } from "react";

const JobInfoForm = ({ onJobInfoChange }) => {
  // State variables to hold jobName and customerName
  const [jobName, setJobName] = useState("");
  const [customerName, setCustomerName] = useState("");

  // List of customers
  const customers = ["Customer A", "Customer B", "Customer C"];

  // Triggered whenever jobName or customerName changes
  useEffect(() => {
    // Package jobName and customerName into jobInfoData object and send it to the parent component
    const jobInfoData = { jobName, customerName };
    onJobInfoChange(jobInfoData);
  }, [jobName, customerName]);

  return (
    <div className="form-tab">
      {/* Title section for Job Information */}
      <h2 className="text-2xl font-bold mb-4 bg-blue-500 text-white p-5">
        Job Information
      </h2>
      <div className="md:flex">
        <div className="p-8 pt-5">
          {/* Input field for Job Name */}
          <div className="mb-4">
            <label
              htmlFor="jobName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Job Name
            </label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter job name"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>

          {/* Dropdown selection for Customer Name */}
          <div className="mb-4">
            <label
              htmlFor="customerName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Customer Name
            </label>
            <select
              id="customerName"
              name="customerName"
              value={customerName}
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => setCustomerName(e.target.value)}
            >
              <option value="">Select customer</option>
              {customers.map((customer, index) => (
                <option key={index} value={customer}>
                  {customer}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfoForm;
