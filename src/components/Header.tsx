import { useNavigate } from 'react-router';
import logo from '../assets/logo.png';
import search from '../assets/search.png';

export const Header = () => {
  const nav = useNavigate();

  return (
    <view className="header">
      <image src={logo} className="logo" />

      <image src={search} className="bigIcon" bindtap={() => nav('/search')} />
    </view>
  );
};
