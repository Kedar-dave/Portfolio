const config = {
    urls: {
        github: "https://github.com/Kedar-dave",
        linkedin: "https://www.linkedin.com/in/kd29/",
        email: "mailto:kedardave2909@gmail.com",
        resume: "assets/resume.pdf",


        // Project Links
        plottwist: "https://github.com/Kedar-dave/PlotTwist", // Replace with actual
        imposter: "https://github.com/Kedar-dave/Imposter-Creator", // Replace with actual
        intellisearch: "https://github.com/Kedar-dave/IntelliSearch",
        salesDashboard: "https://github.com/Kedar-dave/Sales-Analysis-Dashboard",
        researchPaper: "https://www.researchgate.net/publication/389972713_Approaches_and_Applications_of_Lane_Detection_for_Autonomous_Driving_Progression"
    }
};

// Function to apply links
document.addEventListener('DOMContentLoaded', () => {
    const applyLink = (id, url) => {
        const element = document.getElementById(id);
        if (element) element.href = url;
    };

    applyLink('link-github', config.urls.github);
    applyLink('link-linkedin', config.urls.linkedin);
    applyLink('link-email', config.urls.email);
    applyLink('link-resume', config.urls.resume);

    applyLink('btn-plottwist', config.urls.plottwist);
    applyLink('btn-imposter', config.urls.imposter);
    applyLink('link-intellisearch', config.urls.intellisearch);
    applyLink('link-salesDashboard', config.urls.salesDashboard);

    applyLink('link-research', config.urls.researchPaper);

});
