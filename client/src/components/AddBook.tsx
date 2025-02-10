import {useState} from "react"

interface AddBookProps {
  onAdd: (book: { name: string; author: string; pages: number }) => void
}

const AddBook: React.FC<AddBookProps> = ({onAdd}) => {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState<number | "">("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    onAdd({name, author, pages: Number(pages)})
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Book name
              <input 
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}/>
          </label>
          <label>Author
              <input 
                  id="author"
                  type="text"
                  onChange={(e) => setAuthor(e.target.value)}      
                  value={author}/> 
          </label>     
          <label>Pages
              <input 
                  id="pages"
                  type="number"
                  onChange={(e) => setPages(Number(e.target.value))}
                  value={pages}/>
          </label>
          <button id="submit" type="submit">Add book</button>
      </form>
    </div>
  )
}

export default AddBook