import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        {/* nomes dos arquivos */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/equipe">Serviços</Link>
        </li>
        <li>
          <Link href="/servicos">Equipe</Link>
        </li>
      </ul>
    </nav>
  );
}
