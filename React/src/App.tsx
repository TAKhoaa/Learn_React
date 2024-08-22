
import Book from './Book';
import Button from './Button';
import Counter from './Counter';
import Message from './Title';
import Person from './People';
import Title from './Title';
import { useState } from 'react';

const data = [
  {
    id : 1, 
    name : "Bertie Yates",
    age : 29,
    image : "https://www.course-api.com/images/people/person-1.jpeg"
  },
  {
    id : 2, 
    name : "Hester Hogan",
    age : 32,
    image : "https://www.course-api.com/images/people/person-2.jpeg"
  },
  {
    id : 3, 
    name : "Larry Little",
    age : 36,
    image : "https://www.course-api.com/images/people/person-3.jpeg"
  },
  {
    id : 4, 
    name : "Sean Walsh",
    age : 34,
    image : "https://www.course-api.com/images/people/person-4.jpeg"
  },
  {
    id : 5, 
    name : "Lola Gardner",
    age : 29,
    image : "https://www.course-api.com/images/people/person-5.jpeg"
  },
];

function App() {
  //render list
const [people, setPeople] = useState(data)

const hanldeClear =() => {
  setPeople([]);
}
  return (
   <div className="h-screen w-screen flex justify-center items-center bg-[#FAE8FF]" >
    <div className="container w-1/3 border bg-white p-8 ">
    
    <Title number={people.length} />
    <Person people={people}/>
    <button onClick={hanldeClear}  className='w-full bg-purple-500 mt-8 text-white rounded-sm'>Clear</button>
    </div>   
   </div>
      
  );
}

export default App
