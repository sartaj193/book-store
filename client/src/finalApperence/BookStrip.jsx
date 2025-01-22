import Marquee from 'react-fast-marquee';

const MarqueeStrip = () => {
  const books = [
    "Buy English, Punjabi, Hindi Books at low price", "Buy Stationary Books for School and Colleges for any Stream", "BooksOnDemand function is available submit your order for any type of Books ", "Free Home Delivery",
    
  ];

  return (
    <div className="bg-[#2A2A2A] text-white py-2">
      <Marquee speed={50} gradient={false}>
        <div className="flex space-x-8">
          {books.map((book, index) => (
            <span key={index} className="text-sm font-medium mx-4">
              {book} 
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeStrip;
