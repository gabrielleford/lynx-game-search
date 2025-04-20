import { useNavigate } from 'react-router';
import backIcon from '../assets/back.png';
import { handleTapEnd, handleTapStart } from '../utils.ts';

export default function BackButton() {
  const nav = useNavigate();

  return (
    <view
      className="backButton"
      bindtap={() => nav(-1)}
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
    >
      <image src={backIcon} className="backIcon" />
    </view>
  );
}
