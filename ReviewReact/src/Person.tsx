import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data_person/reviews";

// type ReviewProps = {
//   id: number;
//   name: string;
//   job: string;
//   image: string;
//   text: string;
// };

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number: number): number => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="bg-white shadow-md rounded p-[4rem] text-center w-[700px] mx-auto">
      <div className="relative w-32 h-32 mx-auto mb-4 ">
        <h1 className="absolute top-0 left-6 w-[8.5rem] h-[8.5rem] bg-blue-500 rounded-full z-0"></h1>
        <div className="relative w-36 h-36 rounded-full mx-auto mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full "
          />
        </div>
        <span className="absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full transform translate-y-1/4 bg-blue-500 text-white">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-gray-500 mb-4">{job}</p>
      <p className="text-gray-700 mb-4">{text}</p>
      <div className="flex justify-center mb-6 text-xl">
        <button
          className="text-blue-500 hover:text-blue-700 mx-2"
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className="text-blue-500 hover:text-blue-700 mx-2"
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={randomPerson}
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
