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

_out.json({
  resultado: true
})
