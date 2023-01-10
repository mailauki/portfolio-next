import styles from '../styles/Home.module.css'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography, Box } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import StarIcon from '@mui/icons-material/Star'
import { skills } from '../data/skills'

export default function AboutMe() {
  return (
    <div className={styles.section}>
      <h1>About Me</h1>

      <Box>
        <Typography variant="body1" align="justify" paragraph>
          <Typography variant="h4" component="span">H</Typography>ello, my name is Julie. For as long as I can remember I have been an avid learner. I enjoy learning new things, especially pertaining to languages. I like to understand the fundamentals of things and know how they function. My greatest passion is making something visual and functional using words. I'm quite the perfectionist, but I try to use it to my advantage when I can. I consider myself a problem-solver, and I like to solve puzzles or make puzzles out of difficult things to make things more fun. 
        </Typography>

        <Typography variant="body1" align="justify" paragraph>
          I'm experienced in React, JavaScript, and Ruby on Rails based programming. I have a Bachelors Degree in Integrative Studies with focuses in Linguistics and Anthropology. My understanding of Linguistics helps to provide a basis for ease in language learning, including programming languages.
        </Typography>

        <Typography variant="body1" align="justify" paragraph>
          <span 
            style={{ 
              verticalAlign: "text-top", 
              marginRight: "0.5rem" 
            }}
          >
            <StarIcon sx={{ width: "16px", height: "16px" }} />
          </span>
          I'm working towards learning Angular, and Typescript.
        </Typography>
      </Box>

      <h2>Skills</h2>
      <List 
        className={styles.grid}
        sx={{ 
          bgcolor: 'background.paper', 
          borderRadius: "20px"
        }}
      >
        {skills.map((skill) => (
          <ListItem key={skill.id} sx={{ width: "fit-content" }}>
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
    </div>
  )
}