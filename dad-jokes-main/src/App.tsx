import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Jokes from "./component/Jokes";
import { TJokes } from "./types/joke";
import { useImmer } from "use-immer";
import ReactLoading from "react-loading";

const URL = "https://icanhazdadjoke.com/";

function App() {
  const [jokes, setJoke] = useImmer<TJokes[]>([]);
  const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  //sử dụng for lấy api theo tuần tự (làm cách này network sẽ chạy yếu)
  // async function fectJokeApi() {
  //   try {
  //     const result = [];
  //     for (let i = 0; i < 10; i++) {
  //       const response = await axios.get(URL, {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       });
  //       result.push(response.data);
  //     }
  //     setJoke(result);
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMessage("Something went wrong");
  //   }
  // }

  //dùng promises sẽ lấy song song api nào xong trước thì chạy api đó
  const fecthJokes = async (quantity: number) => {
    setLoading(true);

    const jokesPromise = Array.from({ length: quantity }).map(() =>
      axios.get(URL, {
        headers: {
          Accept: "application/json",
        },
      })
    );
    const responses = (await Promise.all(jokesPromise)).map(
      (response) => response.data
    ); // lấy hết tất cả data
    const responsesWithVotes = responses.map((response) => ({
      ...response,
      votes: 0,
    }));

    setJoke(responsesWithVotes);
    setLoading(false);
  };

  useEffect(() => {
    fecthJokes(10);
  }, []);

  const handleVoteUp = (joke: TJokes) => {
    // const newJokes = jokes.map((jokeItem) => {
    //   return jokeItem.id === joke.id
    //     ? { ...jokeItem, votes: jokeItem.votes + 1 }
    //     : jokeItem;
    // });
    // setJoke(newJokes);
    setJoke((drafJokes) => {
      const jokeIndex = drafJokes.findIndex(
        (jokeItem) => jokeItem.id === joke.id
      );
      drafJokes[jokeIndex].votes += 1;
    });
  };

  const handleVoteDown = (joke: TJokes) => {
    // const newJokes = jokes.map((jokeItem) => {
    //   return jokeItem.id === joke.id
    //     ? { ...jokeItem, votes: jokeItem.votes - 1 }
    //     : jokeItem;
    // });
    // setJoke(newJokes);
    setJoke((drafJokes) => {
      const jokeIndex = drafJokes.findIndex(
        (jokeItem) => jokeItem.id === joke.id
      );
      drafJokes[jokeIndex].votes -= 1;
    });
  };

  console.log(loading);
  return (
    <div className="App">
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokeList-getmore">Fetch Jokes</button>
        </div>
        {loading ? (
          <ReactLoading
            type={"spinningBubbles"}
            color={"#ffffff"}
            height={667}
            width={375}
          />
        ) : (
          <Jokes
            jokes={jokes}
            onVoteUp={handleVoteUp}
            onVoteDown={handleVoteDown}
          />
        )}
      </div>
    </div>
  );
}

export default App;
