import { useParams } from 'react-router';
import BackButton from '../components/BackButton.tsx';
import useGameEvent from '../hooks/useGameEvent.ts';
import { Loader } from '../components/Loader.tsx';

export const GameEventScreen = () => {
  const { id } = useParams() as { id: string };

  const { data: event, isPending, error } = useGameEvent(id);

  if (isPending) return <Loader />;

  if (error) return <text>error: {error.message}</text>;

  const { event_logo } = event;

  return (
    <scroll-view className="scrollContainer" scroll-orientation="vertical">
      <view className="scrollContent" style={{ padding: '20px' }}>
        <BackButton />
      </view>
    </scroll-view>
  );
};
