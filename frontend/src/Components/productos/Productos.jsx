import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductoList from './ProductoList';

const Productos = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('https://app-asecol.herokuapp.com/api/producto/listActive');
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Productos</h1>
        <hr/>
        {loading && <div>Loading</div>}
        {!loading && (
            <div className="row row-cols-1  g-4">
            {
                data.map(item => {
                    return (
                        <ProductoList
                            key={item._id}
                            {...item}
                        />
                    )
                })
            }
            </div>
      )}
      </div>
    )
  }


export default Productos
