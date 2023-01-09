import styles from '../styles/Home.module.css'
import Contact from './Contact'
import { Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export default function Hello() {
  return (
    <div className={styles.section}>
      <Contact />

      <div className={styles.center}>
        <h1>Hi, I'm Julie M. Evans</h1>
        <p>Web Developer / Software Engineer / Full-Stack Engineer</p>
        <Button 
          variant="contained" 
          startIcon={<MailIcon />} 
          size="large" 
          sx={{ borderRadius: 50, padding: "12px 16px" }}
        >
          Contact Me
        </Button>
      </div>
    </div>
  )
}