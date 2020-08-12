function capitalizeName(name) {
    let splitName = name.split(" -");
    for (let i = 0; i < splitName.length; i++ ){
        splitName[i] = splitName[i][0].toUpperCase() + splitName[i].substring(1);
    }
    let capName = splitName.join(" "); 
    return capName;
}

export default capitalizeName;
