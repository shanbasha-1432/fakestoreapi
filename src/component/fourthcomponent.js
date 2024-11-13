import { useEffect, useState } from "react"


function Fourthcomponent(){

    const [data,setdata] = useState("firstname")
    const [cards,setcards] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

    },[])

    const handleapi = async() =>{

        let response = await fetch('https://fakestoreapi.com/products')  

        let finaldata = await response.json()

        setcards(finaldata)

        console.log('my logic')

        console.log(finaldata)
    }

    useEffect(() =>{
        handleapi() 
    },[])

    return(
        <div>
            <h1 className="text-primary text-center">Shopping</h1>

            <button onClick={() =>setdata("secondname")}>{data}</button>
            <div style={{display:"grid",gridTemplateColumns:"300px 300px 300px ",gap:100,marginTop:"50px",marginLeft:"50px"}} >
            
            {
                cards.map((data) =>{
                    return(
                        
                        <div class="shadow-lg p-2 mb-3">
                            <h1 className="text-primary text-center" style={{fontSize:"38px",fontWeight:"600"}}>{data.category}</h1>     
                            <p className="text-success" style={{fontSize:"16px",fontWeight:400,marginTop:"20px"}}>{data.description}</p>           
                            <p className="text-danger" style={{fontSize:"24px"}}>{data.id}</p>
                            <img src={data.image} style={{width:"150px",height:"150px",marginLeft:"70px"}}></img>
                            <p className="text-info"  style={{fontSize:"24px",marginTop:"20px"}}>{data.price}</p>
                        </div>
                        

                    )
                })
                
            }
            </div>
            

        </div>
    )
}
export default Fourthcomponent