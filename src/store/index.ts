import {configureStore} from '@reduxjs/toolkit';
import {booksReducer} from "./reducer/booksReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        books: booksReducer,}
})


 type RootState = ReturnType<typeof store.getState>
 type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
