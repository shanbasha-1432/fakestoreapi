import { useState } from "react"

function Crud(){

    const [itemdata,setitemdata] = useState({name:"",discription:""})
    const [items,setitems] = useState([{name:"",discription:"",id:""}])

    // const [isedting,setediting] = useState(false)
    const [edititemid,setedititemid] = useState(null)

    const handlechange = (e) =>{
        const {name,value} = e.target

        setitemdata({...itemdata,[name]:value});
    }


    const handlesubmision = (e) =>
        setitems([...items,{...itemdata,id:Date.now()}])
        console.log(items)

    return(

        <div>
            <h1>Crud Operations</h1>
            
            <form onSubmit={handlesubmision}>

                <input type="text" name="name" placeholder="Name" onChange={handlechange} required />

                <input type="text" name="discription" placeholder="Discription" onChange={handlechange} required />

                {/* <button type="submit" >{isediting ? 'update' : 'add'}</button> */}

            </form>
            <div>
                <h2>Items</h2>

            </div>
        </div>
    )
}
export default Crud