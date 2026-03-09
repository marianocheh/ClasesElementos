function hello() {
  document.getElementById("message").innerHTML =
  "You clicked the button!";
}


function checkReleaseTimes() {

  const now = new Date();

  // RELEASE TIMES (Argentina time)
  const release1 = new Date("2026-03-15T18:00:00-03:00");
  const release2 = new Date("2026-03-08T18:00:00-03:00");

  if (now >= release1) {
    document.getElementById("pdf1").style.display = "block";
  } else {
    document.getElementById("msg1").innerHTML =
      "PDF 1 will be available on March 15 at 18:00.";
  }

  if (now >= release2) {
    document.getElementById("pdf2").style.display = "block";
  } else {
    document.getElementById("msg2").innerHTML =
      "PDF 2 will be available on March 20 at 10:00.";
  }

}

checkReleaseTimes();
