import {toast, ToastContainer} from "react-toastify";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {clearErrorAC, selectError} from "../../redux/slice/error-slice.ts";
import {useEffect} from "react";


export const  Error = ()=>{
    const errorMessage = useAppSelector(selectError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (errorMessage){
            toast.info(errorMessage)
            dispatch(clearErrorAC())
        }
    }, [errorMessage,dispatch]);
    return<ToastContainer position='top-right' autoClose={8000}/>
}