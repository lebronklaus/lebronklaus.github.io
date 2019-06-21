var thumbnail_sl = "?imageView2/2/w/400/h/400/q/75|imageslim"
var thumbnail_rules = "?imageMogr2/auto-orient/blur/1x0/quality/75|watermark/2/text/YnkgeGl1aGFv/font/5a6L5L2T/fontsize/2000/fill/I0Y2RjJGMg==/dissolve/100/gravity/SouthEast/dx/100/dy/96|imageslim"
var default_url = "http://psypximv7.bkt.clouddn.com"

$(document).ready(function(){
    //spring data
    var spring_urls = image_json.spring;
    var spring_html = '';    
    for(i = 0;i < spring_urls.length;i++){
        spring_urls[i].url = default_url + "/spring/"+spring_urls[i].suffix+".jpg";
        spring_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(spring_urls[i].url+thumbnail_sl,spring_urls[i].description,spring_urls[i].description,spring_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("spring-div").innerHTML = spring_html;
    
    //summer data
    var summer_urls = image_json.summer;
    var summer_html = '';
    for(i = 0;i < summer_urls.length;i++){
        summer_urls[i].url = default_url + "/summer/"+summer_urls[i].suffix+".jpg";
        summer_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(summer_urls[i].url+thumbnail_sl,summer_urls[i].description,summer_urls[i].description,summer_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("summer-div").innerHTML = summer_html;

    //autumn data
    var autumn_urls = image_json.autumn;
    var autumn_html = '';
    for(i = 0;i < autumn_urls.length;i++){
        autumn_urls[i].url = default_url + "/autumn/"+autumn_urls[i].suffix+".jpg";
        autumn_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(autumn_urls[i].url+thumbnail_sl,autumn_urls[i].description,autumn_urls[i].description,autumn_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("autumn-div").innerHTML = autumn_html;

    //winter data
    var winter_urls = image_json.winter;
    var winter_html = '';
    for(i = 0;i < winter_urls.length;i++){
        winter_urls[i].url = default_url + "/winter/"+winter_urls[i].suffix+".jpg";
        winter_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(winter_urls[i].url+thumbnail_sl,winter_urls[i].description,winter_urls[i].description,winter_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("winter-div").innerHTML = winter_html;

    //arch data
    var architecture_urls = image_json.architecture;
    var architecture_html = '';
    for(i = 0;i < architecture_urls.length;i++){
        architecture_urls[i].url = default_url + "/architecture/"+architecture_urls[i].suffix+".jpg";
        architecture_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(architecture_urls[i].url+thumbnail_sl,architecture_urls[i].description,architecture_urls[i].description,architecture_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("arch-div").innerHTML = architecture_html;
})

function load_summer() {
    var summer_urls = image_json.summer;
    var summer_html = '';
    for(i = 0;i < summer_urls.length;i++){
        summer_urls[i].url = default_url + "/summer/"+summer_urls[i].suffix+".jpg";
        summer_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(summer_urls[i].url+thumbnail_sl,summer_urls[i].description,summer_urls[i].description,summer_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("summer-div").innerHTML = summer_html;
    
}

function load_autumn() {
    var autumn_urls = image_json.autumn;
    var autumn_html = '';
    for(i = 0;i < autumn_urls.length;i++){
        autumn_urls[i].url = default_url + "/autumn/"+autumn_urls[i].suffix+".jpg";
        autumn_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(autumn_urls[i].url+thumbnail_sl,autumn_urls[i].description,autumn_urls[i].description,autumn_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("autumn-div").innerHTML = autumn_html;
    
}

function load_winter() {
    var winter_urls = image_json.winter;
    var winter_html = '';
    for(i = 0;i < winter_urls.length;i++){
        winter_urls[i].url = default_url + "/winter/"+winter_urls[i].suffix+".jpg";
        winter_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(winter_urls[i].url+thumbnail_sl,winter_urls[i].description,winter_urls[i].description,winter_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("winter-div").innerHTML = winter_html;
    
}

function load_arch() {
    var architecture_urls = image_json.architecture;
    var architecture_html = '';
    for(i = 0;i < architecture_urls.length;i++){
        architecture_urls[i].url = default_url + "/architecture/"+architecture_urls[i].suffix+".jpg";
        architecture_html += '<div class="grid-item"><figure class="effect-bubba"><img src=%{0}% alt="%{1}%" class="img-fluid tm-img"><figcaption><p class="tm-figure-description">%{2}%</p><a href=%{3}%>View more</a></figcaption></figure></div>'.format(architecture_urls[i].url+thumbnail_sl,architecture_urls[i].description,architecture_urls[i].description,architecture_urls[i].url+thumbnail_rules) 
    }
    document.getElementById("arch-div").innerHTML = architecture_html;
    
}



