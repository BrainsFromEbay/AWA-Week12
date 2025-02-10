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

router.get("/:name", async (req: Request, res: Response): Promise<void> => {
    try {
        const book = await Book.findOne({name: req.params.name})
        if (!book) {
            res.status(404).send()
            return
        }
        res.send(book)
    } catch (error: any) {
        console.error(`Error ${error}`)
        res.status(500).send(error)
    }
})

export default router