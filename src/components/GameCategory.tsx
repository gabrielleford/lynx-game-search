import useGameQuery from '../hooks/useGameQuery.ts';
import { GameCard } from './GameCard.tsx';

interface IGameCategory {
  id: string;
  title: string;
  query: string;
}

export const GameCategory = (props: IGameCategory) => {
  const { title, query } = props;
  console.log(query);
  const { data: games, isPending, error } = useGameQuery(query);

  if (isPending) return <text>Loading...</text>;

  if (error) return <text>error: {error.message}</text>;

  console.log(games);

  return (
    <view className="category">
      <text className="header">{title}</text>

      {/* render games */}
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
    </view>
  );
};
