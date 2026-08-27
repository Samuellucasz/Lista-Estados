import './Estado.css'

function Estado({ nome, sigla, regiao }) {
  return (
    <article className="estado">
      <span className="estado__sigla">{sigla}</span>
      <h2>{nome}</h2>
      <p>Região: {regiao}</p>
    </article>
  )
}

export default Estado