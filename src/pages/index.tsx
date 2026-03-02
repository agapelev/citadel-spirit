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
      padding: '8rem 0',
      background: 'var(--ifm-hero-background)',
          overflow: 'hidden',
          borderBottom: '2px solid rgba(168, 85, 247, 0.4)'
    }}>

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
      <Heading as="h1" className="flowing-text" style={{
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: '4.5rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
      ЦИТАДЕЛЬ ДУХА
      </Heading>

      <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '3rem', fontWeight: 300 }}>
      Где Божественное присутствие встречается с технологиями будущего. <br/>
      {/* Сделал посветлее, ближе к золотистому оранжу */}
      <span style={{ color: '#fbbf24', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.75rem', textShadow: '0 0 15px rgba(251,191,36,0.3)' }}>
      Цифровая архитектура на фундаменте вечных истин
      </span>
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
      <div style={{
        position: 'relative',
        background: 'rgba(15, 1, 26, 0.85)',
          padding: '3rem',
          borderRadius: '2.5rem',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(15px)'
      }}>
      <p style={{ margin: 0, lineHeight: '1.4' }}>
      <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 200, color: '#e2e8f0', marginBottom: '0.5rem' }}>
      «Искусственный Интеллект может дать ответы всему миру,
      </span>
      <span className="flowing-text" style={{
        display: 'block',
        fontSize: '2.8rem',
        fontWeight: 800,
        padding: '0.5rem 0'
      }}>
      но только в Школе Христа
      </span>
      <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 200, color: '#e2e8f0', marginTop: '0.5rem' }}>
      мы учимся правильно задавать вопросы».
      </span>
      </p>

      <footer style={{ marginTop: '2.5rem' }}>
      {/* Выделил титул ярким янтарным цветом */}
      <span style={{ color: '#f59e0b', fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.4em', fontWeight: 'bold' }}>
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
    {/* Сделал протокол светлее (лазурный) и четче */}
    <div style={{
      display: 'inline-block',
      padding: '0.6rem 2rem',
      border: '1px solid rgba(34,211,234,0.4)',
          borderRadius: '50px',
          fontFamily: 'monospace',
          color: '#67e8f9',
          textTransform: 'uppercase',
          letterSpacing: '0.5em',
          fontSize: '0.7rem',
          background: 'rgba(21, 0, 34, 0.6)',
          boxShadow: '0 0 15px rgba(34,211,234,0.1)'
    }}>
    Protocol: Digital Theology v.2026
    </div>
    </div>
    <HomepageFeatures />
    <section style={{ padding: '6rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
    <div className="container">
    <h2 style={{ fontFamily: 'serif', color: '#f1f5f9', fontStyle: 'italic', fontSize: '2.5rem' }}>Путь Исследования</h2>
    <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
    <Link to="/docs/intro" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ ДОКУМЕНТАЦИЯ ]</Link>
    <Link to="/blog" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ МЫСЛИ ]</Link>
    <Link to="https://geminicli.com" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ ПОМОЩЬ AI ]</Link>
    <Link to="https://copilot.microsoft.com/discover" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ Copilot ]</Link>
    <Link to="https://claude.ai/new" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ Cloude ]</Link>
    <Link to="https://chat.mistral.ai/chat" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ Mistral ]</Link>
    <Link to="https://chat.qwen.ai" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ Qwen ]</Link>
    <Link to="https://chat.deepseek.com/a/chat/" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ DeepSeek ]</Link>
    <Link to="https://ai.dessyatykh.workers.dev" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ AI ]</Link>
    <Link to="https://ai-lev.versel.app" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ AI Verceel ]</Link>
    <Link to="https://ai-shekinah.netlify.app" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ AI Netlify ]</Link>
    <Link to="http://127.0.0.1:3080/notes/" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ Open WebUI ]</Link>
    <Link to="https://journal-webarystan.vercel.app/" style={{ color: '#34d399', fontFamily: 'monospace', textDecoration: 'none', fontSize: '0.8rem' }}>[ ЖУРНАЛЫ ]</Link>
    </div>
    </div>
    </section>
    </main>
    </Layout>
  );
}
