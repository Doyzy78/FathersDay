
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('apk-list');
    data.forEach(app => {
      const div = document.createElement('div');
      div.className = 'apk-card';
      div.innerHTML = \`
        <img src="icons/\${app.icon}" alt="icon">
        <div class="apk-info">
          <h3>\${app.name}</h3>
          <p>Version: \${app.version}</p>
          <p>Size: \${app.size}</p>
          <a href="upload/\${app.apk}" download><button>Download APK</button></a>
        </div>
      \`;
      list.appendChild(div);
    });
  });
