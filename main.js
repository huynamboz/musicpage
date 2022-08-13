
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
setInterval(autoNextTopSong,500);
setInterval(displayTimer, 500);
//setInterval(renderTopSong, 500);
var sontung = [
    {

        nameFile:'sontung/asairoi.mp3'
    },

]
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
    if(isTopSongPlaying){
    if( song.currentTime == song.duration){
    if( topSongIndex >= topSong.length) {
        topSongIndex = 0;
        replaceAtributeTopSong();
        isPlaying = true;
        playMusic();
        renderTopSong();
    } else {
        topSongIndex++;
        replaceAtributeTopSong();
        isPlaying = true;
        playMusic();
        renderTopSong();
    }
}
    }
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
    console.log(topSongThumb);
}
replaceAtributeTopSong();

function renderRecentSong(artist,stt){
    recentPlayedTitle.textContent = `Top nhạc của ca sĩ`;
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


function playMusicOf(num,i){
    isTopSongPlaying = false;
    recentPlayedItem = document.querySelectorAll('.recentPlayed_item');
    for( var index1 =0;index1< recentPlayedItem.length; index1++ ){
        if( recentPlayedItem[index1].classList.contains('recentPlayed_item_clicked'))
    recentPlayedItem[index1].classList.remove('recentPlayed_item_clicked');
    }
    
    recentPlayedItem[i].classList.add('recentPlayed_item_clicked');
    console.log(recentPlayedItem);
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
function renderListMusicOf(nameArtist,stt){
    for ( var i=0; i< listArtistItem.length ; i++){
        if(listArtistItem[i].classList.contains('recentPlayed_clicked')) 
        listArtistItem[i].classList.remove('recentPlayed_clicked');
        listArtistitemIconRunning[i].innerHTML = '';
    }
    renderRecentSong(nameArtist,stt);
}

