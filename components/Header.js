import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typography, Box, AppBar, Toolbar, Tabs, Tab } from '@mui/material'

export default function Header({ tab }) {
  const [value, setValue] = useState(null)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  useEffect(() => {
    tab === "hello" ? setValue(null) : setValue(tab)
  }, [tab])

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
        >
          {/* <Box 
            className={styles.logo} 
            sx={{ mr: 2 }}
            component="a" 
            href="#" 
            target="_top"
            rel="noopener noreferrer"
            onClick={() => setValue("hello")}
            value="hello"
          >
            <Image 
              src="/logo.png"
              alt="logo"
              width={40} 
              height={40} 
              style={{ marginRight: "4px" }}
            />
            <Typography variant="h5">Julie Evans</Typography>
          </Box> */}

          <Tab 
            label="About Me" 
            component="a" 
            href="#aboutme" 
            value="aboutme" 
          />
          <Tab 
            label="Projects" 
            component="a" 
            href="#projects" 
            value="projects" 
          />
          <Tab 
            label="Blogs" 
            component="a" 
            href="#blogs" 
            value="blogs" 
          />
          <Tab 
            label="Contact" 
            component="a" 
            href="#contact" 
            value="contact" 
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}