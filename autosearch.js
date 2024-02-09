



// Function to perform a search in Bing in a new tab without switching to it
function performSearchInBing(query) {
    // Construct the Bing search URL
    const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    
    // Open a new tab with the Bing search URL
    const newTab = window.open('', '_blank');
    
    // Navigate the new tab to the Bing search URL
    newTab.location.href = searchUrl;
}

// Array of search terms
const searchTerms = ['cd', 'ce', 'cf', 'cg', 'ch', 'ci', 'cj', 'ck', 'cl', 'cm', 'cn', 'co', 'cp', 'cq', 'cr', 'cs', 'ct', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz'];

// Function to perform a search with the next word in the array
function performSequentialSearch() {
    // Get the next search term in the array
    const nextSearchTerm = searchTerms.shift();

    // If there are no more search terms, clear the interval
    if (!nextSearchTerm) {
        clearInterval(searchInterval);
        console.log('All searches completed.');
        return;
    }

    // Perform a search with the current search term
    performSearchInBing(nextSearchTerm);
}

// Perform the initial search
performSequentialSearch();

// Schedule repeated searches every 5 seconds
const searchInterval = setInterval(performSequentialSearch, 4000);


