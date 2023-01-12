function setPercentEncoding(parameter: Array<string>) {
    let arr: Array<string> = [];
    parameter.forEach(element => {
        if (element == ',') {
            arr.push('%2C')
        } else if (element == '.') {
            arr.push('%3A')
        } else {
            arr.push(element)
        }
    });
    
    return arr.join('')
}


export default setPercentEncoding;