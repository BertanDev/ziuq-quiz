import { useEffect, useState } from 'react'
import styles from '../styles/AlreadyQuiz.module.scss'
import { RenderQuestion } from '../components/RenderQuestions'
import { useRouter } from 'next/router'
import { api } from '../utils/api';

interface Question {
    id: number;
    question: string;
    alternatives: {
      a: string;
      b: string;
      c: string;
      d: string;
    };
    correctAlternative: "a" | "b" | "c" | "d";
  }
  
type Questions = Question[];

export default function AlreadyQuiz(){
    const [secondsTimer, setSecondsTimer] = useState(30)
    const [timerColor, setTimerColor] = useState("timerGreen")

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentResponse, setCurrentResponse] = useState('')
    const [currentScore, setCurrentScore] = useState(0)

    const [questions, setQuestions] = useState<Questions>([])

    const [isCorrect, setIsCorrect] = useState(
        [
            null, null, null, null, null, null, null, null, null, null
        ]
    )

    useEffect(() => {
        const isStorage = localStorage.getItem('score')
        
        if(isStorage){
            router.push('/finishedQuiz')
        }
    }, [])

    useEffect(() => {
        api.get('/questions')
        .then(response => {
            setQuestions(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    const router = useRouter()

    if(currentQuestion > 9) {
        router.push({
            pathname: '/finishedQuiz',
            query: {score: currentScore}
        })

        setCurrentQuestion(8)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSecondsTimer(secondsTimer - 1)
        }, 1000)
        
        if(currentResponse != '') {
            resetTimeout(timer)
            setCurrentResponse('')
        }

        if(secondsTimer < 15 && secondsTimer >= 6){
            setTimerColor("timerYellow")
        }

        if(secondsTimer < 6) {
            setTimerColor("timerRed")
        }

        if(secondsTimer < 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSecondsTimer(30)
            setTimerColor("timerGreen")

            setIsCorrect(isCorrect.map((item, index) => {
                if(index == currentQuestion) {
                    return false          
                }

                return item
            }))
            return
        }

    }, [secondsTimer])

    function resetTimeout(timerID: NodeJS.Timeout) {
        clearTimeout(timerID)
        setSecondsTimer(30)
    }

    function handleChoseAlternative(response: string) {
        setCurrentResponse(response)
        setCurrentQuestion(currentQuestion + 1)
        checkIsCorrect(response)
    }

    function checkIsCorrect(response: string) {
        let correct = false
        if (response == questions[currentQuestion].correctAlternative) {
            correct = true
            setCurrentScore(currentScore + 1)
        }
        
        setIsCorrect(isCorrect.map((item, index) => {
            if(index == currentQuestion) {
                return correct           
            }

            return item
        }))

    }

    if (questions.length !== 10) {
        return null;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.questionContainer}>
                <RenderQuestion
                    question={questions[currentQuestion]}
                    handleChoseAlternative={handleChoseAlternative}
                />
            </div>
            <div className={styles.scoreboardContainer}>
                <div className={styles.timerScore}>
                    <div className={`${styles.timer} ${styles[timerColor]}`}>
                        <span>{secondsTimer}</span>
                    </div>

                    <div className={styles.score}>
                        <span>Score</span>
                        <span>{currentScore}0</span>
                    </div>
                </div>

                <div className={styles.checkedContainer}>
                    {isCorrect.map((item, index) => {
                        let colorChecked = null

                        if(item) {
                            colorChecked = 'greenChecked'
                        }

                        if(item === false) {
                            colorChecked = 'redChecked'
                        }

                        return (
                            <div key={index} className={`${styles.checked}  ${colorChecked ? styles[colorChecked] : ''}`}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
