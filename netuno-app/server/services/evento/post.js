
const dbEvento = _db.get('evento', _req.getString('uid'))

if (!dbEvento) {
  _header.status(404)
  _out.json(
    _val.map()
      .set('erro', true)
      .set('mensagem', 'registro-nao-encontrado')
  )
  _exec.stop()
}

const nome = _req.getString('nome')

const data = _req.getString('data')
const hora = _req.getString('hora')

_db.insert(
  'evento',
  _val.map()
    .set('nome', nome)
    .set('data', data)
    .set('hora', hora)
)

_out.json(
  _val.map()
  .set("resultado", true)
)
