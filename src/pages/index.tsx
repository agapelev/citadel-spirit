import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}
    style={{
      position: 'relative',
      padding: '8rem 0', // Уменьшил отступы
      background: 'var(--ifm-hero-background)',
          overflow: 'hidden',
          borderBottom: '2px solid rgba(168, 85, 247, 0.4)'
    }}>

    {/* Глобальные стили для анимации перелива */}
    <style>{`
      @keyframes flowColors {
        0% { color: #22d3ee; text-shadow: 0 0 10px rgba(34,211,234,0.2); }
        50% { color: #a855f7; text-shadow: 0 0 20px rgba(168,85,247,0.4); }
        100% { color: #22d3ee; text-shadow: 0 0 10px rgba(34,211,234,0.2); }
      }
      .flowing-text {
        animation: flowColors 8s ease-in-out infinite;
      }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
      {/* Заголовок с плавным цветом и уменьшенным шрифтом */}
      <Heading as="h1" className="flowing-text" style={{
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: '4.5rem', // Уменьшено с 6rem
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
      ЦИТАДЕЛЬ ДУХА
      </Heading>

      <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '3rem', fontWeight: 300 }}>
      Где Божественное присутствие встречается с технологиями будущего. <br/>
      <span style={{ color: 'rgba(34,211,234,0.6)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.7rem' }}>
      Цифровая архитектура на фундаменте вечных истин
      </span>
      </p>

      {/* ПЛИТКА ЦИТАТЫ */}
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
      <div style={{
        position: 'relative',
        background: 'rgba(15, 1, 26, 0.8)',
          padding: '3rem',
          borderRadius: '2.5rem',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(15px)'
      }}>
      <p style={{ margin: 0, lineHeight: '1.4' }}>
      <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 200, color: '#94a3b8', marginBottom: '0.5rem' }}>
      «Искусственный Интеллект может дать ответы всему миру,
      </span>
      {/* Плавная смена цвета для Школы Христа */}
      <span className="flowing-text" style={{
        display: 'block',
        fontSize: '2.8rem', // Уменьшено с 4.5rem
        fontWeight: 800,
        padding: '0.5rem 0'
      }}>
      но только в Школе Христа
      </span>
      <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 200, color: '#94a3b8', marginTop: '0.5rem' }}>
      мы учимся правильно задавать вопросы».
      </span>
      </p>

      <footer style={{ marginTop: '2.5rem', opacity: 0.6 }}>
      <span style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.4em' }}>
      SUPREME APOSTLE OF WEBDEV
      </span>
      </footer>
      </div>
      </div>

      <Link
      className="button button--lg"
      style={{
        backgroundColor: 'transparent',
        color: '#22d3ee',
        border: '1px solid #22d3ee',
        fontWeight: 'bold',
        borderRadius: '50px',
        padding: '1rem 3rem',
        fontSize: '1rem',
        transition: 'all 0.3s ease'
      }}
      to="/blog">
      ПЕРЕЙТИ К ОТКРОВЕНИЯМ →
      </Link>
      </div>
      </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Главная" description="Цифровой архив мыслей">
    <HomepageHeader />
    <main style={{ backgroundColor: '#0f011a' }}>
    <div style={{ padding: '3rem 0', textAlign: 'center' }}>
    <div style={{
      display: 'inline-block',
      padding: '0.5rem 1.5rem',
      border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '50px',
          fontFamily: 'monospace',
          color: 'rgba(34,211,234,0.5)',
          textTransform: 'uppercase',
          letterSpacing: '0.5em',
          fontSize: '0.6rem',
    }}>
    Protocol: Digital Theology v.2026
    </div>
    </div>
    <HomepageFeatures />
    <section style={{ padding: '6rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
    <div className="container">
    <h2 style={{ fontFamily: 'serif', color: '#cbd5e1', fontStyle: 'italic', fontSize: '2.5rem' }}>Путь Исследования</h2>
    <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
    <Link to="/docs/intro" style={{ color: '#10b981', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ ДОКУМЕНТАЦИЯ ]</Link>
    <Link to="/blog" style={{ color: '#10b981', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ МЫСЛИ ]</Link>
    <Link to="https://geminicli.com" style={{ color: '#10b981', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ ПОМОЩЬ AI ]</Link>
    </div>
    </div>
    </section>
    </main>
    </Layout>
  );
}
