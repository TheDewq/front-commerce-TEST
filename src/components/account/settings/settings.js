import { useDisclosure } from "@chakra-ui/react";
import PasswordChange from "./password_change/password_change";
import EmailChange from "./email_change/email_change";
  
  export default function Settings() {
    return (
      <>
      <ul>
        <li>
        <PasswordChange/>
        </li>
        <li>
        <EmailChange/>
        </li>
      </ul>
        
        
      </>
    )
  }
