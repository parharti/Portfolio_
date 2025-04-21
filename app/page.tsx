import SolarSystemWrapper from './components/SolarSystemWrapper';

export default function HomePage() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>
        Hello, I &apos;m <span style={{ color: '#66fcf1' }}>Prisha Sharma</span> 👋
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
        Computer Engineer | ISRO Intern | Open Source Contributor <br />
        Engineering Ideas, Empowering Space 🌌
      </p>
      <div style={{ marginTop: '3rem' }}>
        <SolarSystemWrapper />
      </div>
    </section>
  );
}
