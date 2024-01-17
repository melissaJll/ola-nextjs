import Menu from "@/components/Menu";
import Head from "next/head";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços</title>
        <meta name="description" content="Primeira pagina" />
      </Head>
      <h1> Olá Next.js</h1>
      <Menu />

      <h2>Serviços</h2>
      <ol>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ol>
    </>
  );
}
