import { useParams } from 'react-router';
import BackButton from '../components/BackButton.tsx';
import useGame from '../hooks/useGame.ts';
import { getGameImage } from '../utils.ts';
import ratingIcon from '../assets/rating.png';
import { DateItem } from '../components/DateItem.tsx';
import { useState } from '@lynx-js/react';
import { GameList } from '../components/GameList.tsx';
import { Loader } from '../components/Loader.tsx';

export const GameDetailsScreen = () => {
  const { id } = useParams() as { id: string };
  const { data: game, isPending, error } = useGame(id);

  const [maxLine, setMaxLine] = useState('5');

  if (isPending) return <Loader />;

  if (error) return <text>error: {error.message}</text>;

  const {
    cover,
    name,
    rating,
    involved_companies,
    release_dates,
    summary,
    genres,
    screenshots,
    platforms,
    similar_games,
  } = game;

  return (
    <scroll-view className="scrollContainer" scroll-orientation="vertical">
      <view className="scrollContent" style={{ padding: '20px' }}>
        <BackButton />

        <image
          src={getGameImage(cover?.image_id)}
          className="image flipIn"
          style={{ width: '60%', aspectRatio: 3 / 4, alignSelf: 'center' }}
        />

        <view className="gameInfo">
          <text className="gameName">{name}</text>
          {rating && (
            <view className="ratingContainer">
              <image src={ratingIcon} className="ratingIcon" />
              <text className="rating">{(rating / 10).toFixed(1)}</text>
            </view>
          )}
        </view>

        <text className="developer">
          By {involved_companies[0]?.company.name}
        </text>

        <DateItem date={release_dates[0]?.human} />

        <text className="summary" text-maxline={maxLine}>
          {summary}

          <inline-truncation>
            <text bindtap={() => setMaxLine('-1')}>... See more</text>
          </inline-truncation>
        </text>

        <view className="tagContainer">
          {genres?.map((genre) => (
            <text key={genre.id} className="tag">
              {genre.name}
            </text>
          ))}
        </view>

        <text className="header">Screenshots</text>

        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontalList"
        >
          {screenshots?.map((screenshot) => {
            return (
              <list-item
                item-key={`list-item-${screenshot.id}`}
                key={`list-item-${screenshot.id}`}
              >
                <image
                  src={getGameImage(screenshot?.image_id)}
                  className="image"
                  style={{ width: '230px', aspectRatio: 16 / 9 }}
                />
              </list-item>
            );
          })}
        </list>

        <text className="header">You can play on</text>
        <view className="tagContainer">
          {platforms?.map((platform) => (
            <text key={platform.id} className="tag">
              {platform.name}
            </text>
          ))}
        </view>

        <text className="header">You may also like</text>

        <GameList games={similar_games} />
      </view>
    </scroll-view>
  );
};
