import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Projects from '../components/Projects'
import Blogs from './Blogs'

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

      <Projects />

      <Blogs />

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