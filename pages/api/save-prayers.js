import { savePrayer, constants } from "../../components/libs/sheets"

export default async function save(req, res){
    if (req.method === 'POST'){
        try{
            await savePrayer(req.body)
            res.status(200).send(true)
        }
       catch(e){
        res.status(500).send({message: "Error occurred"})
        console.log(req.body)
      }
    }
    else{
      res.status(405).send({message: "Method not supported"})
    }
}
