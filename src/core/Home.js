// useState: permite controlar propiedades que en el contexto del componente,
// su valor va a cambiar.

// useEffect: Gestiona el ciclo de vida de mi componente:
//cuando se monta, cuando se actualiza, cuando se desmonta. 

import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
    // hooks: [ propiedad como tal, la propiedad que refleja 
    // un cambio de su estado]
    // useState: es el estado inicial de mi elemento del arreglo,
    //ej: productsBySell

    const [ productsBySell, setProductsBySell ] = useState([]);
    const [ productsByArrival, setProductsByArrival ] = useState([]);
    const [ error, setError ] = useState(false);

    // functions that contain the component structure

    const loadProductsBySell = () => {
        getProducts("sold").then( data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts("createdAt").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect( () => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout 
            title="Home Page"
            description="Node, React E-commerce app"
            className="container-fluid"
        >
            <Search/>
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product,i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

        </Layout>
    );


};

export default Home;