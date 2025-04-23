import { useQuery } from '@tanstack/react-query';
import type { IGamePreview } from '../types.ts';

const useSearch = (title: string) => {
  const searchGames = async (): Promise<
    {
      id: string;
      game: IGamePreview;
    }[]
  > => {
    const query = `
    fields game.cover.image_id, game.name;
    search "${title}";
    limit 30;
    `;

    const response = await fetch('https://api.igdb.com/v4/search', {
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
    console.log(data);

    return data;
  };

  return useQuery({
    queryKey: ['search', title],
    queryFn: searchGames,
    enabled: false,
  });
};

export default useSearch;
