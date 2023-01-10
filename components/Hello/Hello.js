import styles from '../../styles/Home.module.css'
import { Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import Footer from '../Footer'

export default function Hello() {

  return (
    <div className={styles.section}>
      <Footer />

      <div className={styles.center}>
        <h1>Hi, I'm Julie M. Evans</h1>
        <p>Web Developer / Software Engineer / Full-Stack Engineer</p>
        <Button 
          variant="contained" 
          startIcon={<MailIcon />} 
          size="large" 
          sx={{ borderRadius: 50, padding: "12px 16px" }}
          component="a" 
          href="mailto:juliemevans17@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </Button>
      </div>
    </div>
  )
}