interface IBook {
    id: number,
    name: string,
    author: string,
    pages: number,
}

interface BooksProps {
    books: IBook[]
}

const Books: React.FC<BooksProps> = ({books}) => {
    return (
      <div>
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.name} by {book.author}, {book.pages} pages
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Books;