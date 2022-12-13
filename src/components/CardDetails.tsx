import { AllDataType } from "../types/Card.type";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Image, Button, Spacer, WrapItem } from '@chakra-ui/react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from "react";

const CardDetails = ({ data }: AllDataType) => {
    const [like, setLike] = useState(false)

    let { id, title, batchNo, img, deal, action, reaction, heightBid, offer, price, deadline } = data

    const handleReaction = () => {
        if (like) {
            setLike(false)
            reaction = reaction - 1

        } else {
            setLike(true)

            reaction = reaction + 1
        }
    }

    console.log(deadline)
    return (
        <Text mx='auto'>
            <Card maxW='md' bg={'#0b2236'}>
                <CardHeader>
                    <Flex>
                        <Button bg='#141b2f' color='white' size='sm'>
                            {deal}
                        </Button>
                        <Text size='sm'></Text>
                        <Spacer />
                        <Button bg='#141b2f' color='white' size='sm' border='2px solid red'>
                            {action}
                        </Button>
                    </Flex>
                </CardHeader>
                <Image
                    objectFit='cover'
                    px={5}
                    src={img}
                    alt='Chakra UI'
                />
                <CardBody>
                    <Flex>
                        <Text fontSize={14}>
                            {batchNo}<br />
                            {title}
                        </Text>
                        <Spacer />
                        <Flex alignItems='center' gap='2'>
                            <Text onClick={handleReaction}>
                                {like ? <BsHeartFill /> : <BsHeart />}
                            </Text>
                            <Text>
                                {reaction}
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Text>
                            {heightBid}
                        </Text>
                        <Spacer />
                        <Text>
                            {deadline}
                        </Text>
                    </Flex>
                </CardBody>
                <WrapItem px={5} mb={10}>
                    <Button colorScheme='messenger' py={7} w={"100%"}>Messenger</Button>
                </WrapItem>

            </Card>
        </Text>
    );
};

export default CardDetails;