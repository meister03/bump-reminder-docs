module.exports =  {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
			],
		},
		{
			text: 'Bump Reminder',
			children: [
				'/bumpreminder/',
				'/bumpreminder/setup.md',
				'/bumpreminder/customize.md',
				'/bumpreminder/premium-customization.md',
                '/bumpreminder/faq.md',
                '/bumpreminder/commands.md'
			],
		},
        {
			text: 'Reminders',
			children: [
				'/reminder/',
			],
		},
	
	],
};