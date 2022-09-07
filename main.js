
var listTopSong = document.querySelector('.topMusic_item--song');
var checkKey = document.getElementById('allPage');
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
let repeat = document.querySelector('.replay');
let volRange = document.getElementById('volRange');
let volIcon = document.querySelector('.playerBar_item-vol--icon');
let anotherSong = document.querySelector('.anotherSong');
let mobile = false
let iconRandom = document.querySelector('.random');
if ( screen.width < 740) mobile = true;
setInterval(autoNextTopSong,500);
setInterval(displayTimer, 500);
//setInterval(renderTopSong, 500);


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
    {
        nameSong:'Shay nắng',
        nameArtist:'Amee',
        nameFile:'amee/shaynang.mp3',
        time:'3:28',
        img:'amee/shaynang.jpg',
        
    },
    {
        nameSong:'Năm ấy',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/namay.mp3',
        time:'4:20',
        img:'ducphuc/namay.jpg',
        
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
    },
    {
        nameSong:'Khác biệt to lớn',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/khacbiettolon.mp3',
        img:'ttbinh/khacbiettolon.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Vỡ tan',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/votan.mp3',
        img:'ttbinh/votan.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Người ấy',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/nguoiay.mp3',
        img:'ttbinh/nguoiay.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Em ngủ chưa',
        nameArtist:'Trịnh Thăng Bình',
        nameFile:'ttbinh/emnguchua.mp3',
        img:'ttbinh/emnguchua.jpg',
        artist:'ttbinh'
    },
    {
        nameSong:'Trái đất đẹp nhất khi có em',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/traidatdepnhatkhicoem.mp3',
        img:'ducphuc/traidatdepnhatkhicoem.jfif',
        artist:'ducphuc'
    },
    {
        nameSong:'Năm ấy',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/namay.mp3',
        img:'ducphuc/namay.jpg',
        artist:'ducphuc'
    },
    {
        nameSong:'Ngày đầu tiên',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/ngaydautien.mp3',
        img:'ducphuc/ngaydautien.jpg',
        artist:'ducphuc'
    },
    {
        nameSong:'Gửi ngàn lời yêu',
        nameArtist:'Đức phúc',
        nameFile:'ducphuc/guinganloiyeu.mp3',
        img:'ducphuc/guinganloiyeu.jpg',
        artist:'ducphuc'
    }

]
song.setAttribute("src",`./musics/${topSong[topSongIndex].nameFile}`);

playBtn.addEventListener('click', playMusic);
function playMusic(){
    if(isPlaying){
        if( topSongThumb.classList.contains('rotatePause')) topSongThumb.classList.remove('rotatePause');
        topSongThumb.classList.add('rotatePlay');
        song.play();
        playBtn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-pause"></i>`;
        isPlaying = false;
    } else {
        
        song.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
        isPlaying = true;
        if( topSongThumb.classList.contains('rotatePlay')) topSongThumb.classList.remove('rotatePlay');
        topSongThumb.classList.add('rotatePause');
        setTimeout(function() {
            topSongThumb.classList.remove('rotatePause');
            },500)
    }
}
backWard.addEventListener('click',backMusic);
forWard.addEventListener('click',nextMusic);
let termp;
function nextMusic(){
    isRandom = true;
    randomMusic();
    if( isTopSongPlaying ){
        topSongIndex++;
        if ( topSongIndex == topSong.length)
            topSongIndex =0;
            itemTopSong[topSongIndex].scrollIntoView({behavior: "smooth", block: "center"});
        
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
                if(iOfAnotherSong == lengthOfarrayAdd) {
                    iOfAnotherSong =0;
                    playAnotherSong(arrayAdd[0],iOfAnotherSong);
                }
                else  playAnotherSong(arrayAdd[num++],iOfAnotherSong);
                break;
            }
        }
        
    } else {
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
    isRandom = true;
    randomMusic();
    if( isTopSongPlaying ){
        topSongIndex--;
        if ( topSongIndex <0) topSongIndex = topSong.length -1;
        itemTopSong[topSongIndex].scrollIntoView({behavior: "smooth", block: "center"});
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
        if (currentNum < 0 ) currentNum = 0;
            console.log(currentNum)
// renderListMusicOf(listArtistIndex,nameArtistIndex);
        if ( listSongOf[currentNum].artist == listSongOf[currentNum2].artist) //chỗ này currentNum đã được tăng giá trị
        {   
            
            
            // currentNum++;
            // listArtistIndex++;
            // indexRecentSongPlaying=0;
            playMusicOf(currentNum,indexRecentSongPlaying);
        } else {

            indexRecentSongPlaying=3;
            if ( listArtistIndex >= 0) {listArtistIndex--;
            renderListMusicOf(listSongOf[currentNum].artist,listArtistIndex);
            playMusicOf(currentNum,indexRecentSongPlaying);
            }
            // currentNum++;
        }
    }
}

let listRandom = [];
function randomNewMusic(){

    while( listRandom.length < listSongOf.length ){
        var termpValue = Math.floor(Math.random()* listSongOf.length);
        if ( checkValue(termpValue),listRandom) {
            listRandom.push(termpValue);
        }
    }
    console.log(listRandom);
}
var indexRandm = 0;
function runRandomList(){
    if( indexRandm == listRandom.length) indexRandm=0;
    song.setAttribute("src",`./musics/${listSongOf[listRandom[indexRandm]].nameFile}`);
    miniArtist.textContent = `${listSongOf[listRandom[indexRandm]].nameArtist}`;
    miniTitle.textContent = `${listSongOf[listRandom[indexRandm]].nameSong}`;
    topSongThumb.setAttribute("src",`./img/${listSongOf[listRandom[indexRandm]].img}`);
    playThumb.setAttribute("src",`./img/${listSongOf[listRandom[indexRandm]].img}`);
    isPlaying =true;
    playMusic();
    indexRandm++;
}
let isRepeat = false;
let isRandom = false;
repeat.addEventListener('click',repeatMusic);
iconRandom.addEventListener('click',randomMusic);
function randomMusic(){
    if( isRandom == false ) {
        listRandom= [];
        isRepeat = true;
        isRandom = true;
        repeatMusic();
        iconRandom.style.color = 'green';
        randomNewMusic();
        isTopSongPlaying = false;
        renderTopSong();
    } else {
        isRandom = false;
        iconRandom.style.color = 'black';
        isTopSongPlaying = true;

    }
    
}
function repeatMusic(){
    if ( isRepeat == false ){
        isRepeat = true;
        repeat.setAttribute("style",`color:green`);
    } else {
        isRepeat = false;
        repeat.setAttribute("style",`color:black`);

    }
    
}


function playTopSong(index){
    console.log("hii");
    itemTopSong[index].scrollIntoView({behavior: "smooth", block: "center"});
    isAnotherSongPlaying = false;
    removeWhiteBackground(0);
    renderListMusicOf('sontung',0);
    isTopSongPlaying = true;
    topSongIndex = index;
    replaceAtributeTopSong();
    isPlaying = true;
    playMusic();
    renderTopSong();
}
function autoNextTopSong(){
    if(isRepeat == false && isRandom == false ){
    if( song.currentTime == song.duration){
            nextMusic();    
        } 
    } else if( isRepeat){
        if( song.currentTime >= song.duration -1 ) {
            console.log("hi");
            song.currentTime = 0;
        }
    } else if ( isRandom ){
        if( song.currentTime == song.duration){
        console.log(indexRandm);
        runRandomList();
        }
    } 
}

var seekbar = document.querySelector('.seekbar')
song.ontimeupdate = function () { seekbar.value = song.currentTime }
handleSeekBar = function () { song.currentTime = seekbar.value }


function displayTimer(){
    seekbar.min = 0;
    seekbar.max = song.duration;
    curtime.textContent = formatTimer(song.currentTime);
    durtime.textContent = formatTimer(song.duration);
}
function formatTimer(num){
    var min = Math.floor( num /60);
    var sec = Math.floor( num - min*60);
    if ( sec < 10) return `${min}:0${sec}`
    else return `${min}:${sec}`
}
// songBar.addEventListener('change',changeBar);
function changeBar(){
    song.currentTime =songBar.value ;
}var itemTopSong =[];
function renderTopSong(){
    listTopSong.innerHTML = '';
    for( var index= 0; index< topSong.length ; index++ ){
        if (isTopSongPlaying){
    if (index == topSongIndex){
        
        listTopSong.innerHTML += `
        <div onclick="playTopSong(${index}),centerScroll(${index})" class="topSong" style="background-color:white">
        <div class="topMusicLeft">
                <div class="topSong_rank"><img class="iconwavegif" src="./icon/wave.gif" alt=""></div>
                <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time" style="color:black">${topSong[index].time}</div>
    </div>`
        } else {
            listTopSong.innerHTML += `
        <div onclick="playTopSong(${index}),centerScroll(${index})" class="topSong" >
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
    itemTopSong = document.querySelectorAll('.topSong');
    console.log(itemTopSong);
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
                    <div class="recentPlayed_item-img1">
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
    recentPlayedItem = document.querySelectorAll('.recentPlayed_item-img');
    for( var index1 =0;index1< recentPlayedItem.length; index1++ ){
        if( recentPlayedItem[index1].classList.contains('recentPlayed_item-img_clicked'))
    recentPlayedItem[index1].classList.remove('recentPlayed_item-img_clicked');
    }
    recentPlayedItem[i].classList.add('recentPlayed_item-img_clicked');
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
let lengthOfarrayAdd = 0;
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
    if ( mobile ){ lengthOfarrayAdd = 8} else lengthOfarrayAdd = 4;
    while( arrayAdd.length <lengthOfarrayAdd ){
        var termpValue = Math.floor(Math.random()* listSongOf.length);
        if ( checkValue(termpValue),arrayAdd) {
            arrayAdd.push(termpValue);
        }
    }
}
function renderAnotherSong(){
    arrayAdd = [];
    pushArray();
    anotherSong.innerHTML = '';
    for ( var i = 0 ; i < arrayAdd.length ; i++){
        anotherSong.innerHTML += `
        <div class="anotherSong_item" onclick="playAnotherSong(${arrayAdd[i]},${i})">
                    <div class="anotherSong_item-img"><img class="anotherSong_item-img" src="./img/${listSongOf[arrayAdd[i]].img}" alt=""></div>
                    <div class="anotherSong_item-name">
                        <span class="anotherSong_item-nameSong">${listSongOf[arrayAdd[i]].nameSong}</span>
                    <div class="anotherSong_item-name2">
                    <span class="anotherSong_item-nameArtist">${listSongOf[arrayAdd[i]].nameArtist}</span>
                    <div class="iconPlaying"></div> </div>
                    </div>
                    <div class="anotherSong_item-iconRunning"></div>
                </div>
        `
    }
}
let isAnotherSongPlaying = true;
renderAnotherSong();

let anotherSongItem = document.querySelectorAll('.anotherSong_item');
let iconPlaying = document.querySelectorAll('.iconPlaying');
function removeWhiteBackground(i){
    
    for ( var index1 = 0 ; index1 < anotherSongItem.length ; index1++){
        if ( anotherSongItem[index1].classList.contains('anotherSong_item-clicked'))
        anotherSongItem[index1].classList.remove('anotherSong_item-clicked');
        iconPlaying[index1].innerHTML = '';
    }
    if ( isAnotherSongPlaying )
    {
        iconPlaying[i].innerHTML = '<img class="iconwavegif" src="./icon/wave.gif" alt="">';
        anotherSongItem[i].classList.add('anotherSong_item-clicked');
    }
}

let iOfAnotherSong;
let indexOfAnotherSong;

function playAnotherSong(index,i){
    if( mobile ) {
        anotherSongItem[i].scrollIntoView({behavior: "smooth", block: "center"});
   // loop.classList.remove('active');
    }
    iOfAnotherSong = i;
    console.log(iOfAnotherSong);
    indexOfAnotherSong = index;
    renderListMusicOf('sontung',0);
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
