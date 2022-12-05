import express, { Request, Response } from "express"
import axios, { AxiosResponse} from "axios"

const PORT = 8000
const app = express()

app.get("/quiz-item", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get("https://8cdf6caf-12b6-4aab-9e8b-7790e950507d-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/Quizzes/collections/Quizzes_quirky", 
        {
            headers: {
                "X-Cassandra-Token":"AstraCS:tLOgMWgaCurWLomeHdHSFFbQ:e724f7fac0b1bb78c5eb54e25eeb0712e036b7e324c61d80e3b15ca67a951999",
                "accept": "application/json"
            }
        })
    }
})

app.listen(PORT, () => console.log("server is running on port " + PORT))