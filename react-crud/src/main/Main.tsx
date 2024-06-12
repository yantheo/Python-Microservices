import React, { useEffect, useState } from "react";
import { Product } from "../interfaces/product";

const Main = () => {
  const [products, setProducts] = useState([] as Product[])

  useEffect(
    () => {
      (async () => {
        const response = await fetch('http://localhost:8000/api/products')
        const data = await response.json()
        setProducts(data)
      })();
    }, [])
  
  const like = async (id:number) => {
    await fetch(`http://localhost:8001/api/products/${id}/like`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setProducts(products.map(
      (p: Product) => {
        if (p.id === id) {
          p.likes++;
        }
        return p;
      }
    ))
  }
  return <>
    <div className="container px-4 py-5" id="featured-3">
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {
          products.map(
            (p: Product) => {
              return (
                <div className="feature col" key={p.id}>
                  <div className="card mb-4">
                    <img src={p.image} alt="" height="180" />
                    <div className="card-body">
                      <p className="card-text">{p.title}</p>
                      <div className="d-flex justify-between align-items-center">
                        <div className="btn-group">
                          <button
                            onClick={() => like(p.id)}
                            className="btn btn-sm btn-outline-secondary" >
                            Like
                          </button>
                        </div>
                        <small className="text-muted">{p.likes} likes</small>
                      </div>

                    </div>
                  </div>
                </div>
              )
            }
          )
        }


      </div>
    </div>
  </>
}

export default Main;