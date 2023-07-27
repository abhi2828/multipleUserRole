import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Label } from '../Comp/Button';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    const LoginForm = [
        {label:'Email', name:'email',required:true },
        { label:'Password',name:'password',required:true },
]
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-light text-center my-5'>Login</h2>
        {
            LoginForm?.map(({name,required,label})=><div className='my-3'>
                <Label label={label} name={name} className='my-0' />
                <input className='mb-0' placeholder={`Enter ${label}`} {...register(name, {required})} />
                {errors[name] && <small className='text-danger'>This field is required</small>}
            </div>)
        }
        <Button className='mt-0' type={'submit'} />
    </form>
  )
}

export default Login