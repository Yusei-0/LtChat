export default function Messages (props)
{
    const {onSubmit, onChange} = props

    return(
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto p-2">
            <form className="row" onSubmit = {onSubmit}>
                <div className="col-8">
                    <input type="text" className="form-control" 
                    autoFocus onChange = {onChange} id="input-mess"/>
                </div>
                <div className="col-4">
                <button type="submit" className="btn btn-success">
                    Enviar
                </button>
                </div>
          </form>
        </div>
        )
}