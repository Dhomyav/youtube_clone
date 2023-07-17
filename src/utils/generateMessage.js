const messageList = [
    "Shoutout to the mods!",
    "Can we get a follow train?",
    "Who else is up late?",
    "I'm multitasking here 😅",
    "So much to learn!",
    "Love the enthusiasm!",
    "Thanks for the content! 👍",
    "The community is awesome!",
    "Can't wait for the updates!",
    "This streamer is amazing!",
    "Can we get a clap in chat?",
    "The chat is so funny 😆",
    "Let's gooooooo! 🚀",
    "This game is a masterpiece!",
    "More streams please!",
    "I'm addicted to this stream!",
    "Who else is excited for E3?",
    "The chat is on fire 🔥",
    "Can't wait for the DLC!",
    "I'm here for the chat!",
    "Shoutout to the streamer!",
    "This stream is legendary!",
    "Can we get a hype train?",
    "Love the stream! 😍",
    "This game is so fun!",
    "Supporting the streamer! 💪",
    "Can't stop watching!",
    "Who else is binging streams?",
    "The chat is so chill 🌴",
    "Can't wait for the next event!",
    "I'm hooked! 🎮",
     "The chat is so diverse!",
    "This game is worth buying!",
    "Can we get a follow goal?",
    "Who else is on the grind?",
    "The chat is like family!",
    "I'm here for the content!",
    "Thanks for the support!",
    "The community is top tier!",
    "Can't wait for the sequel!",
    "I'm inspired by this community!",
    "Who else is a gamer?",
    "The chat is the best!",
    "This streamer is underrated!",
    "Love the positive vibes!",
    "Who else is streaming?",
    "The chat is full of talent!",
    "I'm inspired by this stream!",
    "Thanks for the entertainment!",
    "The community is lit 🔥",
    "Can't wait for the giveaway!",
    "I'm having a blast!",
    "Who else is procrastinating?",
    "The chat is so supportive! ❤️",
    "This streamer deserves more subs!",
    "Can we get a round of applause?",
    "I'm a streamer too!",
    "Who else is hyped? 🤩",
    "Chat fam 😎",
    "The graphics are amazing!",
    "More streams like this please!",
    "Let's get a like goal! 👍",
    "So many cool people here!",
    "Thanks for the shoutout!",
    "This game is addictive!",
    "Love the chat's energy!",
    "Thanks for the advice!",
    "The community is amazing!",
    "Can't wait for the next stream!",
    "I'm a loyal viewer!",
    "Who else is addicted?",
    "Can we get a hype emoji spam?",
    "I'm a fan for life!",
    "Love the emotes!",
    "Who else is here for the laughs?",
    "Thanks for the entertainment!",
    "The community is so diverse!",
    "Can't wait for the next stream event!",
    "I'm a fan for life!",
    "Who else is a mobile gamer?",
    "The chat is so interactive!",
    "This streamer is so talented!",
    "Can we get a virtual high five?",
    "Who else is a fan of this game?",
    "The chat is so helpful!",
    "I'm here for the fun!",
    "Thanks for being amazing!",
    "The community is so inclusive!",
    "Can't wait for the next giveaway!",
    "I'm always excited for this stream!",
    "Thanks for the positivity!",
    "The community is so positive!",
    "Can't wait for the next stream party!",
    "I'm loving the chat!",
    "Who else is a competitive gamer?",
    "The chat is always lit 🔥",
    "I'm so glad I found this stream!",
    "Thanks for the great content!",
    "The community is so friendly!",
    "Can't wait for the next stream!",
    "I'm addicted to this game!",
    "Who else is a night owl?",
    "The chat is so positive!",
    "This streamer deserves more views!",
    "Can we get a heart spam?",
    "Who else is a content creator?",
    "The chat is full of creativity!",
    "I'm here for the good vibes!",
    "Thanks for the giveaways!",
    "The community is so supportive!",
    "Can't wait for the next update!",
    "I'm a dedicated viewer!",
    "Who else is a PC gamer?",
    "The chat is like a second home!",
    "This stream is a mood booster!",
    "Can we get a sub goal?",
    "Who else is a console gamer?",
    "The chat is the heart of the stream!",
    "Chat is lit tonight 🔥",
    "Anyone else playing?",
    "I'm here for the memes 😂",
    "Stream goals 🙌",
    "So excited for this!",
    "Who's winning? 🤔",
    "Great community here 👏",
    "I'm learning so much!",
    "Keep it up, streamer!",
    "Can't wait for next week!",
    "Love the music 🎶",
    "Shoutout to my friends!",
    "Subscribed and loving it!",
    "I'm loving this game!",
    "The chat is like a support group!",
    "This streamer is so inspiring!",
    "Can we get a round of high fives?",
    "Who else is a casual gamer?",
    "The chat is so entertaining!",
    "I'm here for the community!",
    "Thanks for the fun times!",
    "The community is so uplifting!",
    "Who else is a sports gamer?",
    "The chat is so full of energy!",
    "This streamer is so funny!",
    "Can we get a wave of love?",
    "Who else is a creative gamer?",
    "The chat is like a second family!",
    "I'm here for the positivity!",
    "Thanks for the amazing streams!",
    "Who else is a retro gamer?",
    "The chat is so engaging!",
    "This streamer is so entertaining!",
    "Can we get a party popper spam?",
    "Who else is a speedrunner?",
    "The chat is so welcoming!",
    "I'm here for the chat!",
    "Thanks for the tips!",
    "The community is so kind!",
    "Can't wait for the next stream marathon!",
    "I'm a huge fan of this streamer!",
    "Who else is a variety gamer?",
    "The chat is always buzzing!",
    "This game is so immersive!",
    "Can we get a shoutout to the mods?",
    "Who else is a music lover?",
    "The chat is the best place to be!",
    "I'm so grateful for this community!",
]
  

export function generateMessage() {
   return messageList[Math.floor( Math.random() * messageList.length )];
};