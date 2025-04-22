import { useNavigate } from 'react-router';
import type { IGameEventPreview } from '../types.ts';
import { getGameImage, handleTapEnd, handleTapStart } from '../utils.ts';
import { DateItem } from './DateItem.tsx';

export const EventCard = (props: IGameEventPreview) => {
  const { id, name, event_logo, start_time } = props;

  const isFutureDate = Number(start_time) > Math.floor(Date.now() / 1000);

  const nav = useNavigate();

  return (
    <view
      className="card"
      style={{ width: '300px' }}
      bindtap={() => nav(`/event-details/${id}`)}
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
    >
      <image
        src={getGameImage(event_logo?.image_id)}
        className="image"
        style={{ width: '100%', aspectRatio: '16/9' }}
      />

      <text className="cardTitle" text-maxline="2">
        {name}
      </text>

      <view style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DateItem
          date={new Date(Number(start_time) * 1000).toLocaleDateString(
            'en-US',
            {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            },
          )}
        />

        {isFutureDate && <text className="eventStatus">Upcoming</text>}
      </view>
    </view>
  );
};
