import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepoParams {
  repo: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepoParams>();
  return (
    <>
      <h1> Repository</h1>
      <p>{params.repo}</p>
    </>
  );
};

export default Repository;
