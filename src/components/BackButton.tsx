import { useNavigate } from 'react-router';
import backIcon from '../assets/back.png';

export default function BackButton() {
  const nav = useNavigate();

  return (
    <view className="backButton" bindtap={() => nav(-1)}>
      <image src={backIcon} className="backIcon" />
    </view>
  );
}
