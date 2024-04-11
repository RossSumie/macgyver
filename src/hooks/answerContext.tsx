import React, { createContext, useContext, useState } from 'react';

interface AnswersContextType {
    answers: { [questionId: string]: string };
    updateAnswer: (questionId: string, answer: string) => void;
    totalValue: number; // Add totalValue to the context
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
    const [totalValue, setTotalValue] = useState<number>(0); // Initialize totalValue

    const getOptionWeight = (answer: string): number => {
        // Define the weights for different answer options
        switch (answer) {
            case 'OK':
                return 10;
            case 'Faulty but OK':
                return 5;
            case 'Faulty':
                return 0;
            default:
                return 0; // Default weight if answer is not recognized
        }
    };

    const updateAnswer = (questionId: string, answer: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer
        }));

        // Update totalValue based on the selected option
        const optionWeight = getOptionWeight(answer);
        setTotalValue((prevTotalValue) => prevTotalValue + optionWeight);
    };

    return (
        <AnswersContext.Provider value={{ answers, updateAnswer, totalValue }}>
            {children}
        </AnswersContext.Provider>
    );
};
