import styles from '../styles/Home.module.css'

export default function AboutMe() {
  return (
    <div className={styles.section}>
      <h1>About Me</h1>

      <div className={styles.content}>
        <p>about me</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Next JS</li>
          <li>Redux</li>
          <li>Postgres</li>
        </ul>
        <p>goals...</p>
      </div>
    </div>
  )
}