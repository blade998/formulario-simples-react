import React, {useState} from "react"

const App = () => {
    
  const [name,setname] = useState('')
  const[sobrenome,setsobre] = useState('')
  const[idade,setidade] = useState('')


  if(idade == -1 ) {
    alert('Coloque um numero adequado')
  }


  const setvarials = (event:React.ChangeEvent<HTMLInputElement>)=> {
            setname(event.target.value)
           
  }
  const setvarials2 = (event:React.ChangeEvent<HTMLInputElement>)=> {
    setsobre(event.target.value)
   
}

const setvarials3= (event:React.ChangeEvent<HTMLInputElement>)=> {
  setidade(event.target.value)
 
}

  return (
    <div>
       Nome:
       <input  type='text' value={name} onChange={setvarials}/> 
       <br></br>
       sobrenome:
       <input  type='text' value={sobrenome} onChange={setvarials2}/>
       <br></br>
       idade:
       <input  type='number' value={idade}  onChange={setvarials3}/>
       <hr />
       <br></br>
       Olá {name} {sobrenome}, tudo bem?
        <br></br>
        voce tem {idade} anos.

    </div>
  )
}


export default App


