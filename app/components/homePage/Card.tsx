interface CardProps {
    title: string;
    iamgeUrl: string;
  }

const Card = ({ title, iamgeUrl } : CardProps) => {
  return (
   
    <div className={`bg-[url(${iamgeUrl})] bg-cover h-48 rounded-lg p-4`}>
        <h2 className="text-white text-2xl font-bold">{title}</h2>
    </div>
  )
}

export default Card