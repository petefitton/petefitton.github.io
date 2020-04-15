module.exports = {
  siteTitle: 'Pete Fitton\'s Portfolio', // <title>
  manifestName: 'Prologue',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/screenshots/portfolioFavicon.png',
  pathPrefix: `/gatsby-starter-prologue/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Pete',
  heading: 'Full-Stack Web Developer\npetefitton@gmail.com',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/petefitton',
      download: "No"
    },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/petefitton/',
      download: "No"
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:petefitton@gmail.com',
      download: "No"
    },
    {
      icon: 'fa-file',
      name: 'Resume',
      url: '/pfPortfolio/PeteFittonResumeApr2020.pdf',
      download: "Yes"
    }, 
  ],
};
