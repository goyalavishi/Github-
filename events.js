AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        animatedMarker.addEventListener('click', function(ev, target){
            
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("click Detected");
                const rotation = aEntity.getAttribute('rotation');
                Object.keys(rotation).forEach((key) => rotation[key] = rotation[key]+90);
                aEntity.setAttribute('rotation', rotation);
            }
        });
}});

