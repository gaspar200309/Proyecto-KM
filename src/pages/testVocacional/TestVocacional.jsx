import { useState } from 'react';
import './TestVocacional.css'; // Asegúrate de que este archivo CSS esté creado

const questions = [
  {
    id: 1,
    text: "¿Qué actividad disfrutas más?",
    options: ["Resolver problemas matemáticos", "Escribir historias", "Realizar experimentos científicos", "Dibujar o pintar"]
  },
  {
    id: 2,
    text: "¿En qué tipo de ambiente te sientes más cómodo trabajando?",
    options: ["Oficina", "Al aire libre", "Laboratorio", "Estudio creativo"]
  },
  {
    id: 3,
    text: "¿Qué habilidad consideras que es tu punto fuerte?",
    options: ["Análisis lógico", "Comunicación", "Resolución de problemas", "Creatividad"]
  },
  {
    id: 3,
    text: "¿Qué habilidad consideras que es tu punto fuerte?",
    options: ["Análisis lógico", "Comunicación", "Resolución de problemas", "Creatividad"]
  }
];

const TestVocacional = () => {
  const [answers, setAnswers] = useState({});

  const handleOptionSelect = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  return (
    <div className="test-vocacional-container">
      <div className="test-content">
        <h1 className="test-title">Test Vocacional</h1>
        {questions.map(question => (
          <div key={question.id} className="question">
            <p className="question-text">{question.text}</p>
            <div className="options">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${answers[question.id] === option ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(question.id, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-button">Ver resultados</button>

      </div>
    </div>
  );
};

export default TestVocacional;
