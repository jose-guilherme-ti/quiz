import { useRouter } from 'next/router'
import styles from '../styles/Resultado.module.css'
import Estatitisca from '../components/Estatistica'
import Botao from '../components/Botao'

export default function resultado() {
  const router = useRouter();
  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)
  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{display: 'flex'}}>
        <Estatitisca texto="Perguntas" valor={total} />
        <Estatitisca texto="Certas" valor={certas} corFundo="#9CD2A4"/>
        <Estatitisca texto="Percentual" valor={`${percentual}%`}  corFundo="#DE6A33"/>

      </div>
      <Botao href="/" texto="Tentar Novamente"/>
    </div>
  )
}