function random(){
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there. – Winston Churchill",
        "Do what you can, with what you have, where you are. – Theodore Roosevelt",
        "The future depends on what you do today. – Mahatma Gandhi" ,
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "Happiness depends upon ourselves. – Aristotle" ,
        "You only live once, but if you do it right, once is enough. – Mae West",
        "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
        "Enjoy the little things in life, for one day you may look back and realize they were the big things. – Robert Brault",
        "I am not lazy, I am just on energy-saving mode. – Unknown",
        "Behind every great man, there is a woman rolling her eyes. – Jim Carrey",
        "Life’s too short for bad vibes and boring meetings. – Unknown",
        "I didn’t fail the test. I just found 100 ways to do it wrong. – Benjamin Franklin",
        "I used to think I was indecisive, but now I’m not so sure. – Unknown",
        "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
        "To love and be loved is to feel the sun from both sides. – David",
        "True friendship comes when silence between two people is comfortable. – David Tyson",
        "A single rose can be my garden… a single friend, my world. – Leo Buscaglia",
        "Love all, trust a few, do wrong to none. – William Shakespeare",
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "The secret of getting ahead is getting started. – Mark Twain",
        "Dream big and dare to fail. – Norman Vaughan",
        "Opportunities don’t happen, you create them. – Chris Grosser",
        "If everything seems under control, you’re not going fast enough. – Mario Andretti",
    ]

   const randomIndex = Math.floor(Math.random()*quotes.length);

    document.getElementById("Quote").innerHTML =quotes[randomIndex] ;
}

