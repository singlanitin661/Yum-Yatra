import { sum } from "../sum";

test("Testing sum function" , ()=>{
    const res = sum(3,4) ;
    expect(res).toBe(7) ;
})