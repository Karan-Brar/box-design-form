"use client";

import JobInfoForm from "@/components/JobInfoForm";
import MaterialForm from "@/components/MaterialForm";
import PrintingForm from "@/components/PrintingForm";
import NotesForm from "@/components/NotesForm";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    jobInfo: { jobName: "", customerName: "" },
    material: { selectedMaterials: [] },
    printing: {
      printType: "",
      printCustomerName: false,
      printCustomText: false,
      customText: "",
    },
    notes: { designNotes: "" },
  });

  const handleJobInfoChange = (jobInfoData) => {
    setFormData((prevData) => ({ ...prevData, jobInfo: jobInfoData }));
  };

  const handleMaterialChange = (materialData) => {
    setFormData((prevData) => ({ ...prevData, material: materialData }));
  };

  const handlePrintingChange = (printingData) => {
    setFormData((prevData) => ({ ...prevData, printing: printingData }));
  };

  const handleNotesChange = (notesData) => {
    setFormData((prevData) => ({ ...prevData, notes: notesData }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/handleSave", {
        method: "POST",
        body: JSON.stringify({
          jobName: formData.jobInfo.jobName,
          customerName: formData.jobInfo.customerName,
          selectedMaterials: formData.material.selectedMaterials,
          printType: formData.printing.printType,
          printCustomerName: formData.printing.printCustomerName,
          printCustomText: formData.printing.printCustomText,
          customText: formData.printing.customText,
          designNotes: formData.notes.designNotes,
        }),
      });

      if (response.ok) {
        // Reset form data
        setFormData({
          jobInfo: { jobName: "", customerName: "" },
          material: { selectedMaterials: [] },
          printing: {
            printType: "",
            printCustomerName: false,
            printCustomText: false,
            customText: "",
          },
          notes: { designNotes: "" },
        });

        alert("Form submitted successfully!");

        window.location.reload();
      } else {

        console.error("Failed to submit the form");
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="sm:mb-20 mb-10 slate-950 text-4xl sm:text-6xl">Box Design Form</h1>
      <JobInfoForm onJobInfoChange={handleJobInfoChange} />
      <MaterialForm onMaterialChange={handleMaterialChange} />
      <PrintingForm onPrintingChange={handlePrintingChange} />
      <NotesForm onNotesChange={handleNotesChange} />
      <button
        onClick={handleSave}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Box Design
      </button>
    </main>
  );
}
