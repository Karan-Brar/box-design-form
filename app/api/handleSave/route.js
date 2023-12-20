import { connectToDB } from "@/utils/database";
import FormData from "@/models/customerData";

export const POST = async (request) => {
  const {
    jobName,
    customerName,
    selectedMaterials,
    printType,
    printCustomerName,
    printCustomText,
    customText,
    designNotes,
  } = await request.json();

  try {
    await connectToDB();

    const newFormData = new FormData({
      jobName,
      customerName,
      selectedMaterials,
      printType,
      printCustomerName,
      printCustomText,
      customText,
      designNotes,
    });

    await newFormData.save();

    return new Response(JSON.stringify(newFormData), { status: 201 });
  } catch (error) {
    return new Response("Failed to save form data", { status: 500 });
  }
};
