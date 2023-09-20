(function(storyContent) {

    console.log("Cookies: " + Cookies.get('progress'));

    var story = new inkjs.Story(storyContent);
    var currentPage = 0;
    var blockNav = false;

    var pages = document.getElementsByClassName("page-container")[0];
    
    //Entry Selection
    var entrySelection = document.getElementById("entry-selection");

    //Campaign log
    var campaignLogPage = document.getElementById("campaign-log");

    //Header
    document.getElementById("btn-entry").addEventListener("click", () => {
        gotoPage(entrySelection);
    });
    document.getElementById("btn-campaign").addEventListener("click", () => {
        gotoPage(campaignLogPage);
    });
    document.getElementById("btn-log").addEventListener("click", () => {
        gotoPage(storybook);
    });

    //Popup
    var modal = document.getElementById("popup");
    var closeBtn = document.getElementById("popup-cancel");
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    var storyContainer = document.getElementById('story');
    var storybook = document.getElementById('story-book');
    var continueButton = document.getElementById('continue-button');
    var entryForm = document.getElementById("entry-form");
    var endDayBtn = document.getElementById("end-day-btn");
    endDayBtn.addEventListener("click", function () {
        console.log("end");
        modal.style.display = "block";
        animateCSS(document.getElementsByClassName("modal-content")[0], 'fadeInUp');
        
    });



    entryForm.addEventListener("submit", (e) => {

        e.preventDefault();
        var input = document.getElementById("entry-input");
        parseEntry(input.value);
        input.value = "";
    });

    continueButton.addEventListener("click", continueStory);

    function isAnimationEnabled() {
        return window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    }

    function showAfter(delay, el) {
        setTimeout(function() { el.classList.add("show") }, isAnimationEnabled() ? delay : 0);
    }

    function scrollToBottom() {
        
        // If the user doesn't want animations, let them scroll manually
        if (!isAnimationEnabled()) {
            return;
        }
        
        var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dist = document.body.scrollHeight - window.innerHeight - start;
        if( dist < 0 ) return;

        var duration = 500; // + 300*dist/100;
        var startTime = null;
        function step(time) {
            if( startTime == null ) startTime = time;
            var t = (time-startTime) / duration;
            var lerp = 3*t*t - 2*t*t*t;
            window.scrollTo(0, start + lerp*dist);
            if( t < 1 ) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function parseEntry(e) {


        entry = "A" + e;
        entry = entry.replace(".", "x");
        var error = document.getElementById("entry-error");

        try
        {
            story.ChoosePathString(entry);
        }
        catch(e)
        {
            error.style.visibility = "visible";
            animateCSS(error, 'fadeIn');
            
            if(entry == "A")
                error.innerHTML = "PLEASE TYPE IN AN ENTRY";
            else
                error.innerHTML = "ENTRY NOT FOUND";

            var input = document.getElementById("entry-input");
            animateCSS(input, 'shakeX');
            return;
        }

        gotoPage(storybook);

        // pages.style.display = "none";
        // storybook.style.display = "block";
        // animateCSS(storybook, 'zoomIn');

        error.style.visibility = "hidden";

        // Create header element
        var paragraphElement = document.createElement('h2');
        paragraphElement.innerHTML = e;
        storyContainer.appendChild(paragraphElement);
        continueStory();
       
    }

    function continueStory() {

        if(!story.canContinue)
        {
            gotoPage(entrySelection);
            return;
        }

        var paragraphIndex = 0;
        var delay = 0.0;

        // Generate story text - loop through available content
        if(story.canContinue) {

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();

            // Create paragraph element
            var paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = paragraphText;
            storyContainer.appendChild(paragraphElement);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);

            delay += 200.0;
            story.currentTags.forEach( x => {
                paragraphElement.classList.add(x);
            });
        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function(choice) {

            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement('p');
            choiceParagraphElement.classList.add("choice");
            
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
            storyContainer.appendChild(choiceParagraphElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceParagraphElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
            choiceAnchorEl.addEventListener("click", function(event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                var existingChoices = storyContainer.querySelectorAll('p.choice');
                for(var i=0; i<existingChoices.length; i++) {
                    var c = existingChoices[i];
                    c.parentNode.removeChild(c);
                }

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                

                // Aaand loop
                continueStory();
            });
        });

        if(story.currentChoices.length > 0)
            continueButton.style.display = "none";
        else
            continueButton.style.display = "block";

        if(!story.canContinue)
        {
            continueButton.textContent = "CONTINUE PLAYING";
        }
        else
        {
            continueButton.textContent = "CONTINUE";
        }

        scrollToBottom();
        console.log('setting cookie');
        Cookies.set('progress', story.state.ToJson(), { expires: 365 });
    }

    const animateCSS = (node, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

    function gotoPage(page)
    {
        if(currentPage == page) return;
        if(blockNav) return;

        
        if(currentPage != 0)
        {
            var oldPage = currentPage;
            blockNav = true;
            animateCSS(currentPage, 'fadeOutLeft').then((e) => {
                oldPage.style.display = "none";
                blockNav = false;
            });
        }
        page.style.display = "block";
        animateCSS(page, 'fadeInRight');
        
        if(page == storybook)
            scrollToBottom();
        else
            window.scrollTo(0,0);
        currentPage = page;
    }

})(storyContent);