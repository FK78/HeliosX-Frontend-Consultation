import PropTypes from "prop-types";
import RadioButton from "../RadioButton";
import "./index.css";

const ConsultationForm = ({ onSubmit, onChange, questions }) => {
  return (
    <form className="consultationForm" onSubmit={onSubmit}>
      {questions.map((q, i) => (
        <div className="consultationQuestion" key={q.questionName}>
          <div className="question">{q.question}</div>
          <div className="radioButtonContainer">
            <RadioButton
              name={q.questionName}
              id={`Yes${i}`}
              label="Yes"
              value="Yes"
              onChange={onChange}
            />
            <RadioButton
              name={q.questionName}
              id={`No${i}`}
              label="No"
              value="No"
              onChange={onChange}
            />
          </div>
        </div>
      ))}
      <div className="submitButtonWrapper">
        <button className="submitButton" type="submit">Submit</button>
      </div>
    </form>
  );
};

ConsultationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

export default ConsultationForm;