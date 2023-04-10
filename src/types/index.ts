export type loginProps = {
    email: string,
    password: string
}

export type registrationProps = {
    full_name: string,
    phonenumber: number,
    business_name: string,
    type_of_business: string,
    email: string,
    country_of_residence: string,
    password: string,
}

export type bankingProps = {
    bank_name: string,
    account_number: number,

}

export type directorDetailsProps = {
    directors_phonenumber: number,
    date: number,
    nationality: string,
    identification: string,
    id_no: number,
    address: string,
}

export type forgot_password = {
    email: string
}

export type set_password = {
    password: string,
    enter_password: string,
}

export interface IHookInputProps {
  label?: string;
  placeholder?: string;
  info?: boolean;
  value?: string;
  className?: string;
  required?: boolean;
  register?: any;
  errors?: any;
  name?: string;
  type?: string;
  show?: any;
  select?: boolean;
  message?: string;
  textArea?: boolean;
  textAreaClass?: any;
  selectArray?: any;
  disabled?: boolean;
  ref?: React.MutableRefObject<HTMLInputElement>;
  onClick?: any;
  password?: string;
  validate?: any;
  maxLength?: number;
  minLength?: number;
  pattern?: any;
  handleChange?: any;
  onChange?: any;
  rest?: any;
  setState?: any;
  optional?: boolean;
  selectBorder?: string;
  selectLabel?: string
  labelClass?: string
  borderClass?: string
  inputClass?: string
}

export interface ILogin {
  username: string
  password: string
  navigate?: any
  props?: any
}


