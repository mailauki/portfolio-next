import styles from '../styles/Home.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { contactInfo } from '../data/contactInfo'

export default function Contact() {
  return (
    <div className={styles.section}>
      <h2>Contact Info</h2>
      <List 
        className={styles.grid}
        sx={{ 
          bgcolor: "background.paper", 
          borderRadius: "20px", 
          overflow: "hidden",
          padding: 0
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