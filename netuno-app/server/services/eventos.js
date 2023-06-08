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
_out.println (`
<style>
  .tabela-eventos__estilo--funk {
   background-color: red;
  }
  .tabela-eventos__estilo--samba {
   background-color: yellow;
  }
</style>
`)
_out.println('<table class="tabela-eventos" border="1" cellspacing="3" cellpadding="5">')

_out.println('<thead>')
  _out.println (`
  <tr>
    <th>Evento</th>
    <th>Data</th>
    <th>Hora</th>
    <th>Estilo</th>
  </tr>
  `)
_out.println('</thead>')

_out.println('<tbody>')
for (const dbEvento of dbEventos) {
  let classesCSS = ''
  if (dbEvento.getString('categoria_nome') == 'Funk') {
    classesCSS = 'tabela-eventos__estilo--funk'
  }
  else if (dbEvento.getString('categoria_nome') == 'Samba') {
    classesCSS = 'tabela-eventos__estilo--samba'
  }
  
  _out.println (`
  <tr class="${classesCSS}">
    <td>${dbEvento.getString('evento_nome')}</td>
    <td>${dbEvento.getString('evento_data')}</td>
    <td>${dbEvento.getString('evento_hora')}</td>
    <td>${dbEvento.getString('categoria_nome')}</td>
  </tr>
`)}
_out.println('</tbody>')

_out.println('</table>')
