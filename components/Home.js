import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import projects from '../json/data'
import Projects from '../components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <h1>Hi, I'm Julie M. Evans</h1>
        <p>Web Developer / Software Engineer / Full-Stack Engineer</p>
        <button>Contact Me</button>
      </div>

      <div className={styles.section}>
        <h1>About Me</h1>
        <p>about me</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Next JS</li>
          <li>Redux</li>
          <li>Postgres</li>
        </ul>
        <p>goals...</p>
      </div>

      {/* <div className={styles.section}>
        <h1>Projects</h1>

        <div className={styles.grid}>
          {projects.map((data) => (
            <a
              href="#"
              className={styles.card}
              target="_blank"
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
      </div> */}

      <Projects />

      <div className={styles.section}>
        <h1>Blogs</h1>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Blog Title <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Blog Info
          </p>
        </a>
      </div>

      <div className={styles.section}>
        <h1>Contact Me</h1>
        <p>reach out message</p>
        <div>
          <button>LinkedIn</button>
          <button>GitHub</button>
          <button>Email</button>
        </div>
      </div>
    </main>
  )
}