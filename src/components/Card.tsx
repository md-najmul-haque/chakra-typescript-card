import { Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import CardDetails from "./CardDetails";
import Loading from "./Loading";
import { DataType } from "../types/Card.type";




const Card = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('data.json').then(res =>
                res.json()
            )
    })

    console.log(data)

    if (isLoading) {
        <Loading />
    }


    return (
        <Text mx='auto' mt={10}>
            <SimpleGrid minChildWidth="375px" gap={6} >
                {
                    data?.map((data: DataType) => <CardDetails key={data.id} data={data} />)
                }
            </SimpleGrid>
        </Text>
    );
};

export default Card;