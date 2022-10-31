module.exports = {
  name: 'autoplay',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    const autoplay = queue.toggleAutoplay()
    message.channel.send(`${client.emotes.success} | Otomatik Çalma: \`${autoplay ? 'Açık' : 'Kapalı'}\``)
  }
}
