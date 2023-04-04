import React from 'react'

type CardProps = {
    classname : string
    title: string
    amount: string
}

export default function OverviewCards ({classname, title, amount} : CardProps) {
    return (
        <div className={classname}> 
            <div className="text-tintedAsh py-5 px-6">
                <h2 className="font-mediun text-sm">{title}</h2>
                <p className="mt-12 text-blackRussian text-3xl font-bold"> {amount}</p>
            </div>
        </div>  
    )
}