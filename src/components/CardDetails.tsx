import { AllDataType } from "../types/Card.type";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Image, Button, Spacer, WrapItem } from '@chakra-ui/react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from "react";

const CardDetails = ({ data }: AllDataType) => {
    const [like, setLike] = useState(false)

    const { id, title, batchNo, img, deal, action, reaction, heightBid, offer, price, deadline } = data
    console.log(deadline)
    return (
        <Text mx='auto'>
            <Card maxW='md'>
                <CardHeader>
                    <Flex>
                        <Text size='sm'>{deal}</Text>
                        <Spacer />
                        <Text>{action}</Text>
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
                        <Text>
                            {batchNo}<br />
                            {title}
                        </Text>
                        <Spacer />
                        <Flex alignItems='center' gap='2'>
                            <Text onClick={() => { setLike(!like) }}>
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
                <WrapItem px={5}>
                    <Button colorScheme='messenger' py={7} w={"100%"}>Messenger</Button>
                </WrapItem>

            </Card>
        </Text>
    );
};

export default CardDetails;