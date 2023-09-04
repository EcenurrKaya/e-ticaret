import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment"

function Card({item}) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to={`/product/${item._id}`}>
            <Image src={item.photos[0]} loading="lazy"></Image>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {moment(item.createdAt).format('DD/MM/YYYY')}
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}
                </Box>
            </Box>
            <Box>{item.price} TL</Box>
        </Link>
        <Button colorScheme='pink'>Add to basket</Button>
    </Box>
  )
}

export default Card