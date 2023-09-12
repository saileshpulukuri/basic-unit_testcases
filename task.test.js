const{rangeofnum}=require('./task');
test('rangeofnum',()=>{
    expect(rangeofnum(0,50)).toBe('0,5,10,11,12,13,14,15,20,25,26,27,28,29,30,35,40,45,46,47,48,49,50')
    expect(rangeofnum(15,28)).toBe('15,20,25,26,27,28')
    expect(rangeofnum(0,0)).toBe('0')
    expect(rangeofnum(50,0)).toBe('')
    expect(rangeofnum(50,50)).toBe('50')
});