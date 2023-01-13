import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { Button, Typography, Box, Chip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenIcon from '@mui/icons-material/OpenInNew'

const inter = Inter({ subsets: ['latin'] })

export default function Project({ data }) {
  const { id, title, description, image, links, tags } = data
  const { githubLink, demoLink } = links

  return (
    <div 
      className={styles.page}
      // className={styles.section} 
      // style={{ alignItems: "flex-start" }}
    >
      <div 
        style={{ 
          alignItems: "flex-start", 
          position: "relative", 
          width: "100%",
          height: "50vw",
          overflow: "hidden"
        }}
      >
        <Image 
          src={image} 
          alt={id} 
          // width={512}
          // height={331.5}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <h3 className={inter.className}>
        {title}
      </h3>
      
      <p className={inter.className}>
        {description[0]}
      </p>

      <ul style={{ backgroundColor: "transparent", marginLeft: "1.5rem" }}>
        {description.length > 1 ? (
          description[1].map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))
        ) : (
          <></>
        )}
      </ul>

      <div>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ margin: 0.5 }} />
        ))}
      </div>

      <div>
        {!githubLink ? (
          <></>
        ) : (
          <Button 
            variant="outlined"
            startIcon={<GitHubIcon />} 
            component="a"
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ margin: 0.5, borderRadius: "50px" }}
          >
            GitHub
          </Button>
        )}
        
        {!demoLink ? (
          <></>
        ) : (
          <Button
            variant="outlined"
            startIcon={<OpenIcon />} 
            component="a"
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ margin: 0.5, borderRadius: "50px" }}
          >
            Demo
          </Button>
        )}
      </div>
    </div>
  )
}