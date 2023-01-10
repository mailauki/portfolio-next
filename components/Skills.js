import styles from '../styles/Home.module.css'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography, Box } from '@mui/material'
import { skills } from '../data/skills'

export default function Skills() {
  const labels = Object.keys(skills)

  return (
    <>
      <h2>Skills</h2>

      <List 
        className={styles.grid}
        sx={{
          bgcolor: "background.paper",
          borderRadius: "20px"
        }}
      >
        {labels.map((label) => (
          <>
            <ListItem sx={{ gridColumn: "1 / -1", textAlign: "center" }}>
              <ListItemText primary={
                <Typography variant="h5">
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </Typography>
              } />
            </ListItem>

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

            {labels.indexOf(label) === labels.length-1 ? (
              <></>
            ) : (
              <Divider sx={{ gridColumn: "1 / -1", mt: "8px" }} />
            )}
          </>
        ))}
      </List>
    </>
  )
}