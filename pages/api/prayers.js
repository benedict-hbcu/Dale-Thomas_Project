import { getPrayer } from "../../components/libs/sheets";

export default async function read(req, res){
    if (req.method === 'GET'){
        try{
            await getPrayer([JSON.parse(req.props)])
            res.status(200).send(true)
        }
       catch(e){
        console.log(e)
        res.status(500).send({message: "Error occurred"})
      }
    }
    else {
        res.status(405).send({ message: 'Only GET requests allowed' })
    return
    }
}