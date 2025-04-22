import BackButton from '../components/BackButton.tsx';

export const GameEventScreen = () => {
  return (
    <scroll-view className="scrollContainer" scroll-orientation="vertical">
      <view className="scrollContent">
        <BackButton />
      </view>
    </scroll-view>
  );
};
