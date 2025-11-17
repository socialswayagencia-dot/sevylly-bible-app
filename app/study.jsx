import Link from 'next/link';
import styles from './page.module.css';

export default function Method() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Active Recall</h1>
        <p className={styles.subtitle}>Perguntas e flashcards para fixação.</p>
      </header>
      <section style={{maxWidth:800, margin:'16px auto', background:'#fff', padding:16, borderRadius:8}}>
        <p>Crie perguntas antes e depois da leitura; use repetição espaçada.</p>
        <Link href="/" className={styles.card}><strong>← Voltar</strong></Link>
      </section>
    </main>
  )
}
