
var listTopSong = document.querySelector('.topMusic_item--song');
var itemTopSong = document.querySelector('.topSong');
var song = document.getElementById('songFile');
var playBtn = document.getElementById('pause');
var songBar = document.getElementById('songBar');
var recentSong = document.querySelector('.recentPlayed');
var topSongThumb = document.querySelector('.topMusic_item--img--thumb');
var playThumb = document.querySelector('.playerBar_item-img--thumb');
var miniTitle = document.querySelector('.playerBar_item-name--nameSong');
var miniArtist = document.querySelector('.playerBar_item-name--nameArtist');
var recentPlayedTitle = document.querySelector('.recentPlayed_title');
var recentPlayedItem;
var listArtistItem = document.querySelectorAll('.listArtist_item');
var listArtistitemIconRunning = document.querySelectorAll('.listArtist_item-iconRunning');
var curtime = document.querySelector('.currTime');
var durtime = document.querySelector('.durrTime');
var backWard = document.querySelector('.back');
var forWard = document.querySelector('.next');
let volRange = document.getElementById('volRange');
let volIcon = document.querySelector('.playerBar_item-vol--icon');
let anotherSong = document.querySelector('.anotherSong');

setInterval(autoNextTopSong,500);
setInterval(displayTimer, 500);
//setInterval(renderTopSong, 500);
var sontung = [
    {

        nameFile:'sontung/asairoi.mp3'
    },

]
let numberOfArtist = 5;
var isPlaying = true;
var topSongIndex = 0;
var isTopSongPlaying = true;
var topSong = [
    {
        nameSong: 'Anh sai rồi',
        nameArtist: 'Sơn Tùng',
        nameFile:'sontung/asairoi.mp3',
        time:'4:22',
        img:'sontung/asairoi.jpg'
    },
    {
        nameSong: 'Nàng thơ',
        nameArtist:'Amee',
        nameFile:'amee/nangtho.mp3',
        time:'4:22',
        img:'amee/nangtho.webp'
    },
    {
        nameSong:'Đế vương',
        nameArtist:'Đình Dũng',
        nameFile:'dinhdung/devuong.mp3',
        time:'4:22',
        img:'dinhdung/devuong.jpg'
    },
    {
        nameSong:'Khuôn mặt đáng thương',
        nameArtist:'Sơn Tùng',
        nameFile:'sontung/khuonmatdangthuong.mp3',
        time:'4:10',
        img:'sontung/khuonmatdangthuong.webp'
    },
    
]

var listSongOf =[
    {
        nameSong:'Khuôn mặt đáng thương',
        nameArtist:'Sơn Tùng mtp',
        nameFile:'sontung/khuonmatdangthuong.mp3',
        img:'sontung/khuonmatdangthuong.webp',
        artist:'sontung'
    },
    {
        nameSong:'Anh sai rồi',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/asairoi.mp3',
        img:'sontung/asairoi.jpg',
        artist:'sontung'
    },
    {
        nameSong:'Em của ngày hôm qua',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/emcuangayhomqua.mp3',
        img:'sontung/emcuangayhomqua.webp',
        artist:'sontung'
    },
    {
        nameSong:'Lạc trôi',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/lactroi.mp3',
        img:'sontung/lactroi.jpg',
        artist:'sontung'
    },
    {
        nameSong:'Nắng ấm xa dần',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/nangamxadan.mp3',
        img:'sontung/nangamxadan.jfif',
        artist:'sontung',
    },
    {
        nameSong:'Hãy trao cho anh',
        nameArtist:'Sơn Tùng MTP',
        nameFile:'sontung/haytraochoanh.mp3',
        img:'sontung/haytraochoanh.jpg',
        artist:'sontung'
    },
    {
        nameSong:'Nàng thơ',
        nameArtist:'Amee',
        nameFile:'amee/nangtho.mp3',
        img:'amee/nangtho.webp',
        artist:'amee'
    },
    {
        nameSong:'Nói hoặc không nói',
        nameArtist:'Amee',
        nameFile:'amee/noihoackhongnoi.mp3',
        img:'amee/noihoackhongnoi.jpg',
        artist:'amee'
    },
    {
        nameSong:'Shay nắng',
        nameArtist:'Amee',
        nameFile:'amee/shaynang.mp3',
        img:'amee/shaynang.jpg',
        artist:'amee'
    },
    {
        nameSong:'Thay mọi cô gái yêu anh',
        nameArtist:'Amee',
        nameFile:'amee/thaymoicogaiiuanh.mp3',
        img:'amee/thaymoicogaiiuanh.jpg',
        artist:'amee'
    },
    {
        nameSong:'Sao ta ngược lối',
        nameArtist:'Đình dũng',
        nameFile:'dinhdung/saotanguocloi.mp3',
        img:'dinhdung/saotanguocloi.jpg',
        artist:'dinhdung'
    },
    {
        nameSong:'Câu hẹn câu thề',
        nameArtist:'Đình dũng',
        nameFile:'dinhdung/cauhencauthe.mp3',
        img:'dinhdung/cauhencauthe.jpg',
        artist:'dinhdung'
    },
    {
        nameSong:'Đừng hẹn kiếp sau',
        nameArtist:'Đình dũng',
        nameFile:'dinhdung/dunghenkiepsau.mp3',
        img:'dinhdung/dunghenkiepsau.jfif',
        artist:'dinhdung'
    },
    {
        nameSong:'Đế vương',
        nameArtist:'Đình Dũng',
        nameFile:'dinhdung/devuong.mp3',
        img:'dinhdung/devuong.jpg',
        artist:'dinhdung'
    }
]
song.setAttribute("src",`./musics/${topSong[topSongIndex].nameFile}`);

playBtn.addEventListener('click', playMusic);
function playMusic(){
    if(isPlaying){
        song.play();
        playBtn.innerHTML = `<i class="fa-light fa-circle-pause"></i>`;
        isPlaying = false;
    } else {
        song.pause();
        playBtn.innerHTML = `<i class="fa-light fa-circle-play"></i>`;
        isPlaying = true;
    }
}
backWard.addEventListener('click',backMusic);
forWard.addEventListener('click',nextMusic);
let termp;
function nextMusic(){
    if( isTopSongPlaying ){
        topSongIndex++;
        if ( topSongIndex > 3) topSongIndex =0;
        replaceAtributeTopSong();
        isPlaying =true;
        playMusic();
        renderTopSong();
    } else if(isAnotherSongPlaying){
        iOfAnotherSong++;
        console.log(iOfAnotherSong);

        
        for ( var num = 0; num < arrayAdd.length; num++){
            if( arrayAdd[num] == indexOfAnotherSong){
                console.log(arrayAdd[num++],iOfAnotherSong);
                if(iOfAnotherSong == 5) {
                    iOfAnotherSong =0;
                    playAnotherSong(arrayAdd[0],iOfAnotherSong);
                }
                else    playAnotherSong(arrayAdd[num++],iOfAnotherSong);
                break;
            }
        }
        
    }
    else {
        if ( currentNum < listSongOf.length-1){
            var currentNum2 = currentNum;
            currentNum++;
            indexRecentSongPlaying++;
        }

        if ( listSongOf[currentNum].artist == listSongOf[currentNum2].artist) //chỗ này currentNum đã được tăng giá trị
        {   
            
            
            // currentNum++;
            // listArtistIndex++;
            // indexRecentSongPlaying=0;
            playMusicOf(currentNum,indexRecentSongPlaying);
        } else {
            termp = indexRecentSongPlaying;
            indexRecentSongPlaying=0;
            if ( listArtistIndex <= 5) {listArtistIndex++;
            renderListMusicOf(listSongOf[currentNum].artist,listArtistIndex);
            playMusicOf(currentNum,indexRecentSongPlaying);}
            // currentNum++;
        }
    }
}
function backMusic(){
    if( isTopSongPlaying ){
        topSongIndex--;
        if ( topSongIndex <0) topSongIndex =3;
        replaceAtributeTopSong();
        isPlaying =true;
        playMusic();
        renderTopSong();
    }else if(isAnotherSongPlaying){
        iOfAnotherSong--;
        console.log(iOfAnotherSong);

        
        for ( var num = 0; num < arrayAdd.length; num++){
            if( arrayAdd[num] == indexOfAnotherSong){
                console.log(arrayAdd[num--],iOfAnotherSong);
                if(iOfAnotherSong < 0) {
                    iOfAnotherSong =0;
                    playAnotherSong(arrayAdd[0],iOfAnotherSong);
                }
                else    playAnotherSong(arrayAdd[num--],iOfAnotherSong);
                break;
            }
        }
        
    }else {
        var currentNum2 = currentNum;
        currentNum--;
        indexRecentSongPlaying--;
        if (indexRecentSongPlaying < 0){
            indexRecentSongPlaying =0;
            }
// renderListMusicOf(listArtistIndex,nameArtistIndex);
        if ( listSongOf[currentNum].artist == listSongOf[currentNum2].artist) //chỗ này currentNum đã được tăng giá trị
        {   
            
            
            // currentNum++;
            // listArtistIndex++;
            // indexRecentSongPlaying=0;
            playMusicOf(currentNum,indexRecentSongPlaying);
        } else {

            indexRecentSongPlaying=termp -1;
            renderListMusicOf(listSongOf[currentNum].artist,listArtistIndex);
            playMusicOf(currentNum,indexRecentSongPlaying);
            // currentNum++;
        }
    }
}

function playTopSong(index){
    renderListMusicOf('sontung',0);
    isTopSongPlaying = true;
    topSongIndex = index;
    replaceAtributeTopSong();
    isPlaying = true;
    playMusic();
    renderTopSong();
}
function autoNextTopSong(){
    // if(isTopSongPlaying){
    if( song.currentTime == song.duration){
    // if( topSongIndex >= topSong.length) {
    //     topSongIndex = 0;
    //     replaceAtributeTopSong();
    //     isPlaying = true;
    //     playMusic();
    //     renderTopSong();
    // } else {
    //     topSongIndex++;
    //     replaceAtributeTopSong();
    //     isPlaying = true;
    //     playMusic();
    //     renderTopSong();
    // }
    nextMusic();
}
    // } 
}



function displayTimer(){
    songBar.max = song.duration;
    songBar.value = song.currentTime;
    curtime.textContent = formatTimer(song.currentTime);
    durtime.textContent = formatTimer(song.duration);
}
function formatTimer(num){
    var min = Math.floor( num /60);
    var sec = Math.floor( num - min*60);
    if ( sec < 10) return `${min}:0${sec}`
    else return `${min}:${sec}`
}
songBar.addEventListener('change',changeBar);
function changeBar(){
    song.currentTime =songBar.value ;
}
function renderTopSong(){
    listTopSong.innerHTML = '';
    for( var index= 0; index< topSong.length ; index++ ){
        if (isTopSongPlaying){
    if (index == topSongIndex){
        
        listTopSong.innerHTML += `
        <div onclick="playTopSong(${index})" class="topSong" style="background-color:white">
        <div class="topMusicLeft">
                <div class="topSong_rank"><img class="iconwavegif" src="./icon/wave.gif" alt=""></div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time">${topSong[index].time}</div>
    </div>`
        } else {
            listTopSong.innerHTML += `
        <div onclick="playTopSong(${index})" class="topSong" >
        <div class="topMusicLeft">
                <div class="topSong_rank">${Number(index)+1}</div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time">${topSong[index].time}</div>
    </div>`
        }
    } else {
        listTopSong.innerHTML += `
        <div onclick="playTopSong(${index})" class="topSong" >
        <div class="topMusicLeft">
                <div class="topSong_rank">${Number(index)+1}</div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time">${topSong[index].time}</div>
    </div>`
    }
    }
}
renderTopSong();

function replaceAtributeTopSong(){
    song.setAttribute("src",`./musics/${topSong[topSongIndex].nameFile}`);
    miniArtist.textContent = `${topSong[topSongIndex].nameArtist}`;
    miniTitle.textContent = `${topSong[topSongIndex].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${topSong[topSongIndex].img}`);
    playThumb.setAttribute("src",`./img/${topSong[topSongIndex].img}`);
}
replaceAtributeTopSong();

function renderRecentSong(artist,stt){
    recentPlayedTitle.textContent = `Top song of singer`;
    listArtistItem[stt].classList.add('recentPlayed_clicked');
    listArtistitemIconRunning[stt].innerHTML = '<img class="iconwavegif listArtist_item-icongift" src="./icon/list.gif" alt="">';
    recentSong.innerHTML = '';
    var i=-1;
    for ( var index in listSongOf){
        if(artist == listSongOf[index].artist){
            i++;
            recentSong.innerHTML += `
            <div class="recentPlayed_item recentPlayed_item${i}" onclick="playMusicOf(${index},${i})">
                    <div class="recentPlayed_item-img">
                        <img class="recentPlayed_item-img" src="./img/${listSongOf[index].img}" alt="">
                    </div>
                    <div class="recentPlayed_item-nameSong">
                        ${listSongOf[index].nameSong}
                    </div>
                    <!-- <div class="recentPlayed_item-artist">
                        SON TUNG
                    </div> --!>
                </div>
            `
        }
    } 

    
}
var currentNum;
var indexRecentSongPlaying;
let isRecentSongPlaying = true;
function playMusicOf(num,i){
    indexRecentSongPlaying=i;
    currentNum = num;
    isTopSongPlaying = false;
    isAnotherSongPlaying = false;
    removeWhiteBackground(0);
    recentPlayedItem = document.querySelectorAll('.recentPlayed_item');
    for( var index1 =0;index1< recentPlayedItem.length; index1++ ){
        if( recentPlayedItem[index1].classList.contains('recentPlayed_item_clicked'))
    recentPlayedItem[index1].classList.remove('recentPlayed_item_clicked');
    }
    recentPlayedItem[i].classList.add('recentPlayed_item_clicked');
    renderTopSong();
    song.setAttribute("src",`./musics/${listSongOf[num].nameFile}`);
    miniArtist.textContent = `${listSongOf[num].nameArtist}`;
    miniTitle.textContent = `${listSongOf[num].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${listSongOf[num].img}`);
    playThumb.setAttribute("src",`./img/${listSongOf[num].img}`);
    isPlaying =true;
    playMusic();
}


renderRecentSong('sontung',0);
var listArtistIndex = 0;
var nameArtistIndex ;
function renderListMusicOf(nameArtist,stt){
    nameArtistIndex = nameArtist;
    listArtistIndex = stt;
    for ( var i=0; i< listArtistItem.length ; i++){
        if(listArtistItem[i].classList.contains('recentPlayed_clicked')) 
        listArtistItem[i].classList.remove('recentPlayed_clicked');
        listArtistitemIconRunning[i].innerHTML = '';
    }
    renderRecentSong(nameArtist,stt);
}

// change volume //
function changevolume(amount)
    {
        console.log(amount/100)
        let count = amount/100;
        song.volume = count;
    }

isMute = false;
function muteVol(){
    if( isMute ) {
        volIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
        isMute = false;
        changevolume(volRange.value);
    } else
    {
    volIcon.innerHTML = '<i class="fa-solid fa-volume-slash"></i>'
    isMute = true; 
    changevolume(0);
    }
}
// end code change volume

// code render another song
let arrayAdd = [];
function checkValue(num){
    var dem= true;
    for ( var i = 0 ; i < arrayAdd.length ; i++){
        if( arrayAdd[i] == num ) dem = false;
    }
    return dem;
}
function pushArray(){
    // for ( var i = 0 ; i < topSong.length ; i++ ){
    //     var termpValue = Math.floor(Math.random()* listSongOf.length);
    //     if ( checkValue(termpValue)) {
    //         arrayAdd.push(termpValue);
    //         if(arrayAdd.length == 5 ) {
    //             break;
    //         }
    //     } else i =0;
    // }
    while( arrayAdd.length <5 ){
        var termpValue = Math.floor(Math.random()* listSongOf.length);
        if ( checkValue(termpValue)) {
            arrayAdd.push(termpValue);
    }
}
}
function renderAnotherSong(){
    arrayAdd = [];
    pushArray();
    console.log(arrayAdd);
    anotherSong.innerHTML = '';
    for ( var i = 0 ; i < arrayAdd.length ; i++){
        anotherSong.innerHTML += `
        <div class="anotherSong_item" onclick="playAnotherSong(${arrayAdd[i]},${i})">
                    <div class="anotherSong_item-img"><img class="anotherSong_item-img" src="./img/${listSongOf[arrayAdd[i]].img}" alt=""></div>
                    <div class="anotherSong_item-name">
                        <span class="anotherSong_item-nameSong">${listSongOf[arrayAdd[i]].nameSong}</span>
                        <span class="anotherSong_item-nameArtist">${listSongOf[arrayAdd[i]].nameArtist}</span>
                    </div>
                    <div class="anotherSong_item-iconRunning"></div>
                </div>
        `
    }
}
let isAnotherSongPlaying = true;
renderAnotherSong();

let anotherSongItem = document.querySelectorAll('.anotherSong_item');
function removeWhiteBackground(i){
    
    for ( var index1 = 0 ; index1 < anotherSongItem.length ; index1++){
        if ( anotherSongItem[index1].classList.contains('anotherSong_item-clicked'))
        anotherSongItem[index1].classList.remove('anotherSong_item-clicked');
    }
    if ( isAnotherSongPlaying)
    anotherSongItem[i].classList.add('anotherSong_item-clicked');
}

let iOfAnotherSong;
let indexOfAnotherSong;
function playAnotherSong(index,i){
    iOfAnotherSong = i;
    console.log(iOfAnotherSong);
    indexOfAnotherSong = index;
    renderRecentSong('sontung',0);
    isAnotherSongPlaying = true;
    isTopSongPlaying = false;
    renderTopSong();
    removeWhiteBackground(i);
    song.setAttribute("src",`./musics/${listSongOf[index].nameFile}`);
    miniArtist.textContent = `${listSongOf[index].nameArtist}`;
    miniTitle.textContent = `${listSongOf[index].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${listSongOf[index].img}`);
    playThumb.setAttribute("src",`./img/${listSongOf[index].img}`);
    isPlaying =true;
    playMusic();
}
