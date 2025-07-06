import React, { useContext, useState } from 'react';
import Input from '../../components/Inputs/Input';
import ProfilePhoto from '../../components/Inputs/ProfilePhoto';
import { validateEmail } from '../../utils/helper';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import uploadImage from '../../utils/uploadImage';

const SignUp = ({ setCurrentPage }) => {
  const [profilePic,setProfilePic]=useState(null)
  const [fullName,setFullName]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error,setError]=useState(null)

  const {updateUser}=useContext(UserContext);
  const navigate=useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    // Full name check
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    // Email check
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return; // 🔴 missing return here in your code
    }

    // Password check
    if (!password) {
      setError("Please enter the password.");
      return; // 🔴 missing return here too
    }

    // Clear error only if all validations pass
    setError("");

    // SignUp API Call
  try {
    // Upload image if present
    if (profilePic) {
      const imgUploadRes = await uploadImage(profilePic);
      profileImageUrl = imgUploadRes.imageUrl || "";
    }

    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
      name: fullName,
      email,
      password,
      profileImageUrl,
    });

    const { token } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      updateUser(response.data);
      navigate("/dashboard");
    }
  } catch (error) {
      if (error.message && error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to sign up</p>

      <form onSubmit={handleSignup}>

        <ProfilePhoto image={profilePic} setImage={setProfilePic}/>

        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

        <button type="submit" className="btn-primary">SIGN UP</button>

        <p className="text-[13px] text-slate-800 mt-3">
          Already have an account?{' '}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage('login')}
          >
            Log In
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
