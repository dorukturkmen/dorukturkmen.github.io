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
    // Typical format: Author(s). (Year). Title. Journal. URL [index]
    
    // Find Year
    const yearMatch = line.match(/\((\d{4})\)\./);
    if (!yearMatch) {
        console.log("Could not find year in:", line);
        // Fallback: Just put everything in title
        articles.push({
            year: '',
            title: line,
            authors: '',
            journal: '',
            cluster: currentCluster,
            link: null
        });
        continue;
    }
    
    const year = yearMatch[1];
    const yearIndex = yearMatch.index;
    
    let authors = line.substring(0, yearIndex).trim();
    if (authors.endsWith('.')) authors = authors.slice(0, -1);
    
    let remainder = line.substring(yearIndex + yearMatch[0].length).trim();
    
    // Find URL
    let link = null;
    const urlMatch = remainder.match(/(https?:\/\/[^\s]+)/);
    if (urlMatch) {
        link = urlMatch[1];
        remainder = remainder.replace(urlMatch[0], '').trim();
    }
    
    // Sometimes there's index info like [İndeks: SSCI] at the end, or (SSCI). 
    // We can just append it to journal, or leave it in remainder.
    
    // Split remainder into Title and Journal
    // The title ends with a period, question mark, or closing quote followed by space.
    // e.g., "Title." Journal...
    // e.g., Title. Journal...
    
    let title = '';
    let journal = '';
    
    // A heuristic to split by the first dot-space ". " or quote-space '" ' or '? '
    const titleEndMatch = remainder.match(/(\. |\." |\? |! |" )/);
    if (titleEndMatch) {
        const splitIdx = titleEndMatch.index + titleEndMatch[0].length;
        title = remainder.substring(0, splitIdx).trim();
        journal = remainder.substring(splitIdx).trim();
    } else {
        title = remainder;
    }
    
    // Clean up title trailing chars
    if (title.endsWith('."')) {
        title = title.slice(0, -2) + '"';
    } else if (title.endsWith('.')) {
        title = title.slice(0, -1);
    }
    
    // Remove enclosing quotes around title if present
    if (title.startsWith('"') && title.endsWith('"')) {
        title = title.slice(1, -1);
    } else if (title.startsWith('“') && title.endsWith('”')) {
        title = title.slice(1, -1);
    }

    articles.push({
        year: parseInt(year, 10),
        title,
        authors,
        journal,
        cluster: currentCluster,
        link
    });
}

const jsContent = `const researchArticles = ${JSON.stringify(articles, null, 4)};`;
fs.writeFileSync('research-data.js', jsContent, 'utf8');

console.log('Successfully generated research-data.js with ' + articles.length + ' articles.');
