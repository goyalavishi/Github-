AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#parkingMarker");
        const aEntity = document.querySelector("#parkingHero");

        animatedMarker.addEventListener('click', function(ev, target){
            console.log("click Detected");
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("click Detected");
                const rotation = aEntity.getAttribute('rotation');
                Object.keys(rotation).forEach((key) => rotation[key] = rotation[key]+90);
                aEntity.setAttribute('rotation', rotation);
            }
        });
}});

