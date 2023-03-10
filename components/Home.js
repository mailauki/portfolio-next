import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Hello from './Hello/Hello'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'
import Header from './Header'

export default function Home() {
  const [tab, setTab] = useState("hello")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setTab(entry.target.id)
        }
      })
    })
  
    const hiddenElements = document.querySelectorAll(`.${styles.section}`)
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <main className={styles.main}>
      <Header tab={tab}/>

      <Hello />

      <AboutMe />

      <Projects />

      <Blogs />

      <Contact />
    </main>
  )
}