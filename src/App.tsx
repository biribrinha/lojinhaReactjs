import React from "react";
import logo from "./img/logo.png";
import carrinho from "./img/carrinho.png";
import "./App.css";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

type Repository = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
};

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(
      "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
    )
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.products);
        console.log(data.products);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <div className="btnCarrinho">
          <img src={carrinho} alt="carrinho de compras" />
          <span>0</span>
        </div>
      </header>

      <main>

        <div className="container">
        <div className="feed">
          {repositories.map((repo) => {
            return (
              <div className="card">
                <div className="imageCard">
                  <img src={repo.photo} />
                </div>
                <div className="headerCard">
                  <h1>{repo.name}</h1>
                  <div className="boxPrice">
                    <p>R${repo.price}</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>{repo.description}</p>
                </div>
                <div className="footerCard">
                  <a href="">Comprar</a>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </main>

      <footer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
