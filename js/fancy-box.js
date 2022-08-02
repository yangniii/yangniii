function setAtt() {
    let fancyimg = document.getElementsByTagName('img');
    for (let i = 0; i < fancyimg.length; i++) {
        fancyimg[i].setAttribute('data-fancybox', '');
        fancyimg[i].style.setProperty('cursor', 'pointer');
    }
}
document.addEventListener('DOMContentLoaded', setAtt, false)

Fancybox.bind('[data-fancybox]', {
    Toolbar: {
        display: [
        // 放大缩小下载等按钮
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        // "download",
        {id: "close", position: 'left'},
        // "thumbs",
        // 计数器
        // { id: "prev", position: "center" },
        // { id: "counter", position: "center" },
        // { id: "next", position: "center" },
        ],
    },
});


Fancybox.bind('[data-fancybox = gallery]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});

Fancybox.bind('[data-fancybox = galleryA]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});
Fancybox.bind('[data-fancybox = galleryB]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});
Fancybox.bind('[data-fancybox = galleryC]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});
Fancybox.bind('[data-fancybox = galleryD]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});
Fancybox.bind('[data-fancybox = galleryE]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});
Fancybox.bind('[data-fancybox = galleryF]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});
Fancybox.bind('[data-fancybox = galleryTest]', {
    Toolbar: {
        display: [
        {id: "zoom"},
        {id: "slideshow"},
        {id: "fullscreen"},
        {id: "close", position: 'left'},
        ],
    },
});