import { isObject } from '../shared/utils'
import { mutableHandle } from './mutableHandle'
const reactive = (target)=>{
    return CreateReactiveObjeact( target , mutableHandle )
}
const CreateReactiveObjeact = ( target , baseHandle )=>{
    if(!isObject(target)){
        return target
    }
    const observer = new Proxy( target , baseHandle )
    
    return observer
}
// const proxy = new proxy(target,{
//     set(target,key,receiver){

//     },
//     get(target,key,value,receiver){

//     }
// })
export {
    reactive
}