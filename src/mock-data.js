const mockData = [
  {
    "source":{
      "id":null,
      "name":"NorthJersey.com"
    },
    "author":"Pete Caldera",
    "title":"Yankees game vs. White Sox postponed due to NYC air quality - NorthJersey.com",
    "description":"A hazy smoke still covered the Bronx from the Canada wildfires, which forced MLB to postpone the Yankees' game Wednesday against the White Sox.",
    "url":"https://www.northjersey.com/story/sports/mlb/yankees/2023/06/07/yankees-game-today-postponed-canada-wildfires-nyc-air-quality/70298708007/",
    "urlToImage":"https://www.northjersey.com/gcdn/presto/2023/06/07/PNJM/5afbe286-e120-4e82-8c76-a002de40a031-F23DC2DC-C2BD-42D7-AB60-C6372DA77975.jpeg?crop=4031,2268,x0,y746&width=3200&height=1801&format=pjpg&auto=webp",
    "publishedAt":"2023-06-07T20:26:15Z",
    "content":"NEW YORK - Inside Yankee Stadium, a thick hazy fog - more smoky and intense than Tuesday night - hung over the playing surface Wednesday afternoon.\r\nWith the air quality worsening, seemingly by the m… [+681 chars]"
  },
  {
    "source":{
      "id":"associated-press",
      "name":"Associated Press"
    },
    "author":"Nicole Winfield, Trisha Thomas",
    "title":"Pope Francis has scar tissue removed, hernia repaired during 3-hour abdominal surgery - The Associated Press",
    "description":"ROME (AP) — Pope Francis underwent successful surgery Wednesday to remove intestinal scar tissue and repair a hernia in his abdominal wall, the latest maladies  to befall the 86-year-old pontiff who had part of his colon removed two years ago.",
    "url":"https://apnews.com/article/vatican-pope-health-758c3d7b07e6d6f242c4a5ea6f2de154",
    "urlToImage":"https://storage.googleapis.com/afs-prod/media/b320969aecd8462e97bac62f1faa0c95/3000.jpeg",
    "publishedAt":"2023-06-07T19:51:02Z",
    "content":"ROME (AP) Pope Francis underwent successful surgery Wednesday to remove intestinal scar tissue and repair a hernia in his abdominal wall, the latest maladies to befall the 86-year-old pontiff who had… [+5654 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Deadline"
    },
    "author":"Tom Tapp",
    "title":"Shannen Doherty Reveals Cancer She’s Been Battling Has Spread To Her Brain - Deadline",
    "description":"Shannen Doherty says the breast cancer with which she was first diagnosed in 2015 has spread to her brain, and shared an emotional video describing her fear as she undergoes treatment. The 52-year-…",
    "url":"https://deadline.com/2023/06/shannen-doherty-cancer-spread-to-brain-1235410984/",
    "urlToImage":"https://deadline.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-07-at-12.27.46-PM.png?w=662",
    "publishedAt":"2023-06-07T19:45:00Z",
    "content":"Shannen Doherty says the breast cancer with which she was first diagnosed in 2015 has spread to her brain, and shared an emotional video describing her fear as she undergoes treatment.\r\nThe 52-year-o… [+2118 chars]"
  },
  {
    "source":{
      "id":"usa-today",
      "name":"USA Today"
    },
    "author":", USA TODAY",
    "title":"D-Day: World War II invasion was 79 years ago. It remains significant - USA TODAY",
    "description":"Ahead of the D-Day invasion on June 6, 1944, Gen. Dwight Eisenhower told Allied forces: \"The free men of the world are marching together to Victory!\"",
    "url":"https://www.usatoday.com/story/news/nation/2023/06/06/d-day-world-war-ii-invasion-79-years-ago/70277828007/",
    "urlToImage":"https://www.gannett-cdn.com/presto/2023/06/01/USAT/b4c23a07-6f01-4587-9e0d-3c139ca6aeb8-DDay_troops.jpeg?auto=webp&crop=3118,1754,x0,y173&format=pjpg&width=1200",
    "publishedAt":"2023-06-07T19:18:34Z",
    "content":"<ul><li>D-Day, the invasion of German-held western Europe by the Allies primarily the U.S., Great Britain and Canada happened on June 6, 1944.</li><li>The plan, code named Operation Overlord, had bee… [+10692 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Yahoo Entertainment"
    },
    "author":"Sharon Knolle",
    "title":"‘Bob’s Burgers’ and ‘Anchorman’ Actor Jay Johnston Arrested on Charges Related to Jan. 6 Capitol Insurrection - Yahoo Entertainment",
    "description":"The comedy actor is charged with felony obstruction of officers during civil disorder in addition to several misdemeanor offenses",
    "url":"https://www.yahoo.com/entertainment/bob-burgers-anchorman-actor-jay-191603400.html",
    "urlToImage":"https://media.zenfs.com/en/thewrap.com/f007df1782e3869c8e6e89a5475a0f1d",
    "publishedAt":"2023-06-07T19:16:03Z",
    "content":"Jay Johnston, who has appeared on Mr. Show, Arrested Development, “Bob’s Burgers” and in Anchorman: The Legend of Ron Burgundy was arrested Wednesday in California and charged in connection with the … [+1270 chars]"
  },
  {
    "source":{
      "id":"espn",
      "name":"ESPN"
    },
    "author":"ESPN",
    "title":"Lionel Messi to join MLS side Inter Miami after PSG exit - ESPN - ESPN",
    "description":"Lionel Messi will make a stunning move to MLS side Inter Miami after his departure from Paris Saint-Germain, the World Cup winner with Argentina announced Wednesday.",
    "url":"https://www.espn.com/soccer/story/_/id/37772218/lionel-messi-join-mls-inter-miami-psg-exit",
    "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0601%2Fr1181004_1296x729_16%2D9.jpg",
    "publishedAt":"2023-06-07T19:08:35Z",
    "content":"Lionel Messi will make a stunning move to Major League Soccer side Inter Miami CF after his departure from Paris Saint-Germain, the Argentine superstar announced Wednesday.\r\nMessi made the announceme… [+4767 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Variety"
    },
    "author":"William Earl",
    "title":"Jodie Comer Leaves ‘Prima Facie’ Broadway Performance After 10 Minutes, Says She ‘Can’t Breathe’ Due to NYC Air Crisis - Variety",
    "description":"Jodie Comer is getting rave reviews for her performance in the one-woman Broadway play “Prima Facie,” but her June 7 performance was cut short due to the air quality crisis in New York …",
    "url":"https://variety.com/2023/legit/news/jodie-comer-leaves-broadway-show-cant-breathe-nyc-air-1235636265/",
    "urlToImage":"https://variety.com/wp-content/uploads/2023/04/59-Jodie-Comer-in-Prima-Facie-Helen-Murray-1.jpg?w=1000&h=563&crop=1",
    "publishedAt":"2023-06-07T18:52:00Z",
    "content":"Jodie Comer is getting rave reviews for her performance in the one-woman Broadway play “Prima Facie,” but her June 7 performance was cut short due to the air quality crisis in New York City.\r\nEyewitn… [+1269 chars]"
  },
  {
    "source":{
      "id":"the-verge",
      "name":"The Verge"
    },
    "author":"Andrew J. Hawkins",
    "title":"New York City sues Kia and Hyundai over car thefts that went viral on TikTok - The Verge",
    "description":"The US attorney for New York City sues Kia and Hyundai over rash of car thefts that went viral on TikTok and YouTube.",
    "url":"https://www.theverge.com/2023/6/7/23752535/new-york-city-sues-kia-hyundai-car-theft-kia-boys-tiktok",
    "urlToImage":"https://cdn.vox-cdn.com/thumbor/s9g-RakbRvc-VJJkVlLZiMwnfvk=/0x0:640x481/1200x628/filters:focal(320x241:321x242)/cdn.vox-cdn.com/assets/3326159/kia.jpg",
    "publishedAt":"2023-06-07T18:40:47Z",
    "content":"New York City sues Kia and Hyundai over car thefts that went viral on TikTok\r\nNew York City sues Kia and Hyundai over car thefts that went viral on TikTok\r\n / The Kia Boys phenomenon results in anoth… [+2284 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Yahoo Entertainment"
    },
    "author":"Jing Pan",
    "title":"'They Will Be Ouching': Saudi Energy Minister Warned That Oil Short Sellers Would Feel Pain — Now The Nation Has Made A Production Cut Of 1 Million Barrels Per Day - Yahoo Finance",
    "description":"Oil prices have come down quite a bit from their 2022 peak. While that has prompted some traders to bet against the commodity, Saudi Arabia’s Energy Minister...",
    "url":"https://finance.yahoo.com/news/ouching-saudi-energy-minister-warned-182418810.html",
    "urlToImage":"https://media.zenfs.com/en/Benzinga/d9b655473aea1c29a6aa897dd6b3f341",
    "publishedAt":"2023-06-07T18:24:18Z",
    "content":"Oil prices have come down quite a bit from their 2022 peak. While that has prompted some traders to bet against the commodity, Saudi Arabias Energy Minister Prince Abdulaziz bin Salman has issued a s… [+4591 chars]"
  },
  {
    "source":{
      "id":"cnn",
      "name":"CNN"
    },
    "author":"",
    "title":"Rare North American dinosaur named for two-faced Roman god - CNN",
    "description":"About 100 million years ago in what is now Utah, a 10-foot-long (3-meter-long) cousin of duck-billed dinosaurs pulverized tough plant stems and leaves with its robust teeth and powerful jaws.",
    "url":"https://www.cnn.com/2023/06/07/world/north-american-dinosaur-iani-smithi-scn/index.html",
    "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230606170936-01-rare-north-american-ornithopod-dinosaur-iani-smithi-illo.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt":"2023-06-07T18:01:00Z",
    "content":"Editors Note: Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAbout 100 million years ago in what is n… [+4776 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Cointelegraph"
    },
    "author":"Derek Andersen",
    "title":"Evidence in SEC suit includes 2022 testimony of Binance.US’ long silent ex-CEO - Cointelegraph",
    "description":"Testimony by the former CEO of Binance.US from 2022 is part of the evidence in the SEC’s June 5 suit against Binance.",
    "url":"https://cointelegraph.com/news/evidence-in-sec-suit-includes-2022-testimony-of-binance-us-long-silent-ex-ceo",
    "urlToImage":"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-06/5b4b492d-7d47-4a2b-ba4e-a36d015421f0.jpg",
    "publishedAt":"2023-06-07T17:40:29Z",
    "content":"Former Binance.US CEO Catherine Coley, who is transparently known as BAM CEO A in the suit against Binance filed by the United States Securities and Exchange Commission (SEC) on June 5, has kept a lo… [+2129 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Yahoo Entertainment"
    },
    "author":"Alexandra Canal",
    "title":"Apple needs to buy Disney to make Vision Pro a success: Analyst - Yahoo Finance",
    "description":"Apple should buy Disney as it looks to capture greater adoption of its Vision Pro headset, one media analyst says.",
    "url":"https://finance.yahoo.com/news/apple-needs-to-buy-disney-to-make-vision-pro-a-success-analyst-171450354.html",
    "urlToImage":"https://s.yimg.com/ny/api/res/1.2/dAVWSuA3ODL1cbiATn7d4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTk-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/07d49520-0493-11ee-bbdb-c055af259790",
    "publishedAt":"2023-06-07T17:14:50Z",
    "content":"Apple (AAPL) should buy Disney (DIS) at least according to one media analyst.\r\nFollowing Apple's debut of its Vision Pro headset at its Worldwide Developer Conference (WWDC) on Monday, Needham analys… [+3743 chars]"
  },
  {
    "source":{
      "id":"reuters",
      "name":"Reuters"
    },
    "author":null,
    "title":"Saudi crown prince, Blinken had 'candid' talks in Jeddah -US official - Reuters",
    "description":"U.S. Secretary of State Antony Blinken had an \"open, candid\" conversation with Saudi Crown Prince Mohammed bin Salman in the early hours of Wednesday about a wide range of bilateral issues, a U.S. official said.",
    "url":"https://www.reuters.com/world/saudi-crown-prince-blinken-had-candid-talks-jeddah-us-official-2023-06-07/",
    "urlToImage":"https://www.reuters.com/resizer/bjKNTo1J43KhjFbEM-wBUjlVKuo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZZHJLD7B6FKNJFF6YIGLNCLJTM.jpg",
    "publishedAt":"2023-06-07T17:12:00Z",
    "content":"JEDDAH, Saudi Arabia, June 7 (Reuters) - U.S. Secretary of State Antony Blinken had an \"open, candid\" conversation with Saudi Crown Prince Mohammed bin Salman in the early hours of Wednesday about a … [+4686 chars]"
  },
  {
    "source":{
      "id":"associated-press",
      "name":"Associated Press"
    },
    "author":"Jamey Keaten",
    "title":"Ukrainian dam breach: What's happening and what's at stake - The Associated Press",
    "description":"KYIV, Ukraine (AP) — The fallout from the breach of a dam in southern Ukraine is wreaking havoc on lives, livelihoods and the environment amid the war. When the Kakhovka dam ruptured  on Tuesday, it sent a torrent of water from Ukraine's largest reservoir int…",
    "url":"https://apnews.com/article/kakhovka-dam-ukraine-russia-war-whats-at-stake-a417dafefa79462bef5e4e63c0a94c8c",
    "urlToImage":"https://storage.googleapis.com/afs-prod/media/48787f8bc2b6416bbf076eaa7a559b2e/3000.webp",
    "publishedAt":"2023-06-07T17:01:39Z",
    "content":"KYIV, Ukraine (AP) The fallout from the breach of a dam in southern Ukraine is wreaking havoc on lives, livelihoods and the environment amid the war.\r\nWhen the Kakhovka dam ruptured on Tuesday, it se… [+4949 chars]"
  },
  {
    "source":{
      "id":null,
      "name":"Daily Mail"
    },
    "author":"Caitlin Tilley",
    "title":"Children exposed to high levels of 'forever chemicals' in womb more likely to be obese, study finds - Daily Mail",
    "description":"Researchers at Brown University found that the risk of exposure to forever chemicals starts before birth, setting children up for later health problems.",
    "url":"https://www.dailymail.co.uk/health/article-12169927/Children-exposed-high-levels-forever-chemicals-womb-likely-obese-study-finds.html",
    "urlToImage":"https://i.dailymail.co.uk/1s/2023/06/07/16/71872113-0-image-a-4_1686153588043.jpg",
    "publishedAt":"2023-06-07T16:16:53Z",
    "content":"Children exposed to high levels of forever chemicals in the womb are more likely to be overweight or obese, a government-funded study has found.\r\nResearchers at Brown University found that the risk p… [+3315 chars]"
  },
  {
    "source":{
      "id":"financial-times",
      "name":"Financial Times"
    },
    "author":"Joshua Chaffin, Aime Williams",
    "title":"Canadian wildfires blanket cities from Ottawa to New York with smoke - Financial Times",
    "description":"Plumes from burning Canadian forests move across North American cities and force residents indoors",
    "url":"https://www.ft.com/content/57f950ef-1110-4080-9324-903454770f5e",
    "urlToImage":"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6bcee98b-2c45-46fe-b553-c0e66adc1bdb.jpg?source=next-opengraph&fit=scale-down&width=900",
    "publishedAt":"2023-06-07T16:10:44Z",
    "content":"Millions of people in the eastern US and Canada received health warnings from environmental regulators as thick smoke from northern forest fires spread through cities from Ottawa to New York.\r\nCanada… [+3239 chars]"
  },
  {
    "source":{
      "id":"reuters",
      "name":"Reuters"
    },
    "author":null,
    "title":"Kilauea volcano erupts in Hawaii, lava confined to crater - Reuters",
    "description":"The Kilauea volcano on Hawaii's Big Island erupted early on Wednesday morning and lava flows are currently confined to the surrounding crater floor, the U.S. Geological Survey (USGS) said on Wednesday.",
    "url":"https://www.reuters.com/business/environment/kilauea-volcano-erupts-hawaiis-big-island-usgs-2023-06-07/",
    "urlToImage":"https://www.reuters.com/resizer/oaRCNSpq-gm5O7weYN__L2RHNA0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J7JJDSWVURM5NAWOQ6SUURGICQ.jpg",
    "publishedAt":"2023-06-07T15:40:00Z",
    "content":"June 7 (Reuters) - The Kilauea volcano on Hawaii's Big Island erupted early on Wednesday morning and lava flows are currently confined to the surrounding crater floor, the U.S. Geological Survey (USG… [+953 chars]"
  },
  {
    "source":{
      "id":"usa-today",
      "name":"USA Today"
    },
    "author":"USA TODAY",
    "title":"Retirement in France vs. US: In wake of strikes, who has it better? - USA TODAY",
    "description":null,
    "url":"https://www.usatoday.com/story/news/world/2023/06/06/retirement-age-france-strikes-is-us-better/70267693007/",
    "urlToImage":null,
    "publishedAt":"2023-06-07T15:34:09Z",
    "content":null
  },
  {
    "source":{
      "id":null,
      "name":"Nature.com"
    },
    "author":null,
    "title":"Faster sorting algorithms discovered using deep reinforcement learning - Nature.com",
    "description":"&nbsp;Artificial intelligence goes beyond the current state of the art by discovering unknown, faster sorting algorithms as a single-player game using a deep reinforcement learning agent. These algorithms are now used in the standard C++&nbsp;sort&nbsp;librar…",
    "url":"https://www.nature.com/articles/s41586-023-06004-9",
    "urlToImage":"https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41586-023-06004-9/MediaObjects/41586_2023_6004_Fig1_HTML.png",
    "publishedAt":"2023-06-07T15:33:45Z",
    "content":null
  },
  {
    "source":{
      "id":null,
      "name":"CBS Sports"
    },
    "author":null,
    "title":"Nuggets vs. Heat prediction, odds, time: 2023 NBA Finals Game 3 picks, bets by Denver expert on 58-38 roll - CBS Sports",
    "description":"Larry Hartstein locked in his picks and best bets for Game 3 of Miami Heat vs. Denver Nuggets in the 2023 NBA Finals on Wednesday",
    "url":"https://www.cbssports.com/nba/news/nuggets-vs-heat-prediction-odds-time-2023-nba-finals-game-3-picks-bets-by-denver-expert-on-58-38-roll/",
    "urlToImage":"https://sportshub.cbsistatic.com/i/r/2023/06/07/b81a0215-0094-4b6d-84c1-bd448624ead1/thumbnail/1200x675/56e24eca4148f32015aa076c9d29af55/aaron-gordon.jpg",
    "publishedAt":"2023-06-07T15:28:39Z",
    "content":"The Miami Heat will look to gain the advantage as they return home for Game 3 of the 2023 NBA Finals against the Denver Nuggets on Wednesday. Miami evened the series on Sunday night with a 111-108 vi… [+4200 chars]"
  }
]

export default mockData;