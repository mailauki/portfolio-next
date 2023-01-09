import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from './Contact'
import { Fab } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export default function Hello() {
  return (
    <div className={styles.section}>
      <Contact />

      <div className={styles.content}>
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center" 
          }}
        >
          <h1>Hi, I'm Julie M. Evans</h1>
          <p>Web Developer / Software Engineer / Full-Stack Engineer</p>
          <Fab variant="extended" color="primary">
            <MailIcon sx={{ mr: 1 }} />
            Contact Me
          </Fab>
        </div>
      </div>
    </div>
  )
}