import { getPrayer } from "../../components/libs/sheets";
import { getStaticProps } from "../../components/prpuller";

export default async function read(req, res){
    if (req.method === 'GET'){
        try{
            const response= await getPrayer();

            //const {sheet} = await response.json();
            console.log(response)
            res.status(200).send(response)
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