import styles from '../styles/Home.module.css'
import { IconButton } from '@mui/material'
import { contactInfo } from '../data/contactInfo'

export default function Footer() {
  const shortContactInfo = contactInfo.filter(info => ["email", "linkedin", "github"].includes(info.id))

  return (
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
  )
}