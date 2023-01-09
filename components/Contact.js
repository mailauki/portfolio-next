import styles from '../styles/Home.module.css'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

export default function Contact() {
  return (
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
  )
}