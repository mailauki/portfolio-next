import styles from '../styles/Home.module.css'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import { skills } from '../json/skills'

export default function AboutMe() {
  return (
    <div className={styles.section}>
      <h1>About Me</h1>

      <p>about me</p>
      <List 
        sx={{ 
          width: "100%", 
          maxWidth: 360, 
          bgcolor: 'background.paper' 
        }}
      >
        {skills.map((skill) => (
          <ListItem key={skill.id}>
            <ListItemAvatar>
              <Avatar>
                {skill.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={skill.primary} secondary={skill.secondary} />
          </ListItem>
        ))}
      </List>
      <p>goals...</p>
    </div>
  )
}