setInterval(function() {
    var url=document.querySelector("a.interlanguage-link-target[lang='en']").href;
    window.location.assign(url);
}, 100);

