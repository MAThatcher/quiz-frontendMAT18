const questions = [
    {
    question:"What is the world’s largest land mammal?",
    answers:[
        {answerOption:"Whale",isCorrect:false},
        {answerOption:"Giraffe",isCorrect:false},
        {answerOption:"Rhino",isCorrect:false},
        {answerOption:"Elephant",isCorrect:true}
        ]
    },
    {
    question:"What color is an airplane’s black box?",
    answers:[
        {answerOption:"Black",isCorrect:false},
        {answerOption:"Orange",isCorrect:true},
        {answerOption:"Red",isCorrect:false},
        {answerOption:"Yellow",isCorrect:false}
        ]
    },
    {
    question:" What did Ancient Egyptian women use as contraception?",
    answers:[
        {answerOption:"Incense",isCorrect:false},
        {answerOption:"Bandages",isCorrect:false},
        {answerOption:"Crocodile dung",isCorrect:true},
        {answerOption:"Prayer",isCorrect:false}
        ]
    },
    {
    question:"What is Scooby Doo’s full name?",
    answers:[
        {answerOption:"Scoobert Doo",isCorrect:true},
        {answerOption:"Albert Doo",isCorrect:false},
        {answerOption:"Schooby Doo",isCorrect:false},
        {answerOption:"Scrappy Doo",isCorrect:false}
        ]
    },
    {
    question:"What did Henry VIII tax in 1535?",
    answers:[
        {answerOption:"Beards",isCorrect:true},
        {answerOption:"Pubic Hair",isCorrect:false},
        {answerOption:"Armpit Hair",isCorrect:false},
        {answerOption:"Chest Hair",isCorrect:false}
        ]
    },
    //num 6
    {
    question:"Who owns all the swans in England?",
    answers:[
        {answerOption:"The Duke of York",isCorrect:false},
        {answerOption:"The people of England",isCorrect:false},
        {answerOption:"Margret Thatcher",isCorrect:false},
        {answerOption:"The Queen",isCorrect:true}
        ]
    },
    {
    question:"Who was the first US President to be elected with a criminal record?",
    answers:[
        {answerOption:"George Washington",isCorrect:false},
        {answerOption:"Richard Nixion",isCorrect:false},
        {answerOption:"George W Bush",isCorrect:true},
        {answerOption:"William Howard Taft",isCorrect:false}
        ]
    },
    {
    question:"Which highly successful product is sold in a hyperbolic paraboloid container?",
    answers:[
        {answerOption:"Contact Lenses",isCorrect:false},
        {answerOption:"Pringles",isCorrect:true},
        {answerOption:"Milk",isCorrect:false},
        {answerOption:"Shoes",isCorrect:false}
        ]
    },
    {
    question:"What substance makes up 60% of the brain?",
    answers:[
        {answerOption:"Intelligence",isCorrect:false},
        {answerOption:"Fat",isCorrect:true},
        {answerOption:"Muscle",isCorrect:false},
        {answerOption:"Blood",isCorrect:false}
        ]
    },
    {
    question:"What was briefly know as New Orange, after it was captured from the English by the Dutch in 1673?",
    answers:[
        {answerOption:"New York",isCorrect:true},
        {answerOption:"New Orleans",isCorrect:false},
        {answerOption:"New Hampshire",isCorrect:false},
        {answerOption:"New England",isCorrect:false}
        ]
    },
    //num 11
    {
    question:"How many times did Sherlock Holmes say “Elementary, my dear Watson” in total across all the books by Arthur Conan Doyle?",
    answers:[
        {answerOption:"189",isCorrect:false},
        {answerOption:"0",isCorrect:true},
        {answerOption:"612",isCorrect:false},
        {answerOption:"14",isCorrect:false}
        ]
    },
    {
    question:"According to government press releases, which world leader bowled a perfect 300 game on his first attempt, struck 11 holes in one on one round of golf and could drive at the age of three?",
    answers:[
        {answerOption:"Mao Zedong (China)",isCorrect:false},
        {answerOption:"Adolf Hitler (Germany)",isCorrect:false},
        {answerOption:"Siad Barre (Somalia)",isCorrect:false},
        {answerOption:"Kim Jong Un (North Korea)",isCorrect:true}
        ]
    },
    {
    question:"What is the longest gap between the birth of twins?",
    answers:[
        {answerOption:"87 Minutes",isCorrect:false},
        {answerOption:"87 Hours",isCorrect:false},
        {answerOption:"87 Days",isCorrect:true},
        {answerOption:"87 Weeks",isCorrect:false}
        ]
    },
    {
    question:"Female kangaroos have as many vaginas as octopuses have hearts. How many?",
    answers:[
        {answerOption:"1",isCorrect:false},
        {answerOption:"2",isCorrect:false},
        {answerOption:"3",isCorrect:true},
        {answerOption:"4",isCorrect:false}
        ]
    },
    {
    question:"In which country are the only cashpoints in the world that can be used in Latin?",
    answers:[
        {answerOption:"Vatican City",isCorrect:true},
        {answerOption:"Italy",isCorrect:false},
        {answerOption:"Luxembourg",isCorrect:false},
        {answerOption:"Haiti",isCorrect:false}
        ]
    },
    //num 15
    {
    question:"What phrase is inscribed on the tombstone of Mel Blanc, best known for voicing a famous cartoon character?",
    answers:[
        {answerOption:"Yabba Dabba Doo (Fred Flintstone)",isCorrect:false},
        {answerOption:"Thats all Folks (Bugs Bunny)",isCorrect:true},
        {answerOption:"D'oh (Homer Simpson)",isCorrect:false},
        {answerOption:"To Infinity and Beyond (Buzz Lightyear)",isCorrect:false}
        ]
    },
    {
    question:"In which Olympic sport might you jerk and snatch?",
    answers:[
        {answerOption:"Weightlifting",isCorrect:true},
        {answerOption:"Javalin",isCorrect:false},
        {answerOption:"Shot Put",isCorrect:false},
        {answerOption:"Arm Wrestling",isCorrect:false}
        ]
    },
    {
    question:"Which US President ran 6 companies that went bankrupt, fought at Wrestlemania 23 and, whilst at school, punched his music teacher in the face?",
    answers:[
        {answerOption:"Abraham Lincoln",isCorrect:false},
        {answerOption:"Theodore Roosevelt",isCorrect:false},
        {answerOption:"Donald Trump",isCorrect:true},
        {answerOption:"Ronald Regan",isCorrect:false}
        ]
    },
    {
    question:"Name the Movie! Quote:\"We hold the world to ransom for… One Million Dollars!\"",
    answers:[
        {answerOption:"Austin Powers: International Man of Mystery",isCorrect:true},
        {answerOption:"Get Smart",isCorrect:false},
        {answerOption:"Golden Eye",isCorrect:false},
        {answerOption:"Mission Impossible",isCorrect:false}
        ]
    },
    {
    question:"Name the Movie! Quote:\"I am serious, and don’t call me Shirley\"",
    answers:[
        {answerOption:"Naked Gun",isCorrect:false},
        {answerOption:"Airplane",isCorrect:true},
        {answerOption:"Top Gun",isCorrect:false},
        {answerOption:"Dark Knight Rises",isCorrect:false}
        ]
    },
    //num 21
    {
    question:"Name the Movie! Quote:\"That’s a bold strategy, Cotton, let’s see if it pays off\"",
    answers:[
        {answerOption:"The Blind Side",isCorrect:false},
        {answerOption:"Tropic Thunder",isCorrect:false},
        {answerOption:"Dodge Ball",isCorrect:true},
        {answerOption:"Happy Gilmore",isCorrect:false}
        ]
    },
    {
    question:"Name the Movie! Quote:\"I’ll have what she’s having \"",
    answers:[
        {answerOption:"The Big Lebowski",isCorrect:false},
        {answerOption:"When Harry Met Sally",isCorrect:true},
        {answerOption:"Pulp Fiction",isCorrect:false},
        {answerOption:"A Streetcar Named Desire",isCorrect:false}
        ]
    },
    {
    question:"Name the Movie! Quote:\"It’s just a flesh wound!\"",
    answers:[
        {answerOption:"King Arthur",isCorrect:false},
        {answerOption:"Gladiator",isCorrect:false},
        {answerOption:"Monty Python and the Holy Grail",isCorrect:true},
        {answerOption:"Pirates of the Caribbean",isCorrect:false}
        ]
    },
    {
    question:"Name the Movie! Quote:\"These go to eleven\"",
    answers:[
        {answerOption:"Paul",isCorrect:false},
        {answerOption:"Fargo",isCorrect:false},
        {answerOption:"This is Spinal Tap",isCorrect:true},
        {answerOption:"The Silence of the Lambs",isCorrect:false}
        ]
    },
    {
    question:"Name the Movie! Quote:\"She gave me a load of crap about not listening to her or something, I dunno, I wasn’t really paying attention\"",
    answers:[
        {answerOption:"Shrek",isCorrect:false},
        {answerOption:"Dumb and Dumber",isCorrect:true},
        {answerOption:"Step Brothers",isCorrect:false},
        {answerOption:"Anchorman: The Legend of Ron Burgundy",isCorrect:false}
        ]
    },
    //num 26
    {
    question:"Fed up of tourists stopping for photos and occasionally stealing its sign, from what did the German village of Fugging change its name in 2020?",
    answers:[
        {answerOption:"Fuck",isCorrect:false},
        {answerOption:"Fake Town",isCorrect:false},
        {answerOption:"Dong",isCorrect:false},
        {answerOption:"Fucking",isCorrect:true}
        ]
    },
    {
    question:"What common bathroom noise has pointless research shown to be most commonly in the key of E Flat?",
    answers:[
        {answerOption:"Washing Hands",isCorrect:false},
        {answerOption:"A Toilet Flush",isCorrect:true},
        {answerOption:"The Cries of a Constipated Man",isCorrect:false},
        {answerOption:"Poop Hitting the water",isCorrect:false}
        ]
    },
    {
    question:"What was removed from Napoleon Bonaparte and displayed in a museum before being sold for $2,700 in the 1970s?",
    answers:[
        {answerOption:"Left Thumb",isCorrect:false},
        {answerOption:"Penis",isCorrect:true},
        {answerOption:"Knee Caps",isCorrect:false},
        {answerOption:"Tongue",isCorrect:false}
        ]
    },
    {
    question:"In which game might you use the terms “cock”, “shot” and “beaver”?",
    answers:[
        {answerOption:"Monopoly",isCorrect:false},
        {answerOption:"Chinese Checkers",isCorrect:false},
        {answerOption:"Backgammon",isCorrect:true},
        {answerOption:"Dominos",isCorrect:false}
        ]
    },
    {
    question:"The makers of a haemorrhoid cream approached the estate of Johnny Cash for permission to use which song in its advertisements?",
    answers:[
        {answerOption:"One Piece At A Time",isCorrect:false},
        {answerOption:"Ring of Fire",isCorrect:true},
        {answerOption:"Hurt",isCorrect:false},
        {answerOption:"Flesh and Blood",isCorrect:false}
        ]
    },
]