import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

type ComponentProps = {
  width: string;
  placeholder: string;
  height: string
};

export default function Search(props: ComponentProps) {
  return (
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<RiSearchLine size="18px" color='placeholdercolor'/>} />
         <Input
        type="search"
        name="search"
        id="search"
        borderColor="dashborder"
        bg= "white"
        height={props.height}
        width={props.width}
        placeholder={props.placeholder}
        _placeholder={{ color: "placeholdercolor" }}
      />
      </InputGroup>
  );
}
