import { Card ,Tag,Text} from '@chakra-ui/react'
import React from 'react'

const Infocard2 = () => {
  return (
    <Card backgroundImage="url('Contact.svg')" bgRepeat="no-repeat" bgSize="cover" borderRadius="xl" p="6">
        <Tag bg="#5F00D9" fontWeight="medium" textColor="white"  borderRadius="full" >Contact</Tag>
        <Text fontWeight="medium" mt={3}>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>

    </Card>
  )
}

export default Infocard2