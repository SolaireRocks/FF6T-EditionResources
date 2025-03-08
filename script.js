document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#main-nav a');
    const contentDiv = document.getElementById('content');

    async function loadPage(pageName) {
        try {
            const response = await fetch(pageName);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (pageName.endsWith('.txt')) {
                // Handle .txt files:  Read as text, wrap in <pre>
                const text = await response.text();
                contentDiv.innerHTML = `<pre>${text}</pre>`;
            } else {
                // Handle .html files
                const html = await response.text();
                contentDiv.innerHTML = html;
            }
            //Add spoiler listeners
            addSpoilerListeners();

            // Update URL (without the .html, for cleaner URLs)
            const urlPageName = pageName.replace(/\.html$/, '').replace(/\.txt$/, '');
            history.pushState({ page: pageName }, '', `?page=${urlPageName}`);

        } catch (error) {
            console.error('Error loading page:', error);
            contentDiv.innerHTML = `<p>Error loading page: ${pageName}</p>`;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const pageName = link.dataset.page;
            loadPage(pageName);
        });
    });
        // --- Add click event listeners to spoiler buttons ---
        function addSpoilerListeners() {
        contentDiv.querySelectorAll('.spoiler-link').forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.classList.toggle('hidden');
                    this.textContent = targetElement.classList.contains('hidden') ? "Show Content" : "Hide Content"; //Change text
                }
            });
        });
    }

    // Initial load and back/forward handling
    function handleInitialLoad() {
        const urlParams = new URLSearchParams(window.location.search);
        let initialPage = urlParams.get('page');

        // If there's a page in the URL, add .html (or .txt if appropriate)
        if (initialPage) {
            // Check if the linked files exist. If not default to readme.html
            fetch(initialPage + ".html").then(response => {
                if (response.ok) {
                    initialPage = initialPage + ".html"
                    loadPage(initialPage);
                }
                else{
                    fetch(initialPage + ".txt").then(response =>{
                        if(response.ok){
                            initialPage = initialPage + ".txt"
                            loadPage(initialPage);
                        }
                        else{
                            loadPage("readme.html"); // Default if not found
                        }
                    })
                }
            });
        }
         else {
            loadPage("readme.html"); // Default if no page specified
        }
    }

    window.addEventListener('popstate', (event) => {
        if (event.state) {
            loadPage(event.state.page);
        } else {
            loadPage("readme.html"); // Default
        }
    });

    handleInitialLoad();
});