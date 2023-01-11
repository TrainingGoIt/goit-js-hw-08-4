import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";


const onPlay = function (data) {
    const time = data.seconds;
    localStorage.setItem(CURRENT_TIME, JSON.stringify(time))
};

player.on('timeupdate', throttle(onPlay, 1000));  


const currentTime = localStorage.getItem(CURRENT_TIME);
    //console.log(currentTime)
 player.setCurrentTime(currentTime).then(function (seconds) {
        }).catch(function(error) {
        switch (error.name) {
        case 'RangeError':
        
            break;

        default:
      
            break;
            }
        });  

//    Напиши скрипт, який буде зберігати
//      поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки,
//     продовжувати відтворювати відео з цього часу.

// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище.Нехай ключем для сховища буде рядок
// "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення
//  відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у
//  сховищі не частіше, ніж раз на секунду.