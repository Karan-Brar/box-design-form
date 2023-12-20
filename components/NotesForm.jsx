"use client";

import React, { useState, useEffect } from "react";

const NotesForm = ({ onNotesChange }) => {
  // State variable to hold design notes
  const [designNotes, setDesignNotes] = useState("");

  // Function to handle changes in design notes
  const handleDesignNotesChange = (event) => {
    setDesignNotes(event.target.value);
  };

  // Use effect triggered when designNotes changes
  useEffect(() => {
    // Package designNotes into notesData object and send it to the parent component
    const notesData = { designNotes };
    onNotesChange(notesData);
  }, [designNotes]);

  return (
    <div className="form-tab">
      {/* Title section for Additional Notes */}
      <h2 className="text-2xl font-bold mb-4 bg-blue-500 text-white p-5">
        Additional Notes
      </h2>
      <div className="md:flex">
        <div className="p-8 w-full pt-5">
          <div className="mb-4 w-full">
            {/* Input field for Design Notes */}
            <label
              htmlFor="designNotes"
              className="block text-gray-700 font-semibold mb-2"
            >
              Design Notes
            </label>
            <textarea
              id="designNotes"
              value={designNotes}
              onChange={handleDesignNotesChange}
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500 h-40 w-full"
              placeholder="Enter design notes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesForm;
