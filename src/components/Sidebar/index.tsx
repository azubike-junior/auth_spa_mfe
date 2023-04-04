import React from 'react'
import logo from "../../assets/log.svg";
import Dropdown from '../Dropdown'
import overview from '../../assets/overvw.svg'
import customers from '../../assets/customrs.svg'
import loans from '../../assets/loan.svg'
import repayment from '../../assets/repaymnt.svg'
import defaulters from  '../../assets/default.svg'
import report from '../../assets/repot.svg'
import storefront from '../../assets/storefront.svg'
import withdraw from '../../assets/withdraw.svg'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Menu = [
    {
        icon: overview,
        path: '/',
        name: 'Overview',
    },
    {
        icon: customers,
        path: '/registered-users',
        name: 'Registered Users',
    },
    {
      icon: storefront,
      path: '/market-place',
      name: 'Marketplace',

    },
    {
        icon: loans,
        path: '/loans',
        name: 'Loans',
        arrowUp: <MdKeyboardArrowUp />,
        arrowDown: <MdKeyboardArrowDown />,
        subNav: [
          {
              image: defaulters,
              title: 'Default',
              path: '/loans/defaults'
          },
        ]
    },
    {
        icon: repayment,
        path: '/payments',
        name: 'Payments',
        arrowUp: <MdKeyboardArrowUp />,
        arrowDown: <MdKeyboardArrowDown />,
        subNav: [
          {
              image: withdraw,
              title: 'Withdraw',
              path: '/payments/withdraw'
          },
        ]
    },
    {
        icon: report,
        path: '/report',
        name: 'Report'

    }
]

export default function Sidebar() {
  return (
    <div className="w-[330px] bg-white border-r-2 border-borderAsh pt-8 px-8 h-screen fixed top-0 left-0 font-body">
      <div className="">
        <img src={logo} alt="logo" />
        <div className="mt-16 grid gap-6">
          <h1 className="text-[#808080] text-xs font-normal">QUICK MENU</h1>
          {Menu && Menu.map((item, index) => (
           <Dropdown key={index} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
