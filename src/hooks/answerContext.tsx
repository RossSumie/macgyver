import React, { createContext, useContext, useState } from 'react';

interface AnswersContextType {
    answers: { [questionId: string]: string };
    updateAnswer: (questionId: string, answer: string) => void;
    resetAnswers: () => void; // Define resetAnswers function
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined);

export const useAnswersContext = () => {
    const context = useContext(AnswersContext);
    if (!context) {
        throw new Error(
            'useAnswersContext must be used within an AnswersProvider'
        );
    }
    return context;
};

export const AnswersProvider: React.FC = ({ children }) => {
    const [answers, setAnswers] = useState<{ [questionId: string]: string }>(
        {}
    );

    const updateAnswer = (questionId: string, answer: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const resetAnswers = () => {
        setAnswers({}); // Reset answers to empty object
    };

    return (
        <AnswersContext.Provider
            value={{ answers, updateAnswer, resetAnswers }}
        >
            {' '}
            {/* Include resetAnswers in the context */}
            {children}
        </AnswersContext.Provider>
    );
};
