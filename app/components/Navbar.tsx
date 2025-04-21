'use client'


export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: 'linear-gradient(45deg, #0b0c1f, #1f2833)', // Space-like gradient
      color: '#66fcf1',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)', // Soft glow around the navbar
      fontFamily: `'Orbitron', sans-serif`, // Futuristic font
    }}>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#66fcf1',
        textShadow: '0 0 15px rgba(102, 252, 241, 0.7)', // Glowing text effect
      }}>
AstroDreama       </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/Projects">Projects</NavLink>
        <NavLink href="/Research">Research</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

// Space-themed link styles with hover effects
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a
      href={href}
      style={{
        textDecoration: 'none',
        color: '#66fcf1',
        fontSize: '1.2rem',
        position: 'relative',
        transition: 'color 0.3s ease, text-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#f39c12';
        e.currentTarget.style.textShadow = '0 0 20px rgba(243, 156, 18, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#66fcf1';
        e.currentTarget.style.textShadow = '';
      }}
    >
      {children}
    </a>
  );
}
