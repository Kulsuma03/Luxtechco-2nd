import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(url).then(res => setData(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))

    },[url])

    return {data, loading, error};
};

export default useFetch;