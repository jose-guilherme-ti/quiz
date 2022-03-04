import { embaralhar, embaralharSimples } from "../../../functions/arrays";
import questoes from "../bancoDeQuestoes";

export default (req, res) => {

  const ids = questoes.map(questao => questao.id)
  //res.status(200).json(embaralhar(ids));
  res.status(200).json(embaralharSimples(ids));
}