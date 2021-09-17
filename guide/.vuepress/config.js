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
        ['meta', { property: 'og:url', content: 'https://bumpreminder.tk/' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
    ],
    docsDir: 'guide',
    themeConfig: {
        logo: 'https://cdn.discordapp.com/avatars/735147814878969968/c8ef41562f2306cde5bcb4e0a5778de8.png',
        sidebar: sidebar,
        //Search:
        search: true,
        contributors: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Invite', link: 'https://discord.com/api/oauth2/authorize?client_id=735147814878969968&permissions=805825744&scope=applications.commands%20bot' },
            { text: 'Support Server', link: 'https://discord.gg/dXJPy8m ' }
        ]
    }
}

