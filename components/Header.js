import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Typography, Box, AppBar, Toolbar } from '@mui/material'

export default function Header() {
  return (
    <AppBar 
      color="transparent" 
      className={styles.header}
    >
      <Toolbar sx={{ pt: 1, pb: 1 }}>
        <Box 
          className={styles.logo} 
          sx={{ mr: 2 }}
          component="a" 
          href="#" 
          target="_top"
          rel="noopener noreferrer"
        >
          <Image 
            src="/logo.png"
            alt="logo"
            width={40} 
            height={40} 
            style={{ marginRight: "4px" }}
          />
          <Typography variant="h5">Julie Evans</Typography>
        </Box>

        <Box className={styles.buttons}>
          <Button 
            component="a" 
            href="#hello" 
            rel="noopener noreferrer"
          >
            Hello
          </Button>
          <Button 
            component="a" 
            href="#aboutme" 
            rel="noopener noreferrer"
          >
            About Me
          </Button>
          <Button 
            component="a" 
            href="#projects" 
            rel="noopener noreferrer"
          >
            Projects
          </Button>
          <Button 
            component="a" 
            href="#blogs" 
            rel="noopener noreferrer"
          >
            Blogs
          </Button>
          <Button 
            component="a" 
            href="#contact" 
            rel="noopener noreferrer"
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}