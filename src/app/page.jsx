export default function Home() {
  return (
    <div className="py-12 max-sm:pt-4 ">
      <h1 className="my-5 text-3xl">Eu Posso Programar</h1>
      <p className="text mt-8 text-lg leading-relaxed tracking-wide text-zinc-300/90 max-sm:text-base">
        Uma plataforma com diversos videos sobre JavaScript, HTML e até um pouco
        de CSS para auxiliar os alunos do IFAL - Campus Rio Largo na disciplina
        de Introdução à Programação. Todos os vídeos em ordem cronológica, por
        assunto e totalmente baseados nas aulas do professor Leonardo Bruno.
      </p>
      <p className="text my-10 text-lg leading-relaxed tracking-wide text-zinc-300/90 max-sm:text-base">
        <span className="text-xl text-white">JavaScript</span>{" "}
        <span className="px-1">→</span> Linguagem de programação que permite
        implementar itens complexos em páginas web — toda vez que uma página da
        web faz mais do que simplesmente mostrar a informação estática —
        mostrando conteúdo que se atualiza em um intervalo de tempo, mapas
        interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o
        JavaScript provavelmente está envolvido.
      </p>
      <p className="text my-10 text-lg leading-relaxed tracking-wide text-zinc-300/90 max-sm:text-base">
        <span className="text-xl text-white">HTML</span>{" "}
        <span className="px-1">→</span> (Linguagem de Marcação de HiperTexto) é
        o bloco de construção mais básico da web. É o código que você usa para
        estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode
        ser estruturado em parágrafos, em uma lista com marcadores ou usando
        imagens e tabelas.
      </p>
      <p className="text my-10 text-lg leading-relaxed tracking-wide text-zinc-300/90 max-sm:text-base">
        <span className="text-xl text-white">CSS</span>{" "}
        <span className="px-1">→</span>(Cascading Style Sheets ou Folhas de
        Estilo em Cascata) é uma linguagem de estilo usada para descrever a
        apresentação de um documento escrito em HTML, ou seja, é o código que
        você usa para dar estilo à sua página. Por exemplo, trocando cores,
        fontes, tamanhos e até ajustando sua página a diferentes tipos de
        dispositivos.
      </p>
    </div>
  );
}
