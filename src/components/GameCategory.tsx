import { GameCard } from './GameCard.tsx';

export const GameCategory = () => {
  return (
    <view className="category">
      <text className="header">Most Anticipated</text>

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
