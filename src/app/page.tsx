import Image from 'next/image'

import LogoImg from '@/assets/logo.svg'

export default function Home() {
  return (
    // className="flex min-h-screen flex-col p-8"
    <>
      <header className="py-6 px-5 flex items-center justify-between max-w-[1064px] w-full my-0 mx-auto">
        <Image src={LogoImg} alt="Blog da Rocketseat" width={286 / 2} />
        <nav className="">
          <a
            href="https://github.com/hzimr"
            aria-label="Acessar o Github"
            className="text-[#8257e5]"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Github</title>
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 0 0 153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 0 1 2.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 0 1 2.2 60.8 90.3 90.3 0 0 1 23 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 0 0 480 261.7C480 134.9 379.7 32 256 32z"
                stroke="none"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main className="mb-10">
        <article className="my-0 mx-auto w-full max-w-[786px] py-6 px-5">
          <header>
            <h1 className="mb-5 text-2xl font-bold">
              Não Desenvolvendo uma web acessível
            </h1>
            <h2 className="mb-5 text-xl font-bold">
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
          </header>
          <p className="my-5 mx-0">
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p className="my-5 mx-0">
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>
          <h3 className="text-lg font-semibold">
            O que é acessibilidade, afinal?
          </h3>
        </article>
      </main>
      <footer className="py-6 px-5 flex items-center justify-between max-w-[1064px] w-full my-0 mx-auto">
        <nav aria-label="Rodapé">
          <a
            href="https://github.com/hzimr"
            aria-label="Acessar o Github"
            className="py-4 px-8 bg-[#202024] rounded-md text-[#99699f]"
          >
            Termos de uso
          </a>
        </nav>
      </footer>
    </>
  )
}
