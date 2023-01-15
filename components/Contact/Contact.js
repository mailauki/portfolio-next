import styles from '../../styles/Home.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Badge, Box } from '@mui/material'
import { contactInfo } from '../../data/contactInfo'

export default function Contact() {
  return (
    <div className={styles.section} id="contact">
      <Typography variant="h3">Contact Info</Typography>

      <List 
        className={styles.list}
        sx={{ 
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

      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4
        }}
      >
        <Badge 
          overlap="circular"
          badgeContent={
            <Typography 
              className={styles.wave} 
              sx={{ fontSize: "5rem" }}
            >
              👋
            </Typography>
          }
          anchorOrigin={{ 
            vertical: "bottom", horizontal: "left" 
          }}
          sx={{ margin: 2 }}
        >
          <Avatar 
            src="/photo.jfif"
            sx={{ 
              width: 184,
              height: 184
            }} 
          />
        </Badge>

        <Typography variant="subtitle1">New to Tech, but excited for more.</Typography>
      </Box>
    </div>
  )
}