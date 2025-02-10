import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

interface BookDetailProps {
    books: {id: number, name: string, author: string, pages: number}[]
}

const BookDetails: React.FC<BookDetailProps> = ({books}) => {
    const {bookName} = useParams<{bookName: string}>()

    const book = books.find((b) => b.name === decodeURIComponent(bookName || ""))

    if (!book) {
        return(
            <div>
                <h1>404: This is not the webpage you are looking for</h1>
            </div>
        )
    }

    return (
        <div>
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}

export default BookDetails