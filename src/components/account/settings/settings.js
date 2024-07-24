import { Box, Stack, useDisclosure } from "@chakra-ui/react";
import PasswordChange from "./password_change/password_change";
import EmailChange from "./email_change/email_change";
  
  export default function Settings() {
    return (
      <>
      <Stack spacing={3}>
        <Box>
        <PasswordChange/>
        </Box>
        <Box>
        <EmailChange/>
        </Box>
        </Stack>
        
        
      </>
    )
  }
