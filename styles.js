ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [51.662085, 39.201403],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "nextmap.json"
    }).done(function(data) {
        console.log(data);    
       objectManager.add(data);
        

        

       
        
    });

    

}

//Фильтрация объектов на карте: https://yandex.ru/dev/maps/jsbox/2.1/geoobjects_menu/