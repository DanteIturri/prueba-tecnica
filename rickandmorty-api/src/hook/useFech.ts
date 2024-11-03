import { useCallback, useEffect, useState } from 'react'



export const useFetch = (url: string , currentPage: number) => {
  const [data, setData] = useState<[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [infoPages, setInfoPages] = useState<number | null>(null);
  const fechtData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}?page=${currentPage}`)
      const data = await response.json()
      setData(data.results)
      setInfoPages(data.info.pages)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      setError(error as string)
      setLoading(false)
    }
  }, [url , currentPage])
 useEffect(() => {
    fechtData()
  }, [fechtData])
  
  return { data, loading, error,infoPages }
}