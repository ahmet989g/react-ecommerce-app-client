import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from "../../api"
import { Box, Text, Button } from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';

function ProductDetail() {
    const { product_id } = useParams();

    const { isLoading, isError, data } = useQuery(['product', product_id], () => fetchProduct(product_id));


    if (isLoading) return 'Loading...'

    if (isError) return 'An error has occurred: ' + isError.message

    const images = data.photos.map((url) => ({ original: url }));

    return (
        <div>
            <Button colorScheme="green">Add to basket</Button>
            <Text as="h2" fontSize="2xl">{data.title}</Text>
            <p>{data.description}</p>
            <Box margin="10">
                <ImageGallery items={images} />
            </Box>
        </div>
    )
}

export default ProductDetail
