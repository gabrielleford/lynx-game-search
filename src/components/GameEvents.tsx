import useGameEvents from '../hooks/useGameEvents.ts';
import { EventCard } from './EventCard.tsx';
import { Loader } from './Loader.tsx';

export const GameEvents = () => {
  const { data: events, isPending, error } = useGameEvents();

  if (isPending) return <Loader />;

  if (error) return <text>error: {error.message}</text>;

  return (
    <view className="category">
      <text className="heading">Game Events</text>

      {/* list of events */}
      <list
        scroll-orientation="horizontal"
        list-type="single"
        span-count={1}
        className="horizontalList"
      >
        {events?.map((event) => {
          return (
            <list-item
              item-key={`list-item-${event.id}`}
              key={`list-item-${event.id}`}
            >
              <EventCard {...event} />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};
