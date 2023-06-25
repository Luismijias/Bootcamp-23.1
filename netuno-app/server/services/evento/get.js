const uid = _req.getString('uid')

//const dbEvento = _db.queryFirst(`SELECT uid, nome, data, hora, folheto FROM evento WHERE uid = ?::uuid`, uid)

const dbEvento = _db.get('evento',uid)

if (!dbEvento) {
  _header.status(404)
  _exec.stop()
}

_out.json(
  _val.map()
  .set('uid', dbEvento.getString('uid'))
  .set('nome', dbEvento.getString('nome'))
  .set('data', dbEvento.getString('data'))
  .set('hora', dbEvento.getString('hora'))
  .set('folheto', dbEvento.getString('folheto'))
)
