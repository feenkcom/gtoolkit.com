$(document).ready(function () {
    window.twttr = (function (id) {
        var js, fjs = document.getElementsByTagName("script")[0],
            twitter = window.twttr || {};
        js = document.createElement("script");
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        twitter._e = [];
        twitter.ready = function (f) {
            twitter._e.push(f);
        };

        return twitter;
    }("twitter-timeline"));
});