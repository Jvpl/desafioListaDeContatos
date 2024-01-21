const agenda = {
    contatos: [],
    adicionarContato(pessoa) {
       for(let i = 0; i < this.contatos.length; i++){
          if(pessoa.nome === this.contatos[i].nome || pessoa.telefone === this.contatos[i].telefone){
             console.log(`Este contato já existe`);
             return;
          }}
          this.contatos.push(pessoa);
          console.log(`Contato adicionado com sucesso! ${pessoa.nome}`);
          return this.contatos;
    },
    listarContatos: function () {
       if(this.contatos.length <= 0){
          return console.log('Nenhum contato encontrado!');
       }
       this.contatos.forEach((contato, index) => {
          console.log(`${index + 1} - Nome: ${contato.nome} Telefone: ${contato.telefone}`)
       })
    },
    pesquisarContato: function (nome) {
       const contatoEncontrado = (this.contatos.find(contato => contato.nome.toUpperCase() === nome.toUpperCase()));
       if (contatoEncontrado) {
          return console.log(contatoEncontrado);
       } else {
          return console.log(`O contato não foi encontrado`);
       }
    },
    editarContato: function (index, newName, newPhone) {
       if(index > 0 && index <= this.contatos.length){
             this.contatos[index - 1].nome = newName;
             this.contatos[index - 1].telefone = newPhone;
             return console.log(`Contato editado com sucesso!`);
       }else{
          console.log('Contato não existente');
       }
       
    },
 
 }
 
 // const pessoa1 = { nome: 'Caio', telefone: 38228078 };
 // const pessoa2 = { nome: 'Ana', telefone: 32546787 };
 // const pessoa3 = { nome: 'Maria', telefone: 25346737 };
 // const pessoa4 = { nome: 'José', telefone: 35764673 };
 // const pessoa5 = { nome: 'José', telefone: 35764673 };
 // agenda.adicionarContato(pessoa1);
 // agenda.adicionarContato(pessoa2);
 // agenda.adicionarContato(pessoa3);
 // agenda.adicionarContato(pessoa4);
 // agenda.adicionarContato(pessoa5);
 
 
 // agenda.pesquisarContato('maria');
 //agenda.editarContato(1, 'Carlos', 2453567);
 //agenda.listarContatos();
 