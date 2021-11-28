export default function ErrorMessage({ children: message, style }) {
  if (!message) return null;

  const s = {
    color: "red",
    ...style,
  };
  return <span style={s}>{message}</span>;
}
