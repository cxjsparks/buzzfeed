import express, { Request, Response } from "express"
import axios, { AxiosResponse} from "axios"
import { QuizData } from "./interfaces"

require ("dotenv").config()
const PORT = 8000
const TOKEN = process.env.TOKEN
const GETURL = process.env.GETURL
const app = express()

app.get("/quiz-item", async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const response: AxiosResponse = await axios.get(GETURL, 
        {
            headers: {
                "X-Cassandra-Token":TOKEN,
                "accept-encoding": "application/json"
            }
        })
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data["9702f749-baf0-45a9-9133-c998e49c3c5c"]
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
            res.send(quizItem)
        }
    } catch (e) {
        console.log(`This happended: ${e}`)
    }
})

app.listen(PORT, () => console.log("server is running on port " + PORT))