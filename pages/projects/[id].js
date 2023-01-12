import { useRouter } from 'next/router'
import useSWR from 'swr'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Project() {
  const { query } = useRouter()
  const { data, error } = useSWR(`/api/projects/${query.id}`, fetcher)

  if (error) return <div>Failed to Load</div>

  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
    <div>
      <Image 
        src={data.image} 
        alt={data.id} 
        width={512}
        height={331.5}
        priority 
      />
      <h3 className={inter.className}>
        {data.title}
      </h3>
      <p className={inter.className}>
        {data.description[0]}
      </p>
      <ul>
        {data.description[1].map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <div>
        {data.tags.map((tag) => <p key={tag}>{tag}</p>)}
      </div>
      <div>
        <a 
          href={data.links.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a 
          href={data.links.demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  )
}