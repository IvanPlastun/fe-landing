function init() {
    ymaps.ready(() => {
        const yandexMap = new ymaps.Map("YMap", {
            controls: ["geolocationControl", "routeButtonControl", "typeSelector", "zoomControl"],
            center: [-7.451963, 112.708840],
            zoom: 14
        })

        const placeMark = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [-7.451963, 112.708840]
            }
        })

        const iconPlaceMark = new ymaps.Placemark([-7.451963, 112.708840], {}, {
            iconLayout: "default#image",
            iconImageHref: '../img/svg/geolocation.svg'
        })

        yandexMap.geoObjects.add(iconPlaceMark)
    })
}

export default init