export default function Panel (props){

        let{text} = props     
    
        return(
                 
                <div className="text-center">
                <textarea 
                 className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto panel"
                 value = {text}
                 disabled = {true}
                 />
                </div>       
              )
   
}