import styles from '../../styles/Home.module.css'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography, Box } from '@mui/material'
import { skills } from '../../data/skills'

export default function Skills() {
  const labels = Object.keys(skills)

  return (
    <>
      <Typography variant="h4">Skills</Typography>
      <Divider width="100%" sx={{ margin: "0.5rem 0" }} />

      <Box className={styles.scroll} sx={{ width: "100%" }}>
        {labels.map((label) => (
          <Box sx={{ margin: "1rem 0" }} key={label}>
            <Typography variant="h6">
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </Typography>

            <List dense>
              {skills[label].map((skill) => (
                <ListItem key={skill.id}>
                  <ListItemAvatar>
                    <Avatar>
                      {skill.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={skill.primary} 
                    secondary={skill.secondary} 
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </>
  )
}