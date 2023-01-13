import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { Button, Typography, Box, Chip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenIcon from '@mui/icons-material/OpenInNew'

const inter = Inter({ subsets: ['latin'] })

export default function Project({ data }) {
  return (
    <div 
      className={styles.page}
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
          src={data.image} 
          alt={data.id} 
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <h3 className={inter.className}>
        {data.title}
      </h3>
      
      <p className={inter.className}>
        {data.description[0]}
      </p>

      <ul style={{ backgroundColor: "transparent", marginLeft: "1.5rem" }}>
        {data.description.length > 1 ? (
          data.description[1].map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))
        ) : (
          <></>
        )}
      </ul>

      <div>
        {data.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ margin: 0.5 }} />
        ))}
      </div>

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
  )
}