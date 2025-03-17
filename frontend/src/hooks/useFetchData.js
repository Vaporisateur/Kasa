import { useEffect, useState } from 'react';

export function useFetchData(urlOrData) {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        if (typeof urlOrData === 'string') {
            const fetchData = async () => {
                try {
                    const response = await fetch(urlOrData)
                    const data = await response.json()
                    setState({ data, isLoading: false, error: null })
                } catch (error) {
                    setState({ data: null, isLoading: false, error: error })
                }
            }
            fetchData()
        } else {
            setState({ isLoading: false, data: urlOrData })
        }
    }, [urlOrData])

    return state
}