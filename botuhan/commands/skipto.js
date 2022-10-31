module.exports = {
  name: 'skipto',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    if (!args[0]) {
      return message.channel.send(`${client.emotes.error} | Lütfen geri sarmak için süre (saniye olarak) girin!`)
    }
    const num = Number(args[0])
    if (isNaN(num)) return message.channel.send(`${client.emotes.error} | Lütfen geçerli bir sayı girin!`)
    await client.distube.jump(message, num).then(song => {
      message.channel.send({ content: `Şu şarkıya geçiliyor: ${song.name}` })
    })
  }
}
