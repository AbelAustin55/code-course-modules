/* =========================================================
   UCC CoDE COURSE MODULES PORTAL

   Undergraduate:
   Semester -> Level -> Programme -> Course

   SWITCH remains separate.
   ========================================================= */


const PLACEHOLDER_LINK =
    "https://YOUR-NEXTCLOUD-LINK-HERE";


const MODULE_API_BASE =
    "https://api.codemodules.dedyn.io";


/*
Each course uses:

course(
    "COURSE CODE",
    "COURSE TITLE",
    "NEXTCLOUD LINK"
)

The link is optional.

If no link is supplied,
the placeholder link is used automatically.
*/

const course = (
    code,
    title,
    link = PLACEHOLDER_LINK
) => ({
    code,
    title,
    link
});



/* =========================================================
   UNDERGRADUATE DATA
   ========================================================= */


const undergraduateData = {


    /* =====================================================
       FIRST SEMESTER
       ===================================================== */


    "firstSemester": {


        /* =========================
           LEVEL 100
           ========================= */


        "100": {


            "B.Ed Early Childhood / Primary / JHS Education": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "EBS102D",
                    "College Algebra"
                ),

                course(
                    "EBS114D",
                    "General Biology Theory I"
                ),

                course(
                    "EBS114PD",
                    "General Biology Practical I"
                ),

                course(
                    "EBS121D",
                    "Studies in African Poetry"
                ),

                course(
                    "EBS125D",
                    "Principles and Practice of Education"
                ),

                course(
                    "GHL107D",
                    "Ghanaian Language Usage: Writing Techniques (Language variants)"
                )

            ],



            "B.Ed Arts": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "EDF102D",
                    "Social and Philosophical Foundations of Education"
                ),

                course(
                    "EAS102D",
                    "Morality and Social Values"
                ),

                course(
                    "EAS103D",
                    "Introduction to Second Language Learning & Teaching"
                ),

                course(
                    "EAS106D",
                    "The Core of Historical Knowledge"
                ),

                course(
                    "GHL107D",
                    "Ghanaian Language Usage: Writing Techniques (Language variants)"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "RHL101D",
                    "Introduction to the Study of Religion and Human Values"
                ),

                course(
                    "HIS110D",
                    "World Civilizations up to the 5th Century BC"
                ),

                course(
                    "ENG101D",
                    "The Use of English"
                )

            ],



            "B.Ed Accounting / Management / Social Studies": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "EDF102D",
                    "Social and Philosophical Foundations of Education"
                ),

                course(
                    "SBU101D",
                    "Fundamentals of Business I"
                ),

                course(
                    "SBU103D",
                    "Foundations of Accounting I"
                ),

                course(
                    "ECO103D",
                    "Principles of Microeconomics"
                ),

                course(
                    "GEO101D",
                    "Elements of Physical Geography"
                ),

                course(
                    "GEO103D",
                    "Thematic Geography of Ghana"
                ),

                course(
                    "SOC101D",
                    "Introduction to Sociology I"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "BPS113D",
                    "Psychology of Human Growth and Development"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "MAT101D",
                    "Algebra and Trigonometry"
                ),

                course(
                    "EMA111D",
                    "Developing Algebraic Thinking"
                )

            ],



            "B.Ed Science": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "BIO101D",
                    "Diversity of Living Organisms"
                ),

                course(
                    "CHE107D",
                    "General Chemistry"
                ),

                course(
                    "CHE109D",
                    "General Chemistry Practical"
                ),

                course(
                    "PHY101D",
                    "General Physics I (Theory)"
                ),

                course(
                    "PHY103D",
                    "General Physics I (Practical)"
                )

            ],



            "B.Sc Information Technology": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "INF101D",
                    "Introduction to Computing"
                ),

                course(
                    "INF105D",
                    "Introduction to Management"
                ),

                course(
                    "INF107D",
                    "Software Suite"
                ),

                course(
                    "INF109D",
                    "Mathematics for Computing I"
                )

            ],



            "B.Ed Information Technology / Computing Education": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "EIT101D",
                    "Fundamentals of Office Suite in Education"
                ),

                course(
                    "INF101D",
                    "Introduction to Computing"
                )

            ],



            "Visual / Communication Design": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "ECD101D",
                    "Drawing and Rendering I"
                ),

                course(
                    "EGA103D",
                    "Basic Design and Colour Psychology"
                )

            ],



            "Business Programmes": [

                course(
                    "CMS107D",
                    "Communicative Skills I"
                ),

                course(
                    "ASP101D",
                    "African Studies"
                ),

                course(
                    "ILT101D",
                    "Information Literacy Skills"
                ),

                course(
                    "SBU101D",
                    "Fundamentals of Business I"
                ),

                course(
                    "SBU103D",
                    "Foundations of Accounting I"
                ),

                course(
                    "ECO101D",
                    "Principles of Economics I"
                )

            ]

        },



        /* =========================
           LEVEL 200
           ========================= */


        "200": {


            "B.Ed Early Childhood Education": [

                course(
                    "EBS209ED",
                    "Ghanaian Language for Early Childhood Teacher Education"
                ),

                course(
                    "EBS267D",
                    "Teaching of Music, Movement and Drama"
                )

            ],



            "B.Ed Primary / JHS Education": [

                course(
                    "EBS204D",
                    "Citizenship Education in Ghana"
                ),

                course(
                    "EBS205D",
                    "Crop Production"
                ),

                course(
                    "EBS214D",
                    "Textile Fibres and Fabrics"
                ),

                course(
                    "EAS212D",
                    "Curriculum Studies in History"
                ),

                course(
                    "EBS248D",
                    "Curriculum Studies in Social Studies"
                )

            ],



            "B.Ed Arts": [

                course(
                    "EAS233D",
                    "Principles and Practice of Curriculum and Instruction"
                ),

                course(
                    "FRE203D",
                    "Introduction to Literature"
                ),

                course(
                    "FRE211D",
                    "Introduction to Translation"
                )

            ],



            "B.Ed Social Studies": [

                course(
                    "ESS213D",
                    "Curriculum Studies in Social Studies"
                ),

                course(
                    "ESS233D",
                    "Principles and Practice of Curriculum and Instruction"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "EMA201D",
                    "Nature of Mathematics"
                ),

                course(
                    "EMA203D",
                    "Psychological Basis of Teaching and Learning Mathematics"
                ),

                course(
                    "EMA209D",
                    "Introductory Statistics I"
                ),

                course(
                    "EMA212D",
                    "Pedagogical Content Knowledge in Mathematics"
                )

            ],



            "B.Ed Science": [

                course(
                    "ESC201D",
                    "Nature of Science"
                ),

                course(
                    "ESC203PD",
                    "Psychological Basis of Teaching and Learning Science"
                ),

                course(
                    "BIO202D",
                    "Cell and Tissue Organisation"
                ),

                course(
                    "ESC214D",
                    "Curriculum Studies in Biology"
                ),

                course(
                    "ESC216D",
                    "Curriculum Studies in Chemistry"
                ),

                course(
                    "ESC220D",
                    "Curriculum Studies in Physics"
                )

            ],



            "B.Ed Information Technology / Computing Education": [

                course(
                    "EIT201D",
                    "Learning Theories for Teaching Computers"
                )

            ],



            "B.Ed Accounting / Management": [

                course(
                    "SBU201D",
                    "Quantitative Methods I"
                ),

                course(
                    "SBU205D",
                    "Principles of Management"
                ),

                course(
                    "EMG201D",
                    "Document Processing I"
                )

            ],



            "Business Administration / Management": [

                course(
                    "SBU201D",
                    "Quantitative Methods I"
                ),

                course(
                    "SBU205D",
                    "Principles of Management"
                ),

                course(
                    "ADM211D",
                    "Computer Application in Document Processing"
                )

            ],



            "BA Social Behaviour & Conflict Management": [

                course(
                    "SBC202D",
                    "Understanding Group Dynamics"
                ),

                course(
                    "SBC203D",
                    "Criminology"
                ),

                course(
                    "SBC204D",
                    "Computer Analysis of Social Data"
                ),

                course(
                    "SBC207D",
                    "Conflict Case Studies"
                ),

                course(
                    "SBC209D",
                    "Law and Society"
                )

            ]

        },



        /* =========================
           LEVEL 300
           ========================= */


        "300": {


            "B.Ed Early Childhood / Primary / JHS Education": [

                course(
                    "EBS302PD",
                    "General Chemistry Practical III"
                ),

                course(
                    "EBS303D",
                    "Clothing Construction"
                ),

                course(
                    "EBS329D",
                    "Principles and Methods of Teaching Visual Arts"
                ),

                course(
                    "EBS330D",
                    "Use of Ghanaian Language as a Medium of Instruction"
                ),

                course(
                    "EBS337D",
                    "ICT Integration in Education"
                ),

                course(
                    "EBS341D",
                    "Issues in Family Finance"
                ),

                course(
                    "EBS350D",
                    "Statistics and Probability I"
                ),

                course(
                    "EBS367D",
                    "Principles of Housing and Housing Management"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "EBS309D",
                    "Assessment in Mathematics Education"
                )

            ],



            "B.Ed Science": [

                course(
                    "ESC311D",
                    "Assessment in Science Education"
                ),

                course(
                    "EBS357D",
                    "Introductory Atomic Physics, Heat and Optics"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS311D",
                    "Psychology of Adulthood"
                ),

                course(
                    "BPS313D",
                    "Behavioural Management Strategies"
                ),

                course(
                    "BPS314D",
                    "Counselling Psychology"
                )

            ],



            "B.Com Accounting": [

                course(
                    "ACC303D",
                    "Public Sector Accounting"
                )

            ],



            "Business / Management": [

                course(
                    "BUS303D",
                    "Management Information Systems II"
                )

            ]

        },



        /* =========================
           LEVEL 400
           ========================= */


        "400": {


            "B.Ed Early Childhood Education": [

                course(
                    "EBS420D",
                    "School, Family and Community Partnership in Early Childhood"
                )

            ],



            "B.Ed Social Studies": [

                course(
                    "ESS404D",
                    "Teaching Social Studies"
                )

            ],



            "B.Ed Arts / Religious Studies": [

                course(
                    "RLH420D",
                    "Christian Ethics"
                )

            ],



            "Ghanaian Language Education": [

                course(
                    "EBS411ED",
                    "Advanced Translation Studies (Ewe)"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS413D",
                    "Community Psychology"
                ),

                course(
                    "BPS415D",
                    "Psychometrics"
                ),

                course(
                    "BPS417D",
                    "Social Change in Organisations"
                ),

                course(
                    "BPS419D",
                    "Psychology of Crime"
                )

            ],



            "Business / Management": [

                course(
                    "BUS403",
                    "Company Law I"
                )

            ]

        }

    }



    /* =====================================================
