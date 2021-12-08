import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CategoriaCard from './CategoriaCard';

const Categorias = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('https://app-asecol.herokuapp.com/api/categoria/listActive');
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
          <h1>Categorias</h1>
          <hr/>
      {loading && <div>Loading</div>}
      {!loading && (
            <div className="row row-cols-1  g-4">
            {
                data.map(item => {
                    return (
                        <CategoriaCard
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


export default Categorias
