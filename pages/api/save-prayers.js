import { savePrayer } from "../../components/libs/sheets"

export default function save(req, res){
    if (req.method === 'POST'){
        savePrayer(req.body);
    }
    else {
        res.status(405).send({ message: 'Only POST requests allowed' })
    return
    }
}