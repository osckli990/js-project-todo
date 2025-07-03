export const NewTaskIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-[40px] right-[40px] bg-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer w-[64px] h-[64px] flex items-center justify-center"
    >
      <img src="./plus.png" alt="Add task" className="w-8 h-8" />
    </div>
  );
};
