import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import blogs from '../../data/blogs'
import { Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const inter = Inter({ subsets: ['latin'] })

export default function Blogs() {
  return (
    <div className={styles.section} id="blogs">
      <Typography variant="h3">Blogs</Typography>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              {blog.title} <span><ArrowForwardIcon /></span>
            </h3>
            <p className={inter.className}>
              {blog.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}