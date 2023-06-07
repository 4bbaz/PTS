import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const Admin = mongoose.model("admin", AdminSchema);
export default Admin;