import React from 'react'
import CardCUI from '../../components/Card'
import { SimpleGrid, Container, Box, Flex, Button } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';
import { fetchProductList } from "../../api"

function Products() {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery('products', fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;

      if(!morePagesExist){
        return;
      }

      return allGroups.length + 1;
    },
  });

  if (status === "loading") return 'Loading...'

  if (status === "error") return 'An error has occurred: ' + error.message

  return (
    <>
      <Container maxW='container.xl'>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(calc(25% - 12px), 1fr))'>
          {
            data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {
                  group.map((item) => (
                    <Box w="100%" key={item._id}>
                      <CardCUI item={item} />
                    </Box>
                  ))
                }
              </React.Fragment>
            ))
          }
        </SimpleGrid>
        <Flex m="10" justifyContent="center">
          { hasNextPage ? //Diğer sayfa varsa Load More butonunu göster yoksa gösterme
            <Button colorScheme='teal' variant='outline'
              onClick={() => fetchNextPage()}
              isLoading={isFetchingNextPage}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {hasNextPage ? 'Load More' : 'Nothing more to load'}
            </Button>
            : null
          }
        </Flex>
      </Container>
    </>
  )
}

export default Products
