import Hello from '../../assets/gamer.png';
import Chart from '../charts';

import './Main.css';

const Main = () => {
    return(
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={Hello} alt='hello' />
                    <div className='main__greeting'>
                        <h1>Olá E3ND</h1>
                        <p>Bem vindo ao seu painel!</p>
                    </div>
                </div>

                <div className='main__cards'>
                    <div className='card'>
                        <i className='fa fa-file-text fa-2x text-lightblue'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>199</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-money fa-2x text-red'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Pagamentos</p>
                            <span className='font-bold text-title'>R$3.000</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-archive fa-2x text-yellow'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>66</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-bars fa-2x text-green'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Categorias</p>
                            <span className='font-bold text-title'>30</span>
                        </div>
                    </div>
                </div>

                <div className='charts'>
                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>São Paulo, SP, BR</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                        <center>
                            <Chart />
                        </center>
                    </div>

                    <div className='charts__right'>
                        <div className='charts__right__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>São Paulo, SP, BR</p>
                            </div>
                            <i className='fa fa-area-chart'></i>
                        </div>

                        <div className='charts__right__cards'>
                            <div className='card1'>
                                <h1>Lucro</h1>
                                <p>R$1.500,00</p>
                            </div>

                            <div className='card2'>
                                <h1>Pagamentos</h1>
                                <p>R$500,00</p>
                            </div>

                            <div className='card3'>
                                <h1>Custos de hospedagem</h1>
                                <p>R$1.200,00</p>
                            </div>

                            <div className='card4'>
                                <h1>Banco de dados</h1>
                                <p>R$190,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;