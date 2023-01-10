import styles from '../styles/Home.module.css'
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import { contactInfo } from '../data/contactInfo'

export default function Contact() {
  return (
    <div className={styles.section}>
      <h2>Contact Info</h2>
      <List 
        className={styles.grid}
        sx={{ 
          bgcolor: "background.paper", 
          borderRadius: "20px"
        }}
      >
        {contactInfo.map((info) => (
          <ListItem 
            key={info.id} 
            disablePadding 
          >
            <ListItemButton>
              <ListItemIcon>
                {info.icon}
              </ListItemIcon>
              <ListItemText primary={info.primary} secondary={info.secondary} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}