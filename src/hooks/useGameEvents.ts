import { useQuery } from '@tanstack/react-query';
import type { IGame, IGameEventPreview } from '../types.ts';

const useGameEvents = () => {
  const getGameEvents = async (): Promise<IGameEventPreview[]> => {
    const query = `
    fields id, name, event_logo.image_id, start_time;
    sort start_time desc;
    limit 10;
    `;

    const response = await fetch('https://api.igdb.com/v4/events', {
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
    queryKey: ['gameEvents'],
    queryFn: getGameEvents,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGameEvents;
