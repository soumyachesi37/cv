function display_skills() {
    clear();
    var b_sk = document.getElementById("b_skills");
    document.getElementById('skills-div-container').style.display = "inline-block";
    b_sk.classList.add("pressed");
}

function display_education() {
    clear();
    var b_edu = document.getElementById("b_education");
    document.getElementById('education-div-container').style.display = "inline-block";
    b_edu.classList.add("pressed");
}

function display_experience() {
    clear();
    var b_exp = document.getElementById("b_experience");
    b_exp.classList.add("pressed");
}

function clear() {
    document.getElementById('skills-div-container').style.display = "none";
    document.getElementById('education-div-container').style.display = "none";
    var b_exp = document.getElementById("b_experience");
    var b_edu = document.getElementById("b_education");
    var b_sk = document.getElementById("b_skills");
    b_exp.classList.remove("pressed");
    b_edu.classList.remove("pressed");
    b_sk.classList.remove("pressed");
}

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetOffset = targetElement.offsetTop;
    const scrollOptions = {
      behavior: 'smooth'
    };
    window.scrollTo({
      top: targetOffset,
      left: 0,
      ...scrollOptions
    });
  });
});