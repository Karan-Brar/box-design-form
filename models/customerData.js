import mongoose from "mongoose";

const { Schema } = mongoose;

const formDataSchema = new Schema({
  jobName: { type: String, default: "" },
  customerName: { type: String, default: "" },
  selectedMaterials: [String],
  printType: { type: String, default: "" },
  printCustomerName: { type: Boolean, default: false },
  printCustomText: { type: Boolean, default: false },
  customText: { type: String, default: "" },
  designNotes: { type: String, default: "" },
});

const FormData = mongoose.model("Form_Order", formDataSchema);

export default FormData;
