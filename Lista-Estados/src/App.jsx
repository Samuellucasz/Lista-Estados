import { useEffect, useState } from 'react'
import Estado from './components/Estado'
import './App.css'

function App() {
	const [estados, setEstados] = useState([])

	useEffect(() => {
		fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then((resposta) => resposta.json())
			.then((dados) => setEstados(dados))
	}, [])

	return (
		<div className="container">
			<h1>Lista de Estados</h1>

			<div className="grade">
				{estados.map((estado) => (
					<Estado
						key={estado.id}
						nome={estado.nome}
						sigla={estado.sigla}
						regiao={estado.regiao.nome}
					/>
				))}
			</div>
		</div>
	)
}

export default App
