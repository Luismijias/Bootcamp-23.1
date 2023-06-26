const nome = _req.getString('nome')
const data = _req.getString('data')
const hora = _req.getString('hora')

_db.insert(
  'estado',
  _val.map()
    .set('nome', nome)
)

_out.json({
  resultado: true
})
