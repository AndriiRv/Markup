(function ($) {

    $.fn.slider = function (params) {
        let isNextImageTrigger = params[0];

        let aboutUsBlocks = this;

        if (isNextImageTrigger) {
            let tempFirstSelector = aboutUsBlocks[0];

            for (let i = 0; i < aboutUsBlocks.length; i++) {
                if (i >= aboutUsBlocks.length - 1) {
                    aboutUsBlocks[aboutUsBlocks.length - 1] = tempFirstSelector;
                    break;
                }

                aboutUsBlocks[i] = aboutUsBlocks[i + 1];
            }
        } else {
            let tempLastSelector = aboutUsBlocks[aboutUsBlocks.length - 1];
            for (let i = aboutUsBlocks.length - 1; i >= 0; i--) {
                if (i === 0) {
                    aboutUsBlocks[0] = tempLastSelector;
                    break;
                }
                aboutUsBlocks[i] = aboutUsBlocks[i - 1];
            }
        }

        applySort();

        function applySort() {
            for (let i = 0; i < aboutUsBlocks.length; i++) {
                let classElement = aboutUsBlocks[i].classList[0];

                let stringBuilder = '<div class="' + classElement + '">';
                for (let j = 0; j < aboutUsBlocks[i].children.length; j++) {
                    stringBuilder += aboutUsBlocks[i].children[j].outerHTML;
                }
                stringBuilder += '</div>';

                $("." + classElement)[i].outerHTML = stringBuilder;
            }
        }

        return this;
    };

    $.fn.resizeSlider = function (countShowElement, imageSelector) {
        let selector = $("." + imageSelector);

        let array = selector;

        let countOfUnnecessaryImages;

        if (array.length > countShowElement) {
            countOfUnnecessaryImages = array.length - countShowElement;
        } else {
            countOfUnnecessaryImages = 0;
        }

        for (let i = 0; i < array.length; i++) {
            selector.eq(array.length - (i + 1)).css("display", "block");
        }

        if (countOfUnnecessaryImages >= 1) {
            for (let i = 0; i < countOfUnnecessaryImages; i++) {
                selector.eq(array.length - (i + 1)).css("display", "none");
            }
        }
    }

}(jQuery));

$(document).ready(function () {

    let serviceImageSelector = "member-in-about-us";
    let reviewImageSelector = "reviews-company";

    let maxCountOfImageInPage = 100;

    let countShowElement;

    let minDesktopWidth = 1023;
    let widthMainContent = 1200;

    resizeSliderOnStartLoad();

    $(window).resize(function () {
        resizeSliderOnStartLoad();
    });

    function resizeSliderOnStartLoad() {
        let screenWidth = $(window).width();

        changeCountShowElement(screenWidth);

        resizeSliderByWidthOfScreen(serviceImageSelector);
        resizeSliderByWidthOfScreen(reviewImageSelector);
    }

    function changeCountShowElement(screenWidth) {
        if (screenWidth < minDesktopWidth) {
            countShowElement = 1;
        } else if (screenWidth >= minDesktopWidth && screenWidth <= widthMainContent) {
            countShowElement = 3;
        } else if (screenWidth > widthMainContent) {
            countShowElement = maxCountOfImageInPage;
        }
    }

    function resizeSliderByWidthOfScreen(imageSelector) {
        let selector = $("." + imageSelector);

        let array = selector;

        let countOfUnnecessaryImages;

        if (array.length > countShowElement) {
            countOfUnnecessaryImages = array.length - countShowElement;
        } else {
            countOfUnnecessaryImages = 0;
        }

        for (let i = 0; i < array.length; i++) {
            selector.eq(array.length - (i + 1)).css("display", "block");
        }

        if (countOfUnnecessaryImages >= 1) {
            for (let i = 0; i < countOfUnnecessaryImages; i++) {
                selector.eq(array.length - (i + 1)).css("display", "none");
            }
        }
    }

    $(".next-about-us").on("click", function () {
        let slider = $(".member-in-about-us").slider([true]);
        slider.resizeSlider(countShowElement, slider.eq(0).attr("class").split(' ')[0]);
    });

    $(".prev-about-us").on("click", function () {
        let slider = $(".member-in-about-us").slider([false]);
        slider.resizeSlider(countShowElement, slider.eq(0).attr("class").split(' ')[0]);
    });

    $(".next-review").on("click", function () {
        let slider = $(".reviews-company").slider([true]);
        slider.resizeSlider(countShowElement, slider.eq(0).attr("class").split(' ')[0]);
    });

    $(".prev-review").on("click", function () {
        let slider = $(".reviews-company").slider([false]);
        slider.resizeSlider(countShowElement, slider.eq(0).attr("class").split(' ')[0]);
    });
});