import { useState } from "react";
import { initialTours } from "./data/dataTour";

const Tour = () => {
  const [tours, setTours] = useState(initialTours);
  const [readMore, setReadMore] = useState<{ [key: number]: boolean }>({});

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const toggleReadMore = (id: number) => {
    setReadMore((prevReadMore) => ({
      ...prevReadMore,
      [id]: !prevReadMore[id],
    }));
  };

  return (
    <article className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {tours.map((tour) => (
        <div key={tour.id} className="shadow-md rounded overflow-hidden">
          <div className="relative">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-0 right-0 p-2 text-white bg-green-500 rounded-bl tracking-widest">
              ${tour.price}
            </span>
          </div>
          <div className="p-4">
            <h5 className="text-center mb-4 font-medium text-xl">
              {tour.name}
            </h5>
            <p className="leading-6 text-gray-500 mb-8">
              {readMore[tour.id]
                ? tour.info
                : `${tour.info.substring(0, 200)}... `}
              <button
                onClick={() => toggleReadMore(tour.id)}
                className="text-green-500 font-medium"
              >
                {readMore[tour.id] ? "show less" : "read more"}
              </button>
            </p>
            <button
              onClick={() => removeTour(tour.id)}
              className="border-2 border-green-500 w-full text-green-500 rounded hover:bg-green-500 hover:text-white mb-8"
            >
              Not Interested
            </button>
          </div>
        </div>
      ))}
      {tours.length === 0 && (
        <p className="text-center w-full">No tours left</p>
      )}
    </article>
  );
};

export default Tour;
