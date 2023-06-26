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

_db.delete('evento', _req.getString('uid'))

_out.json(
  { result: true }
)

_out.json(
  _val.map()
  .set("resultado", true)
)

