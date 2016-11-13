$(document).ready(function() {
    random_generate();
    var lastQuote = "", previousQuote = "";
    
    //imgur album http://imgur.com/a/xoEhF
    
    function random_generate() {
        var total = 0;
        var character = [];
        
        character[0] = {
            name: "Emiya Shirou",
            anime: "Fate/stay night",
            image: "http://i.imgur.com/bSOxCpM.jpg",
            quotes: [
                "People die when they are killed.",
                "I can't stray from my path for those I've left behind.",
                "Even if my life is full of hypocrisy, I'll keep on striving to be a hero of justice!",
                "It makes me mad when people try so hard to become victims. Is it greedy of me to wish for an outcome where everyone gets saved and is happy - and can share a laugh about it in the end?",
                "Even if I'm a fraud, I know my dream isn't wrong!",
                "If you walk down the path that you believe is right, you cannot be wrong."
            ]
        };
        
        character[1] = {
            name: "Hachiman Hikigaya",
            anime: "My Teen Romantic Comedy SNAFU",
            image: "http://i.imgur.com/PW7T8ni.jpg",
            quotes: [
                "Fake people have an image to maintain. Real people just don't care.",
                "Hard work betrays none, but dreams betray many.",
                "Just as stand users attract other stand users, loners seems to have an ability to attract other loners as well.",
                "A lone warrior surviving hundreds of battles, when it comes to losing, I'm the strongest.",
                "If wishes could be granted, if desires could be fulfilled, then I wouldn't wish or desire anything after all. The things you're handed on a silver platter are never genuine, and never everlasting. And that is why I'll always keep searching.",
                "It doesn't matter if we're wrong... because every time we go wrong, we;ll continue to look for the right answer.",
                "Youth is both a lie and a form of evil.",
                "I'm not highly aware. I'm highly self-aware.",
                "There was no meaning to things that were only superficial. That was a single belief that both and her once shared."
            ]
        };
        
        character[2] = {
            name: "Koyomi Araragi",
            anime: "Monogatari Series",
            image: "http://i.imgur.com/kf0dpOc.jpg",
            quotes: [
                "Being kind to everyone, simply means there's no one special.",
                "If I can, I'd like to bring back what she had lost, what she threw away.",
                "If you're going to selfishly admire someone only to be disillusioned later, then maybe yoy shouldn't try to get to know them better at all.",
                "People save themselves on their own. Nobody can ever save anyone else.",
                "How can someone who seeks a reason from another person be right? While you're forcing that reason on someone else, how can you take responsibility?",
                "No one's gonna save me. People just accept help selfishly, for their own sake"
            ]
        };
        
        character[3] = {
            name: "Oshino Shinobu",
            anime: "Monogatari Series",
            image: "http://i.imgur.com/uUT5rgw.jpg",
            quotes: [
                "It's not good to expect too much, but you can't do anything if you're being overly pessimistic.  If you just wait thinking it's useless, nothing will come of it.",
                "No matter what bonds you forge with others, time will tear them apart.",
                "It's difficult to change the world on your own, but twisting it a little might not be all that hard.",
                "There's no reason a fake can't do what the real thing would. And it's possible for a fake to be more real than the real thing.",
                "We can't let the past be mere water under the bridge. Even so, there's no reason that we can't come together."
            ]
        };
        
        character[4] = {
            name: "Shinji Ikari",
            anime: "Evangelion",
            image: "http://i.imgur.com/SwWPljI.jpg",
            quotes: [
                "Living alone is fine with me. I'm alone anyway.",
                "I'm the one who deserved to be hit! Not you! I'm a coward! I'm dishonest! I'm sneaky! And a wimp!",
                "No one can justify life by linking happy moments into a rosary",
                "I still don't know where to find happiness. But I'll continue to think about whether it's good to be here... whether it was good to have been born. But in the end, it's just realizing the obvious over and over again. Because I am myself.",
                "Mankind has no time left."
            ]
        };
        
        character[5] = {
            name: "Illyasviel von Einzbern",
            anime: "Fate/stay night",
            image: "http://i.imgur.com/yYcQ35T.jpg",
            quotes: [
                "I don't need a route of my own. Because everyone already loves me. Thank you!",
                "I don't intend to kill you, Shirou. You're mine. I'll kill the other Masters, but you're special. That's why I locked you up here, so there won't be any interruptions.",
                "Why aren’t you fighting? Because of me? Because you don’t want to make me suffer? Because you don’t want to hurt me?",
                "Where are you ? I can’t see you. It’s all dark. I can’t see anything...",
                "I'm not scared anymore even though it's dark. You're strong, Berserker. I'm safe if you're there like that."
            ]
        };
        
        character[6] = {
            name: "Sakamoto",
            anime: "Sakamoto desu ga?",
            image: "http://i.imgur.com/F1q89YW.jpg",
            quotes: [
                "Even if they're only a year older, shouldn't we respect and serve our elders?",
                "When you aim to reach high places, you may find yourself on narrow footing and feel disheartened. And then your confidence will falter, and you will find it ever harder to believe in yourself. If you ever feel that you can't believe in yourself, please believe in your friends.",
                "When faced with a decision... At such times, we must choose only one option and it ca be very confusing. When that happens, simply using your head and charging straight into the obstacle is a fine option.",
                "Accomplishing a shared goal under tense circumstances causes distance between people to naturally close.",
                "If you have no money, I believe all you can do is work."
            ]
        };
        
        character[7] = {
            name: "Oreki Houtarou",
            anime: "Hyouka",
            image: "http://i.imgur.com/F5Ub6TL.jpg",
            quotes: [
                "I don't care if no one likes me. I wasn't created in this world to entertain everyone.",
                "The best way to tame a mystery is with another mystery.",
                "I'm not stupid. I'm just too lazy to show how smart I am.",
                "I'm not against socializing, so long as it's not tiring.",
                "The more inexperienced you are, the more you want to show off.",
                "Don't care anything and do not do anything that's a waste of energy.",
                "If I don't have to do it, I won't. If I have to do it, I'll make it quick."
            ]
        };
        
        character[8] = {
            name: "Senjougahara Hitagi",
            anime: "Monogatari Series",
            image: "http://i.imgur.com/Dp1cyAt.jpg",
            quotes: [
                "But they say a woman is better off with an unloved man, versus a man who loves her.",
                "If I kill you, that means I'll be the one closest to you when you're on your deathbed. Isn't it romantic?",
                "Don't spit when you talk! Your virginity might be contagious!",
                "If I fail to make my every-minute reports, a gang of 5,000 brutes will attack your whole family.",
                "Don't get me wrong. It's not like I'm worried about you. But if you don't come back I'll never forgive you.",
                "Those who got fooled are partially at fault.",
                "Kindness can sometime translate to hostility.",
                "In romance, you tend to end up looking for someone who resembles you."
            ]
        };
        
        character[9] = {
            name: "Yoshioka Futaba",
            anime: "Ao Haru Ride",
            image: "http://i.imgur.com/exWxlp7.jpg",
            quotes: [
                "Sometimes people put up walls, not to keep others out, but to see who cares enough to break them down.",
                "If you keep bad-mouthing someone, you might feel like as if you are on a higher position than that person. But in actual fact, its completely wrong to do that!",
                "If you lose something, just build it again. And this time, with a greater care.",
                "I like you. I came here to get rejected properly. To end this, so I can move forward. To make me convinced of this broken heart, I wanted to get rejected properly.",
                "When you're in love, you start to worry about the most trivial details. It should feel really restrictive, but worrying about this kind of thing makes me really happy instead.",
                "No one's going to criticize you if you get excited for something, or you laugh will all your heart! And if someone does, I'll beat them up!",
                "If you lose something big, that nothing can replace it... Then it's okay if you have more than one right? Even if the number is small, whether it's 10 or 100, if you gather them up then you will have a reason to go on!",
                "If you lose something, just build it up again. And this time, with a greater care."
            ]
        };
        
        character[10] = {
            name: "Tachibana Marika",
            anime: "Nisekoi",
            image: "http://i.imgur.com/IrVhGJ1.jpg",
            quotes: [
                "Love does not hurt when you're loving the right person.",
                "You can't achieve anything if you don't make a move. Love is an all-out assault.",
                "I won't come to hate you! Never! Regardless of what happens in the future!",
                "Do I really need to spell it out for you? There is nothing that you can acquire without making a move on your own. It's the same with romance - your only hope is to be more aggressive."
            ]
        };
    
        character[11] = {
            name: "Yoshii Akishisa",
            anime: "Baka to Test to Shoukanjuu",
            image: "http://i.imgur.com/TUZTL3C.jpg",
            quotes: [
                "Fear comes from within, and isn't something that can be conquered psychologically in such a short while.",
                "People normally say that mood and body have a close relationship. As the heart becomes weaker, the body will fall ill and as the body falls ill, the heart becomes weaker. Thus, when humans are weak, they will have negative thoughts.",
                "Who'll give up when it comes to such a mere setback? We haven't lost yet! We'll kneel on the floor and regret only after all possibilities are exhausted!",
                "If I feel lonely when someone is leaving, it means that the person is very close to me",
                "If she lost because of a difference in ability, it can't be helped. If she worked hard and didn't get what she wants, she can just work harder next time. If she gave her all for this, it's acceptable even if she lost.",
                "Me hating that her hard work wouldn't be rewarded was just my secondary reason. My motivation was actually much simpler -- from the first time I met this girl, I just wanted to see her smiling face."
            ]
        };
        
        character[12] = {
            name: "Rem",
            anime: "Re:Zero kara Hajimeru Isekai Seikatsu",
            image: "http://i.imgur.com/lgwoS7L.jpg",
            quotes: [
                "No matter what painful things happen, even when it looks like you'll lose... when no one else in the world believes in you... when you don't even believe in yourself... I will believe in you!",
                "Ever since that fiery night, my time has been stopped. But it was you who melted my frozen heart and kindly made my stopped time begin to move forward again.",
                "When you said that you hate yourself, it made me want to tell you all the wonderful things I know about you.",
                "I can always tell when you're lying. I also know that you cannot tell me why do you do so. So there is no need to convince me, or wrap everything in lies, or try to take the blame on yourself like that. Because I have complete faith in you."
            ]
        };
        
        character[13] = {
            name: "Shizuku Mizutani",
            anime: "Tonari no Kaibutsu-kun",
            image: "http://i.imgur.com/tTpedWs.jpg",
            quotes: [
                "Real friends wouldn't use you for your money. I don't have any friends, so I'm not expert, but I'd rather have no friends than have friends like them.",
                "It's a waste of time to bother with anything uncertain.",
                "If you leave, I'll probably be sad. However, if there's somewhere else you'd rather be, you should admit it. Don't lose sight of what you really want.",
                "At least in academics, you can control the outcome, whether it's good or bad.",
                "Once you've recognized your mistakes, it's easy enough to correct them.",
                "Every time I deal with another person, I'm reminded how little control I have over my life.",
                "Does it really matter that people don't like you?",
                "Even when the answer's obvious, making one wait for it is the worst thing you can do."
            ]
        };
        
        character[14] = {
            name: "Gilgamesh",
            anime: "Fate/stay night",
            image: "http://i.imgur.com/8Qu373D.jpg",
            quotes: [
                "A lot of something is ugly in itself.",
                "All dreams eventually disappear when the dreamers wake",
                "There are two kinds of arrogance. One where you are unequal to the task and one where your dreams are too big. The former is commonplace stupidity... but the latter is a rare species that is difficult to find.",
                "Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness. Your path is now clear, Kirei. So clear there is no longer any need to hesitate.",
                "You have yet to see what form your soul has taken. That's what it actually means when you claim that you lack joy in your life."
            ]
        };
        
        character[15] = {
            name: "Holo",
            anime: "Spice and Wolf",
            image: "http://i.imgur.com/D3PnKor.jpg",
            quotes: [
                "All men are jealous and stupid, and all women are stupid to be happy about it, idiots are everywhere you look!",
                "When a person lies, what is important is not the lie itself. No, it is their reason. Their why.",
                "Even if a question has a proper answer, sometimes one cannot simply give it away.",
                "No matter the journey, when you come to a fork in the road, you must decide in an instant which path to take.",
                "Betrayal demands revenge. Sin must have punishment.",
                "Once you tasten poison, you might as well finish the meal. If it comes to that you would make as fine a dish as any.",
                "Though possessing two eyes, most creatures can see but a single thing at a time.",
                "When times comes, I may need to borrow your chest to cry upon. That's one promise I'll need from you.",
                "Loneliness is a sickness that leads to death.",
                "When you are experienced you can become overly confident and such confidence can prove fatal."
            ]
        };
        
        character[16] = {
            name: "Shionji Yuuko",
            anime: "Kamisama No Memochou",
            image: "http://i.imgur.com/ifk8p3d.jpg",
            quotes: [
                "We will never laugh at ourselves. Just as earthworms do not fear darkness and penguins are no ashamed of their inability to fly. That's the meaning of life.",
                "A detective must become nothing more than an advocate. We must never put words to the feelings that failed to take form.",
                "True detective work is beyond the general masses. After all, we're advocates for the dead. We dig up what was lost to the grave and hurt the living to defend the honour of the dead. And we humiliate the dead to comfort the living.",
                "NEET is not a stereotype. It's a way life.",
                "I've been looking out at the world through windows I've opened across the net. It's an extremely close-minded and twisted world.",
                "The humand mind is uncertain things. Within mind, even contradictory thoughts may coexist.",
                "What do you think killed the most people in history? It wasn't explosives or drugs. It was information. To know is to die.",
                "What takes reason a hundred years to build a bridge to only takes the wings of faith a single night to reach.",
                "Most non-NEET people in the world don't realize that humans nature isn't scalar, but vectorial."
            ]
        };
        
        character[17] = {
            name: "Tohsaka Rin",
            anime: "Fate/stay night",
            image: "http://i.imgur.com/mRUxWiX.jpg",
            quotes: [
                "What's with that nouveau riche bitch? I nailed her in the medulla oblongata, so why wouldn't she go down?",
                "If you've got no way to fight, you're just getting in the way! If you're killed without accomplishing anything then you'll have died for nothing!",
                "Look, Emiya-kun. People normally die when they are killed.",
                "The world is just another word for the things you value around you, right? That's something I've had since I was born. If you tell me to rule such a world, I already rule it."
            ]
        };
        
        character[18] = {
            name: "Homura Akemi",
            anime: "Mahou Shoujo Madoka Magica",
            image: "http://i.imgur.com/UPnXD7Y.jpg",
            quotes: [
                "With kindness comes naivete. Courage becomes foolhardiness. And dedication has no reward. If you can't accept any of that, you are not fit to be a magical girl.",
                "We're fighting for our own wishes. It's normal not to get noticed or remembered.",
                "It's all useless.",
                "Repeat. I'll repeat it for however many times I have to. Until I find the only way out.",
                "Kindness can bring you even bigger troubles.",
                "Even though I've lost my way, I will save you.",
                "So how about we become monsters together?.. And turn this world upside down? So that... nothing bad... or sad... would remain. Destroy, destroy, destroy it all!",
                "You’re too kind. Remember this and take it to heart: kindness sometimes leads to even greater tragedy.",
                "Do you value your life? Do you think that your family and friends are important to you? If they are, then you should never think of changing yourself. Otherwise, you will lose everything that is precious to you."
            ]
        };
        
        character[19] = {
            name: "Yukino Yukinoshita",
            anime: "My Teen Romantic Comedy SNAFU",
            image: "http://i.imgur.com/q1GGahv.jpg",
            quotes: [
                "People who don't work hard don't have the right to be envious of the people with talent. People fail because they don't understand the hard work necessary to be successful.",
                "I think, if you want to improve yourself, you should challenge your own limits.",
                "People aren't all perfect. They're weak, ugly, and they get jealous and try to bring others down. Oddly enough, the better you are, the harder it is to live. That's why I'm going to change this world and the people in it...",
                "If all you're good for is breathing in and out, then even an AC unit is more useful than you.",
                "We do not give a starving man a fish. We teach him how to fish and make him independent.",
                "Even if we know each other, understanding each other is another matter.",
                "If this is all it takes to tear us apart, then maybe we weren't all that close to begin with."
            ]
        };
        
        character[20] = {
            name: "Yozora Mikazuki",
            anime: "Boku wa Tomodachi ga Sukunai",
            image: "http://i.imgur.com/wCeMVrI.jpg",
            quotes: [
                "Humans love hurting others when they can´t be hurt themselves. Like killing animals, or flaming people online. And if the target makes a mistake, it fans the flames even more, and the bully gets even more fun out of it.",
                "It doesn't matter if you can make 100 friends. Instead, make real friends who are as important to you as 100 is to them. It doesn't matter if you have one, as long as it's a friend that you care about.",
                "It's not like I'm desperate to have friends, anyway. I just don't like being looked down on as that sad person with no friends.",
                "It makes you sad when someone suddenly just up and disappears without a word. If you're just going to end up hurt in the end, you're better off not forming any bonds at all."
            ]
        };
        
        character[21] = {
            name: "Kousei Arima",
            anime: "Shingatsu Wa Kimi No Uso",
            image: "http://i.imgur.com/pChXzSN.jpg",
            quotes: [
                "This silence belongs to us... and every single person out there, is waiting for us to fill it with something.",
                "Spring will be here soon. Spring, the season I met you, is coming. A Spring without you...is coming.",
                "Isn't it funny how the most unforgettable scenes can be so trivial ?",
                "Sure I'm okay. Because that's how I was built, after all.",
                "You're like a cat. If I get close, you'll ignore me and go far away. If I get hurt, you'll play around to share the pain.",
                "I want to hear it again, yet I don't want to hear it again. I want to see her, yet I don't want to see her. What do you call this kind of feeling again?",
                "Even in the depths of the darkest oceans, some light always pierces through.",
                "The more I concentrate, the more I get consumed by my performance. The sounds I play fade away from my reach, tangling up like flowers seized by the spring wind and vanish."
            ]
        };
        
        character[22] = {
            name: "Koari Miyazono",
            anime: "Shingatsu Wa Kimi No Uso",
            image: "http://i.imgur.com/6YQxIdr.jpg",
            quotes: [
                "Music is freedom.",
                "We’re all afraid, you know.. to get up on stage. Maybe you’ll mess up. Maybe they’ll totally reject you. Even so, you grit your teeth and get up on stage anyway. Something compels us… moves us to play music.",
                "Such a cruel boy. Telling me to dream one more time. I thought I was satisfied because my dream had come true... And I'd told myself it was enough... Yet here you are, watering this withered heart again.",
                "After the first note resonated through the hall, You became everything I yearn for.",
                "So ephemeral and weak. But its shining with all its might. Thump, Thump, like a heartbeat. This is the light of life.",
                "Maybe there’s only a dark road up ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit."
            ]
        };
        
        character[23] = {
            name: "Uryuu Minene",
            anime: "Mirai Nikki",
            image: "http://i.imgur.com/j2LlKlh.jpg",
            quotes: [
                "Doesn't matter if you're weak. If you struggle hard enough, you can make a miracle happen.",
                "It's not possible to save everything. Prioritize your goals.",
                "I wanted to be saved too...",
                "Keep fighting on, even if it ain't worth much.",
                "Even if you're weak, there are miracles you can seize with your hands if you fight on to the very end.",
                "This is the world I live in. The dirty world of the adults.",
                "My childhood was filled with blood and strife. I have never needed love. Not then, not now.",
                "Nothing good comes from digging up the past."
            ]
        };
        
        var n = Math.floor(Math.random() * character.length);
        var r = Math.floor(Math.random() * character[n].quotes.length);
        
        var name = character[n].name, 
            anime = character[n].anime,
            quote = character[n].quotes[r],
            image = character[n].image;
        
        if (quote != lastQuote && quote != previousQuote) {
            $('.dQuote').text(quote);
            $('.dCharacter').text("- " + name);
            $('.dAnime').text(anime);
            $('.mainImage').css("background-image", "url(" + image + ")");
            $('.mainText').css("background-image", "url(" + image + ")");   
            
            lastQuote = previousQuote;
            previousQuote = quote;
        } else { random_generate(); }
        
        // Calculate the amount of quotes
        for(var i = 0; i < character.length; i+=1) {
            total += character[i].quotes.length;
            console.log(total);
        }
        $('.qNumber').text(total);
        
    } // End of random_generate() function   
    
    $(document).keypress(function(key) {
       if (key.which == 13) {
           random_generate();
       } 
    });
    
    $(".mainBack").click(function() {
        random_generate();
    });
    
    
    
});