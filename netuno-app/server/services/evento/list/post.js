const nome = _req.getValues('filtro', _val.map()).getString('nome')
const numeroPagina = _req.getValues('pagina', _val.map()).getInt('numero', 1)

const PAGE_SIZE = 2 
const SELECT = 'uid, nome, data, hora, folheto'
const QUERY_PAGE = `LIMIT ${PAGE_SIZE} OFFSET ${numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina - 1)}`
const QUERY_ORDER = ' ORDER BY nome'

let dbEventos = null

if (nome != '') {
dbEventos = _db.query(`
SELECT ${SELECT} FROM evento
WHERE lower(nome) LIKE lower(?) 
${QUERY_ORDER}
${QUERY_PAGE}
`,`%${nome}%`)
} else {
  dbEventos = _db.query('SELECT '+ SELECT +' FROM evento ' + QUERY_ORDER + ' ' + QUERY_PAGE)
  }

_out.json(
  dbEventos
)
