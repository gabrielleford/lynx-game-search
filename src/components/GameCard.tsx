import type { IGamePreview } from '../types.ts';
import { getGameImage } from '../utils.ts';

export const GameCard = (props: IGamePreview) => {
  const { id, name, cover } = props;
  return (
    <view className="card" style={{ width: '150px' }}>
      <image src={getGameImage(cover?.image_id)} className="image" />

      <text className="cardTitle">{name}</text>
    </view>
  );
};
