import type { IGamePreview } from '../types.ts';
import { GameCard } from './GameCard.tsx';

export const GameList = ({ games }: { games: IGamePreview[] }) => {
  return (
    <list
      scroll-orientation="horizontal"
      list-type="single"
      span-count={1}
      className="horizontalList"
    >
      {games?.map((game) => {
        return (
          <list-item
            item-key={`list-item-${game.id}`}
            key={`list-item-${game.id}`}
          >
            <GameCard {...game} />
          </list-item>
        );
      })}
    </list>
  );
};
