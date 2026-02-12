import "./Filter.css"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {
    resetFiltersAC, selectAuthorFilter, selectFavoriFilter,
    selectTitleFilter,
    setAuthorFilterAC, setOnlyFavoriteFilterAC,
    setTitleFilterAC
} from "../../redux/slice/filter-slice.ts";
import type {ChangeEvent} from "react";

const Filter = () => {
    const dispatch = useAppDispatch()
    const titleFilter = useAppSelector(selectTitleFilter)
    const authorFilter = useAppSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useAppSelector(selectFavoriFilter)

    const handleTitleFilterChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        dispatch(setTitleFilterAC({title: e.target.value}))
    }
    const handleAuthorFilterChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        dispatch(setAuthorFilterAC({author: e.target.value}))
        console.log(authorFilter)
    }

    const handleOnlyFavoriteFilter = () => {
        dispatch(setOnlyFavoriteFilterAC())
    }

    const handleFiltersReset = () => {
        dispatch(resetFiltersAC())
    }
    return (
        <div className='app-block filter'>
            <div className='filter-row'>
                <div className='filter-group'>
                    <input onChange={handleTitleFilterChange}
                           type='text'
                           placeholder='Filter by title'
                           value={titleFilter}/>
                </div>
                <div className='filter-group'>
                    <input onChange={handleAuthorFilterChange}
                           type='text'
                           placeholder='Filter by author'
                           value={authorFilter}/>
                </div>
                <div className='filter-group'>
                    <label>
                        <input type='checkbox' checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilter}/>
                        Only Favorite
                    </label>
                </div>
                <button type='button' onClick={handleFiltersReset}>Reset filters</button>
            </div>


        </div>
    )
}

export default Filter