import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import projects from '../json/data'
// import useSWR from 'swr'

const inter = Inter({ subsets: ['latin'] })

// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Projects() {
  // const { data, error } = useSWR('/api/staticdata', fetcher)

  // if (error) return <div>Failed to load</div>

  // if (!data) return <div>Loading...</div>

  return (
    <div className={styles.section}>
      <h1>Projects</h1>

      <div className={styles.grid}>
        {projects.map((data) => (
          <a
            key={data.id}
            href={`/api/projects/${data.id}`}
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {data.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {data.description[0]}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}