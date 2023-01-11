const evenAndOdd = (numList: number[]) => {
    return numList.map(num => ({num, isEven: !((num % 2))}))
}

export default evenAndOdd;