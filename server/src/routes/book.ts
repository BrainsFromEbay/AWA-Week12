import {Request, Response, Router} from "express"
import {Book} from "../models/Book"

const router: Router = Router()

router.post("/", async (req: Request, res: Response) => {
    try {
        const book = new Book(req.body)
        await book.save()
        res.status(201).send(book)
    } catch (error: any) {
        console.error(`Error: ${error}`)
        res.status(500).send(error)
    }
})

export default router