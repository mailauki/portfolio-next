import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.section}>
      <h1>Contact Me</h1>

      <p>reach out message</p>
      <div>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Email</button>
      </div>
    </div>
  )
}