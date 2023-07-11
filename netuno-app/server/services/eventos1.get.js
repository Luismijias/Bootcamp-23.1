//_exec.sleep(2000)

const dbEventos1 = _db.query(`

SELECT
  evento1.nome AS "evento_nome",
  evento1.data AS "evento_data",
  evento1.hora AS "evento_hora",
  evento1.categoria AS "categoria_nome"
  FROM evento1
    `)

const eventos1 = _val.list()

for (const dbEvento of dbEventos1) {
 eventos1.add(
   _val.map()
   .set('evento',dbEvento.getString('evento_nome'))
   .set('data',dbEvento.getString('evento_data'))
   .set('hora',dbEvento.getString('evento_hora'))
   .set('categoria',dbEvento.getString('categoria_nome'))
 )
}

_out.json (eventos1)
