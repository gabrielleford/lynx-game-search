import './App.css';
import { GameCategory } from './components/GameCategory.tsx';
import { GameEvents } from './components/GameEvents.tsx';
import { Header } from './components/Header.tsx';

const currentTimestamp = Math.floor(Date.now() / 1000);

const gameCategories = [
  {
    id: '1',
    title: 'Most Anticipated',
    query: `
      fields id, name, cover.image_id, first_release_date, hypes;
      where hypes > 0 & first_release_date > ${currentTimestamp};
      sort hypes desc;
      limit 20;`,
  },
  {
    id: '2',
    title: 'Recently Released',
    query: `
      fields id, name, cover.image_id, first_release_date, rating, rating_count;
      where first_release_date > ${currentTimestamp - 60 * 60 * 24 * 30 * 3};
      sort rating_count desc;
      limit 20;
      `,
  },
  {
    id: '3',
    title: 'Currently Popular',
    query: `
      fields id, name, cover.image_id, first_release_date, rating, rating_count;
      where first_release_date > ${currentTimestamp - 60 * 60 * 24 * 365}
        & rating_count > 50;
      sort rating_count desc;
      limit 20;
      `,
  },
  {
    id: '4',
    title: 'Top 20',
    query: `
      fields id, name, cover.image_id, rating, rating_count;
      where rating >= 90 & rating_count > 50;
      sort rating_count desc;
      limit 20;
      `,
  },
];

export function App() {
  return (
    <scroll-view className="scrollContainer" scroll-orientation="vertical">
      <view className="scrollContent">
        <Header />
        <GameEvents />
        {gameCategories.map((category) => (
          <GameCategory key={category.id} {...category} />
        ))}
      </view>
    </scroll-view>
  );
}
