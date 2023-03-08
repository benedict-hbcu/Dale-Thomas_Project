import { savePrayer, constants } from "../../components/libs/sheets"

export default async function save(req, res){
    if (req.method === 'POST'){
        try{
            await savePrayer(JSON.parse(req.body))
            res.status(200).send(true)
        }
       catch(e){
        console.log(e)
        res.status(500).send({message: "Error occurred"})
        
      }
    }
    else{
      res.status(405).send({message: "Method not supported"})
    }
}
