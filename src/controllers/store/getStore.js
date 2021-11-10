import axios from 'axios';
import Store from '../../models/Store'

export const getSingleStore = async (req, res, next) => {

    if(!req.params.id) return res.status(500).send("Invalid query parameters")

    const { id } = req.params;

    try {

        const store = await Store.findOne({_id: id})

        if(!store) return res.status(401).send("Store not found")
        return res.status(200).json({
            store
        })
    } catch (e) {
        console.log(e)
    }

}