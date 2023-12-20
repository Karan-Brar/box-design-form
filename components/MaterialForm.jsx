"use client";

import React, { useState, useEffect } from "react";

const MaterialForm = ({ onMaterialChange }) => {
  // List of materials with IDs and names
  const materials = [
    { id: 1, name: "Material 1" },
    { id: 2, name: "Material 2" },
    { id: 3, name: "Material 3" },
  ];

  // State to hold the IDs of selected materials
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Use effect triggered when selectedMaterials changes
  useEffect(() => {
    // Map selected material IDs to their names from materials list
    const materialNames = selectedMaterials.map(
      (materialId) =>
        materials.find((material) => material.id === materialId)?.name
    );

    // Package selected material names into materialData object and send it to the parent component
    const materialData = { selectedMaterials: materialNames };
    onMaterialChange(materialData);
  }, [selectedMaterials]);

  // Function to handle selection/deselection of materials
  const handleMaterialSelection = (materialId) => {
    const isMaterialSelected = selectedMaterials.includes(materialId);
    if (isMaterialSelected) {
      // Remove the material ID from selectedMaterials if already selected
      const updatedSelection = selectedMaterials.filter(
        (id) => id !== materialId
      );
      setSelectedMaterials(updatedSelection);
    } else {
      // Add the material ID to selectedMaterials if not selected
      setSelectedMaterials([...selectedMaterials, materialId]);
    }
  };

  return (
    <div className="form-tab">
      {/* Title section for Select Materials */}
      <h2 className="text-2xl font-bold mb-4 bg-blue-500 text-white p-5">
        Select Materials
      </h2>
      <div className="md:flex">
        <div className="p-8 pt-5 pb-14 w-full">
          <table className="table-auto w-full">
            <thead>
              <tr>
                {/* Table headers for Material ID and Name */}
                <th className="px-4 py-2 text-gray-700 font-semibold mb-2 text-sm sm:text-md">
                  Material ID
                </th>
                <th className="px-4 py-2 text-gray-700 font-semibold mb-2 text-sm sm:text-md">
                  Material Name
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through materials to display each material in a row */}
              {materials.map((material) => (
                <tr key={material.id}>
                  <td className="border sm:px-4 px-2 sm:py-2 py-1 text-sm text-md">
                    {material.id}
                  </td>
                  <td className="border sm:px-4 px-2 sm:py-2 py-1 text-sm text-md">
                    {material.name}
                  </td>
                  {/* Checkbox for selecting/deselecting materials */}
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      onChange={() => handleMaterialSelection(material.id)}
                      checked={selectedMaterials.includes(material.id)}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaterialForm;
