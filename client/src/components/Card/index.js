import React from 'react'
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import moment from "moment";

function CardCUI({ item }) {
  return (
    <>
        <Card maxW='sm'>
            <CardBody>
                <Link to={`/product/${item._id}`}>
                    <Image
                        src={item.photos[0]}
                        alt={item.title}
                        loading="lazy"
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.title}</Heading>
                        <Text>
                            {moment(item.createdAt).format('DD/MM/YYYY')}
                        </Text>
                    </Stack>
                </Link>
            </CardBody>
            <Divider />
              <CardFooter justify='space-between' flexWrap='wrap'>
                  <Text color='blue.600' fontSize='2xl'>
                      ${item.price}
                  </Text>
                <Button colorScheme='green'>
                    Add to basket
                  </Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default CardCUI
