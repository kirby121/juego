const d = document

export function setLS() {
    localStorage.setItem("monster", false)
}

export function moveScreen(screen) {
    const $screen = d.querySelector(screen),
    screenWidth = window.screen.width,
    half = screenWidth/2

    d.addEventListener("keydown", e => {
        if(e.key === "ArrowRight") $screen.classList.add("move-right")
        else if(e.key === "ArrowLeft") $screen.classList.remove("move-right")
    })

    $screen.addEventListener("click", e => {
        if(e.clientX > half) $screen.classList.add("move-right")
        if(e.clientX < half) $screen.classList.remove("move-right")
    })
}

export function iluminate(screen) {
    const $screen = d.querySelector(screen),
    screenWidth = window.screen.width,
    half = screenWidth/2

    d.addEventListener("keydown", e => {
        if(e.key == " "){
            if($screen.classList.contains("move-right")){
                if(localStorage.getItem("monster") == "false") $screen.classList.add("window-iluminated")
                else $screen.classList.add("window-monster")
            }
            else if(!$screen.classList.contains("move-right")){
                if(localStorage.getItem("monster") == "false") $screen.classList.add("door-iluminated")
                else $screen.classList.add("door-monster")
            }
        }
    })

    d.addEventListener("keyup", e => {
            if($screen.classList.contains("move-right")){
                $screen.classList.remove("window-iluminated")
                $screen.classList.remove("window-monster")
            }
            else if(!$screen.classList.contains("move-right")){
                $screen.classList.remove("door-iluminated")
                $screen.classList.remove("door-monster")
            }
    })

    //Iluminar con click

    d.addEventListener("mousedown", e => {
            if($screen.classList.contains("move-right") && e.clientX > half){
                if(localStorage.getItem("monster") == "false") $screen.classList.add("window-iluminated")
                else $screen.classList.add("window-monster")
            }
            else if(!$screen.classList.contains("move-right") && e.clientX < half){
                if(localStorage.getItem("monster") == "false") $screen.classList.add("door-iluminated")
                else $screen.classList.add("door-monster")
            }
    })

    d.addEventListener("mouseup", e => {
            if($screen.classList.contains("move-right")){
                $screen.classList.remove("window-iluminated")
                $screen.classList.remove("window-monster")
            }
            else if(!$screen.classList.contains("move-right")){
                $screen.classList.remove("door-iluminated")
                $screen.classList.remove("door-monster")
            }
    })

    d.addEventListener("mousedown", e => {
        if($screen.classList.contains("move-right") && e.clientX > half){
            if(localStorage.getItem("monster") == "false") $screen.classList.add("window-iluminated")
            else $screen.classList.add("window-monster")
        }
        else if(!$screen.classList.contains("move-right") && e.clientX < half){
            if(localStorage.getItem("monster") == "false") $screen.classList.add("door-iluminated")
            else $screen.classList.add("door-monster")
        }
})
}

export function cellphoneLight(screen, light, isLeft, otherLight) {
    const $light = d.querySelector(light),
    $screen = d.querySelector(screen),
    $otherLight = d.querySelector(otherLight)

    $light.addEventListener("click", e => {
        if(!d.querySelector(".hide").classList.contains("hide-on")){

        
        if(!isLeft){
            if (!$light.classList.contains("on")){
                $light.classList.add("on")
                if (localStorage.getItem("monster") == "false") $screen.classList.add("window-iluminated")
                else $screen.classList.add("window-monster")
                $otherLight.classList.remove("on")
            }
            else if ($light.classList.contains("on")){
                $light.classList.remove("on")
                $screen.classList.remove("window-iluminated")
                $screen.classList.remove("window-monster")
            }
        }

        else if(isLeft){
            if (!$light.classList.contains("on")){
                $light.classList.add("on")
                if (localStorage.getItem("monster") == "false") $screen.classList.add("door-iluminated")
                else $screen.classList.add("door-monster")
                $otherLight.classList.remove("on")
            }
            else if ($light.classList.contains("on")){
                $light.classList.remove("on")
                $screen.classList.remove("door-iluminated")
                $screen.classList.remove("door-monster")
            }
        }}
    })
}

export function hide(btn, screen) {
    const $screen = d.querySelector(screen),
    $btn = d.querySelector(btn)

    $btn.addEventListener("click", e => {
        if(!$btn.classList.contains("hide-on")){
            $btn.classList.add("hide-on")
            $screen.classList.add("hide-background")
        }
        else{
            $btn.classList.remove("hide-on")
            $screen.classList.remove("hide-background")
        }
    })
}

export function statisticBtn(btn, statistics, statisticScreen) {
    const $btn = d.querySelector(btn),
    $statistics = d.querySelector(statistics)

    $btn.addEventListener("click", e => {
        if($statistics.classList.contains("statistics-screen-on")){
            $statistics.classList.remove("statistics-screen-on")
            $statistics.classList.add("none")
        }
        else{
            $statistics.classList.add("statistics-screen-on")
            $statistics.classList.remove("none")
        }
    })
}

export function toggleBtn(btn) {
    const $btns = d.querySelectorAll(btn)

    $btns.forEach(btn => {
        btn.addEventListener("click", e => {
            $btns.forEach(el => el.classList.remove("statistic-button-on"));
            btn.classList.toggle("statistic-button-on")
        })
    });
}

export function automaticStatisticSubstraction(divs, buttons, screamerFunction) {
    const $divs = d.querySelectorAll(divs),
    $buttons = d.querySelectorAll(buttons),
    $startBtn1 = d.querySelector(".new"),
    $startBtn2 = d.querySelector(".continue")

    let ancho1 = 22.4,
    ancho2 = 22.4,
    ancho3 = 22.4,
    screamer = false

    $divs.forEach(div => div.style.width = `22.4vw`);

    const startStatistics = () => {
        setInterval(() => {

            if (!$buttons[0].classList.contains("statistic-button-on") && ancho1 >= -1) ancho1 -= 0.4
            if ($buttons[0].classList.contains("statistic-button-on") && ancho1 <= 22.4) ancho1 += 1
            if (!$buttons[1].classList.contains("statistic-button-on") && ancho1 >= -1) ancho2 -= 0.4
            if ($buttons[1].classList.contains("statistic-button-on") && ancho2 <= 22.4) ancho2 += 1
            if (!$buttons[2].classList.contains("statistic-button-on") && ancho1 >= -1) ancho3 -= 0.4
            if ($buttons[2].classList.contains("statistic-button-on") && ancho3 <= 22.4) ancho3 += 1
    
            $divs[0].style.width = `${ancho1}vw`
            $divs[1].style.width = `${ancho2}vw`
            $divs[2].style.width = `${ancho3}vw`
    
            if(ancho1 >= 11.2) $divs[0].style.backgroundColor = "green"
            if(ancho1 <= 11.2){
                $divs[0].style.backgroundColor = "yellow"
            }
            if(ancho1 <= 5) {
                $divs[0].style.backgroundColor = "red"
            }
    
            if(ancho2 >= 11.2) $divs[1].style.backgroundColor = "green"
            if(ancho2 <= 11.2){
                $divs[1].style.backgroundColor = "yellow"
            }
            if(ancho2 <= 5) {
                $divs[1].style.backgroundColor = "red"
            }
    
            if(ancho3 >= 11.2) $divs[2].style.backgroundColor = "green"
            if(ancho3 <= 11.2){
                $divs[2].style.backgroundColor = "yellow"
            }
            if(ancho3 <= 5) {
                $divs[2].style.backgroundColor = "red"
            }
    
            /*Screamer*/
    
            if((ancho1 <= 0 || ancho2 <= 0 || ancho3 <= 0) && !screamer) {
                screamer = true
                screamerFunction()
            }
    
    
        }, 1000);
    }

    d.addEventListener("click", e => {
        if(e.target === $startBtn1 || e.target === $startBtn2)
        startStatistics()
    } )
    
}