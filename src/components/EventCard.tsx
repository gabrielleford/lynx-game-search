import type { IGameEventPreview } from '../types.ts';
import { getGameImage } from '../utils.ts';

export const EventCard = (props: IGameEventPreview) => {
  const { id, name, event_logo, start_time } = props;

  return (
    <view className="card" style={{ width: '300px' }}>
      <image
        src={getGameImage(event_logo?.image_id)}
        className="image"
        style={{ width: '100%', aspectRatio: '16/9' }}
      />
    </view>
  );
};
