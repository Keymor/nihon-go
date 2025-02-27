const cardWordsNew = [
    {
      "japanWord": "いきます1",
      "meaning": "to go",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
    },
    {
      "japanWord": "きます2",
      "meaning": "to come",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false,
    },
    {
      "japanWord": "かえります3",
      "meaning": "to return",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
    },
    /* {
      "japanWord": "おきます",
      "meaning": "to wake up",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false,
    },
    {
      "japanWord": "ねます",
      "meaning": "to sleep",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false,
    },
    {
      "japanWord": "はたらきます",
      "meaning": "to work",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
    },
    {
      "japanWord": "やすみます",
      "meaning": "to rest",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
    },
    {
      "japanWord": "べんきょうします",
      "meaning": "to study",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false,
    },
    {
      "japanWord": "おわります",
      "meaning": "to finish",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "たべます",
      "meaning": "to eat",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "のみます",
      "meaning": "to drink",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "すいます",
      "meaning": "to smoke",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "みます",
      "meaning": "to see, watch",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "ききます",
      "meaning": "to listen, hear",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "よみます",
      "meaning": "to read",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "かきます",
      "meaning": "to write",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "かいます",
      "meaning": "to buy",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "とります",
      "meaning": "to take (a photo)",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "あいます",
      "meaning": "to meet",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "きります",
      "meaning": "to cut",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "おくります",
      "meaning": "to send",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "あげます",
      "meaning": "to give",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "もらいます",
      "meaning": "to receive",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "かします",
      "meaning": "to lend",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "かります",
      "meaning": "to borrow",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "おしえます",
      "meaning": "to teach, tell",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "ならいます",
      "meaning": "to learn",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "あります",
      "meaning": "to exist (inanimate)",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "います",
      "meaning": "to exist (animate)",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "わかります",
      "meaning": "to understand",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "かかります",
      "meaning": "to take (time, money)",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "あそびます",
      "meaning": "to play",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "およぎます",
      "meaning": "to swim",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "むかえます",
      "meaning": "to go to meet, welcome",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "つかれます",
      "meaning": "to get tired",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false
    },
    {
      "japanWord": "だします",
      "meaning": "to take out, send",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false
    },
    {
      "japanWord": "けっこんします",
      "meaning": "to marry",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false
    },
    {
      "japanWord": "かいものします",
      "meaning": "to shop",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false
    },
    {
      "japanWord": "しょくじします",
      "meaning": "to have a meal",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false
    },
    {
      "japanWord": "さんぽします",
      "meaning": "to take a walk",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false
    } */
  ]

  export default cardWordsNew

  