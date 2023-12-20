"use client";

import React, { useState, useEffect } from "react";

const PrintingForm = ({ onPrintingChange }) => {
  // State variables to handle printing details
  const [printType, setPrintType] = useState("");
  const [printCustomerName, setPrintCustomerName] = useState(false);
  const [printCustomText, setPrintCustomText] = useState(false);
  const [customText, setCustomText] = useState("");

  // Array of print types (Replace this with actual print types)
  const printTypes = ["Type A", "Type B", "Type C"]; // Replace this with your print types

  // Functions to handle changes in form components
  const handlePrintTypeChange = (event) => {
    setPrintType(event.target.value);
  };

  const handlePrintCustomerNameChange = () => {
    setPrintCustomerName(!printCustomerName);
  };

  const handlePrintCustomTextChange = () => {
    setPrintCustomText(!printCustomText);
  };

  const handleCustomTextChange = (event) => {
    setCustomText(event.target.value);
  };

  // Use effect triggered when printing details change
  useEffect(() => {
    const printingData = {
      printType,
      printCustomerName,
      printCustomText,
      customText,
    };
    onPrintingChange(printingData);
  }, [printType, printCustomerName, printCustomText, customText]);

  return (
    <div className="form-tab">
      {/* Title section for Printing Details */}
      <h2 className="text-2xl font-bold mb-4 bg-blue-500 text-white p-5">
        Printing Details
      </h2>
      <div className="md:flex">
        <div className="p-8 pt-5">
          <div className="mb-7">
            {/* Dropdown for Print Type */}
            <label
              htmlFor="printType"
              className="block text-gray-700 font-semibold mb-2"
            >
              Print Type
            </label>
            <select
              id="printType"
              name="printType"
              value={printType}
              onChange={handlePrintTypeChange}
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select print type</option>
              {printTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-7 flex items-center">
            {/* Checkbox for Print Customer Name */}
            <label
              htmlFor="printCustomerName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Print Customer Name
            </label>
            <input
              type="checkbox"
              id="printCustomerName"
              checked={printCustomerName}
              onChange={handlePrintCustomerNameChange}
              className="form-checkbox h-5 w-5 text-blue-500 ml-3 mb-2"
            />
          </div>
          <div className="mb-4">
            {/* Checkbox for Print Custom Text */}
            <div className="flex items-center">
              <label
                htmlFor="printCustomText"
                className="block text-gray-700 font-semibold mb-2"
              >
                Print Custom Text
              </label>
              <input
                type="checkbox"
                id="printCustomText"
                checked={printCustomText}
                onChange={handlePrintCustomTextChange}
                className="form-checkbox h-5 w-5 text-blue-500 ml-3 mb-2"
              />
            </div>
            {printCustomText && (
              <input
                type="text"
                id="customText"
                value={customText}
                onChange={handleCustomTextChange}
                className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500 mt-2"
                placeholder="Enter custom text"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingForm;
