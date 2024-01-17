import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu app Next.js</title>
        <meta name="description" content="Primeira pagina" />
      </Head>

      <h1> Olá Next.js</h1>
      <Menu />

      <h2>Bem Vindo ao Next.js</h2>
      <h3>Página Inicial</h3>
    </>
  );
}
