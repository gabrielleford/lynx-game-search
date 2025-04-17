import { useQuery } from '@tanstack/react-query';
import type { IGamePreview } from '../types.ts';

const useGameQuery = (query: string) => {
  const getQueriedGames = async (): Promise<IGamePreview[]> => {
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'client-id': 'hy53ei05j0smrli0it6bhnrjp5ctsx',
        Authorization: 'Bearer 8wkt28qooftunhgii3uoo2c0gkgeq6',
        'Content-Type': 'text/plain',
        Accept: 'application/json',
      },
      body: query,
    });

    const data = await response.json();

    return data;
  };

  return useQuery({
    queryKey: ['queriedGames', query],
    queryFn: getQueriedGames,
  });
};

export default useGameQuery;
