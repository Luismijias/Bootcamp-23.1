const dbEvento = _db.get('evento', _req.getString('uid'))

if (!dbEvento) {
  _header.status(404)
  _exec.stop()
}

_db.update(
  'evento',
  dbEvento.getInt('id'),
  _val.map()
  .set("nome", _req.getString('nome'))
  .set("data", _req.getString('data'))
  .set("hora", _req.getString('hora'))
)

