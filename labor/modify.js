const fs = require('fs');

let content = fs.readFileSync('people.html', 'utf8');

// 1. Change CORE TEAM to THE TEAM
content = content.replace('<h1>CORE TEAM</h1>', '<h1>THE TEAM</h1>');

// 2. Extract the three advisors' articles
const eylemRegex = /<!-- Advisor 1 -->\s*<article class="member-card">[\s\S]*?<\/article>/;
const gokcenRegex = /<!-- Advisor 2 -->\s*<article class="member-card">[\s\S]*?<\/article>/;
const ozgeRegex = /<!-- Advisor 3 -->\s*<article class="member-card">[\s\S]*?<\/article>/;

const eylemMatch = content.match(eylemRegex);
const gokcenMatch = content.match(gokcenRegex);
const ozgeMatch = content.match(ozgeRegex);

let eylemStr = eylemMatch ? eylemMatch[0] : '';
let gokcenStr = gokcenMatch ? gokcenMatch[0] : '';
let ozgeStr = ozgeMatch ? ozgeMatch[0] : '';

// Create Zehra's article
const zehraStr = `                <!-- Member 10 (Zehra) -->
                <article class="member-card">
                    <img src="https://via.placeholder.com/400x400.png?text=Zehra" alt="Zehra" class="member-img">
                    <div class="member-info">
                        <span class="member-title"></span>
                        <h3 class="member-name">Zehra</h3>
                        <p class="member-bio">Research areas TBA</p>
                        <button class="btn-read-more">Read Full Bio &rarr;</button>
                        <div class="member-full-bio" style="display: none;">
                            Bio TBA
                        </div>
                        <div class="member-socials">
                        </div>
                    </div>
                </article>`;

// Remove them from their original place
if (eylemStr) content = content.replace(eylemStr, '');
if (gokcenStr) content = content.replace(gokcenStr, '');
if (ozgeStr) content = content.replace(ozgeStr, '');

// The old advisory board grid is now almost empty
// Replace it completely
const newAdvisoryGrid = `            <section class="team-grid">
                <!-- Advisor Skadi -->
                <article class="member-card">
                    <div class="member-info">
                        <h3 class="member-name">Skadi Loist</h3>
                        <p class="member-bio">Affiliation & Research Areas TBA</p>
                    </div>
                </article>

                <!-- Advisor Fernando -->
                <article class="member-card">
                    <div class="member-info">
                        <h3 class="member-name">Fernando Vallejo</h3>
                        <p class="member-bio">Affiliation & Research Areas TBA</p>
                    </div>
                </article>
            </section>`;

const advisoryGridRegex = /<section class="team-grid">\s*<\/section>/;
content = content.replace(advisoryGridRegex, newAdvisoryGrid);

// Now insert Eylem, Gokcen, Ozge, Zehra to The Team section
// Find where the first team-grid ends
const advisorySectionIdx = content.indexOf('<!-- Advisory Board Section -->');
if (advisorySectionIdx !== -1) {
    const firstPart = content.substring(0, advisorySectionIdx);
    const secondPart = content.substring(advisorySectionIdx);

    // Find the last </article> before advisory section
    const lastArticleIdx = firstPart.lastIndexOf('</article>');
    if (lastArticleIdx !== -1) {
        // Insert right after the last </article>
        const insertionPoint = lastArticleIdx + '</article>'.length;
        const insertText = '\n\n' + eylemStr + '\n\n' + gokcenStr + '\n\n' + ozgeStr + '\n\n' + zehraStr;
        content = firstPart.substring(0, insertionPoint) + insertText + firstPart.substring(insertionPoint) + secondPart;
    }
}

fs.writeFileSync('people.html', content, 'utf8');
console.log('Success');
