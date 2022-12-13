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
            <Card maxW='md' bg={'#0b2236'} color='white' fontSize={16} fontWeight='semibold'>
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
                        <Text>
                            {batchNo}<br />
                            <Text color='#20486d'>{title}</Text>
                        </Text>
                        <Spacer />
                        <Flex alignItems='center' gap='2'>
                            <Text onClick={() => { setLike(!like) }}>
                                {like ? <Text color='red'><BsHeartFill /> </Text> : <BsHeart />}
                            </Text>
                            <Text>
                                {reaction}
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex mt={5} alignItems='center'>
                        <Text>
                            {
                                heightBid ? <Text align='left' py='3' px='5' border='1px solid #20486d'>HEIGHT BID<br />${heightBid}</Text> : <Text>{offer}</Text>
                            }
                        </Text>
                        <Spacer />
                        <Text align='left' p='3' border='1px solid #20486d'>ACTION END IN<br />{deadline}</Text>

                    </Flex>
                </CardBody>
                <WrapItem px={5} mb={10}>
                    <Text colorScheme='messenger' py={7} w={"100%"}>
                        {action === "Action" ? <Button colorScheme='messenger' py={7} w={"100%"}>
                            BID NOW
                        </Button> : <Flex>
                            <Button colorScheme='messenger' variant='outline' px={10} border='1px solid' py={7}>
                                ADD TO CARD
                            </Button>
                            <Spacer />
                            <Button colorScheme='messenger' px={12} ml={5} py={7}>
                                BUY NOW
                            </Button>
                        </Flex>}
                    </Text>
                </WrapItem>

            </Card>
        </Text>
    );
};

export default CardDetails;