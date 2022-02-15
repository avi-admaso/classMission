import { SHOW } from "./Types"
export const Show =(value:any) =>{
    {
        return{
            type: SHOW,
            payload:value
        }
    }
}
