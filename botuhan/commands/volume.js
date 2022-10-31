module.exports = {
  name: 'volume',
  aliases: ['v', 'set', 'set-volume'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    const volume = parseInt(args[0])
    if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Lütfen geçerli bir sayı girin!`)
    queue.setVolume(volume)
    message.channel.send(`${client.emotes.success} | Ses seviyesi değiştirildi: \`${volume}\``)
  }
}
