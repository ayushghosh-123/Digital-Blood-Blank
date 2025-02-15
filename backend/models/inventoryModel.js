import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  inventoryType: {
    type: String,
    required: [true, "inventory type require"],
    enum: ["in", "out"],
  },
  bloodGroup: {
    type: String,
    required: [true, "blood group is required"],
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "organization is reqire"],
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.inventoryType === "out";
    },
  },
  donar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.inventoryType === "in";
    },
  },  
},
    {timetamps: true}
);

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
