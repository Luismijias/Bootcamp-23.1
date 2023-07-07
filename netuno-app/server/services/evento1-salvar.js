const nome = _req.getString('nome')

_db.execute(`
  INSERT INTO evento1(nome,categoria_id) VALUES(?, 1)
  `,nome)

_out.println ('<h1>O evento ' + nome + 'foi salvo com sucesso!<h1')
