import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Productpage(){

    const location = useLocation()
    const{id} = location.state || null

    const [product,getready] = useState([])

    const single = async()=>{
        
        if(id){
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)

            let data = await response.json()

            console.log(data)
             getready(data)
        }
    }

    useEffect(()=>{
        single()
    },[])

    return(
        <div >
            <h1 className="text-center" style={{fontFamily:"fantasy",fontSize:"36px",fontWeight:"500"}}>Product page</h1>
            <div className="text-center" style={{width:"100%",maxWidth:"400px",height:"500px",marginLeft:"400px",border:"2px solid silver",borderRadius:"8px",boxShadow:"1px 1px 3px 3px"}}>
            <h1 className="text-center text-info" style={{fontSize:"32px",fontWeight:"400"}}>{product.category}</h1>
            <p class="text-danger">{product.id}</p>
            <img src={product.image} style={{width:"150px",height:"150px",}}></img>
            <p >{product.tittle}</p>
            <p lass="text-primary">{product.description}</p>
            </div>
        </div>
    )
}
export default Productpage