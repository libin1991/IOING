define(function (require, module, exports) {

    module.exports = {
        resources : {
            source : {
                index: "index.html"
            },
            data : { 
                list: [
                    "#18YearOldMeWouldSay",
                    "#ComicConFoods",
                    "#TheBachelorette",
                    "Poor Dean",
                    "#BadFallbackCareers",
                    "#DaytimeDivas",
                    "Jason Jordan",
                    "#UnlikelyFamilyTraditions",
                    "#StitchersChat",
                    "#GIRL2017",
                    "#AmericanNinjaWarrior",
                    "Tropical Storm Don",
                    "#SweetHomeOklahoma"
                ]
            }
        },
        config : {
            level : 13,
            absolute : true,
            background : "#fff",
            source: ["index"],
            data: ["list"],
            sandbox : true,
            preview : true,
            animation : 'fade'
        },
        helper : {
            urlJoin: function (url) {
                url = url.replace(/\-\-\-/ig, function () {
                    return '/'
                })

                return url
            }
        }
    }
})