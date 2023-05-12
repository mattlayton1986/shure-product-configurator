import styles from './styles.module.scss';

export default function WeatherLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p>Header shared across all /weather/ routes.</p>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Footer shared across all /weather/ routes.</p>
      </footer>
    </div>
  );
}
