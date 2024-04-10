import { useEffect, useState } from "react";
import ConsultationForm from "./components/ConsultationForm";
import consultationService from "./services/consultation";
import consultationQuestions from "./data/consultationQuestions";

const App = () => {
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  useEffect(() => {
    setQuestions(consultationQuestions);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    consultationService.sendConsultationAnswers(answers);
  };

  const updateQuestion = (name) => {
    const currentQuestion = questions.find(
      ({ questionName }) => questionName === name
    )?.question;

    const currentQuestionName = questions.find(
      ({ questionName }) => questionName === name
    )?.questionName;

    const updatedQuestion = {
      question: currentQuestion,
      questionName: currentQuestionName,
      answered: true,
    };

    setQuestions(
      questions.map((question) =>
        question.questionName !== name ? question : updatedQuestion
      )
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    const getQuestion = questions.find(
      ({ questionName }) => questionName === name
    ).question;
    
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [getQuestion]: value,
    }));

    updateQuestion(name);

    const hasTheCurrentOneAlreadyBeenAnswered = questions.find(
      ({ questionName }) => questionName === name
    ).answered;

    if (hasTheCurrentOneAlreadyBeenAnswered === false) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const questionsToPass = questions.filter(
    (question, index) => index === currentQuestionIndex || question.answered
  );

  return (
    <div className="contentWrapper">
      <ConsultationForm
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        questions={questionsToPass}
      />
    </div>
  );
};

export default App;
