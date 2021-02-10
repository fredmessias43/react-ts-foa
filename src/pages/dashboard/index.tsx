import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
// import Logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* <img src={Logo} alt="Github Explorer" /> */}
      <Title>Explorer Repositories in GitHub</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="https://github.com/">
          <img
            src="https://avatars.githubusercontent.com/u/39710268?s=460&v=4"
            alt="Frederico"
          />
          <div>
            <strong>Facebook/React</strong>
            <p>React is lixo vue is better</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="https://github.com/">
          <img
            src="https://avatars.githubusercontent.com/u/39710268?s=460&v=4"
            alt="Frederico"
          />
          <div>
            <strong>Facebook/React</strong>
            <p>React is lixo vue is better</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="https://github.com/">
          <img
            src="https://avatars.githubusercontent.com/u/39710268?s=460&v=4"
            alt="Frederico"
          />
          <div>
            <strong>Facebook/React</strong>
            <p>React is lixo vue is better</p>
          </div>
          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
