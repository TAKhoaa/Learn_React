import { TJokes } from "../types/joke";

export const getColorByVote = (votes: number) => {
  if (votes >= 15) {
    return "#4CAF50";
  } else if (votes >= 12) {
    return "#8BC34A";
  } else if (votes >= 9) {
    return "#CDDC39";
  } else if (votes >= 6) {
    return "#FFEB3B";
  } else if (votes >= 3) {
    return "#FFC107";
  } else if (votes >= 0) {
    return "#FF9800";
  } else {
    return "#f44336";
  }
};

export const getEmojiByVote = (votes: number) => {
  if (votes >= 15) {
    return "em em-rolling_on_the_floor_laughing";
  } else if (votes >= 12) {
    return "em em-laughing";
  } else if (votes >= 9) {
    return "em em-smiley";
  } else if (votes >= 6) {
    return "em em-slightly_smiling_face";
  } else if (votes >= 3) {
    return "em em-neutral_face";
  } else if (votes >= 0) {
    return "em em-confused";
  } else {
    return "em em-angry";
  }
};

export const sorteJokesByVotes = (jokes: TJokes[]) => {
  const newJokes = [...jokes];
  return newJokes.sort((a, b) => b.votes - a.votes);
};