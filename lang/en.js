module.exports = {
  name: 'en',
  local_names: 'en_US',
  until: {
    name: 'English',
    langChange: 'Your language has been changed to:',
    requestBy: 'Requested by:',
    noDB: '❌ | Database is not currently enabled, please contact dev bot',
  },
  Ping: {
    Description: "Hey ##username##! Here's my **latency** and **ping** status:",
    Roundtrip: '🔄 Round-trip Latency',
    Websocket: '🌐 WebSocket Ping',
    Latency: '📉 Latency Status',
    Timestamp: '📅 Current Timestamp',
    Poor: '🔴 Poor',
    Good: '🟡 Good',
    Excellent: '🟢 Excellent',
  },
  Search: {},
  playerButtons: {
    Refresh: 'Refresh',
    Previous: 'Previous',
    Next: 'Next',
    PausePlay: 'Pause/Play',
    Stop: 'Stop',
    Search: 'Search',
    AutoPlay: 'AutoPlay',
    SelectTrack: 'Select Track',
    Lock: 'Lock',
    UnLock: 'UnLock',
    SelectFunc: 'Select Func',
  },
  playerFunc: {
    RowFunc: '▶ | Choose a function to control player',
    RowRel: '▶ | Select a song to add to the queue',
    QueueEmpty: '❌ | Empty queue\n✅ | You can add some songs',
    Fields: {
      Search: 'Search Tracks',
      Lock: 'Lock',
      Lockdes: 'Lock player access',
      Unlock: 'Unlock',
      Unlockdes: 'Unlock player access',
      Loop: 'Loop',
      AutoPlay: 'AutoPlay',
      Queue: 'Queue',
      Mute: 'Mute',
      VolInc: 'Increase Volume',
      VolDec: 'Decrease Volume',
      Shuffle: 'Shuffle',
      Filter: 'Music Filter',
      Refresh: 'Refresh Player',
      Previous: 'Previous Track',
      Next: 'Next Track',
      PausePlay: 'Pause/Play',
      Stop: 'Stop',
      SelectTrack: 'Select Track',
      Lock: 'Lock',
      UnLock: 'UnLock',
      Unmute: 'Unmute',
    },
  },
  weather: {
    TITLE: 'Weather in',
    TEMP: 'Temperature',
    HUMIDITY: 'Humidity',
    WIND: 'Wind',
    CLOUDS: 'Clouds',
    PRESSURE: 'Pressure',
    SUNRISE: 'Sunrise',
    SUNSET: 'Sunset',
    COORDINATES: 'Coordinates',
    LONGITUDE: 'Longitude',
    LATITUDE: 'Latitude',
  },
  music: {
    Disconnect: '✅ | Disconnect',
    DisconnectDes: '✅ | Turn off music and leave the voice channel',
    Next: '✅ | Track added to the beginning of the queue.',
    NOvoiceChannel: "❌ | You haven't joined a voice channel",
    NOvoiceMe: '❌ | The bot is already in another voice channel',
    NOres: '❌ | No song found',
    NoPlaying: '❌ | No tracks playing.',
  },
  voiceCommands: {
    Play: 'Play',
    Skip: 'Skip',
    Volume: 'Volume',
    Pause: 'Pause',
    Resume: 'Resume',
    AutoPlay: 'AutoPlay',
    Disconnect: 'Disconnect',
  },
  voiceFunc: {
    Play: 'Play a song or add to queue',
    Skip: 'Skip the current song',
    Volume: 'Adjust the volume (0-100)',
    Pause: 'Pause music',
    Resume: 'Continue music',
    AutoPlay: 'Turn on/off auto play',
    Disconnect: 'Disconnect from voice channel',
  },
};
