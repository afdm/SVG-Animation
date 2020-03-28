showPathLenght = function() {
  const paths = document.querySelectorAll(".itworks svg path");

  paths.forEach((path, index) => {
    console.log(`nth-child(${index}) : ${path.getTotalLength()}`);
  });
};

showPathLenght();
