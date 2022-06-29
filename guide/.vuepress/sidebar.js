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
			collapsable: true,
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
				'/reminder/util.md',
				'/reminder/interval.md',
				'/reminder/onetime.md',
				'/reminder/action.md',
				'/reminder/customize.md',
				'/reminder/commands.md',
			],
		},
		{
			text: 'Vote Tracker',
			children: [
				'/votetracker/',
				'/votetracker/setup.md',
				'/votetracker/rewards.md',
				'/votetracker/card.md',
				'/votetracker/features.md',
				'/votetracker/showcase.md',
				'/votetracker/commands.md',
			],
		},
		{
			text: 'Question of the Day',
			children: [
				'/qotd/',
				'/qotd/setup.md',
				'/qotd/customquestion.md',
				'/qotd/showcase.md',
				'/qotd/commands.md',
			],
		},
		{
			text: 'Counting',
			children: [
				'/counting/',
				'/counting/setup.md',
				'/counting/showcase.md',
				'/counting/commands.md',
			],
		},
		{
			text: 'AFK System',
			children: [
				'/afk/',
				'/afk/commands.md',
			],
		},
		{
			text: 'Welcomer',
			children: [
				'/welcomer/',
				'/welcomer/setup.md',
				'/welcomer/customize.md',
				'/welcomer/showcase.md',
				'/welcomer/commands.md',
			],
		},
		{
			text: 'Boost Tracker',
			children: [
				'/boosttracker/',
				'/boosttracker/setup.md',
				'/boosttracker/customize.md',
				'/boosttracker/features.md',
				'/boosttracker/showcase.md',
				'/boosttracker/commands.md',
			],
		},
			{
			text: 'Ticket System',
			children: [
				'/ticket/',
				'/ticket/setup.md',
				'/ticket/panel.md',
				'/ticket/showcase.md',
				'/ticket/commands.md',
			],
		},
		{
			text: 'Suggestion Board',
			children: [
				'/suggestion/',
				'/suggestion/commands.md',
			],
		},
		{
			text: 'Other Commands',
			children: [
				'/othercommands/',
				'/othercommands/bot.md',
				'/othercommands/fun.md',
				'/othercommands/image.md',
				'/othercommands/info.md',
				'/othercommands/misc.md',
				'/othercommands/mobile.md',
			],
		},
		{
			text: 'Premium & CustomBot',
			children: [
				'/premium/',
				'/premium/custombot.md',
			],
		},
		{
			text: 'Privacy Policy & ToS',
			children: [
				'/privacytos/privacypolicy.md',
				'/privacytos/tos.md',
			],
		},
	],
};