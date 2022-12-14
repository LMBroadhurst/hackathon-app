import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { createUser, loginUser } from '../../API/UserAPI';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/User.context';
import { useEffect } from 'react';
import { getAllOrganisations } from '../../API/OrganisationAPI';


const RegisterForm = () => {

  const { login } = useContext(UserContext);
  const [passwordShowing, setPasswordShowing] = useState(false);
  const [organisations, setOrganisations] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllOrganisations(setOrganisations);
  }, []);

  const togglePasswordShowing = () => {
    setPasswordShowing(passwordShowing ? false : true);
  };

  const [user, setUser] = useState({
    uniqueId: 0,
    firstName: '',
    lastName: '',
    email: '',
    joinCode: '',
    password: ''
  });

  const handleUpdatingFormFields = async (event) => {
    event.preventDefault();

    let updatedValue = event.target.name;
    let newValue = event.target.value;
    setUser({...user, [updatedValue]: newValue});
  };

  const credentialsCheck = () => {
    if (user.password.length > 8) {
      return true;
    }
    return false;
  }

  const handleRegisterUser = async (event) => {
    event.preventDefault();
    const id = 1;

    if (!credentialsCheck()) {
      return alert("Please enter a password that contains over 8 characters");
    }

    await createUser(user);
    console.log(user.email, user.password);
    
    const userLoggedIn = await loginUser(user.email, user.password);
    console.log(userLoggedIn);
    
    if (userLoggedIn) {
      userLoggedIn.realPassword = user.password
      login(userLoggedIn)
      navigate(`/organisation/${id}`)
    } else {
      alert("There was a problem with registration. Please try again.")
    }
  };


  return (
    <section className='flex flex-col gap-2'>
      <form className='flex flex-col gap-2'>

        <div className='flex flex-col'>
          <label className='text-md self-start'>First name*</label>
          <input className='border border-black rounded-md p-1' type={'text'} name={'firstName'} onChange={handleUpdatingFormFields} />
        </div>

        <div className='flex flex-col'>
          <label className='text-md self-start'>Last name*</label>
          <input className='border border-black rounded-md p-1' type={'text'} name={'lastName'} onChange={handleUpdatingFormFields} />
        </div>

        <div className='flex flex-col'>
          <label className='text-md self-start'>Email*</label>
          <input className='border border-black rounded-md p-1' type={'email'} name={'email'} onChange={handleUpdatingFormFields} />
        </div>

        <div className='flex flex-col'>
          <label className='text-md self-start'>Org. code*</label>
          <input className='border border-black rounded-md p-1' type={'text'} name={'joinCode'} onChange={handleUpdatingFormFields} />
        </div>

        <div className='flex flex-col'>
          <label className='text-md self-start'>Password*</label>

          <div className='flex flex-col relative'>
            <input className='border border-black rounded-md p-1' type={passwordShowing ? 'text' : 'password'} name={'password'} onChange={handleUpdatingFormFields} />
            <span className='absolute top-1/2 translate-y-[-50%] right-2 hover:cursor-pointer hover:text-primary-focus' onClick={togglePasswordShowing}>{passwordShowing ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
          </div>

          <span className='self-center cursor-pointer mt-0.5 border-b-2 text-slate-400 border-white hover:border-accent hover:text-accent'>Forgot password?</span>
        </div>

        <button className='py-2 rounded-lg text-lg bg-primary text-white transition-all duration-500 hover:bg-primary-focus hover:scale-[.97]' type='submit' value={"Sign In"} onClick={handleRegisterUser}>Register</button>
      </form>

      <p className='flex gap-1 self-center'>
        <span>Already have an account?</span>
        <span className='text-secondary border-b-white border-b-2 hover:border-b-secondary'><Link to={"/"}>Log In</Link></span>
      </p>
    </section>
  )
}

export default RegisterForm;