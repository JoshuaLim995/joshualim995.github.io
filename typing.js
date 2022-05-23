var typing = document.getElementById('about-me');

var typewriter = new Typewriter(typing, {
    loop: true
});

var aboutMe = ["Developer", "Hobbyist", "Crypto Enthusiast"];

for(const element of aboutMe) {
    typewriter.typeString(element)
        .pauseFor(500)
        .deleteAll()
        // .pauseFor(1000)
        .start();
}
