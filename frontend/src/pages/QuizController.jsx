
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Quiz from "../components/quizHandler/Quiz";
import { useParams, useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";
import CountDownTimer from "../components/CountDownTimer";

const QuizController = (CUId) => {
    const userId = CUId.CUId;
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [exam_id, setExam_id] = useState("");
    const [timerData, setTimerData] = useState(0);

    const navigate = useNavigate();
    const params = useParams();
    const id = params;

    // Memoized function to fetch exams
    const getExams = useCallback(async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/examquestions/${id.id}`);
            setQuestions(data);
            await userCheck(); // Await userCheck to ensure proper sequence
        } catch (error) {
            console.error("Error fetching exams:", error);
        }
    }, [id.id]); // Dependency: `id.id`

    // Memoized function to check user exam status
    const userCheck = useCallback(async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/userexams/${CUId.CUId}`);
            const myData = await Promise.all(data.map((d) => d.examId));

            for (let i = 0; i <= myData.length; i++) {
                if (myData[i] === id.id) {
                    navigate("/dashboard");
                    alert("You have already taken this exam");
                    return;
                }
            }

            await securityData(); // Proceed with security checks if exam not taken
            setIsLoading(false);
        } catch (error) {
            console.error("Error checking user status:", error);
            alert("You have already taken this exam");
        }
    }, [CUId.CUId, id.id, navigate]); // Dependencies

    // Memoized function to handle security checks
    const securityData = useCallback(async () => {
        try {
            const [userResponse, examResponse] = await axios.all([
                axios.get(`http://localhost:5000/users/${CUId.CUId}`),
                axios.get(`http://localhost:5000/exam/exam/${id.id}`)
            ]);

            const user = userResponse.data[0];
            const exam = examResponse.data[0];

            if (exam.creatorUserId === CUId.CUId) {
                setTimerData(exam.time);
                console.log("Preview mode activated, data will not be saved.");
                alert("You are in preview mode. Your question data will not be saved.");
            } else {
                const dummyData = {
                    userId: CUId.CUId,
                    examId: id.id,
                    userInfo: {
                        username: `${user.firstname} ${user.lastname}`,
                        examname: exam.examname,
                        score: 0,
                    },
                };

                const response = await axios.post("http://localhost:5000/userexams/", dummyData);
                setExam_id(response.data._id);
                setTimerData(exam.time);
            }

            setTimeout(() => {
                navigate(`/result/${id.id}`);
            }, exam.time * 60 * 1000); // Convert minutes to milliseconds
        } catch (error) {
            console.error("Error in security data:", error);
        }
    }, [CUId.CUId, id.id, navigate]); // Dependencies

    // Trigger getExams on component mount
    useEffect(() => {
        getExams(); // Fetch exams when `getExams` changes
    }, [getExams]); // Dependency: `getExams`

    const hoursMinSecs = { hours: 0, minutes: timerData, seconds: 0 };

    if (isLoading) {
        return (
            <>
                <LoginNavbar />
                <div
                    style={{
                        verticalAlign: "middle",
                        display: "flex",
                        border: "16px solid #f3f3f3",
                        borderRadius: "50%",
                        borderTop: "16px solid #3498db",
                        width: "120px",
                        height: "120px",
                        WebkitAnimation: "spin 2s linear infinite",
                    }}
                ></div>
                <Footer />
            </>
        );
    }

    return (
        <div>
            <LoginNavbar />
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
            <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
                userId={userId}
                exam_id={exam_id}
            />
            <Footer />
        </div>
    );
};

export default QuizController;















// import axios from "axios";
// import { useEffect, useState } from "react";
// import Quiz from "../components/quizHandler/Quiz";
// import { useParams, useNavigate } from 'react-router-dom'
// import LoginNavbar from "../components/LoginNavbar";
// import Footer from "../components/Footer";
// // import Countdown from 'react-countdown';
// import CountDownTimer from "../components/CountDownTimer";

// const QuizController = (CUId) => {

//     const userId = CUId.CUId
//     const [questions, setQuestions] = useState([]);
//     const [score, setScore] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);
//     const [exam_id, setExam_id] = useState("");
//     const [timerData, setTimerData] = useState(0);

//     const navigate = useNavigate()

//     const params = useParams();
//     const id = params;

//     useEffect(() => {
//         getExams();
//     }, [])

//     const getExams = async () => {
//         const { data } = await axios.get('http://localhost:5000/examquestions/' + id.id);
//         setQuestions(data);
//         userCheck();
//     }

//     const securityData = async () => {
//         axios.all([
//             await axios.get('http://localhost:5000/users/' + CUId.CUId),
//             await axios.get('http://localhost:5000/exam/exam/' + id.id)
//         ]).then(axios.spread((data, data2) => {
//             if (data2.data[0].creatorUserId === CUId.CUId) {
//                 setTimerData(data2.data[0].time)
//                 console.log(data2.data[0].time)
//                 alert("You are in preview mode that means your question data will not be saved")
//             } else {
//                 const dummyData = {
//                     userId: CUId.CUId,
//                     examId: id.id,
//                     userInfo: {
//                         username: data.data[0].firstname + " " + data.data[0].lastname,
//                         examname: data2.data[0].examname,
//                         score: 0,
//                     }
//                 };
//                 axios.post("http://localhost:5000/userexams/", dummyData).then((response) => {
//                     console.log(response.status);
//                     console.log(response.data);
//                     setExam_id(response.data._id)
//                 });
//                 setTimerData(data2.data[0].time)
//             }
//             setTimeout(() => {
//                 navigate("/result/" + id.id)
//             }, ((data2.data[0].time) * 60) + "000");
//         }))
//     }

//     const userCheck = async () => {
//         try {
//             const { data } = await axios.get('http://localhost:5000/userexams/' + CUId.CUId);
//             const myData = await Promise.all(data.map((d) => d.examId))
//             for (let i = 0; i <= myData.length; i++) {
//                 if (myData[i] === id.id) {
//                     navigate("/dashboard")
//                     alert("you have already took this exam")
//                     return
//                 }
//             }
//             securityData();
//             setIsLoading(false);
//         } catch (err) {
//             console.log(err);
//             alert("you have already took this exam")
//         }
//     }

//     const hoursMinSecs = {hours:0, minutes: timerData, seconds: 0}
//     if (isLoading) {
//         return (
//             <>
//                 <LoginNavbar />
//                 <div style={{ verticalAlign: "middle", display: "flex", border: "16px solid #f3f3f3", borderRadius: "50%", borderTop: "16px solid #3498db", width: "120px", height: "120px", WebkitAnimation: "spin 2s linear infinite" }}></div>
//                 <Footer />
//             </>)
//     }
//     return (
//         <div>
//             <LoginNavbar />
//             <CountDownTimer hoursMinSecs={hoursMinSecs}/>
//             <Quiz
//                 questions={questions}
//                 score={score}
//                 setScore={setScore}
//                 setQuestions={setQuestions}
//                 userId={userId}
//                 exam_id={exam_id}
//             />
//             <Footer />
//         </div>
//     );
// }

// export default QuizController;