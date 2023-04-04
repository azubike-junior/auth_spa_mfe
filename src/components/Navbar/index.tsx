import { MdKeyboardArrowDown } from 'react-icons/md'
// import profileIcon from '../../assets/avatar.svg?url'

import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="font-body bg-white border-b-[1.5px] border-[#d1d1d1] flex justify-between items-center py-4 pl-12 pr-9 top-0 z-30 ml-[380px] mt-10 mr-10 rounded-10 absolute left-0 right-0">
      <div className="">
        <h1 className="text-[#222222] font-medium text-2xl">
          {location.pathname === '/'
            ? 'Dashboard'
            : location.pathname === '/registered-users'
            ? 'Registered Users'
            : location.pathname === '/register'
            ? 'Register'
            : location.pathname === '/loans'
            ? 'Loans'
            : location.pathname === '/payments'
            ? 'Payments'
            : location.pathname === '/market-place'
            ? 'Marketplace'
            : location.pathname === '/loans/defaults'
            ? 'Defaulters'
            : 'Report'}
        </h1>
      </div>
      {/* //TODO
        //conditionally rendering the notification component based on the route */}
      <div className="flex items-center relative">
        {/* {show ?  <div className="inline-flex items-center border-r-2 border-[#d1d1d1]">
                <AiOutlineBell size={24}  className = "stroke-[#014342]"/> <span className="mr-10 text-[#222222] font-medium text-sm ml-[14px]">Notifications</span>
            </div> : null} */}
        <div className="flex items-center ml-[26px]">
          {/* <img src={profileIcon} alt="profile" /> */}
          <div className="text-xs text-[#222222] mr-4 ml-2">
            <p>Alex, Chibueyim</p>
            <p className="text-[#707070]">username@mail.com</p>
          </div>
          <MdKeyboardArrowDown className="absolute top-2 right-0" />
        </div>
      </div>
    </nav>
  )
}
