const { Client, Util } = require('discord.js');
const client = new Client({ DisableEveryone: true});
const token = '...' // put your token here
const puppeteer = require('puppeteer');

client.on("ready", () => {
    client.user.setStatus('available')
    console.log(`${client.user.tag} is online!`);

    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto('https://discord.com/')
    });

    const channel = client.channel.cache.get("Channel Id(s)");
    function mathRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      setInterval(function() {
      var outputNumber = mathRandom(1, 3)
        switch(outputNumber){
          case '1':
              channel.send("Have a good day everyone!");  // random msg number 1 
          break;
          case '2':
              channel.send("Hi what y'll doing rn");  // random msg number 2
          break;
          case '3':
              channel.send("Nice Project!");
              break;
                //etc
        }
      }, 5000);

    if(!channel) return console.log("Couldnt find existing channel");
});
client.login(token);
