$(document).ready(function () {

    let minTabletWidth = 768;
    let maxTabletWidth = 1023;

    let serviceContent2 = $(".service-content-2");
    let serviceContent3 = $(".service-content-3");

    let currentWidthOfScreen = $(window).width();

    let isTabletResolution = currentWidthOfScreen > minTabletWidth && currentWidthOfScreen < maxTabletWidth;

    if (isTabletResolution) {
        let tempServiceContent2Html = serviceContent2.html();
        let serviceContent3Html = serviceContent3.html();

        serviceContent2.html(serviceContent3Html);
        serviceContent3.html(tempServiceContent2Html);
    }
});