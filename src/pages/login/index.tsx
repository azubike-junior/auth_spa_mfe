import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { ErrorAlert } from '../../components/Alert'
import {Button }from '../../components'
import { InputField } from '../../components/InputField'
import Loader from '../../components/Loader'
import { RootState, useAppDispatch } from '../../services/store'
import { loginUser } from '../../services/users/login'
import { ILogin } from '../../types'
import { redirect, useNavigate} from 'react-router-dom'
import logo from "../../assets/logo.svg"


const Login = (props) => {
    const [visible, setVisible] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { loading, error, data } = useSelector((state: RootState) => state.login)
    
    console.log(">>>>data", data)

    const navigate = useNavigate()
  
    const {
      register, 
      handleSubmit,
      formState: { errors },
    } = useForm<ILogin>()
  
    const loginHandler = ({ ...data }: ILogin) => {
      console.log('>>>>>>data', data)
      dispatch(loginUser({ navigate, ...data, props }))
    }
  return (
    <>
      <div className="flex justify-center items-center my-28 w-full">
        <form onSubmit={handleSubmit(loginHandler)} className="pt-10">
          <div className="flex items-center justify-center">
          <img src={logo} alt = "logo" />
          </div>
          <p className="text-2xl text-center pt-10 font-semibold">
            Welcome back !
          </p>

          {error && <ErrorAlert message={<><p>The username or password is not correct. </p></>
          } />}

          <InputField
            register={register}
            name="username"
            type="text"
            className="w-370 mt-7 border-2 border-borderAsh"
            placeholder="Enter your username"
            message="Please enter username"
            errors={errors.username}
            required
          />

          <InputField
            register={register}
            className="w-370 mt-6"
            type={visible ? 'text' : 'password'}
            name="password"
            show={visible ? 'hide' : 'show'}
            placeholder="Enter your password"
            message="Please enter password"
            errors={errors.password}
            onClick={() => setVisible(!visible)}
            required
          />

          <Button
            className="bg-darkGreen mt-12 py-3.5 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
            type="submit"
            child={loading ? <Loader /> : 'Login to ImaliPay'}
          />
        </form>
      </div>
      {/* <p className='text-center font-bold text-3xl'>Hello</p> */}
    </>
  )
}

export default Login