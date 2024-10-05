module.exports = {
  name: 'vi',
  local_names: 'vi_VN',
  until: {
    name: 'Tiếng Việt',
    langChange: 'Ngôn ngữ của bạn đã được đổi thành:',
    requestBy: 'Yêu cầu bởi:',
    noDB: '❌ | Database chưa được bật, vui lòng liên hệ với dev bot',
    success: 'Đã thực hiện lệnh này thành công!',
    notHavePremission: 'Bạn không có quyền để thực hiện lệnh này!',
    NOPermission: '❌ | Bot không có quyền gửi tin nhắn và thực hiện lệnh trong kênh này',
    noPermission: '❌ | Bạn không có quyền để thực hiện lệnh này!',
    cooldown: 'Vui lòng đợi, bạn đang trong thời gian cooldown cho `{command}`! Bạn có thể sử dụng nó lại {time}.',
  },
  Help: {
    Placeholder: '> | Chọn một danh mục để xem các lệnh',
    GuildCommands: 'Lệnh server',
    ContextCommands: 'Lệnh context',
    PlayerButtons: 'Lệnh player',
    VoiceCommands: 'Lệnh voice',
    GuildCommandsDescription: 'Xem danh sách các lệnh có thể sử dụng trong server',
    ContextCommandsDescription: 'Xem danh sách các lệnh có thể sử dụng trong context menu',
    PlayerButtonsDescription: 'Xem danh sách các button có thể sử dụng trong music player',
    VoiceCommandsDescription: 'Xem danh sách các lệnh có thể sử dụng bằng giọng nói',
    Attention: 'Chú ý:',
    Note: 'Lưu ý:',
  },
  BotStats: {
    Description: 'Thống kê về bot',
    OS: 'Hệ điều hành đang dùng',
    djsVersion: 'Phiên bản discord.js',
    ServerLength: 'Tổng số server đang có',
    RAMUsage: 'RAM đang sử dụng'
  },
  Ping: {
    Description: 'Chào ##username##! Đây là **độ trễ** và trạng thái **ping** của tôi:',
    Roundtrip: '🔄 Độ trễ vòng lặp',
    Websocket: '🌐 Ping WebSocket',
    Latency: '📉 Trạng thái độ trễ',
    Timestamp: '📅 Dấu thời gian hiện tại',
    Poor: '🔴 Kém',
    Good: '🟡 Tốt',
    Excellent: '🟢 Xuất sắc',
  },
  UserInfo: {
    Title: 'Thông tin người dùng',
    Username: 'Tên người dùng',
    UserID: 'ID người dùng',
    JoinedAt: 'Tham gia server lúc',
    NotServerMember: 'Không phải là thành viên server',
    UserJoined: 'Tạo tài khoản lúc',
  },
  Giveaways: {
    notify: 'Giveaway đã bắt đầu tại',
    notTextChannel: 'Kênh được chọn phải là kênh văn bản.',
    giveaway: '🎉 **Giveaway đã bắt đầu** 🎉',
    giveawayEnded: '🎉 **Giveaway đã kết thúc** 🎉',
    title: '{this.prize}',
    giveawayPaused: '⚠ Giveaway đã tạm dừng ⚠',
    drawing: 'Thời gian còn lại: **{timestamp}**!',
    inviteToParticipate: 'React với 🎉 để tham gia!',
    hostedBy: 'Tổ chức bởi bởi {this.hostedBy}',
    dropMessage: 'Hãy là người đầu tiên react với 🎉 !',
    winMessage: 'Chúc mừng, {winners}! Bạn đã thắng **{this.prize}**!\n{this.messageURL}',
    embedFooter: 'Giveaways với {this.winnerCount} giải',
    noWinner: 'Giveaway bị hủy, không có người tham gia hợp lệ.',
    winners: 'Người chiến thắng:',
    endedAt: 'Kết thúc lúc',
  },
  playerButtons: {
    Refresh: 'Làm mới',
    Previous: 'Bài trước',
    Next: 'Bài tiếp',
    PausePlay: 'Tạm dừng/Phát',
    Stop: 'Dừng',
    Search: 'Tìm kiếm',
    AutoPlay: 'Tự động phát',
    SelectTrack: 'Chọn bài hát',
    Lock: 'Khoá',
    UnLock: 'Mở khoá',
    SelectFunc: 'Chọn chức năng',
  },
  playerFunc: {
    RowFunc: '▶ | Chọn chức năng để điều khiển trình phát',
    RowRel: '▶ | Chọn một bài hát để thêm vào hàng đợi',
    QueueEmpty: '❌ | Hàng đợi trống\n✅ | Bạn có thể thêm một vài bài hát',
    Fields: {
      Search: 'Tìm kiếm bài hát',
      Lock: 'Khoá',
      Lockdes: 'Khoá truy cập player',
      Unlock: 'Mở khoá',
      Unlockdes: 'Mở khoá truy cập player',
      Loop: 'Lặp lại',
      AutoPlay: 'Tự động phát',
      Queue: 'Hàng đợi',
      Mute: 'Tắt tiếng',
      VolInc: 'Tăng âm lượng',
      VolDec: 'Giảm âm lượng',
      Shuffle: 'Trộn bài',
      Filter: 'Bộ lọc âm nhạc',
      Refresh: 'Làm mới trình phát',
      Previous: 'Phát bài hát trước đó',
      Next: 'Phát bài hát tiếp theo',
      PausePlay: 'Tạm dừng/Phát',
      Stop: 'Dừng',
      SelectTrack: 'Chọn bài hát',
      Lock: 'Khoá',
      Lyrics: 'Lời bài hát',
      UnLock: 'Mở khoá',
      Unmute: 'Mở khoá âm lượng',
    },
  },
  weather: {
    TITLE: 'Thời tiết tại',
    TEMP: 'Nhiệt độ',
    HUMIDITY: 'Độ ẩm',
    WIND: 'Gió',
    CLOUDS: 'Mây',
    PRESSURE: 'Áp suất',
    SUNRISE: 'Bình minh',
    SUNSET: 'Hoàng hôn',
    COORDINATES: 'Tọa độ',
    LONGITUDE: 'Kinh độ',
    LATITUDE: 'Vĩ độ',
  },
  music: {
    Disconnect: '✅ | Ngắt kết nối',
    DisconnectDes: '✅ | Tắt nhạc và rời khỏi kênh thoại',
    Next: '✅ | Bài hát được thêm vào đầu hàng đợi.',
    NOvoiceChannel: '❌ | Bạn chưa tham gia vào kênh thoại',
    NOvoiceMe: '❌ | Bot đã ở trong một kênh thoại khác',
    NOres: '❌ | Không tìm thấy bài hát',
    NoPlaying: '❌ | Không có bài hát nào đang phát.',
    NoPermission: '❌ | Bot không có quyền tham gia hoặc nói trong kênh thoại này',
  },
  voiceCommands: {
    Play: 'Phát nhạc',
    Skip: 'Bỏ qua',
    Volume: 'Âm lượng',
    Pause: 'Tạm dừng',
    Resume: 'Tiếp tục',
    AutoPlay: 'Tự động phát',
    Disconnect: 'Ngắt kết nối',
    Note: 'Lệnh có thể có nhiều cách gọi khác nhau, ví dụ: "skip" có thể được gọi là "bỏ qua" hoặc "next"',
    LanguageNote: 'Thay đổi ngôn ngữ bot để dectect ngôn ngữ hiệu quả',
  },
  voiceFunc: {
    Play: 'Phát một bài hát hoặc thêm vào hàng đợi',
    Skip: 'Bỏ qua bài hát hiện tại',
    Volume: 'Điều chỉnh âm lượng (0-100)',
    Pause: 'Tạm dừng phát nhạc',
    Resume: 'Tiếp tục phát nhạc',
    AutoPlay: 'Bật/tắt chế độ tự động phát',
    Disconnect: 'Ngắt kết nối từ kênh thoại',
  },
};
