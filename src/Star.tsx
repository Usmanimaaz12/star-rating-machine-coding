const Star = ({
  index,
  activeTillIndex,
  setActiveTillIndex,
  hoverTillIndex,
  setHoverTillIndex,
}: any) => {
  const isActive =
    hoverTillIndex >= 0 ? index <= hoverTillIndex : index <= activeTillIndex;
  return (
    <div
      className={`cursor-pointer text-2xl ${
        isActive ? "text-orange-300" : "text-gray-400"
      }`}
      onClick={() => setActiveTillIndex(index)}
      onMouseEnter={() => setHoverTillIndex(index)}
      onMouseLeave={() => setHoverTillIndex(activeTillIndex)}
    >
      &#9733;
    </div>
  );
};
export default Star;
