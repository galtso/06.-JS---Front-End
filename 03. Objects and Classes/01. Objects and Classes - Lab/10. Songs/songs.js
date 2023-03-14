function solve (input){
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();
    for (let index = 0; index < numberOfSongs; index++) {
        let [typeList, name, time] = input[index].split('_');
        songs.push(new Song(typeList, name, time))
    }

    if(typeSong === 'all'){
        songs.forEach((s) => console.log(s.name));
    }else{
        let filtered = songs.filter((s) => s.typeList === typeSong);
        filtered.forEach((s) => console.log(s.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )