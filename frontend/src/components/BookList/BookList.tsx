import './BookList.css'
import {useAppSelector} from "../../redux/hooks/hooks.ts";
import {selectBook} from "../../redux/books/books-slice.ts";

const BookList = () => {
const books= useAppSelector(selectBook)

    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>
            {books.length ===0?(
                <p>No books</p>
            ):(<ul>
                    {books.map((book,i)=>(
                        <li key={book.id}>
                            <div className='book-info'>{++i}. {book.title} by <strong>{book.author}</strong></div>
                        </li>
                    ))}
            </ul>
            )}
        </div>
    )
}


export default BookList