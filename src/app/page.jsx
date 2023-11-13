export default function Home() {
  return (
    <div className="text 2xl pt-12">
      <h1 className="my-5 text-3xl">Eu Posso Programar</h1>
      <p className="text text-lg text-zinc-300/90 leading-relaxed tracking-wide">
        Uma plataforma com diversos videos sobre JavaScript, HTML e até um pouco
        de CSS para auxiliar os alunos do IFAL - Campus Rio Largo na disciplina
        de Introdução à Programação. Todos os vídeos em ordem cronológica, por assunto e totalmente baseados nas aulas do professor Leonardo Bruno.
      </p>
      <p className="text text-lg text-zinc-300/90 leading-relaxed tracking-wide my-10">
        <a className="text-white text-xl" href="">JavaScript</a> <span className="px-1">→</span> Linguagem de programação que permite implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido.
      </p>
      <p className="text text-lg text-zinc-300/90 leading-relaxed tracking-wide my-10">
        <a className="text-white text-xl" href="">HTML</a> <span className="px-1">→</span> (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. É o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.
      </p>
      <p className="text text-lg text-zinc-300/90 leading-relaxed tracking-wide my-10">
        <a className="text-white text-xl" href="">CSS</a> <span className="px-1">→</span>(Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML, ou seja, é o código que você usa para dar estilo à sua página. Por exemplo, trocando cores, fontes, tamanhos e até ajustando sua página a diferentes tipos de dispositivos.
      </p>
    </div>
  );
}
