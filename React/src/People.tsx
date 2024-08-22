type Props = { 
    people :{
        id : number;
        image : string;
        name : string;
        age : number;
    }[];
  
};

const People= ({people} :Props)  => {
    
    return (
        <div className="space-y-8">
            {people.map((person) => (
                <div key={person.id} className="flex gap-4">
                    <img src={person.image} alt={person.name} className="w-[75px] h-[75px] rounded-full"  />

                    <div>
                        <div className="font-bold text-[17px]">{person.name}</div>
                        <p>{person.age} years</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default People;