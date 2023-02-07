import dayjs from 'dayjs'
import 'dayjs/plugin/duration';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../styles/FinishedQuiz.module.scss'

export default function FinishedQuiz(){
    const [tempoRestante, setTempoRestante] = useState(dayjs().endOf('day').diff(dayjs(), 'second'));
    const [currentScore, setCurrentScore] = useState('')

    const router = useRouter()
    const { score } = router.query
    const numberScore = Number(currentScore)
    const stringScore = String(score)

    const today = dayjs()   

    //Impede o usuário de voltar para a paginba do quiz
    useEffect(() => {
        const handleBack = (event) => {
            const route = router.asPath
            const parts = route.split('?')

          if (parts[0] === '/finishedQuiz') {
            event.preventDefault();
            // Optional: redirect to another page
            router.push('/finishedQuiz');
          }
        };
        window.onpopstate = handleBack;
        return () => {
          window.onpopstate = null;
        };
      }, []);

    useEffect(() => {
        const storageScore = localStorage.getItem('score')
        const storageFinishDate = localStorage.getItem('finishDate')
        
        if(!storageScore && !storageFinishDate) {
            localStorage.setItem('score', stringScore)
            localStorage.setItem('finishDate', String(today))
            return
        }

        setCurrentScore(storageScore)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
        setTempoRestante(tempoRestante - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [tempoRestante]);

    const horas = Math.floor(tempoRestante / 3600).toString().padStart(2, '0');
    const minutos = Math.floor((tempoRestante % 3600) / 60).toString().padStart(2, '0');
    const segundos = (tempoRestante % 60).toString().padStart(2, '0');

    const messageColor = numberScore < 5 ? 'messageRed': 
                         numberScore >= 5 && numberScore < 8 ? 'messageYellow' : 
                         numberScore == 8 || numberScore == 9 ? 'messageGreen' : 
                         numberScore == 10 ? 'messageOrange' : ''

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.score}>
                    <h3>Ultima pontuação:</h3>
                    <span className={styles.points}>{currentScore}0</span>
                    <span className={`${styles.message} ${styles[messageColor]}`} >{
                            numberScore < 5 ? 'Precisa melhorar' : 
                            numberScore >= 5 && numberScore < 8 ? 'Você consegue mais' : 
                            numberScore == 8 || numberScore == 9 ? 'Uau, faltou pouco' : 
                            numberScore == 10 ? 'You are a LEGEND' : ''
                        }</span>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.nextGame}>
                        <h3>Proximo quiz em: {horas}:{minutos}:{segundos}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}