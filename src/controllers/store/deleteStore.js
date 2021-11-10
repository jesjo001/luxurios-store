import axios from 'axios';
import Store from '../../models/Store'

export const deleteStore = async (req, res, next) => {

    if(!req.params.id) return res.status(500).send("Invalid query parameters")

    const { id } = req.params;

    const user = req.user

    if(user.role !== "admin") return res.status(505).json({ status: 505, message: "Invalid role"})

    try {

        const store = await Store.deleteOne({_id: id})

        if(!store) return res.status(401).send("Store not found")

        return res.status(200).json({
            store,
            message: "Store deleted successfully"
        })
    } catch (e) {
        console.log(e)
    }

}