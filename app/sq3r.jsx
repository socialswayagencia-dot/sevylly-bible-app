import Link from 'next/link';
import styles from './page.module.css';

export default function Method() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>SQ3R</h1>
        <p className={styles.subtitle}>Survey • Question • Read • Recite • Review.</p>
      </header>
      <section style={{maxWidth:800, margin:'16px auto', background:'#fff', padding:16, borderRadius:8}}>
        <p>Siga as etapas para leitura ativa e sistemática.</p>
        <Link href="/" className={styles.card}><strong>← Voltar</strong></Link>
      </section>
    </main>
  )
}
