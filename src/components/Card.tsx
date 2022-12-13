import { Grid, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import CardDetails from "./CardDetails";
// import { DataType } from "../types/Card.type";

type DataType = {
    id: number,
    title: string,
    batchNo: string,
    img: string,
    deal: string,
    action: string,
    reaction: string,
    heightBid?: number,
    offer?: string
    price?: number
    deadline: string
}


const Card = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('data.json').then(res =>
                res.json()
            )
    })

    console.log(data)

    // if (isLoading) return 'Loading...'


    return (
        <Text mx='auto' mt={10}>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} >
                {
                    data?.map((data: DataType) => <CardDetails key={data.id} data={data} />)
                }
            </Grid>
        </Text>
    );
};

export default Card;