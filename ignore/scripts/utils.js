function submitFitForm(e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const waist = parseInt(document.getElementById("waist").value);
  const seat = parseInt(document.getElementById("seat").value);
  const fitPref = document.getElementById("fitPref").value;
  const styleFocus = document.getElementById("styleFocus").value;

  const fitResult = document.getElementById("fitResult");
  fitResult.style.display = "block";

  let recommendation = "Based on your inputs, we recommend: ";

  if (fitPref === "tailored") {
    recommendation += "a tapered leg with structured waistband and invisible side zip.";
  } else if (fitPref === "relaxed") {
    recommendation += "a relaxed drape with front pleats and room in the thigh.";
  } else if (fitPref === "oversized") {
    recommendation += "a wide-leg cut with drop-crotch and thick waistband.";
  }

  recommendation += ` <br>Style emphasis: <strong>${styleFocus}</strong>. Your custom fit code is: <code>${waist}-${seat}-${height}</code>.`;

  fitResult.innerHTML = recommendation;
}
