import styles from '../styles/Home.module.css'
import { Button, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { contactInfo } from '../data/contactInfo'

export default function Hello() {
  const shortContactInfo = contactInfo.filter(info => ["email", "linkedin", "github"].includes(info.id))

  return (
    <div className={styles.section}>
      <div className={styles.description}>
        <p>Hi</p>

        <div className={styles.footer}>
          <div className={styles.contact}>
            By Julie Evans{' '}

            {shortContactInfo.map((info) => (
              <IconButton 
                color="primary"
                component="a" 
                href={info.link} 
                target="_blank"
                rel="noopener noreferrer"
              >
                {info.icon}
              </IconButton>
            ))}
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