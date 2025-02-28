const lessonShow = (num: number) => {
    if (num === 0) {
        return
    }
    switch (num) {
        case 1:
            return (
                <div>
                    <h1>だい1か（Lesson 1）- はじめまして (Nice to meet you)</h1>
                    <h2>1. かいわ (Conversation)</h2>
                    <h3>👥 A & B introduce themselves</h3>
                    <p>
                        A: はじめまして。マイク・ミラーです。アメリカからきました。よろしくおねがいします。
                        B: はじめまして。たなかです。にほんじんです。よろしくおねがいします。
                    </p>
                    <h2>2. ぶんぽう (Grammar)</h2>
                    <h3>① A は B です (A is B)</h3>
                    <p>
                        This is a basic sentence pattern used for introducing yourself.

                        📌 Examples:

                        わたしは マイク・ミラー です。 (I am Mike Miller.)
                        たなかさんは にほんじん です。 (Tanaka-san is Japanese.)
                    </p>
                    <h3>② A は B じゃありません (A is not B)</h3>
                    <p>
                        Used to negate a sentence.

                        📌 Examples:

                        わたしは がくせいじゃありません。 (I am not a student.)
                        ミラーさんは せんせいじゃありません。 (Miller-san is not a teacher.)

                    </p>
                    <h3>③ A は B ですか？ (Is A B?)</h3>
                    <p>
                        Used to ask a question.

                        📌 Examples:

                        あなたは がくせいですか？ (Are you a student?) → はい、がくせいです / いいえ、がくせいじゃありません。
                        ミラーさんは せんせいですか？ (Is Miller-san a teacher?)
                    </p>
                </div>
            )
            break;

        case 2:
            return (
                <div>
                    <h1>だい2か（Lesson 2）- これ・それ・あれ (This, That, That over there)</h1>

                    <h2>1. かいわ (Conversation)</h2>
                    <h3>👥 A & B talk about objects</h3>
                    <p>
                        A: これは なんですか？
                        B: それは ほんです。
                        A: あれは なんですか？
                        B: あれは わたしの じしょです。
                    </p>

                    <h2>2. ぶんぽう (Grammar)</h2>

                    <h3>① これ / それ / あれ (This / That / That over there)</h3>
                    <p>
                        Used to refer to objects based on their location.
                        📌 Examples:

                        これは ほんです。 (This is a book.)
                        それは かぎです。 (That is a key.)
                        あれは じしょです。 (That over there is a dictionary.)
                    </p>

                    <h3>② この / その / あの + Noun (This / That / That over there + Noun)</h3>
                    <p>
                        Used when a noun follows the demonstrative.

                        📌 Examples:

                        この ほんは わたしのです。 (This book is mine.)
                        その かぎは たなかさんのですか？ (Is that key Tanaka-san’s?)
                        あの じしょは たかいです。 (That dictionary over there is expensive.)
                    </p>

                    <h3>③ なん / なに (What)</h3>
                    <p>
                        Used to ask for information about an object.

                        📌 Examples:

                        これは なんですか？ (What is this?)
                        それは なんの ざっしですか？ (What kind of magazine is that?)
                    </p>
                </div>
            )
            break

        default:
            break;
    }
}

export default lessonShow