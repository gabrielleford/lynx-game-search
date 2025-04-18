import { useParams } from 'react-router';

export const GameDetailsScreen = () => {
  let { id } = useParams();

  return (
    <scroll-view className="scrollContainer">
      <view className="scrollContent">
        <text style={{ color: 'red' }}>Game ID: {id}</text>
      </view>
    </scroll-view>
  );
};
