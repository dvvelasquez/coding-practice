function getNewExpirationTime() {
    return Date.now() + 15 * 1000;
}

let nextId = 0;
function generatedId() {
    const result = nextId;
    nextId += 1;
    return result;
}

export {
    getNewExpirationTime,
    generatedId
}