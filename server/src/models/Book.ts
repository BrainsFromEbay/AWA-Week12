import mongoose, {Document, Schema} from "mongoose"

interface IBook extends Document {
    author: string
    name: string
    pages: number
}

const BookSchema: Schema = new Schema({
    author: {type: String, required: true},
    name: {type: String, required: true},
    pages: {type: Number, required: true},
})

export const Book = mongoose.model<IBook>("Book", BookSchema)