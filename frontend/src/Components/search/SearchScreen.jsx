import React,{useEffect,  useState} from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'; 
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
// import { getHeroesByName } from '../../selectors/getHeroesByName';
import ProductoList from '../productos/ProductoList';
import axios from 'axios';

const SearchScreen = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText : q
    });

    const { searchText } = formValues;
    useEffect(() => {
        const url = `https://app-asecol.herokuapp.com/api/producto/list?valor=${searchText}`;
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(`https://app-asecol.herokuapp.com/api/producto/list?valor=${searchText}`);
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        console.log(url)
        fetchData();
    }, [searchText]);
    // const hero =  useMemo(() => getHeroById(heroId), [heroId]);
    if (!data) {
        return <Navigate to='/' />
    };
    

    


    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    // const heroes = useMemo(() => getHeroesByName(q), [q]);


    return (
        <div>
            <h1>Buscador de productos</h1>
            <hr/>
            <div className="row">
                <div className="col-5">

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text" 
                            placeholder="Ingrese un producto a buscar"
                            className="form-control"
                            name="searchText"
                            onChange={ handleInputChange }
                            value={ searchText }
                            autoComplete="off"
                        />

                        <button 
                            className="btn btn-primary" 
                            type="submit">Buscar</button>
                    </form>
                </div>
                {loading && <div>Loading</div>}
                    {!loading && (
                         <div className="col-7 ">
                        <h3>Resultados</h3>
                        {
                            data.map(item =>(
                                <ProductoList 
                                key={item._id} 
                                {...item }
                                />
                            ))
                        }
                    </div>
                    )}
            </div>
        </div>
    )
}

export default SearchScreen
