import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, score, setScore, setQuestions, userId, exam_id }) => {
    const [options, setOptions] = useState([]);
    const [currQues, setCurrQues] = useState(0);
    const [correct, setCorrect] = useState("");

    useEffect(() => {
        if (questions && questions[currQues]) {
            startFunction();
        }
    }, [currQues, questions]);

    const startFunction = () => {
        if (!questions || !questions[currQues]) {
            console.error("Questions or current question is undefined");
            return;
        }

        const data = questions[currQues].options; 
        setOptions(data);

     
        for (let k = 0; k < data.length; k++) {
            if (data[k].isCorrect) {
                setCorrect(data[k].option);
                console.log("Correct option:", data[k].option);
            }
        }
    };

    console.log("Exam ID:", exam_id);

    return (
        <div className="quiz">
            {questions && questions.length > 0 ? (
                <>
                    <div className="quizInfo">
                        <span>Score: {score}</span>
                    </div>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={correct}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        userId={userId}
                        exam_id={exam_id}
                    />
                </>
            ) : (
                <div>Sorry, we couldn't find any questions.</div>
            )}
        </div>
    );
};

export default Quiz;











