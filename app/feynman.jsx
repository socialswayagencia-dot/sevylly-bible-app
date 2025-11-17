import Link from 'next/link';
import styles from './page.module.css';

export default function Method() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Feynman</h1>
        <p className={styles.subtitle}>Explique em suas próprias palavras.</p>
      </header>
      <section style={{maxWidth:800, margin:'16px auto', background:'#fff', padding:16, borderRadius:8}}>
        <p>Resuma o trecho e ensine para si mesmo ou para outra pessoa.</p>
        <Link href="/" className={styles.card}><strong>← Voltar</strong></Link>
      </section>
    </main>
  )
}
