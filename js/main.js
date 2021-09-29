var elInfoList = document.querySelector('.info__list'),
    elInfoBtn = document.querySelector('.info__btn'),
    elResultList = document.querySelector('.result__list');
var elInfoItem,
    elResultItem;

function translateDictionary (elInfoItem, elResultItem, dictionary, translate ) {
    elInfoItem = document.createElement('li');
    elInfoItem.setAttribute('class', 'info__item');
    elResultItem = document.createElement('li');
    elResultItem.setAttribute('class', 'result__item');
    elInfoItem.textContent = `${dictionary} - ${translate}`;
    elResultItem.textContent = `${translate} - ${dictionary}`;
    return elInfoList.appendChild(elInfoItem), elResultList.appendChild(elResultItem);
}

var rec = new webkitSpeechRecognition();

rec.lang = 'uz-UZ';

elInfoBtn.addEventListener('click', function () {
    rec.start();
})

rec.onend = function () {
    console.log('Ovoz yozib olish tugadi. Qayta ishlatish uchun Submit tugmasimi bosing!!!');
}

rec.onresult = function (evt) {
    var sound = evt.results[0][0].transcript;   
    console.log(sound);
    if (sound === 'kitob') {
        translateDictionary (elInfoItem, elResultItem, sound, 'book');
    }
    else if (sound === 'mushuk') {
        translateDictionary (elInfoItem, elResultItem, sound, 'cat');
    }
    else if (sound === 'it') {
        translateDictionary (elInfoItem, elResultItem, sound, 'dog');
    }
    else if (sound === 'natija') {
        translateDictionary (elInfoItem, elResultItem, sound, 'result');
    }
    else if (sound === 'yozmoq') {
        translateDictionary (elInfoItem, elResultItem, sound, 'write');
    }
    else if (sound === 'salom') {
        translateDictionary (elInfoItem, elResultItem, sound, 'hello');
    }
    else if (sound === 'dunyo') {
        translateDictionary (elInfoItem, elResultItem, sound, 'world');
    }
}

