const Star = ({ index, isActiveTillIndex, setIsActiveTillIndex }: any) => {
  const isActive = index <= isActiveTillIndex;
  return (
    <div
      className={`cursor-pointer text-2xl ${
        isActive ? "text-orange-300" : "text-gray-400"
      }`}
      onClick={() => setIsActiveTillIndex(index)}
    >
      &#9733;
    </div>
  );
};
export default Star;
