import Checkbox from '@mui/material/Checkbox';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('')
  const [message, setMessage] = useState('');
  const [LastName, SetLastName] = useState('');
  const [dob, setdob] = useState('');
  const [check,setCheck] = useState(false)
  

  const handleName = (e) => {
    setName(e.target.value);
  };


  const EmailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
    if (regEx.test(email)) {
      const validemail = setMessage("Email is Valid");
      
    }
    else if (!regEx.test(email) && email !== "") {
    
   setMessage("Email is Not Valid")
    }
    else {
      setMessage("");
    }
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    const pass = e.target.value

    if (pass.match(/^[A-Z]*$/)) {
      setPassword(pass);

    } else {
      alert('fail');
    }
  };
  const handleLastName = (e) => {
    SetLastName(e.target.value)
  }
  const handleDOB = (e) => {
    setdob(e.target.value)
  }
  const handleGender = (e) => {

    setGender(e.target.value)
  }
  const handleCheck = (e) =>{
setCheck(true)
  }

  const handleSubmitt = (e) => {
    e.preventDefault();

    alert(`
     ${name} Successfully Registered......

      First Name : ${name},
      Last Name :${LastName},
      Email Address : ${email},
      Gender: ${gender},
      DateofBirth: ${dob}
      
    `
  )
    setName('')
    setPassword("")
    setEmail("")
    setGender('')
    setdob('')
    SetLastName('') 

  };
  const handleReset = (e) => {
    e.preventDefault();
    setName('')
    setPassword("")
    setEmail("")
    setGender('')
    setdob('')
    SetLastName('') 
  }
  console.log(name);
  console.log(email);
  console.log(password);
  console.log(LastName);
  console.log(gender);
  console.log(dob);
  return (
    <div>
      <section >
      <div className='col-lg-3'>
                <img src=''/>
              </div>
        <div className=' d-flex justify-content-center align-items-center h-100 gradient-custom-3'>
          <div className='card'>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" style={{height:'500px',width:'100%'}}className="img-fluid"
                 />
              </div>
            <h1 className='title'>CREATE AN ACCOUNT</h1>
            <br></br>
            <div className='row'>
         
              <div className='col-lg-6 col-md-6'>
                <TextField className='width'
                  required
                  id="outlined-required"
                  label="First Name"
                  value={name}
                  defaultValue="Malavika" onChange={handleName}
                />
              </div>

              <div className='col-lg-6 col-md-6 '>
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  className='width'
                  value={LastName}
                  onChange={handleLastName}

                />
              </div>
            </div>



            <div className='row'>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-lg-12 '>
                    <TextField
                      required
                      id="outlined-required"
                      label="E-mail ID"
                      type="email"
                      value={email}

                      defaultValue="malavika@gmail.com" onChange={handleEmail}
                    />

                    <Button style={{ marginLeft: '30px', marginTop: '8px' }} variant="contained" onClick={EmailValidation}>Check</Button>
                  </div>
                </div>


                <span style={{ fontSize: '13px' }}>{message}</span>
              </div>
              <div className='col-lg-6'>
                <TextField

                  id="outlined-required"
                  label="Date of Birth"
                  type="date"
                  className='width'
                  Value={dob}
                  onChange={handleDOB}

                />
              </div>

            </div>

            <div className='row'>
              <div className='col-lg-6 col-sm-12'>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  value={password}
                  type="password"
                  className='width'
                  autoComplete="current-password" name='password' onChange={handlePassword}
                />
                <h6 id="pass" style={{ color: "green", fontSize: '13px' }}>Password will accept only upper case characters</h6>
              </div>

              <div className='col-lg-6 col-sm-12'>
                <label>Gender:</label><br></br>
                <input className='gender' name="gender" id="male" type="radio" onChange={handleGender} value='male' />
                <label htmlFor='female'>Male</label>
                <input className='gender' name="gender" id="female" type="radio" onChange={handleGender} value='female' />
                <label htmlFor='female'>Female</label>
                <input className='gender' name="gender" id="other" type="radio" onChange={handleGender} />
                <label htmlFor='other' value='other'>Other</label>

              </div>
            </div>
            <br></br>
            <p><Checkbox onClick={handleCheck} /><span>I agree all statements in Terms of service     </span>
            </p>
<div className='row'>
  <div className='col-sm-2'>
  <button type="button" class="btn  btn-success" onClick={ handleSubmitt} disabled={name &&LastName&&  email && password && check? false : true}>Register</button>
  </div>
  <div className='col-sm-3'>
  <button type="button" class="btn btn-light" onClick={ handleReset}>Reset</button>
    </div>
</div>



          </div>
        
        </div>
     
      </section>
   
   
    </div>
  );
}

export default App;
