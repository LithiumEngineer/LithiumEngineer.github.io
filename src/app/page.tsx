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
  const [done, setDone] = useState(true)
  return (
    <div className="the-answer-is-uwp-burrito w-screen h-screen bg-red-100 flex justify-around items-center">
      {done ? (
        key1 === "T" &&
        key2 === "E" &&
        key3 === "E" &&
        key4 === "M" &&
        key5 === "O" ? (
          <div className="h-fit w-fit flex flex-col">
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
                  key1 === "T" && "bg-green-200"
                }`}
                value={key1}
                onChange={(e) => setKey1(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key2 === "E" && "bg-green-200"
                }`}
                value={key2}
                onChange={(e) => setKey2(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key3 === "E" && "bg-green-200"
                }`}
                value={key3}
                onChange={(e) => setKey3(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key4 === "M" && "bg-green-200"
                }`}
                value={key4}
                onChange={(e) => setKey4(e.target.value.toUpperCase())}
              ></input>
              <input
                className={`w-10 h-16 text-blue-500 text-3xl flex justify-around text-center ${
                  key5 === "O" && "bg-green-200"
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
            Sometimes, the answer to all your life's problems is inspect element
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
            <div className="w-[900px] h-[300px] overflow-y-scroll mt-10">
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
                Patrick: Hey, the mail's here! What did you get?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Let's see... [Looks through the mail] Gary, Gary,
                Gary, Gary, Gary, Gary, Hey! A magazine!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [SpongeBob looks at the magazine ]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: That's funny, I don't remember subscribing to Fancy
                Living Digest.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob and Patrick: [They look inside the magazine] Whoa!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Look at all these glossy depictions of a higher
                standard of living!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [A picture of a rich person's swimming pool is shown]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: This guy's so rich, he has a swimming pool in his
                swimming pool!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [A picture is shown of an old, rich person surrounded with bags
                of money]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: [Points at the man's feet] This guy's got shoes!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Squidward: Give me that! [Takes the magazine] Stealing my mail,
                eh? You're lucky I don't report you to the authorities!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Hey Squidward, how do the people in that magazine get
                all that money?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Squidward: They're entrepreneurs. They sell things to people.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: What kind of things?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Squidward: How should I know? Things people wanna buy! [walks
                off] Now keep your paws off my mail.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: That's it, Patrick! We gotta becomes entrepreneurs!
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
                SpongeBob: No, something real, an item, something you would pay
                for.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: A chocolate bar?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: That's a great idea, Pat! We'll become traveling
                chocolate bar salesmen!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [The scene changes to SpongeBob and Patrick exiting the
                Barg'N-Mart carrying many chocolate bars]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Fancy living, here we come!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: Make way for a couple of ontre-prenyouers! [SpongeBob
                and Patrick walk up to a house]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: O.K. Patrick, this is it! The first step on our road
                to living fancy! Just follow my lead.
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
                chases them while madly screaming "Chocolate!" The scene cuts to
                SpongeBob ringing the doorbell of another house] O.K, the first
                guy didn't count. This is our real first step! [A Con man opens
                the door] Good Morning, sir! Would you like to buy some
                chocolate?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: Chocolate bars, eh?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Yes sir, we are chocolate bar salesmen!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: Ha! A couple of mediocre salesmen if you ask me. That's
                no way to carry your merchandise!
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
                Con man: Well, [chuckles] no self respecting candy bar salesman
                would be caught dead without one of these! [He holds up a
                bright-orange bag]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Wow... what is it?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: It's a candy bar bag, you knuckle-head! It's specially
                designed to cradle each candy bar in velvet-lined comfort!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [SpongeBob tries to touch it]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: [pulls bag away] But, I'm wasting my time. [Walks
                inside] You don't need these bags.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob and Patrick: We need 'em! We need 'em!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [The Con man grins, the scene changes to the Con man counting
                money. SpongeBob and Patrick are walking away with armfuls of
                bags]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: So long, boys! Happy hunting! [Laughs when the two
                aren't looking] Suckers... [walks back inside]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob and Patrick: [singing as they run off] Fancy livin',
                here we come! La la la la, la!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Let's try next door!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [SpongeBob walks up and rings the doorbell with his foot, the
                same Con man comes out]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: Yes?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Huh? Say, weren't you the same guy who sold us these
                candy bar bags?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Con man: I... don't recall. But it looks to me like you fellas
                have got a lot of bags there. You two lady killers are too smart
                to be without one of my patented Candy Bar Bag Carrying Bags.
                [Holds up two large maroon bags]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: We'll take twenty!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [Scene changes to SpongeBob knocking on the door of a different
                house, Sadie comes out]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Sadie: Oh, what can I do for you two nice young men?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: We're selling chocolate bars. Would you like to buy
                one?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Sadie: That sounds heavenly! I'll take one.
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
                Sadie: [Sadie looks at her watch] I don't have time for this.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [Sadie goes back inside, and then SpongeBob pulls out a
                chocolate bar]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: I... got it! One chocolate bar for the nice— [Sees
                something off camera; it is revealed to be Tom, still screaming]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Tom: Chocolate! Chocolate! Chocolate!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: —lady. [Tom chases SpongeBob and Patrick again while
                screaming "Chocolate!" The scene cuts to SpongeBob and Patrick
                sitting in a diner] We're not doing so well, Patrick. We need a
                new approach, a new tactic.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: Hm... I got it! Let's get naked!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: No, let's save that for when we're selling real
                estate... There must be something. What was the reason we bought
                those bags?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: He said we were mediocre...
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: That's it! He made us feel special!
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: Yeah, he did... I'm going back to buy more bags!
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
                SpongeBob: Why don't we try being nice?
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                Patrick: Oh, okay.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [Scene changes to SpongeBob and Patrick walking up to a
                customer's door]
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                SpongeBob: Remember Patrick, flatter the customer. Make him feel
                good.
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
                SpongeBob: I think you laid it on a teensy bit thick there, old
                pal. Let me try.
              </div>
              <div className="hover:underline hover:text-red-600 hover:cursor-pointer">
                [SpongeBob rings the doorbell, the customer opens the door]
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
