import styles from '../styles/Home.module.css'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

export default function Contact() {
  return (
    <div className={styles.section}>
      <h1>Contact Me</h1>

      <p>reach out message</p>
      <div>
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
  )
}