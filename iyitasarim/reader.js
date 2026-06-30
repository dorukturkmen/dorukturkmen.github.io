document.addEventListener('DOMContentLoaded', () => {
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const applicationList = document.getElementById('application-list');
    const emptyState = document.getElementById('empty-state');
    const detailView = document.getElementById('detail-view');
    const typeFilter = document.getElementById('type-filter');
    const filterSection = document.getElementById('filter-section');
    const listHeader = document.getElementById('list-header');
    const resultCount = document.getElementById('result-count');

    let applicationsData = [];
    let currentFilter = 'all';

    // Drag and Drop Events
    uploadZone.addEventListener('click', () => fileInput.click());
    
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    typeFilter.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderList();
    });

    // File Processing
    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            
            // Assume first sheet
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            
            // Convert to JSON
            const json = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
            
            if (json.length > 0) {
                processData(json);
            } else {
                alert("Dosya boş veya okunamadı.");
            }
        };
        reader.readAsArrayBuffer(file);
    }

    // Helper to flexibly find keys since Excel headers can be messy
    function findValue(row, keyword) {
        for (let key in row) {
            if (key.toLowerCase().includes(keyword.toLowerCase())) {
                return row[key];
            }
        }
        return "";
    }

    function processData(rawData) {
        applicationsData = rawData.map((row, index) => {
            return {
                id: index,
                timestamp: findValue(row, "Zaman damgasi") || findValue(row, "Zaman"),
                name: findValue(row, "BASVURAN") || findValue(row, "NAME"),
                phone: findValue(row, "TELEFON") || findValue(row, "PHONE"),
                email: findValue(row, "E-POSTA") || findValue(row, "MAIL"),
                bio: findValue(row, "ÖZGEÇMİŞ") || findValue(row, "BIO"),
                type: findValue(row, "TÜRÜ") || findValue(row, "SORT"),
                title: findValue(row, "BASLIK") || findValue(row, "TITLE"),
                abstract: findValue(row, "ÖNERİ-ÖZET") || findValue(row, "ABSTRACT"),
                keywords: findValue(row, "ANAHTAR") || findValue(row, "KEYWORDS"),
                themeRelation: findValue(row, "TEMA") || findValue(row, "THEME"),
                collaborations: findValue(row, "İŞBİRLİKLERİ") || findValue(row, "COLLAB"),
                eventDetails: findValue(row, "ETKİNLİK") || findValue(row, "EVENT"),
                product: findValue(row, "SONUÇ ÜRÜN") || findValue(row, "PRODUCT"),
                space: findValue(row, "MEKAN") || findValue(row, "SPACE"),
                tools: findValue(row, "ARAÇLAR") || findValue(row, "TOOLS")
            };
        });

        // Populate filters
        populateFilters();
        
        // Render List
        renderList();
        
        // Show UI elements
        filterSection.style.display = 'block';
        listHeader.style.display = 'block';
        uploadZone.style.display = 'none'; // Hide upload zone after successful load
        
        // Show first item details if available
        if (applicationsData.length > 0) {
            showDetails(applicationsData[0].id);
        }
    }

    function populateFilters() {
        const types = new Set();
        applicationsData.forEach(app => {
            if (app.type) {
                // Clean up string
                const typeStr = app.type.trim();
                if(typeStr) types.add(typeStr);
            }
        });

        // Keep 'all' option, clear others
        typeFilter.innerHTML = '<option value="all">Tüm Başvurular</option>';
        
        Array.from(types).sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }

    function renderList() {
        applicationList.innerHTML = '';
        
        const filteredData = applicationsData.filter(app => {
            if (currentFilter === 'all') return true;
            return app.type && app.type.trim() === currentFilter;
        });
        
        resultCount.textContent = `${filteredData.length} Başvuru`;

        filteredData.forEach(app => {
            const li = document.createElement('li');
            li.className = 'app-item';
            li.dataset.id = app.id;
            
            li.innerHTML = `
                <span class="app-item-type">${app.type || 'Belirtilmemiş'}</span>
                <div class="app-item-title">${app.title || 'Başlıksız Başvuru'}</div>
                <div class="app-item-name"><i class="ph ph-user"></i> ${app.name || 'İsimsiz'}</div>
            `;
            
            li.addEventListener('click', () => showDetails(app.id));
            applicationList.appendChild(li);
        });
        
        // Highlight active if possible
        const activeId = detailView.style.display !== 'none' ? parseInt(detailView.dataset.currentId) : -1;
        highlightListItem(activeId);
    }

    function highlightListItem(id) {
        document.querySelectorAll('.app-item').forEach(item => {
            if (parseInt(item.dataset.id) === id) {
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    function showDetails(id) {
        const app = applicationsData.find(a => a.id === id);
        if (!app) return;

        emptyState.style.display = 'none';
        detailView.style.display = 'block';
        detailView.dataset.currentId = id;
        
        highlightListItem(id);

        // Header mapping
        document.getElementById('d-type').textContent = app.type || 'Tür Belirtilmemiş';
        document.getElementById('d-title').textContent = app.title || 'Başlıksız Başvuru';
        document.getElementById('d-name').textContent = app.name || 'Belirtilmemiş';
        document.getElementById('d-email').textContent = app.email || '-';
        document.getElementById('d-email').href = app.email ? `mailto:${app.email}` : '#';
        document.getElementById('d-phone').textContent = app.phone || '-';
        
        // Format date if needed (Excel dates can be tricky, we just show raw for now)
        document.getElementById('d-date').textContent = app.timestamp || '-';

        // Body sections
        setTextContent('d-bio', app.bio);
        setTextContent('d-abstract', app.abstract);
        setTextContent('d-theme', app.themeRelation);
        setTextContent('d-collab', app.collaborations);
        setTextContent('d-event-details', app.eventDetails);
        setTextContent('d-product', app.product);
        setTextContent('d-space', app.space);
        setTextContent('d-tools', app.tools);

        // Keywords mapping (comma separated tags)
        const keywordsContainer = document.getElementById('d-keywords');
        keywordsContainer.innerHTML = '';
        if (app.keywords) {
            const words = app.keywords.split(',').map(w => w.trim()).filter(w => w);
            if (words.length > 0) {
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = word;
                    keywordsContainer.appendChild(span);
                });
                keywordsContainer.parentElement.style.display = 'block';
            } else {
                keywordsContainer.parentElement.style.display = 'none';
            }
        } else {
            keywordsContainer.parentElement.style.display = 'none';
        }
    }

    function setTextContent(elementId, content) {
        const el = document.getElementById(elementId);
        const section = el.parentElement;
        
        if (content && content.trim() !== '') {
            el.textContent = content;
            section.style.display = 'block';
        } else {
            section.style.display = 'none'; // Hide section if empty
        }
    }
});
