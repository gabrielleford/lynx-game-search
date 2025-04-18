import { useParams } from 'react-router';
import BackButton from '../components/BackButton.tsx';
import useGame from '../hooks/useGame.ts';
import { getGameImage } from '../utils.ts';
import ratingIcon from '../assets/rating.png';

export const GameDetailsScreen = () => {
  const { id } = useParams() as { id: string };
  console.log(id);
  const { data: game, isPending, error } = useGame(id);

  if (isPending) return <text>Loading...</text>;

  if (error) return <text>error: {error.message}</text>;

  const { cover, name } = game;

  return (
    <scroll-view className="scrollContainer">
      <view className="scrollContent" style={{ padding: '20px' }}>
        <BackButton />

        <image
          src={getGameImage(cover?.image_id)}
          className="image"
          style={{ width: '60%', aspectRatio: 3 / 4, alignSelf: 'center' }}
        />
        <view>
          <text className="gameName">{name}</text>
          <view className="ratingContainer">
            <image src={ratingIcon} className="ratingIcon" />
          </view>
        </view>
      </view>
    </scroll-view>
  );
};
