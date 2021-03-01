

const allQuotes = [
    {
        quote: "Love the life you live. Live the life you love.",
        quoteBy: "Bob Marley",
        category: "life"
    },
    {
        quote: "Life is what happens to you while you’re busy making other plans.",
        quoteBy: "John Lennon",
        category: "life"
    },
    {
        quote: "The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        quoteBy: "Mark Zuckerberg",
        category: "courage"
    },
    {
        quote: "Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.",
        quoteBy: "Steve Maraboli",
        category: "movingOn"
    },
    {
        quote: "Life is not about waiting for the storms to pass – It’s about learning how to dance in the rain.",
        quoteBy: "Vivian Greene",
        category: "movingOn"
    },
    {
        quote: "There are no secrets to success. It is the result of preparation, hard work and learning from failure.",
        quoteBy: "Colin Powell",
        category: "courage"
    },
    {
        quote: "Everything starts when you think everything is all over.",
        quoteBy: "Miyabi T",
        category: "courage"
    },
    {
        quote: "The darkest night is often the bridge to the brightest tomorrow.",
        quoteBy: "Jonathan Lockwood Huie",
        category: "movingOn"
    },
    {
        quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        quoteBy: "Michael Jordan",
        category: "life"
    },
];

// To set the default condition (all quote)
window.onload = () => {
    newArry = allQuotes;
};



// create an empty array
let newArry = [];

//function to areate a filter
document.getElementById("filter").addEventListener("change", () => {
    const valInOption = document.getElementById("filter").value;
    
    if(valInOption === "allQuotes") {
        newArry = allQuotes;
    } else {
        newArry = allQuotes.filter(val => val.category === valInOption);

        // ↓↓↓↓↓↓↓↓ equals to  ↓↓↓↓↓↓↓↓ //

        // newArry = allQuotes.filter(val => {
        //     return val.category === valInOption;
        // });

        // or, you can also write without the arrow fn

        // newArry = allQuotes.filter(function(val) {
        //     return val.category === valInOption;
        // });
    }
});

let opacity = 0;
const quoteHere = document.getElementById("quoteHere");
const nameHere = document.getElementById("nameHere");
const fadeInContainer = document.getElementById("fadeInContainer");


//create a random quote generator 
const generateQuote = () => {
    const randomQuote = Math.floor(Math.random() * (newArry.length)); // max 8.9999... → 8
    quoteHere.textContent = newArry[randomQuote]["quote"]; //[randomQuote] array
    nameHere.textContent = newArry[randomQuote]["quoteBy"]; //or you can also write: newArray[randomQuote].quoteBy
    fadeInContainer.style.opacity = 0;
    fadeIn();
};

// to make the quote show gradually 
const fadeIn = () => {
    const intervalID = setInterval(() => {
        opacity = Number(window.getComputedStyle(fadeInContainer).getPropertyValue("opacity"));
        if (opacity < 1) {
            opacity += .05;
            fadeInContainer.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
};
