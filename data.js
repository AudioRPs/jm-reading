// Every line Joel says on this page is from his own YouTube videos, checked word for word against the captions.
const V = {
 "0jex9PTtDA0": "Repetition Changed His Reality (He Hit £47K)",
 "0zUhdhvssKE": "Become a Magnet to Money (Masterclass Replay)",
 "2yMeL7nXigA": "I taught 25 entrepreneurs how to change their self image in under 3 hours",
 "3cnCsygxxP8": "He Already Studied Bob Proctor - But THIS Changed Everything",
 "5hJIvKfC3Xs": "How To Stop Your Subconscious From Resisting",
 "GnlwXORCzNg": "How to Use the Law of Attraction in Business to Scale to £10K+ Months - Masterclass Replay",
 "NQ9hzqCK8XM": "Speak to Yourself This Way and Watch Your Reality Start Changing",
 "Oxo0qYKE4_Y": "Your Subconscious Controls Your Income & How To Change it (Full Webinar)",
 "UYiVP8QtyfU": "The Law of Attraction in Business Replay: How to Shift Frequency and Multiply Income",
 "XOakmzrz8RI": "The 60 Second Trick That Rewires Your Subconscious Mind",
 "YVggKsI4F0s": "She was stuck for years until she realised this",
 "f8f2EMF_kng": "he ignored his reality… now he makes €18k/pm",
 "i7Y8w9URFqk": "Unlock Your Mindset, Unlock Your Business - Live Masterclass Replay",
 "lPwNlGRFKvk": "She Almost Didn’t Join… Now She’s 10Xing Her Results",
 "lYhlq01RmAs": "He Studied Mindset for YEARS… But THIS Paradigm Shift Changed Everything!",
 "ss3qxe7VEk8": "Write This 100 Times a Day & Your Reality Will Change",
 "t906pkzTOnY": "How to Create a Massive Breakthrough: 60 Minute Virtual Workshop"
};
const CLIPS = {
 "num": {
  "v": "GnlwXORCzNg",
  "s": 936,
  "e": 991,
  "q": "What your income is telling you"
 },
 "stuck": {
  "v": "UYiVP8QtyfU",
  "s": 906,
  "e": 941,
  "q": "Stuck for years? You’re not alone"
 },
 "cam": {
  "v": "0zUhdhvssKE",
  "s": 416,
  "e": 474,
  "q": "The call that changed Joel’s life"
 },
 "gradual": {
  "v": "UYiVP8QtyfU",
  "s": 1125,
  "e": 1146,
  "q": "Turn your yearly income into a monthly income"
 },
 "jerry": {
  "v": "i7Y8w9URFqk",
  "s": 2272,
  "e": 2303,
  "q": "Start with your yearly income as a month"
 },
 "samuel": {
  "v": "2yMeL7nXigA",
  "s": 4086,
  "e": 4139,
  "q": "That’s not a fairy tale"
 },
 "mario": {
  "v": "GnlwXORCzNg",
  "s": 2866,
  "e": 2916,
  "q": "If it was already guaranteed"
 },
 "heavy": {
  "v": "3cnCsygxxP8",
  "s": 580,
  "e": 621,
  "q": "Working so hard it feels heavy"
 },
 "slips": {
  "v": "5hJIvKfC3Xs",
  "s": 218,
  "e": 252,
  "q": "Why it slips back"
 },
 "knowall": {
  "v": "0jex9PTtDA0",
  "s": 925,
  "e": 972,
  "q": "Knowing it isn’t doing it"
 },
 "scared": {
  "v": "lYhlq01RmAs",
  "s": 770,
  "e": 817,
  "q": "Scared to make a decision"
 },
 "buy": {
  "v": "UYiVP8QtyfU",
  "s": 3875,
  "e": 3921,
  "q": "When prospects don’t buy"
 },
 "change": {
  "v": "0zUhdhvssKE",
  "s": 4171,
  "e": 4221,
  "q": "What needs to change"
 },
 "peter": {
  "v": "0zUhdhvssKE",
  "s": 3956,
  "e": 4000,
  "q": "That’s an affirmation"
 },
 "hardearn": {
  "v": "Oxo0qYKE4_Y",
  "s": 3029,
  "e": 3081,
  "q": "The belief you grew up with"
 },
 "evil": {
  "v": "0zUhdhvssKE",
  "s": 2778,
  "e": 2820,
  "q": "Money is not good or bad"
 },
 "afford": {
  "v": "ss3qxe7VEk8",
  "s": 77,
  "e": 135,
  "q": "We can’t afford that"
 },
 "taboo": {
  "v": "Oxo0qYKE4_Y",
  "s": 3387,
  "e": 3418,
  "q": "Money was never talked about"
 },
 "attract": {
  "v": "UYiVP8QtyfU",
  "s": 1312,
  "e": 1355,
  "q": "You attract what you are"
 },
 "loan": {
  "v": "YVggKsI4F0s",
  "s": 598,
  "e": 635,
  "q": "How am I going to afford it?"
 },
 "notime": {
  "v": "lPwNlGRFKvk",
  "s": 863,
  "e": 892,
  "q": "I don’t have the time"
 },
 "boxer": {
  "v": "f8f2EMF_kng",
  "s": 922,
  "e": 968,
  "q": "Can I do it on my own?"
 },
 "fear": {
  "v": "lPwNlGRFKvk",
  "s": 640,
  "e": 690,
  "q": "What if it doesn’t work?"
 },
 "able": {
  "v": "2yMeL7nXigA",
  "s": 1204,
  "e": 1244,
  "q": "Am I able? Am I willing?"
 },
 "nine": {
  "v": "0zUhdhvssKE",
  "s": 1649,
  "e": 1674,
  "q": "How committed are you?"
 },
 "interested": {
  "v": "0zUhdhvssKE",
  "s": 1676,
  "e": 1719,
  "q": "Interested or committed?"
 },
 "willing": {
  "v": "t906pkzTOnY",
  "s": 2944,
  "e": 2976,
  "q": "Are you willing?"
 },
 "selfimage": {
  "v": "2yMeL7nXigA",
  "s": 1640,
  "e": 1674,
  "q": "Who is that version of you?"
 },
 "good": {
  "v": "2yMeL7nXigA",
  "s": 5490,
  "e": 5529,
  "q": "Say “that’s good”"
 }
};
const Q = {
 "programmed": {
  "v": "2yMeL7nXigA",
  "at": 5238,
  "t": "The only reason I ask you all what you earn, by the way, because it just shows me where you programmed."
 },
 "honest": {
  "v": "GnlwXORCzNg",
  "at": 903,
  "t": "We've got to get really honest with where we are. We can't kid ourselves."
 },
 "notalone": {
  "v": "UYiVP8QtyfU",
  "at": 915,
  "t": "I was there for eight years. Okay. But you're not alone."
 },
 "gradualq": {
  "v": "UYiVP8QtyfU",
  "at": 1125,
  "t": "I'm not a coach or a mentor that believes in gradual progress."
 },
 "scare": {
  "v": "0zUhdhvssKE",
  "at": 1327,
  "t": "When I set a goal, if it doesn't scare me, I know I'm on the wrong track."
 },
 "tryon": {
  "v": "GnlwXORCzNg",
  "at": 2916,
  "t": "Are you going and trying those things on now? You don't need to buy it, but are you doing what you would do if you was making 50K a month?"
 },
 "feelgood": {
  "v": "3cnCsygxxP8",
  "at": 580,
  "t": "the main thing about manifestation is to feel happy and feel good now"
 },
 "gap": {
  "v": "0jex9PTtDA0",
  "at": 960,
  "t": "closes the gap between everything that you know and everything that you do"
 },
 "mindset": {
  "v": "lYhlq01RmAs",
  "at": 777,
  "t": "your mind is set to earn what you're earning"
 },
 "assuming": {
  "v": "UYiVP8QtyfU",
  "at": 3894,
  "t": "you're going into these calls with people assuming that they're not going to buy. And then when they don't buy, you're blaming them."
 },
 "nonethem": {
  "v": "0zUhdhvssKE",
  "at": 4202,
  "t": "I say it's none of them. The only thing that you've got to change is your thinking."
 },
 "onlyproblem": {
  "v": "UYiVP8QtyfU",
  "at": 236,
  "t": "you're your only problem and you're your only solution"
 },
 "magnet": {
  "v": "GnlwXORCzNg",
  "at": 1290,
  "t": "I am a magnet to money. I am an amazing person. I am the best in the world at what I do."
 },
 "afterIam": {
  "v": "UYiVP8QtyfU",
  "at": 1505,
  "t": "Anything that you put after I am immediately starts to manifest in your life."
 },
 "hardnot": {
  "v": "0zUhdhvssKE",
  "at": 2355,
  "t": "Money is not hard to earn."
 },
 "amplifier": {
  "v": "0zUhdhvssKE",
  "at": 2857,
  "t": "All money is is an amplifier."
 },
 "fearlogic": {
  "v": "NQ9hzqCK8XM",
  "at": 238,
  "t": "Now that voice can sound responsible, but sometimes it's just fear that's dressed up as logic"
 },
 "wonderful": {
  "v": "Oxo0qYKE4_Y",
  "at": 3398,
  "t": "I love money. I think money is wonderful."
 },
 "attractare": {
  "v": "UYiVP8QtyfU",
  "at": 1319,
  "t": "you don't attract what you want. You attract what you are."
 },
 "howfeel": {
  "v": "XOakmzrz8RI",
  "at": 107,
  "t": "if I was earning this much right now, then how would I feel?"
 },
 "butq": {
  "v": "lPwNlGRFKvk",
  "at": 868,
  "t": "And Bob always taught anything that you put after but is the circumstance."
 },
 "timeq": {
  "v": "lYhlq01RmAs",
  "at": 738,
  "t": "do you want to do it not do I have the money or do I have the time or will my partner let me do it"
 },
 "bigger": {
  "v": "f8f2EMF_kng",
  "at": 950,
  "t": "all my job is I just see you way bigger than you see yourself right now."
 },
 "fearq": {
  "v": "lPwNlGRFKvk",
  "at": 660,
  "t": "The fear doesn't go. You just got to do it whilst you're feeling the fear."
 },
 "ableq": {
  "v": "0zUhdhvssKE",
  "at": 1728,
  "t": "Am I able to do it? Yes, you are. I can tell you that for free."
 },
 "nineq": {
  "v": "0zUhdhvssKE",
  "at": 1660,
  "t": "if you're 99% in, all I hear is that you're 100% out."
 },
 "interestedq": {
  "v": "0zUhdhvssKE",
  "at": 1690,
  "t": "when we're interested, we do what's convenient. When we're committed, we do whatever it takes"
 },
 "cardback": {
  "v": "2yMeL7nXigA",
  "at": 4297,
  "t": "This truth is clearly imaged in my conscious mind. It is effectively planted through constant spaced repetition in my subconscious emotional mind. Therefore, it is presently moving into physical form."
 },
 "callfilter": {
  "v": "GnlwXORCzNg",
  "at": 3739,
  "t": "if you're really serious and committed to making a change, then I really encourage you to book that call with me."
 },
 "selfscript": {
  "v": "Oxo0qYKE4_Y",
  "at": 2308,
  "t": "all my clients, they have to repeat their self-image script four times every single day."
 },
 "onething": {
  "v": "2yMeL7nXigA",
  "at": 3184,
  "t": "I just wake up and I focus on one until it's done."
 },
 "thatsgood": {
  "v": "2yMeL7nXigA",
  "at": 5523,
  "t": "always have the attitude of that's good. No matter what it is, that's good."
 },
 "carry": {
  "v": "2yMeL7nXigA",
  "at": 548,
  "t": "when you wake up in the morning, you read it and you carry it with you everywhere that you go."
 }
};
