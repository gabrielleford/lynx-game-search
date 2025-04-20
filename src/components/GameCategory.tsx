import useGameQuery from '../hooks/useGameQuery.ts';
import { GameCard } from './GameCard.tsx';
import { GameList } from './GameList.tsx';
import { Loader } from './Loader.tsx';

interface IGameCategory {
  id: string;
  title: string;
  query: string;
}

export const GameCategory = (props: IGameCategory) => {
  const { title, query } = props;
  const { data: games, isPending, error } = useGameQuery(query);

  if (isPending) return <Loader />;

  if (error) return <text>error: {error.message}</text>;

  return (
    <view className="category">
      <text className="header">{title}</text>

      {/* render games */}
      <GameList games={games} />
    </view>
  );
};
