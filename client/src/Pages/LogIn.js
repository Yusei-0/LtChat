import {Link} from 'react-router-dom'
import {useState} from 'react'

function LogIn() {

    let [name, setName] = useState("")

    const handleChange = e =>{
        setName(e.target.value)
        console.log(e.target.value)    
    }

    return(
        <div className="row text-center">
            <h2>Introduce tu nombre de usuario</h2>
            <div className="col-4 mx-auto">
                <input type="text" name="name" onChange={handleChange}
                       className="form-control"/>
                <Link className="m-2"
                to={{
                    pathname : "/chat",
                    data : {
                        name : name
                    }
                }} >
                   <button className="btn btn-primary">
                    Entrar
                   </button>
                   </Link>

                
            </div>
        </div>
    );
}

export default LogIn