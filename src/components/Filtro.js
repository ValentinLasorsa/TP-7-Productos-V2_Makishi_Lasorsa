

import { useContext } from "react";
import { CategoriaContext } from "../context/categoriaContext";

const Filtro = ({handleFilter, handleInput}) => {
    const {categorias} = useContext(CategoriaContext)
    return (
        <>
            <div className="container flex page-bar clearfix">
                <div className=" flex shop-settings mr-2">
                    <a id="list-anchor" className="active">
                    <i className="fas fa-th-list"></i>
                    </a>
                    <a id="grid-anchor">
                    <i className="fas fa-th"></i>
                    </a>
                </div>
                <div className="flex ampliar">
                    <form className="form-searchbox">
                        <label className="sr-only" >Search</label>
                        <input                             
                            type="text"
                            className="text-field"
                            id="search-landscape"
                            placeholder="Search products..."
                            onChange={handleInput}
                            autoComplete="off"
                        />
                    </form>
                </div>
                <div className="flex toolbar-sorter-2">
                    <div className="select-box-wrapper">
                    <label className="sr-only">Show Records Per Page</label>
                    <div className="toolbar-sorter">
                        <div className="select-box-wrapper">
                            <label className="sr-only" >Sort By</label>
                            <select className="select-box" id='Category' onChange={handleFilter}>
                                {categorias.map((prod, id)=>
                                    <option value={prod} key={id}>Category: {prod.charAt(0).toUpperCase() + prod.slice(1)}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    </div>
                </div>
            </div>           
        </>
    );
};

export default Filtro