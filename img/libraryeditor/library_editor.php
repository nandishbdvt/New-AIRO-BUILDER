<?php
session_start();

// Redirect to login if not logged in
if (!isset($_SESSION['branch'])) {
  header("Location: https://jnnce.ac.in/login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Edit library.html</title>
  <script src="https://cdn.tiny.cloud/1/g9v00ieore44glpq3uimc2p96pgr16oiara7lrltimskikow/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
  <style>
    :root {
      --bg-light: #f9f9fb;
      --bg-dark: #1e1e2f;
      --text-light: #333;
      --text-dark: #f1f1f1;
      --section-bg-light: #fff;
      --section-bg-dark: #2c2c3e;
      --accent: #3f51b5;
      --btn-color: #3f51b5;
      --btn-hover: #303f9f;
      --radius: 10px;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: var(--bg-light);
      color: var(--text-light);
      padding: 30px;
      transition: all 0.3s ease;
    }

    body.dark {
      background-color: var(--bg-dark);
      color: var(--text-dark);
    }

    h1 {
      text-align: center;
      color: var(--accent);
      margin-bottom: 30px;
    }

    .container {
      max-width: 900px;
      margin: auto;
    }

    .section {
      border-left: 5px solid var(--accent);
      background-color: var(--section-bg-light);
      padding: 20px;
      border-radius: var(--radius);
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      margin-bottom: 25px;
      transition: background 0.3s;
    }

    body.dark .section {
      background-color: var(--section-bg-dark);
    }

    .draggable {
      cursor: move;
    }

    summary {
      font-size: 1.1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      gap: 10px;
    }

    .summary-content {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      flex: 1;
    }

    .title-input {
      flex: 1;
      padding: 8px 12px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: var(--radius);
      max-width: 300px;
    }

    .summary-meta {
      font-size: 0.85em;
      color: #888;
    }

    .section-id-btn {
      background: #e0e0e0;
      padding: 4px 10px;
      border-radius: 20px;
      font-family: monospace;
    }

    textarea {
      width: 100%;
      min-height: 200px;
      border-radius: var(--radius);
    }

    button {
      padding: 10px 16px;
      background-color: var(--btn-color);
      color: white;
      font-weight: bold;
      border: none;
      border-radius: var(--radius);
      margin-top: 10px;
      cursor: pointer;
    }

    button:hover {
      background-color: var(--btn-hover);
    }

    .status {
      font-size: 0.9em;
      color: green;
      margin-top: 5px;
    }

    .toggle-theme {
      position: fixed;
      top: 20px;
      right: 30px;
      z-index: 1000;
      background: var(--btn-color);
      color: white;
      border: none;
      border-radius: 50px;
      padding: 8px 14px;
      cursor: pointer;
    }

    .drag-over {
      border: 2px dashed var(--accent);
      background-color: #f0f0ff;
    }
    
      .toolbar-buttons {
      text-align: center;
      margin-bottom: 25px;
    }

    input[type="file"] {
      margin-top: 10px;
    }
    
    details.section summary {
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

details.section[open] summary {
  background: linear-gradient(135deg, #0056b3, #0088cc);
}

.logout-btn {
  position: fixed;
  top: 20px;
  left: 30px;
  z-index: 1000;
  background: #f44336;
  color: white;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 50px;
  font-weight: bold;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #d32f2f;
}

.upload-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.upload-header h2 {
  margin: 0 0 10px;
  color: var(--accent);
  font-size: 1.2em;
  text-align: center;
}

.upload-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.upload-actions form,
.upload-actions button {
  margin: 0;
}

/* Add this to your <style> section */
#resourceModal {
  display: none;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  justify-content: center;
  align-items: center;
}

#resourceModal.show {
  display: flex;
}

#resourceModal .modal-box {
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease;
}

#resourceModal.dark .modal-box {
  background-color: #2c2c3e;
  color: #f1f1f1;
}

#resourceList {
  max-height: 250px;
  overflow-y: auto;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 8px;
}

#resourceList div {
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  margin-bottom: 5px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

#resourceList div button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

#resourceList div button:hover {
  background-color: #c62828;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}




@media (max-width: 600px) {
  .upload-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .upload-actions button,
  .upload-actions input[type="file"] {
    width: 100%;
  }
}

.top-nav {
  background: #2d2d2d;
  color: white;
  padding: 10px 20px;
  position: relative;
}

.top-nav .nav-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.top-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.top-nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 768px) {
  .top-nav ul {
    display: none;
    flex-direction: column;
    background: #2d2d2d;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    padding: 10px 0;
  }

  .top-nav ul.show {
    display: flex;
  }

  .top-nav .nav-toggle {
    display: block;
  }
}



    @media (max-width: 600px) {
      .title-input, button {
        width: 100%;
      }
    }
  </style>
</head>
<body>
    
  <button class="toggle-theme" onclick="toggleTheme()">🌓 Toggle Theme</button>
  <h1 style="text-align:center;">
  <img src="selfs.gif" alt="Logo" style="height: 120px; vertical-align: middle; margin-right: 10px;">
 
  <span style="font-size: 0.9em; color: gray;">Department Page Editor</span>
</h1>

<nav class="top-nav">
    <span class="nav-toggle" onclick="toggleNav()">☰ Menu</span>
  <ul id="navLinks">
    <li><a href="#" data-target="webpageManagement">🌐 Webpage Management</a></li>
    <li><a href="#" data-target="editorManagement">📝 Editor Management</a></li>
    <li><a href="#" data-target="resourceManagement">📁 Resource Management</a></li>
    <li><a href="#" data-target="sectionManagement">🧩 Section Management</a></li>
  </ul>
</nav>



<div id="webpageManagement" class="nav-section">🌐 Webpage Management
<div class="action-buttons space-x-3 mt-4">
    <button onclick="openWebpage()">🌍 Open Webpage</button>
    
  <button onclick="downloadWebpage()" class="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
    <i class="fa fa-download"></i> Download Webpage
  </button>
  <input type="file" id="upload-file-input" accept=".html" style="display: none;" />

<button onclick="document.getElementById('upload-file-input').click()" class="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
  <i class="fa fa-upload"></i> Upload Webpage
</button>
</div>
</div>

<div id="resourceManagement" class="nav-section" style="display:none;">📁 Resource Management
  <button onclick="openResourceManager()" class="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
    <i class="fa fa-folder-open"></i> Manage Resources
  </button>


<div id="resourceModal">
  <div class="modal-box">
    <h2 style="font-size: 1.3em; margin-bottom: 10px; color: var(--accent); text-align:center;">📁 Manage Resources</h2>
    <div id="resourceList"></div>
    <div style="margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;">
      <input type="file" id="resourceUpload" />
      <button onclick="uploadResource()" style="background: var(--btn-color); color: white;">➕ Add</button>
    </div>
    <div style="text-align: right; margin-top: 15px;">
      <button onclick="closeResourceManager()" style="background: gray; color: white;">✖ Close</button>
    </div>
  </div>
</div>
</div>


<div id="sectionManagement" class="nav-section" style="display:none;">📁 Section Management

  <section class="upload-section section">
  <div class="upload-header">
    <h2>📤  Add Section</h2>
    <div class="upload-actions">
    
      <button onclick="addNewSection()">➕ Add Section</button>
    </div>
  </div>
  <div class="status" id="uploadStatus"></div>
</section>
</div>

<a href="logout.php" class="logout-btn">🚪 Logout</a>
 
      
      
<div id="editorManagement" class="nav-section" style="display:none;">📝 Editor Management
      <div class="container" id="sectionContainer">
  <?php
  

    libxml_use_internal_errors(true);
    $doc = new DOMDocument('1.0', 'UTF-8');
    $html = file_get_contents('../library.html');
    $doc->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
    $xpath = new DOMXPath($doc);
    $nodes = $xpath->query("//*[starts-with(@id, 'section') and contains(@id, '-content')]");

    $counter = 0;
    $defaultTitles = [
      'section1-content' => 'About Department',
      'section2-content' => 'HOD Details',
      'section3-content' => 'Vision',
      'section4-content' => 'Mission',
      'section5-content' => 'Program Educational Objectives',
      'section6-content' => 'Program Specific Objectives',
      'section7-content' => 'Program Outcomes',
      'section8-content' => 'Tech Updates',
    ];

    $titles = [];
    if (file_exists('section_titles.json')) {
      $titles = json_decode(file_get_contents('section_titles.json'), true);
    }

    foreach ($nodes as $node) {
      $id = $node->getAttribute('id');
      $friendlyTitle = $titles[$id] ?? ($defaultTitles[$id] ?? ucfirst(str_replace(['section', '-content'], ['Section ', ''], $id)));
      $inner = '';
       $imgs = $node->getElementsByTagName('img');
foreach ($imgs as $img) {
    $src = $img->getAttribute('src');
    if (!preg_match('#^(https?:)?//#', $src) && strpos($src, 'resources/') !== false) {
        $img->setAttribute('src', 'resources/' . basename($src)); // or adjust path as needed
    }
}
      foreach ($node->childNodes as $child) {
        $inner .= $doc->saveHTML($child);
      }
      
      $accordionId = str_replace('collapse', 'section', $id); // collapse1 → section1
  ?>
    


    <div class="draggable" draggable="true"><details class="section">
      <summary>
        <div class="summary-content">
          <input type="text" id="title<?php echo $counter; ?>" value="<?php echo htmlspecialchars($friendlyTitle); ?>" class="title-input" />
          <button onclick="saveSectionTitle('<?php echo $id; ?>', 'title<?php echo $counter; ?>', 'status<?php echo $counter; ?>')">💾 Save Title</button>
        </div>
        <div class="summary-meta">
          <span class="section-id-btn"><?php echo $id; ?></span>
        </div>
      </summary>

      <textarea id="editor<?php echo $counter; ?>"><?php echo htmlentities($inner, ENT_QUOTES | ENT_HTML5); ?></textarea><br>
      <button onclick="saveContent('<?php echo str_replace('-content', '', $id); ?>', 'editor<?php echo $counter; ?>', 'status<?php echo $counter; ?>')">💾 Save Content</button>
      <button onclick="deleteSection('<?php echo $counter; ?>')">🗑️ Delete Section</button>
      
      <div class="status" id="status<?php echo $counter; ?>"></div>
    </details></div>
  <?php $counter++; } ?>
  </div>
  </div>

  <script>
  
 function openResourceManager() {
  document.getElementById('resourceModal').classList.add('show');
  fetch('list_resources.php')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('resourceList');
      if (!data.length) {
        container.innerHTML = "<p>No files found.</p>";
        return;
      }
      container.innerHTML = data.map(file =>
        `<div>
          <span>${file}</span>
          <button onclick="deleteResource('${file}')">Delete</button>
        </div>`
      ).join('');
    });
}

function closeResourceManager() {
  document.getElementById('resourceModal').classList.remove('show');
}


function uploadResource() {
  const fileInput = document.getElementById('resourceUpload');
  const file = fileInput.files[0];
  if (!file) return alert("Choose a file first.");

  const formData = new FormData();
  formData.append('file', file);

  fetch('usr.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    openResourceManager(); // refresh list
  });
}

function deleteResource(filename) {
  if (!confirm(`Delete ${filename}?`)) return;
  fetch('dsr.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename })
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    openResourceManager();
  });
}

  
  function downloadWebpage() {
  fetch('download_webpage.php')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'library.html';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
}

function uploadWebpage() {
  const content = document.getElementById('editable-content').innerHTML;
  fetch('upload_webpage.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ html: content })
  })
  .then(res => res.text())
  .then(alert);
}


  
function deleteSection(counter) {
    const deleteBtn = event.target;
    const sectionElement = deleteBtn.closest(".section");
    const sectionIdSpan = sectionElement.querySelector(".section-id-btn");

    if (!sectionIdSpan) {
        alert("Section ID not found.");
        return;
    }

    const sectionId = sectionIdSpan.textContent.trim();
    if (!confirm(`Are you sure you want to delete section: ${sectionId}?`)) return;

    fetch('delete_section.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `section_id=${encodeURIComponent(sectionId)}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        location.reload(); // or sectionElement.remove(); for instant DOM removal
    })
    .catch(err => {
        alert("Failed to delete: " + err);
    });
}

  
   function addNewSection() {
      const title = prompt("Enter title for new section:");
      if (!title) return;

      fetch('add_section.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ title: title })
      })
      .then(res => res.text())
      .then(() => location.reload());
    }
    
    
    function saveContent(id, editorId, statusId) {
      const content = tinymce.get(editorId).getContent();
      fetch('update_deplibrary.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({ id: id, content: content })
      })
      .then(res => res.text())
      .then(() => {
        document.getElementById(statusId).innerText = "✅ Content saved!";
        setTimeout(() => document.getElementById(statusId).innerText = "", 2000);
      })
      .catch(() => {
        document.getElementById(statusId).innerText = "❌ Error saving content.";
      });
    }

    function saveSectionTitle(id, inputId, statusId) {
      const title = document.getElementById(inputId).value;
      fetch('save_titles.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({ id: id, title: title })
      })
      .then(res => res.text())
      .then(() => {
        document.getElementById(statusId).innerText = "✅ Title saved!";
        setTimeout(() => document.getElementById(statusId).innerText = "", 2000);
      })
      .catch(() => {
        document.getElementById(statusId).innerText = "❌ Error saving title.";
      });
    }

document.addEventListener("DOMContentLoaded", function () {
 tinymce.init({
  selector: 'textarea',
  plugins: 'link image media table', // ✅ added 'table'
  toolbar: 'undo redo | bold italic | link image media | table', // ✅ added 'table'
  file_picker_callback: function(callback, value, meta) {
    fetch('list_resources.php')
      .then(response => response.json())
      .then(files => {
        const select = document.createElement('select');
        select.style.padding = '10px';
        select.style.margin = '10px';

        let filteredFiles = files;
        if (meta.filetype === 'image') {
          filteredFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
        }

        filteredFiles.forEach(file => {
          const option = document.createElement('option');
          option.value = file;
          option.textContent = file;
          select.appendChild(option);
        });

        const dialog = document.createElement('div');
        dialog.style.padding = '20px';
        dialog.style.background = '#fff';
        dialog.style.border = '1px solid #ccc';
        dialog.style.position = 'fixed';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.zIndex = '10000';
        dialog.innerHTML = '<h3>Select a file</h3>';
        dialog.appendChild(select);

        const insertBtn = document.createElement('button');
        insertBtn.textContent = 'Insert';
        insertBtn.style.marginTop = '10px';
        insertBtn.onclick = () => {
          const file = select.value;
          const fileUrl = '/jnndemo/libraryeditor/resources/' + file;

          if (meta.filetype === 'image') {
            callback(fileUrl);
          } else if (meta.filetype === 'media') {
            callback(fileUrl);
          } else {
            callback(fileUrl, { text: file });
          }

          document.body.removeChild(dialog);
        };

        dialog.appendChild(insertBtn);
        document.body.appendChild(dialog);
      });
  }
});

});


document.getElementById('upload-file-input').addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const html = e.target.result;

      fetch('save_webpage.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ html: html })
      })
      .then(response => response.text())
      .then(data => alert(data))
      .catch(error => alert("Error uploading file: " + error));
    };
    reader.readAsText(file);
  });



    // Dark mode toggle
    function toggleTheme() {
      document.body.classList.toggle('dark');
    }

    // Drag-and-drop ordering
    const container = document.getElementById('sectionContainer');
    let draggingEl = null;

    container.addEventListener('dragstart', (e) => {
      if (e.target.classList.contains('draggable')) {
        draggingEl = e.target;
        e.dataTransfer.effectAllowed = 'move';
      }
    });

    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      const target = e.target.closest('.draggable');
      if (target && target !== draggingEl) {
        target.classList.add('drag-over');
      }
    });

    container.addEventListener('dragleave', (e) => {
      const target = e.target.closest('.draggable');
      if (target) {
        target.classList.remove('drag-over');
      }
    });

    container.addEventListener('drop', (e) => {
      e.preventDefault();
      const target = e.target.closest('.draggable');
      if (target && target !== draggingEl) {
        target.classList.remove('drag-over');
        container.insertBefore(draggingEl, target.nextSibling);
      }
      
      
       function uploadResources(files) {
      const formData = new FormData();
      for (const file of files) {
        formData.append('resources[]', file);
      }

      fetch('upload_resources.php', {
        method: 'POST',
        body: formData
      })
      .then(res => res.text())
      .then(alert)
      .catch(err => console.error("Upload failed", err));
    }

   
    
    
    });
  </script>
  <script>
  
function openWebpage() {
  window.open('/jnndemo/library.html', '_blank');
}

function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
 document.querySelectorAll(".top-nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    nav.classList.remove("show");
  });
});


document.querySelectorAll('.top-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');

    // Hide all sections
    document.querySelectorAll('.nav-section').forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    // Update active link (optional styling)
    document.querySelectorAll('.top-nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});



document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('upload_resources.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById('uploadStatus').innerText = "✅ " + data;
  })
  .catch(err => {
    document.getElementById('uploadStatus').innerText = "❌ Upload failed.";
    console.error(err);
  });
});
</script>

</body>
</html>
