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
    }
}

