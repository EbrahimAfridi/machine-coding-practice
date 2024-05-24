import { useState } from "react";
import "../styles/FAQ.css";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "lorem jabkasbfasb jbdkjabd jkbdkjsBD JDBKJBD Jbdkjbdj jsbdkjbJKDs sjbdkjbDKS You can return any item within 30 days of purchase.",
  },
  {
    id: 2,
    question: "Do you sell gift cards?",
    answer: "Yes, we sell gift cards.",
  },
  {
    id: 3,
    question: "Can I change my order?",
    answer: "You can change your order before it is shipped.",
  },
];

export const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const handleShowAnswer = (id) => () => {
    setShowAnswer((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div className="faq-component">
      <h1>FAQ</h1>
      {FAQ_DATA.map((faq) => (
        <div key={faq.id} className="faq-container">
          <div className="container-header">
            <h2>{faq.question}</h2>
            <button onClick={handleShowAnswer(faq.id)} className="btn-open">
              +
            </button>
          </div>
          {showAnswer[faq.id] && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

