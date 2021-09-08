//Add Sidebar Options
const sidebar = require('./sidebar');
module.exports = {
    lang: 'en-US',
    title: 'Bump Reminder Documentation',
    description: 'The Documentation Page for Bump Reminder',
    docsDir: 'guide',
    themeConfig: {
        logo: 'https://cdn.discordapp.com/avatars/735147814878969968/c8ef41562f2306cde5bcb4e0a5778de8.png',
        sidebar: sidebar,
        //Search:
        search: true,
        contributors: false,
        nav: [{ text: 'Home', link: '/' },
        { text: 'Invite', link: 'https://discord.com/api/oauth2/authorize?client_id=735147814878969968&permissions=805825744&scope=applications.commands%20bot' },
        { text: 'Support Server', link: 'https://discord.gg/dXJPy8m ' }]
    }
}

