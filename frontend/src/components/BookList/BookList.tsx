import {BsBookmarkStarFill, BsBookmarkStar} from "react-icons/bs";
import './BookList.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {deleteAllBookAc, deleteBookAc, isFavoriteAC, selectBook} from "../../redux/slice/books-slice.ts";


const BookList = () => {
    const books = useAppSelector(selectBook)
    const dispatch = useAppDispatch()
    const deleteBook = (id: string) => {
        dispatch(deleteBookAc({bookId: id}))
    }
    const isFavoryhandler = (id: string) => {
        dispatch(isFavoriteAC({bookId: id}))
    }

    const handleDeleteAll = () => {
        dispatch(deleteAllBookAc()) // Вызываем экшен без параметров
    }


    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>

            {books.length === 0 ? (
                <p>No books</p>
            ) : (<>
                <button onClick={handleDeleteAll}>Удалить все</button>
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className='book-info'>{++i}. {book.title} by <strong>{book.author}</strong></div>
                            <div className='book-actions'>
                                {book.isFavorite ? (
                                    <BsBookmarkStarFill className='star-icon' onClick={() => isFavoryhandler(book.id)}/>
                                ) : (
                                    <BsBookmarkStar className='star-icon' onClick={() => isFavoryhandler(book.id)}/>
                                )}
                                <button onClick={() => deleteBook(book.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>

            )}
        </div>
    )
}


export default BookList