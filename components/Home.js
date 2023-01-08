import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import AboutMe from './AboutMe'
import Projects from '../components/Projects'
import Blogs from './Blogs'
import Contact from './Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <h1>Hi, I'm Julie M. Evans</h1>
        <p>Web Developer / Software Engineer / Full-Stack Engineer</p>
        <button>Contact Me</button>
      </div>

      <AboutMe />

      <Projects />

      <Blogs />

      <Contact />
    </main>
  )
}