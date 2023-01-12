import styles from '../../styles/Home.module.css'
import { Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export default function Hello() {
  return (
    <div className={styles.section} id="hello">
      <div className={styles.center}>
        <div>
          <h1>Hi, I'm</h1>
          <span></span>
          <h1>Julie M. Evans</h1>
        </div>
        <div>
          <p>Web Developer<span>/</span></p>
          <p>Software Engineer<span>/</span></p>
          <p>Full-Stack Engineer</p>
        </div>
        <Button 
          variant="contained" 
          startIcon={<MailIcon />} 
          size="large" 
          sx={{ borderRadius: 50, padding: "12px 16px", margin: 2 }}
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