import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [score, setScore] = useState('')
  const [finishDate, setFinishDate] = useState('')

  const router = useRouter()

  useEffect(() => {
    const storageScore = localStorage.getItem('score')
    const storageFinishDate = localStorage.getItem('finishDate')

    setScore(storageScore)
    setFinishDate(storageFinishDate)
  }, [])

  const currentDate = dayjs()

  if(dayjs(finishDate).isBefore(currentDate)) {
    router.push({
      pathname: '/finishedQuiz',
      query: {score: score}
    })
  }

  return (
    <>
      <Head>
        <title>Ziuq | Iniciar tentativa</title>
      </Head>

      <main className={styles.container}>
        <h1>Ziuq</h1>
        <h2>Seu quiz diário</h2>

        <Link href='/alreadyQuiz'>
          <button>
            Iniciar quiz
          </button>
        </Link>

        
        <Link href='/howToPlay'>
          Como jogar?
        </Link>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  

  return {
    props: {}
  }
}
