export const formatTime = (time) => {
  const leadingZero = (num) => `0${num}`.slice(-2);
  const date = new Date(time);
  return [date.getHours(), date.getMinutes()].map(leadingZero).join(":");
};

export const fixedEncodeURIComponent = (str) =>
  encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => "%" + c.charCodeAt(0).toString(16)
  );
