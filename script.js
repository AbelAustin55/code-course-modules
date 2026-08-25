const moduleData = { 
    

    "100": {

        "Business": [
            {
                code: "EBS101D",
                title: "Assesment in Early Childhood Education",
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
            code:"SW-ACC101",
            title:"Introduction to Accounting",
            link:"https://codemodules.dedyn.io"
        }

    ],


    "ARTS":[

        {
            code:"SW-ART101",
            title:"Arts Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ],


    "HOME ECONOMICS":[

        {
            code:"SW-HEC101",
            title:"Home Economics Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ],


    "INFORMATION TECHNOLOGY":[

        {
            code:"SW-INF101",
            title:"Information Technology Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ],


    "MATHEMATICS":[

        {
            code:"SW-MATH101",
            title:"Mathematics Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ],


    "SCIENCE":[

        {
            code:"SW-SCI101",
            title:"Science Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ],


    "SOCIAL SCIENCES":[

        {
            code:"SW-SES101",
            title:"Social Sciences Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ],


    "SOCIAL STUDIES":[

        {
            code:"SW-SST101",
            title:"Social Studies Module",
            link:"YOUR-NEXTCLOUD-LINK"
        }

    ]


};

let selectedLevel = null;


function showProgrammes(level) {

    selectedLevel = level;

    document.getElementById("homeView").classList.remove("active");
    document.getElementById("courseView").classList.remove("active");

    document.getElementById("programmeView").classList.add("active");

    document.getElementById("programmeHeading").textContent =
        `Level ${level}`;

    const programmeList =
        document.getElementById("programmeList");

    programmeList.innerHTML = "";

    const programmes = moduleData[level];

    Object.keys(programmes).forEach(programme => {

        const card = document.createElement("div");

        card.className = "programme-card";

        card.innerHTML = `
            <h3>${programme}</h3>
            <p>${programmes[programme].length} course(s)</p>
        `;

        card.onclick = () => showCourses(programme);

        programmeList.appendChild(card);

    });

}


function showCourses(programme) {

    document.getElementById("programmeView")
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

        const card = document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `
            <div class="course-code">
                ${course.code}
            </div>

            <div class="course-title">
                ${course.title}
            </div>

            <button
                class="open-btn"
                onclick="openModule(event, '${course.link}')">
                OPEN MODULES
            </button>
        `;

        courseList.appendChild(card);

    });

}


function openModule(event, link) {

    event.stopPropagation();

    window.open(link, "_blank");

}


function goHome() {

    selectedLevel = null;

    document.getElementById("programmeView")
        .classList.remove("active");

    document.getElementById("courseView")
        .classList.remove("active");

    document.getElementById("homeView")
        .classList.add("active");

}


function backToProgrammes() {

    document.getElementById("courseView")
        .classList.remove("active");

    document.getElementById("programmeView")
        .classList.add("active");
}
function showSwitchModules(){


    document.getElementById("homeView")
    .classList.remove("active");


    document.getElementById("programmeView")
    .classList.add("active");


    document.getElementById("programmeHeading")
    .textContent="SWITCH Modules";


    const programmeList =
    document.getElementById("programmeList");


    programmeList.innerHTML="";


    Object.keys(switchData).forEach(programme=>{


        const card=document.createElement("button");


        card.className="level-card";


        card.innerHTML=`

            <span class="level-number">
                SWITCH
            </span>


            <span class="level-title">
                ${programme}
            </span>


            <span class="level-action">
                View Modules →
            </span>

        `;


        card.onclick = () => showSwitchCourses(programme);


        programmeList.appendChild(card);


    });


}






function showSwitchCourses(programme){


    // hide programme page
    document.getElementById("programmeView")
    .classList.remove("active");


    // open course page
    document.getElementById("courseView")
    .classList.add("active");



    document.getElementById("courseHeading")
    .textContent =
    `${programme} - SWITCH`;



    const courseList =
    document.getElementById("courseList");


    courseList.innerHTML="";



    const courses = switchData[programme];



    courses.forEach(course=>{


        const card=document.createElement("div");


        card.className="course-card";


        card.innerHTML = `


        <div class="course-code">
            ${course.code}
        </div>


        <div class="course-title">
            ${course.title}
        </div>


        <button 
        class="open-btn"
        onclick="openModule(event,'${course.link}')">

            OPEN MODULES

        </button>


        `;


        courseList.appendChild(card);


    });


}

function loadSwitchCards(){

    const switchList =
    document.getElementById("switchProgrammeList");

    switchList.innerHTML = "";

    Object.keys(switchData).forEach(programme => {

        const card = document.createElement("button");

        card.className = "level-card";

        card.innerHTML = `

            <span class="switch-programme-name">
                ${programme}
            </span>

            <span class="level-action">
                View Modules →
            </span>

        `;

        card.onclick = () => showSwitchCourses(programme);

        switchList.appendChild(card);

    });

}
document.addEventListener("DOMContentLoaded",function(){

    loadSwitchCards();

});