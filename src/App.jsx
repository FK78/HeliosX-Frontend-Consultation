import { useEffect, useState } from "react";
import ConsultationForm from "./components/ConsultationForm";
import consultationService from "./services/consultation";
import consultationQuestions from "./data/consultationQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.questionName === name
          ? { ...question, answered: true }
          : question
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

    if (
      !questions.find(({ questionName }) => questionName === name)?.answered
    ) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const questionsToPass = questions.filter(
    (question, index) => index === currentQuestionIndex || question.answered
  );

  return (
    <div className="contentWrapper">
      <Header/>
      <ConsultationForm
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        questions={questionsToPass}
      />
      <Footer/>
    </div>
  );
};

export default App;
