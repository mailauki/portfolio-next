import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typography, Box, AppBar, Toolbar, Tabs, Tab } from '@mui/material'

export default function Header() {
  const [value, setValue] = useState(null)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <AppBar 
      color="transparent" 
      className={styles.header} 
    >
      <Toolbar variant="dense">
        <Box 
          className={styles.logo} 
          sx={{ mr: 2 }}
          component="a" 
          href="#" 
          target="_top"
          rel="noopener noreferrer"
          onClick={() => setValue(null)}
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

        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          // sx={{ minHeight: "64px" }}
        >
          <Tab label="About Me" component="a" href="#aboutme" />
          <Tab label="Projects" component="a" href="#projects" />
          <Tab label="Blogs" component="a" href="#blogs" />
          <Tab label="Contact" component="a" href="#contact" />
        </Tabs>

        {/* <Box className={styles.buttons}>
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
        </Box> */}
      </Toolbar>
    </AppBar>
  )
}