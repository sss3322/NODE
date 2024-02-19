function Array(req, res) {
    console.log('DEMO');
    const Data = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
    ]; 
    res.send(Data);
}

module.exports = Array;

