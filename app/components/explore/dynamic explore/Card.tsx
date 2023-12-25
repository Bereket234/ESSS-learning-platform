import Image from "next/image";
const Card = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div>
        <Image src={image} width={500} height={500} alt="card image" />
      </div>

      <div>
        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <button>Enroll for Free</button>
    </>
  );
};

export default Card;
