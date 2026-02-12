import {BsBookmarkStarFill, BsBookmarkStar} from "react-icons/bs";
import './BookList.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {deleteAllBookAc, deleteBookAc, isFavoriteAC, selectBook} from "../../redux/slice/books-slice.ts";
import {selectTitleFilter} from "../../redux/slice/filter-slice.ts";


const BookList = () => {
    const books = useAppSelector(selectBook)
    const dispatch = useAppDispatch()
    const titleFilter = useAppSelector(selectTitleFilter)

    const deleteBook = (id: string) => {
        dispatch(deleteBookAc({bookId: id}))
    }

    const isFavoryHandler = (id: string) => {
        dispatch(isFavoriteAC({bookId: id}))
    }

    const handleDeleteAll = () => {
        const isConfirmed = window.confirm("Вы точно хотите удалить все книги?");

        if (isConfirmed) {
            dispatch(deleteAllBookAc()); //
        }
    }

    const filteredBooks=books.filter((book)=>
     book.title.toLowerCase().includes(titleFilter.toLowerCase())
    )

    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>

            {books.length === 0 ? (
                <p>No books</p>
            ) : (<>
                <button onClick={handleDeleteAll}>Удалить все книги</button>
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className='book-info'>{++i}. {book.title} by <strong>{book.author}</strong></div>
                            <div className='book-actions'>
                                {book.isFavorite ? (
                                    <BsBookmarkStarFill className='star-icon' onClick={() => isFavoryHandler(book.id)}/>
                                ) : (
                                    <BsBookmarkStar className='star-icon' onClick={() => isFavoryHandler(book.id)}/>
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