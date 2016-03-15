document.addEventListener("DOMContentLoaded", init);    

function init(ev){
    var pl = document.querySelectorAll(".page-link");
    [].forEach.call(pl,function(obj, index){
        var mc = new Hammer(obj);
        mc.on("tap",navigate);
    });
    var pages = document.querySelectorAll("[data-role=page]");
    [].forEach.call(pages, function(obj, index){
        obj.className = "inactive-page";
    });
}

function navigate(ev){
    ev.preventDefault();
    var href = ev.target.href;
    var id = href.split("#")[1];
    
    var pages = document.querySelectorAll("[data-role=page]");
    [].forEach.call(pages, function(obj, index){
        if(obj.id ==id){
            if(obj.className != "active-page"){
                obj.className = "active-page";
            }
        }else{
            if(obj.className != "inactive-page"){
                obj.className = "inactive-page";
            }
        }
        obj.addEventListener("animationed", doneAnimating);
        });
}
                             
function doneAnimating(ev){
        var page = ev.target;
        if(page.className == "inactive-page"){
            page.classList.add("hidden");
        }else{
    page.classList.remove("hidden");
        }
    }