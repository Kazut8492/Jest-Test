import evenAndOdd from '../__subjects__/evenAndOdd';

test('numList width even or odd', () => {
    const numList = [1,2,3];
    expect(evenAndOdd(numList)).toStrictEqual([
        {num: 1, isEven: false},
        {num: 2, isEven: true},
        {num: 3, isEven: false}
    ])
})