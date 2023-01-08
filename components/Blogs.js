import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import blogs from '../json/blogs'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Blogs() {
  return (
    <div className={styles.section}>
      <h1>Blogs</h1>

      <div className={styles.grid}>
        {blogs.map((data) => (
          <a
            key={data.id}
            href={`/api/projects/${data.id}`}
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              {data.title} <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              {data.description[0]}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}