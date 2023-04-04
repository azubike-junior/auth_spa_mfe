import React , {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from "react-router-dom";


export default function Dropdown({ item }: any) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false)

  const showSubnav = () => setIsListOpen(!isListOpen);

  return (
    <div
      className= ""
    >
      <div className="flex items-center justify-between text-[#101010]">
        <Link to={item.path} className="w-full flex items-center justify-between focus:bg-[#80B439]/20 focus:opacity-60 focus:text-[#80B439] focus:w-full focus:p-3 focus:rounded-10" onClick={item.subNav && showSubnav}>
          <div className='flex'>
          <img src={item.icon} alt="icon" className="mr-3 focus:bg-black" />
          {item.name}
          </div>  
          <div className='flex justify-end'>
            {item.subNav && isListOpen ? item.arrowUp :  item.subNav ? item.arrowDown : null}
          </div>
        </Link>

        {/* {item?.subNav && isListOpen ? (
         <span className=''> {item.arrowUp}
        ) : item?.subNav ? (
           <span>{item.arrowDown}</span>
        ) : null}   */}
      </div>
      {isListOpen &&
        item.subNav.map((list: any, index: any) => (
          <ul key={index}>
            <li className="my-6 ml-8 text-[#101010]">
              <Link to={list.path} className="flex items-center focus:bg-[#80B439]/20 focus:opacity-60 focus:text-[#80B439] focus:w-full focus:p-3 focus:rounded-10">
              <img src={list.image} alt="icon" className="mr-3 focus:bg-black" />
                {list.title}</Link>
            </li>
          </ul>
        ))}
    </div>
  );
}

