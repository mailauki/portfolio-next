import styles from '../styles/Home.module.css'
import Hello from './Hello/Hello'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'
import Header from './Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hello />

      <AboutMe />

      <Projects />

      <Blogs />

      <Contact />
    </main>
  )
}