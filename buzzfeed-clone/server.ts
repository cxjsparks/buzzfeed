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
            const quizItem: QuizData = await response.data.data["ccf66f29-8fc7-47a4-9cc0-8b7e9653f4d7"]
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
            res.send(quizItem)
        }
    } catch (e) {
        console.log(`This happended: ${e}`)
    }
})

app.listen(PORT, () => console.log("server is running on port " + PORT))