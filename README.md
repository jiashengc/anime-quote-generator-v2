# Anime Quote Generator v2
A random quote generator that pumps out random anime quotes from various anime characters.
The chance of generating a quote is based on individual characters not quotes. Meaning that a character with more quotes will have the same chance of appearing as a character with less quotes.

## Adding more quotes
Navigate to the "script.js" in the repository and commit the following to the file (Remember to check if the character exists first before adding):

```javascript
character[insertnumberhere] = {
            name: "Insert name here",
            anime: "Insert anime here",
            image: "Insert image here",
            quotes: [
                "Insert quote here",
                "Insert quote here",
                "Insert quote here"
            ]
        };
```

Example:
```javascript
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
```
