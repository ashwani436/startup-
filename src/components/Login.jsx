import React,{useState} from 'react';
import '../components/Styles.css';

const Login = () => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

    const[allEntry,setAllEntry]=useState([]);

  const submitForm=(e)=>{
      e.preventDefault();
      
      const newEntry={id:new Date().getTime().toString(),email:email,password:password};

      if(email && password){
      setAllEntry([...allEntry,newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
  }else{
   alert("plz fill the data");
  }
}

  


  return (
    <div>
      <div className="container_1">
         <form  action="" onSubmit={submitForm} >
           <div className="col-25">
           <label className="Lmail">Email:</label>
           </div>
           <div className="col-75">
           <input type="text"
           name="email"
         
           value={email}
           onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="col-25">
        <label>Password:</label>
        </div>
        
        <div class="col-75">
           <input type="password"
           name="password"
           autoComplete="off"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}/>
        
        </div>

        <button  className="btn login mt-2" type="submit">Login</button>
           </form> 
     </div>

           {allEntry.map((curElem)=>{
             const{id,email,password}=curElem;
             return (
               <div className="showDataStyle" key={curElem.id}>
                  <p>{curElem.email}</p><br/>
                  <p>{curElem.password}</p>
               </div>
             )
           })
           }
    </div>
  )
}
export default Login;