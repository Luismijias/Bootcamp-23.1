const dbEventos = _db.query(`
SELECT
  evento.nome AS "evento_nome",
  evento.data AS "evento_data",
  evento.hora AS "evento_hora",
  categoria.nome AS "categoria_nome"
  FROM evento
    INNER JOIN categoria ON evento.categoria_id = categoria.id
    `)

const eventos = _val.list()

for (const dbEvento of dbEventos) {
 eventos.add(
   _val.map()
   .set('evento',dbEvento.getString('evento_nome'))
   .set('data',dbEvento.getString('evento_data'))
   .set('hora',dbEvento.getString('evento_hora'))
   .set('categoria',dbEvento.getString('categoria_nome'))
 )
}

_out.json (eventos)
