import { TJokes } from "../types/joke";
import {
  getColorByVote,
  getEmojiByVote,
  sorteJokesByVotes,
} from "../utils/jokes";

type Props = {
  jokes: TJokes[];
  onVoteUp: (joke: TJokes) => void;
  onVoteDown: (joke: TJokes) => void;
};
const Jokes = ({ jokes, onVoteUp, onVoteDown }: Props) => {
  const handleVoteUp = (joke: TJokes) => {
    onVoteUp(joke);
  };
  const handleVoteDown = (joke: TJokes) => {
    onVoteDown(joke);
  };

  const sortedJokes = sorteJokesByVotes(jokes);

  return (
    <div className="JokeList-jokes">
      {sortedJokes.map((joke) => (
        <div className="Joke" key={joke.id}>
          <div className="Joke-buttons">
            <i className="fas fa-arrow-up" onClick={() => handleVoteUp(joke)} />
            <span
              className="Joke-votes"
              style={{ borderColor: getColorByVote(joke.votes) }}
            >
              {joke.votes}
            </span>
            <i
              className="fas fa-arrow-down"
              onClick={() => handleVoteDown(joke)}
            />
          </div>
          <div className="Joke-text">{joke.joke}</div>
          <div className="Joke-smiley">
            <i className={getEmojiByVote(joke.votes)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jokes;
