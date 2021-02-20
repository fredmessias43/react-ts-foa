/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
// import Logo from '../../assets/logo.svg';

import api from '../../services/api';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const repoLC = localStorage.getItem('@GithubExplorer:repositories');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    if (!newRepo) {
      setError('Preencha algo');
      setNewRepo('');
      return;
    }
    try {
      const res = await api.get<IRepository>(`/repos/${newRepo}`);
      const repository = res.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setError('');
    } catch (err) {
      setError(`${err.response.status} - eRRO NA BUCA DO REPO`);
      setNewRepo('');
    }
  }

  return (
    <>
      {/* <img src={Logo} alt="Github Explorer" /> */}
      <Title>Explorer Repositories in GitHub</Title>
      <Form hasError={!!error} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {error && <Error>{error}</Error>}

      <Repositories>
        {repositories.map(repo => (
          <a key={repo.full_name} href="https://github.com/">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
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
