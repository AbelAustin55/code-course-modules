const moduleData = {

    "100": {

        "Business": [
            {
                code: "EBS101D",
                title: "Assessment in Early Childhood Education",
                link: "https://codemodules.dedyn.io/s/BBcXAtNKR3tBfAj"
            },

            {
                code: "ECO101D",
                title: "Introduction to Economics",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ],

        "Education": [
            {
                code: "EBS101D",
                title: "Introduction to Education",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            },

            {
                code: "EBS143D",
                title: "Geometry and Trigonometry",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ],

        "Social Studies": [
            {
                code: "EBS157D",
                title: "Human-Land Issues in Social Studies",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ]
    },


    "200": {

        "Business": [
            {
                code: "ECO202D",
                title: "Elements of Macroeconomics I",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            },

            {
                code: "EBS276D",
                title: "Entrepreneurship and Small Business Development",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ],

        "Education": [
            {
                code: "EPS205D",
                title: "Introduction to Guidance and Counselling",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ]
    },


    "300": {

        "Business": [
            {
                code: "ACC302D",
                title: "Cost and Management Accounting II",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ]
    },


    "400": {

        "Business": [
            {
                code: "ACC401D",
                title: "Advanced Accounting",
                link: "https://YOUR-NEXTCLOUD-LINK-HERE"
            }
        ]
    }

};


const switchData = {

    "ACCOUNTING & MANAGEMENT": [
        {
            code: "SW-ACC101",
            title: "Introduction to Accounting",
            link: "https://codemodules.dedyn.io"
        }
    ],

    "ARTS": [
        {
            code: "SW-ART101",
            title: "Arts Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ],

    "HOME ECONOMICS": [
        {
            code: "SW-HEC101",
            title: "Home Economics Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ],

    "INFORMATION TECHNOLOGY": [
        {
            code: "SW-INF101",
            title: "Information Technology Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ],

    "MATHEMATICS": [
        {
            code: "SW-MATH101",
            title: "Mathematics Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ],

    "SCIENCE": [
        {
            code: "SW-SCI101",
            title: "Science Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ],

    "SOCIAL SCIENCES": [
        {
            code: "SW-SES101",
            title: "Social Sciences Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ],

    "SOCIAL STUDIES": [
        {
            code: "SW-SST101",
            title: "Social Studies Module",
            link: "https://YOUR-NEXTCLOUD-LINK-HERE"
        }
    ]

};


let selectedLevel = null;
let navigationType = null;


/* =========================================
   GLOBAL SEARCH
   ========================================= */

function searchAllCourses(
    query,
    undergraduateData = moduleData,
    switchDataSource = switchData
) {

    const term = String(query || "")
        .trim()
        .toLowerCase();

    if (term.length < 2) {
        return [];
    }

    const results = [];


    // Undergraduate courses
    Object.entries(undergraduateData)
        .forEach(([level, programmes]) => {

            Object.entries(programmes)
                .forEach(([programme, courses]) => {

                    courses.forEach(course => {

                        const searchText = [
                            course.code,
                            course.title,
                            programme,
                            level,
                            `Level ${level}`,
                            "Undergraduate"
                        ]
                            .join(" ")
                            .toLowerCase();

                        if (searchText.includes(term)) {

                            results.push({
                                ...course,
                                type: "Undergraduate",
                                programme: programme,
                                level: level
                            });

                        }

                    });

                });

        });


    // SWITCH courses
    Object.entries(switchDataSource)
        .forEach(([programme, courses]) => {

            courses.forEach(course => {

                const searchText = [
                    course.code,
                    course.title,
                    programme,
                    "SWITCH"
                ]
                    .join(" ")
                    .toLowerCase();

                if (searchText.includes(term)) {

                    results.push({
                        ...course,
                        type: "SWITCH",
                        programme: programme,
                        level: null
                    });

                }

            });

        });


    return results;
}


function handleCourseSearch(event) {

    const query = event.target.value.trim();

    const resultsContainer =
        document.getElementById("searchResults");

    const resultsList =
        document.getElementById("searchResultsList");

    const resultCount =
        document.getElementById("searchResultCount");

    const noResults =
        document.getElementById("noSearchResults");


    if (query.length === 0) {

        resultsContainer.hidden = true;
        resultsList.innerHTML = "";
        noResults.hidden = true;

        return;
    }


    if (query.length < 2) {

        resultsContainer.hidden = false;
        resultsList.innerHTML = "";
        noResults.hidden = true;

        resultCount.textContent =
            "Type at least 2 characters to search.";

        return;
    }


    const results = searchAllCourses(query);

    resultsContainer.hidden = false;

    renderSearchResults(results);
}


function renderSearchResults(results) {

    const resultsList =
        document.getElementById("searchResultsList");

    const resultCount =
        document.getElementById("searchResultCount");

    const noResults =
        document.getElementById("noSearchResults");


    resultsList.innerHTML = "";


    if (results.length === 0) {

        resultCount.textContent =
            "0 courses found";

        noResults.hidden = false;

        return;
    }


    noResults.hidden = true;

    resultCount.textContent =
        `${results.length} course${results.length === 1 ? "" : "s"} found`;


    results.forEach(course => {

        const card =
            document.createElement("div");

        card.className =
            "search-result-card";


        let courseMeta;


        if (course.type === "Undergraduate") {

            courseMeta =
                `Undergraduate • Level ${course.level} • ${course.programme}`;

        } else {

            courseMeta =
                `SWITCH • ${course.programme}`;

        }


        card.innerHTML = `

            <div class="search-result-code">
                ${course.code}
            </div>

            <div class="search-result-title">
                ${course.title}
            </div>

            <div class="search-result-meta">
                ${courseMeta}
            </div>

            <button class="open-btn">
                OPEN MODULES
            </button>
        `;


        const openButton =
            card.querySelector(".open-btn");

        openButton.addEventListener("click", function (event) {
            openModule(event, course.link);
        });


        resultsList.appendChild(card);

    });
}


/* =========================================
   UNDERGRADUATE NAVIGATION
   ========================================= */

function showProgrammes(level) {

    selectedLevel = level;
    navigationType = "undergraduate";


    document.getElementById("homeView")
        .classList.remove("active");

    document.getElementById("courseView")
        .classList.remove("active");

    document.getElementById("programmeView")
        .classList.add("active");


    document.getElementById("programmeHeading").textContent =
        `Level ${level}`;


    const programmeList =
        document.getElementById("programmeList");


    programmeList.innerHTML = "";


    const programmes =
        moduleData[level];


    Object.keys(programmes).forEach(programme => {

        const card =
            document.createElement("div");

        card.className =
            "programme-card";


        card.innerHTML = `
            <h3>${programme}</h3>
            <p>${programmes[programme].length} course(s)</p>
        `;


        card.onclick =
            () => showCourses(programme);


        programmeList.appendChild(card);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showCourses(programme) {

    navigationType = "undergraduate";


    document.getElementById("programmeView")
        .classList.remove("active");

    document.getElementById("homeView")
        .classList.remove("active");

    document.getElementById("courseView")
        .classList.add("active");


    document.getElementById("courseHeading").textContent =
        `${programme} – Level ${selectedLevel}`;


    const courseList =
        document.getElementById("courseList");


    courseList.innerHTML = "";


    const courses =
        moduleData[selectedLevel][programme];


    courses.forEach(course => {

        const card =
            document.createElement("div");

        card.className =
            "course-card";


        card.innerHTML = `

            <div class="course-code">
                ${course.code}
            </div>

            <div class="course-title">
                ${course.title}
            </div>

            <button class="open-btn">
                OPEN MODULES
            </button>
        `;


        const openButton =
            card.querySelector(".open-btn");

        openButton.addEventListener("click", function (event) {
            openModule(event, course.link);
        });


        courseList.appendChild(card);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   SWITCH NAVIGATION
   ========================================= */

function loadSwitchCards() {

    const switchList =
        document.getElementById("switchProgrammeList");


    switchList.innerHTML = "";


    Object.keys(switchData).forEach(programme => {

        const card =
            document.createElement("button");


        card.className =
            "level-card";


        card.innerHTML = `

            <span class="switch-programme-name">
                ${programme}
            </span>

            <span class="level-action">
                View Modules →
            </span>
        `;


        card.onclick =
            () => showSwitchCourses(programme);


        switchList.appendChild(card);

    });
}


function showSwitchCourses(programme) {

    navigationType = "switch";


    // Hide home completely
    document.getElementById("homeView")
        .classList.remove("active");


    // Hide undergraduate programme view
    document.getElementById("programmeView")
        .classList.remove("active");


    // Show dedicated course page
    document.getElementById("courseView")
        .classList.add("active");


    document.getElementById("courseHeading").textContent =
        `${programme} - SWITCH`;


    const courseList =
        document.getElementById("courseList");


    courseList.innerHTML = "";


    const courses =
        switchData[programme];


    courses.forEach(course => {

        const card =
            document.createElement("div");


        card.className =
            "course-card";


        card.innerHTML = `

            <div class="course-code">
                ${course.code}
            </div>

            <div class="course-title">
                ${course.title}
            </div>

            <button class="open-btn">
                OPEN MODULES
            </button>
        `;


        const openButton =
            card.querySelector(".open-btn");


        openButton.addEventListener("click", function (event) {
            openModule(event, course.link);
        });


        courseList.appendChild(card);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   GENERAL NAVIGATION
   ========================================= */

function openModule(event, link) {

    event.stopPropagation();

    window.open(
        link,
        "_blank",
        "noopener,noreferrer"
    );
}


function goHome() {

    selectedLevel = null;
    navigationType = null;


    document.getElementById("programmeView")
        .classList.remove("active");

    document.getElementById("courseView")
        .classList.remove("active");

    document.getElementById("homeView")
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function backToProgrammes() {

    document.getElementById("courseView")
        .classList.remove("active");


    if (navigationType === "switch") {

        // SWITCH returns to homepage
        document.getElementById("programmeView")
            .classList.remove("active");

        document.getElementById("homeView")
            .classList.add("active");

        navigationType = null;

    } else {

        // Undergraduate returns to its programme list
        document.getElementById("homeView")
            .classList.remove("active");

        document.getElementById("programmeView")
            .classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   PAGE INITIALISATION
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSwitchCards();


        const searchInput =
            document.getElementById("courseSearch");


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                handleCourseSearch
            );

        }

    }
);
