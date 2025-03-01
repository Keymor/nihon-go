import { useState, ChangeEvent, useEffect } from 'react'
import './App.css'
import verbTGroup from './twords'
import cardWordsNew from './vocabulary'
import lessonShow from './lessonsList'
import lessons from './lessons'

//change repeat checker for hard words 

function App() {

  interface wordsArray {
    japanWord: string,
    meaning: string,
    isItVerb: boolean,
    isItNaun: boolean,
    isItAdjective: boolean,
    lesson: number
  }

  interface actionArray {
    animationStatus: boolean;
    logIn: boolean;
    pageSet: string;
    isHidde: boolean;
    isHiddeMenu: boolean;
    leftMenu: boolean;
    progressCard: number;
    progressCardProcent: number;
    oneProcent: number;
    cardIndex: number;
    messege: string;
    repeatNum: number;
    startLesson: boolean;
    wordsAmount?: number;
    endLesson: boolean;
    wordCheck: boolean;
    lessonNumber: number;
    lessonId: number
  }

  const [searchValue, setSearchValue] = useState('')

  const [actionStatus, setActionStatus] = useState<actionArray>({
    animationStatus: true,
    logIn: false,
    pageSet: 'Home',
    isHidde: false,
    isHiddeMenu: false,
    leftMenu: false,
    progressCard: 1, //show word number
    progressCardProcent: 0, //for progress bar
    oneProcent: 0,
    cardIndex: 0, //for index in array
    messege: '', //for done in the end
    repeatNum: 0,
    startLesson: false,
    wordsAmount: 0, //mount of words from wordArray
    endLesson: false,
    wordCheck: false,
    lessonNumber: 0,
    lessonId: 0,
  })

  const [showWord, setShowWord] = useState<wordsArray>(
    {
      japanWord: "おわります",
      meaning: "to finish",
      isItVerb: false,
      isItNaun: false,
      isItAdjective: false,
      lesson: 0
    }
  )

  //hard words array
  const [repeat, setRepeat] = useState<wordsArray[]>([])
  //new words array
  const [wordsList, setWordsList] = useState<wordsArray[]>([])

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
    progress: 0
  })

  //tests for future
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

  //tests for future
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
      lvl: 'Work in progress!',
    }
  ]

  //Kanji for future
  const kanji = [
    {
      japanese: "国",
      meaningEng: "Country",
      exampleSentence: "その王がその国を治めていた。",
      lvlGroup: 1,
      currentWordId: 1
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
            <div className='lessonShowBox' style={{ display: actionStatus.lessonId === 0 ? 'none' : '' }}>
              {lessonShow(actionStatus.lessonId)}
            </div>
            <div className='lessonsContainer' style={{ display: actionStatus.lessonId > 0 ? 'none' : '' }}>
              {lessons.map((item, index) => {
                return (
                  <div key={index} className='lessonSelectorBox'>
                    <div className='lvl'>{item.lvl}</div>
                    <h1 className='h1LessonButton'>{item.name}</h1>
                    <p className='pLessonButton'>{item.description}</p>
                    <div className='time'>{item.time} min</div>
                    <p className='text'><b>Examples: </b><br />{item.example}</p>
                    <button disabled={item.number <= 2 ? false : true} onClick={() => lessonPage(index + 1)} className='lessonSelectorButton'>Start lesson</button>
                  </div>
                )
              })}
            </div>
            <div style={{ display: actionStatus.lessonId === 0 ? 'none' : '' }}>
              <button className='cardsButton1' onClick={() => setActionStatus((a) => ({ ...a, lessonId: 0 }))}>
                Back
              </button>
              <button className='cardsButton1' onClick={() => setActionStatus((a) => ({ ...a, lessonId: 0 }))}>
                Complete
              </button>
              <button className='cardsButton1' onClick={() => newPageStatus('Cards')}>
                Go to cards -{'>'}
              </button>
            </div>
          </div>
        )
        break;
      case 'Cards':
        return (
          <div className={`gridItemMiddle ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='headTextCards'>
              <h1 className='h1Lesson'>Vocabulary practice</h1>
              <p className='pLesson'>Flesh cards</p>
            </div>
            <div className={`cardConteiner`}>
              <div className='cardBox'>
                <div className='selectorBox'>
                  <select value={actionStatus.lessonNumber}
                    onChange={handleOption}
                    className='cardsSelector'
                    style={{ display: actionStatus.startLesson ? 'none' : '' }}>
                    <option value={0}>Choose lesson</option>
                    <option value={1}>Lesson 1</option>
                    <option value={2}>Lesson 2</option>
                  </select>
                  <button className={
                    `cardsButton2 ${actionStatus.startLesson ?
                      'remove' :
                      ''
                    }`}
                    style={{ marginTop: '3rem' }}
                    onClick={cardStartLesson}
                  >Start
                  </button>
                </div>
                <div className={`${actionStatus.startLesson ? '' : 'hidde'}`}>
                  <p className='pLesson'>{
                    <>New words {wordsList.length}<br />Repeat {repeat.length}</>
                  }
                  </p>
                  <div className='progressBarWords'
                    style={{ '--before-width': `${actionStatus.progressCardProcent}%` } as React.CSSProperties}>
                  </div>
                  <div className='topJapanese'>{showWord.japanWord}
                  </div>
                  <div className='bottomEng'
                    style={{ 'height': '1rem' }}>{actionStatus.wordCheck ? showWord.meaning : null}
                  </div>
                  <p>
                    {actionStatus.messege.length === 0 ? '' : actionStatus.messege}
                  </p>
                  <div className='bottomButtons'>
                    <button className={`cardsButton1 ${actionStatus.endLesson ? 'remove' : ''}`}
                      onClick={clickHard}>Repeat
                    </button>
                    <button className={`cardsButton2 ${actionStatus.endLesson ? 'remove' : ''}`}
                      onClick={clickNext}>{actionStatus.wordCheck ? 'Next' : 'Check'}
                    </button>
                    <button onClick={
                      () => setActionStatus((a) => ({
                        ...a, startLesson: false
                      }))}
                      className={
                        `cardsButton1 ${actionStatus.endLesson ? '' : 'remove'}`
                      }>Exit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        break;
      case 'Kanji':
        //add Kanji cards
        return (
          <div className={`gridItemMiddle ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='headTextCards'>
              <h1 className='h1Lesson'>Kanji practice</h1>
              <p className='pLesson'>Flesh cards</p>
            </div>
            <select className='cardsSelector'>
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </select>
            <div className='cardConteiner'>
              <div className='cardBox'>
                <p className='pLesson'>Kanji 1/10</p>
                <div className='progressBarWords'></div>
                <div className='topJapanese'>{kanji[0].japanese}</div>
                <div className='bottomEng'>{kanji[0].meaningEng}</div>
                <div className='exampleBar'><b>{kanji[0].exampleSentence}</b></div>
                <div className='bottomButtons'>
                  <button className='cardsButton1'>Hard</button>
                  <button className='cardsButton2'>Next</button>
                </div>
              </div>
            </div>
          </div>
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
                    <div key={index} className='lessonButtonTest'>
                      <div className='lvl'>{item.lvl}</div>
                      <h1 className='h1LessonButton'>{item.type}</h1>
                      <p className='pLessonButton'>{item.description}</p>
                      <div className='time'>{item.time} min</div>
                      <p className='text'><b>Instruction: </b><br />{item.instructions}</p>
                      <button disabled={item.lvl === 'Work in progress!' ? true : false} onClick={
                        () => lessonSelector(item.type, index)
                      } className='lessonSelectorButton'>Start lesson</button>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Translation */}
            <div className={`practisContainer ${practiceContent.lessonType === 'Translation' ? null : 'remove'}`}>
              <h1 className='h1Lesson'>Practice sentence</h1>
              <p className='pLesson'>Create a sentence</p>
              <div className='cardConteiner'>
                <div className='cardBox'>
                  <button className={`exitButton ${practiceContent.lessonType === 'Translation' ? null : 'remove'}`}
                    onClick={() => lessonSelector('Exit', 0)}>❌</button>
                  <p className='pLesson'>Sentence {practiceContent.id + 1}/5</p>
                  <div className='progressBarWords'
                    style={{ '--before-width': `${practiceContent.progress}%` } as React.CSSProperties}>
                  </div>
                  <div className='inputQ'>{practiceContent.question}</div>
                  <h2 className='h2Lesson'>Answer</h2>
                  <div className={`inputA ${practiceContent.isCorrect ? 'correct' : null}`}>{practiceContent.input}</div>
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
                  <button
                    onClick={
                      () => newLessonPage(practiceContent.id)
                    } className={`doneButton ${practiceContent.isCorrect ? null : 'remove'}`}>
                    Next!
                  </button>
                  <button onClick={
                    () => answerCheck(practiceContent.input)
                  }
                    className={`doneButton ${practiceContent.isCorrect ? 'remove' : null}`}>
                    Done
                  </button>
                </div>
              </div>
              <div className={`containerDone ${practiceContent.id + 1 > 5 ? '' : 'remove'}`}>
                <div className='practiceDonePageContainer'>
                  <h1 className='h1Lesson'>Congratulation!</h1>
                  <p className='pLesson'>You can choose new checkBoolean</p>
                  <button className='exitButton' onClick={() => lessonSelector('Exit', 0)}>Go back</button>
                </div>
              </div>
            </div>
            {/* CardLesson */}
            <div className={`practisContainer ${practiceContent.lessonType === '-て form verb' ? null : 'remove'}`}>
              <h1 className='h1Lesson'>{practiceContent.headLine}</h1>
              <p className='pLesson'>{practiceContent.pline}</p>
              <h1 className='h1Lesson'>-て group</h1>
              <p className='pLesson'>Card practice</p>
              <div className='cardConteiner'>
                <div className='cardBox'>
                  <button className='exitButton' onClick={() => lessonSelector('Exit', 0)}>❌</button>
                  <p className='pLesson'>Words <b>{currentWord.indexCounter} / {cardWords.length}</b></p>
                  <div className='progressBarWords'></div>
                  <div className='topJapanese'>{currentWord.japanese}</div>
                  <div className={`bottomEng 'hidde'`}></div>
                  <div className='exampleBar'>
                    <div className={`'' ${currentWord.hidde ? '' : 'hidde'}`}>
                      {currentWord.meaningEng}<br /> Group: {currentWord.currentGroup}
                    </div>
                  </div>
                  <div className='bottomButtons'>
                    <button onClick={() => cardWordsUpdate('Hard')} className='cardsButton1'>Repeat</button>
                    <button onClick={() => cardWordsUpdate('Check')} className='cardButton'>Check</button>
                    <button onClick={() => cardWordsUpdate('Next')} className='cardsButton2'>Next</button>
                  </div>
                </div>
              </div>
              <div className={`containerDone ${currentWord.indexCounter > cardWords.length ? null : 'remove'}`}>
                <div className='practiceDonePageContainer'>
                  <h1 className='h1Lesson'>Congratulation!</h1>
                  <p className='pLesson'>You can choose new checkBoolean</p>
                  <button className='exitButton' onClick={() => lessonSelector('Exit', 0)}>Go back</button>
                </div>
              </div>
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
              {cardWordsNew.map((item, index) => {
                return (
                  <div key={index} style={{ alignContent: 'center' }}
                    className='wordHolderContainer'>
                    <div className='wordTop'>
                      {item.japanWord}
                    </div>
                    <div className='wordMiddle'>
                      {item.meaning}
                    </div>
                  </div>
                )
              })
              }
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
      case 'DEV':
        return (
          <div className={`gridItemMiddle ${actionStatus.animationStatus ? 'testPageEnter' : 'testPageExit'}`}>
            <div className='headTextCards'>
              <h1 className='h1Lesson'>Test page</h1>
              <p className='pLesson'>Test cards</p>
            </div>
            <select className='cardsSelector'>
              <option>Lesson 1</option>
              <option>Lesson 2</option>
              <option>Lesson 3</option>
            </select>
            <button className={
              `cardsButtonStart ${actionStatus.startLesson ?
                'remove' :
                ''
              }`}
              onClick={cardStartLesson}
            >Start
            </button>
            <div className={`cardConteiner ${actionStatus.startLesson ? '' : 'remove'}`}>
              <div className='cardBox'>
                <p className='pLesson'>{
                  <>New words {wordsList.length}<br />Repeat {repeat.length}</>
                }
                </p>
                <div className='progressBarWords'
                  style={{ '--before-width': `${actionStatus.progressCardProcent}%` } as React.CSSProperties}>
                </div>
                <div className='topJapanese'
                  style={{ 'margin': 'auto' } as React.CSSProperties}>{showWord.japanWord}
                </div>
                <div className='bottomEng'
                  style={{ 'height': '1rem' }}>{actionStatus.wordCheck ? showWord.meaning : null}
                </div>
                <p>
                  {actionStatus.messege.length === 0 ? '' : actionStatus.messege}
                </p>
                <div className='bottomButtons'>
                  <button className={`cardsButton1 ${actionStatus.endLesson ? 'remove' : ''}`}
                    onClick={clickHard}>Repeat
                  </button>
                  <button className={`cardsButton2 ${actionStatus.endLesson ? 'remove' : ''}`}
                    onClick={clickNext}>{actionStatus.wordCheck ? 'Next' : 'Check'}
                  </button>
                  <button onClick={() => setActionStatus((a) => ({ ...a, startLesson: false }))} className={`cardsButton1 ${actionStatus.endLesson ? '' : 'remove'}`}>Exit</button>
                </div>
              </div>
            </div>
          </div>
        )
        break;
    }
  }

  //update array with new words for lesson
  const cardStartLesson = () => {
    if (actionStatus.lessonNumber === 0) {
      return
    }

    const lessonCheck = (array: wordsArray) => {
      return array.lesson === actionStatus.lessonNumber
    }
    const lessonsArray = cardWordsNew.filter(lessonCheck)


    setShowWord(lessonsArray[0])
    setActionStatus((a) => ({
      ...a,
      startLesson: true,
      progressCardProcent: 0,
      progressCard: 0,
      oneProcent: 0,
      endLesson: false,
      wordsAmount: cardWordsNew.length
    }))
    setRepeat((r) => r = [])
    setWordsList([...lessonsArray])
  }

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActionStatus((a) => ({ ...a, lessonNumber: parseFloat(event.target.value) }));
  }

  //switch to new words and check translition
  const clickNext = () => {
    if (!actionStatus.wordCheck) {
      setActionStatus((a) => ({ ...a, wordCheck: true }))
      return
    }

    let newArray = wordsList.slice(1)

    if (wordsList.length > 1) {
      // If multiple words remain, move to the next one
      setWordsList((w) => w = newArray)
      setShowWord((s) => s = newArray[0])
    } else if (wordsList.length <= 1 && repeat.length > 0) {
      // If only one word remains, switch to repeat or mark as "Done!"
      if (wordsList.length === 1) {
        // Switch to repeat
        setWordsList((w) => w = [])
        setShowWord((s) => ({ ...s, japanWord: repeat[0].japanWord, meaning: repeat[0].meaning }))
      } else {
        // Make it done or move to next word
        repeat.length === 1 ?
          setShowWord((s) => ({ ...s, japanWord: 'Done!', meaning: 'Done!' })) :
          setShowWord((s) => ({ ...s, japanWord: repeat[1].japanWord, meaning: repeat[1].meaning }))
        // Clear repeat for done or remove first word
        repeat.length === 1 ?
          setRepeat((r) => r = []) :
          setRepeat((r) => r.slice(1))
      }
    } else {
      setWordsList((w) => w = [])
      setShowWord((s) => ({ ...s, japanWord: 'Done!', meaning: 'Done!' }))
    }

    setActionStatus((a) => ({
      ...a, progressCardProcent: a.progressCardProcent + 10, wordCheck: false
    }))
  }

  const clickHard = () => {
    if (repeat.length === 1 && wordsList.length === 0) {
      return
    }
    wordsList.length === 0 ? setRepeat((r) => ([...r, r[0]])) : setRepeat((r) => ([...r, wordsList[0]]))
    let newArray = wordsList.slice(1)

    if (wordsList.length === 1) {
      setWordsList((w) => w = [])
      setShowWord((s) => ({ ...s, japanWord: repeat[0].japanWord, meaning: repeat[0].meaning }))
    } else {
      if (newArray.length > 0) {
        setWordsList((w) => w = newArray)
        setShowWord((s) => ({ ...s, japanWord: newArray[0].japanWord, meaning: newArray[0].meaning }))
      } else {
        setShowWord((s) => ({ ...s, japanWord: repeat[1].japanWord, meaning: repeat[1].meaning }))
        setRepeat((r) => r.slice(1))
      }
    }
    setActionStatus((a) => ({ ...a, wordCheck: false }))
  }

  useEffect(() => {
    if (showWord.japanWord === 'Done!') {
      setActionStatus((a) => ({ ...a, endLesson: true }))
    }
  }, [showWord])

  const lessonPage = (lesson: number) => {
    setActionStatus((a) => ({ ...a, lessonId: lesson }))
  }

  const lessonSelector = (lessonName: string, index: number) => {
    switch (lessonName) {
      case 'Translation':
        setPracticeContent((p) => ({
          ...p,
          startPractice: !p.startPractice,
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
          words: practiceQuestions[0].words,
          answer: practiceQuestions[0].answer,
          question: practiceQuestions[0].question,
          lessonType: '',
          headLine: lessonsArray[0].name,
          pline: lessonsArray[0].instructions,
          input: '',
          isCorrect: false,
          progress: 0,
          id: 0
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
      setPracticeContent((p) => ({ ...p, isCorrect: true, input: p.input + ' Correct!', progress: p.progress + 20 }))
    } else {
      setPracticeContent((p) => ({ ...p, input: 'Incorrect' }))
      console.log('Incorrect')
    }
  }

  const newLessonPage = (newId: number) => {
    if (practiceContent.id === 4) {
      return
    } else {
      let newContent = practiceQuestions[newId + 1]
      setPracticeContent((p) => ({
        ...p,
        id: newId++,
        question: newContent.question,
        words: newContent.words,
        answer: newContent.answer,
        input: '',
        isCorrect: false
      }))
    }
  }

  const newPageStatus = (status: string) => {
    setActionStatus((a) => ({ ...a, animationStatus: false }))
    setTimeout(() => {
      actionStatus.leftMenu ?
        setActionStatus((a) => ({ ...a, leftMenu: !a.leftMenu })) : null
      setActionStatus((a) => ({ ...a, pageSet: status }))
      setActionStatus((a) => ({ ...a, animationStatus: true, startLesson: false }))
    }, 300)
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='body'>
      {/* {loadingAnim()} */}
      <div className='gridContainer'>
        <div className={`gridItemLeft ${actionStatus.leftMenu ? 'leftMenuShow' : 'hidde'}`}>
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
          {/* <button className='buttonMenu' onClick={() => newPageStatus('Kanji')}>
            <div className='kanji'></div>
            <span> Kanji </span>
          </button>  */}
          <button className='buttonMenu' onClick={() => newPageStatus('Test')}>
            <div className='checkBoolean'></div>
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
            <div className='logoImage2'>日本語学習</div>
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
          <div className='topMetuButtonsContainer'>
            <button className='buttonMenu' onClick={() => newPageStatus('Home')}>
              <span> Home </span>
            </button>
            <button className='buttonMenu' onClick={() => newPageStatus('Lessons')}>
              <span> Lessons </span>
            </button>
            <button className='buttonMenu' onClick={() => newPageStatus('Cards')}>
              <span> Cadrs </span>
            </button>
            {/* <button className='buttonMenu' onClick={() => newPageStatus('Kanji')}>
              <span> Kanji </span>
            </button> */}
            <button className='buttonMenu' onClick={() => newPageStatus('Test')}>
              <span> Test </span>
            </button>
            <button className='buttonMenu' onClick={() => newPageStatus('Vocabulary')}>
              <span> Vocabulary </span>
            </button>
            <button className='buttonMenu' onClick={() => newPageStatus('DEV')}>
              <span> DEV </span>
            </button>
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
