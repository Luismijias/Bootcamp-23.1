
_db.delete('evento', _req.getString('uid'))

_out.json(
  { result: true }
)

