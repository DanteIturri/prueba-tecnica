import { useCallback, useEffect, useState, useRef } from 'react';

interface FetchedData {
  results: [];  // Adjust 'any' to the appropriate type as needed
  info: {
    pages: number;
  };
}

export const useFetch = (url: string, currentPage: number) => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [infoPages, setInfoPages] = useState<number | null>(null);

  const cache = useRef<Record<number, FetchedData>>({});

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (cache.current[currentPage]) {
        const cachedData = cache.current[currentPage];
        setData(cachedData.results as []);
        setInfoPages(cachedData.info.pages);
        setLoading(false);
        return;
      }

      const response = await fetch(`${url}?page=${currentPage}`);
      if (!response.ok) throw new Error('Error fetching data');

      const fetchedData = await response.json();
      cache.current[currentPage] = fetchedData;

      setData(fetchedData.results);
      setInfoPages(fetchedData.info.pages);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [currentPage, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

   // Procesar datos si es necesario
   const processedData = data.map(item => {
    if (item && typeof item === 'object' && !Array.isArray(item)) { // Verifica que 'item' no sea null, sea un objeto y no un array
      return {
        ...Object(item),
        // Aquí puedes agregar cálculos adicionales si son necesarios
      };
    }
    // Manejo para elementos no objeto
    return { value: item }; // O cualquier otra estructura que necesites
  });

  return { data: processedData, loading, error, infoPages };
};