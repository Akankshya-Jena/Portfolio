var typed= new Typed(".text",{
    strings: ["Data Analyst", "Software Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.addEventListener("DOMContentLoaded", function() {
    const downloadResumeBtn = document.getElementById("download-resume");

    downloadResumeBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        const resumeUrl = "Resume.pdf"; // Replace with your actual resume file path
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.setAttribute("download", "Akankshya_Jena_Resume.pdf"); // Optional: Set the filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
