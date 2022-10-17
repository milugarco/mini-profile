const pages = document.querySelectorAll(".page");

pages.forEach(page => {
    page.addEventListener("click", function () {

        if (page.classList.contains("selected")) {
            return;
        }

        selectedPage(page);
        showInfoPage(page);
    });
});

function selectedPage(page) {
    const pageSelected = document.querySelector(".page.selected");
    pageSelected.classList.remove("selected")

    page.classList.add("selected")

    return;
};

function showInfoPage(page) {
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected")

    const idElementInformationPage = `info-${page.id}`;

    const informationShow = document.getElementById(idElementInformationPage)

    informationShow.classList.add("selected");

    return;
}

const auto = document.getElementById("autoplay");
auto.oncanplaythrough = function () {
    auto.play();
}