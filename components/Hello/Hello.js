import styles from '../../styles/Home.module.css'
import { Button, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export default function Hello() {
  return (
    <div className={styles.section} id="hello">
      <div className={styles.center}>
        <div>
          <Typography variant="h3">Hi, I'm</Typography>
          <span></span>
          <Typography variant="h3">Julie <span>M. </span>Evans</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">
            Web Developer<span>/</span>
          </Typography>
          <Typography variant="subtitle1">
            Software Engineer<span>/</span>
          </Typography>
          <Typography variant="subtitle1">
            Full-Stack Engineer
          </Typography>
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