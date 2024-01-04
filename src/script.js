document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".underline");

  links.forEach(function (link) {
    link.addEventListener("mouseover", function () {
      link.classList.add("hovered");
    });

    link.addEventListener("mouseout", function () {
      link.classList.remove("hovered");
    });
  });

  // Optional: Add a class to the link corresponding to the current page
  var currentPath = window.location.pathname;
  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
      link.querySelector(".underline-span").style.width = "100%";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var animatedText = document.getElementById("animatedText");
  var words = animatedText.innerText.split(" ");

  // Clear the original text
  animatedText.innerText = "";

  // Add spans for each word
  words.forEach(function (word, index) {
    var span = document.createElement("span");
    span.innerText = word;
    span.className = "word";
    span.style.transitionDelay = index * 0.1 + "s"; // Adjust the delay as needed
    animatedText.appendChild(span);

    // Add a space between words (except for the last word)
    if (index < words.length - 1) {
      var space = document.createElement("span");
      space.innerText = " ";
      animatedText.appendChild(space);
    }
  });

  // Trigger the animation by adding the class to each word
  setTimeout(function () {
    words.forEach(function (_, index) {
      var span = animatedText.children[index * 2]; // Considering the added space spans
      span.classList.add("word-animate");
    });
  }, 500); // Adjust the delay based on when you want the animation to start
});
document.addEventListener("DOMContentLoaded", function () {
  var animatedText = document.getElementById("animatedText");

  function animateText() {
    animatedText.classList.add("animate");
  }

  // Trigger the animation when the page is loaded
  animateText();

  // Optional: Trigger the animation on a certain event (e.g., button click)
  // var triggerButton = document.getElementById("triggerButton");
  // triggerButton.addEventListener("click", animateText);
});
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: document
      .querySelector(".typed")
      .getAttribute("data-typed-items")
      .split(","),
    typeSpeed: 70, // typing speed in milliseconds
    backSpeed: 45, // backspacing speed in milliseconds
    loop: true, // loop the animation
  };

  var typed = new Typed(".typed", options);
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if a skill type was previously selected
  const selectedSkillType = localStorage.getItem("selectedSkillType");

  if (selectedSkillType) {
    // If yes, show the corresponding skill section
    showSkills(
      selectedSkillType,
      document.querySelector(`[data-skill="${selectedSkillType}"]`)
    );
  }
});

function showSkills(skillType, button) {
  // Hide all skill sections
  document
    .querySelectorAll(".hidden")
    .forEach((section) => (section.style.display = "none"));

  // Remove the 'active' class from all buttons
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("active", "hover"));

  // Show the selected skill section
  document.getElementById(skillType).style.display = "grid";

  // Add the 'active' and 'hover' classes to the clicked button
  button.classList.add("active", "hover");

  // Store the selected skill type in local storage
  localStorage.setItem("selectedSkillType", skillType);
}

/*
// Number of experiences
const numberOfExperiences = 1;

// Container for experience sections
const experienceContainer = document.getElementById("experienceContainer");

// Create circles dynamically
for (let i = 0; i < numberOfExperiences; i++) {
  const circle = document.createElement("div");
  circle.className = "absolute left-0 stroke-dark";
  circle.innerHTML = `
        <svg class='-rotate-90' height="75" width="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" stroke="" stroke-width="1" fill="none" />
        <circle cx="75" cy="50" r="20" stroke="black" stroke-width="5" fill="white" />
        <circle cx="75" cy="50" r="10"  stroke-width="1" fill="purple" class='animate-pulse'/>
      </svg> 
        `;

  experienceContainer.appendChild(circle);

}
*/

/*
  // Add experience section dynamically (similar structure as in the HTML)
  const experienceSection = document.createElement("li");
  experienceSection.className =
    "my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between";
  experienceSection.innerHTML = `
            <div>
                <h3 class="position capitalize font-bold text-2xl">Software Engineer<span
                        class="company">&nbsp;
                        <a target="_blank" href="www.google.com" class="text-pink-600 capitalize">@Google</a></span>
                </h3>
                <span class="timeAddress capitalize font-medium text-black/75">2022-Present | Mountain View, CA</span>
                <p class="work font-medium w-full">Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and developing new
                    tools for data analysis and visualization.</p>
            </div>
        `;
        
  experienceContainer.appendChild(experienceSection);
}*/

document.addEventListener("DOMContentLoaded", function () {
  const experienceLine = document.getElementById("line");
  const educationLine = document.getElementById("eduline");

  window.onscroll = function () {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollHeight).toFixed(4);

    // Update the scaleY value based on scroll progress for the experience line
    experienceLine.style.transform = `scaleY(${scrollProgress})`;

    // Update the scaleY value based on scroll progress for the education line
    educationLine.style.transform = `scaleY(${scrollProgress})`;
  };
});


// Number of experiences
const numberOfExperiences = 3;

// Container for experience sections
const educationContainer = document.getElementById("educationContainer");

// Create circles dynamically
for (let i = 0; i < numberOfExperiences; i++) {
    const circle = document.createElement("div");
    circle.className = "absolute left-0 stroke-dark";
    circle.innerHTML = `
        <svg class='-rotate-90' height="75" width="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" stroke="" stroke-width="1" fill="none" />
        <circle cx="75" cy="50" r="20" stroke="black" stroke-width="5" fill="white" />
        <circle cx="75" cy="50" r="10"  stroke-width="1" fill="purple" class='animate-pulse'/>
      </svg> 
    `;

    // Append each circle to the corresponding education section
    educationContainer.querySelector(`#educationSection${i + 1}`).appendChild(circle);
}
