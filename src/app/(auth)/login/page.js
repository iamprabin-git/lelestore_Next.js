"use client"
import { useForm} from 'react-hook-form'

function Loginpage() {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  
  return (
    <div>
      <h1 className='text-2xl font-bold italic text-center'>Login</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='py-2'>
          <label htmlFor="email">Email Address</label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='example@gmail.com'
         {...register("email",{
          required: "Email is required",
           pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            }
         })}
          className='w-full border rounded py-1 px-2 my-1' />
          <p className='text-red-600'>{errors?.email?.message}</p>
        </div>
        <div className='py-2'>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          {...register("password",{
            required: "Password is required",
           
          })}
          placeholder='*********' 
          className='w-full border rounded py-1 px-2 my-1' />
          <p className='text-red-600'>{errors?.password?.message}</p>
        </div>
        <div className='py-2'>
        <input type="submit" value="Login" className='w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'/>
        </div>
      </form>
    </div>
  )
}

export default Loginpage;
