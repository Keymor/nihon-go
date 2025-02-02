import { useState, ChangeEvent } from 'react'
import './App.css'

function App() {

  interface actionArray {
    animationStatus: boolean;
    logIn: boolean;
    pageSet: string;
    isHidde: boolean;
    isHiddeMenu: boolean;
    leftMenu: boolean;
  }

  /*  const [loading, setLoading] = useState(true) */
  const [searchValue, setSearchValue] = useState('')
  const [actionStatus, setActionStatus] = useState<actionArray>({
    animationStatus: true,
    logIn: false,
    pageSet: 'Home',
    isHidde: false,
    isHiddeMenu: false,
    leftMenu: false
  })
  const [currentWord, setCurrentWord] = useState<{
    japanese: string;
    meaningEng: string;
    currentGroup: number;
    numberOfWords: number;
    checkedNumbers: string[]; // Array of strings
    hidde: boolean;
    difficalId: number[]; // Array of numbers
    difIndex: number;
    checkHard: boolean;
    indexCounter: number;
    currentWordId: number;
  }>({
    japanese: '',
    meaningEng: '',
    currentGroup: 0,
    numberOfWords: 0,
    checkedNumbers: [''],
    hidde: false,
    difficalId: [],
    difIndex: 0,
    checkHard: false,
    indexCounter: 1,
    currentWordId: 0
  })

  const verbTGroup = [
    {
      japanese: "いきます",
      meaningEng: "to go",
      exampleSentence: "がっこうへいきます。",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 2,
      currentWordId: 2
    },
    {
      japanese: "かえります",
      meaningEng: "to return",
      exampleSentence: "いえにかえります。",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 3,
      currentWordId: 3
    },
    {
      japanese: "たべます",
      meaningEng: "to eat",
      exampleSentence: "りんごをたべます。",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 4,
      currentWordId: 4
    },
    {
      japanese: "のみます",
      meaningEng: "to drink",
      exampleSentence: "みずをのみます。",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 5,
      currentWordId: 5
    },
    {
      japanese: "みます",
      meaningEng: "to see, watch",
      exampleSentence: "えいがをみます。",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 6,
      currentWordId: 6
    },
    {
      japanese: "ききます",
      meaningEng: "to listen",
      exampleSentence: "おんがくをききます。",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 7,
      currentWordId: 7
    },
    {
      japanese: "はなします",
      meaningEng: "to speak",
      exampleSentence: "にほんごをはなします。",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 8,
      currentWordId: 8
    },
    {
      japanese: "します",
      meaningEng: "to do",
      exampleSentence: "しゅくだいをします。",
      currentGroup: 3,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 9,
      currentWordId: 9
    },
    {
      japanese: "べんきょうします",
      meaningEng: "to study",
      exampleSentence: "にほんごをべんきょうします。",
      currentGroup: 3,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 10,
      currentWordId: 10
    },
    {
      japanese: "あります",
      meaningEng: "to exist (inanimate objects)",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 11,
      currentWordId: 11
    },
    {
      japanese: "います",
      meaningEng: "to exist (animate objects)",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 12,
      currentWordId: 12
    },
    {
      japanese: "かきます",
      meaningEng: "to write",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 13,
      currentWordId: 13
    },
    {
      japanese: "よみます",
      meaningEng: "to read",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 14,
      currentWordId: 14
    },
    {
      japanese: "ねます",
      meaningEng: "to sleep",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 15,
      currentWordId: 15
    },
    {
      japanese: "おきます",
      meaningEng: "to wake up",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 16,
      currentWordId: 16
    },
    {
      japanese: "はたらきます",
      meaningEng: "to work",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 17,
      currentWordId: 17
    },
    {
      japanese: "やすみます",
      meaningEng: "to rest",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 18,
      currentWordId: 18
    },
    {
      japanese: "わかります",
      meaningEng: "to understand",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 19,
      currentWordId: 19
    },
    {
      japanese: "おしえます",
      meaningEng: "to teach",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 20,
      currentWordId: 20
    },
    {
      japanese: "ならいます",
      meaningEng: "to learn",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 21,
      currentWordId: 21
    },
    {
      japanese: "かいます",
      meaningEng: "to buy",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 22,
      currentWordId: 22
    },
    {
      japanese: "あげます",
      meaningEng: "to give",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 23,
      currentWordId: 23
    },
    {
      japanese: "もらいます",
      meaningEng: "to receive",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 24,
      currentWordId: 24
    },
    {
      japanese: "かります",
      meaningEng: "to borrow",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 25,
      currentWordId: 25
    },
    {
      japanese: "かします",
      meaningEng: "to lend",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 26,
      currentWordId: 26
    },
    {
      japanese: "きります",
      meaningEng: "to cut",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 27,
      currentWordId: 27
    },
    {
      japanese: "つくります",
      meaningEng: "to make",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 28,
      currentWordId: 28
    },
    {
      japanese: "おくります",
      meaningEng: "to send",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 29,
      currentWordId: 29
    },
    {
      japanese: "いれます",
      meaningEng: "to insert",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 30,
      currentWordId: 30
    },
    {
      japanese: "でます",
      meaningEng: "to leave",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 31,
      currentWordId: 31
    },
    {
      japanese: "のぼります",
      meaningEng: "to climb",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 32,
      currentWordId: 32
    },
    {
      japanese: "はしります",
      meaningEng: "to run",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 33,
      currentWordId: 33
    },
    {
      japanese: "あそびます",
      meaningEng: "to play",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 34,
      currentWordId: 34
    },
    {
      japanese: "とびます",
      meaningEng: "to jump",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 35,
      currentWordId: 35
    },
    {
      japanese: "まちます",
      meaningEng: "to wait",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 36,
      currentWordId: 36
    },
    {
      japanese: "かたづけます",
      meaningEng: "to tidy up",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 37,
      currentWordId: 37
    },
    {
      japanese: "ならべます",
      meaningEng: "to arrange",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 38,
      currentWordId: 38
    },
    {
      japanese: "あびます",
      meaningEng: "to bathe",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 39,
      currentWordId: 39
    },
    {
      japanese: "つかいます",
      meaningEng: "to use",
      currentGroup: 1,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 40,
      currentWordId: 40
    },
    {
      japanese: "つかれます",
      meaningEng: "to get tired",
      currentGroup: 2,
      numberOfWords: 0,
      checkedNumbers: [""],
      hidde: false,
      difficalId: [],
      difIndex: 0,
      checkHard: false,
      indexCounter: 41,
      currentWordId: 41
    },
  ]

  const [cardWords, setCardWords] = useState([
    {
      "japanWord": "いきます 1",
      "meaning": "to go",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
      id: 0
    },
    {
      "japanWord": "きます 2",
      "meaning": "to come",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false,
      id: 1
    },
    {
      "japanWord": "かえります 3",
      "meaning": "to return",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
      id: 2
    },
    {
      "japanWord": "おきます 4",
      "meaning": "to wake up",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false,
      id: 3
    },
    {
      "japanWord": "ねます 5",
      "meaning": "to sleep",
      "isItChecked": false,
      "group": 2,
      "isItSpecial": false,
      id: 4
    },
    {
      "japanWord": "はたらきます 6",
      "meaning": "to work",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
      id: 5
    },
    {
      "japanWord": "やすみます 7",
      "meaning": "to rest",
      "isItChecked": false,
      "group": 1,
      "isItSpecial": false,
      id: 6
    },
    {
      "japanWord": "べんきょうします 8",
      "meaning": "to study",
      "isItChecked": false,
      "group": 3,
      "isItSpecial": false,
      id: 7
    },
    /* {
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
  )
  const [practiceContent, setPracticeContent] = useState({
    name: 'Translation',
    id: 0,
    question: "Where is the library?",
    words: ["ですか", "は", "どこ", "としょかん"],
    answer: "としょかんはどこですか",
    input: '',
    isCorrect: false,
    startPractice: false,
    lessonStart: false,
    attempts: 0,
    lessonType: '',
    headLine: '',
    pline: '',
  })

  const practiceQuestions = [
    {
      id: 1,
      question: "Where is the library?",
      words: ["ですか", "は", "どこ", "としょかん"],
      answer: "としょかんはどこですか",
    },
    {
      id: 2,
      question: "What time is it?",
      words: ["いま", "なん", "です", "じ", "か"],
      answer: "いまなんじですか",
    },
    {
      id: 3,
      question: "What is your name?",
      words: ["なまえ", "は", "なん", "です", "か"],
      answer: "なまえはなんですか",
    },
    {
      id: 4,
      question: "How much is this?",
      words: ["これ", "いくら", "です", "か", "は"],
      answer: "これはいくらですか",
    },
    {
      id: 5,
      question: "Where is the restroom?",
      words: ["どこ", "です", "トイレ", "は", "か"],
      answer: "トイレはどこですか",
    },
  ];

  const lessons = [
    {
      name: 'Lesson 1 - Greetings & Introductions',
      description: 'Learn essential Japanese greetings and self-introductions',
      example: 'こんにちは、おはよう、こんばんは',
      time: 30,
      lvl: 'Basic',
      number: 1
    },
    {
      name: 'Lesson 2 - Numbers & Time',
      description: 'Master counting, basic numbers, and telling time in Japanese',
      example: 'いち、に、さん、なんじですか？',
      time: 40,
      lvl: 'Basic',
      number: 2
    },
    {
      name: 'Lesson 3 - Shopping & Asking Prices',
      description: 'Learn vocabulary and phrases for shopping and handling money',
      example: 'いくらですか？これをください',
      time: 35,
      lvl: 'Basic',
      number: 3
    },
    {
      name: 'Lesson 4 - Directions & Transportation',
      description: 'Learn how to ask for directions and use public transport',
      example: 'どこですか？電車はどこにありますか？',
      time: 40,
      lvl: 'Basic',
      number: 4
    },
    {
      name: 'Lesson 5 - Daily Activities',
      description: 'Describe your daily routine and common activities',
      example: 'おきます、ねます、はたらきます',
      time: 30,
      lvl: 'Basic',
      number: 5
    },
    {
      name: 'Lesson 6 - Food & Dining',
      description: 'Learn vocabulary for food, drinks, and dining out',
      example: 'たべます、のみます、レストラン',
      time: 45,
      lvl: 'Basic',
      number: 6
    },
    {
      name: 'Lesson 7 - Family & Relationships',
      description: 'Talk about family members and relationships',
      example: 'ちち、はは、あね、あに',
      time: 35,
      lvl: 'Basic',
      number: 7
    },
    {
      name: 'Lesson 8 - Work & Professions',
      description: 'Learn vocabulary for workplaces and professions',
      example: 'かいしゃいん、せんせい、エンジニア',
      time: 40,
      lvl: 'Basic',
      number: 8
    },
    {
      name: 'Lesson 9 - Hobbies & Interests',
      description: 'Discuss hobbies, interests, and leisure activities',
      example: 'スポーツ、えいが、ほんをよみます',
      time: 30,
      lvl: 'Basic',
      number: 9
    },
    {
      name: 'Lesson 10 - Weather & Seasons',
      description: 'Learn how to talk about the weather and seasons',
      example: 'あつい、さむい、あめ、ゆき',
      time: 35,
      lvl: 'Basic',
      number: 10
    },
    {
      name: 'Lesson 11 - Health & Body',
      description: 'Learn vocabulary related to health and body parts',
      example: 'あたま、て、あし、びょういん',
      time: 40,
      lvl: 'Basic',
      number: 11
    },
    {
      name: 'Lesson 12 - Colors & Adjectives',
      description: 'Describe objects using colors and basic adjectives',
      example: 'あかい、しろい、大きい、小さい',
      time: 30,
      lvl: 'Basic',
      number: 12
    },
    {
      name: 'Lesson 13 - Asking Questions',
      description: 'Form and use questions in various contexts',
      example: 'なに、どこ、いつ、どうして',
      time: 35,
      lvl: 'Basic',
      number: 13
    },
    {
      name: 'Lesson 14 - Verbs & Conjugation Basics',
      description: 'Understand verb groups and learn basic conjugations',
      example: 'たべます、のみます、いきます',
      time: 50,
      lvl: 'Intermediate',
      number: 14
    }
  ]

  const lessonsArray = [
    {
      type: 'Translation',
      name: 'Translation - Build a Sentence',
      description: 'Practice translating Japanese sentences by constructing them using individual word tiles.',
      instructions: 'Click on the words in the correct order to form the Japanese sentence.',
      time: 10,
      lvl: 'Basic',
    },
    {
      type: '-て form verb',
      name: 'Memorize -て Form Groups',
      description: 'Memorize which て-form group each verb belongs to for proper conjugation.',
      instructions: 'View the verb, recall its て-form group, check your answer, and move to the next card.',
      time: 30,
      lvl: 'Intermediate',
    }
  ]

  const pages = () => {
    switch (actionStatus.pageSet) {
      case 'Home':
        return (
          <div className={`middleContent ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='middleActions'>
              <div className='headText'>
                <h1 className='h1Welcom'>Welcome!</h1>
                <div className='result'></div>
                <p className='pWelcom'>Continue your journey to mastering Japanese.</p>
              </div>
              <div className='gridHome'>
                <div className='scoreContainer'>
                  <p className='textHome'>Lessons complite</p>
                  <h1 className='h1Home'> 2/25</h1>
                  <div className='scoreLogoLessons'></div>
                </div>
                <div className='scoreContainer'>
                  <p className='textHome'>Mastered word</p>
                  <h1 className='h1Home'> 26/150</h1>
                  <div className='scoreLogoWords'></div>
                </div>
                <div className='scoreContainer'>
                  <p className='textHome'>Kanji</p>
                  <h1 className='h1Home'> 12/100</h1>
                  <div className='scoreLogoKanji'></div>
                </div>
              </div>
              <div className='learningContainer'>
                <h2 className='h2Welcom'>Continue Learning</h2>
                <div className='practiceContainer'>
                  <div className='selectPractice'>
                    <p className='textHomeC'>Lesson 3</p>
                    <p className='textHomeNext'>→ Continue</p>
                  </div>
                  <div className='selectPractice'>
                    <p className='textHomeC'>Kanji prectice</p>
                    <p className='textHomeNext'>→ Continue</p>
                  </div>
                </div>
              </div>
              <div>
                {/* <p className='pHome'>
                Welcome to <b>Japanese language learning</b> site!
                Designed for learners of all levels, this site offers a structured approach to mastering the
                language through practical examples, grammar explanations, and extensive vocabulary.
                Its lessons are widely used in language schools, self-study programs, and by students preparing
                for the Japanese Language Proficiency Test (JLPT).<br />
                <br />
                This site takes the rich content and enhances it with interactive tools
                to make learning Japanese even more engaging and accessible. Whether you’re practicing vocabulary,
                reviewing grammar, or testing your skills, the site provides a dynamic platform tailored to support
                your journey in mastering Japanese.<br />
                <br />
                With features inspired by the textbook and modern educational tools, this site is the perfect
                companion for anyone to achieve their language goals.
                </p> */}
              </div>
            </div>
          </div>
        )
        break;
      case 'Lessons':

        return (
          <div className={`middleActions ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='vocabContainer'>
              <div className={`lessonHideContainer ${practiceContent.lessonStart ? 'remove' : null}`}>
                <h1 className='h1Lesson'> Lessons</h1>
                <p className='pLesson'>Choose lesson</p>
                <input className='search' value={searchValue} onChange={handleInput} placeholder='Search'></input>
                {/* <p className='pLessonText'>
                  Each lesson is designed to gradually introduce new vocabulary,
                  grammar rules, <br />and sentence patterns, making it perfect for beginners.<br />
                  <br />
                  <b>What’s Inside?</b><br />
                  <br />
                  Each lesson includes:<br />
                  •	Vocabulary: Essential words and phrases for daily communication.<br />
                  •	Grammar Points: Clear explanations and practical examples.<br />
                  •	Conversation Practice: Real-life dialogues to improve your speaking skills.<br />
                  •	Exercises: Fun and interactive tasks to reinforce your learning.<br />
                  <br />
                  <b>How to Learn?</b><br />
                  <br />
                  You can easily navigate through the lessons and learn at your own pace. <br />
                  Just click on the button below to choose the lesson you want to study. <br />
                  Each button corresponds to a lesson, starting from the basics and progressing to more advanced topics.
                </p> */}
              </div>
            </div>
            <div className='lessonsContainer'>
              {lessons.map((item, index) => {
                return (
                  <div key={index} onClick={() => lessonPage(item.number)} className='lessonSelectorBox'>
                    <div className='lvl'>{item.lvl}</div>
                    <h1 className='h1LessonButton'>{item.name}</h1>
                    <p className='pLessonButton'>{item.description}</p>
                    <div className='time'>{item.time} min</div>
                    <p className='text'><b>Examples: </b><br />{item.example}</p>
                    <button className='lessonSelectorButton'>Start lesson</button>
                  </div>
                )
              })}
            </div>
          </div>
        )
        break;
      case 'Cards':
        return (
          <div className={`gridItemMiddle ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='headText'>
              <h1 className='h1Lesson'>Vocabulary practice</h1>
              <p className='pLesson'>Flesh cards</p>
            </div>
            <select className='cardsSelector'>
              <option>Lesson 1</option>
              <option>Lesson 2</option>
              <option>Lesson 3</option>
            </select>
            <div className='cardConteiner'>
              <div className='cardBox'>
                <p className='pLesson'>Words 1/10</p>
                <div className='progressBarWords'></div>
                <div className='scrollBar'></div>
                <div className='topJapanese'>こんにちは</div>
                <div className='bottomEng'>Hello</div>
                <div className='exampleBar'><b>こんにちはせんせい</b><br />Hello, sensei.</div>
                <div className='bottomButtons'>
                  <button className='cardsButton1'>Hard</button>
                  <button className='cardsButton2'>Next</button>
                </div>
              </div>
            </div>
          </div>
        )
        break;
      case 'Kanji':
        //add Kanji cards
        return (
          <div className={`cardConteiner ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}> Page "Kanji" </div>
        )
        break;
      case 'Test':
        return (
          <div className={`testPageContainer ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className={`headLine ${practiceContent.startPractice ? 'remove' : null}`}>
              <h1 className='h1Lesson'>Practice Japanese</h1>
              <p className='pLesson'>Select the lesson or exercise</p>
              <input className='search' value={searchValue} onChange={handleInput} placeholder='Search'></input>
              <div className='categoriesContainer'>
                <h2 className='h2Lesson'>Categories:</h2>
                <div className='buttonContainer'>
                  <button className='categoriesButton'>All</button>
                  <button className='categoriesButton'>Translation</button>
                  <button className='categoriesButton'>Cards</button>
                  <button className='categoriesButton'>Words</button>
                </div>
              </div>
              <div className='lessonsContainer'>
                {lessonsArray.map((item, index) => {
                  return (
                    <div key={index} onClick={
                      () => lessonSelector(item.type, index)
                    } className='lessonButtonTest'>
                      <div className='lvl'>{item.lvl}</div>
                      <h1 className='h1LessonButton'>{item.type}</h1>
                      <p className='pLessonButton'>{item.description}</p>
                      <div className='time'>{item.time} min</div>
                      <p className='text'><b>Instruction: </b><br />{item.instructions}</p>
                      <button className='lessonSelectorButton'>Start lesson</button>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Translation */}
            <div className={`practisContainer ${practiceContent.lessonType === 'Translation' ? null : 'remove'}`}>
              <h1 className='h1Lesson'>Practice sentence</h1>
              <p className='pLesson'>Create a sentence</p>
              <div className={`exContainer ${(practiceContent.id + 1) > 5 ? 'remove' : null}`}>
                <h2 className='h2Lesson'>{practiceContent.name}</h2>
                <p className='pLesson'>Remain {practiceContent.id + 1}/5</p>
                <div className='inputQ'>{practiceContent.question}</div>
                <h2 className='h2Lesson'>Answer</h2>
                <div className={`inputQ ${practiceContent.isCorrect ? 'correct' : null}`}>{practiceContent.input}</div><br />
                <button onClick={
                  () => answerCheck(practiceContent.input)
                }
                  className={`doneButton ${practiceContent.isCorrect ? 'remove' : null}`}>
                  Done
                </button>
                <button
                  onClick={
                    () => newLessonPage(practiceContent.id)
                  } className={`doneButton ${practiceContent.isCorrect ? null : 'remove'}`}>
                  Next!
                </button>
                <div className='testSection'>
                  {practiceContent.words.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className={`wordsSelector ${practiceContent.input.includes(item) ? 'active' : null}`}
                        onClick={() => addWordsFun(item)}>{item}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className={`containerDone ${practiceContent.id + 1 > 5 ? '' : 'remove'}`}>
                <div className='practiceDonePageContainer'>
                  <h1 className='h1Lesson'>Congratulation!</h1>
                  <p className='pLesson'>You can choose new test</p>
                  <button className='exitButton' onClick={() => lessonSelector('Exit', 0)}>Go back</button>
                </div>
              </div>
            </div>
            <button className={`exitButton ${practiceContent.lessonType === 'Translation' ? null : 'remove'}`}
              onClick={() => lessonSelector('Exit', 0)}>Exit</button>
            {/* CardLesson */}
            <div className={`practisContainer ${practiceContent.lessonType === '-て form verb' ? null : 'remove'}`}>
              <h1 className='h1Lesson'>{practiceContent.headLine}</h1>
              <p className='pLesson'>{practiceContent.pline}</p>
              <div className={`exContainer ${currentWord.indexCounter > cardWords.length ? 'remove' : null}`}>
                <h2 className='h2Lesson'>て group</h2>
                <p className='pLesson'>Words: <b>{currentWord.indexCounter} / {cardWords.length}</b></p>
                <div className='cardContainerOne'>
                  <div className='card'>
                    <div className='japanWord'>{currentWord.japanese}</div>
                    <div className={`meaning ${currentWord.hidde ? '' : 'hidde'}`}>{currentWord.meaningEng}, Group: {currentWord.currentGroup}</div>
                    <div className='buttonContainerCard'>
                      <button onClick={() => cardWordsUpdate('Hard')} className='cardButton'>Repeat</button>
                      <button onClick={() => cardWordsUpdate('Check')} className='cardButton'>Check</button>
                      <button onClick={() => cardWordsUpdate('Next')} className='cardButton'>Next</button>
                    </div>
                  </div>
                  <p className='pLesson'> Check: &lt; | Next: &gt; | Repeat: v</p>
                </div>
              </div>
              <div className={`containerDone ${currentWord.indexCounter > cardWords.length ? null : 'remove'}`}>
                <div className='practiceDonePageContainer'>
                  <h1 className='h1Lesson'>Congratulation!</h1>
                  <p className='pLesson'>You can choose new test</p>
                  <button className='exitButton' onClick={() => lessonSelector('Exit', 0)}>Go back</button>
                </div>
              </div>
              <button className='exitButton' onClick={() => lessonSelector('Exit', 0)}>Exit</button>
            </div>
          </div>
        )
        break;
      case 'Vocabulary':
        //add search
        return (
          <div className={`middleActions ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='vocabContainer'>
              <h1 className='h1Lesson'> Vocabulary</h1>
              <p className='pLesson'>Choose from lesson</p>
              <input className='search' value={searchValue} onChange={handleInput} placeholder='Search'></input>
            </div>
            <div className='vocGrid'>
              {verbTGroup.map((item, index) => {
                return (
                  <div key={index} className='wordHolderContainer'>
                    <div className='wordTop'>
                      {item.japanese}
                    </div>
                    <div className='wordMiddle'>
                      {item.meaningEng}
                    </div>
                    <div className='wordBottom'>Example: <br />
                      {item.exampleSentence}
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        )
        break;
    }
  }

  const lessonPage = (lesson: number) => {
    console.log(lesson)
    setPracticeContent((p) => ({ ...p, lessonStart: !p.lessonStart }))
  }

  const lessonSelector = (lessonName: string, index: number) => {
    switch (lessonName) {
      case 'Translation':
        setPracticeContent((p) => ({
          ...p, startPractice: !p.startPractice,
          words: practiceQuestions[0].words,
          lessonType: 'Translation',
          headLine: lessonsArray[index].name,
          pline: lessonsArray[index].instructions,
          id: 0
        }))
        break;

      case '-て form verb':
        setCurrentWord((currentWord) => ({
          ...currentWord,
          japanese: cardWords[0].japanWord,
          meaningEng: cardWords[0].meaning,
          currentGroup: cardWords[0].group,
          currentWordId: cardWords[0].id,
          indexCounter: 1
        }))

        setPracticeContent((p) => ({
          ...p,
          startPractice: !p.startPractice,
          lessonType: '-て form verb',
        }))
        break;

      case 'Exit':
        setPracticeContent((p) => ({
          ...p, startPractice: !p.startPractice,
          id: 0,
          lessonType: '',
          headLine: '',
          pline: ''
        }))
        break;

      default:
        break;
    }
  }

  const cardWordsUpdate = (action: string) => {
    let indexWord = currentWord.indexCounter

    switch (action) {
      case 'Next':

        if (currentWord.indexCounter === cardWords.length) {
          setCurrentWord((w) => ({
            ...w,
            indexCounter: w.indexCounter + 1,
          }))
        } else {
          setCurrentWord((w) => ({
            ...w,
            japanese: cardWords[indexWord].japanWord,
            meaningEng: cardWords[indexWord].meaning,
            currentGroup: cardWords[indexWord].group,
            numberOfWords: w.numberOfWords + 1,
            hidde: false,
            indexCounter: w.indexCounter++,
            currentWordId: cardWords[indexWord].id
          }))
        }

        setPracticeContent((p) => ({ ...p, id: p.id + 1 }))

        break;

      case 'Check':
        setCurrentWord((w) => ({
          ...w,
          hidde: true,
        }))

        break;

      case 'Hard':

        setCardWords((c) => [...c, cardWords[indexWord - 1]])

        setCurrentWord((w) => ({
          ...w,
          japanese: cardWords[indexWord].japanWord,
          meaningEng: cardWords[indexWord].meaning,
          currentGroup: cardWords[indexWord].group,
          numberOfWords: w.numberOfWords + 1,
          hidde: false,
          indexCounter: w.indexCounter++,
          currentWordId: cardWords[indexWord].id
        }))

        setPracticeContent((p) => ({ ...p, id: p.id + 1 }))

        break;

    }
  }

  const addWordsFun = (words: string) => {
    if (practiceContent.input.includes(words)) {
      let originString = practiceContent.input
      let newString = originString.replace(words, '')
      setPracticeContent((p) => ({ ...p, input: newString }))
    } else {
      let removeInncorect = practiceContent.input.replace('Incorrect', '')
      setPracticeContent((p) => ({ ...p, input: removeInncorect + words }))
    }
  }

  const answerCheck = (answerUser: string) => {
    if (practiceContent.answer === answerUser) {
      console.log('Correct')
      setPracticeContent((p) => ({ ...p, isCorrect: true, input: p.input + ' Correct!' }))
    } else {
      setPracticeContent((p) => ({ ...p, input: 'Incorrect' }))
      console.log('Incorrect')
    }
  }

  const newLessonPage = (newId: number) => {
    if (practiceContent.id === 4) {
      setPracticeContent((p) => ({ ...p, id: newId++ }))
    } else {
      let newContent = practiceQuestions[newId + 1]
      setPracticeContent((p) => ({
        ...p,
        id: newId++,
        question: newContent.question,
        words: newContent.words,
        answer: newContent.answer,
        input: '',
        isCorrect: false,
      }))
    }
  }

  const newPageStatus = (status: string) => {
    setActionStatus((a) => ({ ...a, animationStatus: false }))
    setTimeout(() => {
      actionStatus.leftMenu ?
        setActionStatus((a) => ({ ...a, leftMenu: !a.leftMenu })) : null
      setActionStatus((a) => ({ ...a, pageSet: status }))
      setActionStatus((a) => ({ ...a, animationStatus: true }))
    }, 300)
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='body'>
      {/* {loadingAnim()} */}
      <div className='gridContainer'>
        <div className={`gridItemLeft ${actionStatus.leftMenu ? 'leftMenuShow' : null}`}>
          <div className='logoImage'>日本語学習</div>
          <button className='buttonMenu' onClick={() => newPageStatus('Home')}>
            <div className='home'></div>
            <span> Home </span>
          </button>
          <button className='buttonMenu' onClick={() => newPageStatus('Lessons')}>
            <div className='lessons'></div>
            <span> Lessons </span>
          </button>
          <button className='buttonMenu' onClick={() => newPageStatus('Cards')}>
            <div className='cards'></div>
            <span> Cadrs </span>
          </button>
          <button className='buttonMenu' onClick={() => newPageStatus('Kanji')}>
            <div className='kanji'></div>
            <span> Kanji </span>
          </button>
          <button className='buttonMenu' onClick={() => newPageStatus('Test')}>
            <div className='test'></div>
            <span> Test </span>
          </button>
          <button className='buttonMenu' onClick={() => newPageStatus('Vocabulary')}>
            <div className='vocabulary'></div>
            <span> Vocabulary </span>
          </button>
          <div className='settContainer'>
            <div className='settings'></div>
            <span className='settingsText'> Settings </span>
          </div>
        </div>
        <div className={`boxExitMobile ${actionStatus.leftMenu ? '' : 'remove'}`} onClick={
          () => setActionStatus((a) => ({
            ...a,
            leftMenu: !a.leftMenu
          }))
        }></div>
        <div className='middle'>
          <div className='topMenuContainer'>
            <div className='leftMenuBatton' onClick={
              () => setActionStatus((a) => ({
                ...a,
                leftMenu: !a.leftMenu
              }))
            }>=</div>
            <div className='lessonProgresContainer'>
              <p className='topMenuText'><b>Lesson Progress</b></p>
              <div className='progressBar'></div>
            </div>
            <div className='wordsCounterContainer'>
              <p className='topMenuText'><b>Words</b><br />26/150</p>
            </div>
            <div className='kanjiCounterContainer'>
              <p className='topMenuText'><b>Kanji</b><br />12/100</p>
            </div>
            <div className='uresLogoContainer'>
              <p className='topMenuText'>User name</p>
            </div>
          </div>
          <div className='gridItemMiddle'>
            {pages()}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
