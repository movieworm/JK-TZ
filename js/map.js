let center = [44.990503666193966, 38.92912536123083]
function init() {
    let map = new ymaps.Map('map', {
        center: [44.990503666193966, 38.92912536123083],
        zoom: 16
    });

    let jk = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(jk);
}

ymaps.ready(init);