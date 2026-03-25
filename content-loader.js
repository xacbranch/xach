// Content Management System
class ContentManager {
    constructor() {
        this.content = null;
        this.currentProject = 'Gatorade'; // Default project
    }

    // Load content from JSON file
    async loadContent() {
        try {
            const response = await fetch('content.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.content = await response.json();
            console.log('Content loaded successfully:', this.content);
            return this.content;
        } catch (error) {
            console.error('Error loading content:', error);
            // Fallback: embed the content directly if fetch fails
            this.content = {
                "projects": {
                    "Gatorade": {
                        "title": "The video began as a simple announcement of Caitlin Clark signing with Gatorade but quickly went viral, generating 3.1 billion earned impressions and nearly 30 million Instagram plays. Its success turned it into a national TV spot, airing during Clark's final Iowa home game and the record-breaking Iowa vs. UConn Sweet 16. Off the momentum, Gatorade expanded the idea into a broader campaign, adopting \"You Can Too\" as a platform across NCAA women's basketball.",
                        "secondaryTitle": "Oh, and while we're on the topic of college phenoms signed by Gatorade, I also designed these 1 of 1 heat reactive cleats for Shedeur Sanders for his final game against USC",
                        "client": "Gatorade",
                        "year": "2023",
                        "agency": "Agency",
                        "agencyDetail": "Role",
                        "partner": "Laundry Service",
                        "partnerDetail": "Director"
                    },
                    "Hot Ones": {
                        "title": "I developed the visual language for Hot Ones, including typography, motion principles, and graphic assets, then translated them into toolkits for broadcast and digital use.",
                        "client": "Hot Ones",
                        "year": "2018",
                        "agency": "Company",
                        "agencyDetail": "First We Feast",
                        "partner": "Role",
                        "partnerDetail": "Art Director/Designer"
                    },
                    "McDonaldland": {
                        "title": "I led creative and design on the revival of McDonaldland on Snapchat, reimagining the 1970s universe through AR for a new generation.",
                        "arDescription": "The AR super lens delivered 17+ immersive experiences, from interactive games to digitally transforming McDonald's restaurants into McDonaldland",
                        "secondaryTitle": "From concept through execution, I directed both the creative vision and design of characters, environments, animations, and interactive experiences.",
                        "client": "McDonald's",
                        "year": "2025",
                        "agency": "Agency",
                        "agencyDetail": "Arcadia",
                        "partner": "Role",
                        "partnerDetail": "Creative Lead"
                    },
                    "Coca-Cola": {
                        "title": "Coca-Cola and Snap reimagined the vending machine as an inclusive AR experience for the Olympics. Designed for Olympians and Paralympians alike, the machine could be operated through head movements, worked across all heights and limb differences, and communicated through universal icons instead of language. To vend a Coke, athletes teamed up, turning a simple transaction into a shared moment of connection.",
                        "client": "Coca-Cola x Paris Olympics",
                        "year": "2024",
                        "agency": "Agency",
                        "agencyDetail": "Arcadia",
                        "partner": "Role",
                        "partnerDetail": "Design Lead"
                    },
                    "Directing Reel": {
                        "title": "I started this journey as a film director, and every skill I have in design, creative, and presentation grew out of my love for making movies. For personal projects, I challenge myself to shoot on Super 16mm, a format that forces me to be intentional with every frame. Filmmaking remains the foundation of my process, shaping how I see and how I lead.",
                        "client": "Making Movies",
                        "year": "Since 2006",
                        "agency": "Agency",
                        "agencyDetail": "Self",
                        "partner": "Role",
                        "partnerDetail": "Director"
                    },
                    "Hennessy": {
                        "title": "A generative AI experience for Hennessy's celebration of Hip Hop's 50th Anniversary that puts you on the cover of your own hip hop album. Upload a selfie, pick your era and region, and AI transforms your photo into a film-shot album cover, styled, lit, and framed like the real thing.",
                        "client": "Hennessy",
                        "year": "2023",
                        "agency": "Agency",
                        "agencyDetail": "Laundry Service",
                        "partner": "Role",
                        "partnerDetail": "Sr. Art Director, Creative AI Lead"
                    }
                }
            };
            return this.content;
        }
    }

    // Set the current project
    setProject(projectKey) {
        this.currentProject = projectKey;
        this.updatePageContent();
    }

    // Update the page with current project content
    updatePageContent() {
        if (!this.content || !this.content.projects[this.currentProject]) {
            console.error('Project not found:', this.currentProject);
            return;
        }

        const project = this.content.projects[this.currentProject];
        console.log('Updating page with project:', project);
        
        // Update main title
        const titleElement = document.querySelector('.text-large .inline');
        console.log('Title element found:', titleElement);
        if (titleElement) {
            console.log('Setting title to:', project.title);
            let titleHTML = project.title.replace(/\n/g, '<br>');
            
            // Add word highlighting for Gatorade project
            if (this.currentProject === 'Gatorade') {
                titleHTML = titleHTML
                    .replace(/Caitlin Clark/g, '<span class="highlight-word">Caitlin Clark</span>')
                    .replace(/3\.1 billion earned impressions/g, '<span class="highlight-word delay-1">3.1 billion earned impressions</span>')
                    .replace(/Gatorade expanded the idea into a broader campaign/g, '<span class="highlight-word delay-2">Gatorade expanded the idea into a broader campaign</span>');
            }
            
            // Add word highlighting for Hot Ones project
            if (this.currentProject === 'Hot Ones') {
                titleHTML = titleHTML
                    .replace(/I/g, '<span class="highlight-word">I</span>')
                    .replace(/developed/g, '<span class="highlight-word delay-1">developed</span>')
                    .replace(/the visual language/g, '<span class="highlight-word delay-2">the visual language</span>')
                    .replace(/for Hot Ones/g, '<span class="highlight-word delay-3">for Hot Ones</span>');
            }
            
            // Add word highlighting for Hennessy project
            if (this.currentProject === 'Hennessy') {
                titleHTML = titleHTML
                    .replace(/generative AI experience/g, '<span class="highlight-word">generative AI experience</span>')
                    .replace(/Hip Hop's 50th Anniversary/g, '<span class="highlight-word delay-1">Hip Hop\'s 50th Anniversary</span>')
                    .replace(/styled, lit, and framed like the real thing/g, '<span class="highlight-word delay-2">styled, lit, and framed like the real thing</span>');
            }

            // Add word highlighting for McDonaldland project
            if (this.currentProject === 'McDonaldland') {
                titleHTML = titleHTML
                    .replace(/\bled\b/g, '<span class="highlight-word">led</span>')
                    .replace(/creative and design/g, '<span class="highlight-word delay-1">creative and design</span>')
                    .replace(/on the revival of/g, '<span class="highlight-word delay-2">on the revival of</span>')
                    .replace(/McDonaldland/g, '<span class="highlight-word delay-3">McDonaldland</span>');
            }
            
            titleElement.innerHTML = titleHTML;
        }

        // Update secondary title
        const secondaryTitleElement = document.getElementById('secondaryTitle');
        const secondaryTitleSection = document.getElementById('secondaryTitleSection');
        
        console.log('Secondary title element found:', secondaryTitleElement);
        console.log('Secondary title section found:', secondaryTitleSection);
        
        if (secondaryTitleElement && project.secondaryTitle) {
            console.log('Setting secondary title to:', project.secondaryTitle);
            let secondaryTitleHTML = project.secondaryTitle;
            
            // Add word highlighting for Gatorade project secondary title
            if (this.currentProject === 'Gatorade') {
                secondaryTitleHTML = secondaryTitleHTML
                    .replace(/1 of 1/g, '<span class="highlight-word">1 of 1</span>')
                    .replace(/cleats/g, '<span class="highlight-word delay-1">cleats</span>')
                    .replace(/Shedeur Sanders/g, '<span class="highlight-word delay-2">Shedeur Sanders</span>');
            } else if (this.currentProject === 'McDonaldland') {
                // Add word-by-word highlighting for the specific phrase
                secondaryTitleHTML = secondaryTitleHTML
                    .replace(/I directed both the creative vision and design of characters/g, 
                        '<span class="highlight-word">I</span> <span class="highlight-word delay-1">directed</span> <span class="highlight-word delay-2">both</span> <span class="highlight-word delay-3">the</span> <span class="highlight-word delay-4">creative</span> <span class="highlight-word delay-5">vision</span> <span class="highlight-word delay-6">and</span> <span class="highlight-word delay-7">design</span> <span class="highlight-word delay-8">of</span> <span class="highlight-word delay-9">characters</span>');
            }
            
            secondaryTitleElement.innerHTML = secondaryTitleHTML;
            
            // Show the secondary title section
            if (secondaryTitleSection) {
                secondaryTitleSection.style.display = 'flex';
            }
        } else {
            // Hide the secondary title section if no secondary title
            if (secondaryTitleSection) {
                secondaryTitleSection.style.display = 'none';
            }
        }

        // Update metadata
        const metadataElements = document.querySelectorAll('.grid span');
        if (metadataElements.length >= 6) {
            metadataElements[0].textContent = project.client;
            metadataElements[1].textContent = project.year;
            metadataElements[2].textContent = project.agency;
            metadataElements[3].textContent = project.agencyDetail;
            metadataElements[4].textContent = project.partner;
            metadataElements[5].textContent = project.partnerDetail;
        }

        // Update page title
        document.title = `${project.client} - Xach`;
        
        // Update current page indicator in menu
        const currentPageElement = document.getElementById('currentPage');
        if (currentPageElement) {
            currentPageElement.textContent = project.client;
        }

        // Show/hide project-specific content
        this.updateProjectSpecificContent();
        
        // Update active state in work list
        const workItems = document.querySelectorAll('.work-item');
        workItems.forEach(item => {
            item.classList.remove('active');
            const link = item.querySelector('.work-link');
            if (link) {
                const linkProject = new URLSearchParams(link.href.split('?')[1]).get('project');
                if (linkProject === this.currentProject) {
                    item.classList.add('active');
                }
            }
        });
    }

    // Update project-specific content visibility
    updateProjectSpecificContent() {
        // Hide all project-specific content first
        const gatoradeContent = document.getElementById('gatoradeContent');
        const hotOnesContent = document.getElementById('hotOnesContent');
        const mcdonaldlandContent = document.getElementById('mcdonaldlandContent');
        const directingReelContent = document.getElementById('directingReelContent');
        const cocaColaContent = document.getElementById('cocaColaContent');
        const hennessyContent = document.getElementById('hennessyContent');
        const gatoradeCarousel = document.getElementById('gatoradeCarouselSection');
        const projectContainer = document.getElementById('projectSpecificContent');

        if (gatoradeContent) gatoradeContent.style.display = 'none';
        if (hotOnesContent) hotOnesContent.style.display = 'none';
        if (mcdonaldlandContent) mcdonaldlandContent.style.display = 'none';
        if (directingReelContent) directingReelContent.style.display = 'none';
        if (cocaColaContent) cocaColaContent.style.display = 'none';
        if (hennessyContent) hennessyContent.style.display = 'none';
        if (gatoradeCarousel) gatoradeCarousel.style.display = 'none';
        
        // Show content based on current project
        if (this.currentProject === 'Gatorade') {
            if (gatoradeContent) gatoradeContent.style.display = 'block';
            if (gatoradeCarousel) gatoradeCarousel.style.display = 'block';
            // Reset container padding for Gatorade
            if (projectContainer) projectContainer.style.padding = '40px 60px';
        } else if (this.currentProject === 'Hot Ones') {
            if (hotOnesContent) hotOnesContent.style.display = 'block';
            // Remove container padding for Hot Ones edge-to-edge display
            if (projectContainer) projectContainer.style.padding = '0';
        } else if (this.currentProject === 'McDonaldland') {
            if (mcdonaldlandContent) mcdonaldlandContent.style.display = 'block';
            // Reset container padding for McDonaldland
            if (projectContainer) projectContainer.style.padding = '40px 60px';
            
            // Show McDonaldland reunion video
            const mcdonaldlandReunionVideo = document.getElementById('mcdonaldlandReunionVideo');
            if (mcdonaldlandReunionVideo) mcdonaldlandReunionVideo.style.display = 'block';
            
            // Show McDonaldland AR description section
            const mcdonaldlandARSection = document.getElementById('mcdonaldlandARSection');
            if (mcdonaldlandARSection) mcdonaldlandARSection.style.display = 'flex';
            
            // Show McDonaldland games video
            const mcdonaldlandGamesVideo = document.getElementById('mcdonaldlandGamesVideo');
            if (mcdonaldlandGamesVideo) mcdonaldlandGamesVideo.style.display = 'block';
            
            // Show scroll indicator with neon glow for McDonaldland
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) scrollIndicator.classList.add('mcdonaldland-active');
            
            // Add neon animation to extended text
            this.animateMcDonaldlandExtendedText();
            
            // Add neon animation to AR description text
            this.animateMcDonaldlandARText();
        } else if (this.currentProject === 'Directing Reel') {
            if (directingReelContent) directingReelContent.style.display = 'block';
            // Remove container padding for full-width video
            if (projectContainer) projectContainer.style.padding = '0';
        } else if (this.currentProject === 'Coca-Cola') {
            if (cocaColaContent) cocaColaContent.style.display = 'block';
            // Remove container padding for full-width video
            if (projectContainer) projectContainer.style.padding = '0';
        } else if (this.currentProject === 'Hennessy') {
            if (hennessyContent) hennessyContent.style.display = 'block';
            // Reset container padding for Hennessy
            if (projectContainer) projectContainer.style.padding = '40px 60px';
        } else {
            // For other projects, show default padding but no specific content
            if (projectContainer) projectContainer.style.padding = '40px 60px';
        }
        
        // Hide McDonaldland-specific content for non-McDonaldland projects
        if (this.currentProject !== 'McDonaldland') {
            const mcdonaldlandReunionVideo = document.getElementById('mcdonaldlandReunionVideo');
            if (mcdonaldlandReunionVideo) mcdonaldlandReunionVideo.style.display = 'none';
            
            const mcdonaldlandARSection = document.getElementById('mcdonaldlandARSection');
            if (mcdonaldlandARSection) mcdonaldlandARSection.style.display = 'none';
            
            const mcdonaldlandGamesVideo = document.getElementById('mcdonaldlandGamesVideo');
            if (mcdonaldlandGamesVideo) mcdonaldlandGamesVideo.style.display = 'none';
            
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) scrollIndicator.classList.remove('mcdonaldland-active');
        }
    }

    // Get all available projects
    getProjectList() {
        if (!this.content) return [];
        return Object.keys(this.content.projects);
    }

    // Initialize the content manager
    async init(projectKey = null) {
        console.log('Initializing content manager with project:', projectKey);
        await this.loadContent();
        if (projectKey) {
            this.currentProject = projectKey;
            console.log('Set current project to:', this.currentProject);
        }
        this.updatePageContent();
    }
    
    // Add neon animation to McDonaldland AR description text
    animateMcDonaldlandARText() {
        const arTextElement = document.getElementById('mcdonaldlandARText');
        if (!arTextElement) return;
        
        let text = arTextElement.textContent;
        
        // Highlight key phrases with staggered animation delays
        text = text.replace(/\bAR super lens\b/g, '<span class="highlight-word">AR super lens</span>');
        text = text.replace(/\b17\+ immersive experiences\b/g, '<span class="highlight-word delay-1">17+ immersive experiences</span>');
        
        arTextElement.innerHTML = text;
    }

    // Add neon animation to McDonaldland extended text
    animateMcDonaldlandExtendedText() {
        const extendedTextElement = document.getElementById('mcdonaldlandExtendedText');
        if (extendedTextElement) {
            let extendedTextHTML = extendedTextElement.innerHTML;
            
            // Apply neon highlighting to the new bracketed phrases
            extendedTextHTML = extendedTextHTML
                .replace(/\b14,000 U\.S\. McDonald's locations\b/g, '<span class="highlight-word">14,000 U.S. McDonald\'s locations</span>')
                .replace(/\bThe geofencing tech was so effective Snap patented it\b/g, '<span class="highlight-word delay-1">The geofencing tech was so effective Snap patented it</span>');
            
            extendedTextElement.innerHTML = extendedTextHTML;
        }
    }
}

// Global content manager instance
const contentManager = new ContentManager();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get project from URL parameter or use default
    const urlParams = new URLSearchParams(window.location.search);
    const projectKey = urlParams.get('project') || 'Gatorade';
    
    contentManager.init(projectKey);
});

// Export for use in other scripts
window.contentManager = contentManager;
