import { SelectField } from "../InputField";

const userArray = [
    {
        text: "Customer",
        value: "customer"
    },
    {
        text: "Gate Keeper",
        value: "gate_keeper"
    }
]

export default function SelectUser () {
    return (
     <div className="w-full">
            <SelectField 
            label="SELECT USER"
            labelClass="pb-2"
            selectArray={userArray}
            className = "w-full text-tintedAsh text-xs"

            />

     </div>
    )
}