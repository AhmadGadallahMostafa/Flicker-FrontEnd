import React,{useEffect,useState} from 'react'
import axios from "axios"
import Gallery from "./Gallery"
import Input from "../SearchPhoto/Input"
import Loader from "./Loader"
import Color from '../SearchPhoto/Color'
import Jump from "./Jump"
import NavBar from "./NavBar"
import Pagination from "@material-ui/lab/Pagination"
import ZoomOut from "./ZoomOut"

const List = () => {
    const [images,setImages] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [search , setSearch] = useState('');
    const [color, setColor] = useState('');
    const [page, setNewPage] = useState();
    const [zoom, setZoom] =useState(null);
    const fetchData = async (input,colorIn,pageNo) => {
        setLoading(true);
        const res = await axios.get(`https://api.unsplash.com/search/photos?page=${pageNo}&color=${!colorIn ? 'blue' : colorIn}&query=${!input ? 'beach' : input}&client_id=5LJhcXNOXBnO-XaSPP737TkCsajkgFZUxjtYqrMMT1Q&per_page=20`)
        const data = await res.data;
        setImages(data);
        setLoading(false);
    };
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    const handleChange1 = (e) =>{
        setColor(e.target.value)
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        fetchData(search,color);
    }
    const changePage = (e,newValue) =>{
       setNewPage(newValue);
       fetchData(search,color,page)
    }
    useEffect( () => {
        fetchData();
    },[]);
    if(loading) return <Loader/>
    return (
        <div className="bg-main">
        <NavBar/>
        <Jump/>
        <Color change={handleChange1}/>
        <Input change={handleChange} submit={handleSubmit}/>
        <div className="pag"><Pagination count={5} color="secondary" onChange={changePage} page={page}/></div>
        <Gallery images={images.results} setZoom={setZoom}/>
        { zoom && <ZoomOut zoom={zoom} setZoom={setZoom}/>}
        <div className="pag"><Pagination count={5} color="primary"  onChange={changePage} page={page}/></div>
        </div>
    )
}

export default List
