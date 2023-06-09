_out.println('<h1>Eventos</h1>')
const dbEventos = _db.query(`
SELECT
  evento.nome AS "evento_nome",
  evento.data AS "evento_data",
  evento.hora AS "evento_hora",
  categoria.nome AS "categoria_nome"
  FROM evento
    INNER JOIN categoria ON evento.categoria_id = categoria.id
    `)

for (const dbEvento of dbEventos) {
  dbEvento.getString('evento_nome')
  dbEvento.getString('evento_data')
  dbEvento.getString('evento_hora')
  dbEvento.getString('categoria_nome')
}


