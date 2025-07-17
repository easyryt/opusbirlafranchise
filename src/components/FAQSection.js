import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  { question: 'What is the best time to visit?', answer: 'October to June is ideal for visiting Jim Corbett.' },
  { question: 'When the Jim Corbett National Park open ?', answer: 'The park is generally open from November 15 to June 30.' },
  { question: 'Which Safari is better in JimCorbett morning or evening', answer: 'Morning safari is better for wildlife spotting.' },
  { question: 'What is the best zone in Corbett', answer: 'Dhikala and Bijrani are considered the best zones.' },
  { question: 'Which zone is best for nightstay', answer: 'Dhikala zone has the most popular night stay options.' },
  { question: 'Why is Dhikala zone famous for', answer: 'Dhikala is famous for rich biodiversity and great tiger sightings.' },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqWrapper}>
      <h2>Frequently Asked Questions</h2>
      <p>
        Painting your home is fun and hassle-free when planned well. For that, you must know all about
        various aspects of the painting process. Find answers to all your paint questions here!
      </p>
      <div className={styles.accordion}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div className={styles.question} onClick={() => toggle(index)}>
              {item.question}
              <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {activeIndex === index && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
