import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import projects from '../../data/projects'
import { Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <div className={styles.section} id="projects">
      <Typography variant="h3">Projects</Typography>

      <div className={styles.grid}>
        {projects.map((data) => (
          <Link
            key={data.id}
            href={`/api/projects/${data.id}`}
            as={`/projects/${data.id}`}
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              {data.title} <span><ArrowForwardIcon /></span>
            </h3>
            <p className={inter.className}>
              {data.description[0]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}