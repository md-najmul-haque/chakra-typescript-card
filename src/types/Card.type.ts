export type DataType = {
    id: number,
    title: string,
    batchNo: string,
    img: string,
    deal: string,
    action: string,
    reaction: number,
    heightBid?: number,
    offer?: string,
    earlierPrice?: number,
    offerPrice?: number,
    actionDeadline?: string,
    saleDeadline?: string,
}
export type AllDataType = {
    data: {
        id: number,
        title: string,
        batchNo: string,
        img: string,
        deal: string,
        action: string,
        reaction: number,
        heightBid?: number,
        offer?: string
        earlierPrice?: number,
        offerPrice?: number,
        actionDeadline?: string,
        saleDeadline?: string,
    }
}
