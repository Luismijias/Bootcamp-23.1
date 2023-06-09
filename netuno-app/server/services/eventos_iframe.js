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
   background-color: #ff6e00;
  }
  .tabela-eventos__estilo--samba {
   background-color: #777244;
  }
  .tabela-eventos__estilo--forro {
   background-color: #00e5ff;
  }
  .tabela-eventos__estilo--eletronica {
   background-color: #9e8686;
  }
  .tabela-eventos__estilo--rap {
   background-color: #63a045;
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
  else if (dbEvento.getString('categoria_nome') == 'Forró') {
    classesCSS = 'tabela-eventos__estilo--forro'
  }
  else if (dbEvento.getString('categoria_nome') == 'Eletrônica') {
    classesCSS = 'tabela-eventos__estilo--eletronica'
  }
  else if (dbEvento.getString('categoria_nome') == 'Rap') {
    classesCSS = 'tabela-eventos__estilo--rap'
  }
/*  else if (dbEvento.getString('evento_data') == "2024-07-22" ) {
    classesCSS = 'tabela-eventos__proximo-evento'
  } */
  
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
