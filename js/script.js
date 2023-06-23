// Show social networks

const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
            social = document.getElementById(socialCard)
    
    toggle.addEventListener("click", () =>{

        // If animation class exists, create down, animation class
        if(social.classList.contains("animation")){
            social.classList.add("down-animation")

            // Remove down-animation class
            setTimeout(() =>{
                social.classList.remove("down-animation")
            }, 1000)
        }

        //Add animation
        social.classList.toggle("animation")
    })
}

showSocial("card-toggle", "card-social")