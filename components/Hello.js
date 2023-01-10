import styles from '../styles/Home.module.css'
import Contact from './Contact'
import { Button, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

export default function Hello() {
  return (
    <div className={styles.section}>
      <div className={styles.description}>
        <p>Hi</p>

        <div className={styles.footer}>
          <div className={styles.contact}>
            By Julie Evans{' '}

            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
            <IconButton color="primary">
              <MailIcon />
            </IconButton>
          </div>
        </div>
      </div>

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