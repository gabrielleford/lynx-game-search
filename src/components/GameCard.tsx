import type { IGamePreview } from '../types.ts';
import { getGameImage } from '../utils.ts';
import { useNavigate } from 'react-router';

export const GameCard = (props: IGamePreview) => {
  const nav = useNavigate();
  const { id, name, cover } = props;

  return (
    <view className="card" style={{ width: '150px' }}>
      <image src={getGameImage(cover?.image_id)} className="image" />

      <text className="cardTitle">{name}</text>
    </view>
  );
};
