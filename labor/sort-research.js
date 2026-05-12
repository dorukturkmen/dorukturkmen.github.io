const fs = require('fs');

const text = fs.readFileSync('research-clusters.txt', 'utf8');
const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const articles = [];
let currentCluster = 'cluster-1';

for (const line of lines) {
    if (line.toLowerCase().startsWith('cluster 1:')) { currentCluster = 'cluster-1'; continue; }
    if (line.toLowerCase().startsWith('cluster 2:')) { currentCluster = 'cluster-2'; continue; }
    if (line.toLowerCase().startsWith('cluster 3:')) { currentCluster = 'cluster-3'; continue; }
    if (line.toLowerCase().startsWith('cluster 4:')) { currentCluster = 'cluster-4'; continue; }

    // Parse citation
    const yearMatch = line.match(/\((\d{4})\)\./);
    let yearVal = NaN;
    let authors = '';
    let title = '';
    let journal = '';
    let link = null;

    if (!yearMatch) {
        title = line;
    } else {
        yearVal = parseInt(yearMatch[1], 10);
        const yearIndex = yearMatch.index;
        
        authors = line.substring(0, yearIndex).trim();
        if (authors.endsWith('.')) authors = authors.slice(0, -1);
        
        let remainder = line.substring(yearIndex + yearMatch[0].length).trim();
        
        const urlMatch = remainder.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch) {
            link = urlMatch[1];
            remainder = remainder.replace(urlMatch[0], '').trim();
        }
        
        const titleEndMatch = remainder.match(/(\. |\." |\? |! |" )/);
        if (titleEndMatch) {
            const splitIdx = titleEndMatch.index + titleEndMatch[0].length;
            title = remainder.substring(0, splitIdx).trim();
            journal = remainder.substring(splitIdx).trim();
        } else {
            title = remainder;
        }
        
        if (title.endsWith('."')) {
            title = title.slice(0, -2) + '"';
        } else if (title.endsWith('.')) {
            title = title.slice(0, -1);
        }
        
        if (title.startsWith('"') && title.endsWith('"')) {
            title = title.slice(1, -1);
        } else if (title.startsWith('“') && title.endsWith('”')) {
            title = title.slice(1, -1);
        }
    }

    articles.push({
        year: isNaN(yearVal) ? '' : yearVal,
        title,
        authors,
        journal,
        cluster: currentCluster,
        link,
        originalLine: line
    });
}

// Sort by year (descending)
articles.sort((a, b) => {
    let yA = (typeof a.year === 'number') ? a.year : 0;
    let yB = (typeof b.year === 'number') ? b.year : 0;
    return yB - yA;
});

// Clean up originalLine from the object so it doesn't end up in research-data.js
const outArticles = articles.map(a => {
    return {
        year: a.year,
        title: a.title,
        authors: a.authors,
        journal: a.journal,
        cluster: a.cluster,
        link: a.link
    };
});

const jsContent = `const researchArticles = ${JSON.stringify(outArticles, null, 4)};`;
fs.writeFileSync('research-data.js', jsContent, 'utf8');

// Generate research-clusters.txt
const clustersNames = {
    'cluster-1': 'Cluster 1: Visual and Material Everydayness',
    'cluster-2': 'Cluster 2: Digital and Platformized Everyday Life',
    'cluster-3': 'Cluster 3: Memory, Affect, and Temporality',
    'cluster-4': 'Cluster 4: Real Life Methodologies Lab'
};

let newTxt = '';
for (const [cKey, cName] of Object.entries(clustersNames)) {
    newTxt += cName + '\n';
    const cArts = articles.filter(a => a.cluster === cKey);
    for (const a of cArts) {
        newTxt += '\t' + a.originalLine + '\n';
    }
}

fs.writeFileSync('research-clusters.txt', newTxt, 'utf8');

console.log('Successfully sorted and updated research-data.js and research-clusters.txt');
