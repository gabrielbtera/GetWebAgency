$(document).ready(function () {
    // progress bar
    
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [60, 254, 32, 5243];
        let c = 65;
        for (let toCircle = 0; toCircle < 4; toCircle++){

            let container = document.getElementById("circle" + String.fromCharCode(c));

            let circle = new ProgressBar.Circle(container, {
                color : '#00a2ff',
                strokeWidth: 8,
                duration: duration[toCircle],
                from: {color: '#AAA'},
                to: {color: '#00a2ff'},
                step: function(state, circle){
                    circle.path.setAttribute('stroke', state.color);
                    let value = Math.round(circle.value() * number[toCircle]);
                    circle.setText(value);
                }

            });
            circle.animate(1.0);
            c ++;
        }
    }

    // referencial scroll
    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();
        
        if (scroll > (dataAreaOffset.top - 700) && stop  == 0){
            animationData();
            stop++;
        }
    });


    // parallax

    setTimeout(function() {
        $("#data-area").parallax({imageSrc: 'img/cidadeparallax.png'});
    }, 250);


});