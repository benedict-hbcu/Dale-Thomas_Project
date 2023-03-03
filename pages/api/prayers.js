import { getPrayer } from "../../components/libs/sheets";

export default function read(req, res){
    if (req.method === 'GET'){
        getPrayer(req.body);
    }
    else {
        res.status(405).send({ message: 'Only POST requests allowed' })
    return
    }
}