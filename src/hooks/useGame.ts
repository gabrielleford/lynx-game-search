import { useQuery } from '@tanstack/react-query';
import type { IGame } from '../types.ts';

const useGame = (id: string) => {
  const getGame = async (): Promise<IGame> => {
    const query = `
    fields id, name, cover.image_id, rating, rating_count, genres.name, involved_companies.company.name, platforms.name, release_dates.human, screenshots.image_id, similar_games.id, similar_games.name, similar_games.cover.image_id, summary;
    where id = ${id};
    `;

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

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data[0]);

    return data[0];
  };

  return useQuery({
    queryKey: ['game', id],
    queryFn: getGame,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGame;
