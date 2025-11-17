import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Escolha seu método de estudo</h1>
        <p className={styles.subtitle}>Pomodoro em destaque • Active Recall • Feynman • SQ3R • Revisão inteligente</p>
      </header>

      <section className={styles.grid}>
        <Link href="/pomodoro" className={styles.card}>
          <h3>Pomodoro →</h3>
          <p>Ciclos de foco 25/5 para leitura e meditação.</p>
        </Link>

        <Link href="/study" className={styles.card}>
          <h3>Active Recall →</h3>
          <p>Faça perguntas e revise com flashcards.</p>
        </Link>

        <Link href="/feynman" className={styles.card}>
          <h3>Feynman →</h3>
          <p>Explique o texto com suas palavras.</p>
        </Link>

        <Link href="/sq3r" className={styles.card}>
          <h3>SQ3R →</h3>
          <p>Survey • Question • Read • Recite • Review.</p>
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>Evylly • Tema roxo & dourado</p>
      </footer>
    </main>
  )
}
