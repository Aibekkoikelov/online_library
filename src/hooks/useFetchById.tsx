

import { useState} from "react";


export default function useFetchById(callback: (data: string) => Promise<void>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);


    const fetchData = async (data: string) => {
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