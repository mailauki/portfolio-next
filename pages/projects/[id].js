import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { AppBar, Toolbar, IconButton, CircularProgress, Button, Chip } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { minHeight } from '@mui/system'

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Project() {
  const { query } = useRouter()
  const { data, error } = useSWR(`/api/projects/${query.id}`, fetcher)

  if (error) return <div className={styles.section}>Failed to Load</div>

  if (!data) return <div className={styles.section}><CircularProgress /></div>

  return (
    <>
      <Head>
        <title>Julie Evans Portfolio - {data.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div 
        // className={styles.main}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "4rem"
        }}
      >
        <AppBar 
          color="transparent" 
          className={styles.header} 
        >
          <Toolbar variant="dense">
            <IconButton color="primary" component="a" href="/">
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        
        <div 
          // className={styles.section} 
          style={{ alignItems: "flex-start" }}
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
              // width={512}
              // height={331.5}
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
          <ul style={{ backgroundColor: "transparent", marginLeft: "1rem" }}>
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
            <Button 
              component="a"
              href={data.links.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              component="a"
              href={data.links.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}