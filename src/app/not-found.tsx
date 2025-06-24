
import Link from 'next/link';

// This is a fallback not-found page.
// The middleware should redirect users to a localized path,
// so this page should ideally not be seen by users.
// It exists to satisfy Next.js's requirement for a root not-found page
// and must be a self-contained HTML document with minimal dependencies.
export default function NotFound() {
  const bodyStyle: React.CSSProperties = {
    fontFamily: 'sans-serif',
    color: '#1A2E44',
    backgroundColor: '#F0F2F5',
    margin: 0,
    padding: '2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const h1Style: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const pStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: '#4A5B6D',
    marginBottom: '2rem',
    maxWidth: '600px',
  };

  const linkStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 2rem',
    backgroundColor: '#2C5F9D',
    color: '#FAFAFA',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '500',
  };

  return (
    <html>
      <body style={bodyStyle}>
        <div>
          <h1 style={h1Style}>404 - Page Not Found</h1>
          <p style={pStyle}>
            Sorry, the page you are looking for does not exist or has been moved. 
            This might have happened because the URL was mistyped or the content has been removed.
          </p>
          <Link href="/" style={linkStyle}>
            Return to Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
