var displayAllButton = document.querySelector('.all');
var displayBreakfastButton = document.querySelector('.breakfast');
var displayLunchButton = document.querySelector('.lunch');
var displayShakesButton = document.querySelector('.shakes');
var displayDinnerButton = document.querySelector('.dinner');

var breakfastItem = document.querySelectorAll('.breakfast-item');
var lunchItem = document.querySelectorAll('.lunch-item');
var dessertItem = document.querySelectorAll('.dessert-item');
var dinnerItem = document.querySelectorAll('.dinner-item');
var shakesItem = document.querySelectorAll('.shakes-item');

function toggleMenu() {
    var allToggleCounter = 0;
    var breakfastToggleCounter = 0;
    var lunchToggleCounter = 0;
    var shakesToggleCounter = 0;
    var dinnerToggleCounter = 0;

    displayAllButton.addEventListener('click', function () {

        for (var i = 0; i < breakfastItem.length; i++) {
            breakfastItem[i].style.display = "flex";
        };
        for (var i = 0; i < lunchItem.length; i++) {
            lunchItem[i].style.display = "flex";
        };
        for (var i = 0; i < dessertItem.length; i++) {
            dessertItem[i].style.display = "flex";
        };
        for (var i = 0; i < dinnerItem.length; i++) {
            dinnerItem[i].style.display = "flex";
        };
    });

    displayBreakfastButton.addEventListener('click', function () {

        for (var i = 0; i < breakfastItem.length; i++) {
            breakfastItem[i].style.display = "flex";
        };
        for (var i = 0; i < lunchItem.length; i++) {
            lunchItem[i].style.display = "none";
        };
        for (var i = 0; i < dessertItem.length; i++) {
            dessertItem[i].style.display = "none";
        };
        for (var i = 0; i < dinnerItem.length; i++) {
            dinnerItem[i].style.display = "none";
        };
    });

    displayLunchButton.addEventListener('click', function () {

        for (var i = 0; i < breakfastItem.length; i++) {
            breakfastItem[i].style.display = "none";
        };
        for (var i = 0; i < lunchItem.length; i++) {
            lunchItem[i].style.display = "flex";
        };
        for (var i = 0; i < dessertItem.length; i++) {
            dessertItem[i].style.display = "none";
        };
        for (var i = 0; i < dinnerItem.length; i++) {
            dinnerItem[i].style.display = "none";
        };
    });

    displayShakesButton.addEventListener('click', function () {

        for (var i = 0; i < breakfastItem.length; i++) {
            breakfastItem[i].style.display = "none";
        };
        for (var i = 0; i < lunchItem.length; i++) {
            lunchItem[i].style.display = "none";
        };
        for (var i = 0; i < dessertItem.length; i++) {
            dessertItem[i].style.display = "none";
        };
        for (var i = 0; i < dinnerItem.length; i++) {
            dinnerItem[i].style.display = "none";
        };
        for (var i = 0; i < shakesItem.length; i++) {
            shakesItem[i].style.display = "flex";
        };
    });

    displayDinnerButton.addEventListener('click', function () {

        for (var i = 0; i < breakfastItem.length; i++) {
            breakfastItem[i].style.display = "none";
        };
        for (var i = 0; i < lunchItem.length; i++) {
            lunchItem[i].style.display = "none";
        };
        for (var i = 0; i < dessertItem.length; i++) {
            dessertItem[i].style.display = "none";
        };
        for (var i = 0; i < dinnerItem.length; i++) {
            dinnerItem[i].style.display = "flex";
        };
        for (var i = 0; i < shakesItem.length; i++) {
            shakesItem[i].style.display = "none";
        };
    });

}

toggleMenu();