import Link from 'next/link';
import styles from './page.module.css';

export default function Method() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Pomodoro</h1>
        <p className={styles.subtitle}>Ciclos de estudo e descanso para manter foco.</p>
      </header>
      <section style={{maxWidth:800, margin:'16px auto', background:'#fff', padding:16, borderRadius:8}}>
        <p>Use 25 minutos de leitura com 5 minutos de pausa; personalize para 45/15 em estudos mais profundos.</p>
        <Link href="/" className={styles.card}><strong>← Voltar</strong></Link>
      </section>
    </main>
  )
}
