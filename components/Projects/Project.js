import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Button, Typography, Box, Chip, List, ListItem, ListItemText } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenIcon from '@mui/icons-material/OpenInNew'


export default function Project({ data }) {
  return (
    <div className={styles.page}>
      <div 
        style={{ 
          alignItems: "flex-start", 
          position: "relative", 
          width: "100%",
          height: "50vw",
          maxHeight: "400px",
          overflow: "hidden",
          margin: "1rem auto"
        }}
      >
        <Image 
          src={data.image} 
          alt={data.id} 
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          flexWrap: "wrap", 
          width: "100%" 
        }}
      >
        <Typography variant="h3">{data.title}</Typography>
        
        <div>
          {!data.links.githubLink ? (
            <></>
          ) : (
            <Button 
              variant="outlined"
              startIcon={<GitHubIcon />} 
              component="a"
              href={data.links.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ margin: 0.5, borderRadius: "50px" }}
            >
              GitHub
            </Button>
          )}
          
          {!data.links.demoLink ? (
            <></>
          ) : (
            <Button
              variant="outlined"
              startIcon={<OpenIcon />} 
              component="a"
              href={data.links.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ margin: 0.5, borderRadius: "50px" }}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
      
      <Typography variant="subtitle1">
        {data.description[0]}
      </Typography>

      <List dense={true}>
        {data.description.length > 1 ? (
          data.description[1].map((bullet) => (
            <ListItem disablePadding>
              <ListItemText primary={<Typography variant="body2" color="text.secondary"><span>•</span>{bullet}</Typography>} className={styles.bullet} />
            </ListItem>
          ))
        ) : (
          <></>
        )}
      </List>

      <div>
        {data.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ margin: 0.5 }} />
        ))}
      </div>

      
    </div>
  )
}