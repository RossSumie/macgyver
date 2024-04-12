import React, { createContext, useContext, useState } from 'react';

interface AnswersContextType {
    answers: { [questionId: string]: string };
    updateAnswer: (questionId: string, answer: string) => void;
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

    return (
        <AnswersContext.Provider value={{ answers, updateAnswer }}>
            {children}
        </AnswersContext.Provider>
    );
};
