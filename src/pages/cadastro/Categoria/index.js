import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState(['Teste']);
  const [valores, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...valores,
      [chave]: valor
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            valores
          ]);
          
          setValues(valoresInicias)
        }}>
      <div>

        {/*
        <label>
          Nome da Categoria:
          <input
            type="text"
            name="nome"
            value={valores.nome}
            onChange={handleChange}
          />
        </label>
        */}


        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />
        
        {/*
        <label>
          Descrição:
          <textarea
            type="text"
            value={valores.descricao}
            onChange={handleChange}
          />
        </label>
        */}

        <FormField 
          label="Descrição"
          type="text"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        {/*
        <label>
          Cor:
          <input
            type="color"
            value={valores.cor}
            onChange={handleChange}
          />
        </label>
        */}

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;