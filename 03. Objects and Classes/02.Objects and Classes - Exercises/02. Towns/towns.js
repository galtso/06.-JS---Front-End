function solve(input) {
    for (const line of input) {
        let [town, latitude, longitude] = line.split(' | ');
        let townObj = { town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) };
        console.log(townObj);
    }
}

solve(['Plovdiv | 136.45 | 812.575'])
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)