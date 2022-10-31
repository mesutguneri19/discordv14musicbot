module.exports = {
  name: 'forward',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    if (!args[0]) {
      return message.channel.send(`${client.emotes.error} | Lütfen ilerlemek için süre (saniye olarak) girin!`)
    }
    const time = Number(args[0])
    if (isNaN(time)) return message.channel.send(`${client.emotes.error} | Lütfen geçerli bir saniye girin!`)
    queue.seek((queue.currentTime + time))
    message.channel.send(`Şarkı ${time} saniyeye ilerletiliyor!`)
  }
}
