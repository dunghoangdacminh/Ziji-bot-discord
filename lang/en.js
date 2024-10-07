module.exports = {
	name: "en",
	local_names: "en_US",
	until: {
		success: "Successfully executed this command!",
		notHavePremission: "You do not have permission to execute this command!",
		name: "English",
		langChange: "Your language has been changed to:",
		requestBy: "Requested by:",
		noDB: "❌ | Database is not currently enabled, please contact dev bot",
		NOPermission: "❌ | Bot does not have permission to chat and execute command in this channel",
		noPermission: "❌ | You do not have permission to execute this command!",
		cooldown: "Please wait, you are on a cooldown for `{command}`! You can use it again {time}.",
	},
	BotStats: {
		Description: "Bot stats",
		OS: "Curent OS",
		djsVersion: "Discord.js version",
		ServerLength: "Total server",
		RAMUsage: "RAM usage",
	},
	Help: {
		Placeholder: "> | Select a category to view the commands",
		GuildCommands: "Guild Commands",
		ContextCommands: "Context Commands",
		PlayerButtons: "Player Commands",
		VoiceCommands: "Voice Commands",
		GuildCommandsDescription: "View the list of commands that can be used in the server",
		ContextCommandsDescription: "View the list of commands that can be used in the context menu",
		PlayerButtonsDescription: "View the list of buttons that can be used in the music player",
		VoiceCommandsDescription: "View the list of commands that can be used by voice",
		Attention: "Attention:",
		Note: "Note:",
	},
	Ping: {
		Description: "Hey ##username##! Here's my **latency** and **ping** status:",
		Roundtrip: "🔄 Round-trip Latency",
		Websocket: "🌐 WebSocket Ping",
		Latency: "📉 Latency Status",
		Timestamp: "📅 Current Timestamp",
		Poor: "🔴 Poor",
		Good: "🟡 Good",
		Excellent: "🟢 Excellent",
	},
	UserInfo: {
		Title: "User information",
		Username: "Username",
		UserID: "User ID",
		JoinedAt: "Server joined at",
		NotServerMember: "Not a member in this server",
		UserJoined: "Account created at",
	},
	Giveaways: {
		notify: "Giveaway started at",
		notTextChannel: "The selected channel must be a text channel.",
		giveaway: "🎉 **Giveaway** 🎉",
		giveawayPaused: "⚠ Giveaway is paused ⚠",
		giveawayEnded: "🎉 **Giveaway ended** 🎉",
		title: "{this.prize}",
		drawing: "Time remaining: **{timestamp}**!",
		inviteToParticipate: "React with 🎉 to participate!",
		hostedBy: "Hosted by {this.hostedBy}",
		dropMessage: "Be the first to react with 🎉!",
		winMessage: "Congratulations, {winners}! You won **{this.prize}**!\n{this.messageURL}",
		embedFooter: "Giveaways with {this.winnerCount} prizes",
		noWinner: "Giveaway cancelled, no valid participants.",
		winners: "Winners:",
		endedAt: "Ended at",
	},
	playerButtons: {
		Refresh: "Refresh",
		Previous: "Previous",
		Next: "Next",
		PausePlay: "Pause/Play",
		Stop: "Stop",
		Search: "Search",
		AutoPlay: "AutoPlay",
		SelectTrack: "Select Track",
		Lock: "Lock",
		UnLock: "UnLock",
		SelectFunc: "Select Func",
	},
	playerFunc: {
		RowFunc: "▶ | Choose a function to control player",
		RowRel: "▶ | Select a song to add to the queue",
		QueueEmpty: "❌ | Empty queue\n✅ | You can add some songs",
		Fields: {
			Search: "Search Tracks",
			Lock: "Lock",
			Lockdes: "Lock player access",
			Unlock: "Unlock",
			Unlockdes: "Unlock player access",
			Loop: "Loop",
			AutoPlay: "AutoPlay",
			Queue: "Queue",
			Mute: "Mute",
			VolInc: "Increase Volume",
			VolDec: "Decrease Volume",
			Shuffle: "Shuffle",
			Filter: "Music Filter",
			Refresh: "Refresh Player",
			Previous: "Previous Track",
			Next: "Next Track",
			PausePlay: "Pause/Play",
			Stop: "Stop",
			SelectTrack: "Select Track",
			Lock: "Lock",
			Lyrics: "Show lyrics",
			UnLock: "UnLock",
			Unmute: "Unmute",
		},
	},
	weather: {
		TITLE: "Weather in",
		TEMP: "Temperature",
		HUMIDITY: "Humidity",
		WIND: "Wind",
		CLOUDS: "Clouds",
		PRESSURE: "Pressure",
		SUNRISE: "Sunrise",
		SUNSET: "Sunset",
		COORDINATES: "Coordinates",
		LONGITUDE: "Longitude",
		LATITUDE: "Latitude",
	},
	music: {
		Disconnect: "✅ | Disconnect",
		DisconnectDes: "✅ | Turn off music and leave the voice channel",
		Next: "✅ | Track added to the beginning of the queue.",
		NOvoiceChannel: "❌ | You haven't joined a voice channel",
		NOvoiceMe: "❌ | The bot is already in another voice channel",
		NOres: "❌ | No song found",
		NoPlaying: "❌ | No tracks playing.",
		NoPermission: "❌ | Bot does not have permission to join or speak in this voice channel",
	},
	voiceCommands: {
		Play: "Play",
		Skip: "Skip",
		Volume: "Volume",
		Pause: "Pause",
		Resume: "Resume",
		AutoPlay: "AutoPlay",
		Disconnect: "Disconnect",
		Note: 'The command can have multiple different calls, for example: "skip" can be called as "skip" or "next"',
		LanguageNote: "Change the bot language to detect language more effectively",
	},
	voiceFunc: {
		Play: "Play a song or add to queue",
		Skip: "Skip the current song",
		Volume: "Adjust the volume (0-100)",
		Pause: "Pause music",
		Resume: "Continue music",
		AutoPlay: "Turn on/off auto play",
		Disconnect: "Disconnect from voice channel",
	},
};
