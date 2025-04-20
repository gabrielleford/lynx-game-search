import dateIcon from '../assets/date.png';

export const DateItem = ({ date }: { date: string }) => {
  return (
    <view className="dateContainer">
      <image src={dateIcon} className="dateIcon" />
      <text className="date">{date}</text>
    </view>
  );
};
