type LoanProp = {
    title: string,
    amount: string
}
export default function LoanCards ({title, amount}: LoanProp) {
    return (
        <div className="bg-white rounded-lg w-[330px] text-nameColor">
            <div className="py-10 pl-6">   
            <p className="text-3xl font-bold pb-2">{amount}</p>
            <h2 className="text-selectLabel text-sm">{title}</h2>
            </div>
        </div>
    )
}