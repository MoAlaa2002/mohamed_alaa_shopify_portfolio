// نراقب كل مشروع، ولما يظهر في الشاشة نضيف عليه class اسمه in-view
const projects = document.querySelectorAll('.project');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // مرة واحدة بس
      }
    });
  }, { threshold: 0.15 });

  projects.forEach((p) => observer.observe(p));
} else {
  // متصفح قديم: نظهر كل حاجة على طول
  projects.forEach((p) => p.classList.add('in-view'));
}
