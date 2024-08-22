type QuestionProps = {
  question: {
    id: number;
    title: string;
    info: string;
  };
  active: boolean;
  onClick: (id: number) => void;
};

const Question = ({
  question: { id, title, info },
  active,
  onClick,
}: QuestionProps) => {
  const handleClick = (id: number) => {
    onClick(id);
    // TODO: Update state to toggle the '+' or '-' icon
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => handleClick(id)}>
          {active ? "-" : "+"}
        </button>
      </header>
      {active && info}
    </article>
  );
};

export default Question;
