import { useEffect, useState } from "react";
import ConsultationForm from "./components/ConsultationForm";
import consultationService from "./services/consultation";
import consultationQuestions from "./data/consultationQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";
import "./App.css";

const App = () => {
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsShowing, setAllQuestionsShowing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    setQuestions(consultationQuestions);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    consultationService.sendConsultationAnswers(answers);
    setShowThankYou(true);
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

    const questionToUpdate = questions.find(
      ({ questionName }) => questionName === name
    );

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionToUpdate.question]: value,
    }));

    updateQuestion(name);

    if (!questionToUpdate.answered) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    if (currentQuestionIndex === 4) {
      setAllQuestionsShowing(true);
    }
  };

  const questionsToPass = questions.filter(
    (question, index) => index === currentQuestionIndex || question.answered
  );

  return (
    <div className="contentWrapper">
      <Header />
      <ConsultationForm
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        questions={questionsToPass}
        allQuestionsShowing={allQuestionsShowing}
      />
      {showThankYou ? <ThankYou /> : null}
      <Footer />
    </div>
  );
};

export default App;
