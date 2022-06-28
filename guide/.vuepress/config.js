//Add Sidebar Options
const sidebar = require('./sidebar');
module.exports = {
    lang: 'en-US',
    title: 'Bump Reminder Guide',
    description: 'The Documentation Page for Bump Reminder',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { property: 'og:title', content: 'Bump Reminder Guide' }],
        ['meta', { property: 'og:description', content: 'Bump Reminder, The Best Unique Multipurpose Reminder Bot' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://bumpreminder.com/' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
    ],
    docsDir: 'guide',
    themeConfig: {
        logo: './assets/favicon.ico',
        sidebar: sidebar,
        //Search:
        search: true,
        contributors: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Invite', link: 'https://discord.com/api/oauth2/authorize?client_id=827536878915944469&permissions=805825744&scope=applications.commands%20bot' },
            { text: 'Support Server', link: 'https://discord.gg/dXJPy8m ' }
        ]
    }
}

