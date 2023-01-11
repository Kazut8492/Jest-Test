import fetchData from "../__subjects__/fetchData";

// test('the data is peanut butter', done =>{
//     const callback = (str: string) => {
//         expect(str).toBe('peanut butter');
//         done();
//     }
//     fetchData(callback);
// })

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    })
});