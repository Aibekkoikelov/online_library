import { useState} from "react";


export default function useFetching(callback: () => Promise<any>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);


    const fetchData = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (error: any) {
            setError(error.message);
        }finally {
            setIsLoading(false)
        }
    };


    return [fetchData, isLoading, error];
}