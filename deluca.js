document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#projects").addEventListener('click', () => {load_projects()});
    document.querySelector("#about").addEventListener('click', () => {load_about()});
    document.querySelector('#toggle-btn').addEventListener('click', () => {toggledm()})
    if (window.screen.availWidth > 850) {
    document.querySelectorAll(".img").forEach(img => {
        img.addEventListener("click", () => {
            scrollPosX = window.scrollX;
            scrollPosY = window.scrollY;
            window.scroll(0,1380);
            document.querySelector("#view-img").innerHTML = `<img src=${img.src}>`;
            document.querySelector("#view-img").animate([
                {opacity:0},
                {opacity:1}
            ], {
                duration: 500
            });
            document.querySelector("#main-content").style.filter = 'blur(10px)';
            document.querySelector("#view-img").addEventListener('click',() => {
                document.querySelector("#view-img").innerHTML = ``;
                document.querySelector("#main-content").style.filter = '';
                window.scroll(scrollPosX, scrollPosY);
            })
        })
    })
}
    window.scrollTo(0,0)
});

function load_projects() {
    window.scrollTo(0,0)
    document.querySelector("#projects-container").style.display = 'block';
    document.querySelector("#about-container").style.display = "none";
}

function load_about(){
    window.scrollTo(0,0)
    document.querySelector("#projects-container").style.display = 'none';
    document.querySelector("#about-container").style.display = "block";
}

function toggledm() {
    title = document.querySelector('#title');
    descy = document.querySelectorAll("#descy");

    src = document.querySelector('#toggle-btn').src;
    src = src.slice(-12);
    document.querySelector('#toggle-btn').animate([
        {opacity:0},
        {opacity:1}
    ], {
        duration: 500
    });
    if (src == '/img/sun.svg') {
        //Toggle Light Mode
        
        document.querySelector('#toggle-btn').src = 'img/moon.svg';
        document.querySelector('#toggle-btn').style.background = 'linear-gradient(145deg, #ffffff, #e1e1e1)';
        document.querySelector('#toggle-btn').style.boxShadow = '6px 6px 12px #d5d5d5,-6px -6px 12px #ffffff';
        document.querySelector("#nav-container").style.animation = 'switchToWhite 500ms';
        document.querySelector("#nav-container").style.backgroundColor = '#FAFAFA'
        document.body.style.animation = 'switchToWhite 500ms';
        document.body.style.backgroundColor = '#FAFAFA';
        title.style.color = 'black';
        document.querySelector('#nav-a').style.color = 'black';
        document.querySelectorAll(".nav").forEach(nav => {
            nav.style.color = 'black';
            nav.style.boxShadow = '6px 6px 12px #d5d5d5,-6px -6px 12px #ffffff';
            nav.style.background = 'linear-gradient(145deg, #ffffff, #e1e1e1)';
        })
        document.querySelectorAll(".img").forEach(img => {
            img.style.boxShadow = '6px 6px 12px #d5d5d5,-6px -6px 12px #ffffff';
            
        })
        document.querySelectorAll("#header-label").forEach(header => {
            header.style.color = 'black';
        })
        document.querySelectorAll("#project-label").forEach(label => {
            label.style.color = 'black';
        })
        document.querySelectorAll("#proj-desc").forEach(desc => {
            desc.style.color = 'black';
        })
        document.querySelectorAll("#descy").forEach(desc => {
            desc.style.color = 'black';
        })
       
    }
    else {
        //Toggle Dark Mode
        document.querySelector('#toggle-btn').src = 'img/sun.svg';
        document.body.style.animation = 'switchToDark 500ms';
        document.body.style.backgroundColor = 'var(--main)';
        document.querySelector('#toggle-btn').style.boxShadow = '6px 6px 12px #1e232b,-6px -6px 12px #262d37';
        document.querySelector('#toggle-btn').style.background =' linear-gradient(145deg, #242b34, #1f242c)';
        document.querySelector("#nav-container").style.animation = 'switchToDark 500ms';
        document.querySelector("#nav-container").style.backgroundColor = 'var(--main)'
        title.style.color = 'white';
        document.querySelector('#nav-a').style.color = 'white';
        document.querySelectorAll(".nav").forEach(nav => {
            nav.style.color = 'white';
            nav.style.boxShadow = '6px 6px 12px #1e232b,-6px -6px 12px #262d37';
            nav.style.background = 'linear-gradient(145deg, #242b34, #1f242c)';
        })
        document.querySelectorAll(".img").forEach(img => {
            img.style.boxShadow = '6px 6px 12px #161a1e,-6px -6px 12px #1e2328'
        })
        document.querySelectorAll("#header-label").forEach(header => {
            header.style.color = 'white';
        })
        document.querySelectorAll("#project-label").forEach(label => {
            label.style.color = 'white';
        })
        document.querySelectorAll("#proj-desc").forEach(desc => {
            desc.style.color = 'white';
        })
        document.querySelectorAll("#descy").forEach(desc => {
            desc.style.color = 'white';
        })
    }
    
}

