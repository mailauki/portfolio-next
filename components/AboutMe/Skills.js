import styles from '../../styles/Home.module.css'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemButton, Divider, Typography, Box, Chip } from '@mui/material'
import { skills } from '../../data/skills'

export default function Skills() {
  const labels = Object.keys(skills)

  return (
    <>
      <h2>Skills</h2>

      {/* <Box
        // className={styles.grid}
        sx={{
          // bgcolor: "background.paper", 
          borderRadius: "12px"
        }}
      >
        {skills[labels[0]].map((skill) => (
          <Box 
            key={skill.id} 
            className={styles.card}
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ mr: 1 }}>{skill.icon}</Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                flexGrow: 1
              }}
            >
              <Typography variant="h6">{skill.primary}</Typography>
              <Typography variant="subtitle1">{skill.secondary}</Typography>
            </Box>
          </Box>
        ))}
      </Box> */}

      <List 
        // className={styles.list}
        className={styles.grid}
        dense
        sx={{
          bgcolor: "background.paper", 
          borderRadius: "12px",
          // display: "grid",
          // gridTemplateColumns: "repeat(3, 200px)",
          // width: "100%"
        }}
      >
        {labels.map((label) => (
          <>
            <ListItem sx={{ gridColumn: "1 / -1", textAlign: "center" }}>
                <ListItemText primary={
                  <Typography variant="h6">
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