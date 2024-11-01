// import React from 'react'
import '../css/Questions.css'
import React, { useState } from 'react';
const questionsAnswers = [
    {
      question: "What is AlgorithmMind?",
      answer: "AlgorithmMind is an educational platform that offers courses on technology, data structures, algorithms, and computer science topics."
    },
    {
      question: "How can I enroll in a course?",
      answer: "You can enroll by creating an account, logging in, and selecting the course you'd like to join. Follow the instructions to complete the enrollment process."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Most beginner courses have no prerequisites. However, some advanced courses may require prior knowledge in specific subjects. Check the course details for more information."
    },
    {
      question: "Can I access the courses offline?",
      answer: "Currently, courses are accessible online only. However, we're working on offline access for future updates!"
    },
    {
      question: "How do I contact support?",
      answer: "You can contact our support team via the 'Contact Us' page for any help or inquiries."
    }
  ];

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          {questionsAnswers.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      );
}

export default Questions
