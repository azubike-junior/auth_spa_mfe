interface BoxProps {
  icon?: any
  amount?: string
  title: string
  percentage?: string
}

export default function ReconCard({icon, amount, title, percentage}: BoxProps) {
  return (
    <div className='bg-white w-full px-5 py-7 my-10 rounded-2xl'>
        {icon ?  <div className='items-center'>
        <img src={icon} width={60} height={60} alt="icon" className='mr-3' />
        <p className='text-shadeBlue font-medium text-sm py-2'>{title}</p>
      <p className='text-lg pr-2'></p> <p className='text-almostBlack text-3xl font-bold'>{amount}</p>
       </div> : <div className='flex'>
        <div className = "pt-11">
        <p className='text-shadeBlue font-medium text-sm py-2'>{title}</p>
        <p className="text-almostBlack text-2xl font-bold">{percentage}<span className='text-percentAsh'>/100%</span></p>
        </div>
        <div className='border-[4px] rounded-full flex items-center justify-center bg-percent-image bg-contain bg-no-repeat py-11 px-8'>
            <p className='text-almostBlack text-3xl font-bold'>{percentage}%</p>
        </div>
        </div>}
    </div>
  )
}
