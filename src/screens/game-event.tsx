import { useParams } from 'react-router';
import BackButton from '../components/BackButton.tsx';
import useGameEvent from '../hooks/useGameEvent.ts';
import { Loader } from '../components/Loader.tsx';
import { getGameImage } from '../utils.ts';
import { DateItem } from '../components/DateItem.tsx';
import { GameList } from '../components/GameList.tsx';

export const GameEventScreen = () => {
  const { id } = useParams() as { id: string };

  const { data: event, isPending, error } = useGameEvent(id);

  if (isPending) return <Loader />;

  if (error) return <text>error: {error.message}</text>;

  const { event_logo, name, start_time, description, games } = event;

  return (
    <scroll-view className="scrollContainer" scroll-orientation="vertical">
      <view className="scrollContent" style={{ padding: '20px' }}>
        <BackButton />

        <image
          src={getGameImage(event_logo?.image_id)}
          className="image"
          style={{ width: '100%', aspectRatio: '16/9' }}
        />

        <text className="eventName">{name}</text>

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
        </view>

        <text className="summary">{description}</text>

        <GameList games={games} />
      </view>
    </scroll-view>
  );
};
