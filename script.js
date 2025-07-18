fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(project => `
      <div class="recent-project-card" style="text-align: center; position: relative;">
        <a href="${project.url}" target="_blank" class="project-link-btn">
          ${project.title}
        </a>
        <p class="project-hover-desc">${project.description}</p>
      </div>
    `).join('');
  });