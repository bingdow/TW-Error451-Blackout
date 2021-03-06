//套上CSS樣式
(function() {
var blackout_css = document.createElement("style");
var blackout_css_content = document.createTextNode(
    "#blackout * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}" + 
    "#blackout { background-color: #3C261C; background-image: url(http://moztw.org/events/blackout/blackout-background.jpg); background-repeat: no-repeat; background-size: cover; font-size: 16px; height: 100%; left: 0; margin: 0; overflow: hidden; position: fixed; text-align: left; top: 0; -webkit-transition: top 0.8s; transition: top 0.8s; width: 100%; z-index: 99999; }" +
    "#blackout.out { top: -150%; }" + 
    "#blackout section { background: rgba(0, 0, 0, 0.2); border-radius: 1em; color: white; line-height: 1.5em; margin: 5% auto 3%; max-height: 70%; max-width: 750px; overflow-y: auto; padding: 3%; text-shadow: 1px 3px 3px black; width: 75%; }" + 
    "#blackout p { color: white; line-height: 1.5em; text-shadow: 1px 3px 3px black; }" + 
    "#blackout h1 { border-bottom: 1px solid #CCC; color: white; font-family: sans-serif; font-size: 1.5em; font-weight: bold; line-height: 1.5em; margin: 0 0 1em 0.25em; padding: 0 0 0.25em; }" + 
    "#blackout a { color: #CCC; text-decoration: underline; } #blackout a:hover { background: transparent; color: #EEEEEE; text-decoration: underline; }" +
    "#blackout .anno { color: #BBB; font-size: 0.9em; margin-bottom: 1.5em; padding: 0 2em; text-shadow: 1px 1px 1px black;}" +
    "#blackout footer { display: block; height: 20%; text-align: center; } " +
    "#blackout .blackout-btn { background-color: black; border-radius: 8px; box-shadow: 0 0 15px white; color: white; display: inline-block; line-height: 1.5em; padding: 0.5em 1em; text-decoration: none; }" + 
    "#blackout .blackout-btn:hover { background-color: #333; color: white; text-decoration: none; }"
);
blackout_css.appendChild(blackout_css_content);

//騰寫抗議內容
    var header = document.createElement("header");
    var title = document.createElement("h1");
    title.appendChild(document.createTextNode("本網頁基於國家法律而封鎖"));
    header.appendChild(title);

    var section = document.createElement("section");
    section.appendChild(header);

    var br = document.createElement("br");    

    var content2 = document.createElement("p");  
    content2.setAttribute("class", "anno");
    content2.appendChild(document.createTextNode("聲明：針對日前中華民國經濟部智慧財產局宣布研擬網路封鎖法案，針對境外侵權網站，令網路服務提供者（ISP）予以直接封鎖乙事，本網站表示強烈反對。並呼籲政府單位停止研擬任何類及 SOPA 的法案，以維護祕密通訊與言論自由。"));

//    var content1 = document.createElement("p");
//    content1.appendChild(document.createTextNode("為何看到這個畫面？"));

    var content3 = document.createElement("p");    
    content3.appendChild(document.createTextNode("你知道嗎，政府正打算立法，取得逕自封鎖境外侵權網站的權利。未來本站如果出現利益團體認定的侵權內容，經由政府機關對中華電信等 ISP 下令，就可以封鎖本站，讓你再也連不上。"));
    var content31 = document.createElement("p");    
    content31.appendChild(document.createTextNode("如果我們同意提供政府這種權力，以後他們還能以各種理由，任意阻擋他們覺得「不適當」的網站。未來許多網站可能被迫自我審查，在你發言的同時，先看看有沒有「敏感詞」。"));

    var error451a = document.createElement("a");
    error451a.setAttribute("href", "http://binb.tw/?p=407");
    error451a.setAttribute("target", "_blank");    
    error451a.appendChild(document.createTextNode("ERROR 451 錯誤頁面"));

    var content4 = document.createElement("p");    
    content4.appendChild(document.createTextNode("我們不希望這種事情也在台灣發生，請您與我們一同反對政府將手伸進網路！如果你我不積極爭取，有一天，你將會看到如此 "));
    content4.appendChild(error451a);
    content4.appendChild(document.createTextNode("，真正阻擋了你的瀏覽。"));

    var content5 = document.createElement("p");
    content5.appendChild(document.createTextNode("請加入："));

    var content5_content_a = document.createElement("a");
    content5_content_a.setAttribute("href", "http://taiwanfreeandopen.blogspot.tw/");
    content5_content_a.setAttribute("target", "_blank");
    content5_content_a.appendChild(document.createTextNode("#freeandopen 斷然反對鎖國！堅決主張百分之百的網路自由！"));
    content5.appendChild(content5_content_a);
    
    section.appendChild(content2);
//    section.appendChild(content1);
    section.appendChild(content3);
    section.appendChild(content31);
    section.appendChild(content4);
    section.appendChild(content5);

    var footer = document.createElement("footer");
    var footer_content_close = document.createElement("a");
    footer_content_close.setAttribute("href", "javascript:void(0)");
    footer_content_close.setAttribute("class", "blackout-btn");
    footer_content_close.setAttribute("onclick", "document.getElementById('blackout').className = document.getElementById('blackout').className+' out';");
    footer_content_close.appendChild(document.createTextNode("繼續瀏覽網頁"));
    footer.appendChild(footer_content_close);

//建立抗議內容到#blackout區塊
function showBlackout()
{
    var element = document.createElement("div");
    element.id = 'blackout';
    element.appendChild(blackout_css);
    element.appendChild(section);
    element.appendChild(footer);
    document.body.appendChild(element);
}

if (window.addEventListener)
    window.addEventListener('load', function(){ showBlackout() }, false);
else if (window.attachEvent)
    window.attachEvent('on' + 'load', function(){ showBlackout() });
})();
