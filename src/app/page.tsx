"use client"
import Image from "next/image"
import { useState } from "react"

const Home = () => {
  const [guess, setGuess] = useState("")
  const [key1, setKey1] = useState("")
  const [key2, setKey2] = useState("")
  const [key3, setKey3] = useState("")
  const [key4, setKey4] = useState("")
  const [key5, setKey5] = useState("")
  const [done, setDone] = useState(false)
  return (
    <div className="the-answer-is-uwp-burrito w-screen h-screen bg-red-100 flex justify-around items-center">
      {done ? (
        key1 === "T" &&
        key2 === "E" &&
        key3 === "E" &&
        key4 === "M" &&
        key5 === "O" ? (
          <div className="h-fit w-fit flex flex-col">
            <div className="flex space-x-5 mx-auto mt-5">
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key1}
                onChange={(e) => setKey1(e.target.value.toUpperCase())}
                disabled
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key2}
                onChange={(e) => setKey2(e.target.value.toUpperCase())}
                disabled
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key3}
                onChange={(e) => setKey3(e.target.value.toUpperCase())}
                disabled
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key4}
                onChange={(e) => setKey4(e.target.value.toUpperCase())}
                disabled
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key5}
                onChange={(e) => setKey5(e.target.value.toUpperCase())}
                disabled
              ></input>
            </div>
            <div className="text-6xl font-bold text-green-600 text-center">
              Congratulations!
            </div>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=2ICZah7he1EeCPdv?&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mt-10"
            ></iframe>
          </div>
        ) : (
          <div className="h-fit w-fit flex flex-col">
            <div className="text-3xl font-bold">
              Almost there! Enter the five letter keys.{" "}
            </div>
            <div className="flex space-x-5 mx-auto mt-5">
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key1}
                onChange={(e) => setKey1(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key2}
                onChange={(e) => setKey2(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key3}
                onChange={(e) => setKey3(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key4}
                onChange={(e) => setKey4(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key1 === "T" &&
                  key2 === "E" &&
                  key3 === "E" &&
                  key4 === "M" &&
                  key5 === "O" &&
                  "bg-green-200"
                }`}
                value={key5}
                onChange={(e) => setKey5(e.target.value.toUpperCase())}
              ></input>
            </div>
          </div>
        )
      ) : (
        <div className="h-fit w-fit mx-10 flex flex-col justify-around items-center">
          <div className="font-bold text-3xl text-center leading-10">
            Welcome! From now on, there will be a few puzzles where you will
            have to enter the solution in this textbox to get the next clue.{" "}
            <br />
          </div>
          <div className="text-3xl text-center leading-10 mt-10">
            Sometimes, the answer to all your life&apos;s problems is inspect
            element
          </div>
          <input
            type="text"
            className="mt-5 bg-gray-100 border-2 border-solid border-black outline-none"
            value={guess}
            onChange={(event) => setGuess(event?.target.value)}
          ></input>
          {guess.toLowerCase() === "uwp burrito" && (
            <div className="w-80 h-80 mt-10">
              <img src="/https:::youtu.be:0ivSYHU8Y0o.png" />
            </div>
          )}
          {guess.toLowerCase() === "pineapple incident" && (
            <div className="w-80 h-80 mt-10">
              <div className="w-full text-center">
                mmmm... pineapple. Tasty! I wonder who lives here?
              </div>
              <img src="/pineapple.jpg" />
            </div>
          )}
          {guess.toLowerCase() === "spongebob" && (
            <>
              <div className="text-center italic mt-3">
                Who knew there was a deadly computer virus in spongebob? (Key:
                O)
              </div>
              <div className="w-[900px] h-[300px] overflow-y-scroll mt-5">
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The episode begins at nighttime at the Krusty Krab.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  French Narrator: [camera cuts to the exterior of The Krusty
                  Krab] Closing time at the Krusty Krab.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [counting the change in the cash register] 51, 52,
                  53...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [counting his suction cups] 29, 30, 31...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [mopping in synchronization] One, two, three. One,
                  two, three.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Mr. Krabs, can we please go now?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Perhaps, one of our more loyal workers can
                  enlighten you on company policy.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [referencing the manual] &quot;The Krusty Krab
                  Employee Manual; 2nd Revised Edition; Page 35; Section 19;
                  Clause 3a, states: All staff must remain on the premises until
                  the day&apos;s receipts are fully accounted for.&quot;
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: But that&apos;s not fair!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [referencing the manual, again] &quot;Clause 3b:
                  The proprietor reserves the right to be unfair.&quot;
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Teacher&apos;s pet.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Let&apos;s see... [counts money in his register]
                  five, ten, 25, blue, apple sauce. Everything looks to be in
                  order. Except... [gasps] Where is it? [takes apart the
                  register in search of something] Where is it?!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: What?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: My dime! Me special dime, the first dime I ever
                  made! I always keep it in the back of the register for luck!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Well, I&apos;ve never seen it. [Mr. Krabs glares at
                  Squidward in suspicion]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Hmm, are you prepared to say that with your hand on
                  a stack of interpretive dance quarterlies? [pulls out a stack
                  of dance quarterlies]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Of course I&apos;m... [makes a shocked face] What
                  are you saying?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Me? I ain&apos;t saying nothing that would matter
                  to anyone who would be willing to take a lie detector test!
                  [holding a lie detector in his hands]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: You&apos;re saying something!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Heavens to Betsy, no. It&apos;s just that me lucky
                  dime&apos;s gone missing and you&apos;ve been working the
                  register all day!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [angrily] Are you accusing me of something?!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Well, the way I see it, there are three
                  possibilities: One, you stole it. Two, you stole it. Or three,
                  you stole it!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [enraged] I didn&apos;t take your precious dime!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Show me your tentacles.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: What?!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: I wanna see empty suction cups.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [squeezes Mr. Krabs&apos; eyes with his tentacles
                  in anger] Here! Here! Here! See &apos;em?! [stomps away]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: You... you can&apos;t do that to me. I&apos;m your
                  boss!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Not anymore, Mr. Krabs. I quit! [throws his hat
                  down. The hat falls in slow motion]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [gasps] No! [catches the hat with a pillow]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: I&apos;m outta here!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Squidward, you&apos;re making a big mistake!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Mistake? Ha! The only mistake I ever made was
                  wasting my life at the Krusty Krab!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: But a visit to the Krusty Krab makes everyone
                  happy. And what could be better than serving up smiles?
                  [smiles really big]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Being dead or anything else!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: I never knew you felt so strongly about this.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Where have you been?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Well, I guess I can&apos;t stop you. But Squidward,
                  it&apos;s a cold, cold world out there. No one&apos;s going to
                  serve you happiness on a silver platter. [Norma appears with
                  cookies on a silver platter and offers SpongeBob a cookie]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Incidental 49: Free sample?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Cookies! [takes one, and eats it]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Can I have one? [Incidental 49 is already gone]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Anyway, I just want you to know, if you ever get in
                  trouble, come find me. I&apos;ll take care of you. &apos;Cause
                  you and me... [grabs Squidward and pulls him toward himself]
                  ...we&apos;re like brothers, only closer. [lifts
                  Squidward&apos;s shirt and their hearts are somehow joined
                  together and beating in unison. Creepy alien music plays
                  before Squidward screams and leaps away from SpongeBob.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: SpongeBob, I don&apos;t need your help. I am ready
                  to unlock my potential. I could become anything I set my mind
                  to. [imagines himself in various following jobs] I could be a
                  football player, or a king, or a spaceman.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Or a football playing king in space... with a
                  mustache.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [narrows his eyes] Yeah... uh-huh. Ya know, that
                  reminds me, there&apos;s something I&apos;ve been wanting to
                  say to you since the day we met... Goodbye. Next time you see
                  me, this town will be eating out of the palm of my hands!
                  [skips to a homeless Squidward in a box trying to get spare
                  change in a cup from passersby] Spare change? Spare change,
                  ma&apos;am?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Squidward? Squidward, is that you?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Uh, I, uh... [closes his box]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: It&apos;s me, SpongeBob. [opens his box up] We used
                  to work together.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: SpongeBob?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: There ya go. So, where you living these days?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Fish: Squidward Tentacles?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Yes?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Fish: Sign here, please. [Squidward signs and the fish takes
                  his box]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Uh... nowhere.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Great. And what have you been doing with yourself?
                  No, wait, let me guess! Hmmm...I see you&apos;ve been working
                  on that mustache, the tattered clothes, the awful smell...
                  you&apos;re a football player?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: No.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: A spaceman?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: No.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: A football playing king in space-?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Don&apos;t you get it? [sobs] I&apos;m a loser! I
                  lost my job, my home, everything!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [gasps] Even your paintings?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Nobody would take them. So I had to eat them! [his
                  stomach is shown to have a rectangular shape from his eaten
                  painting. Squidward starts to cry out a fountain of tears into
                  SpongeBob. SpongeBob soaks it up and becomes bigger, but he
                  squishes himself to let the water out]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: There, there. You can come live with me. [Bubble
                  transition to SpongeBob&apos;s house] Here you go, Squidward.
                  You sleep in my bed. [Squidward is laying in SpongeBob&apos;s
                  bed]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Okay, but just until I get a job. One day... two
                  days tops.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [baby talk] Nonsense. You stay as long as you need
                  to. [kisses Squidward on his nose] Good night, my little
                  angel. [the next morning, SpongeBob rings a bell to wake
                  Squidward] Breakfast is ready! You&apos;re gonna need to build
                  up your strength again so I laid out a big buffet for you.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: And in bed, too? Aw, thanks, SpongeBob. SpongeBob,
                  I...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Ahh! Shh, shh, shh, shh, shh, shh, shh. Here comes
                  the plane. [makes plane noises while attempting to put some
                  food in Squidward&apos;s mouth with a spoon]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: It&apos;s really nice of you to help me in my time
                  of need. [swallows the food] I&apos;ll try not to be a burden.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: It&apos;s no trouble. Is there anything else I can
                  do for you, winner?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: No, no, no. You&apos;ve already... well... [shows
                  SpongeBob putting lotion on his hand and then massaging
                  Squidward&apos;s scalp, feeding him grapes, massaging his
                  tentacle, spraying his scalp with hairspray and wiping it,
                  massaging his back then his nose, giving him a baby bottle,
                  wiping his scalp once more, giving him an acupuncture, and
                  polishing his head and seeing his reflection]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Oh, wow. Nurturing a broken spirit is a lot of
                  work. [throws the blanket upwards and it lands on him as he
                  lies on the sofa] I&apos;m bushed. Still, it feels nice to do
                  good. [turns the lamp off then yawns] Good night, Gary.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: SpongeBob, can I get a glass of water? [bottom
                  floor light turns on and SpongeBob marches up stairs and turns
                  on the light to give Squidward the water] Thank you.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Good night. [marches back downstairs and turns off
                  the light]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: SpongeBob, could I get some more blankets?
                  [SpongeBob marches upstairs again turning on the lights on the
                  way up there]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Here you go.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Thank you. [SpongeBob goes downstairs again,
                  accidentally leaving Squidward&apos;s light on] SpongeBob, you
                  forgot to turn out the light! [SpongeBob marches upstairs]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Good night. [turns off the light and when he walks
                  downstairs he trips and makes lots of noises]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Gary: Meow.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [gasps] Gary! Squidward is not a freeloader, and he
                  would never take advantage of me.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  French Narrator: [reading timecard] Three weeks later...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [exhausted] He&apos;s just having a hard time
                  getting his confidence back. [falls down]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  French Narrator: [reading another timecard] Many months
                  later...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [even more exhausted. Gary looks tired as well]
                  I&apos;m sure he&apos;s close to a breakthrough. [falls down]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  British Narrator: [reading the third timecard] So much later
                  that the old narrator got tired of waiting and they had to
                  hire a new one...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob drags himself into the room, by now utterly
                  exhausted. Gary doesn&apos;t look sympathetic, though.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Gary: Meow, meow, meow.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [annoyed] I know he still isn&apos;t looking for
                  work! Don&apos;t rub it in!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: SpongeBob, where&apos;s my lemonade?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Coming, Squidward. [falls flat on his face]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [SpongeBob is running down the hallway] SpongeBob?!
                  SpongeBob?! [SpongeBob enters his bedroom] And why aren&apos;t
                  you in uniform? [SpongeBob exits room and re-enters in a maid
                  outfit] It&apos;s about time you got here!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [sardonically] Here you go, Your Majesty.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: I can&apos;t drink that.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Why not?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Are you blind? Just look at it. [close-up of the
                  lemonade]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [becomes irritated] What about it?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: That lemon has three seeds in it. That&apos;s an
                  odd number! I can&apos;t eat anything odd numbered.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Fine, I&apos;ll just take it out. [takes out the
                  lemon and Squidward goes crazy]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: No! No! It&apos;s already contaminated by the bad
                  lemon! It won&apos;t work!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [annoyed] Hmm, that&apos;s two things in this house
                  that won&apos;t work. [refers to Squidward and the lemonade]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Then go fix them.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [grips the glass of lemonade so hard that it
                  shatters] Two things that won&apos;t work! [clenches his fists
                  and trembles in anger]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: I&apos;ve changed my mind. I want soup instead.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Okay, don&apos;t move. [walks out the bedroom door,
                  revealing his white briefs, as his outfit doesn&apos;t cover
                  his back. He then closes the door, and comes back in wearing
                  normal clothes with a bowl of steaming soup] Here you go.
                  It&apos;s alphabet soup. I made it special. [shows soup with
                  the phrase &quot;GET A JOB&quot; in alphabet letters but then
                  Squidward slaps it out of SpongeBob&apos;s hands]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Condensed soup from a can? Disgusting! Now
                  you&apos;ve ruined my appetite! Go fetch me something to read!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Oh, okay. How about this? [pulls out a newspaper
                  with the &quot;job listings&quot; page on the front]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [gasps and swats the Bikini Bottom Times Free Press
                  newspaper away. SpongeBob becomes more angry] Get that away
                  from me! You know I&apos;m allergic to newsprint!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [chortles] Ya know, when you swatted that newspaper
                  out of my hands, it reminded me of something a friend of mine
                  did... at his job! [SpongeBob&apos;s alarm clock blows him
                  away]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: 4:00. Time for my stories. Hurry up, they
                  won&apos;t hold the show while you laze around. [SpongeBob
                  rolls in a TV and hands Squidward the remote. Squidward turns
                  it with crayon background on to see two puppets: a green
                  puppet, which represents Squidward, and a yellow one wearing a
                  shirt and tie similar to SpongeBob]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #1: [puppet #2 is whistling] Hey, where are you going?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #2: To my job.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #1: You have a job?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #2: Why wouldn&apos;t I? I&apos;m not some lazy,
                  inconsider{" "}
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #1: Say, where can I get one of these... jobs?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #2: Oh, they&apos;re everywhere. [the camera moves back
                  in the room, showing SpongeBob making voices with the puppets]
                  Especially if you&apos;re green and have six tentacles.{" "}
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Puppet #1: Thanks. I&apos;m gonna go look for one, so I can
                  stop...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: ...mooching off my friends and they can get back to
                  their lives!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: This isn&apos;t my show. [presses the remote, with
                  crayon background, but nothing happens] SpongeBob, the remote
                  control is broken! Get over here and fix it!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [angrily] I&apos;ve got a better idea! [throws the
                  TV away and jumps on top of Squidward in bed] Why don&apos;t I
                  call someone whose job it is to fix it? You know why? Because
                  when I need a job [pokes Squidward&apos;s nose] done, I get
                  someone with a job [pokes Squidward&apos;s nose again] to do
                  [pokes Squidward&apos;s nose for the third time] that job!
                  [pokes Squidward&apos;s nose for the fourth time]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: [narrows his eyelids] What are you saying?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [This turns out to be the last straw. Outside, it is day.
                  SpongeBob&apos;s house jumps into the air before the side is
                  smashed out as a furious SpongeBob pushes the bed, with
                  Squidward still in it, outside and towards the Krusty Krab
                  while screaming in total fury.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [talking on his phone] Donate to the
                  children&apos;s fund? Why? What have children ever done for
                  me? [SpongeBob suddenly appears, as he furiously grabs the
                  phone and throws it away]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: You want your dime back?! [takes one out] Take it!
                  Now Squidward can come back, right? [Mr. Krabs checks the dime
                  through a telescope]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Wrong! [throws the dime at SpongeBob&apos;s face]
                  That ain&apos;t my first dime.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Then have some more dimes! [throws out more dimes
                  at Mr. Krabs&apos; face. Mr. Krabs narrows his eyes] I&apos;ve
                  got plenty of &apos;em!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: You can&apos;t put a price on me first dime! And I
                  can&apos;t forgive that thievin&apos; bilge rat Squidward for
                  stealin&apos; it!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [finally snaps in extreme rage and fury, grabbing
                  Mr. Krabs by the throat and holding him up in the air] Listen,
                  you crustaceous cheap-skate! Squidward&apos;s been living at
                  my house, driving me crazy! [shakes him violently with wide
                  open and bloodshot eyes, screaming furiously] And you&apos;re
                  not gonna hire him back all because of a stupid dime?! [a
                  prehistoric dime falls out of Mr. Krabs&apos; back pocket.
                  SpongeBob suddenly calms down and lets go of Mr. Krabs]
                  What&apos;s that?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [gasps] Me first dime. [hugs the dime] Oh, Dimey,
                  I&apos;ll never lose you again.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: This is a dime?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: I&apos;ve been in business a long time, boy.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: So, if Squidward never stole the dime, he can come
                  back to work, right?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Aye, lad, just let the dime and me have our
                  privacy. [kisses the dime. SpongeBob cheers before running
                  off]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Yeeee-aah-hoooo!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [at the counter] Well, Mr. Squidward, it&apos;s
                  good to have ya back.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Well, it&apos;s kind of good to be back, sir.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: It&apos;s all water under the bridge now.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: I agree, sir.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: After all, I&apos;m sure ya didn&apos;t mean to
                  misplace me dime.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: What the... What are you saying?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Well, it&apos;s obvious that ya put the dime in me
                  pants. Dimes just don&apos;t fly into people&apos;s pants.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Are you accusing me of something? [SpongeBob puts
                  the maid costume back on over his clothes, ready for the
                  inevitable]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Well, the way I see it, there are three
                  possibilities: One, you put the dime in me pants. [outside the
                  Krusty Krab] Two, you put the dime in me pants. Or three, you
                  put the dime in me pants!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick walk up to the Palace of Pranks.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Well, Patrick, here it is, the Palace of Pranks,
                  the greatest novelty shop in Bikini Bottom. All the greatest
                  pranksters shop here. This is where I got my gag... [the scene
                  shows a close up of the can of Seanut Brittle.] seanut brittle
                  can.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Oh, boy, Seanut Brittle. Gimmie!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick tries to open the can.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Patrick, wait, it&apos;s a booby trap, remember?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Nice try, SquarePants, but it&apos;s not gonna work
                  this time. I&apos;m gonna have some of your delicious Seanut
                  Brittle! [opens the can and purple tubes pop out of the can]
                  Where&apos;s the Seanut Brittle?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [laughs] That gets funnier every time you say it,
                  Patrick. Come on, let&apos;s go inside.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob walks off screen.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: [starting to cry] Seanut Brittle?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob enters the Palace of Pranks and smells the air.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Ah! [Patrick enters the scene] Nothing compares to
                  the smell of cheap plastic novelty items. [an aisle is shown]
                  Pranks, gags, and gross-out toys as far as the eye can see!
                  [walks down an aisle] Isn&apos;t it everything I said it would
                  be, Patrick?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: [in another aisle] Hey, Seanut Brittle! [purple tubes
                  appear popping above the aisle that Patrick is in] Oh, darn
                  it, not again!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene only shows SpongeBob in his aisle. SpongeBob
                  laughs. An old fish named Frank enters the scene.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: Good to see you, SpongeBob. How&apos;s my number one
                  customer doing?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Great, Frank. This is my friend Patrick. He wants
                  to become a prankster, too.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: [walks up to Patrick] Well, pleasure to meet you,
                  Patrick. [shakes Patrick&apos;s hand, but Frank has a joy
                  buzzer, so it shocks Patrick. Patrick screams and sucks on his
                  hand. Frank laughs.] That&apos;s your first lesson, son, the
                  granddaddy of all pranks. The joy buzzer.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: I don&apos;t get it.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: You don&apos;t have to get it. The prank is for the
                  enjoyment of the prankster.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: You see, Patrick, Frank here is the master. I
                  learned all I know about pranks from him. [he and Patrick walk
                  to the checkout counter and Frank is behind it.] Okay, Frank,
                  let&apos;s see what you&apos;ve got.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: Well, this came in just this morning. [shows a package
                  of gum] Have some gum. [Patrick chews the gum but then he
                  screams as his head explodes] Ha! Exploding chewing gum. Only
                  $9.95.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: [His head is gone, leaving a neck bone in the shape
                  of a femur and he talks muffled] I don&apos;t get it.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [takes out a dollar.] What can we get for one
                  dollar?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: One dollar will get you this fake gag dollar-- [takes
                  out a fake dollar] fool your friends into thinking you&apos;ve
                  got a real dollar.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: What else have you got?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Frank holds up a whoopee cushion.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: A whoopee cushion.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Nah.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Frank holds up fake vomit.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: Fake vomit.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: No.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Part of the counter is covered in real vomit.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: Real vomit?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Eugghh. Don&apos;t you have anything good?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: Well, there is one prank that I&apos;ve been saving for
                  a real top of the line prankster. [shows close up of a spray
                  can] Invisible Spray!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Wow, invisible spray!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: But I can see it.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Gee, Patrick, just think of the pranks we could
                  pull with this.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob gives Frank some money.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Frank: Good choice. Now be careful with that stuff, boys. It
                  stains clothes.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Thanks, Frank. [he and Patrick walk off-screen. The
                  scene changes to show SpongeBob and Patrick outside.] Here it
                  is, Patrick. The ultimate prank-- invisible spray.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: What are we gonna do with it?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: I know! We&apos;ll go spray the park bench and then
                  sit on it, and when people walk by, we&apos;ll be floating in
                  midair.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [They both think about sitting on an invisible bench,
                  surrounded by Nat, Tom, Tina-Fran, Horace, Halber, and
                  Shelia.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Nat: They&apos;re floating in midair!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Tina-Fran: How do they do that?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The thought bubble disappears.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: That&apos;s the ultimate prank! Good idea, SpongeBob!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick gives SpongeBob a thumbs up.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Well, let&apos;s get started.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick takes off his shorts.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Okay, I&apos;m ready.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick drops his pants on the ground.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Any particular reason you took your pants off?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Well, that stuff stains clothes, right?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: That it does, Patrick, that it does. Good thinking.
                  Here, hold this a second. [Patrick takes the can of spray
                  while SpongeBob takes off his pants. Patrick hugs the can.]
                  Okay, Patrick, give me the can.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: I think since spraying the park bench was my idea, I
                  should get to spray it.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Patrick, spraying the park bench was my idea.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah, but I said it was a good idea!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Give me that thing.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob grabs the can and he and Patrick wrestle over it.
                  SpongeBob accidentally sprays their clothes and they
                  disappear]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Hey, the invisible spray works!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [A tour bus drives up.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Tom: And on your right, if you look, you&apos;ll see two naked
                  guys fighting over a can of paint!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The passengers and Tom laugh. The bus drives off. SpongeBob
                  covers his lower half]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Oh my gosh, Patrick, help me find our clothes!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob pats the ground, trying to grab the clothes.
                  Patrick sprays SpongeBob&apos;s right hand and it disappears]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: I gotta hand it to you, SpongeBob. You look kinda
                  funny.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick laughs and SpongeBob screams.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Righty, where are you? [Patrick laughs again.] No
                  one messes with Righty! [takes the spray can with his
                  invisible hand.] We&apos;ll see how you like it! [sprays
                  Patrick making a hole in the middle of his body] Kind of gives
                  you an empty feeling, huh?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick takes the can.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah. [He sprays SpongeBob&apos;s upper left corner.]
                  I see what you mean.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob takes the spray can and sprays Patrick&apos;s lower
                  half.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: No guts, no glory! [laughs]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  French Narrator: Several bad puns later...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene returns to SpongeBob and Patrick, who are now
                  invisible. Patrick shakes the can.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Oh, hey, I think this thing is empty!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob grabs the can and shakes it.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Oh, no, it can&apos;t be! How are we going to pull
                  off the ultimate prank? Thanks a lot, Patrick, you used the
                  last of it!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob throws the can far away.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Hey, I think I found our pants. [a ripping noise is
                  heard] Oops! Here, these are yours.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Oh, forget the pants, Patrick. Let&apos;s get home
                  and wash this paint off.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick walk off somewhere.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Hey, SpongeBob, do you know what time it is?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Oh sure, it&apos;s... half past invisible.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Gee, it&apos;s getting late.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [They walk up behind Nat.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Let&apos;s ask this guy. Excuse me, sir, but do you
                  have the time?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Nat: Sure. [looks at his watch] It&apos;s, uh, ten to three.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Thank you.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Nat: Don&apos;t mention it.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Nat turns around to notice there is seemingly no one there.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Don&apos;t mention what?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Nat: Uh, who said that?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Me.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Nat: [screams] Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Nat runs away from them; his eyes pop out. His eyes scream,
                  jump into a car and drive away.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Hey, I&apos;m no ghost! Well, the nerve of that guy
                  and his driving eyeballs.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Wait a second, Patrick, my brain just hatched an
                  idea.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Lay it on me.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Okay, we&apos;re invisible, right?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: If that guy thought we were ghosts, we could haunt
                  everybody in Bikini Bottom. Oh, it&apos;s the ultimate prank.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: Whoo! High five!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [They give each other a high five]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Let&apos;s go scare us some suckers!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene changes to show Sandy&apos;s treedome. The scene
                  then shows her reading a book in a rocking chair in her tree.
                  She hears a noise, which is SpongeBob and Patrick&apos;s
                  laughter. She checks to see what it is, but there is
                  supposedly nothing there. She gets up and goes to her window.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Sandy: Huh? [the outside of her tree is shown] Well,
                  that&apos;s funny, I thought I heard voices. Huh? [walks up to
                  a glass of juice on the floor] I thought I left that glass of
                  peanut juice on the table. [walks over to a table with a lamp
                  covered in garbage] And didn&apos;t I toss that old lamp out
                  yesterday? And since when did I acquire all these portraits of
                  Patrick?!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Photos of Patrick are on the walls and tables, and the rug
                  has his face on it. Sandy turns around and sees SpongeBob and
                  Patrick covered in white sheets over their heads as they
                  wail.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: We&apos;re ghosts.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick wail again. Sandy laughs.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Sandy: I knew it was you guys! Alright, joke&apos;s over. Take
                  off the sheets. [pulls off the sheets and notices there is
                  nothing there, then gasps] It is ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Sandy screams. She takes out a remote with a large red
                  button. She pressed the button and an escape pod that is in
                  the shape of an acorn appears out of some panels. She enters
                  the escape pod and presses a button. The escape pod flies out
                  of her dome, above the water, past the Bikini Bottom island,
                  and lands in Texas. The escape pod explodes in Texas.
                  SpongeBob and Patrick leave Sandy&apos;s house, laughing.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Boy, we really scared her!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick laugh.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Who&apos;s gonna be our next victim?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: A better question would be, &quot;Who
                  isn&apos;t?&quot;
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene changes to show Mrs. Puff&apos;s house, where she
                  is preparing to eat a piece of cake.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mrs. Puff: Double-dark deep-sea light diet cake! [laughs] You
                  will soon be mine. [Patrick and possibly SpongeBob eat(s) the
                  cake, making it look like ghosts have eaten it. Patrick&apos;s
                  face is covered in cake. He belches loudly and wipes it off.]
                  Oh! [gets filled up with air and then lets it out flying all
                  around] Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Her deflated body lands on the table. The scene changes to
                  show Squidward painting and humming to himself at his house.
                  SpongeBob and/or Patrick takes the paintbrush, making it look
                  like it is floating in mid air.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Huh?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and/or Patrick paint(s) a mustache under
                  Squidward&apos;s nose. The two wail ghostly. Squidward crashes
                  through the wall and runs away.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene changes to show Bill surfing at Goo Lagoon.
                  SpongeBob and Patrick surf up to Bill, making it look like a
                  surfboard is on a wave by itself.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: [Speaking in ghostly voices] Cowabunga!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Bill: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Bill screams while falling off the board.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Gale appears waving her arms wildly.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Gale: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Fred appears with his eyes bugging out of his head.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Fred: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Lonnie appears, scared with arms on his head.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Lonnie: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Francis appears in a sort of screaming position.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Francis: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Sandals appears holding a piece of toast.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Sandals: Toast.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Harold appears sitting on the toilet, appearing freaked out.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Harold: Ghosts!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick are reading newspapers. SpongeBob
                  laughs.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: It&apos;s official: we&apos;re the greatest
                  pranksters ever. The whole town thinks we&apos;re ghosts.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick is holding his newspaper upside down]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: There&apos;s only one guy left to scare, and
                  we&apos;ll have pranked everybody in Bikini Bottom-- [An
                  article is shown it reads, &quot;Krabs Last To Be Haunted!
                  says, &apos;I ain&apos;t afraid of no ghosts&apos;&quot;] Mr.
                  Krabs.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The same article is shown on Patrick&apos;s paper, but it is
                  upside down.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: It says he isn&apos;t scared of ghosts.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob is &quot;shown&quot;]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: We&apos;ll see about that!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene changes to show the Krusty Krab at night. Mr. Krabs
                  peers out of the blinds.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Ghosts? Ha! I ain&apos;t afraid of no ghosts! Every
                  sailor knows a ghost won&apos;t come near a fella as long as
                  he&apos;s wearing his spotted neckerchief, [grabs a
                  handkerchief] and his dried-up sea leprechaun, [shows ashes of
                  the sea leprechaun] and a bit of gold never hurt. [shows a
                  gold necklace around Mr. Krabs neck that reads,
                  &quot;Foxy&quot;] But to be on the safe side, I&apos;m also
                  wearing me pants in a maldon knot. [his underwear is strung up
                  with rope] Got me shiverin&apos; timber brace, [shows his
                  ankles chained together] and the hairs on the back of me neck
                  are taped down. [a strip of duct tape covers the hair. Mr.
                  Krabs is shown wearing a barrel and a headpiece with lanterns
                  hung on it.] And I&apos;m all wrapped up in a suit of
                  anti-ghost armor. And if none of this stuff works, I&apos;ve
                  got me secret weapon—the specter deflector! [holds up a paddle
                  ball] So just try and get me, you ghosts! Bring it on.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The lights black turn off. SpongeBob and Patrick wail
                  ghostly.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: [as they open the front door] Krabs!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Wha?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick toss over a table and barrel. They pick
                  up a barrel and a table to make it look like they are
                  floating.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Krabs, we&apos;ve come to haunt you.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Mr. Krabs uses the specter detector (paddle ball) by bouncing
                  the stringed ball back and forth from the paddle board.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Stay back, I&apos;m well-armed!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick moan ghostly. SpongeBob and Patrick
                  walk by with a barrel, making it look like it is floating by.
                  Mr. Krabs hits the ball faster.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: I&apos;m warning ya!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick moan. SpongeBob or Patrick stops the
                  ball. SpongeBob or Patrick then cuts the string.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [shivering] Ooh!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: [quietly] Boo.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Mr. Krabs breaks out of his armor and screams in horror.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: I gotta get out of here!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [He runs to the doors, but they don&apos;t open.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: You can&apos;t escape, Krabs, we&apos;ve glued the
                  doors shut!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The door is held closed with a long strip of glue. The scene
                  shows the side of the Krusty Krab.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [off-screen] You&apos;ll never get me!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Mr. Krabs tries to break through the window, but instead of
                  shattering, the window stretches like elastic and slingshots
                  him backwards, and he crashes into a table]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Nice try, Krabs, but we replaced all the glass with
                  rubber!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Mr. Krabs dives into the toilet, but gets stuck. He pulls
                  himself out and sits on the floor, dazed]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Too late, Krabs, we&apos;ve already clogged all the
                  toilets! [The toilet is stuffed with toilet paper. Mr. Krabs
                  cowers in a corner.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Please, spirits, leave me be.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick laughs.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: [while Mr. Krabs is incoherently begging for his
                  life] We got him good, SpongeBob.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [while Mr. Krabs is incoherently begging for his
                  life] Wait, Patrick, I&apos;ve got one more idea. [to Mr.
                  Krabs] You&apos;re going to pay, Krabs.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [shaking with fear] No, spirits, please!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Pay!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [a dollar floats in the air]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: No!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [high-pitched] Pay! [lights a match]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: No! Don&apos;t burn me dollar! [grabs a bucket of
                  water and throws it at the dollar. The water drips on
                  SpongeBob and Patrick, making them reappear. They laugh, not
                  noticing they&apos;re visible.] Well, well, well, if it
                  isn&apos;t SpongeBob and Patrick.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [wiggling his arms and legs like a ghost] I know
                  not these names of which you speak.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick looks down and notices that he is visible.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Uh, SpongeBob. SpongeBob, we&apos;re visible again.
                  [SpongeBob looks down, then he and Patrick scream and cover
                  their lower halves. Mr. Krabs lifts them up by the back of
                  their necks as they try to run.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: So you two are the Bikini Bottom ghosts.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: We&apos;re really sorry, Mr. Krabs. Please
                  don&apos;t chop us into little pieces and eat &apos;em.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Mr. Krabs puts them down.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Hey, come on, boys, I&apos;m hip! I pulled my share
                  of pranks when I was your age. Had me some laughs. That&apos;s
                  what we did tonight, right? We had a good laugh. Come on,
                  laugh with me. [they all laugh.] Uh, any particular reason you
                  boys are naked?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Yeah, the invisible paint stains clothes.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Mr. Krabs laughs]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Of course it does. Well, you two better hurry home
                  before someone sees ya nude.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Yeah, I think I&apos;d die of embarrassment if that
                  happened.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Me too.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: Woo, now we wouldn&apos;t want that, would we?
                  It&apos;s getting late now. You two pranksters better get
                  going.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Mr. Krabs, thanks for being such a good sport.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: [off-screen] Don&apos;t mention it.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick walk into the dining area.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: That Mr. Krabs, always looking out for me. What a
                  guy.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [A white, round light shines on SpongeBob and Patrick. The
                  scene pans out to show a crowd of people.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Mr. Krabs: The Krusty Krab presents... live nude pranksters!
                  [He is shown shining the light on them from the crow&apos;s
                  nest] Starring the Bikini Bottom Ghosts.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Nat, Sadie, Harold, Martin, Abigail Marge, and Frank are
                  shown cheering. SpongeBob and Patrick scream while trying to
                  cover themselves up. Mr. Krabs laughs teasingly. Sandy
                  whistles at them as Mrs. Puff takes a picture. Squidward
                  laughs. SpongeBob and Patrick keep trying to cover
                  themselves.]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Patrick!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: [Scene cuts to the outside of the Krusty Krab] We
                  should have bought the whoopee cushion!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob lets out a crying yell as the episode ends. A
                  person wolf whistles in cheers.]
                </div>

                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob is sitting inside of his mailbox humming. He checks
                  his watch. The mailman opens the mailbox]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Hi, mailman!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The mailman yells in fear, and runs off]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Okay, [gets out of the mailbox] see you tomorrow!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick walks up]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Hey, the mail&apos;s here! What did you get?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Let&apos;s see... [Looks through the mail] Gary,
                  Gary, Gary, Gary, Gary, Gary, Hey! A magazine!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob looks at the magazine ]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: That&apos;s funny, I don&apos;t remember
                  subscribing to Fancy Living Digest.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: [They look inside the magazine] Whoa!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Look at all these glossy depictions of a higher
                  standard of living!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [A picture of a rich person&apos;s swimming pool is shown]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: This guy&apos;s so rich, he has a swimming pool in
                  his swimming pool!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [A picture is shown of an old, rich person surrounded with
                  bags of money]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: [Points at the man&apos;s feet] This guy&apos;s got
                  shoes!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: Give me that! [Takes the magazine] Stealing my
                  mail, eh? You&apos;re lucky I don&apos;t report you to the
                  authorities!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Hey Squidward, how do the people in that magazine
                  get all that money?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: They&apos;re entrepreneurs. They sell things to
                  people.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: What kind of things?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Squidward: How should I know? Things people wanna buy! [walks
                  off] Now keep your paws off my mail.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: That&apos;s it, Patrick! We gotta becomes
                  entrepreneurs!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Is that gonna hurt?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Quick Patrick, without thinking, if you could have
                  anything in the world right now, what would it be?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Uh... [sweats] More time for thinking.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: No, something real, an item, something you would
                  pay for.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: A chocolate bar?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: That&apos;s a great idea, Pat! We&apos;ll become
                  traveling chocolate bar salesmen!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The scene changes to SpongeBob and Patrick exiting the
                  Barg&apos;N-Mart carrying many chocolate bars]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Fancy living, here we come!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Make way for a couple of ontre-prenyouers! [SpongeBob
                  and Patrick walk up to a house]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: O.K. Patrick, this is it! The first step on our
                  road to living fancy! Just follow my lead.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob runs up and knocks on the door, Tom the fish opens
                  the door]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Good afternoon sir, could we interest you in some
                  [holds up chocolate bar] chocolate?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Tom: Chocolate? Did you say, Chocolate?!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yes sir. With or without nuts?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Tom: Chocolate?! Chocolate?! Chocolate! Chocolate!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob and Patrick slowly back away, and then run off. Tom
                  chases them while madly screaming &quot;Chocolate!&quot; The
                  scene cuts to SpongeBob ringing the doorbell of another house]
                  O.K, the first guy didn&apos;t count. This is our real first
                  step! [A Con man opens the door] Good Morning, sir! Would you
                  like to buy some chocolate?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: Chocolate bars, eh?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Yes sir, we are chocolate bar salesmen!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: Ha! A couple of mediocre salesmen if you ask me.
                  That&apos;s no way to carry your merchandise!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick is shown holding many chocolate bars in his pants]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: No, no no no, wrong. You guys wanna be good salesmen,
                  right?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: Oh, most certainly, sir!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: Well, [chuckles] no self respecting candy bar
                  salesman would be caught dead without one of these! [He holds
                  up a bright-orange bag]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Wow... what is it?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: It&apos;s a candy bar bag, you knuckle-head!
                  It&apos;s specially designed to cradle each candy bar in
                  velvet-lined comfort!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob tries to touch it]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: [pulls bag away] But, I&apos;m wasting my time.
                  [Walks inside] You don&apos;t need these bags.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: We need &apos;em! We need &apos;em!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [The Con man grins, the scene changes to the Con man counting
                  money. SpongeBob and Patrick are walking away with armfuls of
                  bags]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: So long, boys! Happy hunting! [Laughs when the two
                  aren&apos;t looking] Suckers... [walks back inside]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob and Patrick: [singing as they run off] Fancy
                  livin&apos;, here we come! La la la la, la!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Let&apos;s try next door!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob walks up and rings the doorbell with his foot, the
                  same Con man comes out]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: Yes?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Huh? Say, weren&apos;t you the same guy who sold us
                  these candy bar bags?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Con man: I... don&apos;t recall. But it looks to me like you
                  fellas have got a lot of bags there. You two lady killers are
                  too smart to be without one of my patented Candy Bar Bag
                  Carrying Bags. [Holds up two large maroon bags]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: We&apos;ll take twenty!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Scene changes to SpongeBob knocking on the door of a
                  different house, Sadie comes out]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Sadie: Oh, what can I do for you two nice young men?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: We&apos;re selling chocolate bars. Would you like
                  to buy one?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Sadie: That sounds heavenly! I&apos;ll take one.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: One chocolate bar, coming up!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob attempts to pull out a chocolate bar, but keeps
                  pulling more bags, while Patrick is zipping and unzipping his
                  pants]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Sadie: [Sadie looks at her watch] I don&apos;t have time for
                  this.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Sadie goes back inside, and then SpongeBob pulls out a
                  chocolate bar]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: I... got it! One chocolate bar for the nice— [Sees
                  something off camera; it is revealed to be Tom, still
                  screaming]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Tom: Chocolate! Chocolate! Chocolate!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: —lady. [Tom chases SpongeBob and Patrick again
                  while screaming &quot;Chocolate!&quot; The scene cuts to
                  SpongeBob and Patrick sitting in a diner] We&apos;re not doing
                  so well, Patrick. We need a new approach, a new tactic.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Hm... I got it! Let&apos;s get naked!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: No, let&apos;s save that for when we&apos;re
                  selling real estate... There must be something. What was the
                  reason we bought those bags?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: He said we were mediocre...
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: That&apos;s it! He made us feel special!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Yeah, he did... I&apos;m going back to buy more bags!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick runs to the door]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: No, wait Patrick!
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick freezes in place]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Why don&apos;t we try being nice?
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Patrick: Oh, okay.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Scene changes to SpongeBob and Patrick walking up to a
                  customer&apos;s door]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: Remember Patrick, flatter the customer. Make him
                  feel good.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [Patrick knocks on the door, a customer opens the door]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  Blue Fish with purple stripes: Hello?
                </div>
                <div
                  className="hover:underline hover:text-red-600 hover:cursor-pointer"
                  onClick={() => setDone(true)}
                >
                  Patrick: I love you.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [A harp is heard playing, the customer stares at SpongeBob and
                  Patrick for a few seconds, then he slams his door shut in
                  extreme disgust, a tuba is heard playing after the slamming]
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  SpongeBob: I think you laid it on a teensy bit thick there,
                  old pal. Let me try.
                </div>
                <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                  [SpongeBob rings the doorbell, the customer opens the door]
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
