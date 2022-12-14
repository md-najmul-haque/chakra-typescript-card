import { AllDataType } from "../types/Card.type";
import { Card, CardHeader, CardBody, Flex, Text, Image, Button, Spacer, WrapItem, Badge } from '@chakra-ui/react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from "react";
import Countdown from 'react-countdown';


const CardDetails = ({ data }: AllDataType) => {
    const [like, setLike] = useState(false)
    let { title, batchNo, img, deal, action, reaction, heightBid, offer, earlierPrice, offerPrice } = data

    const [reactCount, setReactCount] = useState(reaction)
    const handleReaction = () => {
        if (like) {
            setLike(false)
            setReactCount(reaction)

        } else {
            setLike(true)
            setReactCount(reaction + 1)
        }
    }
    return (
        <Text mx='auto'>
            <Card maxW='md' bg={'#0b2236'} color='white' fontSize={16} fontWeight='semibold'>
                <CardHeader>
                    <Flex>
                        <Button bg='#141b2f' color='white' size='sm' rounded='full'>
                            {deal}
                        </Button>
                        <Text size='sm'></Text>
                        <Spacer />
                        <Button bg='#141b2f' color='white' size='sm' border='2px solid red' rounded='full'>
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
                            <Text color='#20486d'> {title}</Text>
                        </Text>
                        <Spacer />
                        <Flex alignItems='center' gap='2'>
                            <Text onClick={handleReaction}>
                                {like ? <Text color='red'><BsHeartFill /> </Text> : <BsHeart />}
                            </Text>
                            <Text>
                                {reactCount}
                            </Text>
                        </Flex>
                    </Flex>


                    <Text mt='4'>
                        {
                            heightBid ?
                                <Flex>
                                    <Text align='left' py='3' px='5' border='1px solid #20486d'>
                                        <Text color='#00b61b'>HEIGHT BID</Text>
                                        <Text>${heightBid}</Text>
                                    </Text>
                                    <Spacer />
                                    <Text align='left' p='3' border='1px solid #20486d'>
                                        <Text color='#1976d2'>ACTION END IN</Text>
                                        <Text><Countdown date={Date.now() + 300000000} />s</Text>
                                    </Text>
                                </Flex>
                                :
                                <Flex>
                                    <Text align='left' py='3' px='5' border='1px solid #20486d'>
                                        <Badge bg='#00b61b' position='absolute' mt='-5' ml='5' rounded='full'>{offer}</Badge>
                                        <Text pr={10} color='red'>$<del>{earlierPrice}</del></Text>
                                        <Text>${offerPrice}</Text>
                                    </Text>
                                    <Spacer />
                                    <Text align='left' p='3' border='1px solid #20486d'>
                                        <Text color='#1976d2'>ACTION END IN</Text>
                                        <Text><Countdown date={Date.now() + 300000000} />s</Text>
                                    </Text>
                                </Flex>
                        }
                    </Text>
                </CardBody>
                <WrapItem px={5} mb={5}>
                    <Text colorScheme='messenger' py={3} w={"100%"}>
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