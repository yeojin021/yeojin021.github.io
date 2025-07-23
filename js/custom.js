$(function () {
    const tl = gsap.timeline();


    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'training', 'design', 'profile'],
        easing: 'linear',
        fixedElements: '#header, #footer',

        afterLoad: function (_, idx) {
            $('#header .gnb>ul>li').removeClass('on');
            $('#header .gnb>ul>li').eq(idx - 1).addClass('on');


            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');

            if (idx == 1) {
                $('#footer .to_top').removeClass('on')
            } else {
                $('#footer .to_top').addClass('on')

            }

        },

    });



    $('#header .cover_btn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');

    });
    // 메뉴에서 클릭하면 그 페이지로 이동시키는거 
    $('#header .cover ul>li>a').on('click', function () {
        $('#header .cover_btn').removeClass('on');
        $('#header .cover').removeClass('on');
    });

    //  메뉴에서 스크롤안먹히게하는거
    $('#header .cover').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })

    $('.design .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('.design .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('.design .tab_content .itm').removeClass('on')
        $('.design .tab_content .itm').eq(idx).addClass('on')
    });
});

$(function () {

    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

});


$(function () {
    particlesJS("bg", {
        particles: {
            number: {
                // value: 80,
                value: 400,
                density: {
                    enable: true,
                    value_area: 2000,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#fff",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 0,
                color: "#ffffff",
                opacity: 0,
                width: 0,
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
});