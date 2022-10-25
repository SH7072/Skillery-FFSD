import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['centre', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['centre', 'left']}
        maxW="200px"
        size="sm"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        textTransform="uppercase"
        children={`Lectures - ${lectureCount}`}
      />
      <Heading
        size="xs"
        textTransform="uppercase"
        children={`Views - ${views}`}
      />
      <Stack direction={["column", "row"]} alignItems="center">
        <Link to={`/courses/${id}`}>
          <Button colorScheme="yellow"> Watch Now </Button>
        </Link>
        <Button variant="ghost" colorScheme="yellow" onClick={() =>addToPlaylistHandler(id)}> Add to playlist</Button>
      </Stack>
    </VStack>
  );
};
function Courses() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Strcuture and Algorithms',
    'Game Development',
    'Blockchain',
    'Machine Learning',
    'App Development',
  ];
  const addToPlaylistHandler = () => {
    console.log("Added to playlist")
  }
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY="8">
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course...."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack overflowX="auto" paddingY="8">
        {categories.map((category, index) => {
          return (
            <Button key={index} onClick={() => setCategory(category)} minW="60">
              <Text children={category}></Text>
            </Button>
          );
        })}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['centre', 'flex-start']}
      >
        <Course
          title="Sample1"
          description={'Sample1'}
          views={23}
          imageSrc={"https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
          id={'sample1'}
          creator="sample1 creator"
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>{' '}
    </Container>
  );
}

export default Courses;
