import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./style.css";

export function Structure() {
  const [meta] = useState(10000);
  const [value, setValue] = useState(0);
  const [rest, setRest] = useState(meta)
  const [canBuyProducts, setCanBuyProducts] = useState([]);
  const products = [
    { Product: "Geladeira Frost-free", Price: 2500 },
    { Product: "Fogão", Price: 800 },
    { Product: "Jogo de Panelas", Price: 300 },
    { Product: "Máquina de Lavar", Price: 1700 },
    { Product: "Guarda Roupas", Price: 1200 },
    { Product: "Armário de Cozinha", Price: 700 },
    { Product: "Mesa", Price: 650 },
    { Product: "Sofá", Price: 1300 },
  ];



  function handleCalculated(){

    if (value != null && !isNaN(value) && value > 0) {
    setRest(meta - value)
   }
   paintProducts()
   setValue(0);
  }


  function paintProducts() {
    let currentvalue =  value;
    const productsCanBuy = [];

    products.forEach((product) => {
      if(currentvalue >= product.Price)
        productsCanBuy.push(product.Product);
      currentvalue -= product.Price
    })

    setCanBuyProducts(productsCanBuy); 
  }
  
  return (
    <div className="page-enxoval">
      <section className="header-Products">
        <h1 className="title-right">Meta: R${meta}</h1>
        <h2 className="title-right">Falta: R${rest}</h2>
      </section>


      <div className="form">
        <text className="form-title">Qual valor que você tem?</text>
        <input
        className="form-value"
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        
        <button className="form-button" onClick={handleCalculated}>Calcular</button>
        <button className="form-button" onClick={() => {setRest(meta); setCanBuyProducts([])}}>Reiniciar</button>
      </div>


      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Produto</strong></TableCell>
              <TableCell align="right"><strong>Preço (R$)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.Product}</TableCell>
                <TableCell align="right">R$: {product.Price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="buy-products">
      <h3>Produtos que pode comprar:</h3>
      <ul className="product-list">
        {canBuyProducts.map((product, index) => (
          <li key={index} className="product-item">
            {product}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
