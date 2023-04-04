import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import Button from "../Button";
import { InputField, SelectField } from "../InputField";

export default function PersonalDetails () {
    return (
        <>
        <div className="grid grid-cols-2 w-full gap-6">
            <div className="w-full">
                <InputField 
                name="first_name"
                type="text"
                className="text-tintedAsh"
                label="FIRST NAME"
                labelClass=""
                />
                <SelectField
                 name="gender"
                 type=""
                 className="w-full"
                 label="GENDER"
                 labelClass="" />
                <InputField 
                 name="phone_number"
                 type="number"
                 className="w-full"
                 label="PHONE NUMBER"
                 labelClass=""/>
                <InputField 
                 name="home_address"
                 type="text"
                 className="w-full"
                 label="HOME ADDRESS"
                 labelClass=""/>
                <SelectField
                 name="trade"
                 className="w-full"
                 label="TRADE"
                 labelClass="" />
                <InputField 
                 name="referral_code"
                 type="text"
                 className="w-full"
                 label="REFERRAL CODE"
                 labelClass=""/>

            </div>
            <div className="w-full">
                <InputField
                name="last_name"
                type = "text"
                label="LAST NAME"

                />
                <InputField 
                type="date"
                name = "date"
                label="DATE OF BIRTH"
                />
                <label>IDENTITY TYPE </label>
                <InputGroup size='lg'  style={{backgroundColor: '#ffffff', borderRadius: '10px' , outline: "none"}}>
                       <InputLeftElement width= '6rem'>
                        {/* <Button child="TRANSACTION_DATE_TIME" className="bg-[#f7f7f7] text-sm py-2 px-4 rounded-lg text-blackRussian"></Button> */}
                        <select className="bg-[#f2f2f2] text-sm py-2 px-4 rounded-lg text-blackRussian outline-none"
                        // color= "#222222"
                        // py={2}
                        // px={4}
                        // background="#f7f7f7"
                        // fontSize={14}
                        // size="sm"
                        // borderRadius={8}
                        >
                      <option>BVN</option>
                        </select>
                      </InputLeftElement>
                      <Input
                        pl= '13rem'
                        name = "journal_transcdate"
                        fontSize={14}
                        placeholder='Enter column no.'
                        _placeholder= {{ color: '#555555' }}
                        className="text-[#555555]"
                      />
                    </InputGroup>
                <InputField
                label="ASSOCIATION NAME"
                name = "association_name" 
                className=""
                type= "text"
                />
                <InputField
                name="work_address"
                type="text"
                className="w-full"
                label="WORK ADDRESS"
                labelClass=""
                />
                <SelectField 
                label="USER-GROUP"
                className=""
                
                />
            </div>
        </div>
        </>
    )
}