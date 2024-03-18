import { Card ,Text} from '@chakra-ui/react'
import React from 'react'
import { Tag } from '@chakra-ui/react';

const Infocard1 = () => {
  return (
    <Card backgroundImage="url('Visual.svg')" bgRepeat="no-repeat" bgSize="cover" borderRadius="xl" p="6">
        <Tag borderRadius="full" fontWeight="medium" > Loans</Tag>
        <Text fontWeight="medium" mt={3}>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>

    </Card>
  )
}

export default Infocard1