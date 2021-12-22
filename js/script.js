$(document).ready(function() {
    let position = 0;
    const slidesToShow = 5;
    const slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const prevBtn = $('.btn-prev');
    const nextBtn = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    })
    nextBtn.click(function () {
        position -= movePosition;
        setPosition();
        checkBtns();
    });
    prevBtn.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });
    const setPosition = () =>{
        track.css({
           transform: `translateX(${position}px)`  
        });
    } 
    const checkBtns = () => {
        prevBtn.prop('disabled', position === 0);
        nextBtn.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth)
    };


    checkBtns();
});
