interface CardProps {
  title: string;
  imageUrl: string;
}

const TopicCard = ({ title, imageUrl }: CardProps) => {
  return (
    <div
      className="flex bg-orange-500 w-[60vw] mx-4 h-[80%] md:w-80 md:h-[80%] lg:h-64 items-end grayscale hover:grayscale-0  transition-all rounded-3xl p-4 bg-cover bg-center text-l hover:text-xl text-white "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h2 className="font-semibold italic">{title}</h2>
    </div>
  );
};

export default TopicCard;
