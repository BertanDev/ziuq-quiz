import React from 'react';
import styles from './styles.module.scss'

interface RenderQuestionProps {
    question: {
        id: number;
        question: string;
        alternatives: {
            a: string;
            b: string;
            c: string;
            d: string;
        };
        correctAlternative: string;
    }

    handleChoseAlternative: (response: string) => void
}

export function RenderQuestion({ question, handleChoseAlternative }: RenderQuestionProps) {
    return (
        <>
            <div className={styles.question}>
                {question.question}
            </div>

            <button className={styles.alternative} onClick={() => handleChoseAlternative('a')}>
                <span>
                    {question.alternatives.a}
                </span>
            </button>

            <button className={styles.alternative} onClick={() => handleChoseAlternative('b')}>
                <span>
                    {question.alternatives.b}
                </span>
            </button>

            <button className={styles.alternative} onClick={() => handleChoseAlternative('c')}>
                <span>
                    {question.alternatives.c}
                </span>
            </button>

            <button className={styles.alternative} onClick={() => handleChoseAlternative('d')}>
                <span>
                    {question.alternatives.d}
                </span>
            </button>
        </>
    )
}