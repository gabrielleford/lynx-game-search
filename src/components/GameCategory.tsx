import { GameCard } from './GameCard.tsx';

interface IGameCategory {
  id: string;
  title: string;
  query: string;
}

export const GameCategory = (props: IGameCategory) => {
  const { id, title, query } = props;

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
        {Array.from({ length: 50 }).map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <GameCard />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};
