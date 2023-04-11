import React from 'react'
import Button from '../Button'
// import FilterBtn from "../FilterBtn";
import '../../index.css'

interface ContainerProp {
  title?: string
  children: any
  backBtn?: any
  btn?: boolean
  filter?: boolean
  onClick?: any
  week?: any
  wallet?: any
}

export default function Container({
  title,
  onClick,
  children,
  backBtn,
  btn,
  filter,
  week,
  wallet,
}: ContainerProp) {
  return (
    <div onClick={onClick} className="py-16 px-10 font-inter z-10 max-h-full ml-[330px]">
      {/* {filter && <FilterBtn />} */}
      {backBtn ? (
        <div className="tracking-wide text-almostBlack text-sm font-inter pb-10">
          {backBtn}
        </div>
      ) : (
        <div className="flex justify-between">
          <p className="tracking-wide font-medium text-titleColor text-2xl pb-8">
            {title}
          </p>
          {/*  */}
          {week && (
            <select
            className='rounded-md p-1 border-2 border-[#D9D9D9] text-sm text-[#555555]'
            >
              <option value="Last week">Last week</option>
              <option value="This week">This week</option>
              <option value="This month">This month</option>
            </select>
          )}

          {btn && (
            <Button
              child="Register"
              className="bg-darkGreen text-white px-6 h-12 pt-3 rounded-lg cursor-pointer"
            />
          )}

          {wallet && wallet}
        </div>
      )}

      {children}
    </div>
  )
}
