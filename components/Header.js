import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 style={{ marginRight: "1em" }}>Julie Evans</h1>
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
    </div>
  )
}