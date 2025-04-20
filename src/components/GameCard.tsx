import type { IGamePreview } from '../types.ts';
import { getGameImage, handleTapEnd, handleTapStart } from '../utils.ts';
import { useNavigate } from 'react-router';

export const GameCard = (props: IGamePreview) => {
  const nav = useNavigate();
  const { id, name, cover } = props;

  return (
    <view
      className="card fadeInScale"
      style={{ width: '150px' }}
      bindtap={() => nav(`/game-details/${id}`)}
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
    >
      <image src={getGameImage(cover?.image_id)} className="image" />

      <text className="cardTitle" text-maxline="2">
        {name}
      </text>
    </view>
  );
};
