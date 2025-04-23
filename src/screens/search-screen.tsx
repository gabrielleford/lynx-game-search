import BackButton from '../components/BackButton.tsx';
import searchIcon from '../assets/search.png';
import { useState } from '@lynx-js/react/legacy-react-runtime';
import useSearch from '../hooks/useSearch.ts';
import { Loader } from '../components/Loader.tsx';
import { GameCard } from '../components/GameCard.tsx';
import { handleTapEnd, handleTapStart } from '../utils.ts';

export const SearchScreen = () => {
  const [title, setTitle] = useState('');

  const { data: games, isFetching, error, refetch } = useSearch(title);

  return (
    <view
      className="scrollContainer scrollContent"
      style={{ paddingTop: '60px', paddingLeft: '20px', paddingRight: '20px' }}
    >
      <BackButton />

      <view className="inputContainer">
        <input
          placeholder="Search games..."
          className="input"
          bindinput={(e: any) => setTitle(e.detail.value)}
        />

        <view
          className="button"
          bindtap={() => refetch()}
          main-thread:bindtouchstart={handleTapEnd}
          main-thread:bindtouchend={handleTapStart}
        >
          <image src={searchIcon} className="searchIcon" />
        </view>
      </view>

      {isFetching && <Loader />}

      {error && <text>error: {error.message}</text>}

      <list
        scroll-orientation="vertical"
        list-type="flow"
        span-count={2}
        className="searchList"
      >
        {games?.map((item) => {
          return (
            <list-item item-key={`${item.id}`} key={`${item.id}`}>
              <GameCard {...item.game} />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};
