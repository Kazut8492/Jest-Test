// const fetchData = (callback: (str: string) => void) => {
//     setTimeout(() => {
//         callback('peanut butter');
//     }, 100);
// }

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 100);
    });
}

export default fetchData;