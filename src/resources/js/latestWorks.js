(function ($) {

    $.fn.sortImages = function (params) {
        let defaultTypeOfImage = params[0];
        let selectedTypeOfImage = params[1];
        let dataLatestWorkImageType = params[2];

        let latestWorkImages = this;

        showAllImages(latestWorkImages);
        hideNotWantedImage(latestWorkImages, defaultTypeOfImage, selectedTypeOfImage, dataLatestWorkImageType);

        return this;
    };

    function showAllImages(latestWorkImages) {
        for (let i = 0; i < latestWorkImages.length; i++) {
            latestWorkImages.eq(i).show();
        }
    }

    function hideNotWantedImage(latestWorkImages, defaultTypeOfImage, selectedTypeOfImage, dataLatestWorkImageType) {
        let isSelectedDefaultTypeImage = defaultTypeOfImage === selectedTypeOfImage;

        if (!isSelectedDefaultTypeImage) {
            for (let i = 0; i < latestWorkImages.length; i++) {
                if (selectedTypeOfImage !== latestWorkImages.eq(i).attr(dataLatestWorkImageType)) {
                    latestWorkImages.eq(i).hide();
                }
            }
        }
    }


}(jQuery));

$(document).ready(function () {
    let latestWorkImageBlock = $(".latest-work-image");
    let defaultTypeOfImage = "all-images";
    let dataLatestWorkImageType = "data-latest-work-image-type";
    let specificRedColor = "#c0301c";

    let anchorsInHeaderLatestWorks = $(".header-latest-works").children().children();

    $(".all-images").on("click", function () {
        sortImagesWithActiveNavigation($(this), defaultTypeOfImage, dataLatestWorkImageType);
    });

    $(".branding").on("click", function () {
        sortImagesWithActiveNavigation($(this), defaultTypeOfImage, dataLatestWorkImageType);
    });

    $(".design").on("click", function () {
        sortImagesWithActiveNavigation($(this), defaultTypeOfImage, dataLatestWorkImageType);
    });

    $(".development").on("click", function () {
        sortImagesWithActiveNavigation($(this), defaultTypeOfImage, dataLatestWorkImageType);
    });

    $(".strategy").on("click", function () {
        sortImagesWithActiveNavigation($(this), defaultTypeOfImage, dataLatestWorkImageType);
    });

    function sortImagesWithActiveNavigation(that, defaultTypeOfImage, dataLatestWorkImageType) {
        anchorsInHeaderLatestWorks.css("color", "black");
        latestWorkImageBlock.sortImages([defaultTypeOfImage, that.attr("class"), dataLatestWorkImageType]);
        that.css("color", specificRedColor);
    }
});