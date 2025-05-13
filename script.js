document.getElementById("downloadBtn").addEventListener("click", function () {
  const resumeElement = document.getElementById("resume");

  const opt = {
    margin: 0,
    filename: "Ihor_Skrypka_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      letterRendering: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["avoid-all", "css", "legacy"],
      before: "#resume h2", // избегать разрывов перед заголовками секций
      after: ".project", // избегать разрывов после проектов
    },
  };

  html2pdf().set(opt).from(resumeElement).save();
});
