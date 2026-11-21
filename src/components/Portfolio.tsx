const projetos = [
  {
    titulo: 'Loja Online',
    descricao: 'E-commerce responsivo com carrinho, pagamentos e painel de administração.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    titulo: 'App de Tarefas',
    descricao: 'Gestor de tarefas com arrastar e soltar, filtros e modo escuro.',
    tags: ['React', 'CSS', 'LocalStorage'],
  },
  {
    titulo: 'Dashboard Financeiro',
    descricao: 'Visualização de despesas e receitas com gráficos interativos.',
    tags: ['React', 'Charts', 'API REST'],
  },
]

const habilidades = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Git', 'Figma']

function Portfolio() {
  const ano = new Date().getFullYear()

  return (
    <div className="pf">
      <header className="pf-nav">
        <a href="#inicio" className="pf-logo">Helton<span>.</span></a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="pf-hero">
          <p className="pf-eyebrow">Olá, eu sou</p>
          <h1>Helton Pambo</h1>
          <h2>Desenvolvedor Front-end</h2>
          <p className="pf-lead">
            Crio interfaces simples, rápidas e bonitas com React e TypeScript.
            Gosto de transformar ideias em produtos que as pessoas gostam de usar.
          </p>
          <div className="pf-actions">
            <a href="#projetos" className="pf-btn pf-btn-primary">Ver projetos</a>
            <a href="#contato" className="pf-btn">Fale comigo</a>
          </div>
        </section>

        <section id="sobre" className="pf-section">
          <h3 className="pf-title">Sobre mim</h3>
          <div className="pf-about">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e design. Trabalho
              principalmente com o ecossistema JavaScript, sempre com foco em
              código limpo, acessibilidade e boa experiência de utilizador.
            </p>
            <ul className="pf-skills">
              {habilidades.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projetos" className="pf-section">
          <h3 className="pf-title">Projetos</h3>
          <div className="pf-grid">
            {projetos.map((p) => (
              <article key={p.titulo} className="pf-card">
                <h4>{p.titulo}</h4>
                <p>{p.descricao}</p>
                <div className="pf-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href="#" className="pf-link">Ver projeto →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="pf-section pf-contact">
          <h3 className="pf-title">Vamos conversar?</h3>
          <p>Estou disponível para novos projetos e oportunidades.</p>
          <a href="mailto:seuemail@exemplo.com" className="pf-btn pf-btn-primary">
            Enviar e-mail
          </a>
          <div className="pf-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="pf-footer">© {ano} Helton Pambo. Feito com React.</footer>
    </div>
  )
}

export default Portfolio
