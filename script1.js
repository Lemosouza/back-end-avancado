fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os usuários');
    }
    return response.json();
  })
  .then(data => {
    const userList = document.getElementById('user-list');
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log(error);
    const userList = document.getElementById('user-list');
    const errorItem = document.createElement('li');
    errorItem.textContent = 'Erro ao carregar os usuários';
    userList.appendChild(errorItem);
  });


  //Usamos fetch para fazer uma requisição HTTP GET para a URL especificada
  //Após a requisição, utilizamos o método .then para tratar a resposta da requisição
  //verificamos se a resposta foi bem-sucedida usando response.ok
  //se tiver algum erro chamamos o método .json() para converter a resposta em um objeto JSON
  //Criamos uma variável userList que armazena a referência ao elemento <ul> com o id "user-list" no HTML
  //percorremos cada objeto de usuário (data.forEach(user => { ... }))
  // para cada usuário, criamos um novo elemento <li> com document.createElement('li')
  //definimos o texto desse elemento <li> utilizando a propriedade textContent, que é a concatenação do nome e do email do usuário
  //adicionamos o elemento <li> criado como filho (appendChild) do elemento <ul> (armazenado em userList)
  //caso ocorra algum erro durante a requisição ou processamento dos dados, utilizamos o método .catch para capturá-lo
  //O parâmetro error é a exceção capturada
  //exibimos o erro no console com console.log(error)
  //buscamos o elemento <ul> com o id "user-list" 
  //adicionamos um elemento <li> com a mensagem 'Erro ao carregar os usuários' como filho desse elemento
  