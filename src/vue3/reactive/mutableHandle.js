const get = (target,key,receiver)=>{
    const res = Reflect.get(target,key,receiver)
    console.log('响应式get'+target[key]);
    return res
}
const set = (target,key,value,receiver)=>{
    const res = Reflect.set(target,key,value,receiver)
    console.log(`响应式set ${key} === ${value}`);
    return res
}

const mutableHandle = {
    get,
    set
}

export{
    mutableHandle
}