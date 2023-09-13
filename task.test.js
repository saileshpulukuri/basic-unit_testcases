const{rangeofnum}=require('./task');
test('rangeofnum',()=>{
    expect(rangeofnum(0,50)).toBe('0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50')
    expect(rangeofnum(15,28)).toBe('15, 25, 26, 27, 28')
    expect(rangeofnum(10,40)).toBe('10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30')
    expect(rangeofnum(50,0)).toBe('')
    expect(rangeofnum(50,50)).toBe('50')
    expect(rangeofnum(0,0)).toBe('0')
    expect(rangeofnum(60,40)).toBe('')
    expect(rangeofnum(40,50)).toBe('45, 46, 47, 48, 49, 50')
    expect(rangeofnum(30,60)).toBe('30, 45, 46, 47, 48, 49, 50')
    expect(rangeofnum(60,80)).toBe('')
});