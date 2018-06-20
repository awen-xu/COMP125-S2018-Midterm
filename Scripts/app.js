// setup your IIFE (Immediately Invoked Function Expression)
let app;
(function (app) {
    "use strict";

    // this function is just for displaying text info on index.html
    function TourParagraphs() {
        // hooking into the paragraphs elements in index.html
        let infoParagraph = document.getElementById("IntroParagraph");
        let Folegandros = document.getElementById("Folegandros");
        let Alonissos = document.getElementById("Alonissos");
        let Spetses = document.getElementById("Spetses");
        let Amorgos = document.getElementById("Amorgos");
        let Syros = document.getElementById("Syros");
        let Milos = document.getElementById("Milos");
        let Hydra = document.getElementById("Hydra");
        let Ithaca = document.getElementById("Ithaca");
        let Gavdos = document.getElementById("Gavdos");

        // string variables for the text from paragraph.txt
        let myInfoParagraph = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. \nGreece has 1,400 islands, though only 230 of them are inhabited.\nAnd while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
        let myFolegandros = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";
        let myAlonissos = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.";
        let mySpetses = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";
        let myAmorgos = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";
        let mySyros = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";
        let myMilos = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as \"the island of colours\" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";
        let myHydra = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";
        let myIthaca = "Most famous for being the home of Odysseus, and a prominent figure in Homer's \"The Odyssey,\" Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.";
        let myGavdos = "Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.";

        // injecting the strings to the corresponding paragraph elements
        infoParagraph.textContent = myInfoParagraph;
        Folegandros.textContent = myFolegandros;
        Alonissos.textContent = myAlonissos;
        Spetses.textContent = mySpetses;
        Amorgos.textContent = myAmorgos;
        Syros.textContent = mySyros;
        Milos.textContent = myMilos;
        Hydra.textContent = myHydra;
        Ithaca.textContent = myIthaca;
        Gavdos.textContent = myGavdos;
    }


    // Contact page fields
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let contactNumber = document.getElementById("contactNumber");
    let email = document.getElementById("email");
    let yourMessage = document.getElementById("yourMessage");

    // Displays in the console - the form data entered by user
    function OutputFormDataToConsole() {
        console.log(`%c -----------FORM DATA----------- `, "font-weight: bold; font-size: 16px; color: maroon; background-color: rgba(0, 255, 0, 0.3);");
        console.log(`%c First Name     : ${firstName.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Last Name      : ${lastName.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Contact Number : ${contactNumber.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Email Address  : ${email.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Your Message   : ${yourMessage.value}`, "color: maroon; font-style: italic;");
    }


    // Clears the validation message for the form elements
    function ClearValidationMessage() {
        firstName.setCustomValidity("");
        lastName.setCustomValidity("");
        contactNumber.setCustomValidity("");
        email.setCustomValidity("");
        yourMessage.setCustomValidity("");
    }


    // Event handlers for form elements
    // Sets the validation message depending on the element
    function setEventHandlersForFormElements() {
        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is entering data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });
                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "firstName":
                            element.setCustomValidity("Enter a first name with at least 2 letters");
                            break;
                        case "lastName":
                            element.setCustomValidity("Enter a last name with at least 2 letters");
                            break;
                        case "contactNumber":
                            element.setCustomValidity("Enter a phone number with the pattern (###) ###-####");
                            break;
                        case "email":
                            element.setCustomValidity("Enter an appropriate email address with the pattern name@example.com.");
                            break;
                        case "yourMessage":
                            element.setCustomValidity("You must enter a message");
                            break;
                        default:
                            element.setCustomValidity("This field is required.");
                            break;
                    }
                });
            }
        }
    }


    // calls the setEventHandlersForFormElements function
    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    // function that runs when the contact page is loaded
    function ContactContent() {

        // clears the validation messages initially
        ClearValidationMessage();

        // configure the submit button
        let SendButton = document.getElementById("sendButton");
        SendButton.addEventListener("click", (event) => {
            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }
        });
    }

    function Start() {
        console.log("App Started!")

        TourParagraphs();

        ContactContent();

    }

    window.addEventListener("load", Start);

})(app || (app = {}));

