const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const plusLogo = question.querySelector(".plus-logo");

    // Check the current state based on a data attribute
    const isExpanded = question.getAttribute("data-expanded") === "true";

    // Toggle the state
    question.setAttribute("data-expanded", (!isExpanded).toString());

    // Change the image source based on the state
    plusLogo.src = isExpanded
      ? "assets/images/icon-plus.svg"
      : "assets/images/icon-minus.svg";

    // Toggle the "active" class
    question.parentNode.classList.toggle("active");
  });
});

// const questions = document.querySelectorAll(".question");
// const plusLogo = document.querySelectorAll(".plus-logo");

// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     const plusLogo = document.querySelectorAll(".plus-logo");
//     plusLogo.src = "assets/images/icon-minus.svg";

//     if (question.parentNode.classList.contains("active")) {
//       question.parentNode.classList.toggle("active");
//     } else {
//       questions.forEach((question) => {
//         question.parentNode.classList.remove("active");
//       });
//       question.parentNode.classList.add("active");
//     }

//   });
// });
