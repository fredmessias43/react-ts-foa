import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
// import Logo from '../../assets/logo.svg';

import api from '../../services/api';
import Repository from '../repository';
import repository from '../repository';

interface IRepository {
  fullName: string;
  description: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    const res = await api.get<IRepository>(`/repos/${newRepo}`);
    const repository = res.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      {/* <img src={Logo} alt="Github Explorer" /> */}
      <Title>Explorer Repositories in GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repo => (
          <a key={repo.fullName} href="https://github.com/">
            <img src={repo.owner.avatarUrl} alt={repo.owner.login} />
            <div>
              <strong>{repo.fullName}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size="20" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
