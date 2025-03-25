import { useQuery } from 'react-query';
import { URl_API } from '../constans/Url';
import { Character } from '../types/Characters';

interface CharactersResponse {
  results: Character[];
  info: { pages: number };
}

const fetchCharacters = async (page: number): Promise<CharactersResponse> => {
  const response = await fetch(`${URl_API}character?page=${page}`);
  if (!response.ok) throw new Error('Error fetching characters');
  return response.json();
};

export const useCharacters = (page: number) => {
  return useQuery(['characters', page], () => fetchCharacters(page), {
    keepPreviousData: true, // Mantiene los datos anteriores mientras carga los nuevos
    staleTime: 5 * 60 * 1000, // 5 minutos de caché
  });
};