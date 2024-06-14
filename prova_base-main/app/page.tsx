import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Portal de Receitas</h1>
      <Link href="/login">
        <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '16px'}}>Login</button>
      </Link>
    </div>
  );
}
