import React, { createContext, useContext, useState } from 'react';

interface AnswersContextType {
    answers: Record<string, string>;
    updateAnswer: (questionId: string, value: string) => void;
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined);

export const AnswersProvider: React.FC = ({ children }) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const updateAnswer = (questionId: string, value: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value
        }));
    };

    return (
        <AnswersContext.Provider value={{ answers, updateAnswer }}>
            {children}
        </AnswersContext.Provider>
    );
};

export const useAnswersContext = (): AnswersContextType => {
    const context = useContext(AnswersContext);
    if (!context) {
        throw new Error(
            'useAnswersContext must be used within an AnswersProvider'
        );
    }
    return context;
};
