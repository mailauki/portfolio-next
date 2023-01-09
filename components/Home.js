import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hello from './Hello'
import AboutMe from './AboutMe'
import Projects from '../components/Projects'
import Blogs from './Blogs'
import Contact from './Contact'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello />

      <AboutMe />

      <Projects />

      <Blogs />
    </main>
  )
}