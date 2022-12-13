export type DataType = {
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
export type AllDataType = {
    data: {
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
}
