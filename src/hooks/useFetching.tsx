import { useState} from "react";
import {IBook} from "../types/types";


export default function useFetching(callback: (data: IBook) => Promise<any>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);


    const fetchData = async (data: IBook) => {
        try {
            setIsLoading(true);
            await callback(data);
        } catch (error: any) {
            setError(error.message);
        }finally {
            setIsLoading(false)
        }
    };


    return [fetchData, isLoading, error];
}