import styles from '../../styles/Home.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { contactInfo } from '../../data/contactInfo'

export default function Contact() {
  return (
    <div className={styles.section} id="contact">
      <Typography variant="h3">Contact Info</Typography>

      <List 
        className={styles.list}
        sx={{ 
          bgcolor: "background.paper", 
          borderRadius: "12px", 
          overflow: "hidden",
          padding: 0
        }}
      >
        {contactInfo.map((info) => (
          <ListItem 
            key={info.id} 
            disablePadding 
          >
            <ListItemButton 
              component="a" 
              href={info.link} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                {info.icon}
              </ListItemIcon>
              <ListItemText primary={info.primary} secondary={
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  noWrap
                >
                  {info.secondary}
                </Typography>
              } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}