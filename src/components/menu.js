import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="card-deck">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Transfer History</h5>
                    <p className="card-text">Histórico de transferências da conta.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Credit Card</h5>
                    <p className="card-text">CRUD de cartão de crédito.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Contact's</h5>
                    <p className="card-text">CRUD de Contados e favoritos.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Actual Balance</h5>
                    <p className="card-text">Listar o saldo da conta. Funcionalidade: Transferência de dinheiro entre usuários</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        )
    }
}