function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  console.log("menu: ", menu);
  console.log("icon: ", icon);
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function downloadResume() {
  const link = document.createElement('a');
  link.href = 'http://localhost/assets/resume.pdf';
  link.download = 'resume.pdf'; // Specify the default filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
