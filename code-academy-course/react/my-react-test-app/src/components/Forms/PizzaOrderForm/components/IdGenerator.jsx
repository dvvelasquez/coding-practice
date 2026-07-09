let nextId = 0;
const idGenerator = () => {
    const result = nextId;
    nextId += 1
    return result;
}

export {
    idGenerator
}
