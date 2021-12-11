export const formatTime = (time) => {
  const leadingZero = (num) => `0${num}`.slice(-2);
  const date = new Date(time);
  return [date.getHours(), date.getMinutes()].map(leadingZero).join(":");
};
