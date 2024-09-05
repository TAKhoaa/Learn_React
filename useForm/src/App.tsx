import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  NextUIProvider,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { shuffle } from "lodash";
import { useForm } from "react-hook-form";
import { Question } from "./types/question";

const CATEGORIES = [
  {
    label: "Sports",
    value: "21",
  },
  {
    label: "History",
    value: "23",
  },
  {
    label: "Politics",
    value: "24",
  },
];

const DIFFICULTIES = [
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Hard",
    value: "hard",
  },
];

const DEFAULT_CATEGORY = CATEGORIES[0].value;
const DEFAULT_DIFFICULTY = DIFFICULTIES[0].value;

export default function App() {
  const form = useForm({
    defaultValues: {
      amount: "10",
      category: DEFAULT_CATEGORY,
      difficulty: DEFAULT_DIFFICULTY,
    },
  });
  const { register, getValues } = form;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [step, setStep] = useState<"config" | "do-test" | "result">("config");
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIdx];
  console.log(currentQuestion);

  const fechQuestions = async ({
    amount,
    category,
    difficulty,
  }: {
    amount: string;
    category: string;
    difficulty: string;
  }) => {
    setLoading(true);
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount,
        category,
        difficulty,
      },
    });

    const formatQuestions = response?.data?.results?.map((question: any) => ({
      ...question,
      questions: shuffle([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
    // console.log(response);
    setQuestions(formatQuestions);
    setLoading(false);
    setStep("do-test");
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const { amount, category, difficulty } = getValues();
    fechQuestions({ amount, category, difficulty });
  };

  const handleNextQuestion = () => {
    setCurrentIdx((prev) => prev + 1);
  };

  const handleAnswerQuestion = (question: string) => {
    const isCorrect = question === currentQuestion.correct_answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      alert("Correct answer");
    } else {
      alert("Wrong answer");
    }

    if (currentIdx + 1 >= questions.length) {
      setStep("result");
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };
  return (
    <NextUIProvider>
      <div className="flex items-center justify-center min-h-screen bg-slate-500">
        {loading ? (
          <Spinner label="Loading..." color="warning" />
        ) : (
          <>
            {/*config Question */}
            {step === "config" && (
              <Card className="w-[500px] bg-slate-600 rounded p-6">
                <CardHeader>QUIZ</CardHeader>
                <CardBody>
                  <form className="space-y-6" onSubmit={handleSubmitForm}>
                    <Input
                      label="Number of Question"
                      size="sm"
                      {...register("amount")}
                    />
                    <Select
                      label="Category"
                      {...register("category")}
                      defaultSelectedKeys={[CATEGORIES[0].value]}
                    >
                      {CATEGORIES.map((day) => (
                        <SelectItem key={day.value} value={day.value}>
                          {day.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Difficulty"
                      {...register("difficulty")}
                      defaultSelectedKeys={[DIFFICULTIES[0].value]}
                    >
                      {DIFFICULTIES.map((day) => (
                        <SelectItem key={day.value} value={day.value}>
                          {day.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </form>
                </CardBody>
              </Card>
            )}

            {/*Load Question */}

            {step === "do-test" && (
              <div>
                <div className="text-black">{currentQuestion?.question}</div>
                {currentQuestion?.questions.map((question) => (
                  <Card>
                    <CardBody onClick={() => handleAnswerQuestion(question)}>
                      <p>{question}</p>
                    </CardBody>
                  </Card>
                ))}
                <Button onClick={handleNextQuestion}>Next Question </Button>
              </div>
            )}
            {/* Hiển thị kết quả */}
            {step === "result" && (
              <div>
                <h2>
                  Your score: {score}/{questions.length}
                </h2>
                <Button onClick={() => window.location.reload()}>
                  Restart Quiz
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </NextUIProvider>
  );
}
