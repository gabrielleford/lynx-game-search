import './App.css';
import { GameCategory } from './components/GameCategory.tsx';

export function App() {
  return (
    <scroll-view className="scrollContainer" scroll-orientation="vertical">
      <view className="scrollContent">
        <GameCategory />
        <GameCategory />
        <GameCategory />
        <GameCategory />
        <GameCategory />
      </view>
    </scroll-view>
  );
}
