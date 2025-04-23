import { useQuery } from '@tanstack/react-query';
import type { IGameEvent } from '../types.ts';

const useGameEvent = (id: string) => {
  const getGameEvent = async (): Promise<IGameEvent> => {
    const query = `
    fields id, name, event_logo.image_id, start_time, description, games.name, games.cover.image_id;
    where id = ${id};
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

    return data[0];
  };

  return useQuery({
    queryKey: ['gameEvent', id],
    queryFn: getGameEvent,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGameEvent;
