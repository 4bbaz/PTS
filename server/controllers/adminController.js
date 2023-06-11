import Admin from "../models/admin.js";

export const addAdmin = async (req, res) => {
    try {
        // const { username, password } = req.body;
        const username = req.body.user;
        const password = req.body.pass;

        console.log('username:', username, 'pass:', password);
        const newAdmin = new Admin({
            username,
            password
        })

        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to add trainee" });
    }
}


export const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch admin' });
    }
};