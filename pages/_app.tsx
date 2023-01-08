import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <main className={styles.main}>
      {children}
      </main>
  </>
}

