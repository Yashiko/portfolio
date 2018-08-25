// Projects
function showAll() {
    let resultHtmlWeb = `
    <div style ="width: 650px">
      <div>
      <a href="https://github.com/Yashiko/GameWall" target="_blank">
          <div class="container2" >
              <img class="projects-image" src="gameWall.jpg" alt="gameWall" width="300px">
              <div class="overlay-projects">
                  <div class="text">
                      <em>"gameWall"
                          <br>
                          <p class="projects-list-text">by Andrius Geleževičius</p>
                      </em>
                  </div>
              </div>
          </div>
      </a>
      <a href="https://github.com/Yashiko/who-wants-to-be-a-millionaire-" target="_blank">
          <div class="container2">
              <img class="projects-image" src="mil.png" alt="millionaire" width="300px">
              <div class="overlay-projects">
                  <div class="text">
                      <em>"millionaire"
                          <br>
                          <p class="projects-list-text">by Andrius Geleževičius</p>
                      </em>
                  </div>
            </div>
        </a>
    </div>
    
    <div>
        <a href="https://github.com/Yashiko/calculator" target="_blank">
        <div class="container2">
            <img class="projects-image" src="calculator.jpg" alt="calculator" width="300px">
            <div class="overlay-projects">
                <div class="text">
                    <em>"calcucator"
                        <br>
                        <p class="projects-list-text">by Andrius Geleževičius</p>
                    </em>
                </div>
            </div>
        </div>
        </a>
        <a href="https://github.com/Yashiko/timer" target="_blank">
        <div class="container2">
            <img class="projects-image" src="startTimer.jpg" alt="timer" width="300px">
            <div class="overlay-projects">
                <div class="text">
                    <em>"Start Timer"
                        <br>
                        <p class="projects-list-text">by Andrius Geleževičius</p>
                    </em>
                </div>
            </div>
        </div>
        </a>
        </div>
    </div>`;

        document.querySelector("#result").innerHTML = resultHtmlWeb;
    };

function showWeb() {
    let resultHtmlWeb = `<div></div>`;
    //     let resultHtmlWeb = `
    // //     <div class="container">   
    // //     <a href="#">
    // //     <div class="container2">
    // //         <img class="projects-image" src="darbas1.jpg" alt="darbas1" width="300px">
    // //         <div class="overlay-projects">
    // //             <div class="text">
    // //                 <em>"who wants "
    // //                     <br>
    // //                     <p class="projects-list-text">by Andrius Geleževičius</p>
    // //                 </em>
    // //             </div>
    // //         </div>
    // // </a>
    // // </div>
    // // `;
    document.querySelector("#result").innerHTML = resultHtmlWeb;
};

function showApp() {
    let resultHtmlWeb = `
<div style ="width: 650px">
  <div>
  <a href="https://github.com/Yashiko/GameWall" target="_blank">
      <div class="container2" >
          <img class="projects-image" src="gameWall.jpg" alt="gameWall" width="300px">
          <div class="overlay-projects">
              <div class="text">
                  <em>"gameWall"
                      <br>
                      <p class="projects-list-text">by Andrius Geleževičius</p>
                  </em>
              </div>
          </div>
      </div>
  </a>

  <a href="https://github.com/Yashiko/who-wants-to-be-a-millionaire-" target="_blank">
      <div class="container2">
          <img class="projects-image" src="mil.png" alt="millionaire" width="300px">
          <div class="overlay-projects">
              <div class="text">
                  <em>"millionaire"
                      <br>
                      <p class="projects-list-text">by Andrius Geleževičius</p>
                  </em>
              </div>
        </div>
    </a>
    </div>

    <div>
    <a href="https://github.com/Yashiko/calculator" target="_blank">
    <div class="container2">
        <img class="projects-image" src="calculator.jpg" alt="calculator" width="300px">
        <div class="overlay-projects">
            <div class="text">
                <em>"calcucator"
                    <br>
                    <p class="projects-list-text">by Andrius Geleževičius</p>
                </em>
            </div>
        </div>
    </div>
    </a>
    

    
    <a href="https://github.com/Yashiko/timer" target="_blank">
    <div class="container2">
        <img class="projects-image" src="startTimer.jpg" alt="timer" width="300px">
        <div class="overlay-projects">
            <div class="text">
                <em>"Start Timer"
                    <br>
                    <p class="projects-list-text">by Andrius Geleževičius</p>
                </em>
            </div>
        </div>
    </div>
    </a>
    </div>
</div>`;
    document.querySelector("#result").innerHTML = resultHtmlWeb;
};


// function startAnimation(){
//       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("myP").className = "test";
//     } else {
//         document.getElementById("myP").className = "";
//     }
// }
// }




// skills animation
var bar = new ProgressBar.Circle(htmlSkill, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#555',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
bar.animate(0.8);


var bar1 = new ProgressBar.Circle(cssSkill, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#555',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
bar1.animate(0.8);

var bar3 = new ProgressBar.Circle(jsSkill, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#555',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
bar3.animate(0.5);

var bar4 = new ProgressBar.Circle(bootstrapSkill, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#555',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
bar4.animate(0.5);

var bar5 = new ProgressBar.Circle(jqSkill, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#555',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
bar5.animate(0.2);
var bar6= new ProgressBar.Circle(sassSkill, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#555',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
bar6.animate(0.2);
