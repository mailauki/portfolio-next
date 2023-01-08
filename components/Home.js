import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hello from './Hello'
import AboutMe from './AboutMe'
import Projects from '../components/Projects'
import Blogs from './Blogs'
import Contact from './Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello />

      <AboutMe />

      <Projects />

      <Blogs />

      <Contact />
    </main>
  )
}