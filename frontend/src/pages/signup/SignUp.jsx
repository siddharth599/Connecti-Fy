import GenderRadioButton from "./GenderRadioButton";
import {Link} from 'react-router-dom';
import { useState } from "react";
import userSignup from "../../hooks/userSignup";

const SignUp = () => {
  
  const {inputs, setInputs} = useState({
    fullname:'',
    username:'',
    password:'',
    confirmpassword:'',
    gender:''  
  })

  const {loading, signup} = userSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };
  
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='John Cena' className='w-full input input_bordered h-10' 
              value={inputs.fullname}
              onChange={(e) => setInputs({...inputs, fullname: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='john123@cena' className='w-full input input_bordered h-10' 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
                <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
              value={inputs.confirmpassword}
              onChange={(e) => setInputs({...inputs, confirmpassword: e.target.value})}
            />
          </div>

          <GenderRadioButton onCheckBoxChange = {handleCheckBoxChange} selectedGender = {inputs.gender}/>

          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>

          <div>
            <button className='btn btn-block btn-sm mt-2'
              disabled = {loading}
            > {loading ? <span className="loading loading-spinner"></span> : "Sign Up" }</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp
