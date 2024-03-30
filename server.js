const {Client, IntentsBitField, Attachment, AttachmentBuilder} = require ('discord.js')
require ('dotenv').config()



const client = new Client (
    {
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent,
            IntentsBitField.Flags.GuildMessageReactions
        ]
    }
)
const token = process.env.TOKEN
client.login(token)

const jennasGifs = ['https://tenor.com/view/puss-in-boots-please-gif-15249066',
                    'https://tenor.com/view/lurking-creepyguy-plant-gif-11665121',
                    'https://tenor.com/view/eddie-hearn-erm-gif-15982746',
                    'https://tenor.com/view/drake-point-smile-gif-13584057',
                    'https://tenor.com/view/dog-terrified-slice-oh-my-wide-eyed-gif-12378837',
                    'https://media.tenor.com/zXtGgpLkITQAAAAC/bridesmaid-hangover.gif',
                    'https://tenor.com/view/i-got-you-kenan-thompson-saturday-night-live-point-i-see-you-gif-21648260',
                    'https://tenor.com/view/hahaha-smile-sinical-happy-gif-14722029',
                    'https://tenor.com/view/theoffice-kevin-cute-cuteness-overloaded-gif-20377186',
                    'https://tenor.com/view/of-course-sarcastic-whatever-you-say-obviously-captain-obvious-gif-26129622',
                    'https://tenor.com/view/desi-banks-getting-crunk-happy-dance-hell-yeah-gif-15119215',
                    'https://tenor.com/view/donald-trump-wrong-yeah-gif-13874558',
                    'https://tenor.com/view/hiding-gif-10030312',
                    'https://tenor.com/view/oh-my-how-dare-you-miss-j-alexander-antm-drama-gif-5557268',
                    'https://tenor.com/view/wtf-gif-gif-26042600',
                    'https://tenor.com/view/thierry-henry-thierry-henry-arsenal-roam-gif-21292008',
                    'https://tenor.com/view/perfetto-yes-gif-26163077',
                    'https://tenor.com/view/well-were-waiting-waiting-were-waiting-impatient-gif-13724576',
                    'https://tenor.com/view/side-eye-dog-suspicious-look-suspicious-doubt-dog-doubt-gif-23680990',
                    'https://tenor.com/view/jim-halpert-face-yeah-ok-then-sure-gif-19567619',
                    'https://tenor.com/view/im-out-goodbye-bye-bye-bye-im-done-sorry-gif-17148570']

client.on('ready', (c) => {
    console.log(`Ready: ${c.user.tag}` )
})

client.on('messageCreate', (message) => {
    const content = message.content
    if (content.includes("Jenna") || content.includes("Buxton") || content.includes("gif")){
        message.react("😎")
        const randomGif = jennasGifs[Math.floor(Math.random()* jennasGifs.length)]
        message.reply("Did someone just mention me? \n" + randomGif)
            .then(() => console.log(`Replied to message "${message.content}"`))
            .catch(console.error);
    }
})



