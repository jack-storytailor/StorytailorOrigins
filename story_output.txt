# StoryTailor. Origins 
(English version | [Русская версия](https://github.com/jack-storytailor/StorytailorOrigins/blob/master/README_RU.md))

## Logline
A programmer, who had dreamed all his life of becoming a screenwriter, quit his job in the fifteenth year of his career, wrote his own programming language, and now writes screenplays using it.

## Ordinary World
Everyone wants to become programmers and regrets not having become one.

## Stranger in Their Own World
From an early age, I wanted to write books. But 15 years ago, I became a programmer, and for 15 years I've been dreaming of changing my profession.

## Call to Adventure
I wrote my first story even before I went to school. Since then, wherever I have been, whatever I have been doing, I have always been writing. In fact, I know only one period when I didn't write anything - when I was married, but that's a completely different story.

I have a [blog-portfolio](https://freewebtime.blogspot.com/index.html) where I publish my stories. 
In 2013, I published a book called "[Crazy Vacation](https://freewebtime.blogspot.com/2012/06/blog-post12.html)". And even though the print run was only 50 copies and it was printed with my own money, still - when you hold your own book in your hands, everything you've done gains meaning.

![Crazy Vacation](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/book.jpg)

## Refusal of the Call
I wanted to write books, but I had no idea how to make money from it. So, I wrote programs. It's simpler with them - pure mathematics, and they pay as if they can't write it themselves. 
On the other hand, you can't complain - wanted to write? Well, there you go, write. Programmers write an order of magnitude more text than any playwright or copywriter.

![Программирование](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/programming.png)

## Mentor
A couple of years later, an acquaintance of mine, a very novice director, asked me to act in his short film. I ended up on the set. 
The shooting was hell. The director constantly argued with everyone he could reach, the script was terrible, and I had to take unpaid leave from work, with each day of shooting costing me $300 in lost salary. And despite all the problems combined, it was an amazing experience. 
I realized that I couldn't live without cinema. 
At that time, I thought that when I have my own project, I won't repeat the mistakes of my acquaintance, the director. 'Well, it's got to be no harder than being a team leader and product owner on production'©.

## Beginning of the Journey
I quit my job and stopped being a programmer. And got divorced too, but that's another story. 
I thought - I just need to write scripts. A lot. So much so that it would be enough to learn. I'll explain: a good programmer can write any program when needed. And without inspiration (although it helps a lot). So, I'll be a writer when I can write stories in exactly the same way. Just using skills.

## Ally
Meanwhile, I thought about working part-time as an actor. For this, I needed a showreel, and I decided to shoot it at home, in my apartment. I listed the scenes that needed to be shot and realized that they could be combined into a plot. This is how the script for "[Locked In](https://freewebtime.blogspot.com/2017/09/blog-post.html)" was born, featuring just two characters (one in episodes), one location, and a standard blockbuster structure.

It's the story of a bank robbers' driver who wakes up in his mistress's apartment on the day of the robbery, lies to his accomplices that he didn't oversleep and is already on his way to them, and discovers that his mistress has gone to work, locked the door, left no keys for him, and the bank robbery, from which he was supposed to pick up his robbers, has already begun.

Suddenly, I found people with whom all this could be filmed. We sorted out the organization, I invested all the remaining money I had, and we got started.

## Point of Death
We made the film, and it failed before distribution, in the editing stage. As a director, I made all the mistakes I could muster, and ended up with nothing. Then my entire remaining life collapsed, from work to back.

## Acquisition of the Sword
All that was left for me was to write, write, and write. Not to try to earn money anymore, but just to learn a new craft. I sat down to work and only then realized that I had no tools. None at all. Programmers have Visual Studio, artists have Photoshop, and 3D artists have 3ds Max, but what about a screenwriter? A notepad? That's when I realized that I was facing the most difficult task. I had no tool. As I understood, screenwriters work with whatever is at hand. Of course, there are plenty of programs that allow you to format text (like Microsoft Word, Amazon Storywriter, Script Kit, or Truby Writers Studio), but I didn't find any that allowed for the assembly and generation of text.

For example, what if the script is ready, but the producer asks to rename a character? Do you need to comb through the entire script and rename everywhere? A programmer would simply have written the names of the characters in a separate list and inserted them into the text by name from that list. And if you need to rename someone - there, in that list, and rename. And that's it, the rest of the text would immediately pick up the changes.

Here, for example, is a list of characters:

![characters](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/characters.png)

And here are its elements inserted into the text:

![references](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/references.png) 
Or another example. Suppose the action of the first act takes place in 2003 year, and the second act - 19 years later, i.e., in 2022. And now the script is written, and these numbers are there in the text.
Again, something happened, and the action of the first act needs to be shifted to, say, 1968 year. The second act should automatically rewrite itself so that the time difference between them remains the same 19 years. That is, already in 1987 year.

![calculations](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/calculations.png)

Or, for example, what if this is a script for a computer game, where there are many different scenarios depending on, for example, what the player does. That is, we want that if the character is injured by the third act, then he loses the fight according to the plot, but if not injured - then he wins. And there are different endings for both cases, and one of them is chosen automatically. The author would describe both and somehow explain to the program which one to choose.

![Ending Selection](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/choose_screenplay_end.png)

For a programmer, this sounds usual. But screenwriters, as a rule, are not aware that this could be done.
Well, it could be done. If screenwriters were programmers, and they had some simple programming language in which they could do what I described.

It would be cool, I thought, if such a programming language existed. But there wasn't one.

And then I realized: to stop being a programmer, I needed to write my own programming language.

## Battle with the Monster
![Battle with the Monster](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/writing_on_typescript.png)

And so here I was, a person who had firmly decided never to program again, spending months, sometimes several sleepless days in a row, hammering out this programming language, constantly reminding myself that I was crazy.
This is not how it's done. If you want to change professions - change it. And I, it turns out, only changed it in words.
Moreover, I was writing in JavaScript, a language I hardly knew (I was more into servers or desktops, and in recent years - only Unity3D), so I had to learn JavaScript additionally, which meant more time lost.

By the middle of last summer (2018), I had the first version ready. It was severely cut down, but it was a fully functional, working concept. A programming language for assembling texts. It's called Storytailor. Until the new year, I tested it as a user, i.e., as a screenwriter, not a programmer. When I already had a list of features that were missing, I sat down to program again.

## Return with Victory
As you understand, this text that you are now reading, I am writing in Storytailor.

![I am writing in Storytailor](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/writing_on_storyscript.png)

Two days ago, I completed the second stage of the language development: the full, Turing-complete version. It still doesn't have everything I want to add to it, but what is already done works, and it can be used.

## Master of Two Worlds
To write in Storytailor, you don't need to be a programmer. You just need to write the text of your story as before. Just now, you can add special symbols to this text that will 'bring it to life' ([Instruction](https://github.com/jack-storytailor/StorytailorOrigins/blob/master/Instruction.md)).

Storytailor is free. Open source on [Github](https://github.com/jack-storytailor/storytailor).
To use it, you need to install the free 'advanced notepad' [Microsoft Visual Studio Code](https://code.visualstudio.com/). And there, in this notepad, choose '[storytailor-vscode](https://marketplace.visualstudio.com/items?itemName=jackstorytailor.storytailor-vscode)' from the list of available plugins. If you already have [Node.js](https://nodejs.org/en/) installed on Windows, I recommend updating it to the latest version.

![Plugin Installation](https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/install_extension.png)

I have completed programming. Now I want to go into cinema.
