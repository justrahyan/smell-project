// Navbar
$(window).on("scroll", function () {
  var nav = $("nav");
  nav.toggleClass("sticky", $(window).scrollTop() > 0);
});

// Discount Circle Text
var text = $(".text p");
text.html(
  text
    .text()
    .split("")
    .map(function (char, i) {
      return `<span style="transform:rotate(${i * 6.3}deg)">${char}</span>`;
    })
    .join("")
);
