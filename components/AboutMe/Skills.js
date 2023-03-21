import styles from '../../styles/Home.module.css'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography, Box, Stack } from '@mui/material'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <>
      <Typography variant="h4">Skills</Typography>
      <Divider width="100%" sx={{ margin: "0.5rem 0" }} />

      <Box className={styles.list} sx={{ alignItems: "center", justifyContent: "center" }}>
        {skills.map((skill) => (
          <Stack direction="row" flexWrap="wrap" justifyContent="center">
              <ListItem key={skill.id} sx={{ width: "200px" }}>
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
          </Stack>
        ))}
      </Box>
    </>
  )
}