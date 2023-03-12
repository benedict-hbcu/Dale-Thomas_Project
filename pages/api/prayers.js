import { getPrayer } from "../../components/libs/sheets";
import { getStaticProps } from "./prpuller";

export default async function read(req, res){
    if (req.method === 'GET'){
        try{
            await getStaticProps([JSON.parse(req.props)])
            res.status(200).send(true)
            console.log(req.props)
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