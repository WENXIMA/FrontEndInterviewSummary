const myNew = (constructor, ...args) => {
    const Obj = Object.create({});
    const returnValue = constructor.apply(Obj, ...args);
    Object.setPrototypeOf(Obj, constructor.type);
    return returnValue || Obj;
}