import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
// import projects from '../../data/projects'
import { supabase } from '../../data/supabaseClient'
import { Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  const [projects, setProjects] = useState([])

  async function getProjects() {
    let { data, error, status } = await supabase
      .from('projects')
      .select(`
        id,
        title,
        description,
        image,
        links (github, demo),
        project_tags (
          tags (name)
        )
      `)

    const projects = data.reverse().map((project) => (
      Object.assign({
        id: project.id, 
        title: project.title, 
        description: project.description, 
        image: project.image, 
        tags: project.project_tags.map((tag) => (
          tag.tags.name
        ))
      })
    ))

    setProjects(projects)
  }

  useEffect(() => {
    getProjects()
  }, [supabase])

  return (
    <div className={styles.section} id="projects">
      <Typography variant="h3">Projects</Typography>

      <div className={styles.grid}>
        {projects.map((data) => (
          <Link
            key={data.id}
            href={`/api/projects/${data.id}`}
            as={`/projects/${data.id}`}
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              {data.title} <span><ArrowForwardIcon /></span>
            </h3>
            <p className={inter.className}>
              {data.description[0]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}