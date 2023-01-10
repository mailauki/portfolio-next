import styles from '../styles/Home.module.css'
import Hello from './Hello'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'

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