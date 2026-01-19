import Chance from "chance";

const chance=Chance();
export const userFackdata=()=>{
// return
// console.log("user Name",chance.name({ middle_initial: true }))
return chance.name({ middle_initial: true })
}

// userFackdata();