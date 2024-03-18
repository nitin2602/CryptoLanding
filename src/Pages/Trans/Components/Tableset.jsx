import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Tableset = () => {
  return (
    <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Date & Time</Th>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>HNI8&1</Td>
        <Td>23-09-23 4:56 PM</Td>
        <Td >INR Deposit</Td>
        <Td >25.4</Td>
        <Td >25.4</Td>
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default Tableset