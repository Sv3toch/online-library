import {BsBookmarkStarFill, BsBookmarkStar} from "react-icons/bs";
import './BookList.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {deleteAllBookAc, deleteBookAc, isFavoriteAC, selectBook} from "../../redux/slice/books-slice.ts";
import {selectAuthorFilter, selectFavoriFilter, selectTitleFilter} from "../../redux/slice/filter-slice.ts";


const BookList = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(selectBook)
    const titleFilter = useAppSelector(selectTitleFilter)
    const authorFilter = useAppSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useAppSelector(selectFavoriFilter)

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

    const filteredBooks = books.filter((book) => {
        const title = book.title || "";
        const author = book.author || "";
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true

        return (
            title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            author.toLowerCase().includes(authorFilter.toLowerCase()) && matchesFavorite
        );
    });

    const highlightMatch = (text: string, filter: string) => {
        if (!filter.trim()) return text

        const regex = new RegExp(`(${filter})`, 'gi');

        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className='highlight'>
                        {substring}
                    </span>
                )
            }
            return substring
        })
    }

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
                                <div
                                    className='book-info'>{++i}. {highlightMatch(book.title, titleFilter)} by <strong>{highlightMatch(book.author, authorFilter)}</strong> ({book.source})
                                </div>
                                <div className='book-actions'>
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className='star-icon'
                                                            onClick={() => isFavoryHandler(book.id)}/>
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