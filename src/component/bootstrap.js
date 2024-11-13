import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Shan(){
    
    const [arif,chiru] = useState([])
    const [shyam,anwar] = useState([])


    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const basha = async() =>{


    let response = await fetch('https://fakestoreapi.com/products/categories')

    let data = await response.json()

    chiru(data)

    console.log(data)
    }

    useEffect(() =>{
        basha()
    },[])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

        const filter = async(data) =>{

        let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
        let data2 = await response.json()

        anwar(data2)

        console.log(data2)


    }

    return(
        <div>
            <h1 className="text-center text-primary p-3 mb-2 bg-info text-dark" >Bootstrap Concepts</h1>
            <div class="p-3 mb-2 bg-info text-dark" style={{display:"flex", flexDirection:"row" ,gap:100,marginTop:"50px"}}>
            {
                arif.map((data) =>{
                    return(
                      <div >
                       <button onClick={() =>filter(data)} style={{border:"3px solid gray",borderRadius:"6px",marginLeft:"100px",backgroundColor:"aliceblue",}}>{data}</button>
                       </div>
                    )
                })
            
            }
            </div>

            <div style={{display:'grid',gridTemplateColumns:"350px 350px 350px "}}>
                {
                    shyam.map((data) =>{
                        return(
                            <Link to='/productdeatails' state={{id:data.id}}>
                            <div style={{marginTop:"50px",height:"370px",width:"300px",marginLeft:"150px",border:"3px solid gray",borderRadius:"5px", backgroundColor:"#fff",boxShadow:"0 3px 10px ",padding:"15px",cursor:"pointer" }}>
                                 <p className="text-danger" style={{fontSize:"24px"}}>{data.id}</p>
                                {/* <h1  className="text-primary text-center" style={{fontSize:"38px",fontWeight:"600"}}>{data.category}</h1> */}
                                <img src={data.image}  style={{width:"150px",height:"150px",marginTop:"10px",marginLeft:"60px"}}></img>
                                <p className="text-success text-center" style={{fontSize:"16px",fontWeight:400,marginTop:"10px"}}>{data.title }</p>
                                {/* <p className="text-success" style={{marginTop:"20px"}}>{data.description}</p> */}
                                <p className="text-info"  style={{fontSize:"24px",marginTop:"10px"}}>{data.price}</p>
                               
                            </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
        
    )
}
export default Shan 