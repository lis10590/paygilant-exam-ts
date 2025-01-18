// Card.tsx

interface CardProps {
  title: string;
  body: string;
}

const Card = ({ title, body }: CardProps) => {
  return (
    <div className="container w-80 h-80 rounded-lg shadow-md bg-white mb-4 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <header className="px-4 py-3 border-b rounded-lg border-gray-200 bg-[#E3FDFD]">
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
      <div className="p-4">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
