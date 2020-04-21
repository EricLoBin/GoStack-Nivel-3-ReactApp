import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface repositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<repositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronsLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/54367134?v=4" alt="Avater"/>
                    <div>
                        <strong>EricLoBin</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Ftars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertos</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>

                    <Link to={`issue`}>
                        <div>
                            <strong>jrhbrhrh</strong>
                            <p>ghyhgdyidydy</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>

            </Issues>
        </>
    );
};

export default Repository;
