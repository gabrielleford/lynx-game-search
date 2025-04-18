import { useQuery } from '@tanstack/react-query';
import type { IGamePreview } from '../types.ts';

const useGameQuery = (query: string) => {
  const getQueriedGames = async (): Promise<IGamePreview[]> => {
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'client-id': 'hy53ei05j0smrli0it6bhnrjp5ctsx',
        Authorization: 'Bearer qsv43y4ftzpep2ogh8cmhtfr0br0ss',
        'Content-Type': 'text/plain',
        Accept: 'application/json',
      },
      body: query,
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  };

  return useQuery({
    queryKey: ['gameQuery', query],
    queryFn: getQueriedGames,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGameQuery;
