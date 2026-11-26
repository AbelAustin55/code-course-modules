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

    },



    /* =====================================================
       SECOND SEMESTER
       ===================================================== */


    "secondSemester": {

        /* =========================
           LEVEL 100
           ========================= */


        "100": {


            "B.Ed Early Childhood / Primary / JHS Education": [

                course(
                    "CMS108D",
                    "Communicative Skills II"
                ),

                course(
                    "EBS124D",
                    "College Geometry"
                ),

                course(
                    "EBS128D",
                    "Introduction to African Traditional Religion"
                ),

                course(
                    "EBS132D",
                    "General Chemistry"
                ),

                course(
                    "EBS134D",
                    "Early Literacy Development and Instruction"
                ),

                course(
                    "EBS135D",
                    "English Language Studies I"
                ),

                course(
                    "EBS137D",
                    "Ghanaian Language and Culture: Cultural Studies (Language variants)"
                ),

                course(
                    "EBS138D",
                    "Psychological Perspectives in RME"
                ),

                course(
                    "EBS142D",
                    "General Physics Theory I"
                ),

                course(
                    "EBS142PD",
                    "General Physics Practical I"
                ),

                course(
                    "EBS143D",
                    "Geometry and Trigonometry"
                ),

                course(
                    "EBS145D",
                    "Elementary Geometry"
                ),

                course(
                    "EBS146D",
                    "Oral Literature of the Ghanaian Language (Language variants)"
                ),

                course(
                    "EBS147D",
                    "HIV/AIDS and Endemic Diseases in Africa"
                ),

                course(
                    "EBS148D",
                    "Written Literature of the Ghanaian Language (Language variants)"
                ),

                course(
                    "EBS149D",
                    "Literature in English – Studies in Poetry"
                ),

                course(
                    "EBS151D",
                    "Literature of the Ghanaian Language (Language variants)"
                ),

                course(
                    "EBS152D",
                    "Physical and Social Relations in Social Studies"
                ),

                course(
                    "EBS153D",
                    "Office Suite in Education"
                ),

                course(
                    "EBS158D",
                    "Literature in English – Prose Fiction"
                ),

                course(
                    "EBS159D",
                    "The Natural Environment"
                ),

                course(
                    "EBS168D",
                    "Learning Theories for Teaching Computers"
                ),

                course(
                    "EBS169D",
                    "Trigonometry"
                ),

                course(
                    "LSS110D",
                    "Man and His Environment"
                )

            ],



            "B.Ed Arts": [

                course(
                    "CMS108D",
                    "Communicative Skills II"
                ),

                course(
                    "EAS104D",
                    "Literacy in the Secondary School Context"
                ),

                course(
                    "EAS105D",
                    "African Ethics"
                ),

                course(
                    "ENG112D",
                    "Principles of Prose Fiction"
                ),

                course(
                    "FRE104D",
                    "Language Structure and Usage II"
                ),

                course(
                    "HIS104D",
                    "Survey of the History of Ghana in the Nineteenth Century"
                ),

                course(
                    "RLH102D",
                    "Introduction to Religions of the World"
                ),

                course(
                    "SOC111D",
                    "Introduction to Sociology II"
                )

            ],



            "B.Ed Accounting / Management / Social Studies": [

                course(
                    "CMS108D",
                    "Communicative Skills II"
                ),

                course(
                    "ECO102D",
                    "Principles of Economics II"
                ),

                course(
                    "ECO104D",
                    "Principles of Macroeconomics"
                ),

                course(
                    "MGT108D",
                    "Introduction to Technology and Innovation Management"
                ),

                course(
                    "SBU102D",
                    "Fundamentals of Business II"
                ),

                course(
                    "SBU104D",
                    "Foundation of Accounting II"
                ),

                course(
                    "SOC111D",
                    "Introduction to Sociology II"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS114D",
                    "Child and Adolescent Psychology"
                ),

                course(
                    "BPS122D",
                    "Psychology of Learning"
                ),

                course(
                    "BPS125D",
                    "Psychology of Motivation"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "EBS124D",
                    "College Geometry"
                ),

                course(
                    "EBS143D",
                    "Geometry and Trigonometry"
                ),

                course(
                    "EBS145D",
                    "Elementary Geometry"
                ),

                course(
                    "EBS169D",
                    "Trigonometry"
                ),

                course(
                    "MAT102D",
                    "Analytical Geometry and Calculus"
                )

            ],



            "B.Ed Science": [

                course(
                    "BIO102D",
                    "Basic Cytology and Genetics"
                ),

                course(
                    "BIO103D",
                    "Data Collection and Analysis"
                ),

                course(
                    "CHE108D",
                    "Introduction to Organic Chemistry"
                ),

                course(
                    "CHE110D",
                    "Practical Introduction to Organic Chemistry"
                ),

                course(
                    "EBS115D",
                    "General Chemistry Theory I"
                ),

                course(
                    "EBS115PD",
                    "General Chemistry Practical I"
                ),

                course(
                    "EBS132D",
                    "General Chemistry"
                ),

                course(
                    "EBS142D",
                    "General Physics Theory I"
                ),

                course(
                    "EBS142PD",
                    "General Physics Practical I"
                ),

                course(
                    "PHY102D",
                    "General Physics II"
                ),

                course(
                    "PHY104D",
                    "General Physics Practical"
                )

            ],



            "B.Sc Information Technology": [

                course(
                    "INF102D",
                    "Programming"
                ),

                course(
                    "INF110D",
                    "Computer Hardware"
                ),

                course(
                    "INF112D",
                    "Mathematics for Computing II"
                )

            ],



            "B.Ed Information Technology / Computing Education": [

                course(
                    "EIT102D",
                    "E-Learning and Web 2.0 Technology"
                ),

                course(
                    "EBS153D",
                    "Office Suite in Education"
                ),

                course(
                    "EBS168D",
                    "Learning Theories for Teaching Computers"
                )

            ],



            "Home Economics": [

                course(
                    "EBS162D",
                    "Introduction to Food and Nutrition"
                ),

                course(
                    "EBS163D",
                    "Introduction to Clothing and Textiles"
                ),

                course(
                    "EBS164D",
                    "Introduction to Family Resource Management"
                )

            ],



            "Visual / Communication Design": [

                course(
                    "ECD101D",
                    "Drawing and Rendering I"
                ),

                course(
                    "ECD102D",
                    "Lettering and Typography"
                ),

                course(
                    "ECD104D",
                    "Drawing and Rendering II"
                )

            ],



            "Business Programmes": [

                course(
                    "ECO102D",
                    "Principles of Economics II"
                ),

                course(
                    "ECO104D",
                    "Principles of Macroeconomics"
                ),

                course(
                    "MGT108D",
                    "Introduction to Technology and Innovation Management"
                ),

                course(
                    "PCM102D",
                    "Procurement Principles and Practice"
                ),

                course(
                    "SBU102D",
                    "Fundamentals of Business II"
                ),

                course(
                    "SBU104D",
                    "Foundation of Accounting II"
                )

            ],



            "BA Social Behaviour & Conflict Management": [

                course(
                    "SBC101D",
                    "Society and Change"
                ),

                course(
                    "SBC102D",
                    "Understanding Gender Relations"
                ),

                course(
                    "SBC104D",
                    "Personal and Career Development"
                ),

                course(
                    "SBC106D",
                    "Small Arms and Light Weapons"
                ),

                course(
                    "SBC110D",
                    "Understanding Conflict"
                )

            ]

        },



        /* =========================
           LEVEL 200
           ========================= */


        "200": {


            "B.Ed Early Childhood Education": [

                course(
                    "EBS206D",
                    "Arts and Creativity in Early Grade Education"
                ),

                course(
                    "EBS235D",
                    "Assessment in Early Childhood Education"
                ),

                course(
                    "EBS238D",
                    "Curriculum Studies in ECE"
                ),

                course(
                    "EBS257D",
                    "Introduction to Diverse Learning Needs in Early Childhood Education"
                ),

                course(
                    "EBS260D",
                    "Mathematics Activities for Early Childhood Education"
                ),

                course(
                    "EBS266D",
                    "Instructional Methods in Early Childhood Education"
                ),

                course(
                    "EBS268D",
                    "Theory and Principles of Early Childhood Education"
                )

            ],



            "B.Ed Primary / JHS Education": [

                course(
                    "EAS233D",
                    "Principles and Practice of Curriculum and Instruction"
                ),

                course(
                    "EBS234D",
                    "Assessment in Basic Schools"
                ),

                course(
                    "EBS262D",
                    "General Principles and Methods of Teaching in Basic Schools"
                ),

                course(
                    "EPS212D",
                    "Educating Individuals with Diverse Learning Needs"
                )

            ],



            "B.Ed Arts": [

                course(
                    "EAS202D",
                    "Teaching History"
                ),

                course(
                    "EAS204D",
                    "Pedagogical Content Knowledge in English"
                ),

                course(
                    "EAS209TRD",
                    "Teaching Religious Studies"
                ),

                course(
                    "EAS251D",
                    "Philosophical and Psychological Basis for Teaching Ghanaian Language"
                ),

                course(
                    "EBS240D",
                    "Curriculum Studies in French"
                ),

                course(
                    "EBS241D",
                    "Curriculum Studies in Ghanaian Language (Language variants)"
                ),

                course(
                    "EBS246CD",
                    "Curriculum Studies in RME / Visual Studies"
                ),

                course(
                    "EBS248CD",
                    "Curriculum Studies in Social Studies"
                ),

                course(
                    "EBS253D",
                    "Language Structure and Usage IV: Basic French Composition"
                ),

                course(
                    "EBS280D",
                    "Introduction to Semantics"
                ),

                course(
                    "EBS282D",
                    "Forms and Functions of the Clause"
                ),

                course(
                    "ENG204D",
                    "Forms and Functions of the English Clause"
                ),

                course(
                    "ENG214D",
                    "The Techniques of Poetry"
                ),

                course(
                    "FRE208D",
                    "Language Structure and Usage IV"
                ),

                course(
                    "GHL208D",
                    "Language Usage: Translation (Basic) (Language variants)"
                ),

                course(
                    "GHL210D",
                    "Written Literature: Poetry, Prose and Drama (Language variants)"
                ),

                course(
                    "HIS205D",
                    "Ottoman North Africa"
                ),

                course(
                    "HIS207D",
                    "Europe During the Age of Enlightenment"
                ),

                course(
                    "RLH202D",
                    "Introduction to the New Testament"
                ),

                course(
                    "RLH204D",
                    "Introduction to African Traditional Religion"
                ),

                course(
                    "RLH206D",
                    "Classical History of Islam"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "EBS277D",
                    "Psychological Basis of Teaching and Learning Mathematics"
                ),

                course(
                    "EMA203D",
                    "Psychological Basis of Teaching and Learning Mathematics"
                ),

                course(
                    "MAT202D",
                    "Vector Algebra and Differential Equations"
                ),

                course(
                    "MAT206D",
                    "Complex Numbers and Matrix Algebra"
                )

            ],



            "B.Ed Science": [

                course(
                    "BIO201D",
                    "Plant Physiology"
                ),

                course(
                    "BIO206D",
                    "Mammalian Anatomy and Physiology"
                ),

                course(
                    "CHE204D",
                    "General Organic Chemistry"
                ),

                course(
                    "CHE206D",
                    "Safety in the Chemistry Environment"
                ),

                course(
                    "CHE216D",
                    "Practical Organic Chemistry"
                ),

                course(
                    "EBS212D",
                    "General Biology Theory II"
                ),

                course(
                    "ESC214D",
                    "Curriculum Studies in Biology"
                ),

                course(
                    "ESC220D",
                    "Curriculum Studies in Physics"
                ),

                course(
                    "PHY202D",
                    "Electricity and Magnetism – Theory"
                ),

                course(
                    "PHY204D",
                    "Electronics – Theory"
                ),

                course(
                    "PHY206D",
                    "Electricity and Magnetism – Practical"
                )

            ],



            "B.Sc Information Technology": [

                course(
                    "INF210D",
                    "Forecasting Methods"
                ),

                course(
                    "INF212D",
                    "Algorithms"
                ),

                course(
                    "INF213D",
                    "Web Technology I"
                ),

                course(
                    "INF215D",
                    "Database Management I"
                ),

                course(
                    "INF216D",
                    "Database Management II"
                )

            ],



            "B.Ed Information Technology / Computing Education": [

                course(
                    "EBS217D",
                    "Designing Instructional Materials Using ICT Tools"
                ),

                course(
                    "EBS242CD",
                    "Curriculum Studies in ICT"
                ),

                course(
                    "EIT212D",
                    "Curriculum Studies in Computing Education"
                )

            ],



            "Home Economics": [

                course(
                    "EBS250CD",
                    "Curriculum Studies in Home Economics"
                ),

                course(
                    "EBS271D",
                    "Basics of Community Nutrition"
                ),

                course(
                    "EBS272D",
                    "Basic Pattern Drafting and Adaptation"
                )

            ],



            "B.Com Accounting / Business / Management": [

                course(
                    "ACC202D",
                    "Financial Reporting II"
                ),

                course(
                    "ACC204D",
                    "Computer Application in Accounting"
                ),

                course(
                    "ECO202D",
                    "Elements of Macroeconomics"
                ),

                course(
                    "EMG203D",
                    "Document Processing II"
                ),

                course(
                    "MKT202D",
                    "Service Marketing"
                ),

                course(
                    "MKT204D",
                    "Retail Management"
                ),

                course(
                    "SBU202D",
                    "Quantitative Methods II"
                ),

                course(
                    "SBU204D",
                    "Business Law II"
                ),

                course(
                    "SBU206D",
                    "Principles of Marketing"
                ),

                course(
                    "SBU207D",
                    "Business Communication"
                ),

                course(
                    "SBU208D",
                    "Organisational Behaviour"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS221D",
                    "Psychological Testing"
                ),

                course(
                    "BPS222D",
                    "Theories of Psychology"
                ),

                course(
                    "BPS225D",
                    "Experimental Psychology"
                )

            ],



            "BA Social Behaviour & Conflict Management": [

                course(
                    "PHL205D",
                    "Critical Thinking and Practical Reasoning"
                ),

                course(
                    "SBC205D",
                    "Family Violence"
                ),

                course(
                    "SBC206D",
                    "Report Writing"
                ),

                course(
                    "SBC210D",
                    "State and Society in Africa"
                )

            ],



            "Visual / Communication Design": [

                course(
                    "ECD202D",
                    "Industrial Printing Technology II"
                ),

                course(
                    "ECD206D",
                    "Computer Graphics II – Adobe Photoshop"
                )

            ]

        },



        /* =========================
           LEVEL 300
           ========================= */
           /* =========================
           LEVEL 300
           ========================= */


        "300": {


            "B.Ed Early Childhood / Primary / JHS Education": [

                course(
                    "EBS334D",
                    "Food and Culture"
                ),

                course(
                    "EBS336D",
                    "History and Development of Education in Ghana"
                ),

                course(
                    "EBS337D",
                    "ICT Integration in Education"
                ),

                course(
                    "EBS338D",
                    "Introduction to Guidance and Counselling"
                ),

                course(
                    "EBS339D",
                    "Introduction to Research Methods in Education"
                ),

                course(
                    "EBS346D",
                    "Developmental Physical Activities in Early Childhood Education"
                ),

                course(
                    "EBS347D",
                    "Population and Socioeconomic Development in Ghana"
                ),

                course(
                    "EBS348D",
                    "Educational Statistics"
                ),

                course(
                    "EBS351D",
                    "Statistics and Probability II"
                ),

                course(
                    "EBS352D",
                    "Clothing Management"
                ),

                course(
                    "EBS354D",
                    "Introduction to Textiles"
                ),

                course(
                    "EBS364D",
                    "Rural Sociology and Agricultural Extension"
                ),

                course(
                    "EPS312D",
                    "Assessment in Education"
                )

            ],



            "B.Ed Arts": [

                course(
                    "EAS333D",
                    "Critical Issues in Moral Education"
                ),

                course(
                    "EBS331D",
                    "English in Multilingual Context"
                ),

                course(
                    "EBS332D",
                    "Basic Procedures of Research in French"
                ),

                course(
                    "EBS340D",
                    "Islamic Studies"
                ),

                course(
                    "EBS363D",
                    "Studies in Literature – Gender and Writing"
                ),

                course(
                    "EBS379D",
                    "Literature: Gender Issues in Ghanaian Language Literary Texts (Language variants)"
                ),

                course(
                    "ENG304D",
                    "English in Multi-Lingual Context"
                ),

                course(
                    "ENG309D",
                    "Aspects of the Grammar of English"
                ),

                course(
                    "ENG314D",
                    "Studies in Shakespeare"
                ),

                course(
                    "FRE318D",
                    "Intermediate General Linguistics"
                ),

                course(
                    "GHL314D",
                    "Language Usage – Intermediate Translation (Language variants)"
                ),

                course(
                    "GHL316D",
                    "Phonology of the Ghanaian Language (Language variants)"
                ),

                course(
                    "HIS317D",
                    "Colonial Ghana, 1874–1957"
                ),

                course(
                    "RLH303D",
                    "Biblical Hermeneutics"
                ),

                course(
                    "RLH325D",
                    "Gospels and Acts"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "EMA302D",
                    "Curriculum Studies in Mathematics Education"
                ),

                course(
                    "EMA311D",
                    "Implementing Secondary School Mathematics Curriculum"
                ),

                course(
                    "EMA312D",
                    "Pedagogical Content Knowledge in Mathematics"
                ),

                course(
                    "EMA325D",
                    "Computer Application in Mathematics"
                ),

                course(
                    "MAT302D",
                    "Advanced Calculus II"
                )

            ],



            "B.Ed Science": [

                course(
                    "CHE310D",
                    "Practical Physical/Inorganic Chemistry II"
                ),

                course(
                    "CHE312D",
                    "Transition Elements"
                ),

                course(
                    "CHE318D",
                    "Organic Reaction Mechanism I"
                ),

                course(
                    "CHE324D",
                    "Natural Products"
                ),

                course(
                    "EBS311D",
                    "General Biology Theory III"
                ),

                course(
                    "EBS311PD",
                    "General Biology Practical III"
                ),

                course(
                    "ESC399D",
                    "Research Methods in Science Education"
                ),

                course(
                    "PHY302D",
                    "Classical Mechanics"
                ),

                course(
                    "PHY304D",
                    "Physical Optics"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS321D",
                    "Memory"
                ),

                course(
                    "BPS322D",
                    "HIV/AIDS Education"
                ),

                course(
                    "BPS326D",
                    "Clinical Psychology"
                ),

                course(
                    "BPS327D",
                    "Psychology of Deviance"
                ),

                course(
                    "BPS328D",
                    "Industrial Psychology"
                ),

                course(
                    "BPS399D",
                    "Research Methods"
                )

            ],



            "Information Technology": [

                course(
                    "EBS372D",
                    "PC Maintenance and Troubleshooting Computers"
                ),

                course(
                    "EIT302D",
                    "Designing Instructional Materials with Computers"
                ),

                course(
                    "EIT399D",
                    "Research Methods in IT Education"
                ),

                course(
                    "INF302D",
                    "Unix Programming Environment"
                ),

                course(
                    "INF308D",
                    "Network Computing II"
                ),

                course(
                    "INF311D",
                    "Data Structures"
                ),

                course(
                    "INF312D",
                    "Human Computer Interface"
                ),

                course(
                    "INF399D",
                    "Research Methods"
                )

            ],



            "B.Com Accounting / Management": [

                course(
                    "ACC302D",
                    "Cost and Management Accounting II"
                ),

                course(
                    "ADM304D",
                    "Event Management"
                ),

                course(
                    "ADM306D",
                    "Electronic Commerce"
                ),

                course(
                    "EMG303D",
                    "Management Information Systems II"
                ),

                course(
                    "EMG304D",
                    "Office Management II"
                ),

                course(
                    "ENT302D",
                    "Introduction to Entrepreneurship"
                ),

                course(
                    "SBU302D",
                    "Statistics for Business Decisions"
                ),

                course(
                    "SBU304D",
                    "Business Research Methods"
                ),

                course(
                    "SBU308D",
                    "Applied Macroeconomics"
                )

            ],



            "B.Com Human Resource Management": [

                course(
                    "HUM302D",
                    "Training and Development"
                ),

                course(
                    "HUM306D",
                    "Industrial and Organisational Psychology"
                ),

                course(
                    "HUM308D",
                    "Change Management"
                )

            ],



            "B.Com Finance": [

                course(
                    "FIN302D",
                    "Financial Management of Banks"
                ),

                course(
                    "FIN306D",
                    "Corporate Finance"
                ),

                course(
                    "SBU306D",
                    "Business Finance"
                )

            ],



            "Procurement & Supply Chain Management": [

                course(
                    "PCM304D",
                    "Policy and Legal Aspects of Procurement"
                ),

                course(
                    "PCM306D",
                    "Public Sector Procurement"
                ),

                course(
                    "PCM308D",
                    "Logistics and Freight Transport Management"
                ),

                course(
                    "PCM310D",
                    "Ports and Customs Operations"
                )

            ],



            "Marketing": [

                course(
                    "MKT306D",
                    "Sales Management"
                ),

                course(
                    "MKT308D",
                    "Customer Relationship Management"
                ),

                course(
                    "MKT316D",
                    "Sports Marketing"
                )

            ],



            "BA Social Behaviour & Conflict Management": [

                course(
                    "SBC304D",
                    "Social Structure of Ghana"
                ),

                course(
                    "SBC305D",
                    "Understanding Peace and Peace Building"
                ),

                course(
                    "SBC309D",
                    "Social Statistics"
                ),

                course(
                    "SBC310D",
                    "Theory of Social Conflict"
                ),

                course(
                    "SBC311D",
                    "Deviance and Social Problems"
                )

            ],



            "Geography / Social Sciences": [

                course(
                    "ECO320D",
                    "Macroeconomic Theory"
                ),

                course(
                    "ESS302D",
                    "Teaching Economics"
                ),

                course(
                    "GEO302D",
                    "Climatology and Hydrology"
                ),

                course(
                    "GEO327D",
                    "Introduction to Biogeography and Soils"
                )

            ],



            "Visual / Communication Design": [

                course(
                    "ECD301D",
                    "Design Commentary and Philosophy of Art"
                ),

                course(
                    "ECD304D",
                    "Publication Design"
                )

            ]

        },



        /* =========================
           LEVEL 400
           ========================= */


        "400": {


            "Education / Teacher Education": [

                course(
                    "EDF401D",
                    "History and Management of Education in Ghana"
                ),

                course(
                    "EBS407D",
                    "Professional Practice and Ethics in Teaching"
                ),

                course(
                    "EBS459D",
                    "Planning and Administering ECE Programmes"
                ),

                course(
                    "EPS403D",
                    "Guidance and Counselling"
                ),

                course(
                    "EPS407D",
                    "Professional Practice and Ethics in Teaching"
                ),

                course(
                    "EPS444D",
                    "Teacher Professional Enhancement"
                ),

                course(
                    "EPS461D",
                    "Characteristics and Education of Children with Learning Disabilities"
                )

            ],



            "B.Ed Arts": [

                course(
                    "EAS407D",
                    "Culture of Teaching French as a Foreign Language"
                ),

                course(
                    "EAS408D",
                    "Psychological Perspectives in Religious Studies"
                ),

                course(
                    "EBS402D",
                    "Children's Literature"
                ),

                course(
                    "EBS403D",
                    "Colonization and Nationalism in Africa"
                ),

                course(
                    "EBS405D",
                    "Critical Issues in Religious and Moral Education"
                ),

                course(
                    "EBS409D",
                    "French Syntax Analysis"
                ),

                course(
                    "EBS411D",
                    "Ghanaian Language and Culture: Translation – Advanced (Language variants)"
                ),

                course(
                    "EBS412D",
                    "History of Ghana from Ancient Times to the Present"
                ),

                course(
                    "EBS414D",
                    "Intermediate French Linguistics"
                ),

                course(
                    "EBS423D",
                    "Varieties of English and Advanced Writing Skills"
                ),

                course(
                    "EBS432D",
                    "Literary Criticism"
                ),

                course(
                    "ENG402D",
                    "Varieties of English and Advanced Writing Skills"
                ),

                course(
                    "ENG405D",
                    "Error and Contrastive Analysis"
                ),

                course(
                    "ENG441D",
                    "Survey of English Literature"
                ),

                course(
                    "FRE418D",
                    "Advanced French Literary History"
                ),

                course(
                    "FRE420D",
                    "French Syntax Analysis"
                ),

                course(
                    "GHL416D",
                    "Ghanaian Language Usage – Comprehension and Summary (Language variants)"
                ),

                course(
                    "HIS411D",
                    "Latin America from 1825"
                )

            ],



            "B.Ed Mathematics": [

                course(
                    "EBS424D",
                    "Vectors and Mechanics"
                ),

                course(
                    "EMA402D",
                    "Teaching Problem Solving in Mathematics"
                ),

                course(
                    "EMA404D",
                    "Vectors and Mechanics"
                ),

                course(
                    "EMA406D",
                    "Advanced Study of Teaching Elementary School Mathematics"
                ),

                course(
                    "MAT405D",
                    "Ordinary Differential Equations"
                ),

                course(
                    "MAT442D",
                    "Methods of Teaching JHS Mathematics II"
                )

            ],



            "B.Ed Science": [

                course(
                    "CHE425D",
                    "Aromatic and Heterocyclic Chemistry"
                ),

                course(
                    "CHE427D",
                    "Electrochemistry"
                ),

                course(
                    "EBS408D",
                    "Electricity and Magnetism – Theory"
                ),

                course(
                    "EBS408PD",
                    "Electricity and Magnetism – Practical"
                ),
               
                course(
                    "EBS410D",
                    "Electronics – Theory"
                ),

                course(
                    "EBS410PD",
                    "Electronics – Practical"
                ),

                course(
                    "EBS417D",
                    "Biotechnology"
                ),

                course(
                    "EBS418D",
                    "Advanced Organic Chemistry"
                ),

                course(
                    "ESC401D",
                    "Methods of Teaching Integrated Science"
                ),

                course(
                    "ESC402D",
                    "Issues in Science Education"
                ),

                course(
                    "PHY402D",
                    "Quantum Mechanics"
                ),

                course(
                    "PHY404D",
                    "Nuclear Physics"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS412D",
                    "Health Psychology"
                ),

                course(
                    "BPS414D",
                    "Counselling Skills and Techniques"
                ),

                course(
                    "BPS416D",
                    "Organisational Psychology"
                ),

                course(
                    "BPS418D",
                    "Psychology of Gender"
                )

            ],



            "Information Technology": [

                course(
                    "EIT402D",
                    "Methods of Teaching ICT"
                ),

                course(
                    "EIT404D",
                    "Management of ICT Resources in Schools"
                ),

                course(
                    "INF402D",
                    "Management Information Systems"
                ),

                course(
                    "INF404D",
                    "Systems Administration"
                ),

                course(
                    "INF406D",
                    "Software Engineering"
                ),

                course(
                    "INF408D",
                    "Artificial Intelligence"
                )

            ],



            "B.Com Accounting": [

                course(
                    "ACC402D",
                    "Advanced Financial Reporting"
                ),

                course(
                    "ACC404D",
                    "Auditing and Assurance"
                ),

                course(
                    "ACC406D",
                    "Taxation"
                )

            ],



            "B.Com Management": [

                course(
                    "ADM404D",
                    "Project Management"
                ),

                course(
                    "ADM405D",
                    "Database Management"
                ),

                course(
                    "SBU403D",
                    "Self-Management Skills"
                ),

                course(
                    "SBU404D",
                    "Strategic Management"
                )

            ],



            "B.Com Human Resource Management": [

                course(
                    "HUM402D",
                    "Compensation Management"
                ),

                course(
                    "HUM404D",
                    "Industrial and Employment Relations"
                ),

                course(
                    "HUM406D",
                    "Human Resource Development"
                )

            ],



            "B.Com Finance": [

                course(
                    "FIN402D",
                    "Investment Analysis and Portfolio Management"
                ),

                course(
                    "FIN404D",
                    "International Finance"
                ),

                course(
                    "FIN406D",
                    "Financial Risk Management"
                ),

                course(
                    "FIN407D",
                    "Public Finance"
                )

            ],



            "Procurement & Supply Chain Management": [

                course(
                    "PCM402D",
                    "Procurement Audit and Investigation"
                ),

                course(
                    "PCM404D",
                    "Strategic Supply Chain Management"
                ),

                course(
                    "PCM406D",
                    "Contract Management"
                ),

                course(
                    "PCM408D",
                    "Sustainable Procurement"
                )

            ],



            "Marketing": [

                course(
                    "MKT402D",
                    "Marketing Research"
                ),

                course(
                    "MKT404D",
                    "Strategic Marketing"
                ),

                course(
                    "MKT406D",
                    "International Marketing"
                ),

                course(
                    "MKT408D",
                    "Digital Marketing"
                )

            ],



            "BA Social Behaviour & Conflict Management": [

                course(
                    "SBC402D",
                    "Conflict Transformation"
                ),

                course(
                    "SBC404D",
                    "Conflict Management"
                ),

                course(
                    "SBC406D",
                    "Human Rights and Conflict"
                ),

                course(
                    "SBC408D",
                    "Peace and Security Studies"
                )

            ],



            "Geography / Social Sciences": [

                course(
                    "ECO402D",
                    "Development Economics"
                ),

                course(
                    "GEO402D",
                    "Regional Development"
                ),

                course(
                    "GEO404D",
                    "Environmental Management"
                ),

                course(
                    "SOC402D",
                    "Sociology of Development"
                )

            ],



            "Visual / Communication Design": [

                course(
                    "ECD402D",
                    "Advertising Design"
                ),

                course(
                    "ECD404D",
                    "Corporate Identity Design"
                ),

                course(
                    "ECD406D",
                    "Advanced Publication Design"
                )

            ]

        }

    }

};



/* =========================================================
   SWITCH DATA
   ========================================================= */


const switchData = {


    "ACCOUNTING & MANAGEMENT": [

        course(
            "SW-ACC101",
            "Accounting & Management Modules",
            "https://codemodules.dedyn.io"
        )

    ],


    "ARTS": [

        course(
            "SW-ART101",
            "Arts Modules"
        )

    ],


    "HOME ECONOMICS": [

        course(
            "SW-HEC101",
            "Home Economics Modules"
        )

    ],


    "INFORMATION TECHNOLOGY": [

        course(
            "SW-INF101",
            "Information Technology Modules"
        )

    ],


    "MATHEMATICS": [

        course(
            "SW-MATH101",
            "Mathematics Modules"
        )

    ],


    "SCIENCE": [

        course(
            "SW-SCI101",
            "Science Modules"
        )

    ],


    "SOCIAL SCIENCES": [

        course(
            "SW-SES101",
            "Social Sciences Modules"
        )

    ],


    "SOCIAL STUDIES": [

        course(
            "SW-SST101",
            "Social Studies Modules"
        )

    ]

};



/* =========================================================
   LABELS / STATE
   ========================================================= */


const semesterLabels = {
    firstSemester: "First Semester",
    secondSemester: "Second Semester"
};


const semesterApiKeys = {
    firstSemester: "first",
    secondSemester: "second"
};


let selectedSemester = null;
let selectedLevel = null;
let selectedProgramme = null;
let navigationType = "undergraduate";
let selectedDepartment = null;



/* =========================================================
   BASIC HELPERS
   ========================================================= */


function isPlaceholderLink(link) {

    return (
        !link ||
        link === PLACEHOLDER_LINK ||
        link.includes(
            "YOUR-NEXTCLOUD-LINK-HERE"
        )
    );

}


function showView(viewId) {

    document
        .querySelectorAll(".view")
        .forEach(view => {
            view.classList.remove("active");
        });


    const target =
        document.getElementById(viewId);


    if (target) {
        target.classList.add("active");
    }


    updatePortalNavigation(viewId);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* Student-friendly navigation; no changes to the course catalogue. */
function portalGoBackFrom(viewId) {
    if (navigationType === "switch") return goHome();
    if (viewId === "departmentView") return goHome();
    if (viewId === "programmeView") return selectedSemester ? showDepartments(selectedSemester) : goHome();
    if (viewId === "levelView") return selectedDepartment ? showDepartmentProgrammes(selectedDepartment) : goHome();
    if (viewId === "specialisationView") return selectedProgramme ? showProgrammeLevels(selectedProgramme) : goHome();
    if (viewId === "courseView") {
        if (selectedDepartment === "Business" && selectedSpecialisation) return showBusinessSpecialisations(selectedLevel);
        if (selectedDepartment === "Mathematics and Science" && selectedSpecialisation) return showMathsScienceOptions(selectedLevel);
        return selectedProgramme ? showProgrammeLevels(selectedProgramme) : goHome();
    }
    return goHome();
}
function updatePortalNavigation(viewId) {
    const main = document.querySelector("main.container");
    if (!main) return;
    let trail = document.getElementById("portalNavigationTrail");
    if (!trail) {
        trail = document.createElement("nav");
        trail.id = "portalNavigationTrail";
        trail.className = "portal-navigation-trail";
        trail.setAttribute("aria-label","Current course location");
        const firstView=document.getElementById("homeView");
        main.insertBefore(trail,firstView || main.firstChild);
        const css=document.createElement("style");
        css.textContent = ".portal-navigation-trail{display:flex;align-items:center;gap:8px;overflow-x:auto;white-space:nowrap;position:sticky;top:0;z-index:25;background:#fff;border:1px solid #e2e7f0;border-radius:12px;margin-bottom:22px;padding:12px 16px;box-shadow:0 3px 12px rgba(7,30,88,.05);scrollbar-width:thin}.portal-navigation-trail[hidden]{display:none}.portal-navigation-trail button{border:0;background:transparent;color:#0c3278;padding:5px 3px;font-weight:650;white-space:nowrap}.portal-navigation-trail button:hover,.portal-navigation-trail button:focus-visible{text-decoration:underline}.portal-navigation-trail .portal-current{font-weight:700;color:#172033}.portal-navigation-trail .portal-separator{color:#98a2b3}.portal-programme-filter{margin-bottom:18px;width:100%;padding:14px 16px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;color:#172033;font:inherit}.portal-programme-filter:focus{outline:2px solid #0c3278;outline-offset:1px}@media(max-width:600px){.portal-navigation-trail{padding:10px;gap:5px;font-size:13px}}";
        document.head.appendChild(css);
    }
    trail.replaceChildren();
    trail.hidden = viewId === "homeView";
    if (trail.hidden) return;
    const crumbs=[{label:"Home",click:() => goHome()}];
    if (navigationType === "switch") {
        crumbs.push({label:"SWITCH"});
        if (selectedProgramme) crumbs.push({label:selectedProgramme});
    } else {
        if (selectedSemester) crumbs.push({label:semesterLabels[selectedSemester] || "Semester",click:() => showDepartments(selectedSemester)});
        if (selectedDepartment) crumbs.push({label:selectedDepartment,click:() => showDepartmentProgrammes(selectedDepartment)});
        if (selectedProgramme) crumbs.push({label:selectedProgramme,click:() => showProgrammeLevels(selectedProgramme)});
        if (selectedLevel) crumbs.push({label:"Level "+selectedLevel,click:() => showProgrammeLevels(selectedProgramme)});
        if (selectedSpecialisation) crumbs.push({label:selectedSpecialisation,click:() => selectedDepartment==="Mathematics and Science"?showMathsScienceOptions(selectedLevel):showBusinessSpecialisations(selectedLevel)});
        const names={departmentView:"Departments",programmeView:"Programmes",levelView:"Choose Level",specialisationView:"Specialisations",courseView:"Courses",moduleResultsView:"Modules"};
        if (names[viewId]) crumbs.push({label:names[viewId]});
    }
    crumbs.forEach((item,i)=>{
        if(i){const sep=document.createElement("span");sep.className="portal-separator";sep.textContent="›";sep.setAttribute("aria-hidden","true");trail.appendChild(sep);}
        const last=i===crumbs.length-1;
        const part=document.createElement(last || !item.click ? "span" : "button");
        part.textContent=item.label;
        if(last){part.className="portal-current";part.setAttribute("aria-current","page");}
        else if(item.click){part.type="button";part.addEventListener("click",item.click);}
        trail.appendChild(part);
    });
    const back=document.querySelector("#"+viewId+" .back-btn");
    if (back && viewId!=="moduleResultsView"){
        const captions={departmentView:"← Back to Semesters",programmeView:"← Back to Departments",levelView:"← Back to Programmes",specialisationView:"← Back to Levels",courseView:"← Back to Previous Step"};
        back.textContent=captions[viewId] || "← Back";
        back.onclick=() => portalGoBackFrom(viewId);
    }
}
function prepareProgrammeFilter() {
    const list=document.getElementById("programmeList");
    if(!list || !list.parentNode) return;
    let input=document.getElementById("portalProgrammeFilter");
    if(!input){
        input=document.createElement("input");
        input.id="portalProgrammeFilter";
        input.type="search";
        input.className="portal-programme-filter";
        input.placeholder="Find your programme or subject combination…";
        input.setAttribute("aria-label","Filter available programmes");
        list.parentNode.insertBefore(input,list);
    }
    input.value="";
    input.oninput=()=>{
        const query=input.value.trim().toLocaleLowerCase();
        list.querySelectorAll(".programme-card").forEach(card=>{card.hidden=!card.textContent.toLocaleLowerCase().includes(query);});
    };
}
function readPortalHashState(){
    const p=new URLSearchParams(window.location.hash.replace(/^#/,""));
    const view=p.get("view");
    if(!["departments","programmes","levels","specialisations","businessCourses","educationCourses","mathsScienceOptions","mathsScienceCourses","courses"].includes(view)) return null;
    const semester=p.get("semester");
    if(!semesterLabels[semester]) return null;
    return {portal:true,view,navigationType:p.get("type")==="switch"?"switch":"undergraduate",semester,
        department:p.get("department"),programme:p.get("programme"),level:p.get("level"),specialisation:p.get("specialisation")};
}

function escapeHtml(value = "") {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}



/* =========================================================
   BROWSER HISTORY NAVIGATION
   ========================================================= */

let isRestoringHistory = false;


/*
Build a unique URL hash for each portal screen.
*/

function getPortalHistoryUrl(view) {

    const params =
        new URLSearchParams();

    params.set("view", view);

    if (navigationType) {
        params.set(
            "type",
            navigationType
        );
    }

    if (selectedSemester) {
        params.set(
            "semester",
            selectedSemester
        );
    }

    if (selectedLevel) {
        params.set(
            "level",
            selectedLevel
        );
    }

    if (selectedProgramme) {
        params.set(
            "programme",
            selectedProgramme
        );
    }
    if (selectedDepartment) params.set("department", selectedDepartment);
    if (selectedSpecialisation) params.set("specialisation", selectedSpecialisation);

    return `#${params.toString()}`;
}


/*
Store a portal screen in browser history.
*/

function savePortalHistory(view) {

    if (isRestoringHistory) {
        return;
    }

    const state = {
        portal: true,
        view: view,
        navigationType: navigationType,
        semester: selectedSemester,
        level: selectedLevel,
        programme: selectedProgramme,
        department: selectedDepartment,
        specialisation: selectedSpecialisation
    };

    window.history.pushState(
        state,
        "",
        getPortalHistoryUrl(view)
    );
}


/*
Set the initial Home history entry.
*/

function replacePortalHistory(view) {

    const state = {
        portal: true,
        view: view,
        navigationType: navigationType,
        semester: selectedSemester,
        level: selectedLevel,
        programme: selectedProgramme,
        department: selectedDepartment,
        specialisation: selectedSpecialisation
    };

    window.history.replaceState(
        state,
        "",
        getPortalHistoryUrl(view)
    );
}


/*
Restore a portal screen when Back or Forward is pressed.
*/

function restorePortalHistory(state) {

    if (!state || !state.portal) {
        return;
    }

    isRestoringHistory = true;

    navigationType =
        state.navigationType ||
        "undergraduate";

    selectedSemester =
        state.semester || null;

    selectedLevel =
        state.level || null;

    selectedProgramme =
        state.programme || null;
    selectedDepartment = state.department || null;
    selectedSpecialisation = state.specialisation || null;


    if (state.view === "home") {
        showView("homeView");
    } else if (state.view === "departments" && selectedSemester) {
        showDepartments(selectedSemester, false);
    } else if (state.view === "programmes" && selectedSemester && selectedDepartment) {
        showDepartmentProgrammes(selectedDepartment, false);
    } else if (state.view === "levels" && selectedSemester && selectedProgramme) {
        showProgrammeLevels(selectedProgramme, false);
    } else if (state.view === "levels" && selectedSemester) {
        showLevels(selectedSemester, false);
    } else if (state.view === "specialisations" && selectedSemester && selectedProgramme && selectedLevel) {
        showBusinessSpecialisations(selectedLevel, false);
    } else if (state.view === "businessCourses" && selectedSemester && selectedProgramme && selectedLevel && selectedSpecialisation) {
        showBusinessCourseCards(selectedSpecialisation, false);
    } else if (state.view === "mathsScienceOptions" && selectedDepartment === "Mathematics and Science" && selectedProgramme && selectedLevel) {
        showMathsScienceOptions(selectedLevel, false);
    } else if (state.view === "mathsScienceCourses" && selectedDepartment === "Mathematics and Science" && selectedProgramme && selectedLevel) {
        showMathsScienceCourseCards(selectedSpecialisation, false);
    } else if (state.view === "educationCourses" && selectedSemester === "firstSemester" && selectedProgramme && selectedLevel) {
        showEducationCourseCards(selectedProgramme, false);
    } else if (state.view === "programmes" && selectedSemester && selectedLevel) {
        showProgrammes(selectedLevel, false);
    } else if (state.view === "courses" && navigationType === "switch" && selectedProgramme) {
        showSwitchCourses(selectedProgramme, false);
    } else if (state.view === "courses" && selectedSemester && selectedLevel && selectedProgramme) {
        showCourses(selectedProgramme, false);
    } else {
        showView("homeView");
    }

    isRestoringHistory = false;
}


/*
Browser Back / Forward.
*/

window.addEventListener(
    "popstate",
    event => {

        restorePortalHistory(
            event.state
        );

    }
);

function goHome(
    addHistory = true
) {

    selectedSemester = null;
    selectedLevel = null;
    selectedProgramme = null;
    selectedDepartment = null;
    selectedSpecialisation = null;
    navigationType = "undergraduate";

    showView("homeView");

    if (addHistory) {
        savePortalHistory("home");
    }

}

function backToLevels() {

    if (window.history.length > 1) {
        window.history.back();
        return;
    }

    goHome();

}


function backToProgrammes() {

    if (window.history.length > 1) {
        window.history.back();
        return;
    }

    goHome();

}


function backToCourseList() {

    if (window.history.length > 1) {
        window.history.back();
        return;
    }

    goHome();

}


/* =========================================================
   UNDERGRADUATE NAVIGATION
   ========================================================= */

/* =========================================================
   DEPARTMENT SELECTION
   ========================================================= */

const undergraduateDepartments = [
    "Business",
    "Education",
    "Mathematics and Science",
    "Arts and Social Sciences"
];

/* Only approved course inventories appear to students.
   The older undergraduateData entries are reference data, not published modules. */
const publishedDepartmentMap = Object.freeze({
    firstSemester: ["Business", "Education", "Mathematics and Science"],
    secondSemester: []
});
const legacyUndergraduateCataloguePublished = false;
function isPublishedDepartment(semester, department) {
    return (publishedDepartmentMap[semester] || []).includes(department);
}


function showDepartments(
    semesterKey,
    addHistory = true
) {

    if (!undergraduateData[semesterKey]) {
        return;
    }

    navigationType = "undergraduate";

    selectedSemester = semesterKey;
    selectedLevel = null;
    selectedProgramme = null;
    selectedDepartment = null;
    selectedSpecialisation = null;

    const heading =
        document.getElementById("departmentHeading");

    const list =
        document.getElementById("departmentList");

    if (!list) {
        return;
    }

    if (heading) {
        heading.textContent =
            `${semesterLabels[semesterKey]} · Select Department`;
    }

    list.innerHTML = "";

    undergraduateDepartments.forEach(department => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "programme-card";

        const published = isPublishedDepartment(semesterKey, department);
        if (!published) {
            card.disabled = true;
            card.style.cursor = "not-allowed";
            card.style.opacity = ".65";
            card.setAttribute("aria-label", department + " — modules coming soon");
        }

        const title = document.createElement("h3");
        title.textContent = department;

        const action = document.createElement("span");
        action.textContent = published
            ? "View Programmes →"
            : "Coming Soon · Modules not yet published";

        card.append(title, action);

        if (published) card.addEventListener("click", () => {
            showDepartmentProgrammes(department);
        });

        list.appendChild(card);

    });

    showView("departmentView");

    if (addHistory) {
        savePortalHistory("departments");
    }

}



/* =========================================================
   MATHS & SCIENCE — STAGE 1
   This catalogue stays on the development branch pending
   live Nextcloud path validation and user acceptance.
   ========================================================= */
const mathsScienceCourseCatalogue = {"B.Ed. ICT":{"100":[{"title":"Software Suite","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Software Suite.pdf","filename":"Software Suite.pdf"},{"title":"Communicative Skills 1","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Communicative_Skills_1.pdf","filename":"Communicative_Skills_1.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /MAT101 Algebra and Trigonometry.pdf","filename":"MAT101 Algebra and Trigonometry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Social and Philosophical Foundations of Education.pdf","filename":"Social and Philosophical Foundations of Education.pdf"},{"title":"Info Lit","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Info_Lit.pdf","filename":"Info_Lit.pdf"},{"title":"Introduction to Business 1","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Introduction_to_Business_1.pdf","filename":"Introduction_to_Business_1.pdf"},{"title":"Core-African Studies","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Core-African_Studies.pdf","filename":"Core-African_Studies.pdf"},{"title":"ECD 102D Lettering and Typography","code":"ECD 102D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ECD 102D Lettering and Typography.pdf","filename":"ECD 102D Lettering and Typography.pdf"},{"title":"INF109D Mathematics For Computing I","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /INF109D_Mathematics_For_Computing_I.pdf","filename":"INF109D_Mathematics_For_Computing_I.pdf"},{"title":"EGA 103D Basic Desing and Colour Psychology","code":"EGA 103D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /EGA 103D Basic Desing and Colour Psychology.pdf","filename":"EGA 103D Basic Desing and Colour Psychology.pdf"},{"title":"Introduction to Computing","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /Introduction_to_Computing.pdf","filename":"Introduction_to_Computing.pdf"},{"title":"ACC 021D Principles of Accounting 1","code":"ACC 021D","units":[{"label":"Unit 1","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ACC 021D Principles of Accounting 1/Unit 1 ACC 021D Principles of Accounting 1.pdf"},{"label":"Unit 2","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ACC 021D Principles of Accounting 1/Unit 2 ACC 021D Principles of Accounting 1.pdf"},{"label":"Unit 3","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ACC 021D Principles of Accounting 1/Unit 3 ACC 021D Principles of Accounting 1.pdf"},{"label":"Unit 4","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ACC 021D Principles of Accounting 1/Unit 4 ACC 021D Principles of Accounting 1.pdf"},{"label":"Unit 5","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ACC 021D Principles of Accounting 1/Unit 5 ACC 021D Principles of Accounting 1.pdf"},{"label":"Unit 6","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 100 /ACC 021D Principles of Accounting 1/Unit 6 ACC 021D Principles of Accounting 1.pdf"}]}],"200":[{"title":"Core-Educating the special individual","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Core-Educating_the_special_individual.pdf","filename":"Core-Educating_the_special_individual.pdf"},{"title":"EBS 252D Educating Individual with Diverse Needs","code":"EBS 252D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /EBS 252D Educating Individual with Diverse Needs.pdf","filename":"EBS 252D Educating Individual with Diverse Needs.pdf"},{"title":"INF 203D Foundations of Programming","code":"INF 203D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /INF 203D Foundations of Programming.pdf","filename":"INF 203D Foundations of Programming.pdf"},{"title":"Intermediate Accounting I Intermediate Accounting I","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Intermediate Accounting I Intermediate Accounting I.pdf","filename":"Intermediate Accounting I Intermediate Accounting I.pdf"},{"title":"INF 215 Databases  Management I A","code":"INF 215","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /INF 215 Databases  Management I A.pdf","filename":"INF 215 Databases  Management I A.pdf"},{"title":"further calculus","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /further calculus.pdf","filename":"further calculus.pdf"},{"title":"EBS 168J Learning Theories for Teachinhg Computer edited","code":"EBS 168J","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /EBS 168J Learning Theories for Teachinhg Computer edited.pdf","filename":"EBS 168J Learning Theories for Teachinhg Computer edited.pdf"},{"title":"Principles of Management","code":"","units":[{"label":"Unit 1","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Principles of Management/Unit 1 Principles of Management 1.pdf"},{"label":"Unit 2","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Principles of Management/Unit 2 Principles of Management 1.pdf"},{"label":"Unit 3","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Principles of Management/Unit 3 Principles of Management 1.pdf"},{"label":"Unit 4","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Principles of Management/Unit 4 Principles of Management 1.pdf"},{"label":"Unit 5","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Principles of Management/Unit 5 Principles of Management 1.pdf"},{"label":"Unit 6","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 200 /Principles of Management/Unit 6 Principles of Management 1.pdf"}]}],"300":[{"title":"Designing  Instructional Materials Using ICT Tools edited","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /Designing  Instructional Materials Using ICT Tools edited.pdf","filename":"Designing  Instructional Materials Using ICT Tools edited.pdf"},{"title":"Advanced Calculus I","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /Advanced_Calculus_I.pdf","filename":"Advanced_Calculus_I.pdf"},{"title":"INF 307D Software Engineering Edited","code":"INF 307D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /INF 307D Software Engineering Edited.pdf","filename":"INF 307D Software Engineering Edited.pdf"},{"title":"INF 313D Advanced Website Develop Edited","code":"INF 313D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /INF 313D Advanced Website Develop Edited.pdf","filename":"INF 313D Advanced Website Develop Edited.pdf"},{"title":"INF 309D Information Systems Mgt","code":"INF 309D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /INF 309D Information Systems Mgt.pdf","filename":"INF 309D Information Systems Mgt.pdf"},{"title":"INF 305D Network Computing 1","code":"INF 305D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /INF 305D Network Computing 1.pdf","filename":"INF 305D Network Computing 1.pdf"},{"title":"COST AND MANAGEMENT ACCOUNTING 1","code":"","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /COST AND MANAGEMENT ACCOUNTING 1.pdf","filename":"COST AND MANAGEMENT ACCOUNTING 1.pdf"},{"title":"BUS 305D Human Resource Management (Revised)","code":"BUS 305D","units":[{"label":"Unit 1","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /BUS 305D Human Resource Management (Revised)/Unit 1 BUS 305D Human Resource Mgt. (Revised) 2016.pdf"},{"label":"Unit 2","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /BUS 305D Human Resource Management (Revised)/Unit 2 BUS 305D Human Resource Mgt. (Revised) 2016.pdf"},{"label":"Unit 3","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /BUS 305D Human Resource Management (Revised)/Unit 3 BUS 305D Human Resource Mgt. (Revised) 2016.pdf"},{"label":"Unit 4","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /BUS 305D Human Resource Management (Revised)/Unit 4 BUS 305D Human Resource Mgt. (Revised) 2016.pdf"},{"label":"Unit 5","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /BUS 305D Human Resource Management (Revised)/Unit 5 BUS 305D Human Resource Mgt. (Revised) 2016.pdf"},{"label":"Unit 6","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 300 /BUS 305D Human Resource Management (Revised)/Unit 6 BUS 305D Human Resource Mgt. (Revised) 2016.pdf"}]}],"400":[{"title":"INF 401D Intro to Multimedia Computing","code":"INF 401D","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (ICT)/LEVEL 400/INF 401D Intro to Multimedia Computing.pdf","filename":"INF 401D Intro to Multimedia Computing.pdf"}]},"B.Ed. Science":{"100":{"PHYSICS & CHEMISTRY OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Communicative_Skills_1.pdf"},{"title":"CHE 109 Practical Gen. Chemistry","code":"CHE 109","filename":"CHE 109 Practical Gen. Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/CHE 109 Practical Gen. Chemistry.pdf"},{"title":"EBS 115P Gen Chem Practical I","code":"","filename":"EBS_115P_Gen_Chem_Practical_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/EBS_115P_Gen_Chem_Practical_I.pdf"},{"title":"EBS 132 General Chemistry","code":"","filename":"EBS_132_General_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/EBS_132_General_Chemistry.pdf"},{"title":"GENERAL PHYSICS PRACTICAL I  PHY 103","code":"PHY 103","filename":"GENERAL PHYSICS PRACTICAL I  PHY 103.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/GENERAL PHYSICS PRACTICAL I  PHY 103.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"GENERAL PHYSICS I","code":"","filename":"GENERAL_PHYSICS_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/GENERAL_PHYSICS_I.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Core-African_Studies.pdf"}],"PHYSICS & MATHS OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Communicative_Skills_1.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/MAT101 Algebra and Trigonometry.pdf"},{"title":"EBS 142P General Physics Practical 1 editted","code":"","filename":"EBS_142P_General_Physics_Practical_1_editted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/EBS_142P_General_Physics_Practical_1_editted.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"GENERAL PHYSICS I","code":"","filename":"GENERAL_PHYSICS_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/GENERAL_PHYSICS_I.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Core-African_Studies.pdf"}],"BIOLOGY & CHEMISTRY":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Communicative_Skills_1.pdf"},{"title":"CHE 109 Practical Gen. Chemistry","code":"CHE 109","filename":"CHE 109 Practical Gen. Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/CHE 109 Practical Gen. Chemistry.pdf"},{"title":"EBS 132 General Chemistry","code":"","filename":"EBS_132_General_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/EBS_132_General_Chemistry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Social and Philosophical Foundations of Education.pdf"},{"title":"Diversity of Living Org","code":"","filename":"Diversity_of_Living_Org.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Diversity_of_Living_Org.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Core-African_Studies.pdf"}],"BIOLOGY & PHYSICS":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Communicative_Skills_1.pdf"},{"title":"EBS 142P General Physics Practical 1 editted","code":"","filename":"EBS_142P_General_Physics_Practical_1_editted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/EBS_142P_General_Physics_Practical_1_editted.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Social and Philosophical Foundations of Education.pdf"},{"title":"Diversity of Living Org","code":"","filename":"Diversity_of_Living_Org.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Diversity_of_Living_Org.pdf"},{"title":"GENERAL PHYSICS I","code":"","filename":"GENERAL_PHYSICS_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/GENERAL_PHYSICS_I.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Core-African_Studies.pdf"}],"CHEMISTRY & BIOLOGY OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Communicative_Skills_1.pdf"},{"title":"CHE 109 Practical Gen. Chemistry","code":"CHE 109","filename":"CHE 109 Practical Gen. Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/CHE 109 Practical Gen. Chemistry.pdf"},{"title":"EBS 132 General Chemistry","code":"","filename":"EBS_132_General_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/EBS_132_General_Chemistry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"Diversity of Living Org","code":"","filename":"Diversity_of_Living_Org.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Diversity_of_Living_Org.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Core-African_Studies.pdf"}],"CHEMISTRY & MATHS  OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Communicative_Skills_1.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/MAT101 Algebra and Trigonometry.pdf"},{"title":"CHE 109 Practical Gen. Chemistry","code":"CHE 109","filename":"CHE 109 Practical Gen. Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/CHE 109 Practical Gen. Chemistry.pdf"},{"title":"EBS 132 General Chemistry","code":"","filename":"EBS_132_General_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/EBS_132_General_Chemistry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Core-African_Studies.pdf"}],"CHEMISTRY & PHYSICS OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Communicative_Skills_1.pdf"},{"title":"CHE 109 Practical Gen. Chemistry","code":"CHE 109","filename":"CHE 109 Practical Gen. Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/CHE 109 Practical Gen. Chemistry.pdf"},{"title":"EBS 142P General Physics Practical 1 editted","code":"","filename":"EBS_142P_General_Physics_Practical_1_editted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/EBS_142P_General_Physics_Practical_1_editted.pdf"},{"title":"EBS 132 General Chemistry","code":"","filename":"EBS_132_General_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/EBS_132_General_Chemistry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"GENERAL PHYSICS I","code":"","filename":"GENERAL_PHYSICS_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/GENERAL_PHYSICS_I.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Core-African_Studies.pdf"}],"PHYSICS & BIOLOGY OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Communicative_Skills_1.pdf"},{"title":"EBS 142P General Physics Practical 1 editted","code":"","filename":"EBS_142P_General_Physics_Practical_1_editted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/EBS_142P_General_Physics_Practical_1_editted.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"Diversity of Living Org","code":"","filename":"Diversity_of_Living_Org.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Diversity_of_Living_Org.pdf"},{"title":"GENERAL PHYSICS I","code":"","filename":"GENERAL_PHYSICS_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/GENERAL_PHYSICS_I.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Core-Information_Literacy_skills.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Core-African_Studies.pdf"}]},"200":{"PHYSICS & CHEMISTRY OPTION":[{"title":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical)","code":"PHY 207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"CHE 207D Pract. Physical Inorganic Chemistry I","code":"CHE 207D","filename":"CHE 207D Pract. Physical Inorganic Chemistry I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/CHE 207D Pract. Physical Inorganic Chemistry I.pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/ESC 306D Science, Technology & Society.pdf"},{"title":"ESC 210D Prin. & Meth. of Teaching SHS Physics formatted","code":"ESC 210D","filename":"ESC 210D Prin. & Meth. of Teaching SHS Physics formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/ESC 210D Prin. & Meth. of Teaching SHS Physics formatted.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/CRITICAL_THINKING_formatted.pdf"},{"title":"Prin.   Meth. of Teaching SHS Physics formatted","code":"","filename":"Prin.___Meth._of_Teaching_SHS_Physics_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Prin.___Meth._of_Teaching_SHS_Physics_formatted.pdf"},{"title":"Physical Chemistry","code":"","filename":"Physical_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Physical_Chemistry.pdf"},{"title":"Newtonian Mechanics (Theory)","code":"","filename":"Newtonian_Mechanics_(Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Newtonian_Mechanics_(Theory).pdf"},{"title":"Newtonian Mechanics (Practical)","code":"","filename":"Newtonian_Mechanics_(Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Newtonian_Mechanics_(Practical).pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Nature_of_Science.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY OPTION/Core-Educating_the_special_individual.pdf"}],"PHYSICS & MATHS OPTION":[{"title":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical)","code":"PHY 207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/ESC 306D Science, Technology & Society.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/CRITICAL_THINKING_formatted.pdf"},{"title":"Prin.   Meth. of Teaching SHS Physics formatted","code":"","filename":"Prin.___Meth._of_Teaching_SHS_Physics_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Prin.___Meth._of_Teaching_SHS_Physics_formatted.pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/further calculus.pdf"},{"title":"Newtonian Mechanics (Theory)","code":"","filename":"Newtonian_Mechanics_(Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Newtonian_Mechanics_(Theory).pdf"},{"title":"Newtonian Mechanics (Practical)","code":"","filename":"Newtonian_Mechanics_(Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Newtonian_Mechanics_(Practical).pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Nature_of_Science.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHS OPTION/Core-Educating_the_special_individual.pdf"}],"CHEMISTRY & PHYSICS OPTION":[{"title":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical)","code":"PHY 207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"EBS 252D Educating Individual with Diverse Needs","code":"EBS 252D","filename":"EBS 252D Educating Individual with Diverse Needs.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/EBS 252D Educating Individual with Diverse Needs.pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/ESC 306D Science, Technology & Society.pdf"},{"title":"MAIN GROUP CHEMISTRY","code":"","filename":"MAIN_GROUP_CHEMISTRY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/MAIN_GROUP_CHEMISTRY.pdf"},{"title":"CHE 207D Pract. Physical Inorganic Chemistry I","code":"CHE 207D","filename":"CHE 207D Pract. Physical Inorganic Chemistry I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/CHE 207D Pract. Physical Inorganic Chemistry I.pdf"},{"title":"Methods of Teaching Chemistry","code":"","filename":"Methods of Teaching Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Methods of Teaching Chemistry.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/CRITICAL_THINKING_formatted.pdf"},{"title":"Physical Chemistry","code":"","filename":"Physical_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Physical_Chemistry.pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Nature_of_Science.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS OPTION/Core-Educating_the_special_individual.pdf"}],"PHYSICS & BIOLOGY OPTION":[{"title":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical)","code":"PHY 207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/ESC 306D Science, Technology & Society.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/CRITICAL_THINKING_formatted.pdf"},{"title":"Prin.   Meth. of Teaching SHS Physics formatted","code":"","filename":"Prin.___Meth._of_Teaching_SHS_Physics_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Prin.___Meth._of_Teaching_SHS_Physics_formatted.pdf"},{"title":"Newtonian Mechanics (Theory)","code":"","filename":"Newtonian_Mechanics_(Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Newtonian_Mechanics_(Theory).pdf"},{"title":"Newtonian Mechanics (Practical)","code":"","filename":"Newtonian_Mechanics_(Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Newtonian_Mechanics_(Practical).pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Nature_of_Science.pdf"},{"title":"Cell and Tissue","code":"","filename":"Cell_and_Tissue.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Cell_and_Tissue.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY OPTION/Core-Educating_the_special_individual.pdf"}],"CHEMISTRY & BIOLOGY OPTION":[{"title":"EBS 252D Educating Individual with Diverse Needs","code":"EBS 252D","filename":"EBS 252D Educating Individual with Diverse Needs.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/EBS 252D Educating Individual with Diverse Needs.pdf"},{"title":"CHE 207D Pract. Physical Inorganic Chemistry I","code":"CHE 207D","filename":"CHE 207D Pract. Physical Inorganic Chemistry I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/CHE 207D Pract. Physical Inorganic Chemistry I.pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/ESC 306D Science, Technology & Society.pdf"},{"title":"Methods of Teaching Chemistry","code":"","filename":"Methods of Teaching Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Methods of Teaching Chemistry.pdf"},{"title":"CRITICAL THINKING","code":"","filename":"CRITICAL_THINKING.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/CRITICAL_THINKING.pdf"},{"title":"MAIN GROUP CHEMISTRY","code":"","filename":"MAIN_GROUP_CHEMISTRY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/MAIN_GROUP_CHEMISTRY.pdf"},{"title":"Physical Chemistry","code":"","filename":"Physical_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Physical_Chemistry.pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Nature_of_Science.pdf"},{"title":"Cell and Tissue","code":"","filename":"Cell_and_Tissue.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Cell_and_Tissue.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY OPTION/Core-Educating_the_special_individual.pdf"}],"CHEMISTRY & MATHS  OPTION":[{"title":"CHE 207D Pract. Physical Inorganic Chemistry I","code":"CHE 207D","filename":"CHE 207D Pract. Physical Inorganic Chemistry I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/CHE 207D Pract. Physical Inorganic Chemistry I.pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/ESC 306D Science, Technology & Society.pdf"},{"title":"Methods of Teaching Chemistry","code":"","filename":"Methods of Teaching Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Methods of Teaching Chemistry.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/CRITICAL_THINKING_formatted.pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/further calculus.pdf"},{"title":"MAIN GROUP CHEMISTRY","code":"","filename":"MAIN_GROUP_CHEMISTRY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/MAIN_GROUP_CHEMISTRY.pdf"},{"title":"Physical Chemistry","code":"","filename":"Physical_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Physical_Chemistry.pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Nature_of_Science.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHS  OPTION/Core-Educating_the_special_individual.pdf"}],"BIOLOGY & CHEMISTRY":[{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/ESC 306D Science, Technology & Society.pdf"},{"title":"EBS 252D Educating Individual with Diverse Needs","code":"EBS 252D","filename":"EBS 252D Educating Individual with Diverse Needs.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/EBS 252D Educating Individual with Diverse Needs.pdf"},{"title":"Copy of Morphology and Anatomy of Vascular Plants","code":"","filename":"Copy of Morphology_and_Anatomy_of_Vascular_Plants.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Copy of Morphology_and_Anatomy_of_Vascular_Plants.pdf"},{"title":"CHE 207D Pract. Physical Inorganic Chemistry I","code":"CHE 207D","filename":"CHE 207D Pract. Physical Inorganic Chemistry I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/CHE 207D Pract. Physical Inorganic Chemistry I.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/CRITICAL_THINKING_formatted.pdf"},{"title":"METHODS OF TEACHING BIOLOGY","code":"","filename":"METHODS_OF_TEACHING_BIOLOGY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/METHODS_OF_TEACHING_BIOLOGY.pdf"},{"title":"Physical Chemistry","code":"","filename":"Physical_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Physical_Chemistry.pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Nature_of_Science.pdf"},{"title":"Morphology and Anatomy of Vascular Plants","code":"","filename":"Morphology_and_Anatomy_of_Vascular_Plants.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Morphology_and_Anatomy_of_Vascular_Plants.pdf"},{"title":"Cell and Tissue","code":"","filename":"Cell_and_Tissue.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Cell_and_Tissue.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Core-Educating_the_special_individual.pdf"}],"BIOLOGY & PHYSICS":[{"title":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical)","code":"PHY 207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"ESC 306D Science, Technology & Society","code":"ESC 306D","filename":"ESC 306D Science, Technology & Society.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/ESC 306D Science, Technology & Society.pdf"},{"title":"Morphology and Anatomy of Vascular Plants","code":"","filename":"Morphology_and_Anatomy_of_Vascular_Plants.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Morphology_and_Anatomy_of_Vascular_Plants.pdf"},{"title":"Cell and Tissue","code":"","filename":"Cell_and_Tissue.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Cell_and_Tissue.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/CRITICAL_THINKING_formatted.pdf"},{"title":"METHODS OF TEACHING BIOLOGY","code":"","filename":"METHODS_OF_TEACHING_BIOLOGY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/METHODS_OF_TEACHING_BIOLOGY.pdf"},{"title":"Nature of Science","code":"","filename":"Nature_of_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Nature_of_Science.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Core-Educating_the_special_individual.pdf"}]},"300":{"BIOLOGY & CHEMISTRY":[{"title":"CHE301 Analytical Chemistry","code":"CHE301","filename":"CHE301 Analytical Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/CHE301 Analytical Chemistry.pdf"},{"title":"Basic Soil Science","code":"","filename":"Basic_Soil_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Basic_Soil_Science.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Introduction to Molecular Genetics Formating","code":"","filename":"Introduction_to_Molecular_Genetics_Formating.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Introduction_to_Molecular_Genetics_Formating.pdf"},{"title":"Pedagogical content knowl. in biology","code":"","filename":"Pedagogical_content_knowl._in_biology.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Pedagogical_content_knowl._in_biology.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & CHEMISTRY/Core-Development_of_science_teaching_materials (1).pdf"}],"BIOLOGY & PHYSICS":[{"title":"Basic Soil Science","code":"","filename":"Basic_Soil_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Basic_Soil_Science.pdf"},{"title":"Atomic  Modern Physics","code":"","filename":"Atomic__Modern_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Atomic__Modern_Physics.pdf"},{"title":"Pedagogical content knowl. in biology","code":"","filename":"Pedagogical content knowl. in biology.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Pedagogical content knowl. in biology.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Introduction to Molecular Genetics Formating","code":"","filename":"Introduction_to_Molecular_Genetics_Formating.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Introduction_to_Molecular_Genetics_Formating.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY & PHYSICS/Core-Development_of_science_teaching_materials (1).pdf"}],"CHEMISTRY & BIOLOGY":[{"title":"CHE301 Analytical Chemistry","code":"CHE301","filename":"CHE301 Analytical Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/CHE301 Analytical Chemistry.pdf"},{"title":"sterochemistry","code":"","filename":"sterochemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/sterochemistry.pdf"},{"title":"Basic Soil Science","code":"","filename":"Basic_Soil_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/Basic_Soil_Science.pdf"},{"title":"CHEM 302 Practical Organic Chemistry III","code":"CHEM 302","filename":"CHEM 302 Practical Organic Chemistry III.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/CHEM 302 Practical Organic Chemistry III.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Pedagogical content knowl. in chemistry","code":"","filename":"Pedagogical_content_knowl._in_chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/Pedagogical_content_knowl._in_chemistry.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & BIOLOGY/Core-Development_of_science_teaching_materials (1).pdf"}],"CHEMISTRY & MATHEMATICS":[{"title":"CHE301 Analytical Chemistry","code":"CHE301","filename":"CHE301 Analytical Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/CHE301 Analytical Chemistry.pdf"},{"title":"sterochemistry","code":"","filename":"sterochemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/sterochemistry.pdf"},{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/Advanced_Calculus_I.pdf"},{"title":"CHEM 302 Practical Organic Chemistry III","code":"CHEM 302","filename":"CHEM 302 Practical Organic Chemistry III.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/CHEM 302 Practical Organic Chemistry III.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Pedagogical content knowl. in chemistry","code":"","filename":"Pedagogical_content_knowl._in_chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/Pedagogical_content_knowl._in_chemistry.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & MATHEMATICS/Core-Development_of_science_teaching_materials (1).pdf"}],"CHEMISTRY & PHYSICS":[{"title":"CHE301 Analytical Chemistry","code":"CHE301","filename":"CHE301 Analytical Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/CHE301 Analytical Chemistry.pdf"},{"title":"sterochemistry","code":"","filename":"sterochemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/sterochemistry.pdf"},{"title":"Atomic  Modern Physics","code":"","filename":"Atomic__Modern_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/Atomic__Modern_Physics.pdf"},{"title":"CHEM 302 Practical Organic Chemistry III","code":"CHEM 302","filename":"CHEM 302 Practical Organic Chemistry III.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/CHEM 302 Practical Organic Chemistry III.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Pedagogical content knowl. in chemistry","code":"","filename":"Pedagogical_content_knowl._in_chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/Pedagogical_content_knowl._in_chemistry.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/Core-Development_of_science_teaching_materials (1).pdf"},{"title":"ESC 312 Pedagogical Content Knowledge in Chemistry","code":"ESC 312","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ESC 312 Pedagogical Content Knowledge in Chemistry/Unit 1 ESC 312 Pedagogical content knowl. in  chemistry.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ESC 312 Pedagogical Content Knowledge in Chemistry/Unit 2 ESC 312 Pedagogical content knowl. in  chemistry.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ESC 312 Pedagogical Content Knowledge in Chemistry/Unit 3 ESC 312 Pedagogical content knowl. in  chemistry.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ESC 312 Pedagogical Content Knowledge in Chemistry/Unit 4 ESC 312 Pedagogical content knowl. in  chemistry.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ESC 312 Pedagogical Content Knowledge in Chemistry/Unit 5 ESC 312 Pedagogical content knowl. in  chemistry.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY & PHYSICS/ESC 312 Pedagogical Content Knowledge in Chemistry/Unit 6 ESC 312 Pedagogical content knowl. in  chemistry.pdf"}]}],"PHYSICS & BIOLOGY":[{"title":"thermal physics","code":"","filename":"thermal_physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY/thermal_physics.pdf"},{"title":"Basic Soil Science","code":"","filename":"Basic_Soil_Science.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY/Basic_Soil_Science.pdf"},{"title":"Atomic  Modern Physics","code":"","filename":"Atomic__Modern_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY/Atomic__Modern_Physics.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Pedagogical Cont. Knowl. in Physics","code":"","filename":"Pedagogical_Cont._Knowl._in_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY/Pedagogical_Cont._Knowl._in_Physics.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & BIOLOGY/Core-Development_of_science_teaching_materials (1).pdf"}],"PHYSICS & CHEMISTRY":[{"title":"CHE301 Analytical Chemistry","code":"CHE301","filename":"CHE301 Analytical Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY/CHE301 Analytical Chemistry.pdf"},{"title":"Atomic  Modern Physics","code":"","filename":"Atomic__Modern_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY/Atomic__Modern_Physics.pdf"},{"title":"thermal physics","code":"","filename":"thermal_physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY/thermal_physics.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Pedagogical Cont. Knowl. in Physics","code":"","filename":"Pedagogical_Cont._Knowl._in_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY/Pedagogical_Cont._Knowl._in_Physics.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & CHEMISTRY/Core-Development_of_science_teaching_materials (1).pdf"}],"PHYSICS & MATHEMATICS":[{"title":"thermal physics","code":"","filename":"thermal_physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHEMATICS/thermal_physics.pdf"},{"title":"Atomic  Modern Physics","code":"","filename":"Atomic__Modern_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHEMATICS/Atomic__Modern_Physics.pdf"},{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHEMATICS/Advanced_Calculus_I.pdf"},{"title":"ASSESSMENT IN SCIENCE EDUCATION formatted","code":"","filename":"ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHEMATICS/ASSESSMENT_IN_SCIENCE_EDUCATION_formatted.pdf"},{"title":"Pedagogical Cont. Knowl. in Physics","code":"","filename":"Pedagogical_Cont._Knowl._in_Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHEMATICS/Pedagogical_Cont._Knowl._in_Physics.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS & MATHEMATICS/Core-Development_of_science_teaching_materials (1).pdf"}]},"400":{"CHEMISTRY OPTION":[{"title":"EPS 401D Psychology of Adolescence Revised final 2022","code":"EPS 401D","filename":"EPS 401D Psychology of Adolescence Revised final 2022.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY OPTION/EPS 401D Psychology of Adolescence Revised final 2022.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY OPTION/Core-African_Studies.pdf"},{"title":"Aromatic and Heterocyclic Chemistry","code":"","filename":"Aromatic and Heterocyclic Chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY OPTION/Aromatic and Heterocyclic Chemistry.pdf"},{"title":"Elective-Curriculum studies in chemistry","code":"","filename":"Elective-Curriculum_studies_in_chemistry.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY OPTION/Elective-Curriculum_studies_in_chemistry.pdf"},{"title":"Core-Development of scince teaching materials","code":"","filename":"Core-Development_of_scince_teaching_materials.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/CHEMISTRY OPTION/Core-Development_of_scince_teaching_materials.pdf"}],"PHYSICS OPTION":[{"title":"EPS 401D Psychology of Adolescence Revised final 2022","code":"EPS 401D","filename":"EPS 401D Psychology of Adolescence Revised final 2022.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS OPTION/EPS 401D Psychology of Adolescence Revised final 2022.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS OPTION/Core-African_Studies.pdf"},{"title":"Curriculum Studies in Physics","code":"","filename":"Curriculum Studies in Physics.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS OPTION/Curriculum Studies in Physics.pdf"},{"title":"Elective-Electromagnetic field thoery","code":"","filename":"Elective-Electromagnetic_field_thoery.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS OPTION/Elective-Electromagnetic_field_thoery.pdf"},{"title":"Core-Development of scince teaching materials","code":"","filename":"Core-Development_of_scince_teaching_materials.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/PHYSICS OPTION/Core-Development_of_scince_teaching_materials.pdf"}],"BIOLOGY OPTION":[{"title":"EPS 401D Psychology of Adolescence Revised final 2022","code":"EPS 401D","filename":"EPS 401D Psychology of Adolescence Revised final 2022.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY OPTION/EPS 401D Psychology of Adolescence Revised final 2022.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY OPTION/Core-African_Studies.pdf"},{"title":"CURRICULUM STUDIES IN BIOLOGY","code":"","filename":"CURRICULUM STUDIES IN BIOLOGY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY OPTION/CURRICULUM STUDIES IN BIOLOGY.pdf"},{"title":"APPLICATIONS OF BIOTECHNOLOGY","code":"","filename":"APPLICATIONS OF BIOTECHNOLOGY.pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY OPTION/APPLICATIONS OF BIOTECHNOLOGY.pdf"},{"title":"Core-Development of science teaching materials (1)","code":"","filename":"Core-Development_of_science_teaching_materials (1).pdf","relativePath":"/MATHS & SCIENCE/4 YEAR BACHELOR OF EDUCATION (SCIENCE) (100, 200, 300, 400)/LEVEL 400 BACHELOR OF EDUCATION (SCIENCE)/BIOLOGY OPTION/Core-Development_of_science_teaching_materials (1).pdf"}]}},"B.Ed. Mathematics":{"100":{"MATHEMATICS & ACCOUNTING OPTION":[{"title":"Introduction to Business","code":"","filename":"Introduction to Business.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/Introduction to Business.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/MAT101 Algebra and Trigonometry.pdf"},{"title":"Core-Info Lit. (reviewed)","code":"","filename":"Core-Info_Lit._(reviewed).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/Core-Info_Lit._(reviewed).pdf"},{"title":"Social and Philosophical Foundations of Education (1)","code":"","filename":"Social and Philosophical Foundations of Education (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/Social and Philosophical Foundations of Education (1).pdf"},{"title":"African Studies (Reviewed) (1)","code":"","filename":"African Studies (Reviewed) (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/African Studies (Reviewed) (1).pdf"},{"title":"Communicative Skills 1 (1)","code":"","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/Communicative_Skills_1 (1).pdf"},{"title":"Advanced Accounting 1 (rev'd) 2015","code":"","filename":"Advanced Accounting 1 (rev'd) 2015.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & ACCOUNTING OPTION/Advanced Accounting 1 (rev'd) 2015.pdf"}],"MATHEMATICS & MANAGEMENT OPTION":[{"title":"Introduction to Business","code":"","filename":"Introduction to Business.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & MANAGEMENT OPTION/Introduction to Business.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & MANAGEMENT OPTION/MAT101 Algebra and Trigonometry.pdf"},{"title":"Core-Info Lit. (reviewed)","code":"","filename":"Core-Info_Lit._(reviewed).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & MANAGEMENT OPTION/Core-Info_Lit._(reviewed).pdf"},{"title":"Social and Philosophical Foundations of Education (1)","code":"","filename":"Social and Philosophical Foundations of Education (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & MANAGEMENT OPTION/Social and Philosophical Foundations of Education (1).pdf"},{"title":"African Studies (Reviewed) (1)","code":"","filename":"African Studies (Reviewed) (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & MANAGEMENT OPTION/African Studies (Reviewed) (1).pdf"},{"title":"Communicative Skills 1 (1)","code":"","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHEMATICS & MANAGEMENT OPTION/Communicative_Skills_1 (1).pdf"}],"MATHS & ICT":[{"title":"Software Suite","code":"","filename":"Software Suite.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Software Suite.pdf"},{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Communicative_Skills_1.pdf"},{"title":"INF 101D Introduction to Computing","code":"INF 101D","filename":"INF 101D Introduction to Computing.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/INF 101D Introduction to Computing.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/MAT101 Algebra and Trigonometry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Social and Philosophical Foundations of Education.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Core-African_Studies.pdf"},{"title":"Info Lit","code":"","filename":"Info_Lit.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Info_Lit.pdf"}],"MATHS & CHEMISTRY OPTION":[{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Communicative_Skills_1.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/MAT101 Algebra and Trigonometry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Core-African_Studies.pdf"},{"title":"CHE 109 Practical Gen. Chemistry","code":"CHE 109","filename":"CHE 109 Practical Gen. Chemistry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/CHE 109 Practical Gen. Chemistry.pdf"},{"title":"EBS 132 General Chemistry","code":"","filename":"EBS_132_General_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EBS_132_General_Chemistry.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Core-Information_Literacy_skills.pdf"}],"MATHS & PHYSICS OPTION":[{"title":"GENERAL PHYSICS theoryI","code":"","filename":"GENERAL_PHYSICS_theoryI.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/GENERAL_PHYSICS_theoryI.pdf"},{"title":"Communicative Skills 1","code":"","filename":"Communicative_Skills_1.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Communicative_Skills_1.pdf"},{"title":"INF 101D Introduction to Computing","code":"INF 101D","filename":"INF 101D Introduction to Computing.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/INF 101D Introduction to Computing.pdf"},{"title":"MAT101 Algebra and Trigonometry","code":"MAT101","filename":"MAT101 Algebra and Trigonometry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/MAT101 Algebra and Trigonometry.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Social and Philosophical Foundations of Education.pdf"},{"title":"Core-African Studies","code":"","filename":"Core-African_Studies.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Core-African_Studies.pdf"},{"title":"EBS 142P General Physics Practical 1 editted","code":"","filename":"EBS_142P_General_Physics_Practical_1_editted.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EBS_142P_General_Physics_Practical_1_editted.pdf"},{"title":"Core-Information Literacy skills","code":"","filename":"Core-Information_Literacy_skills.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 100 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Core-Information_Literacy_skills.pdf"}]},"200":{"MATHS & ICT":[{"title":"EMA 201D NATURE OF MATHS FINAL","code":"EMA 201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"INF 217D PROGRAMMING AND PROBLEM SOLVING ANALYSIS (1)","code":"INF 217D","filename":"INF 217D PROGRAMMING AND PROBLEM SOLVING ANALYSIS (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/INF 217D PROGRAMMING AND PROBLEM SOLVING ANALYSIS (1).pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Core-Educating_the_special_individual.pdf"},{"title":"EMA 208 METHODS OF TEACH. SHS MATHS formated","code":"","filename":"EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL THINKING formatted.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/CRITICAL THINKING formatted.pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/further calculus.pdf"},{"title":"Introductory Statistics I (1)","code":"","filename":"Introductory Statistics I (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Introductory Statistics I (1).pdf"},{"title":"EBS 289D Nature of Maths edited","code":"EBS 289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/EBS 289D Nature of Maths edited.pdf"},{"title":"EMA 312 Pedagogical Cont. Knowl. in Maths (formatted)","code":"EMA 312","filename":"EMA 312 Pedagogical Cont. Knowl. in Maths (formatted).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/EMA 312 Pedagogical Cont. Knowl. in Maths (formatted).pdf"},{"title":"Database Management","code":"","filename":"Database_Management.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Database_Management.pdf"},{"title":"Advanced Algebra and Calculus - EMA 202D","code":"EMA 202D","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/Unit 1 EMA 202D.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/Unit 2 EMA202D.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/UNIT 3 EMA202D.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/Unit 4 EMA202D.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/UNIT 5 EMA202D.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/UNIT 6 EMA 202D.pdf"}]}],"MATHS & ACCOUNTING":[{"title":"EMA 201D NATURE OF MATHS FINAL","code":"EMA 201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"Financial Reporting I (1)","code":"","filename":"Financial_Reporting_I (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Financial_Reporting_I (1).pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Core-Educating_the_special_individual.pdf"},{"title":"EMA 208 METHODS OF TEACH. SHS MATHS formated","code":"","filename":"EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL THINKING formatted.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/CRITICAL THINKING formatted.pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/further calculus.pdf"},{"title":"Introductory Statistics I (1)","code":"","filename":"Introductory Statistics I (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Introductory Statistics I (1).pdf"},{"title":"EBS 289D Nature of Maths edited","code":"EBS 289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/EBS 289D Nature of Maths edited.pdf"},{"title":"Advanced Algebra and Calculus - EMA 202D","code":"EMA 202D","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/Unit 1 EMA 202D.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/Unit 2 EMA202D.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/UNIT 3 EMA202D.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/Unit 4 EMA202D.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/UNIT 5 EMA202D.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced Algebra and Calculus - EMA 202D-20250120T075149Z-001/Advanced Algebra and Calculus - EMA 202D/UNIT 6 EMA 202D.pdf"}]}],"MATHS & MANAGEMENT":[{"title":"EMA 201D NATURE OF MATHS FINAL","code":"EMA 201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Core-Educating_the_special_individual.pdf"},{"title":"EMA 208 METHODS OF TEACH. SHS MATHS formated","code":"","filename":"EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL THINKING formatted.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/CRITICAL THINKING formatted.pdf"},{"title":"Principles of Management 1","code":"","filename":"Principles_of_Management_1.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Principles_of_Management_1.pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/further calculus.pdf"},{"title":"Introductory Statistics I (1)","code":"","filename":"Introductory Statistics I (1).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Introductory Statistics I (1).pdf"},{"title":"EBS 289D Nature of Maths edited","code":"EBS 289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/EBS 289D Nature of Maths edited.pdf"},{"title":"Advanced Algebra and Calculus - EMA 202D","code":"EMA 202D","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced Algebra and Calculus - EMA 202D/Unit 1 EMA 202D.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced Algebra and Calculus - EMA 202D/Unit 2 EMA202D.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced Algebra and Calculus - EMA 202D/UNIT 3 EMA202D.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced Algebra and Calculus - EMA 202D/Unit 4 EMA202D.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced Algebra and Calculus - EMA 202D/UNIT 5 EMA202D.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced Algebra and Calculus - EMA 202D/UNIT 6 EMA 202D.pdf"}]}],"MATHS & CHEMISTRY OPTION":[{"title":"EMA 201D NATURE OF MATHS FINAL","code":"EMA 201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"EMA 312 Pedagogical Cont. Knowl. in Maths (formatted)","code":"EMA 312","filename":"EMA 312 Pedagogical Cont. Knowl. in Maths (formatted).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EMA 312 Pedagogical Cont. Knowl. in Maths (formatted).pdf"},{"title":"EBS 252D Educating Individual with Diverse Needs","code":"EBS 252D","filename":"EBS 252D Educating Individual with Diverse Needs.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EBS 252D Educating Individual with Diverse Needs.pdf"},{"title":"Physical Chemistry","code":"","filename":"Physical_Chemistry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Physical_Chemistry.pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/further calculus.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Core-Educating_the_special_individual.pdf"},{"title":"CHE 207D Pract. Physical Inorganic Chemistry I","code":"CHE 207D","filename":"CHE 207D Pract. Physical Inorganic Chemistry I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/CHE 207D Pract. Physical Inorganic Chemistry I.pdf"},{"title":"EBS 289D Nature of Maths edited","code":"EBS 289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EBS 289D Nature of Maths edited.pdf"},{"title":"Introductory Statistics I","code":"","filename":"Introductory Statistics I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/Introductory Statistics I.pdf"},{"title":"EMA 202 Advance Algebra and Calculus","code":"EMA 202","filename":"EMA 202 Advance Algebra and Calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EMA 202 Advance Algebra and Calculus.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/CRITICAL_THINKING_formatted.pdf"},{"title":"EMA 208 METHODS OF TEACH. SHS MATHS formated","code":"","filename":"EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & CHEMISTRY OPTION/EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf"}],"MATHS & PHYSICS OPTION":[{"title":"EMA 201D NATURE OF MATHS FINAL","code":"EMA 201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"EMA 312 Pedagogical Cont. Knowl. in Maths (formatted)","code":"EMA 312","filename":"EMA 312 Pedagogical Cont. Knowl. in Maths (formatted).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EMA 312 Pedagogical Cont. Knowl. in Maths (formatted).pdf"},{"title":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical)","code":"PHY 207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical).pdf"},{"title":"Introductory Statistics I","code":"","filename":"Introductory Statistics I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Introductory Statistics I.pdf"},{"title":"EBS 252D Educating Individual with Diverse Needs","code":"EBS 252D","filename":"EBS 252D Educating Individual with Diverse Needs.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EBS 252D Educating Individual with Diverse Needs.pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"further calculus","code":"","filename":"further calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/further calculus.pdf"},{"title":"EMA 208 METHODS OF TEACH. SHS MATHS formated","code":"","filename":"EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EMA_208_METHODS_OF_TEACH._SHS_MATHS_formated.pdf"},{"title":"Core-Educating the special individual","code":"","filename":"Core-Educating_the_special_individual.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Core-Educating_the_special_individual.pdf"},{"title":"EBS 289D Nature of Maths edited","code":"EBS 289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EBS 289D Nature of Maths edited.pdf"},{"title":"EMA 202 Advance Algebra and Calculus","code":"EMA 202","filename":"EMA 202 Advance Algebra and Calculus.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/EMA 202 Advance Algebra and Calculus.pdf"},{"title":"CRITICAL THINKING formatted","code":"","filename":"CRITICAL_THINKING_formatted.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 200 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/CRITICAL_THINKING_formatted.pdf"}]},"300":{"MATHS & ICT":[{"title":"INF 213D Web Technology I Edited","code":"INF 213D","filename":"INF 213D Web Technology I Edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/INF 213D Web Technology I Edited.pdf"},{"title":"EBS 286 Network Computing edited","code":"EBS 286","filename":"EBS 286 Network Computing edited.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/EBS 286 Network Computing edited.pdf"},{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Advanced_Calculus_I.pdf"},{"title":"Introduction to Abstract Algebra","code":"","filename":"Introduction_to_Abstract_Algebra.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Introduction_to_Abstract_Algebra.pdf"},{"title":"Core-Development of Instructional Material in Mathematics","code":"","filename":"Core-Development_of_Instructional_Material_in_Mathematics.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/Core-Development_of_Instructional_Material_in_Mathematics.pdf"},{"title":"STA 301D Statistical Methods","code":"STA 301D","filename":"STA 301D Statistical Methods.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/STA 301D Statistical Methods.pdf"},{"title":"ESC309D Assessment in Mathematics Education","code":"ESC309D","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 1 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 2 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 3 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 4 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 5 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ICT/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 6 ASSESSMENT IN MATHS EDUCATION formatted.pdf"}]}],"MATHS & ACCOUNTING":[{"title":"Research Methods in Maths Education formating","code":"","filename":"Research_Methods_in_Maths_Education_formating.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Research_Methods_in_Maths_Education_formating.pdf"},{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Advanced_Calculus_I.pdf"},{"title":"Introduction to Abstract Algebra","code":"","filename":"Introduction_to_Abstract_Algebra.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Introduction_to_Abstract_Algebra.pdf"},{"title":"Core-Development of Instructional Material in Mathematics","code":"","filename":"Core-Development_of_Instructional_Material_in_Mathematics.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/Core-Development_of_Instructional_Material_in_Mathematics.pdf"},{"title":"STA 301D Statistical Methods","code":"STA 301D","filename":"STA 301D Statistical Methods.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/STA 301D Statistical Methods.pdf"},{"title":"COST AND MANAGEMENT ACCOUNTING 1","code":"","filename":"COST AND MANAGEMENT ACCOUNTING 1.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/COST AND MANAGEMENT ACCOUNTING 1.pdf"},{"title":"ESC309D Assessment in Mathematics Education","code":"ESC309D","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 1 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 2 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 3 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 4 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 5 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & ACCOUNTING/ESC309D Assessment in Mathematics Education-20250120T135852Z-001/ESC309D Assessment in Mathematics Education/UNIT 6 ASSESSMENT IN MATHS EDUCATION formatted.pdf"}]}],"MATHS & MANAGEMENT":[{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Advanced_Calculus_I.pdf"},{"title":"Introduction to Abstract Algebra","code":"","filename":"Introduction_to_Abstract_Algebra.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Introduction_to_Abstract_Algebra.pdf"},{"title":"Core-Development of Instructional Material in Mathematics","code":"","filename":"Core-Development_of_Instructional_Material_in_Mathematics.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Core-Development_of_Instructional_Material_in_Mathematics.pdf"},{"title":"STA 301D Statistical Methods","code":"STA 301D","filename":"STA 301D Statistical Methods.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/STA 301D Statistical Methods.pdf"},{"title":"Operations Management","code":"","filename":"Operations Management.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Operations Management.pdf"},{"title":"Research Methods in Maths Education formating","code":"","filename":"Research_Methods_in_Maths_Education_formating.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/Research_Methods_in_Maths_Education_formating.pdf"},{"title":"ESC309D Assessment in Mathematics Education","code":"ESC309D","units":[{"label":"UNIT 1","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/ESC309D Assessment in Mathematics Education/UNIT 1 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 2","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/ESC309D Assessment in Mathematics Education/UNIT 2 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 3","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/ESC309D Assessment in Mathematics Education/UNIT 3 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 4","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/ESC309D Assessment in Mathematics Education/UNIT 4 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 5","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/ESC309D Assessment in Mathematics Education/UNIT 5 ASSESSMENT IN MATHS EDUCATION formatted.pdf"},{"label":"UNIT 6","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & MANAGEMENT/ESC309D Assessment in Mathematics Education/UNIT 6 ASSESSMENT IN MATHS EDUCATION formatted.pdf"}]}],"MATHS & PHYSICS OPTION":[{"title":"STA 301D Statistical Methods","code":"STA 301D","filename":"STA 301D Statistical Methods.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/STA 301D Statistical Methods.pdf"},{"title":"Core-Development of Instructional Material in Mathematics","code":"","filename":"Core-Development_of_Instructional_Material_in_Mathematics.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Core-Development_of_Instructional_Material_in_Mathematics.pdf"},{"title":"Atomic  Modern Physics","code":"","filename":"Atomic__Modern_Physics.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Atomic__Modern_Physics.pdf"},{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Advanced_Calculus_I.pdf"},{"title":"Introduction to Abstract Algebra","code":"","filename":"Introduction_to_Abstract_Algebra.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Introduction_to_Abstract_Algebra.pdf"},{"title":"ASSESSMENT IN MATHS EDUCATION formattedMM","code":"","filename":"ASSESSMENT_IN_MATHS_EDUCATION_formattedMM.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/ASSESSMENT_IN_MATHS_EDUCATION_formattedMM.pdf"},{"title":"Research Methods in Maths Education formating","code":"","filename":"Research_Methods_in_Maths_Education_formating.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS & PHYSICS OPTION/Research_Methods_in_Maths_Education_formating.pdf"}],"MATHS &CHEMISTRY OPTION":[{"title":"Core-Development of Instructional Material in Mathematics","code":"","filename":"Core-Development_of_Instructional_Material_in_Mathematics.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/Core-Development_of_Instructional_Material_in_Mathematics.pdf"},{"title":"CHE301 Analytical Chemistry","code":"CHE301","filename":"CHE301 Analytical Chemistry.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/CHE301 Analytical Chemistry.pdf"},{"title":"Introduction to Abstract Algebra","code":"","filename":"Introduction_to_Abstract_Algebra.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/Introduction_to_Abstract_Algebra.pdf"},{"title":"Advanced Calculus I","code":"","filename":"Advanced_Calculus_I.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/Advanced_Calculus_I.pdf"},{"title":"STA 301D Statistical Methods","code":"STA 301D","filename":"STA 301D Statistical Methods.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/STA 301D Statistical Methods.pdf"},{"title":"ASSESSMENT IN MATHS EDUCATION formattedMM","code":"","filename":"ASSESSMENT_IN_MATHS_EDUCATION_formattedMM.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/ASSESSMENT_IN_MATHS_EDUCATION_formattedMM.pdf"},{"title":"Research Methods in Maths Education formating","code":"","filename":"Research_Methods_in_Maths_Education_formating.pdf","relativePath":"/MATHS & SCIENCE/ 4 YEAR BACHELOR OF EDUCATION (MATHEMATICS)(100, 200, 300, 400)/LEVEL 300 BACHELOR OF EDUCATION (MATHEMATICS)/MATHS &CHEMISTRY OPTION/Research_Methods_in_Maths_Education_formating.pdf"}]}}};
const mathsScienceProgrammeLevels=Object.fromEntries(Object.entries(mathsScienceCourseCatalogue).map(([p,l])=>[p,Object.keys(l)]));

/* Maths & Science: resolve real Nextcloud paths rather than assuming
   that a Google Drive folder name is identical to its Nextcloud mirror.
   This resolver is preview-only until validated on actual files. */
const mathsScienceResolvedDownloads = new Map();
function mathsScienceNormalise(value) {
    return String(value || "").normalize("NFKC").toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g," ");
}
function mathsScienceDownloadNotice(message, detail) {
    const view=document.getElementById("courseView");
    if(!view) { window.alert(message+"\n"+detail); return; }
    let info=document.getElementById("mathsScienceDownloadNotice");
    if(!info){
        info=document.createElement("div");
        info.id="mathsScienceDownloadNotice";
        info.setAttribute("role","alert");
        info.style.cssText="padding:16px;border:1px solid #fecaca;background:#fff4f4;border-radius:10px;margin:16px 0;white-space:pre-wrap;overflow-wrap:anywhere;color:#7f1d1d";
        const heading=view.querySelector(".page-heading");
        (heading||view).appendChild(info);
    }
    info.replaceChildren();
    const strong=document.createElement("strong");
    strong.textContent=message;
    const p=document.createElement("p");
    p.textContent=detail;
    p.style.marginTop="8px";
    info.append(strong,p);
    const copy=document.createElement("button");
    copy.type="button";
    copy.textContent="COPY ERROR DETAILS";
    copy.style.cssText="padding:8px 12px;margin-top:12px;background:#fff;border:1px solid #cbd5e1;border-radius:8px";
    copy.addEventListener("click",()=>{
        const data=message+"\n"+detail;
        if(navigator.clipboard?.writeText)navigator.clipboard.writeText(data).catch(()=>{});
    });
    info.appendChild(copy);
}
function mathsScienceClearNotice() {
    const el=document.getElementById("mathsScienceDownloadNotice");
    if(el)el.remove();
}
async function mathsScienceResolvePdf(anticipatedPath, context) {
    if(mathsScienceResolvedDownloads.has(anticipatedPath))
        return mathsScienceResolvedDownloads.get(anticipatedPath);
    const filename=anticipatedPath.split("/").pop();
    if(!filename||!filename.toLowerCase().endsWith(".pdf"))throw Error("INVALID_PDF_FILENAME");
    const q=new URLSearchParams({q:filename});
    let response;
    try {
        response=await fetch(MODULE_API_BASE+"/modules/search?"+q.toString(),{
            method:"GET",headers:{"Accept":"application/json"}
        });
    }catch(e){throw Error("MODULE_SEARCH_UNREACHABLE: "+e.message)}
    if(!response.ok)throw Error("MODULE_SEARCH_HTTP_"+response.status);
    let json;
    try{json=await response.json()}catch(e){throw Error("MODULE_SEARCH_INVALID_JSON")}
    if(!Array.isArray(json.results))throw Error("MODULE_SEARCH_UNEXPECTED_RESPONSE");
    const expected=mathsScienceNormalise(filename);
    const exact=json.results.filter(x=>mathsScienceNormalise(x.filename)===expected);
    if(!exact.length)throw Error("FILE_NOT_INDEXED: "+filename+" (search returned "+json.results.length+" records)");
    const expectedPath=mathsScienceNormalise(anticipatedPath);
    const option=mathsScienceNormalise(context.option);
    const level=String(context.level);
    const scores=exact.map(file=>{
        const path=String(file.relative_path||file.folder||"");
        const normal=mathsScienceNormalise(path);
        let score=0;
        const semester=String(file.semester||"").toLowerCase();
        if(semester==="second"||semester==="secondsemester")score-=100;
        else if(semester==="first"||semester==="firstsemester")score+=10;
        if(/math|science|ict/i.test(path))score+=12;
        if(normal.includes("business")||normal.includes("education/b"))score-=8;
        if(normal.includes("level "+level)||normal.includes("l"+level))score+=7;
        if(context.programme==="B.Ed. Science"&&normal.includes("science"))score+=5;
        if(context.programme==="B.Ed. Mathematics"&&normal.includes("mathematics"))score+=5;
        if(context.programme==="B.Ed. ICT"&&normal.includes("ict"))score+=5;
        if(option&&normal.includes(option))score+=20;
        if(expectedPath===normal)score+=150;
        return {file,path,score};
    }).filter(x=>x.score>=0).sort((a,b)=>b.score-a.score);
    if(!scores.length)throw Error("ONLY_WRONG_SEMESTER_MATCHES: "+filename);
    const top=scores[0];
    if(scores.length>1&&scores[1].score===top.score&&top.path!==scores[1].path)
        throw Error("AMBIGUOUS_FILE_MATCHES ("+scores.length+"): "+filename);
    let url=null;
    if(typeof top.file.url==="string"&&/^https:\/\//i.test(top.file.url))
        url=top.file.url;
    else if(typeof top.file.relative_path==="string"&&top.file.relative_path.toLowerCase().endsWith(".pdf")){
        const q=new URLSearchParams({semester:"first",path:top.file.relative_path});
        url=MODULE_API_BASE+"/module/view?"+q.toString();
    }
    if(!url)throw Error("MATCH_MISSING_DOWNLOAD_URL: "+filename);
    mathsScienceResolvedDownloads.set(anticipatedPath,url);
    return url;
}
function showMathsScienceCourseCards(option=null, addHistory=true) {
    if(selectedDepartment!=="Mathematics and Science"||selectedSemester!=="firstSemester")return;
    const level=String(selectedLevel),programme=selectedProgramme;
    const entry=mathsScienceCourseCatalogue[programme]?.[level];
    if(!entry)return;
    const cards=Array.isArray(entry)?entry:entry[option]||[];
    if(!cards.length)return;
    selectedSpecialisation=option;
    const heading=document.getElementById("courseHeading");
    const subtitle=document.getElementById("courseSubheading");
    const list=document.getElementById("courseList");
    if(!list)return;
    if(heading)heading.textContent=option?programme+" · "+option+" · Level "+level:programme+" · Level "+level;
    if(subtitle)subtitle.textContent="First Semester · Mathematics and Science";
    list.replaceChildren();
    mathsScienceClearNotice();
    const appendDownload=(holder,label,path)=>{
        if(!path||!path.toLowerCase().endsWith(".pdf")||path.split("/").includes(".."))return;
        const btn=document.createElement("button");
        btn.type="button";btn.className="open-btn";btn.textContent=label;
        btn.addEventListener("click",async()=>{
            const original=btn.textContent;
            btn.disabled=true;btn.textContent="LOCATING PDF IN NEXTCLOUD…";
            try{
                const realUrl=await mathsScienceResolvePdf(path,{
                    programme,level,option
                });
                window.location.assign(realUrl);
            }catch(error){
                mathsScienceDownloadNotice("Module download could not be matched in Nextcloud",
                    "File: "+path.split("/").pop()+"\nProgramme: "+programme+
                    "\nLevel: "+level+"\nOption: "+(option||"General")+
                    "\nDetails: "+String(error.message||error)+
                    "\nAPI: "+MODULE_API_BASE);
            }finally{
                btn.disabled=false;btn.textContent=original;
            }
        });
        holder.appendChild(btn);
    };
    cards.forEach(item=>{
        const card=document.createElement("article");card.className="course-card";
        if(item.code){const code=document.createElement("div");code.className="course-code";code.textContent=item.code;card.appendChild(code);}
        const title=document.createElement("div");title.className="course-title";title.textContent=item.title;card.appendChild(title);
        if(item.units?.length){
            const units=document.createElement("div");units.className="course-unit-downloads";units.style.display="grid";units.style.gap="10px";units.style.marginTop="14px";
            item.units.forEach(u=>appendDownload(units,"DOWNLOAD "+u.label,u.relativePath));card.appendChild(units);
        }else appendDownload(card,"DOWNLOAD MODULE",item.relativePath);
        list.appendChild(card);
    });
    showView("courseView");
    if(addHistory)savePortalHistory("mathsScienceCourses");
}
function showMathsScienceOptions(level,addHistory=true){
    if(selectedDepartment!=="Mathematics and Science"||selectedSemester!=="firstSemester")return;
    const options=mathsScienceCourseCatalogue[selectedProgramme]?.[String(level)];
    if(!options||Array.isArray(options))return showMathsScienceCourseCards(null,addHistory);
    selectedLevel=String(level);selectedSpecialisation=null;
    const list=document.getElementById("specialisationList");
    if(!list)return;
    const heading=document.getElementById("specialisationHeading");
    const sub=document.getElementById("specialisationSubheading");
    if(heading)heading.textContent=selectedProgramme+" · Level "+level;
    if(sub)sub.textContent="Select your subject combination to view its course modules.";
    list.replaceChildren();
    Object.entries(options).forEach(([option,courses])=>{
        if(!courses.length)return;
        const button=document.createElement("button");button.type="button";button.className="programme-card";
        const h=document.createElement("h3");h.textContent=option;
        const span=document.createElement("span");span.textContent="View Courses →";
        button.append(h,span);
        button.addEventListener("click",()=>showMathsScienceCourseCards(option));
        list.appendChild(button);
    });
    showView("specialisationView");
    if(addHistory)savePortalHistory("mathsScienceOptions");
}

const educationCourseCatalogue = {"BSc. PSYCHOLOGY":{"100":[{"title":"Communicative Skills 1","code":"CMS107D","filename":"Communicative_Skills_1.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L100/Communicative_Skills_1.pdf"},{"title":"Basic Statistics formatted edited","code":"","filename":"Basic Statistics formatted edited.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L100/Basic Statistics formatted edited.pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L100/African Studies (Reviewed).pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L100/Info_Lit..pdf"}],"200":[{"title":"Guidance & Counselling for Senior High School","code":"EPS451D","filename":"EPS 451D Guidance & Counselling for Senior High School.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L200/EPS 451D Guidance & Counselling for Senior High School.pdf"},{"title":"Social Psychology redone","code":"BPS214D","filename":"BPS 214D Social Psychology redone.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L200/BPS 214D Social Psychology redone.pdf"},{"title":"Introduction to Measurement and Evaluation","code":"","filename":"Core-Introduction_to_Measurement_and_Evaluation.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L200/Core-Introduction_to_Measurement_and_Evaluation.pdf"}],"300":[{"title":"Psychology of Personnel Mgt UNIT 1-5","code":"","filename":"Psychology of Personnel Mgt UNIT 1-5.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L300/Psychology of Personnel Mgt UNIT 1-5.pdf"}],"400":[{"title":"Characteristic Edu of Children with Learning Disabilities","code":"","filename":"Core-Characteristic__Edu_of_Children_with_Learning_Disabilities.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L400/Core-Characteristic__Edu_of_Children_with_Learning_Disabilities.pdf"},{"title":"Understanding GROUP DYNAMICS","code":"SBC202D","filename":"SBC 202D -  Understanding GROUP DYNAMICS.pdf","relativePath":"/EDUCATION/BSc. PSYCHOLOGY/BSP_L400/SBC 202D -  Understanding GROUP DYNAMICS.pdf"}]},"Bed. Primary Education":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/African Studies (Reviewed).pdf"},{"title":"Introduction to social studies","code":"","filename":"Introduction to social studies.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/Introduction to social studies.pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"BASIC DESIGN","code":"","filename":"BASIC_DESIGN.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/BASIC_DESIGN.pdf"},{"title":"GENERAL BIOLOGY PRACTICAL","code":"","filename":"GENERAL BIOLOGY PRACTICAL.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/GENERAL BIOLOGY PRACTICAL.pdf"},{"title":"GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited","code":"GHL116D","filename":"GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf"},{"title":"Studies in African Poetry edited","code":"EBS121D","filename":"EBS 121D Studies in African Poetry edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 121D Studies in African Poetry edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/Principles and Practice of Education.pdf"},{"title":"Fundamentals of IT Edited","code":"EBS109D","filename":"EBS 109D Fundamentals of IT Edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 109D Fundamentals of IT Edited.pdf"},{"title":"Ghan. Lang. & Culture – Ga","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – Ga.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 116 Ghan. Lang. & Culture – Ga.pdf"},{"title":"Ghan. Lang. & Culture – EWE","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – EWE.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 116 Ghan. Lang. & Culture – EWE.pdf"},{"title":"Gen. Biology edited","code":"EBS103D","filename":"EBS 103D Gen. Biology edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 103D Gen. Biology edited.pdf"},{"title":"elementary geometry complete","code":"","filename":"elementary geometry complete.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/elementary geometry complete.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"Philo & Psycho. Founds of RME edited","code":"EBS123D","filename":"EBS 123D Philo & Psycho. Founds of RME edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 123D Philo & Psycho. Founds of RME edited.pdf"},{"title":"Ghan. Lang & Culture - Writ Tech. - Mfantse edited","code":"EBS116D","filename":"EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf"},{"title":"General Agric. I edited","code":"EBS113D","filename":"EBS 113D General Agric. I edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/EBS 113D General Agric. I edited.pdf"},{"title":"college algebra","code":"","filename":"college algebra.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/college algebra.pdf"},{"title":"Human Land Issues in Social Studies","code":"","filename":"Human_Land_Issues_in_Social_Studies.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/Human_Land_Issues_in_Social_Studies.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"HEALTH AND PHYSICAL FITINESS, Complete","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS, Complete.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 218D HEALTH AND PHYSICAL FITINESS, Complete.pdf"},{"title":"GENERAL PHYSICS 1-4-1","code":"EBS227D","filename":"EBS 227D GENERAL PHYSICS 1-4-1.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 227D GENERAL PHYSICS 1-4-1.pdf"},{"title":"Essay Writing - Ga (1-3)","code":"EBS233","filename":"EBS 233 Essay Writing - Ga (1-3).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 233 Essay Writing - Ga (1-3).pdf"},{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Citizenship Education edited","code":"EBS204D","filename":"EBS 204D Citizenship Education edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 204D Citizenship Education edited.pdf"},{"title":"Nature of Maths edited","code":"EBS289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 289D Nature of Maths edited.pdf"},{"title":"EBS 202D INTRODUCTION TO THE OLD TESTAMENT","code":"RHL203D","filename":"RHL 203D. EBS 202D INTRODUCTION TO THE OLD TESTAMENT.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/RHL 203D. EBS 202D INTRODUCTION TO THE OLD TESTAMENT.pdf"},{"title":"EBS 233ED Ghan. Lang & Cult.(Essay Writing) Ewe","code":"GHL207ED","filename":"GHL 207ED.EBS 233ED Ghan. Lang & Cult.(Essay Writing) Ewe.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/GHL 207ED.EBS 233ED Ghan. Lang & Cult.(Essay Writing) Ewe.pdf"},{"title":"Social Studies as an Integrated Subject","code":"","filename":"SOC. STDS AS INTEGRATED SUBJECT(complete).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/SOC. STDS AS INTEGRATED SUBJECT(complete).pdf","units":[{"label":"COMPLETE MODULE","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/SOC. STDS AS INTEGRATED SUBJECT(complete).pdf"},{"label":"PARTS 1–2","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/Social Studies as an Integrated Subject/SOCIAL STUDIES AS AN INTEGRATED SUBJECT 1&2.pdf"},{"label":"PARTS 3–4","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/Social Studies as an Integrated Subject/SOCIAL STUDIES AS INTEGRATED SUBJECT  3 & 4.pdf"}]},{"title":"DATABASES","code":"EBS285D","filename":"EBS 285D DATABASES.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 285D DATABASES.pdf"},{"title":"Assemblage and Construction","code":"EBS201D","filename":"EBS 201D Assemblage and Construction.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 201D Assemblage and Construction.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited","code":"GHL207D","filename":"GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"GHANAIAN LANGUAGE AND CULTURE (ESSAY WRITING) – MFANTSE","code":"","filename":"GHANAIAN LANGUAGE AND CULTURE (ESSAY  WRITING) – MFANTSE.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L200/GHANAIAN LANGUAGE AND CULTURE (ESSAY  WRITING) – MFANTSE.pdf"}],"300":[{"title":"Meths of Teaching Basic Sch Sci (Reviewed)","code":"EBS323D","filename":"EBS323D  Meths of Teaching Basic Sch Sci (Reviewed).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS323D  Meths of Teaching Basic Sch Sci (Reviewed).pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS FINAL","code":"","filename":"METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS FINAL.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS FINAL.pdf"},{"title":"Meth. of Teaching Pri. Sch. Maths edited (1) Final","code":"EBS322D","filename":"EBS 322D Meth. of Teaching Pri. Sch. Maths edited (1) Final.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 322D Meth. of Teaching Pri. Sch. Maths edited (1) Final.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"CALCULUS","code":"EBS301","filename":"EBS 301 CALCULUS.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 301 CALCULUS.pdf"},{"title":"METHODS OF TEACHING GHANAIAN LANGUAGES (EWE)","code":"EBS319D","filename":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf"},{"title":"GENERAL CHEMISTRY PRACTICAL III","code":"EBS302PD","filename":"EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf"},{"title":"PRINCIPLES AND METHODS OF TEACHING VISUAL ARTS","code":"EBS329","filename":"EBS 329 PRINCIPLES AND METHODS OF TEACHING VISUAL ARTS.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 329 PRINCIPLES AND METHODS OF TEACHING VISUAL ARTS.pdf"},{"title":"METHODS OF TEACHING RME","code":"EBS324D","filename":"EBS 324D METHODS OF TEACHING RME.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 324D METHODS OF TEACHING RME.pdf"},{"title":"METHODS OF TEACHING COMPUTER STUDIES","code":"EBS316D","filename":"EBS 316D METHODS OF TEACHING COMPUTER STUDIES.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 316D METHODS OF TEACHING COMPUTER STUDIES.pdf"},{"title":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI","code":"","filename":"EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf"},{"title":"METHODS OF TEACHING AGRICULTURAL SCIENCE","code":"EBS314D","filename":"EBS 314D METHODS OF TEACHING AGRICULTURAL SCIENCE.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 314D METHODS OF TEACHING AGRICULTURAL SCIENCE.pdf"},{"title":"General Chemistry Theory III edited","code":"EBS302D","filename":"EBS 302D General Chemistry Theory III edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 302D General Chemistry Theory III edited.pdf"},{"title":"Meths of Teaching Basic Sch Eng (Reviewed)","code":"ENG201D","filename":"ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf"},{"title":"Population and Socioeconomic Development in Ghana Edited","code":"EBS347D","filename":"EBS 347D Population and Socioeconomic Development in Ghana Edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/EBS 347D Population and Socioeconomic Development in Ghana Edited.pdf"},{"title":"English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"Methods of Teaching Social Studies","code":"","filename":"Methods of Teaching Social Studies.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L300/Methods of Teaching Social Studies.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"EBS 451D Information Systems Management","code":"INF309D","filename":"INF_309D_EBS_451D_Information_Systems_Management.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/INF_309D_EBS_451D_Information_Systems_Management.pdf"},{"title":"Gender and Development in Africa -edited","code":"EBS410D","filename":"EBS 410D Gender and Development in Africa -edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EBS 410D Gender and Development in Africa -edited.pdf"},{"title":"Teaching Problem Solving in Maths (formated)","code":"EMA402D","filename":"EMA 402D Teaching Problem Solving in Maths (formated).pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EMA 402D Teaching Problem Solving in Maths (formated).pdf"},{"title":"Animal Production edited","code":"EBS406","filename":"EBS 406 Animal Production edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EBS 406 Animal Production edited.pdf"},{"title":"INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete","code":"EBS401D","filename":"EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf"},{"title":"INTRO. TO PICTURE MAKING 1-3","code":"EBS475D","filename":"EBS 475D INTRO. TO PICTURE MAKING 1-3.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EBS 475D INTRO. TO PICTURE MAKING 1-3.pdf"},{"title":"EBS 449D Sch. Mgt. & Admin. Edited","code":"EDF449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"},{"title":"Christian Ethics","code":"RHL420D","units":[{"label":"UNIT 1","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/RHL 420D Christian Ethics/RHL 420D Christian Ethics Unit 1.pdf"},{"label":"UNIT 2","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/RHL 420D Christian Ethics/RHL 420D Christian Ethics Unit 2.pdf"},{"label":"UNIT 3","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/RHL 420D Christian Ethics/RHL 420D Christian Ethics Unit 3.pdf"},{"label":"UNIT 4","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/RHL 420D Christian Ethics/RHL 420D Christian Ethics Unit 4.pdf"},{"label":"UNIT 5","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/RHL 420D Christian Ethics/RHL 420D Christian Ethics Unit 5.pdf"},{"label":"UNIT 6","relativePath":"/EDUCATION/Bed. Primary Education/BPE_L400/RHL 420D Christian Ethics/RHL 420D Christian Ethics Unit 6.pdf"}]}]},"Bed. Early Childhood Education":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/African Studies (Reviewed).pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child Development and Learning","code":"","filename":"Child Development and Learning.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/Child Development and Learning.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Performing Arts and Society edited","code":"EBS122D","filename":"EBS 122D Performing Arts and Society edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/EBS 122D Performing Arts and Society edited.pdf"},{"title":"Gen. Biology edited","code":"EBS103D","filename":"EBS 103D Gen. Biology edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/EBS 103D Gen. Biology edited.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/Language_and_Linguistics.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/Principles and Practice of Education.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L100/EBS 107D COMPUTER LITERACY edited.pdf"}],"200":[{"title":"GENERAL PHYSICS 1-4-1","code":"EBS227D","filename":"EBS 227D GENERAL PHYSICS 1-4-1.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 227D GENERAL PHYSICS 1-4-1.pdf"},{"title":"TEACHING MUSIC MOVEMENT AND DRAMA","code":"EBS267","filename":"EBS267 TEACHING MUSIC MOVEMENT AND DRAMA.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS267 TEACHING MUSIC MOVEMENT AND DRAMA.pdf"},{"title":"Int. to Semantics (Meaning) Edited 2011","code":"","filename":"Elective-Int._to_Semantics_(Meaning)_Edited_2011.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/Elective-Int._to_Semantics_(Meaning)_Edited_2011.pdf"},{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Env'tal & Nature Study Activities in ECE edited","code":"EBS208D","filename":"EBS 208D Env'tal & Nature Study Activities in ECE edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 208D Env'tal & Nature Study Activities in ECE edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Ghan.Lang. for ECE. Teachers edited","code":"EBS209D","filename":"EBS 209D Ghan.Lang. for ECE. Teachers edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L200/EBS 209D Ghan.Lang. for ECE. Teachers edited.pdf"}],"300":[{"title":"Meths of Teaching Basic Sch Sci (Diploma) (Reviewed)","code":"ESC323D","filename":"ESC 323D Meths of Teaching Basic Sch Sci (Diploma) (Reviewed).pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/ESC 323D Meths of Teaching Basic Sch Sci (Diploma) (Reviewed).pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS","code":"","filename":"METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS .pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS .pdf"},{"title":"Methods of Teaching Social Studies (reviewed)","code":"ESS433D","filename":"ESS 433D Methods of Teaching Social Studies  (reviewed).pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/ESS 433D Methods of Teaching Social Studies  (reviewed).pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Meths of Teaching Basic Sch Eng (Reviewed)","code":"ENG201D","filename":"ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf"},{"title":"Ghanaian Language for Early Childhood Education Teachers","code":"","filename":"Ghanaian Language for Early Childhood Education Teachers.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/Ghanaian Language for Early Childhood Education Teachers.pdf"},{"title":"Curriculum and Instructional programme","code":"EBS306D","filename":"EBS 306D Curriculum and Instructional programme.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L300/EBS 306D Curriculum and Instructional programme.pdf"}],"400":[{"title":"CONTEMPORARY ISSUES IN ECE","code":"EBS404","filename":"EBS 404 CONTEMPORARY ISSUES IN ECE.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L400/EBS 404 CONTEMPORARY ISSUES IN ECE.pdf"},{"title":"EBS 449D Sch. Mgt. & Admin. Edited","code":"EDF449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"},{"title":"Parent Family and Community Partnership","code":"","filename":"Parent Family and Community Partnership.pdf","relativePath":"/EDUCATION/Bed. Early Childhood Education/BECE_L400/Parent Family and Community Partnership.pdf"}]},"BJHSE MATHS & SCIENCE":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"GENERAL BIOLOGY PRACTICAL","code":"","filename":"GENERAL BIOLOGY PRACTICAL.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/GENERAL BIOLOGY PRACTICAL.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/Principles and Practice of Education.pdf"},{"title":"Gen. Biology edited","code":"EBS103D","filename":"EBS 103D Gen. Biology edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/EBS 103D Gen. Biology edited.pdf"},{"title":"elementary geometry","code":"","filename":"elementary_geometry.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/elementary_geometry.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"college algebra","code":"","filename":"college algebra.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/college algebra.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Nature of Maths edited","code":"EBS289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 289D Nature of Maths edited.pdf"},{"title":"Gen. Physics Theory II","code":"EBS216","filename":"EBS 216 Gen. Physics Theory II.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 216 Gen. Physics Theory II.pdf"},{"title":"Gen. Physics Practical II","code":"EBS216PD","filename":"EBS 216PD Gen. Physics Practical II.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 216PD Gen. Physics Practical II.pdf"},{"title":"Gen. chemistry Theory II edited","code":"EBS254D","filename":"EBS 254D Gen. chemistry Theory II edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 254D Gen. chemistry Theory II edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Gen. Chemistry Practical II","code":"","filename":"Gen. Chemistry Practical II.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/Gen. Chemistry Practical II.pdf"},{"title":"Algebraic Thinking","code":"","filename":"Algebraic Thinking.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L200/Algebraic Thinking.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"METH. of TEACHING JHS MATHEMATICS edited (2) Final","code":"EBS356D","filename":"EBS 356D METH. of TEACHING JHS MATHEMATICS edited (2) Final.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/EBS 356D METH. of TEACHING JHS MATHEMATICS edited (2) Final.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"CALCULUS","code":"EBS301","filename":"EBS 301 CALCULUS.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/EBS 301 CALCULUS.pdf"},{"title":"Pedagogical Cont. Knowl. in Maths","code":"","filename":"Pedagogical_Cont._Knowl._in_Maths.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/Pedagogical_Cont._Knowl._in_Maths.pdf"},{"title":"GENERAL CHEMISTRY PRACTICAL III","code":"EBS302PD","filename":"EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf"},{"title":"General Chemistry Theory III edited","code":"EBS302D","filename":"EBS 302D General Chemistry Theory III edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L300/EBS 302D General Chemistry Theory III edited.pdf"}],"400":[{"title":"Teaching Problem Solving in Maths (formated)","code":"EMA402D","filename":"EMA 402D Teaching Problem Solving in Maths (formated).pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L400/EMA 402D Teaching Problem Solving in Maths (formated).pdf"},{"title":"INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete","code":"EBS401D","filename":"EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L400/EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf"},{"title":"EBS 449D Sch. Mgt. & Admin. Edited","code":"EDF449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & SCIENCE/BJHSE_MATHS_&_SCI_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE SCIENCE & ICT":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/African Studies (Reviewed).pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"GENERAL BIOLOGY PRACTICAL","code":"","filename":"GENERAL BIOLOGY PRACTICAL.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/GENERAL BIOLOGY PRACTICAL.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/Principles and Practice of Education.pdf"},{"title":"Fundamentals of IT Edited","code":"EBS109D","filename":"EBS 109D Fundamentals of IT Edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/EBS 109D Fundamentals of IT Edited.pdf"},{"title":"Gen. Biology edited","code":"EBS103D","filename":"EBS 103D Gen. Biology edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/EBS 103D Gen. Biology edited.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Gen. Physics Theory II","code":"EBS216","filename":"EBS 216 Gen. Physics Theory II.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 216 Gen. Physics Theory II.pdf"},{"title":"DATABASES","code":"EBS285D","filename":"EBS 285D DATABASES.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 285D DATABASES.pdf"},{"title":"Gen. Chemistry Practical II","code":"EBS254PD","filename":"EBS 254PD Gen. Chemistry Practical II.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 254PD Gen. Chemistry Practical II.pdf"},{"title":"Gen. Physics Practical II","code":"EBS216PD","filename":"EBS 216PD Gen. Physics Practical II.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 216PD Gen. Physics Practical II.pdf"},{"title":"ICT Supported Teaching & Learning edited","code":"EBS281D","filename":"EBS 281D ICT Supported Teaching & Learning edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 281D ICT Supported Teaching & Learning edited.pdf"},{"title":"Gen. chemistry Theory II edited","code":"EBS254D","filename":"EBS 254D Gen. chemistry Theory II edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 254D Gen. chemistry Theory II edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"Meths of Teaching Basic Sch Sci (Diploma) (Reviewed)","code":"EBS203D","filename":"EBS203D Meths of Teaching Basic Sch Sci (Diploma) (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS203D Meths of Teaching Basic Sch Sci (Diploma) (Reviewed).pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"Intro. Atomic Physics, Heat & Optics (Practical) (1)","code":"PHY207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical) (1).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical) (1).pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/Intro Atomic Physics, Heat & Optics (Theory).pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"GENERAL CHEMISTRY PRACTICAL III","code":"EBS302PD","filename":"EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf"},{"title":"ICT Integration in Education Edited","code":"EBS337D","filename":"EBS 337D ICT Integration in Education Edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS 337D ICT Integration in Education Edited.pdf"},{"title":"General Chemistry Theory III edited","code":"EBS302D","filename":"EBS 302D General Chemistry Theory III edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L300/EBS 302D General Chemistry Theory III edited.pdf"}],"400":[{"title":"EBS 451D Information Systems Management","code":"INF309D","filename":"INF_309D_EBS_451D_Information_Systems_Management.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L400/INF_309D_EBS_451D_Information_Systems_Management.pdf"},{"title":"INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete","code":"EBS401D","filename":"EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L400/EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf"},{"title":"EBS 449D Sch. Mgt. & Admin. Edited","code":"EDF449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & ICT/BJHSE_SCI_&_ICT_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE SCIENCE & MATHS":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/Principles and Practice of Education.pdf"},{"title":"Gen. Biology edited","code":"EBS103D","filename":"EBS 103D Gen. Biology edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/EBS 103D Gen. Biology edited.pdf"},{"title":"elementary geometry","code":"","filename":"elementary_geometry.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/elementary_geometry.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"GENERAL BIOLOGY PRACTICAL","code":"","filename":"GENERAL BIOLOGY PRACTICAL.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/GENERAL BIOLOGY PRACTICAL.pdf"},{"title":"college algebra","code":"","filename":"college algebra.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/college algebra.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Nature of Maths edited","code":"EBS289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 289D Nature of Maths edited.pdf"},{"title":"Gen. Physics Theory II","code":"EBS216","filename":"EBS 216 Gen. Physics Theory II.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 216 Gen. Physics Theory II.pdf"},{"title":"Gen. Chemistry Practical II","code":"EBS254PD","filename":"EBS 254PD Gen. Chemistry Practical II.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 254PD Gen. Chemistry Practical II.pdf"},{"title":"Gen. Physics Practical II","code":"EBS216PD","filename":"EBS 216PD Gen. Physics Practical II.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 216PD Gen. Physics Practical II.pdf"},{"title":"Gen. chemistry Theory II edited","code":"EBS254D","filename":"EBS 254D Gen. chemistry Theory II edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 254D Gen. chemistry Theory II edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"Meths of Teaching Basic Sch Sci (Reviewed)","code":"EBS203D","filename":"EBS203D Meths of Teaching Basic Sch Sci (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS203D Meths of Teaching Basic Sch Sci (Reviewed).pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"Intro Atomic Physics, Heat & Optics (Theory) (1)","code":"","filename":"Intro Atomic Physics, Heat & Optics (Theory) (1).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/Intro Atomic Physics, Heat & Optics (Theory) (1).pdf"},{"title":"Intro. Atomic Physics, Heat & Optics (Practical) (1)","code":"PHY207D","filename":"PHY 207D Intro. Atomic Physics, Heat & Optics (Practical) (1).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/PHY 207D Intro. Atomic Physics, Heat & Optics (Practical) (1).pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"CALCULUS","code":"EBS301","filename":"EBS 301 CALCULUS.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS 301 CALCULUS.pdf"},{"title":"Pedagogical Cont. Knowl. in Maths","code":"","filename":"Pedagogical_Cont._Knowl._in_Maths.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/Pedagogical_Cont._Knowl._in_Maths.pdf"},{"title":"GENERAL CHEMISTRY PRACTICAL III","code":"EBS302PD","filename":"EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf"},{"title":"General Chemistry Theory III edited","code":"EBS302D","filename":"EBS 302D General Chemistry Theory III edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L300/EBS 302D General Chemistry Theory III edited.pdf"}],"400":[{"title":"Teaching Problem Solving in Maths (formated)","code":"EMA402D","filename":"EMA 402D Teaching Problem Solving in Maths (formated).pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L400/EMA 402D Teaching Problem Solving in Maths (formated).pdf"},{"title":"INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete","code":"EBS401D","filename":"EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L400/EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf"},{"title":"EBS 449D Sch. Mgt. & Admin. Edited","code":"EDF449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE SCIENCE & MATHS/BJHSE_SCI_&_MATHS_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE SOC STUDIES & ENGLISH":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/African Studies (Reviewed).pdf"},{"title":"Introduction to social studies","code":"","filename":"Introduction to social studies.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/Introduction to social studies.pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/Principles and Practice of Education.pdf"},{"title":"Human-Land Issues in Soc. Stds editted","code":"EBS157D","filename":"EBS 157D Human-Land Issues in Soc. Stds editted.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/EBS 157D Human-Land Issues in Soc. Stds editted.pdf"},{"title":"The Use of English edited","code":"ENG101D / EBS133D","filename":"ENG 101D.EBS 133D The Use of English edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/ENG 101D.EBS 133D The Use of English edited.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"SOC. STDS AS INTEGRATED SUBJECT(complete)","code":"","filename":"SOC. STDS AS INTEGRATED SUBJECT(complete).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/SOC. STDS AS INTEGRATED SUBJECT(complete).pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"Peace Building in our Communities edited","code":"EBS263D","filename":"EBS 263D Peace Building in our Communities edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/EBS 263D Peace Building in our Communities edited.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L300/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"Methods of Teaching Social Studies (reviewed)","code":"ESS433D","filename":"ESS 433D Methods of Teaching Social Studies  (reviewed).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L300/ESS 433D Methods of Teaching Social Studies  (reviewed).pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Global Studies in Africa Edited","code":"EBS326D","filename":"EBS 326D Global Studies in Africa Edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L300/EBS 326D Global Studies in Africa Edited.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"Gender and Development in Africa -edited","code":"EBS410D","filename":"EBS 410D Gender and Development in Africa -edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L400/EBS 410D Gender and Development in Africa -edited.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & ENGLISH/BJHSE_SOC_STU_&_ENG_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE SOC STUDIES & RME":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/African Studies (Reviewed).pdf"},{"title":"Introduction to social studies","code":"","filename":"Introduction to social studies.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/Introduction to social studies.pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/Principles and Practice of Education.pdf"},{"title":"Philo & Psycho. Founds of RME edited","code":"EBS123D","filename":"EBS 123D Philo & Psycho. Founds of RME edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/EBS 123D Philo & Psycho. Founds of RME edited.pdf"},{"title":"Human-Land Issues in Soc. Stds editted","code":"EBS157D","filename":"EBS 157D Human-Land Issues in Soc. Stds editted.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/EBS 157D Human-Land Issues in Soc. Stds editted.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Morality and Social Values in Africa","code":"","filename":"Morality and Social Values in Africa.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/Morality and Social Values in Africa.pdf"},{"title":"SOC. STDS AS INTEGRATED SUBJECT(complete)","code":"","filename":"SOC. STDS AS INTEGRATED SUBJECT(complete).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/SOC. STDS AS INTEGRATED SUBJECT(complete).pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"Peace Building in our Communities edited","code":"EBS263D","filename":"EBS 263D Peace Building in our Communities edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/EBS 263D Peace Building in our Communities edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"Methods of Teaching Social Studies (reviewed)","code":"ESS433D","filename":"ESS 433D Methods of Teaching Social Studies  (reviewed).pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L300/ESS 433D Methods of Teaching Social Studies  (reviewed).pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Global Studies in Africa Edited","code":"EBS326D","filename":"EBS 326D Global Studies in Africa Edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L300/EBS 326D Global Studies in Africa Edited.pdf"}],"400":[{"title":"Gender and Development in Africa -edited","code":"EBS410D","filename":"EBS 410D Gender and Development in Africa -edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L400/EBS 410D Gender and Development in Africa -edited.pdf"},{"title":"CHRISTIAN ETHICS","code":"RHL420D","filename":"RHL 420D CHRISTIAN ETHICS.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L400/RHL 420D CHRISTIAN ETHICS.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE SOC STUDIES & RME/BJHSE_SOC_STU_&_RME_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE ENGLISH & RME":{"100":[{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Studies in African Poetry edited","code":"EBS121D","filename":"EBS 121D Studies in African Poetry edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/EBS 121D Studies in African Poetry edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/Principles and Practice of Education.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"Philo & Psycho. Founds of RME edited","code":"EBS123D","filename":"EBS 123D Philo & Psycho. Founds of RME edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/EBS 123D Philo & Psycho. Founds of RME edited.pdf"},{"title":"The Use of English edited","code":"ENG101D / EBS133D","filename":"ENG 101D.EBS 133D The Use of English edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/ENG 101D.EBS 133D The Use of English edited.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Morality and Social Values in Africa","code":"","filename":"Morality and Social Values in Africa.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/Morality and Social Values in Africa.pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"Studies in Drama (Comedy & Tragedy) edited","code":"EBS223","filename":"EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"DEC036","filename":"DEC 036 Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L300/DEC 036 Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"METHODS OF TEACHING RME","code":"EBS324D","filename":"EBS 324D METHODS OF TEACHING RME.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L300/EBS 324D METHODS OF TEACHING RME.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L300/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"English Methodology","code":"","filename":"English Methodology.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L300/English Methodology.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"CHRISTIAN ETHICS","code":"RHL420D","filename":"RHL 420D CHRISTIAN ETHICS.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L400/RHL 420D CHRISTIAN ETHICS.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & RME/BJHSE_ENG_&_RME_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE ENGLISH & SOC STUDIES":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Studies in African Poetry edited","code":"EBS121D","filename":"EBS 121D Studies in African Poetry edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/EBS 121D Studies in African Poetry edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/Principles and Practice of Education.pdf"},{"title":"The Use of English edited","code":"ENG101D / EBS133D","filename":"ENG 101D.EBS 133D The Use of English edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/ENG 101D.EBS 133D The Use of English edited.pdf"},{"title":"Introduction to social studies","code":"","filename":"Introduction to social studies.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/Introduction to social studies.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"Peace Building in our Communities edited","code":"EBS263D","filename":"EBS 263D Peace Building in our Communities edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 263D Peace Building in our Communities edited.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"Studies in Drama (Comedy & Tragedy) edited","code":"EBS223","filename":"EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"Methods of Teaching Social Studies (reviewed)","code":"ESS433D","filename":"ESS 433D Methods of Teaching Social Studies  (reviewed).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L300/ESS 433D Methods of Teaching Social Studies  (reviewed).pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"DEC036","filename":"DEC 036 Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L300/DEC 036 Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L300/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"English Methodology","code":"","filename":"English Methodology.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L300/English Methodology.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"Gender and Development in Africa -edited","code":"EBS410D","filename":"EBS 410D Gender and Development in Africa -edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L400/EBS 410D Gender and Development in Africa -edited.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & SOC STUDIES/BJHSE_ENG_&_SOC_STU_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE FRENCH AND ENGLISH":{"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Literature in French - Poetry","code":"EBS312D","filename":"EBS 312D Literature in French - Poetry.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L300/EBS 312D Literature in French - Poetry.pdf"},{"title":"Meth of Teach. French as a foreign language EDITED","code":"EAS241D","filename":"EAS 241D Meth of Teach. French as a foreign language EDITED.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L300/EAS 241D Meth of Teach. French as a foreign language EDITED.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L300/Elective-English_Phonetics_and_Phonology.pdf"}],"400":[{"title":"Elective-Survey of English Literature","code":"","filename":"Elective-Survey_of_English_Literature.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L400/Elective-Survey_of_English_Literature.pdf"},{"title":"THE ESSAY IN FRENCH FINAL","code":"EBS422","filename":"EBS 422 THE ESSAY IN FRENCH FINAL.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L400/EBS 422 THE ESSAY IN FRENCH FINAL.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE FRENCH AND ENGLISH/BJHSE_FRENCH_&_ENG_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE GH LANGUAGE & ENGLISH":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited","code":"GHL116D","filename":"GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/Principles and Practice of Education.pdf"},{"title":"Ghan. Lang. & Culture – EWE","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – EWE.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 116 Ghan. Lang. & Culture – EWE.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"Linguistics of the Ghan. Lang (Mfantse) edited","code":"EBS120FD","filename":"EBS 120FD Linguistics of the Ghan. Lang (Mfantse) edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 120FD Linguistics of the Ghan. Lang (Mfantse) edited.pdf"},{"title":"The Use of English edited","code":"ENG101D / EBS133D","filename":"ENG 101D.EBS 133D The Use of English edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/ENG 101D.EBS 133D The Use of English edited.pdf"},{"title":"Ghan. Lang & Culture - Writ Tech. - Mfantse edited","code":"EBS116D","filename":"EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf"},{"title":"THE USE OF ENGLISH","code":"","filename":"THE USE OF ENGLISH.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/THE USE OF ENGLISH.pdf"},{"title":"Lingustics of the Ghan. Lang. (Twi)","code":"EBS120","filename":"EBS 120 Lingustics of the Ghan. Lang. (Twi).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 120 Lingustics of the Ghan. Lang. (Twi).pdf"},{"title":"Linguistics of the Ghan. Lang (GA)","code":"EBS120","filename":"EBS 120 Linguistics of the Ghan. Lang (GA).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 120 Linguistics of the Ghan. Lang (GA).pdf"},{"title":"Lingustics of the Ghan. Lang. (EWE)","code":"EBS120","filename":"EBS 120  Lingustics of the Ghan. Lang. (EWE).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/EBS 120  Lingustics of the Ghan. Lang. (EWE).pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"PHONOLOGY OF THE GHANAIAN LANGUAGE (EWE)","code":"EBS261","filename":"EBS 261 PHONOLOGY OF THE GHANAIAN LANGUAGE (EWE).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 261 PHONOLOGY OF THE GHANAIAN LANGUAGE (EWE).pdf"},{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Essay Writing - Ga (1-3)","code":"EBS233","filename":"EBS 233 Essay Writing - Ga (1-3).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 233 Essay Writing - Ga (1-3).pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"Ghan. Lang & Cult.(Essay Writing) Mfantse","code":"GHL207D / EBS233D","filename":"GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Mfantse.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Mfantse.pdf"},{"title":"Ghan. Lang & Cult.(Essay Writing) Ewe","code":"GHL207D / EBS233D","filename":"GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Ewe.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Ewe.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"Ghan. Lang & Cult.(Essay Writing) Twi edited","code":"GHL207D / EBS233D","filename":"GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Twi Phonology of the Ghanaian Lang unit 1-3","code":"EBS261","filename":"EBS 261 Twi Phonology of the Ghanaian Lang unit 1-3.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/EBS 261 Twi Phonology of the Ghanaian Lang unit 1-3.pdf"},{"title":"MFANTSE EBS 261 (PHONOLOGY) - UNIT 1 - 6","code":"","filename":"MFANTSE EBS 261 (PHONOLOGY) - UNIT 1 - 6.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L200/MFANTSE EBS 261 (PHONOLOGY) - UNIT 1 - 6.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D  Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/EBS330D  Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"ENGLISH PHONETICS AND PHONOLOGY","code":"","filename":"ENGLISH PHONETICS AND PHONOLOGY.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/ENGLISH PHONETICS AND PHONOLOGY.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Language Usage – Syntax(EWE final","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage – Syntax(EWE final.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/GHL 102D.GHL 313D Language Usage – Syntax(EWE final.pdf"},{"title":"Language Usage - Syntax (Twi)","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (Twi).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/GHL 102D.GHL 313D Language Usage - Syntax (Twi).pdf"},{"title":"Language Usage - Syntax (Mfantse","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (Mfantse.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/GHL 102D.GHL 313D Language Usage - Syntax (Mfantse.pdf"},{"title":"Language Usage - Syntax (GA edited final)","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (GA edited final).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/GHL 102D.GHL 313D Language Usage - Syntax (GA edited final).pdf"},{"title":"METHODS OF TEACHING GHANAIAN LANGUAGES (EWE)","code":"EBS319D","filename":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf"},{"title":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI","code":"EAS351D","filename":"EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf"},{"title":"English Methodology","code":"","filename":"English Methodology.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L300/English Methodology.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE GH LANGUAGE & ENGLISH/BJHSE_GH_LANG_&_ENG_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE HOME ECONOMICS":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/African Studies (Reviewed).pdf"},{"title":"Fundamentals of Home Economics edited","code":"EBS112D","filename":"EBS 112D Fundamentals of Home Economics edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/EBS 112D Fundamentals of Home Economics edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Sociology of the Family","code":"","filename":"Sociology_of_the_Family.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/Sociology_of_the_Family.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/Principles and Practice of Education.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"MEAL MANAGEMENT","code":"EBS225D","filename":"EBS 225D MEAL MANAGEMENT.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/EBS 225D MEAL MANAGEMENT.pdf"},{"title":"s Foundations of TVET complete","code":"EBS221","filename":"EBS 221s Foundations of TVET complete.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/EBS 221s Foundations of TVET complete.pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Textiles and Fibres","code":"","filename":"Textiles and Fibres.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L200/Textiles and Fibres.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"Meth. of Teaching Home Econs","code":"EBS353D","filename":"EBS 353D Meth. of Teaching Home Econs.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 353D Meth. of Teaching Home Econs.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"FOOD HANDLING AND PRESERVATION Edited","code":"EBS307D","filename":"EBS 307D FOOD HANDLING AND PRESERVATION Edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 307D FOOD HANDLING AND PRESERVATION Edited.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"CLOTHING CONSTRUCTION","code":"EBS303D","filename":"EBS 303D CLOTHING CONSTRUCTION.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 303D CLOTHING CONSTRUCTION.pdf"},{"title":"Issues in Family Finance edited","code":"EBS341D","filename":"EBS 341D Issues in Family Finance edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 341D Issues in Family Finance edited.pdf"},{"title":"Principles of Housing and Housing MGT Edited","code":"EBS367D","filename":"EBS 367D Principles of Housing and Housing MGT Edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L300/EBS 367D Principles of Housing and Housing MGT Edited.pdf"}],"400":[{"title":"D Issues in Food Safety & Sanitation edited","code":"EBS429","filename":"EBS 429 D Issues in Food Safety & Sanitation  edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L400/EBS 429 D Issues in Food Safety & Sanitation  edited.pdf"},{"title":"Housing and Home Improvement","code":"EBS430D","filename":"EBS 430D Housing and Home Improvement.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L400/EBS 430D Housing and Home Improvement.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE HOME ECONOMICS/BJHSE_HOME ECONS_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE ICT & MATHS":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/Principles and Practice of Education.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/Info_Lit..pdf"},{"title":"Fundamentals of IT Edited","code":"EBS109D","filename":"EBS 109D Fundamentals of IT Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/EBS 109D Fundamentals of IT Edited.pdf"},{"title":"college algebra","code":"","filename":"college algebra.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/college algebra.pdf"},{"title":"ELEMENTARY GEOMETRY","code":"","filename":"ELEMENTARY GEOMETRY.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/ELEMENTARY GEOMETRY.pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"NATURE OF MATHS FINAL","code":"EMA201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"Algebraic Thinking","code":"","filename":"Algebraic Thinking.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/Algebraic Thinking.pdf"},{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Nature of Maths edited","code":"EBS289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EBS 289D Nature of Maths edited.pdf"},{"title":"DATABASES","code":"EBS285D","filename":"EBS 285D DATABASES.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EBS 285D DATABASES.pdf"},{"title":"ICT Supported Teaching & Learning edited","code":"EBS281D","filename":"EBS 281D ICT Supported Teaching & Learning edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EBS 281D ICT Supported Teaching & Learning edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"CALCULUS","code":"EBS301","filename":"EBS 301 CALCULUS.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L300/EBS 301 CALCULUS.pdf"},{"title":"METHODS OF TEACHING COMPUTER STUDIES","code":"EBS316D","filename":"EBS 316D METHODS OF TEACHING COMPUTER STUDIES.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L300/EBS 316D METHODS OF TEACHING COMPUTER STUDIES.pdf"},{"title":"ICT Integration in Education Edited","code":"EBS337D","filename":"EBS 337D ICT Integration in Education Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L300/EBS 337D ICT Integration in Education Edited.pdf"}],"400":[{"title":"Teaching Problem Solving in Maths (formated)","code":"EMA402D","filename":"EMA 402D Teaching Problem Solving in Maths (formated).pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L400/EMA 402D Teaching Problem Solving in Maths (formated).pdf"},{"title":"Information Systems Mgt","code":"EBS451D","filename":" EBS451D Information Systems Mgt.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L400/ EBS451D Information Systems Mgt.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & MATHS/BJHSE_ICT_&_MATHS_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE ICT & SCIENCE":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"GENERAL BIOLOGY PRACTICAL","code":"","filename":"GENERAL BIOLOGY PRACTICAL.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/GENERAL BIOLOGY PRACTICAL.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/Principles and Practice of Education.pdf"},{"title":"Fundamentals of IT Edited","code":"EBS109D","filename":"EBS 109D Fundamentals of IT Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/EBS 109D Fundamentals of IT Edited.pdf"},{"title":"Gen Biology Theory","code":"EBS114","filename":"EBS_114_Gen_Biology_Theory.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/EBS_114_Gen_Biology_Theory.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Gen. Physics Theory II","code":"EBS216","filename":"EBS 216 Gen. Physics Theory II.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 216 Gen. Physics Theory II.pdf"},{"title":"Gen. Chemistry Practical II","code":"EBS254PD","filename":"EBS 254PD Gen. Chemistry Practical II.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 254PD Gen. Chemistry Practical II.pdf"},{"title":"DATABASES","code":"EBS285D","filename":"EBS 285D DATABASES.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 285D DATABASES.pdf"},{"title":"ICT Supported Teaching & Learning edited","code":"EBS281D","filename":"EBS 281D ICT Supported Teaching & Learning edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 281D ICT Supported Teaching & Learning edited.pdf"},{"title":"Gen. chemistry Theory II edited","code":"EBS254D","filename":"EBS 254D Gen. chemistry Theory II edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 254D Gen. chemistry Theory II edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"GENERAL PHYSICS PRACTICAL II","code":"","filename":"GENERAL PHYSICS PRACTICAL II.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L200/GENERAL PHYSICS PRACTICAL II.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"GENERAL CHEMISTRY PRACTICAL III","code":"EBS302PD","filename":"EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS 302PD GENERAL CHEMISTRY PRACTICAL III.pdf"},{"title":"METHODS OF TEACHING COMPUTER STUDIES","code":"EBS316D","filename":"EBS 316D METHODS OF TEACHING COMPUTER STUDIES.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS 316D METHODS OF TEACHING COMPUTER STUDIES.pdf"},{"title":"ICT Integration in Education Edited","code":"EBS337D","filename":"EBS 337D ICT Integration in Education Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS 337D ICT Integration in Education Edited.pdf"},{"title":"D General Chemistry Theory III edited","code":"EBS302","filename":"EBS 302 D General Chemistry Theory III edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L300/EBS 302 D General Chemistry Theory III edited.pdf"}],"400":[{"title":"Copy of EBS451D Information Systems Mgt","code":"","filename":"Copy of  EBS451D Information Systems Mgt.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L400/Copy of  EBS451D Information Systems Mgt.pdf"},{"title":"INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete","code":"EBS401D","filename":"EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L400/EBS 401D INTRODUCTION TO SCIENTIFIC INVESTIGATIONS Complete.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE ICT & SCIENCE/BJHSE_ICT_&_SCI_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE MATHS & ICT":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/African Studies (Reviewed).pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/Principles and Practice of Education.pdf"},{"title":"Fundamentals of IT Edited","code":"EBS109D","filename":"EBS 109D Fundamentals of IT Edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/EBS 109D Fundamentals of IT Edited.pdf"},{"title":"elementary geometry","code":"","filename":"elementary_geometry.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/elementary_geometry.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"college algebra","code":"","filename":"college algebra.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/college algebra.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"NATURE OF MATHS FINAL","code":"EMA201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Nature of Maths edited","code":"EBS289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EBS 289D Nature of Maths edited.pdf"},{"title":"DATABASES","code":"EBS285D","filename":"EBS 285D DATABASES.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EBS 285D DATABASES.pdf"},{"title":"ICT Supported Teaching & Learning edited","code":"EBS281D","filename":"EBS 281D ICT Supported Teaching & Learning edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EBS 281D ICT Supported Teaching & Learning edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Algebraic Thinking","code":"","filename":"Algebraic Thinking.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L200/Algebraic Thinking.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"METH of TEACHING JHS MATHEMATICS EDITED","code":"EBS356D","filename":"EBS 356D METH of TEACHING JHS MATHEMATICS EDITED.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/EBS 356D METH of TEACHING JHS MATHEMATICS EDITED.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"CALCULUS","code":"EBS301","filename":"EBS 301 CALCULUS.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/EBS 301 CALCULUS.pdf"},{"title":"Pedagogical Cont. Knowl. in Maths","code":"","filename":"Pedagogical_Cont._Knowl._in_Maths.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/Pedagogical_Cont._Knowl._in_Maths.pdf"},{"title":"ICT Integration in Education Edited","code":"EBS337D","filename":"EBS 337D ICT Integration in Education Edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L300/EBS 337D ICT Integration in Education Edited.pdf"}],"400":[{"title":"Teaching Problem Solving in Maths (formated)","code":"EMA402D","filename":"EMA 402D Teaching Problem Solving in Maths (formated).pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L400/EMA 402D Teaching Problem Solving in Maths (formated).pdf"},{"title":"EBS 451D Information Systems Management","code":"INF309D","filename":"INF_309D_EBS_451D_Information_Systems_Management.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L400/INF_309D_EBS_451D_Information_Systems_Management.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE MATHS & ICT/BJHSE_MATHS_&_ICT_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE RME & SOC STUDIES":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/African Studies (Reviewed).pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/Principles and Practice of Education.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"INTRODUCTION TO THE STUDY OF RELIGION AND HUMAN VALUES","code":"RLH101D","filename":"RLH 101D INTRODUCTION TO THE STUDY OF RELIGION AND HUMAN VALUES.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/RLH 101D INTRODUCTION TO THE STUDY OF RELIGION AND HUMAN VALUES.pdf"},{"title":"Philo & Psycho. Founds of RME edited","code":"EBS123D","filename":"EBS 123D Philo & Psycho. Founds of RME edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/EBS 123D Philo & Psycho. Founds of RME edited.pdf"},{"title":"Introduction to social studies","code":"","filename":"Introduction to social studies.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/Introduction to social studies.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Morality and Social Values in Africa","code":"","filename":"Morality and Social Values in Africa.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/Morality and Social Values in Africa.pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"Peace Building in our Communities edited","code":"EBS263D","filename":"EBS 263D Peace Building in our Communities edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/EBS 263D Peace Building in our Communities edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Biblical Studies unit 1,2,3&4","code":"","filename":"Biblical Studies unit 1,2,3&4.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L200/Biblical Studies unit 1,2,3&4.pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Global Studies in Africa Edited","code":"EBS326D","filename":"EBS 326D Global Studies in Africa Edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L300/EBS 326D Global Studies in Africa Edited.pdf"},{"title":"METHODS OF TEACHING RME","code":"EBS324D","filename":"EBS 324D METHODS OF TEACHING RME.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L300/EBS 324D METHODS OF TEACHING RME.pdf"}],"400":[{"title":"Gender and Development in Africa -edited","code":"EBS410D","filename":"EBS 410D Gender and Development in Africa -edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L400/EBS 410D Gender and Development in Africa -edited.pdf"},{"title":"CHRISTIAN ETHICS","code":"RHL420D","filename":"RHL 420D CHRISTIAN ETHICS.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L400/RHL 420D CHRISTIAN ETHICS.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE RME & SOC STUDIES/BJHSE_RME_&_SOC_STU_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE ENGLISH & GH LANGUAGE":{"100":[{"title":"Communicative Skills 1 (1)","code":"CMS107D","filename":"Communicative_Skills_1 (1).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/Communicative_Skills_1 (1).pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"African Studies (Reviewed).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/African Studies (Reviewed).pdf"},{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited","code":"GHL116D","filename":"GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf"},{"title":"Studies in African Poetry edited","code":"EBS121D","filename":"EBS 121D Studies in African Poetry edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 121D Studies in African Poetry edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/Principles and Practice of Education.pdf"},{"title":"Ghan. Lang. & Culture – Ga","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – Ga.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 116 Ghan. Lang. & Culture – Ga.pdf"},{"title":"Ghan. Lang. & Culture – EWE","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – EWE.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 116 Ghan. Lang. & Culture – EWE.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"The Use of English edited","code":"ENG101D / EBS133D","filename":"ENG 101D.EBS 133D The Use of English edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/ENG 101D.EBS 133D The Use of English edited.pdf"},{"title":"Ghan. Lang & Culture - Writ Tech. - Mfantse edited","code":"EBS116D","filename":"EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Phonology of the Ghanaian Language Mfantse edited","code":"EBS261FD / GHL316FD","filename":"EBS 261FD.GHL 316FD Phonology of the Ghanaian Language Mfantse edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 261FD.GHL 316FD Phonology of the Ghanaian Language Mfantse edited.pdf"},{"title":"PHONOLOGY OF THE GHANAIAN LANGUAGE (EWE)","code":"EBS261","filename":"EBS 261 PHONOLOGY OF THE GHANAIAN LANGUAGE (EWE).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 261 PHONOLOGY OF THE GHANAIAN LANGUAGE (EWE).pdf"},{"title":"HEALTH AND PHYSICAL FITINESS","code":"EBS218D","filename":"EBS 218D HEALTH AND PHYSICAL FITINESS.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 218D HEALTH AND PHYSICAL FITINESS.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"Studies in Drama (Comedy & Tragedy) edited","code":"EBS223","filename":"EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Twi Phonology of the Ghanaian Lang unit 1-3","code":"EBS261","filename":"EBS 261 Twi Phonology of the Ghanaian Lang unit 1-3.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L200/EBS 261 Twi Phonology of the Ghanaian Lang unit 1-3.pdf"}],"300":[{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"DEC036","filename":"DEC 036 Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L300/DEC 036 Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"METHODS OF TEACHING GHANAIAN LANGUAGES (EWE)","code":"EBS319D","filename":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L300/EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf"},{"title":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI","code":"EAS351D","filename":"EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L300/EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L300/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"English Methodology","code":"","filename":"English Methodology.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L300/English Methodology.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE ENGLISH & GH LANGUAGE/BJHSE_ENG_&_GH_LANG_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BJHSE AGRIC SCI & ICT":{"100":[{"title":"Elementary Algebra edited","code":"EBS101D","filename":"EBS 101D Elementary Algebra edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/EBS 101D Elementary Algebra edited.pdf"},{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"Fundamentals of IT Edited","code":"EBS109D","filename":"EBS 109D Fundamentals of IT Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/EBS 109D Fundamentals of IT Edited.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"General Agric. I edited","code":"EBS113D","filename":"EBS 113D General Agric. I edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/EBS 113D General Agric. I edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/Principles and Practice of Education.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L100/Language_and_Linguistics.pdf"}],"200":[{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Unit 1 6 Agricultural Entreprenuship CoDE 2021 Draft","code":"","filename":"Unit 1_6 Agricultural Entreprenuship _CoDE_2021_Draft.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/Unit 1_6 Agricultural Entreprenuship _CoDE_2021_Draft.pdf"},{"title":"DATABASES","code":"EBS285D","filename":"EBS 285D DATABASES.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/EBS 285D DATABASES.pdf"},{"title":"Crop Production Edited IC","code":"EBS205D","filename":"EBS 205D Crop Production Edited IC.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/EBS 205D Crop Production Edited IC.pdf"},{"title":"ICT Supported Teaching & Learning edited","code":"EBS281D","filename":"EBS 281D ICT Supported Teaching & Learning edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/EBS 281D ICT Supported Teaching & Learning edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Agric Value Chain (1-4)","code":"","filename":"Agric Value Chain (1-4).pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L200/Agric Value Chain (1-4).pdf"}],"300":[{"title":"METHODS OF TEACHING AGRICULTURAL SCIENCE","code":"EBS314D","filename":"EBS 314D METHODS OF TEACHING AGRICULTURAL SCIENCE.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/EBS 314D METHODS OF TEACHING AGRICULTURAL SCIENCE.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"Unit 1 6 Agricultural Entreprenuship CoDE 2021 Draft","code":"","filename":"Unit 1_6 Agricultural Entreprenuship _CoDE_2021_Draft.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/Unit 1_6 Agricultural Entreprenuship _CoDE_2021_Draft.pdf"},{"title":"Intro. to Statistics","code":"MAT304D / EBS350D","filename":"MAT 304D.EBS 350D Intro. to Statistics.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/MAT 304D.EBS 350D Intro. to Statistics.pdf"},{"title":"ICT Integration in Education Edited","code":"EBS337D","filename":"EBS 337D ICT Integration in Education Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/EBS 337D ICT Integration in Education Edited.pdf"},{"title":"Non-Traditional Animal Farming Edited","code":"EBS305D","filename":"EBS 305D Non-Traditional Animal Farming Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/EBS 305D Non-Traditional Animal Farming Edited.pdf"},{"title":"Ghan. Lang. as a Medium of Instruction","code":"DEC036","filename":"DEC 036 Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & ICT/BJHSE_AGRISCI_&_ICT_L300/DEC 036 Ghan. Lang. as a Medium of Instruction.pdf"}]},"BJHSE AGRIC SCI & MATHS":{"100":[{"title":"Child and Adolescent Development & Learning edited 2","code":"EBS105D","filename":"EBS 105D Child and Adolescent Development & Learning edited 2.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/EBS 105D Child and Adolescent Development & Learning edited 2.pdf"},{"title":"COMPUTER LITERACY edited","code":"EBS107D","filename":"EBS 107D COMPUTER LITERACY edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/EBS 107D COMPUTER LITERACY edited.pdf"},{"title":"General Agric. I edited","code":"EBS113D","filename":"EBS 113D General Agric. I edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/EBS 113D General Agric. I edited.pdf"},{"title":"Principles and Practice of Education","code":"","filename":"Principles and Practice of Education.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/Principles and Practice of Education.pdf"},{"title":"college algebra","code":"","filename":"college algebra.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/college algebra.pdf"},{"title":"Info Lit.","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/Info_Lit..pdf"},{"title":"Language and Linguistics","code":"","filename":"Language_and_Linguistics.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/Language_and_Linguistics.pdf"},{"title":"elementary geometry","code":"","filename":"elementary_geometry.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L100/elementary_geometry.pdf"}],"200":[{"title":"NATURE OF MATHS FINAL","code":"EMA201D","filename":"EMA 201D NATURE OF MATHS FINAL.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/EMA 201D NATURE OF MATHS FINAL.pdf"},{"title":"Eng. Lang. Studies II edited","code":"EBS207","filename":"EBS 207 Eng. Lang. Studies II edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/EBS 207 Eng. Lang. Studies II edited.pdf"},{"title":"Unit 1 6 Agricultural Entreprenuship CoDE 2021 Draft","code":"","filename":"Unit 1_6 Agricultural Entreprenuship _CoDE_2021_Draft.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/Unit 1_6 Agricultural Entreprenuship _CoDE_2021_Draft.pdf"},{"title":"Crop Production Edited IC","code":"EBS205D","filename":"EBS 205D Crop Production Edited IC.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/EBS 205D Crop Production Edited IC.pdf"},{"title":"Nature of Maths edited","code":"EBS289D","filename":"EBS 289D Nature of Maths edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/EBS 289D Nature of Maths edited.pdf"},{"title":"GENERAL CURRICULUM STUDIES edited","code":"EBS215D","filename":"EBS 215D GENERAL CURRICULUM STUDIES edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/EBS 215D GENERAL CURRICULUM STUDIES edited.pdf"},{"title":"Health, Safety & Soc. Issues in Schools UNITS 1-4","code":"EBS167","filename":"EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/EBS 167 Health, Safety & Soc. Issues in Schools UNITS 1-4.pdf"},{"title":"Agric Value Chain (1-4)","code":"","filename":"Agric Value Chain (1-4).pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L200/Agric Value Chain (1-4).pdf"}],"300":[{"title":"Ghan. Lang. as a Medium of Instruction","code":"EBS330D","filename":"EBS330D Ghan. Lang. as a Medium of Instruction.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/EBS330D Ghan. Lang. as a Medium of Instruction.pdf"},{"title":"PROBABILITY AND STATISTICS I","code":"EBS350D","filename":"EBS 350D PROBABILITY AND STATISTICS I.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/EBS 350D PROBABILITY AND STATISTICS I.pdf"},{"title":"In-Service Education & Training Edited","code":"EBS355D","filename":"EBS 355D In-Service Education & Training Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/EBS 355D In-Service Education & Training Edited.pdf"},{"title":"CALCULUS","code":"EBS301","filename":"EBS 301 CALCULUS.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/EBS 301 CALCULUS.pdf"},{"title":"METHODS OF TEACHING AGRICULTURAL SCIENCE","code":"EBS314D","filename":"EBS 314D METHODS OF TEACHING AGRICULTURAL SCIENCE.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/EBS 314D METHODS OF TEACHING AGRICULTURAL SCIENCE.pdf"},{"title":"Non-Traditional Animal Farming Edited","code":"EBS305D","filename":"EBS 305D Non-Traditional Animal Farming Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/EBS 305D Non-Traditional Animal Farming Edited.pdf"},{"title":"Pedagogical Cont. Knowl. in Maths","code":"","filename":"Pedagogical_Cont._Knowl._in_Maths.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHSE_AGRISCI_&_MATHS_L300/Pedagogical_Cont._Knowl._in_Maths.pdf"}],"400":[{"title":"Animal Production edited","code":"EBS406","filename":"EBS 406 Animal Production edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHS_AGRISCI & MATHS L400/EBS 406 Animal Production edited.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHS_AGRISCI & MATHS L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"},{"title":"Copy of EBS451D Information Systems Mgt","code":"","filename":"Copy of  EBS451D Information Systems Mgt.pdf","relativePath":"/EDUCATION/BJHSE AGRIC SCI & MATHS/BJHS_AGRISCI & MATHS L400/Copy of  EBS451D Information Systems Mgt.pdf"}]},"BBE":{"300":[{"title":"Mathematics for Senior High School","code":"MAT411D","filename":"MAT 411D Mathematics for Senior High School.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/MAT 411D Mathematics for Senior High School.pdf"},{"title":"Introductory Agriculture","code":"","filename":"Introductory_Agriculture.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Introductory_Agriculture.pdf"},{"title":"Psychology of Adolescence Revised final 2022","code":"EPS401D","filename":"EPS 401D Psychology of Adolescence Revised final 2022.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/EPS 401D Psychology of Adolescence Revised final 2022.pdf"},{"title":"Info Lit","code":"ILT101D","filename":"Info_Lit.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Info_Lit.pdf"},{"title":"Introduction to social studies","code":"","filename":"Introduction_to_social_studies.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Introduction_to_social_studies.pdf"},{"title":"Vocational Skills","code":"","filename":"Vocational_Skills.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Vocational_Skills.pdf"},{"title":"Elective-VARIETIES OF ENGLISH","code":"","filename":"Elective-VARIETIES _OF_ENGLISH.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Elective-VARIETIES _OF_ENGLISH.pdf"},{"title":"Elective-Sec. Sch. Science 1","code":"","filename":"Elective-Sec._Sch._Science_1.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Elective-Sec._Sch._Science_1.pdf"},{"title":"Elective-FRENCH 1 Module One","code":"","filename":"Elective-FRENCH_1_Module_One.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Elective-FRENCH_1_Module_One.pdf"},{"title":"Core-English Syntax","code":"","filename":"Core-English_Syntax.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Core-English_Syntax.pdf"},{"title":"Core-Communicative Skills 2","code":"","filename":"Core-Communicative_Skills_2.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 300/Core-Communicative_Skills_2.pdf"}],"400":[{"title":"Methods of Teaching Social Studies (reviewed)","code":"ESS433D","filename":"ESS 433D Methods of Teaching Social Studies  (reviewed).pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/ESS 433D Methods of Teaching Social Studies  (reviewed).pdf"},{"title":"Intermediate Agric 3","code":"","filename":"Intermediate Agric 3.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Intermediate Agric 3.pdf"},{"title":"French 3","code":"","filename":"French 3.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/French 3.pdf"},{"title":"Electives-Social Studies (Govt Politics Stability) (1)","code":"","filename":"Electives-Social_Studies_(Govt_Politics__Stability) (1).pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Electives-Social_Studies_(Govt_Politics__Stability) (1).pdf"},{"title":"Meth of Teach. French as a foreign language EDITED","code":"EAS241D","filename":"EAS 241D Meth of Teach. French as a foreign language EDITED.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/EAS 241D Meth of Teach. French as a foreign language EDITED.pdf"},{"title":"Core-African Studies (Reviewed)","code":"ASP101D","filename":"Core-African_Studies_(Reviewed).pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Core-African_Studies_(Reviewed).pdf"},{"title":"votech 4","code":"","filename":"votech 4.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/votech 4.pdf"},{"title":"VOTEC 3","code":"","filename":"VOTEC 3.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/VOTEC 3.pdf"},{"title":"Science Methods for Basic School Teacherss","code":"","filename":"Science Methods for Basic School Teacherss.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Science Methods for Basic School Teacherss.pdf"},{"title":"Science for Basic School Teachers 3","code":"","filename":"Science for Basic School Teachers 3.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Science for Basic School Teachers 3.pdf"},{"title":"Methods of Teach JHS Maths 1","code":"","filename":"Methods of Teach JHS Maths 1.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Methods of Teach JHS Maths 1.pdf"},{"title":"Maths for Senior High Sch. Trs. 3","code":"","filename":"Maths for Senior High Sch. Trs. 3.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Maths for Senior High Sch. Trs. 3.pdf"},{"title":"English Methodology","code":"","filename":"English Methodology.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/English Methodology.pdf"},{"title":"Elective-INTERMEDIATE AGRIC 2","code":"","filename":"Elective-INTERMEDIATE_AGRIC_2.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Elective-INTERMEDIATE_AGRIC_2.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BBE/BBE LEVEL 400/Elective-English_Phonetics_and_Phonology.pdf"}]},"BED ACCOUNTING":{"100":[{"title":"Communicative Skills 1","code":"CMS107D","filename":"Communicative_Skills_1.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Communicative_Skills_1.pdf"},{"title":"Principles of Accounting 1","code":"","filename":"Principles_of_Accounting_1.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Principles_of_Accounting_1.pdf"},{"title":"Introduction to Business 1","code":"","filename":"Introduction_to_Business_1.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Introduction_to_Business_1.pdf"},{"title":"Core-African Studies","code":"ASP101D","filename":"Core-African_Studies.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Core-African_Studies.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Social and Philosophical Foundations of Education.pdf"},{"title":"Principles of Economics 1","code":"ECO101D","filename":"Principles_of_Economics_1.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Principles_of_Economics_1.pdf"},{"title":"Info Lit","code":"ILT101D","filename":"Info_Lit.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_100/Info_Lit.pdf"}],"200":[{"title":"Financial Reporting I","code":"","filename":"Financial_Reporting_I.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_200/Financial_Reporting_I.pdf"},{"title":"Bus. communication","code":"","filename":"Bus._communication.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_200/Bus._communication.pdf"},{"title":"CURRICULUM STUDIES IN ACCOUNTING","code":"ESS217","filename":"ESS 217 CURRICULUM STUDIES IN ACCOUNTING.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_200/ESS 217 CURRICULUM STUDIES IN ACCOUNTING.pdf"},{"title":"Quantitative Methods 1","code":"","filename":"Quantitative_Methods_1.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_200/Quantitative_Methods_1.pdf"},{"title":"Elective-Human Resource Mgt","code":"","filename":"Elective-Human_Resource_Mgt.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_200/Elective-Human_Resource_Mgt.pdf"},{"title":"Business Law I","code":"","filename":"Business_Law_ I.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_200/Business_Law_ I.pdf"}],"300":[{"title":"Economy of Ghana","code":"ECO308D","filename":"ECO 308D Economy of Ghana.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_300/ECO 308D Economy of Ghana.pdf"},{"title":"Company and Partnership Law","code":"","filename":"Company and Partnership Law.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_300/Company and Partnership Law.pdf"},{"title":"MIS I","code":"EMG302D","filename":"EMG 302D MIS I.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_300/EMG 302D MIS I.pdf"},{"title":"TAXATION","code":"","filename":"TAXATION.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_300/TAXATION.pdf"},{"title":"COST AND MANAGEMENT ACCOUNTING 1","code":"","filename":"COST AND MANAGEMENT ACCOUNTING 1.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_300/COST AND MANAGEMENT ACCOUNTING 1.pdf"},{"title":"Methods of Teaching Accounting(formatted","code":"","filename":"Methods of Teaching Accounting(formatted.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_300/Methods of Teaching Accounting(formatted.pdf"}],"400":[{"title":"Entrepreneurship","code":"","filename":"Entrepreneurship.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_400/Entrepreneurship.pdf"},{"title":"Advanced Accounting 1 (rev'd) 2015","code":"","filename":"Advanced Accounting 1 (rev'd) 2015.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_400/Advanced Accounting 1 (rev'd) 2015.pdf"},{"title":"Audit and Internal Review","code":"ACC403D","filename":"ACC 403D Audit and Internal Review.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_400/ACC 403D Audit and Internal Review.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BED ACCOUNTING/Bed_ACCT_400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BED ARTS":{"100":[{"title":"INFORMATION LITERACY.","code":"ILS101D","filename":"ILS101D INFORMATION LITERACY..pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/ILS101D INFORMATION LITERACY..pdf"},{"title":"Communicative Skills 1","code":"CMS107D","filename":"Communicative_Skills_1.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/Communicative_Skills_1.pdf"},{"title":"Introduction to Second Language Learning and Teaching","code":"","filename":"Introduction to Second Language Learning and Teaching.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/Introduction to Second Language Learning and Teaching.pdf"},{"title":"The core of historical knowledge","code":"","filename":"The core of historical knowledge.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/The core of historical knowledge.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/Social and Philosophical Foundations of Education.pdf"},{"title":"Ghan. Lang. & Culture – Ga","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – Ga.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/EBS 116 Ghan. Lang. & Culture – Ga.pdf"},{"title":"Ghan. Lang. & Culture – EWE","code":"EBS116","filename":"EBS 116 Ghan. Lang. & Culture – EWE.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/EBS 116 Ghan. Lang. & Culture – EWE.pdf"},{"title":"Core-African Studies","code":"ASP101D","filename":"Core-African_Studies.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/Core-African_Studies.pdf"},{"title":"Ghan. Lang. & Culture -Writing Tech. (Ga)","code":"GHL107GAD / EBS116GAD","filename":"GHL 107GAD.EBS 116GAD Ghan. Lang. & Culture -Writing Tech. (Ga).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/GHL 107GAD.EBS 116GAD Ghan. Lang. & Culture -Writing Tech. (Ga).pdf"},{"title":"Ghan. Lang. & Culture - Writing Tech. (EWE)","code":"GHL107ED / EBS116ED","filename":"GHL 107ED.EBS 116ED Ghan. Lang. & Culture - Writing Tech. (EWE).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/GHL 107ED.EBS 116ED Ghan. Lang. & Culture - Writing Tech. (EWE).pdf"},{"title":"INTRODUCTION TO THE STUDY OF RELIGION AND HUMAN VALUES","code":"RLH101D","filename":"RLH 101D INTRODUCTION TO THE STUDY OF RELIGION AND HUMAN VALUES.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/RLH 101D INTRODUCTION TO THE STUDY OF RELIGION AND HUMAN VALUES.pdf"},{"title":"The Use of English edited","code":"ENG101D / EBS133D","filename":"ENG 101D.EBS 133D The Use of English edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/ENG 101D.EBS 133D The Use of English edited.pdf"},{"title":"GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited","code":"GHL116D","filename":"GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/GHL 116D GHAN. LAN. & CULTURE – WRITING TECHNIQUES Twi Edited.pdf"},{"title":"World Civilization up to the 5th Century BC","code":"HIS110D","filename":"HIS 110D World Civilization up to the 5th Century BC.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/HIS 110D World Civilization up to the 5th Century BC.pdf"},{"title":"Ghan. Lang & Culture - Writ Tech. - Mfantse edited","code":"EBS116D","filename":"EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/EBS 116D Ghan. Lang & Culture - Writ Tech. - Mfantse edited.pdf"},{"title":"Morality and Social Values in Africa","code":"","filename":"Morality and Social Values in Africa.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L100/Morality and Social Values in Africa.pdf"}],"200":[{"title":"INTRODUCTION TO THE OLD TESTAMENT (1)","code":"RHL203D / EBS202D","filename":"RHL 203D. EBS 202D INTRODUCTION TO THE OLD TESTAMENT (1).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/RHL 203D. EBS 202D INTRODUCTION TO THE OLD TESTAMENT (1).pdf"},{"title":"CURRICULUM STUDIES IN RELIGIOUS STUDIES","code":"EAS214D","filename":"EAS214D CURRICULUM STUDIES IN RELIGIOUS STUDIES.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EAS214D CURRICULUM STUDIES IN RELIGIOUS STUDIES.pdf"},{"title":"Intro. to Translation - French done","code":"FRE211D","filename":"FRE 211D Intro. to Translation - French done.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/FRE 211D Intro. to Translation - French done.pdf"},{"title":"Introduction to Literature in French","code":"","filename":"Introduction to Literature in French.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/Introduction to Literature in French.pdf"},{"title":"EARLY CHRISTIAN HISTORY edited","code":"RHV201D","filename":"RHV 201D EARLY CHRISTIAN HISTORY edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/RHV 201D EARLY CHRISTIAN HISTORY edited.pdf"},{"title":"Intro. to Lit. in French done","code":"FRE203D / EBS119D","filename":"FRE 203D. EBS 119D Intro. to Lit. in French done.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/FRE 203D. EBS 119D Intro. to Lit. in French done.pdf"},{"title":"Language and Learning Task edited","code":"EAS207D","filename":"EAS 207D Language and Learning Task edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EAS 207D Language and Learning Task edited.pdf"},{"title":"Educational Statistics","code":"","filename":"Educational Statistics.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/Educational Statistics.pdf"},{"title":"Meths of Teaching Basic Sch Eng (Reviewed)","code":"ENG201D","filename":"ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf"},{"title":"French 3","code":"","filename":"French 3.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/French 3.pdf"},{"title":"METHODS OF TEACHING BASIC SCHOOL ENGLISH","code":"","filename":"METHODS OF TEACHING BASIC SCHOOL ENGLISH.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/METHODS OF TEACHING BASIC SCHOOL ENGLISH.pdf"},{"title":"Curriculum Studies in History","code":"EAS212D","filename":"EAS 212D - Curriculum Studies in History.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EAS 212D - Curriculum Studies in History.pdf"},{"title":"Essay Writing GA UNITS 1 - 3","code":"EBS233","filename":"EBS 233 Essay Writing GA UNITS 1 - 3.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EBS 233 Essay Writing GA UNITS 1 - 3.pdf"},{"title":"Curriculum Studies in English","code":"EAS213D","filename":"EAS 213D - Curriculum Studies in English.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EAS 213D - Curriculum Studies in English.pdf"},{"title":"Nature of History Edited","code":"","filename":"Nature of History Edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/Nature of History Edited.pdf"},{"title":"Ghan. Lang & Cult.(Essay Writing) Ewe","code":"GHL207ED / EBS233ED","filename":"GHL 207ED.EBS 233ED Ghan. Lang & Cult.(Essay Writing) Ewe.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/GHL 207ED.EBS 233ED Ghan. Lang & Cult.(Essay Writing) Ewe.pdf"},{"title":"Curriculum Studies in History Unit 1- 6 Edited","code":"","filename":"Curriculum Studies in History Unit 1- 6 Edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/Curriculum Studies in History Unit 1- 6 Edited.pdf"},{"title":"Oral Lit. of the Ghan. Lang(Basic) Twi edited","code":"GHL209TD","filename":"GHL 209TD Oral Lit. of the Ghan. Lang(Basic) Twi edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/GHL 209TD Oral Lit. of the Ghan. Lang(Basic) Twi edited.pdf"},{"title":"Oral Lit. of the Ghan. Lang(Basic) EWE","code":"GHL209ED","filename":"GHL 209ED Oral Lit. of the Ghan. Lang(Basic) EWE.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/GHL 209ED Oral Lit. of the Ghan. Lang(Basic) EWE.pdf"},{"title":"COLONIALISM, INDEPENDENCE AND NATION BUILDING IN THE USA UP TO 1840","code":"HIS208D","filename":"HIS 208D COLONIALISM, INDEPENDENCE AND NATION BUILDING IN THE USA UP TO 1840.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/HIS 208D COLONIALISM, INDEPENDENCE AND NATION BUILDING IN THE USA UP TO 1840.pdf"},{"title":"Early West African Politicis AD 1000-1500","code":"HIS206","filename":"HIS 206 Early West African Politicis AD 1000-1500.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/HIS 206 Early West African Politicis AD 1000-1500.pdf"},{"title":"INTRODUCTION TO MORAL","code":"EAS209D","filename":"EAS 209D INTRODUCTION TO MORAL.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EAS 209D INTRODUCTION TO MORAL.pdf"},{"title":"French Lang. Stru. & Usage III (Oral & Writ.) done","code":"FRE207D / EBS211D","filename":"FRE 207D.EBS 211D French Lang. Stru. & Usage III (Oral & Writ.) done.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/FRE 207D.EBS 211D French Lang. Stru. & Usage III (Oral & Writ.) done.pdf"},{"title":"The Sentence and Its Parts edited","code":"EBS290","filename":"EBS 290 The Sentence and Its Parts edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EBS 290 The Sentence and Its Parts edited.pdf"},{"title":"Ghan. Lang & Cult.(Essay Writing) Twi edited","code":"GHL207D / EBS233D","filename":"GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/GHL 207D.EBS 233D Ghan. Lang & Cult.(Essay Writing) Twi edited.pdf"},{"title":"Studies in Drama (Comedy & Tragedy) edited","code":"EBS223","filename":"EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/EBS 223 Studies in Drama (Comedy & Tragedy) edited.pdf"},{"title":"Curriculum Studies in French","code":"","filename":"Curriculum Studies in French.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/Curriculum Studies in French.pdf"},{"title":"GHANAIAN LANGUAGE AND CULTURE (ESSAY WRITING) – MFANTSE","code":"","filename":"GHANAIAN LANGUAGE AND CULTURE (ESSAY  WRITING) – MFANTSE.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L200/GHANAIAN LANGUAGE AND CULTURE (ESSAY  WRITING) – MFANTSE.pdf"}],"300":[{"title":"French Lang. Stru. & Usage III (Oral & Writ.) done","code":"FRE207D / EBS211D","filename":"FRE 207D.EBS 211D French Lang. Stru. & Usage III (Oral & Writ.) done.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/FRE 207D.EBS 211D French Lang. Stru. & Usage III (Oral & Writ.) done.pdf"},{"title":"INTRODUCTION TO THE OLD TESTAMENT","code":"RHL203D / EBS202D","filename":"RHL 203D. EBS 202D INTRODUCTION TO THE OLD TESTAMENT.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/RHL 203D. EBS 202D INTRODUCTION TO THE OLD TESTAMENT.pdf"},{"title":"Meths of Teaching Basic Sch Eng (Reviewed)","code":"ENG201D","filename":"ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/ENG 201D Meths of Teaching Basic Sch Eng (Reviewed).pdf"},{"title":"Intro. to French Linguistics","code":"FRE313D / EBS259D","filename":"FRE 313D. EBS 259D Intro. to French Linguistics.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/FRE 313D. EBS 259D Intro. to French Linguistics.pdf"},{"title":"LANGUAGE AND CULTURE - (TWI)","code":"GHL315D","filename":"GHL 315D LANGUAGE AND CULTURE - (TWI).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 315D LANGUAGE AND CULTURE - (TWI).pdf"},{"title":"Language Usage – Syntax(EWE final","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage – Syntax(EWE final.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 102D.GHL 313D Language Usage – Syntax(EWE final.pdf"},{"title":"Language Usage - Syntax (Twi)","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (Twi).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 102D.GHL 313D Language Usage - Syntax (Twi).pdf"},{"title":"Language Usage - Syntax (Mfantse","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (Mfantse.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 102D.GHL 313D Language Usage - Syntax (Mfantse.pdf"},{"title":"Language Usage - Syntax (GA edited final)","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (GA edited final).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 102D.GHL 313D Language Usage - Syntax (GA edited final).pdf"},{"title":"Entrepreneurship","code":"","filename":"Entrepreneurship.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/Entrepreneurship.pdf"},{"title":"Ghan. Lang. & Culture -Writing Tech. (Ga)","code":"GHL107GAD / EBS116GAD","filename":"GHL 107GAD.EBS 116GAD Ghan. Lang. & Culture -Writing Tech. (Ga).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 107GAD.EBS 116GAD Ghan. Lang. & Culture -Writing Tech. (Ga).pdf"},{"title":"Ghan. Lang. & Culture - Writing Tech. (EWE)","code":"GHL107ED / EBS116ED","filename":"GHL 107ED.EBS 116ED Ghan. Lang. & Culture - Writing Tech. (EWE).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 107ED.EBS 116ED Ghan. Lang. & Culture - Writing Tech. (EWE).pdf"},{"title":"Meth. of Teaching Ghan. Lang. (Twi) - Edited","code":"EAS351TD / EBS319TD","filename":"EAS 351TD.EBS 319TD Meth. of Teaching Ghan. Lang. (Twi) - Edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/EAS 351TD.EBS 319TD Meth. of Teaching Ghan. Lang. (Twi) - Edited.pdf"},{"title":"Elective-Survey of English Literature","code":"","filename":"Elective-Survey_of_English_Literature.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/Elective-Survey_of_English_Literature.pdf"},{"title":"Ethics of Islam","code":"","filename":"Ethics of Islam.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/Ethics of Islam.pdf"},{"title":"Ghana up to 1800 complete","code":"HIS311","filename":"HIS 311 Ghana up to 1800 complete.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/HIS 311 Ghana up to 1800 complete.pdf"},{"title":"Language and Culture (Twi) edited","code":"EBS315TD","filename":"EBS 315TD Language and Culture (Twi) edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/EBS 315TD Language and Culture (Twi) edited.pdf"},{"title":"FOREST AND COASTAL STATES OF WEST AFRICA UP TO THE EVE OF COLONIAL PERIOD","code":"HIS301D","filename":"HIS 301D FOREST AND COASTAL STATES OF WEST AFRICA UP TO THE EVE OF COLONIAL PERIOD.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/HIS 301D FOREST AND COASTAL STATES OF WEST AFRICA UP TO THE EVE OF COLONIAL PERIOD.pdf"},{"title":"METHODS OF TEACHING GHANAIAN LANGUAGES (EWE)","code":"EBS319D","filename":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf"},{"title":"METHODS OF TEACHING HISTORY","code":"EAS311D","filename":"EAS 311D METHODS OF TEACHING HISTORY.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/EAS 311D METHODS OF TEACHING HISTORY.pdf"},{"title":"LANGUAGE AND CULTURE (MFANTSE)","code":"GHL315D","filename":"GHL 315D LANGUAGE AND CULTURE (MFANTSE).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/GHL 315D LANGUAGE AND CULTURE (MFANTSE).pdf"},{"title":"METHODS OF TEACHING RME","code":"EBS324D","filename":"EBS 324D METHODS OF TEACHING RME.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/EBS 324D METHODS OF TEACHING RME.pdf"},{"title":"Elective-English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"English Methodology","code":"","filename":"English Methodology.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L300/English Methodology.pdf"}],"400":[{"title":"ORAL LIT. IN AFRICA","code":"EBS308D","filename":"EBS308D ORAL LIT. IN AFRICA.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/EBS308D ORAL LIT. IN AFRICA.pdf"},{"title":"Entrepreneurship","code":"","filename":"Entrepreneurship.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/Entrepreneurship.pdf"},{"title":"Issues and Problems in Teaching History","code":"EAS403D","filename":"EAS 403D Issues and Problems in Teaching History.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/EAS 403D Issues and Problems in Teaching History.pdf"},{"title":"CHRISTIAN ETHICS","code":"RHL420D","filename":"RHL 420D CHRISTIAN ETHICS.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/RHL 420D CHRISTIAN ETHICS.pdf"},{"title":"HIS 4.3D U.S.A. AND RUSSIA UP TO THE END OF THE FIRST WORLD WAR","code":"","filename":"HIS 4.3D U.S.A. AND RUSSIA UP TO THE END OF THE FIRST WORLD WAR.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/HIS 4.3D U.S.A. AND RUSSIA UP TO THE END OF THE FIRST WORLD WAR.pdf"},{"title":"E Grammar of the Ghan. Lang.(Ewe)","code":"GHL414","filename":"GHL 414E Grammar of the Ghan. Lang.(Ewe).pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/GHL 414E Grammar of the Ghan. Lang.(Ewe).pdf"},{"title":"Grammar of the Ghan. Lang. (Mfantse) edited","code":"GHL414FD","filename":"GHL 414FD Grammar of the Ghan. Lang. (Mfantse) edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/GHL 414FD Grammar of the Ghan. Lang. (Mfantse) edited.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"},{"title":"SOCIOLOGICAL PERSPECTIVE STUDIES IN RME","code":"EBS279D","filename":"EBS 279D SOCIOLOGICAL PERSPECTIVE STUDIES IN RME.pdf","relativePath":"/EDUCATION/BED ARTS/Bed_ARTS_L400/EBS 279D SOCIOLOGICAL PERSPECTIVE STUDIES IN RME.pdf"}]},"BED MANAGEMENT":{"100":[{"title":"Communicative Skills 1","code":"CMS107D","filename":"Communicative_Skills_1.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Communicative_Skills_1.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Social and Philosophical Foundations of Education.pdf"},{"title":"Principles of Accounting 1","code":"","filename":"Principles_of_Accounting_1.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Principles_of_Accounting_1.pdf"},{"title":"Introduction to Business 1","code":"","filename":"Introduction_to_Business_1.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Introduction_to_Business_1.pdf"},{"title":"Core-African Studies","code":"ASP101D","filename":"Core-African_Studies.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Core-African_Studies.pdf"},{"title":"Principles of Economics 1","code":"ECO101D","filename":"Principles_of_Economics_1.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Principles_of_Economics_1.pdf"},{"title":"Info Lit","code":"ILT101D","filename":"Info_Lit.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L100/Info_Lit.pdf"}],"200":[{"title":"Bus. communication","code":"","filename":"Bus._communication.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/Bus._communication.pdf"},{"title":"Principles of Management 1","code":"","filename":"Principles_of_Management_1.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/Principles_of_Management_1.pdf"},{"title":"DOCUMENT PROCESSING I Done","code":"EMG201D","filename":"EMG 201D DOCUMENT PROCESSING I Done.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/EMG 201D DOCUMENT PROCESSING I Done.pdf"},{"title":"Curriculum Studies in Management","code":"","units":[{"label":"MODULES 1–4","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/CURRICULUM STUDIES MODULE 1-4 (MAIN).pdf"},{"label":"MODULES 5–6","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/CURRICULUM STUDIES IN MANAGEMENT 5 & 6.pdf"}]},{"title":"Quantitative Methods 1","code":"","filename":"Quantitative_Methods_1.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/Quantitative_Methods_1.pdf"},{"title":"Elective-Human Resource Mgt","code":"","filename":"Elective-Human_Resource_Mgt.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/Elective-Human_Resource_Mgt.pdf"},{"title":"Business Law I","code":"","filename":"Business_Law_ I.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L200/Business_Law_ I.pdf"}],"300":[{"title":"Economy of Ghana","code":"ECO308D","filename":"ECO 308D Economy of Ghana.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L300/ECO 308D Economy of Ghana.pdf"},{"title":"Company and Partnership Law","code":"","filename":"Company and Partnership Law.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L300/Company and Partnership Law.pdf"},{"title":"MIS I","code":"EMG302D","filename":"EMG 302D MIS I.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L300/EMG 302D MIS I.pdf"},{"title":"Methods of Teaching Management(formatted)","code":"","filename":"Methods of Teaching Management(formatted).pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L300/Methods of Teaching Management(formatted).pdf"},{"title":"Office Management 1 Edited","code":"EMG301D","filename":"EMG 301D Office Management 1 Edited.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L300/EMG 301D Office Management 1 Edited.pdf"}],"400":[{"title":"Entrepreneurship","code":"","filename":"Entrepreneurship.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L400/Entrepreneurship.pdf"},{"title":"Self-Management Skills edited","code":"SBU403D","filename":"SBU 403D Self-Management Skills edited.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L400/SBU 403D Self-Management Skills edited.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"},{"title":"Investment Management","code":"","filename":"Investment Management.pdf","relativePath":"/EDUCATION/BED MANAGEMENT/Bed_MGT_L400/Investment Management.pdf"}]},"BED SOCIAL STUDIES":{"100":[{"title":"Communicative Skills 1","code":"CMS107D","filename":"Communicative_Skills_1.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/Communicative_Skills_1.pdf"},{"title":"Introduction to Sociology 1","code":"","filename":"Introduction to Sociology 1.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/Introduction to Sociology 1.pdf"},{"title":"Social and Philosophical Foundations of Education","code":"","filename":"Social and Philosophical Foundations of Education.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/Social and Philosophical Foundations of Education.pdf"},{"title":"African Studies","code":"ASP101D","filename":"Core-African_Studies.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/Core-African_Studies.pdf"},{"title":"PHYSICAL GEOGRAPHY","code":"GEO102D","filename":"GEO 102D PHYSICAL GEOGRAPHY.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/GEO 102D PHYSICAL GEOGRAPHY.pdf"},{"title":"Thematic Geography of Ghana edited","code":"GEO103BD","filename":"GEO 103BD Thematic Geography of Ghana edited.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/GEO 103BD Thematic Geography of Ghana edited.pdf"},{"title":"Info Lit","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/Info_Lit..pdf"},{"title":"Principles of Economics 1","code":"ECO101D","filename":"Principles_of_Economics_1.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L100/Principles_of_Economics_1.pdf"}],"200":[{"title":"Curriculum studies in social studies (2)","code":"","filename":"Curriculum studies in social studies (2).pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L200/Curriculum studies in social studies (2).pdf"},{"title":"Intro. to Earth Science edited","code":"GEO211D","filename":"GEO 211D Intro. to Earth Science edited.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L200/GEO 211D Intro. to Earth Science edited.pdf"},{"title":"Elements of Microeconomics I","code":"","filename":"Elements of Microeconomics I.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L200/Elements of Microeconomics I.pdf"},{"title":"Nature of History","code":"","filename":"Nature of History.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L200/Nature of History.pdf"},{"title":"Early West African Politicis AD 1000-1500","code":"HIS206","filename":"HIS 206 Early West African Politicis AD 1000-1500.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L200/HIS 206 Early West African Politicis AD 1000-1500.pdf"},{"title":"GEOGRAPHIC THOUGHT","code":"GEO212D","filename":"GEO 212D GEOGRAPHIC THOUGHT.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L200/GEO 212D GEOGRAPHIC THOUGHT.pdf"}],"300":[{"title":"SURVEYING AND CARTOGRAPHY","code":"GEO318D","filename":"GEO318D SURVEYING AND CARTOGRAPHY.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/GEO318D SURVEYING AND CARTOGRAPHY.pdf"},{"title":"Methods of Teaching Social Studies (reviewed)","code":"ESS433D","filename":"ESS 433D Methods of Teaching Social Studies  (reviewed).pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/ESS 433D Methods of Teaching Social Studies  (reviewed).pdf"},{"title":"Intermediate Microeconomics","code":"","filename":"Elective-Intermediate_Microeconomics.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/Elective-Intermediate_Microeconomics.pdf"},{"title":"Economy of Ghana","code":"ECO308D","filename":"ECO 308D Economy of Ghana.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/ECO 308D Economy of Ghana.pdf"},{"title":"GEOMORPHOLOGY AND OCEANOGRAPHY","code":"GEO301D","filename":"GEO 301D GEOMORPHOLOGY AND OCEANOGRAPHY.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/GEO 301D GEOMORPHOLOGY AND OCEANOGRAPHY.pdf"},{"title":"GEOGRAPHY OF DEVELOPMENT (WITH EMPHASIS ON GHANA)","code":"GEO316D","filename":"GEO 316D GEOGRAPHY OF DEVELOPMENT (WITH EMPHASIS ON GHANA).pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/GEO 316D GEOGRAPHY OF DEVELOPMENT (WITH EMPHASIS ON GHANA).pdf"},{"title":"The Meaning and Scope of Social Studies Edited","code":"ESS304D","filename":"ESS 304D The Meaning and Scope of Social Studies Edited.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L300/ESS 304D The Meaning and Scope of Social Studies Edited.pdf"}],"400":[{"title":"Entrepreneurship","code":"","filename":"Entrepreneurship.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L400/Entrepreneurship.pdf"},{"title":"Teaching Social Studies","code":"ESS404D","filename":"ESS 404D Teaching Social Studies.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L400/ESS 404D Teaching Social Studies.pdf"},{"title":"Develop. of Social Studies in Ghana & Africa","code":"ESS432D","filename":"ESS 432D Develop. of Social Studies in Ghana & Africa.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L400/ESS 432D Develop. of Social Studies in Ghana & Africa.pdf"},{"title":"Sch. Mgt. & Admin. Edited","code":"EDF449D / EBS449D","filename":"EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf","relativePath":"/EDUCATION/BED SOCIAL STUDIES/Bed_SOC_STU_L400/EDF 449D.EBS 449D Sch. Mgt. & Admin. Edited.pdf"}]},"BEP":{"300":[{"title":"METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS","code":"","filename":"METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/METHOD OF TEACHING PRIAMRY EDUCTION MATHEMATICS.pdf"},{"title":"Maths for Senior High Sch. Trs 3","code":"","filename":"Elective-Maths_for_Senior_High_Sch._Trs_3.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-Maths_for_Senior_High_Sch._Trs_3.pdf"},{"title":"Introductory Agriculture","code":"","filename":"Introductory_Agriculture.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Introductory_Agriculture.pdf"},{"title":"Integrated Science VI","code":"","filename":"Integrated Science VI.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Integrated Science VI.pdf"},{"title":"Psychology of Adolescence Revised final 2022","code":"EPS401D","filename":"EPS 401D Psychology of Adolescence Revised final 2022.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/EPS 401D Psychology of Adolescence Revised final 2022.pdf"},{"title":"METHODS OF TEACHING GHANAIAN LANGUAGES (EWE)","code":"EBS319D","filename":"EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf","relativePath":"/EDUCATION/BEP/BEP_L300/EBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES (EWE).pdf"},{"title":"Company and Partnership Law","code":"","filename":"Company and Partnership Law.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Company and Partnership Law.pdf"},{"title":"METHODS OF TEACHING GHANAIAN LANGUAGES .TWI","code":"EAS351D / EBS319D","filename":"EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/EAS 351DEBS 319D METHODS OF TEACHING GHANAIAN LANGUAGES .TWI.pdf"},{"title":"Info Lit","code":"ILT101D","filename":"Info_Lit..pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Info_Lit..pdf"},{"title":"VARIETIES OF ENGLISH","code":"","filename":"Elective-VARIETIES_OF_ENGLISH.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-VARIETIES_OF_ENGLISH.pdf"},{"title":"FRENCH 1 Module One","code":"","filename":"Elective-FRENCH_1_Module_One.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-FRENCH_1_Module_One.pdf"},{"title":"Develop of Social Studies in Ghana Africa","code":"","filename":"Elective-Develop_of_Social_Studies_in_Ghana__Africa.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-Develop_of_Social_Studies_in_Ghana__Africa.pdf"},{"title":"Psychology of Personnel Mgt","code":"","filename":"Core-Psychology_of_Personnel_Mgt.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Core-Psychology_of_Personnel_Mgt.pdf"},{"title":"Communicative Skills 2","code":"","filename":"Core-Communicative_Skills_2.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Core-Communicative_Skills_2.pdf"},{"title":"Methods of Teaching Management (formatted)","code":"","filename":"Elective-Methods_of_Teaching_Management_(formatted).pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-Methods_of_Teaching_Management_(formatted).pdf"},{"title":"Methods of Teaching Accounting (formatted)","code":"","filename":"Elective-Methods_of_Teaching_Accounting_(formatted).pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-Methods_of_Teaching_Accounting_(formatted).pdf"},{"title":"FAMILY LIFE EDUCATION","code":"","filename":"Elective-FAMILY_LIFE_EDUCATION.pdf","relativePath":"/EDUCATION/BEP/BEP_L300/Elective-FAMILY_LIFE_EDUCATION.pdf"}],"400":[{"title":"Advanced Accounting 1 (rev'd) 2015","code":"","filename":"Advanced Accounting 1 (rev'd) 2015.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Advanced Accounting 1 (rev'd) 2015.pdf"},{"title":"Language Usage – Syntax(EWE final","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage – Syntax(EWE final.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/GHL 102D.GHL 313D Language Usage – Syntax(EWE final.pdf"},{"title":"Language Usage - Syntax (Twi)","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (Twi).pdf","relativePath":"/EDUCATION/BEP/BEP_L400/GHL 102D.GHL 313D Language Usage - Syntax (Twi).pdf"},{"title":"Language Usage - Syntax (Mfantse","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (Mfantse.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/GHL 102D.GHL 313D Language Usage - Syntax (Mfantse.pdf"},{"title":"Language Usage - Syntax (GA edited final)","code":"GHL102D / GHL313D","filename":"GHL 102D.GHL 313D Language Usage - Syntax (GA edited final).pdf","relativePath":"/EDUCATION/BEP/BEP_L400/GHL 102D.GHL 313D Language Usage - Syntax (GA edited final).pdf"},{"title":"Intermediate Agric 3","code":"","filename":"Intermediate Agric 3.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Intermediate Agric 3.pdf"},{"title":"French 3","code":"","filename":"French 3.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/French 3.pdf"},{"title":"Investment Management","code":"","filename":"Investment Management.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Investment Management.pdf"},{"title":"Company and Partnership Law","code":"","filename":"Company and Partnership Law.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Company and Partnership Law.pdf"},{"title":"Meth of Teach. French as a foreign language EDITED","code":"EAS241D","filename":"EAS 241D Meth of Teach. French as a foreign language EDITED.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/EAS 241D Meth of Teach. French as a foreign language EDITED.pdf"},{"title":"African Studies (Reviewed)","code":"ASP101D","filename":"Core-African_Studies_(Reviewed).pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Core-African_Studies_(Reviewed).pdf"},{"title":"Social Psychology","code":"","filename":"Social Psychology.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Social Psychology.pdf"},{"title":"EcoGhana","code":"","filename":"EcoGhana.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/EcoGhana.pdf"},{"title":"Company Law I","code":"","filename":"Elective-Company_Law_I.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-Company_Law_I.pdf"},{"title":"financial mgt","code":"","filename":"Elective-financial_mgt.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-financial_mgt.pdf"},{"title":"Basic Gen Chemistry","code":"","filename":"Elective-Basic_Gen_Chemistry.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-Basic_Gen_Chemistry.pdf"},{"title":"INTERMEDIATE AGRIC 2","code":"","filename":"Elective-INTERMEDIATE_AGRIC_2.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-INTERMEDIATE_AGRIC_2.pdf"},{"title":"Maths for Sec Sch Trs 4","code":"","filename":"Elective-Maths_for_Sec_Sch_Trs_4.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-Maths_for_Sec_Sch_Trs_4.pdf"},{"title":"English Phonetics and Phonology","code":"","filename":"Elective-English_Phonetics_and_Phonology.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-English_Phonetics_and_Phonology.pdf"},{"title":"Consumption Technology and Environment","code":"","filename":"Elective-Consumption_Technology_and_Environment.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-Consumption_Technology_and_Environment.pdf"},{"title":"Soc. Stds for Basic School","code":"","filename":"Elective-Soc._Stds_for_Basic_School.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Elective-Soc._Stds_for_Basic_School.pdf"},{"title":"Guidance Counselling for Senior High School","code":"","filename":"Core-Guidance__Counselling_for_Senior_High_School.pdf","relativePath":"/EDUCATION/BEP/BEP_L400/Core-Guidance__Counselling_for_Senior_High_School.pdf"}]}};

/* =========================================================
   EDUCATION FIRST-SEMESTER CATALOGUE (STAGE 1)
   Verified source: connected EDUCATION Google Drive folder.
   The Nextcloud mirror's exact path/index remains to be tested.
   No changes to any existing Business catalogue.
   ========================================================= */
const educationProgrammeLevels = Object.fromEntries(
    Object.entries(educationCourseCatalogue).map(([name, levels]) => [name, Object.keys(levels)])
);

/* =========================================================
   DEPARTMENT TO PROGRAMME NAVIGATION
   ========================================================= */

const departmentProgrammeMap = {

    "Business": [
    "DCO YR2 LEVEL 200",
    "4YR BCOM 100,200,300,400",
    "3YR DCO YR3 LEVEL 200",
    "3YR BCOM YR1 LEVEL 300 _ LEVEL 400",
    "3YR BCOM YR1 LEVEL 200",
    "2YR DCO LEVEL 100",
    "2YR BCOM YR1 LEVEL 300 _ LEVEL 400"
     ],

    "Education": [
        "B.Ed Early Childhood / Primary / JHS Education",
        "B.Ed Early Childhood Education",
        "B.Ed Primary / JHS Education",
        "Education / Teacher Education",
        "Home Economics"
    ],

    "Mathematics and Science": [
        "B.Ed Mathematics",
        "B.Ed Science",
        "B.Sc Information Technology",
        "B.Ed Information Technology / Computing Education",
        "Information Technology"
    ],

    "Arts and Social Sciences": [
        "B.Ed Arts",
        "B.Ed Arts / Religious Studies",
        "B.Ed Social Studies",
        "B.Sc Psychology",
        "BA Social Behaviour & Conflict Management",
        "Geography / Social Sciences",
        "Ghanaian Language Education",
        "Visual / Communication Design"
    ]

};


function showDepartmentProgrammes(
    department,
    addHistory = true
) {

    if (
        !selectedSemester ||
        !departmentProgrammeMap[department]
    ) {
        return;
    }

    if (!isPublishedDepartment(selectedSemester, department)) {
        showDepartments(selectedSemester, false);
        return;
    }

    selectedDepartment = department;
    selectedProgramme = null;
    selectedLevel = null;

    navigationType = "undergraduate";

    const semesterData =
        undergraduateData[selectedSemester] || {};

    const availableProgrammes = new Set();

    Object.values(semesterData).forEach(levelData => {
        Object.keys(levelData).forEach(programme => {
            availableProgrammes.add(programme);
        });
    });

    const programmes =
        department === "Business"
            ? [...departmentProgrammeMap["Business"]]
            : department === "Education" && selectedSemester === "firstSemester"
                ? Object.keys(educationCourseCatalogue)
                : department === "Mathematics and Science" && selectedSemester === "firstSemester"
                    ? Object.keys(mathsScienceCourseCatalogue)
                : departmentProgrammeMap[department].filter(
                    programme => availableProgrammes.has(programme)
                );

    const heading =
        document.getElementById("programmeHeading");

    const list =
        document.getElementById("programmeList");

    if (!list) return;

    if (heading) {
        heading.textContent =
            `${semesterLabels[selectedSemester]} · ${department}`;
    }

    list.innerHTML = "";

    prepareProgrammeFilter();

    programmes.sort((a, b) => a.localeCompare(b));

    programmes.forEach(programme => {

        const card =
            document.createElement("button");

        card.type = "button";
        card.className = "programme-card";

        const title =
            document.createElement("h3");

        title.textContent = programme;

        const action =
            document.createElement("span");

        action.textContent = "View Levels →";

        card.append(title, action);

        card.addEventListener("click", () => {
            showProgrammeLevels(programme);
        });

        list.appendChild(card);

    });

    if (programmes.length === 0) {

        const message =
            document.createElement("p");

        message.textContent =
            "No programmes are currently listed for this department and semester.";

        list.appendChild(message);
    }

    showView("programmeView");

    if (addHistory) {
        savePortalHistory("programmes");
    }

}


/* =========================================================
   PROGRAMME TO LEVEL NAVIGATION
   ========================================================= */


/* =========================================================
   BUSINESS PROGRAMME LEVELS
   ========================================================= */

const businessProgrammeLevels = {

    "DCO YR2 LEVEL 200": ["200"],

    "4YR BCOM 100,200,300,400": [
        "100", "200", "300", "400"
    ],

    "3YR DCO YR3 LEVEL 200": ["200"],

    "3YR BCOM YR1 LEVEL 300 _ LEVEL 400": [
        "300", "400"
    ],

    "3YR BCOM YR1 LEVEL 200": ["200"],

    "2YR DCO LEVEL 100": ["100"],

    "2YR BCOM YR1 LEVEL 300 _ LEVEL 400": [
        "300", "400"
    ]

};


/* =========================================
   BUSINESS SPECIALISATIONS
   ========================================= */

const businessSpecialisations = [
    "Accounting",
    "Finance",
    "Human Resource Management",
    "Management",
    "Marketing",
    "Procurement and Supply Chain Management"
];

// DCO Year 2 has two programme options, not the six BCom specialisations.
const dcoYear2Options = ["Accounting Option", "Management Option"];

// 3-year BCom Year 1 Level 200 also includes a separate joint option.
const threeYearBcomLevel200Options = [
    ...businessSpecialisations,
    "Accounting _ Finance Option"
];


let selectedSpecialisation = null;


/* =========================================
   BUSINESS COURSE CATALOGUE
   ========================================= */

/*
 * First Semester, 4-year BCom, Level 100.
 * The seven PDF filenames were shown for all six specialisations in
 * supplied Google Drive screenshots. Their exact Nextcloud paths still
 * require verification against the server index.
 */
const businessLevel100Courses = [
    { code: "ECO101D", title: "Principles of Economics 1", filename: "Principles_of_Economics_1.pdf" },
    { code: "", title: "Principles of Accounting 1", filename: "Principles_of_Accounting_1.pdf" },
    { code: "INF101D", title: "Introduction to Computing", filename: "Introduction_to_Computing.pdf" },
    { code: "", title: "Introduction to Business 1", filename: "Introduction_to_Business_1.pdf" },
    { code: "ILT101D", title: "Information Literacy", filename: "Info_Lit. (1).pdf" },
    { code: "ASP101D", title: "Core African Studies", filename: "Core-African_Studies.pdf" },
    { code: "CMS107D", title: "Communicative Skills 1", filename: "Communicative_Skills_1.pdf" }
];

/*
 * First Semester, 4-year BCom, Level 200.
 * Six PDF filenames for each specialisation were transcribed from the
 * supplied folder screenshots. Common courses are reused safely.
 * The existing UCC website catalogue supplied the matched course codes.
 * Blank codes mean the code was not confirmed in that catalogue.
 */
const businessLevel200CommonCourses = [
    { code: "SBU201D", title: "Quantitative Methods I", filename: "Quantitative_Methods_1.pdf" },
    { code: "SBU205D", title: "Principles of Management", filename: "Principles_of_Management_1.pdf" },
    { code: "", title: "Human Resource Mgt. (Revised) 2016", filename: "Human Resource Mgt. (Revised) 2016.pdf" },
    { code: "", title: "Business Law I", filename: "Business_Law_I.pdf" },
    { code: "SBU207D", title: "Business Communication", filename: "Bus._communication.pdf" }
];

const businessLevel200SpecificCourses = {
    "Accounting":
        { code: "", title: "Financial Reporting I", filename: "Financial_Reporting_I.pdf" },
    "Finance":
        { code: "", title: "Financial Reporting I", filename: "Financial_Reporting_I.pdf" },
    "Human Resource Management":
        { code: "", title: "Psychology of Personnel Mgt UNIT 1-5", filename: "Psychology of Personnel Mgt UNIT 1-5.pdf" },
    "Management":
        { code: "EMG203D", title: "Document Processing II", filename: "Document Processing II edited.pdf" },
    "Marketing":
        { code: "SBU206D", title: "Principles of Marketing", filename: "Principles of Marketing.pdf" },
    "Procurement and Supply Chain Management":
        { code: "", title: "Sourcing in Procurement and Supply", filename: "Sourcing in Procurement and Supply editted.pdf" }
};

const businessLevel200Courses = Object.fromEntries(
    businessSpecialisations.map(name => {
        const modules = businessLevel200CommonCourses.map(item => ({ ...item }));
        const uniqueModule = businessLevel200SpecificCourses[name];
        if (uniqueModule) {
            // Keep the ordering shown in the supplied source folders.
            const insertAt = name === "Human Resource Management"
                ? 1
                : name === "Procurement and Supply Chain Management"
                    ? 0
                    : 3;
            modules.splice(insertAt, 0, { ...uniqueModule });
        }
        return [name, modules];
    })
);

/*
 * First Semester, 4-year BCom, Level 300.
 * Module names come from the six supplied folder screenshots.
 * Blank codes are intentionally left unassigned where no reliable
 * exact match was found in the existing website catalogue.
 * For cropped/ambiguous PDF names, use an index lookup restricted to
 * the intended Level 300 specialisation folder; never guess filenames.
 * The Finance "Principles of Finance" subfolder contains six
 * individual Unit PDFs, verified from the supplied folder screenshot.
 */
const businessLevel300Courses = {
    "Accounting": [
        {
            code: "", title: "Taxation", unitFolder: "",
            units: [
                { number: 3, filename: "UNIT 3 TAXATION.pdf" },
                { number: 4, filename: "TAXATION UNIT 4.pdf" },
                { number: 5, filename: "TAXATION UNIT 5.pdf" },
                { number: 6, filename: "UNIT 6 TAXATION PRACTICE-TAXATION.pdf" },
                { label: "ADDITIONAL PDF", filename: "TAXATION (2).pdf" }
            ]
        },
        { code: "ACC303D", title: "Public Sector Accounting", lookupQuery: "Public Sector Accounting", lookupPrefix: "Public Sector Accounting" },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Cost and Management Accounting I", filename: "COST AND MANAGEMENT ACCOUNTING 1.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ],
    "Finance": [
        {
            code: "",
            title: "Principles of Finance",
            unitFolder: "Principles of Finance/",
            units: [
                { number: 1, filename: "Unit 1 FIN 071D Principles of Finance unedited.pdf" },
                { number: 2, filename: "Unit 2 FIN 071D Principles of Finance unedited.pdf" },
                { number: 3, filename: "Unit 3 FIN 071D Principles of Finance unedited.pdf" },
                { number: 4, filename: "Unit 4 FIN 071D Principles of Finance unedited.pdf" },
                { number: 5, filename: "Unit 5 FIN 071D Principles of Finance unedited.pdf" },
                { number: 6, filename: "Unit 6 FIN 071D Principles of Finance unedited.pdf" }
            ]
        },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Financial Market and Institutions", filename: "Financial Market and Institutions.pdf" },
        { code: "", title: "Cost and Management Accounting I", filename: "COST AND MANAGEMENT ACCOUNTING 1.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ],
    "Human Resource Management": [
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Human Resource Information System", filename: "Human_Resource_Info_System.pdf" },
        { code: "HUM304D", title: "Performance and Compensation Management", lookupQuery: "HUM304D", lookupPrefix: "HUM304D PERFORMANCE AND COMPENSATION MGT" },
        { code: "HUM311D", title: "Managing Workplace Conflict", filename: "HUM 311D Managing Workplace Conflict.pdf" },
        { code: "", title: "Employment Law", filename: "Employment_Law.pdf" }
    ],
    "Management": [
        { code: "", title: "Public Relations", filename: "Public_Relations.pdf" },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Introduction to Cost and Management Accounting", filename: "Introduction to Cost and Management Accounting.pdf" },
        { code: "", title: "International Business", filename: "INTERNATIONAL_BUS.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ],
    "Marketing": [
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Marketing Management", filename: "Marketing_Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Introduction to Cost and Management Accounting", filename: "Introduction to Cost and Management Accounting.pdf" },
        { code: "", title: "Innovations and Digital Marketing", filename: "Innovations_and_Digital_Marketing.pdf" },
        { code: "", title: "Consumer Behaviour", filename: "Consumer_Behaviour.pdf" }
    ],
    "Procurement and Supply Chain Management": [
        { code: "", title: "Procurement and Supply Context", filename: "PROCUREMENT AND SUPPLY CONTEXT edited.pdf" },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managing Procurement and Supply Relationships", lookupQuery: "MANAGING_PROCUREMENT_AND_SUPPLY_RELATIONSH", lookupPrefix: "MANAGING_PROCUREMENT_AND_SUPPLY_RELATIONSH" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Introduction to Cost and Management Accounting", filename: "Introduction to Cost and Management Accounting.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ]
};

/*
 * First Semester / Business / 4YR BCOM / Level 400.
 * Six screenshots supplied 26 November 2026.
 * A folder name is not itself a PDF: those course cards remain
 * displayed as one course card each. Their unit PDFs are loaded on
 * demand from the Nextcloud index and remain inside that card.
 * Where a programme folder shows two possible course codes,
 * do not select one without confirmation.
 */
/* =========================================================
   VERIFIED LEVEL 400 SIX-UNIT MODULES
   These twelve filenames are taken from the First Semester
   Nextcloud index output supplied 26 November 2026.
   Use explicit indexed names, rather than an incomplete ranked
   /modules/search result that previously returned only 3 units.
   The existing Business Level 400 specialisation folders remain
   the download roots; this change does not touch Levels 100–300.
   ========================================================= */
const businessLevel400SixUnitFiles = {
    project: Array.from({ length: 6 }, (_, index) => {
        const number = index + 1;
        return {
            number,
            filename: `Project Management Unit ${number}.pdf`
        };
    }),
    entrepreneurship: Array.from({ length: 6 }, (_, index) => {
        const number = index + 1;
        return {
            number,
            filename: `Unit ${number} SBU 408D.ENT 302D Entrepreneurship.pdf`
        };
    })
};

const businessLevel400Courses = {
    "Accounting": [
        { code: "", title: "Entrepreneurship (SBU 408D / ENT 302D)", unitFolder: "SBU 408D. ENT 302D Entrepreneurship/", units: businessLevel400SixUnitFiles.entrepreneurship },
        { code: "ADM404D", title: "Project Management", unitFolder: "Project Management/", units: businessLevel400SixUnitFiles.project },
        { code: "", title: "Corporate Financial Analysis", unitFolder: "Corporate Financial Analysis/", folderPending: true },
        { code: "ACC403D", title: "Audit and Internal Review", unitFolder: "ACC 403D - Audit and Internal Review/", folderPending: true },
        { code: "", title: "Investment Management", filename: "Investment Management.pdf" },
        { code: "", title: "Advanced Accounting I", filename: "Advanced Accounting 1 (rev'd) 2015.pdf" }
    ],
    "Finance": [
        { code: "", title: "Entrepreneurship (SBU 408D / ENT 302D)", unitFolder: "SBU 408D. ENT 302D Entrepreneurship/", units: businessLevel400SixUnitFiles.entrepreneurship },
        { code: "ADM404D", title: "Project Management", unitFolder: "Project Management/", units: businessLevel400SixUnitFiles.project },
        { code: "", title: "Financial Modelling IC", unitFolder: "Financial Modelling IC/", folderPending: true },
        { code: "FIN407D", title: "Public Finance", unitFolder: "FIN 407D Public Finance/", folderPending: true },
        { code: "", title: "Corporate Financial Analysis", unitFolder: "Corporate Financial Analysis/", folderPending: true },
        { code: "", title: "Investment Management", filename: "Investment Management.pdf" }
    ],
    "Human Resource Management": [
        { code: "", title: "Entrepreneurship (SBU 408D / ENT 302D)", unitFolder: "SBU 408D. ENT 302D Entrepreneurship/", units: businessLevel400SixUnitFiles.entrepreneurship },
        { code: "ADM404D", title: "Project Management", unitFolder: "Project Management/", units: businessLevel400SixUnitFiles.project },
        { code: "HUM401D", title: "Collective Bargaining & Negotiation Skills", unitFolder: "HUM 401D Collective Bargaining & Negotiation Skills/", folderPending: true },
        { code: "", title: "Leadership and Emotional Intelligence", filename: "Leadership and Emotional Intelligence_.pdf" },
        { code: "", title: "Health and Safety at Work", filename: "Health and Safety at Work.pdf" }
    ],
    "Management": [
        { code: "ADM404D", title: "Project Management", unitFolder: "Project Management/", units: businessLevel400SixUnitFiles.project },
        { code: "SBU403D", title: "Self-Management Skills", filename: "SBU 403D Self-Management Skills edited.pdf" },
        { code: "", title: "Leadership / Organisational Development", filename: "Leadership_Org_Dev.pdf" },
        { code: "", title: "Investment Management", filename: "Investment Management.pdf" },
        { code: "", title: "Industrial and Employment Relationship", filename: "Industrial and Employment Relationship.pdf" },
        { code: "", title: "Entrepreneurship", filename: "Entrepreneurship.pdf" },
        { code: "ADM405D", title: "Database Management", filename: "Database_Management.pdf" }
    ],
    "Marketing": [
        { code: "", title: "Entrepreneurship (SBU 408D / ENT 302D)", unitFolder: "SBU 408D. ENT 302D Entrepreneurship/", units: businessLevel400SixUnitFiles.entrepreneurship },
        { code: "ADM404D", title: "Project Management", unitFolder: "Project Management/", units: businessLevel400SixUnitFiles.project },
        { code: "SBU403D", title: "Self-Management Skills", filename: "SBU 403D Self-Management Skills edited.pdf" },
        { code: "MKT402D", title: "Marketing Research", filename: "MARKETING_RESEARCH.pdf" }
    ],
    "Procurement and Supply Chain Management": [
        { code: "", title: "Entrepreneurship (SBU 408D / ENT 302D)", unitFolder: "SBU 408D. ENT 302D Entrepreneurship/", units: businessLevel400SixUnitFiles.entrepreneurship },
        { code: "ADM404D", title: "Project Management", unitFolder: "Project Management/", units: businessLevel400SixUnitFiles.project },
        { code: "", title: "Sustainable Procurement and Supply", filename: "Sustainable Procurement and Supply_.pdf" },
        { code: "", title: "Management Risk in Procurement and Supply", filename: "Management Risk in Procurement and Supply.pdf" }
    ]
};

/* =========================================================
   DCO YR2 LEVEL 200 — FIRST SEMESTER
   PDF filenames and option folders transcribed from the supplied screenshots.
   Folder contents are discovered inside their exact Nextcloud directory.
   The root path must be validated against the live Nextcloud index.
   ========================================================= */
const dcoYear2Level200Courses = {
    "Accounting Option": [
        { code: "", title: "Taxation", unitFolder: "Taxation/", folderPending: true, folderSearchTerm: "Taxation" },
        { code: "", title: "Business Law Module Reviewed", unitFolder: "Business Law Module Reviewed/", folderPending: true, folderSearchTerm: "Business Law" },
        { code: "SBU201D", title: "Quantitative Methods I", filename: "Quantitative_Methods_1.pdf" },
        { code: "SBU205D", title: "Principles of Management I", filename: "Principles_of_Management_1.pdf" },
        { code: "", title: "Financial Reporting I", filename: "Financial_Reporting_I.pdf" },
        { code: "", title: "Cost and Management Accounting I", filename: "COST AND MANAGEMENT ACCOUNTING 1.pdf" },
        { code: "CMS108D", title: "Communicative Skills II", filename: "Communicative_Skills_2.pdf" }
    ],
    "Management Option": [
        { code: "SBU202D", title: "Quantitative Methods II", filename: "Quantitative Methods II.pdf" },
        { code: "SBU205D", title: "Principles of Management I", filename: "Principles_of_Management_1.pdf" },
        { code: "", title: "Principles of Corporate Governance and Ethics", filename: "Principles_of_Corporate_Governance_and_Ethics.pdf" },
        { code: "", title: "Principles and Practice of Procurement", filename: "Principles__Practice_of_Procurement.pdf" },
        { code: "SBU206D", title: "Principles of Marketing", filename: "Principles of Marketing.pdf" },
        { code: "CMS108D", title: "Communicative Skills II", filename: "Communicative_Skills_2.pdf" }
    ]
};

/* =========================================================
   3YR DCO YR3 LEVEL 200 — FIRST SEMESTER
   Option names and exact visible PDF filenames are taken from the
   supplied folder screenshots. Business Law is a folder whose PDFs
   are discovered only within the selected Nextcloud option folder.
   ========================================================= */
const dcoYear3Level200Courses = {
    "Accounting Option": [
        // The screenshot contains only Taxation Unit 4, not a full Taxation set.
        { code: "", title: "Taxation", units: [
            { label: "UNIT 4", filename: "TAXATION UNIT 4.pdf" }
        ] },
        { code: "", title: "Principles of Corporate Governance and Ethics",
          filename: "Principles_of_Corporate_Governance_and_Ethics.pdf" },
        // Both PDFs belong to Principles of Finance: one course card.
        { code: "FIN071D", title: "Principles of Finance", units: [
            { label: "UNITS 1–3", filename: "Princ. of Finance 1-3.pdf" },
            { label: "COMPLETE MODULE", filename: "FIN 071D Principles of Finance.pdf" }
        ] },
        { code: "ILT101D", title: "Information Literacy",
          filename: "Info_Lit. (1).pdf" },
        { code: "", title: "Cost and Management Accounting I",
          filename: "COST AND MANAGEMENT ACCOUNTING 1.pdf" },
        { code: "CMS108D", title: "Communicative Skills II",
          filename: "Communicative_Skills_2.pdf" }
    ],
    "Management Option": [
        { code: "", title: "Business Law Module Reviewed", unitFolder: "Business Law Module Reviewed/",
          folderPending: true, folderSearchTerm: "Business Law" },
        { code: "SBU201D", title: "Quantitative Methods I",
          filename: "Quantitative_Methods_1.pdf" },
        { code: "", title: "Principles of Corporate Governance and Ethics",
          filename: "Principles_of_Corporate_Governance_and_Ethics.pdf" },
        { code: "", title: "Principles and Practice of Procurement",
          filename: "Principles__Practice_of_Procurement.pdf" },
        { code: "SBU206D", title: "Principles of Marketing",
          filename: "Principles of Marketing.pdf" },
        { code: "ILT101D", title: "Information Literacy",
          filename: "Info_Lit. (1).pdf" },
        { code: "FIN071D", title: "Principles of Finance",
          filename: "FIN 071D Principles of Finance.pdf" },
        { code: "CMS108D", title: "Communicative Skills II",
          filename: "Communicative_Skills_2.pdf" }
    ]
};

/* =========================================================
   3YR BCOM YR1 LEVEL 300 _ LEVEL 400 — FIRST SEMESTER
   The source-folder overview screenshots establish the names
   of the twelve specialisation folders. The Level 300 and Level 400
   course lists are kept separate; in particular Management Level 300
   contains six PDFs, while Management Level 400 contains seven
   DIFFERENT PDFs confirmed in the follow-up screenshot.
   HRM Level 300 includes six PDFs from the follow-up screenshot.
   The partially obscured HUM304D filename is matched within the
   exact HRM Level 300 folder; no filename is invented.
   Separate Nextcloud folder roots prevent cross-programme downloads.
   Only explicit, previously confirmed course codes are used.
   ========================================================= */
const threeYearBcomYr1Level300Courses = {
    "Accounting": [
        { code: "", title: "Taxation", units: [
            { label: "UNIT 4", filename: "TAXATION UNIT 4.pdf" },
            { label: "ADDITIONAL PDF", filename: "TAXATION (2).pdf" }
        ] },
        { code: "ACC303D", title: "Public Sector Accounting",
          lookupQuery: "Public Sector Accounting", lookupPrefix: "Public Sector Accounting" },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Management and Cost Accounting", filename: "MANAGEMENT AND COST ACCOUNTING.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ],
    "Finance": [
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Management and Cost Accounting", filename: "MANAGEMENT AND COST ACCOUNTING.pdf" },
        { code: "", title: "Financial Market and Institutions",
          lookupQuery: "FINANCIAL_MARKET", lookupPrefix: "FINANCIAL_MARKET" },
        { code: "FIN071D", title: "Principles of Finance", filename: "FIN 071D Principles of Finance.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ],
    // HRM Level 300: six PDFs confirmed in the supplied folder screenshot.
    "Human Resource Management": [
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Human Resource Information System", filename: "Human_Resource_Info_System.pdf" },
        // The remaining part of this filename is hidden by the Drive UI.
        // The existing folder-scoped search resolves it without guessing.
        { code: "HUM304D", title: "Performance and Compensation Management",
          lookupQuery: "HUM304D PERFORMANCE AND COMPENSATION MGT",
          lookupPrefix: "HUM304D PERFORMANCE AND COMPENSATION MGT" },
        { code: "HUM311D", title: "Managing Workplace Conflict", filename: "HUM 311D Managing Workplace Conflict.pdf" },
        { code: "", title: "Employment Law", filename: "Employment_Law.pdf" }
    ],
    "Management": [
        { code: "", title: "Public Relations", filename: "Public_Relations.pdf" },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Introduction to Cost and Management Accounting", filename: "Introduction to Cost and Management Accounting.pdf" },
        { code: "", title: "International Business", filename: "INTERNATIONAL_BUS.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ],
    "Marketing": [
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Marketing Management", filename: "Marketing_Management.pdf" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Introduction to Cost and Management Accounting", filename: "Introduction to Cost and Management Accounting.pdf" },
        { code: "", title: "Innovations and Digital Marketing", filename: "Innovations_and_Digital_Marketing (1).pdf" },
        { code: "", title: "Consumer Behaviour", filename: "Consumer_Behaviour.pdf" }
    ],
    "Procurement and Supply Chain Management": [
        { code: "", title: "Procurement and Supply Context", filename: "PROCUREMENT AND SUPPLY CONTEXT edited.pdf" },
        { code: "", title: "Operations Management", filename: "Operations Management.pdf" },
        { code: "", title: "Managing Procurement and Supply Relationships",
          lookupQuery: "MANAGING_PROCUREMENT_AND_SUPPLY_RELATIONSH", lookupPrefix: "MANAGING_PROCUREMENT_AND_SUPPLY_RELATIONSH" },
        { code: "", title: "Managerial Economics", filename: "MANAGERIAL ECONOMICS.pdf" },
        { code: "", title: "Introduction to Cost and Management Accounting", filename: "Introduction to Cost and Management Accounting.pdf" },
        { code: "", title: "Company and Partnership Law", filename: "Company and Partnership Law.pdf" }
    ]
};

const threeYearBcomYr1Level400Courses = {
    "Accounting": [
        { code: "", title: "Investment Management", filename: "Investment Management.pdf" },
        { code: "", title: "Introduction to Project Management", filename: "Intro_to_Project_Management.pdf" },
        { code: "FIN405D", title: "Corporate Financial Analysis", filename: "FIN 405D Corporate Financial Analysis Edited 2.pdf" },
        { code: "", title: "Entrepreneurship", filename: "Entrepreneurship.pdf" },
        { code: "", title: "Advanced Accounting I", filename: "Advanced Accounting 1 (rev'd) 2015.pdf" },
        { code: "ACC403D", title: "Audit and Internal Review", filename: "ACC 403D Audit and Internal Review.pdf" }
    ],
    "Finance": [
        { code: "FIN407D", title: "Public Finance", filename: "Public Finance.pdf" },
        { code: "", title: "Investment Management", filename: "Investment Management.pdf" },
        { code: "", title: "Introduction to Project Management", filename: "Intro_to_Project_Management.pdf" },
        { code: "", title: "Financial Modelling", filename: "Financial Modelling.pdf" },
        { code: "FIN405D", title: "Corporate Financial Analysis", filename: "FIN 405D Corporate Financial Analysis Edited 2.pdf" },
        { code: "", title: "Entrepreneurship", filename: "Entrepreneurship.pdf" }
    ],
    "Human Resource Management": [
        { code: "", title: "Leadership and Emotional Intelligence", filename: "Leadership and Emotional Intelligence_.pdf" },
        { code: "", title: "Introduction to Project Management", filename: "Intro_to_Project_Management.pdf" },
        { code: "", title: "Health and Safety at Work", filename: "Health and Safety at Work.pdf" },
        { code: "", title: "Entrepreneurship", filename: "Entrepreneurship.pdf" },
        { code: "HUM401D", title: "Collective Bargaining and Negotiation Skills", filename: "Collective Bargaining and Negotiation Skills.pdf" }
    ],
    // Management Level 400 has its own seven PDFs; do not reuse Level 300.
    "Management": [
        { code: "SBU403D", title: "Self-Management Skills", filename: "Self-Management Skills.pdf" },
        { code: "", title: "Leadership and Organisational Development", filename: "Leadership__Org_Dev.pdf" },
        { code: "", title: "Investment Management", filename: "Investment Management.pdf" },
        { code: "", title: "Introduction to Project Management", filename: "Intro_to_Project_Management.pdf" },
        { code: "", title: "Industrial and Employment Relationship", filename: "Industrial and Employment Relationship.pdf" },
        { code: "", title: "Entrepreneurship", filename: "Entrepreneurship.pdf" },
        { code: "", title: "Database Management", filename: "Database_Management.pdf" }
    ],
    "Marketing": [
        { code: "SBU403D", title: "Self-Management Skills", filename: "Self-Management Skills.pdf" },
        { code: "MKT402D", title: "Marketing Research", filename: "MARKETING_RESEARCH.pdf" },
        { code: "", title: "Introduction to Project Management", filename: "Intro_to_Project_Management.pdf" },
        { code: "", title: "Entrepreneurship", filename: "Entrepreneurship.pdf" }
    ],
    "Procurement and Supply Chain Management": [
        { code: "", title: "Sustainable Procurement and Supply", filename: "Sustainable Procurement and Supply_.pdf" },
        { code: "SBU403D", title: "Self-Management Skills", filename: "Self-Management Skills.pdf" },
        { code: "", title: "Managing Risk in Procurement and Supply", filename: "Managing Risk in Procurement and Supply_.pdf" },
        { code: "", title: "Introduction to Project Management", filename: "Intro_to_Project_Management.pdf" }
    ]
};

/* =========================================================
   3YR BCOM YR1 LEVEL 200 — FIRST SEMESTER
   All seven option folders verified from the supplied screenshots.
   Each Level 200 option uses its OWN Nextcloud directory.
   Accounting and the combined Accounting _ Finance Option are
   intentionally different catalogues. Do not silently reuse files
   across folders, even if course titles are the same.
   ========================================================= */
const threeYearBcomYr1Level200Courses = {
    "Accounting": [
        { code: "SBU201D", title: "Quantitative Methods I", filename: "Quantitative_Methods_1.pdf" },
        { code: "SBU205D", title: "Principles of Management I", filename: "Principles_of_Management_1.pdf" },
        { code: "", title: "Human Resource Management", filename: "Human Resource Mgt. (Revised) 2016.pdf" },
        { code: "", title: "Financial Reporting I", filename: "Financial_Reporting_I.pdf" },
        { code: "", title: "Business Law I", filename: "Business_Law_I.pdf" },
        { code: "SBU207D", title: "Business Communication", filename: "Bus._communication.pdf" }
    ],
    "Finance": businessLevel200Courses["Finance"].map(item => ({ ...item })),
    "Human Resource Management": businessLevel200Courses["Human Resource Management"].map(item => ({ ...item })),
    "Management": businessLevel200Courses["Management"].map(item => ({ ...item })),
    "Marketing": businessLevel200Courses["Marketing"].map(item => ({ ...item })),
    "Procurement and Supply Chain Management": businessLevel200Courses["Procurement and Supply Chain Management"].map(item =>
        item.title === "Sourcing in Procurement and Supply"
            ? { ...item, filename: "Sourcing in Procurement and Supply edited.pdf" }
            : { ...item }
    ),
    "Accounting _ Finance Option": [
        // Five distinct Taxation PDFs, one course card. The unnumbered
        // TAXATION.pdf is not assumed to be Unit 1 or Unit 2.
        { code: "", title: "Taxation", units: [
            { label: "UNIT 3", filename: "UNIT 3 TAXATION.pdf" },
            { label: "UNIT 4", filename: "TAXATION UNIT 4.pdf" },
            { label: "UNIT 5", filename: "TAXATION UNIT 5.pdf" },
            { label: "UNIT 6", filename: "UNIT 6 TAXATION PRACTICE-TAXATION.pdf" },
            { label: "ADDITIONAL PDF", filename: "TAXATION.pdf" }
        ] },
        { code: "SBU201D", title: "Quantitative Methods I", filename: "Quantitative_Methods_1.pdf" },
        { code: "SBU205D", title: "Principles of Management I", filename: "Principles_of_Management_1.pdf" },
        { code: "", title: "Principles of Corporate Governance and Ethics", filename: "Principles_of_Corporate_Governance_and_Ethics.pdf" },
        { code: "", title: "Cost and Management Accounting I", filename: "COST AND MANAGEMENT ACCOUNTING 1.pdf" },
        { code: "CMS108D", title: "Communicative Skills II", filename: "Communicative_Skills_2.pdf" }
    ]
};

/* =========================================================
   2YR DCO LEVEL 100 — FIRST SEMESTER
   Both source folders contain the same eight PDFs, but each option
   keeps its own Nextcloud directory for direct downloads.
   ========================================================= */
const twoYearDcoLevel100Modules = [
    { code: "SBU053D", title: "Basic Mathematics", filename: "SBU 053D BASIC MATHEMATICS.pdf" },
    { code: "ECO101D", title: "Principles of Economics 1", filename: "Principles_of_Economics_1.pdf" },
    { code: "", title: "Principles of Accounting 1", filename: "Principles_of_Accounting_1.pdf" },
    { code: "", title: "Introduction to Business 1", filename: "Introduction_to_Business_1.pdf" },
    { code: "INF101D", title: "Introduction to Computing", filename: "INF 101D Introduction to Computing.pdf" },
    { code: "ASP101D", title: "Core African Studies", filename: "Core-African_Studies.pdf" },
    { code: "CMS107D", title: "Communicative Skills 1", filename: "Communicative_Skills_1.pdf" },
    { code: "", title: "Business Law I", filename: "Business_Law_I.pdf" }
];

const twoYearDcoLevel100Courses = Object.fromEntries(
    ["Accounting Option", "Management Option"].map(option => [
        option, twoYearDcoLevel100Modules.map(module => ({ ...module }))
    ])
);

/* =========================================================
   2YR BCOM YR1 LEVEL 300 _ LEVEL 400 — FIRST SEMESTER
   Source: user-provided BUSINESS Google Drive folder.
   12 specialisation folders and their 99 PDF files were
   inspected directly, including six grouped multi-unit
   courses. Download links use the corresponding Nextcloud
   paths and require live verification against its index.
   ========================================================= */
const twoYearBcomYr1Level300Courses = {
    "Accounting": [
        {
            "code": "",
            "title": "Cost and Management Accounting I",
            "filename": "COST AND MANAGEMENT ACCOUNTING 1.pdf"
        },
        {
            "code": "",
            "title": "Operations Management",
            "filename": "Operations Management.pdf"
        },
        {
            "code": "",
            "title": "Taxation",
            "unitFolder": "",
            "units": [
                {
                    "number": 3,
                    "filename": "UNIT 3 TAXATION.pdf"
                },
                {
                    "number": 4,
                    "filename": "TAXATION UNIT 4.pdf"
                },
                {
                    "number": 5,
                    "filename": "TAXATION UNIT 5.pdf"
                },
                {
                    "label": "ADDITIONAL PDF",
                    "filename": "TAXATION.pdf"
                }
            ]
        },
        {
            "code": "ACC303D",
            "title": "Public Sector Accounting",
            "filename": "Public Sector Accounting”.pdf"
        },
        {
            "code": "",
            "title": "Company and Partnership Law",
            "filename": "Company and Partnership Law.pdf"
        },
        {
            "code": "",
            "title": "Managerial Economics",
            "filename": "MANAGERIAL ECONOMICS.pdf"
        }
    ],
    "Finance": [
        {
            "code": "",
            "title": "Cost and Management Accounting I",
            "filename": "COST AND MANAGEMENT ACCOUNTING 1.pdf"
        },
        {
            "code": "FIN071D",
            "title": "Principles of Finance",
            "filename": "FIN 071D Principles of Finance.pdf"
        },
        {
            "code": "",
            "title": "Operations Management",
            "filename": "Operations Management.pdf"
        },
        {
            "code": "",
            "title": "Financial Market and Institutions",
            "filename": "Financial Market and Institutions.pdf"
        },
        {
            "code": "",
            "title": "Company and Partnership Law",
            "filename": "Company and Partnership Law.pdf"
        },
        {
            "code": "",
            "title": "Managerial Economics",
            "filename": "MANAGERIAL ECONOMICS.pdf"
        }
    ],
    "Human Resource Management": [
        {
            "code": "",
            "title": "Operations Management",
            "filename": "Operations Management.pdf"
        },
        {
            "code": "",
            "title": "Human Resource Information System",
            "filename": "Human_Resource_Info_System.pdf"
        },
        {
            "code": "",
            "title": "Employment Law",
            "filename": "Employment_Law.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Cost and Management Accounting",
            "filename": "Introduction to Cost and Management Accounting.pdf"
        },
        {
            "code": "",
            "title": "Managerial Economics",
            "filename": "MANAGERIAL ECONOMICS.pdf"
        },
        {
            "code": "HUM311D",
            "title": "Managing Workplace Conflict",
            "filename": "HUM 311D Managing Workplace Conflict.pdf"
        }
    ],
    "Management": [
        {
            "code": "",
            "title": "Operations Management",
            "filename": "Operations Management.pdf"
        },
        {
            "code": "",
            "title": "International Business",
            "filename": "INTERNATIONAL_BUS.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Cost and Management Accounting",
            "filename": "Introduction to Cost and Management Accounting.pdf"
        },
        {
            "code": "",
            "title": "Company and Partnership Law",
            "filename": "Company and Partnership Law.pdf"
        },
        {
            "code": "",
            "title": "Managerial Economics",
            "filename": "MANAGERIAL ECONOMICS.pdf"
        },
        {
            "code": "",
            "title": "Public Relations",
            "filename": "Public_Relations.pdf"
        }
    ],
    "Marketing": [
        {
            "code": "",
            "title": "Innovations and Digital Marketing",
            "filename": "Innovations_and_Digital_Marketing (1).pdf"
        },
        {
            "code": "",
            "title": "Operations Management",
            "filename": "Operations Management.pdf"
        },
        {
            "code": "",
            "title": "Marketing Management",
            "filename": "Marketing_Management.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Cost and Management Accounting",
            "filename": "Introduction_to_Cost_and_Management_Accounting.pdf"
        },
        {
            "code": "",
            "title": "Consumer Behaviour",
            "filename": "Consumer_Behaviour.pdf"
        },
        {
            "code": "",
            "title": "Managerial Economics",
            "filename": "MANAGERIAL ECONOMICS.pdf"
        }
    ],
    "Procurement and Supply Chain Management": [
        {
            "code": "",
            "title": "Procurement and Supply Context",
            "filename": "PROCUREMENT AND SUPPLY CONTEXT edited.pdf"
        },
        {
            "code": "",
            "title": "Elective: Introduction to Cost and Management Accounting",
            "filename": "Elective-Introduction_to_Cost_and_Management_Accounting.pdf"
        },
        {
            "code": "",
            "title": "Operations Management",
            "filename": "Operations Management.pdf"
        },
        {
            "code": "",
            "title": "Company and Partnership Law",
            "filename": "Company and Partnership Law.pdf"
        },
        {
            "code": "",
            "title": "Managerial Economics",
            "filename": "MANAGERIAL ECONOMICS.pdf"
        },
        {
            "code": "",
            "title": "Managing Procurement and Supply Relationships",
            "filename": "MANAGING_PROCUREMENT_AND_SUPPLY_RELATIONSHIP.pdf"
        }
    ]
};

const twoYearBcomYr1Level400Courses = {
    "Accounting": [
        {
            "code": "",
            "title": "Advanced Accounting I",
            "filename": "Advanced Accounting 1 (rev'd) 2015.pdf"
        },
        {
            "code": "ACC403D",
            "title": "Audit and Internal Review",
            "filename": "ACC 403D Audit and Internal Review.pdf"
        },
        {
            "code": "ADM404D",
            "title": "Project Management",
            "unitFolder": "Project Management/",
            "units": [
                {
                    "number": 1,
                    "filename": "Project Management Unit 1.pdf"
                },
                {
                    "number": 2,
                    "filename": "Project Management Unit 2.pdf"
                },
                {
                    "number": 3,
                    "filename": "Project Management Unit 3.pdf"
                },
                {
                    "number": 4,
                    "filename": "Project Management Unit 4.pdf"
                },
                {
                    "number": 5,
                    "filename": "Project Management Unit 5.pdf"
                },
                {
                    "number": 6,
                    "filename": "Project Management Unit 6.pdf"
                }
            ]
        },
        {
            "code": "FIN405D",
            "title": "Corporate Financial Analysis",
            "filename": "Corporate Financial Analysis.pdf"
        },
        {
            "code": "",
            "title": "Investment Management",
            "filename": "Investment Management.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Project Management",
            "filename": "Intro_to_Project_Management.pdf"
        }
    ],
    "Finance": [
        {
            "code": "",
            "title": "Entrepreneurship",
            "filename": "Entrepreneurship.pdf"
        },
        {
            "code": "ADM404D",
            "title": "Project Management",
            "unitFolder": "Project Management/",
            "units": [
                {
                    "number": 1,
                    "filename": "Project Management Unit 1.pdf"
                },
                {
                    "number": 2,
                    "filename": "Project Management Unit 2.pdf"
                },
                {
                    "number": 3,
                    "filename": "Project Management Unit 3.pdf"
                },
                {
                    "number": 4,
                    "filename": "Project Management Unit 4.pdf"
                },
                {
                    "number": 5,
                    "filename": "Project Management Unit 5.pdf"
                },
                {
                    "number": 6,
                    "filename": "Project Management Unit 6.pdf"
                }
            ]
        },
        {
            "code": "FIN407D",
            "title": "Public Finance",
            "unitFolder": "FIN 407D Public Finance/",
            "units": [
                {
                    "number": 1,
                    "filename": "Unit 1 FIN 407D Public Finance editted.pdf"
                },
                {
                    "number": 2,
                    "filename": "Unit 2 FIN 407D Public Finance editted.pdf"
                },
                {
                    "number": 3,
                    "filename": "Unit 3 FIN 407D Public Finance editted.pdf"
                },
                {
                    "number": 4,
                    "filename": "Unit 4 FIN 407D Public Finance editted.pdf"
                },
                {
                    "number": 5,
                    "filename": "Unit 5 FIN 407D Public Finance editted.pdf"
                },
                {
                    "number": 6,
                    "filename": "Unit 6 FIN 407D Public Finance editted.pdf"
                }
            ]
        },
        {
            "code": "",
            "title": "Financial Modelling",
            "filename": "FINANCIAL MODELING.pdf"
        },
        {
            "code": "FIN405D",
            "title": "Corporate Financial Analysis",
            "filename": "Corporate Financial Analysis.pdf"
        },
        {
            "code": "",
            "title": "Investment Management",
            "filename": "Investment Management.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Project Management",
            "filename": "Intro_to_Project_Management.pdf"
        }
    ],
    "Human Resource Management": [
        {
            "code": "",
            "title": "Collective Bargaining and Negotiation Skills",
            "filename": "Collective Bargaining and Negotiation Skills.pdf"
        },
        {
            "code": "",
            "title": "Entrepreneurship",
            "filename": "Entrepreneurship.pdf"
        },
        {
            "code": "",
            "title": "Health and Safety at Work",
            "filename": "Health and Safety at Work.pdf"
        },
        {
            "code": "",
            "title": "Leadership and Emotional Intelligence",
            "filename": "Leadership and Emotional Intelligence_.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Project Management",
            "filename": "Intro_to_Project_Management.pdf"
        }
    ],
    "Management": [
        {
            "code": "",
            "title": "Entrepreneurship",
            "filename": "Entrepreneurship.pdf"
        },
        {
            "code": "",
            "title": "Leadership and Organisational Development",
            "filename": "Leadership__Org_Dev.pdf"
        },
        {
            "code": "ADM405D",
            "title": "Database Management",
            "filename": "Database_Management.pdf"
        },
        {
            "code": "SBU403D",
            "title": "Self-Management Skills",
            "filename": "Self-Management Skills.pdf"
        },
        {
            "code": "",
            "title": "Investment Management",
            "filename": "Investment Management.pdf"
        },
        {
            "code": "",
            "title": "Industrial and Employment Relationship",
            "filename": "Industrial and Employment Relationship.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Project Management",
            "filename": "Intro_to_Project_Management.pdf"
        }
    ],
    "Marketing": [
        {
            "code": "",
            "title": "Entrepreneurship",
            "filename": "Entrepreneurship.pdf"
        },
        {
            "code": "ADM404D",
            "title": "Project Management",
            "unitFolder": "Project Management/",
            "units": [
                {
                    "number": 1,
                    "filename": "Project Management Unit 1.pdf"
                },
                {
                    "number": 2,
                    "filename": "Project Management Unit 2.pdf"
                },
                {
                    "number": 3,
                    "filename": "Project Management Unit 3.pdf"
                },
                {
                    "number": 4,
                    "filename": "Project Management Unit 4.pdf"
                },
                {
                    "number": 5,
                    "filename": "Project Management Unit 5.pdf"
                },
                {
                    "number": 6,
                    "filename": "Project Management Unit 6.pdf"
                }
            ]
        },
        {
            "code": "SBU403D",
            "title": "Self-Management Skills",
            "filename": "Self-Management Skills.pdf"
        },
        {
            "code": "MKT402D",
            "title": "Marketing Research",
            "filename": "MARKETING_RESEARCH.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Project Management",
            "filename": "Intro_to_Project_Management.pdf"
        }
    ],
    "Procurement and Supply Chain Management": [
        {
            "code": "",
            "title": "Entrepreneurship",
            "filename": "Entrepreneurship.pdf"
        },
        {
            "code": "ADM404D",
            "title": "Project Management",
            "unitFolder": "Project Management/",
            "units": [
                {
                    "number": 1,
                    "filename": "Project Management Unit 1.pdf"
                },
                {
                    "number": 2,
                    "filename": "Project Management Unit 2.pdf"
                },
                {
                    "number": 3,
                    "filename": "Project Management Unit 3.pdf"
                },
                {
                    "number": 4,
                    "filename": "Project Management Unit 4.pdf"
                },
                {
                    "number": 5,
                    "filename": "Project Management Unit 5.pdf"
                },
                {
                    "number": 6,
                    "filename": "Project Management Unit 6.pdf"
                }
            ]
        },
        {
            "code": "",
            "title": "Managing Risk in Procurement and Supply",
            "filename": "Managing Risk in Procurement and Supply_.pdf"
        },
        {
            "code": "",
            "title": "Sustainable Procurement and Supply",
            "filename": "Sustainable Procurement and Supply_.pdf"
        },
        {
            "code": "",
            "title": "Introduction to Project Management",
            "filename": "Intro_to_Project_Management.pdf"
        }
    ]
};

const businessCourseCatalogue = {
    firstSemester: {
        "4YR BCOM 100,200,300,400": {
            "100": Object.fromEntries(
                businessSpecialisations.map(name => [
                    name,
                    businessLevel100Courses.map(module => ({ ...module }))
                ])
            ),
            "200": businessLevel200Courses,
            "300": businessLevel300Courses,
            "400": businessLevel400Courses
        },
        "DCO YR2 LEVEL 200": {
            "200": dcoYear2Level200Courses
        },
        "3YR DCO YR3 LEVEL 200": {
            "200": dcoYear3Level200Courses
        },
        "3YR BCOM YR1 LEVEL 300 _ LEVEL 400": {
            "300": threeYearBcomYr1Level300Courses,
            "400": threeYearBcomYr1Level400Courses
        },
        "3YR BCOM YR1 LEVEL 200": {
            "200": threeYearBcomYr1Level200Courses
        },
        "2YR DCO LEVEL 100": {
            "100": twoYearDcoLevel100Courses
        },
        "2YR BCOM YR1 LEVEL 300 _ LEVEL 400": {
            "300": twoYearBcomYr1Level300Courses,
            "400": twoYearBcomYr1Level400Courses
        }
    }
};

/* =========================================
   DISPLAY BUSINESS COURSE CARDS
   ========================================= */

/* =========================================================
   LEVEL 400: DISCOVER PDF FILES INSIDE A CONFIRMED COURSE FOLDER
   =========================================================
   The First Semester index is searched on demand. The API may
   return the same filename in many departments, so the COMPLETE
   indexed path must start with our exact selected folder prefix.
   Never infer or construct a filename from its title.
*/

function indexedBusinessUnitNumber(filename) {
    const match = String(filename || "").match(/\bunit[\s._-]*(\d+)\b/i);
    return match ? Number(match[1]) : null;
}

async function findBusinessFolderPdfFiles(folderPrefix, item) {
    const folderName = String(item.unitFolder || "")
        .split("/").filter(Boolean).pop() || "";
    const prefix = folderPrefix.replace(/\\/g, "/").toLowerCase();
    const uniqueFiles = new Map();
    const searched = new Set();

    // Keep the directory-specific safety check. A similar filename in
    // a different specialisation must NEVER be used as a download.
    async function searchAndCollect(term) {
        const query = String(term || "").trim();
        if (query.length < 3 || searched.has(query.toLowerCase())) return;
        searched.add(query.toLowerCase());

        const params = new URLSearchParams({ q: query });
        const response = await fetch(
            `${MODULE_API_BASE}/modules/search?${params.toString()}`,
            { headers: { Accept: "application/json" } }
        );
        if (!response.ok) throw new Error("The module index search is unavailable");
        const data = await response.json();
        const records = Array.isArray(data.results) ? data.results : [];
        for (const entry of records) {
            const relativePath = String(entry.relative_path || "")
                .replace(/\\/g, "/");
            if (!relativePath.toLowerCase().startsWith(prefix)) continue;
            if (!relativePath.toLowerCase().endsWith(".pdf")) continue;
            if (relativePath.split("/").includes("..")) continue;
            const filename = relativePath.split("/").pop();
            const normalizedFilename = filename.replace(/[_-]+/g, " ").toLowerCase();
            if (item.title === "Corporate Financial Analysis" &&
                !normalizedFilename.includes("corporate financial analysis")) continue;
            if (item.title === "Project Management" &&
                !normalizedFilename.includes("project management")) continue;
            uniqueFiles.set(relativePath.toLowerCase(), { relativePath, filename });
        }
    }

    const hints = [
        item.folderSearchTerm || item.title,
        folderName.replace(/^(SBU\s*408D[.\s]*ENT\s*302D|ACC\s*403D|HUM\s*401D|FIN\s*407D)\s*/i, "").trim(),
        item.code || ""
    ];
    for (const hint of hints) await searchAndCollect(hint);

    // The search endpoint can return a partial ranked list when many
    // Nextcloud modules match a broad title. Project Management and
    // Entrepreneurship are confirmed six-unit folders. Query for each
    // missing unit rather than assuming the first three are all files.
    const needsSixUnits = item.title === "Project Management" ||
        item.title === "Entrepreneurship (SBU 408D / ENT 302D)";
    if (needsSixUnits) {
        const hasUnit = n => Array.from(uniqueFiles.values()).some(
            file => indexedBusinessUnitNumber(file.filename) === n
        );
        for (let n = 1; n <= 6; n++) {
            if (hasUnit(n)) continue;
            let targetedTerms;
            if (item.title === "Project Management") {
                targetedTerms = [
                    `Project Management Unit ${n}`,
                    `Unit ${n} Project Management`
                ];
            } else {
                targetedTerms = [
                    `Unit ${n} SBU 408D`,
                    `Unit ${n} Entrepreneurship`,
                    `Entrepreneurship Unit ${n}`
                ];
            }
            for (const term of targetedTerms) {
                try {
                    await searchAndCollect(term);
                } catch (error) {
                    // Do not discard already located units if one focused
                    // search fails. Missing unit numbers will be reported.
                    console.warn("Focused unit search unavailable:", term, error);
                }
                if (hasUnit(n)) break;
            }
        }
    }

    return Array.from(uniqueFiles.values()).sort((a, b) => {
        const aUnit = indexedBusinessUnitNumber(a.filename);
        const bUnit = indexedBusinessUnitNumber(b.filename);
        if (aUnit !== null && bUnit !== null && aUnit !== bUnit) return aUnit - bUnit;
        if (aUnit !== null && bUnit === null) return -1;
        if (aUnit === null && bUnit !== null) return 1;
        return a.filename.localeCompare(b.filename, undefined, { numeric: true });
    });
}


/* =========================================================
   FIRST SEMESTER EDUCATION COURSE CARDS
   BUSINESS remains unchanged; the original /module/view endpoint
   continues to download PDFs directly (no preview screen).
   ========================================================= */
function showEducationCourseCards(programme, addHistory = true) {
    const level = String(selectedLevel || "");
    const courses = educationCourseCatalogue[programme]?.[level] || [];
    if (!courses.length || selectedSemester !== "firstSemester") return;
    selectedProgramme = programme;
    selectedSpecialisation = null;
    navigationType = "undergraduate";
    const heading = document.getElementById("courseHeading");
    const subheading = document.getElementById("courseSubheading");
    const list = document.getElementById("courseList");
    if (!list) return;
    if (heading) heading.textContent = `${programme} · Level ${level}`;
    if (subheading) subheading.textContent = `${semesterLabels[selectedSemester]} · Education`;
    list.replaceChildren();

    function appendDownload(holder, label, path) {
        if (!path || !path.toLowerCase().endsWith(".pdf") || path.split("/").includes("..")) return;
        const b = document.createElement("button");
        b.type = "button";
        b.className = "open-btn";
        b.textContent = label;
        b.addEventListener("click", () => {
            const query = new URLSearchParams({ semester: "first", path });
            window.location.assign(`${MODULE_API_BASE}/module/view?${query.toString()}`);
        });
        holder.appendChild(b);
    }

    courses.forEach(item => {
        const card = document.createElement("article");
        card.className = "course-card";
        if (item.code) {
            const code = document.createElement("div");
            code.className = "course-code";
            code.textContent = item.code;
            card.appendChild(code);
        }
        const title = document.createElement("div");
        title.className = "course-title";
        title.textContent = item.title;
        card.appendChild(title);
        if (Array.isArray(item.units) && item.units.length) {
            const holder = document.createElement("div");
            holder.className = "course-unit-downloads";
            holder.style.display = "grid";
            holder.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
            holder.style.gap = "10px";
            holder.style.marginTop = "14px";
            item.units.forEach(u => appendDownload(holder, `DOWNLOAD ${u.label}`, u.relativePath));
            card.appendChild(holder);
        } else {
            appendDownload(card, "DOWNLOAD MODULE", item.relativePath);
        }
        list.appendChild(card);
    });
    showView("courseView");
    if (addHistory) savePortalHistory("educationCourses");
}

function showBusinessCourseCards(specialisation, addHistory = true) {

    const courses =
        businessCourseCatalogue[selectedSemester]
            ?.[selectedProgramme]
            ?.[selectedLevel]
            ?.[specialisation] || [];

    if (!courses.length) return;

    selectedSpecialisation = specialisation;

    const heading =
        document.getElementById("courseHeading");

    const subheading =
        document.getElementById("courseSubheading");

    const list =
        document.getElementById("courseList");

    if (!list) return;

    if (heading) {
        heading.textContent =
            specialisation + " · Level " + selectedLevel;
    }

    if (subheading) {
        subheading.textContent =
            semesterLabels[selectedSemester] +
            " · " + selectedProgramme;
    }

    list.innerHTML = "";

    courses.forEach(item => {

        const card = document.createElement("article");
        card.className = "course-card";

        if (item.code) {
            const code = document.createElement("div");
            code.className = "course-code";
            code.textContent = item.code;
            card.appendChild(code);
        }

        const title = document.createElement("div");
        title.className = "course-title";
        title.textContent = item.title;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "open-btn";
        button.textContent = "OPEN MODULES";

        
/* =========================================
   BUSINESS LEVEL 100 MODULE FOLDERS
   ========================================= */

        // Nextcloud subfolders under BUSINESS / 4YR BCOM / YR1 LEVEL 100.
        // Folder names are based on supplied Drive screenshots;
        // verify the matching folder paths in the Nextcloud index.
        const businessLevel100Root =
            "/BUSINESS/4YR BCOM  100,200,300, 400/YR1 LEVEL 100/";

        const businessLevel100Folders = {
            "Accounting": "ACCOUNTING LEVEL 100/",
            "Finance": "FINANCE LEVEL 100/",
            "Human Resource Management": "HRM LEVEL 100/",
            "Management": "MANAGEMENT LEVEL 100/",
            "Marketing": "MARKETING LEVEL 100/",
            "Procurement and Supply Chain Management":
                "PSCM LEVEL 100/"
        };

        const isBusinessLevel100 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "4YR BCOM 100,200,300,400" &&
            String(selectedLevel) === "100";

        const selectedFolder = isBusinessLevel100
            ? businessLevel100Folders[specialisation]
            : null;

        /*
         * Level 200 root/subfolder naming follows the supplied Drive
         * screenshots and the established Level 100 Nextcloud pattern.
         * Confirm these Level 200 paths against first-semester-index.json
         * before publishing to production.
         */
        const businessLevel200Root =
            "/BUSINESS/4YR BCOM  100,200,300, 400/YR2 LEVEL 200/";

        const businessLevel200Folders = {
            "Accounting": "ACCOUNTING LEVEL 200/",
            "Finance": "FINANCE LEVEL 200/",
            "Human Resource Management": "HRM LEVEL 200/",
            "Management": "MANAGEMENT LEVEL 200/",
            "Marketing": "MARKETING LEVEL 200/",
            "Procurement and Supply Chain Management": "PSCM LEVEL 200/"
        };

        const isBusinessLevel200 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "4YR BCOM 100,200,300,400" &&
            String(selectedLevel) === "200";

        const selectedLevel200Folder = isBusinessLevel200
            ? businessLevel200Folders[specialisation]
            : null;

        /*
         * Level 300 folder names are shown in the supplied screenshots.
         * The full root is based on the working Level 100/200 pattern;
         * verify all paths against the Nextcloud First Semester index.
         */
        const businessLevel300Root =
            "/BUSINESS/4YR BCOM  100,200,300, 400/YR3 LEVEL 300/";

        const businessLevel300Folders = {
            "Accounting": "ACCOUNTING LEVEL 300/",
            "Finance": "FINANCE LEVEL 300/",
            "Human Resource Management": "HRM LEVEL 300/",
            "Management": "MANAGEMENT LEVEL 300/",
            "Marketing": "MARKETING LEVEL 300/",
            "Procurement and Supply Chain Management": "PSCM LEVEL 300/"
        };

        const isBusinessLevel300 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "4YR BCOM 100,200,300,400" &&
            String(selectedLevel) === "300";

        const selectedLevel300Folder = isBusinessLevel300
            ? businessLevel300Folders[specialisation]
            : null;

        /*
         * Level 400 source folder names appear in the six screenshots.
         * The full root is inferred from the working Years 1–3 layout;
         * it has not been verified against the Nextcloud index.
         */
        const businessLevel400Root =
            "/BUSINESS/4YR BCOM  100,200,300, 400/YR4 LEVEL 400/";
        const businessLevel400Folders = {
            "Accounting": "ACCOUNTING LEVEL 400/",
            "Finance": "FINANCE LEVEL 400/",
            "Human Resource Management": "HUMAN RESOURCE MANAGEMENT LEVEL 400/",
            "Management": "MANAGEMENT LEVEL 400/",
            "Marketing": "MARKETING LEVEL 400/",
            "Procurement and Supply Chain Management": "PSCM LEVEL 400/"
        };
        const isBusinessLevel400 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "4YR BCOM 100,200,300,400" &&
            String(selectedLevel) === "400";
        const selectedLevel400Folder = isBusinessLevel400
            ? businessLevel400Folders[specialisation]
            : null;
        // Separate DCO Year 2 paths from the 4-year BCom specialisations.
        // This keeps the existing Level 100–400 BCom download mappings untouched.
        const isDcoYear2Level200 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "DCO YR2 LEVEL 200" &&
            String(selectedLevel) === "200";
        const dcoYear2Level200Root = "/BUSINESS/DCO YR2 LEVEL 200/";
        const dcoYear2FolderNames = {
            "Accounting Option": "ACCOUNTING OPTION/",
            "Management Option": "MANAGEMENT OPTION/"
        };
        const dcoYear2Folder = isDcoYear2Level200
            ? dcoYear2FolderNames[specialisation]
            : null;

        // The 3-year DCO Year 3 programme has its own option folders.
        const isDcoYear3Level200 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "3YR DCO YR3 LEVEL 200" &&
            String(selectedLevel) === "200";
        const dcoYear3Level200Root = "/BUSINESS/3YR DCO YR3 LEVEL 200/";
        const dcoYear3Folder = isDcoYear3Level200
            ? dcoYear2FolderNames[specialisation]
            : null;

        // Three-year BCom (Year 1): the Level 300 and Level 400 files
        // live in separate specialisation folders beneath ONE programme root.
        const isThreeYearBcomYr1 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "3YR BCOM YR1 LEVEL 300 _ LEVEL 400" &&
            (String(selectedLevel) === "300" || String(selectedLevel) === "400");
        const threeYearBcomYr1Root =
            "/BUSINESS/3YR BCOM YR1 LEVEL 300 _ LEVEL 400/";
        const threeYearBcomFolderNames = {
            "Accounting": "ACCOUNTING",
            "Finance": "FINANCE",
            "Human Resource Management": "HRM",
            "Management": "MANAGEMENT",
            "Marketing": "MARKETING",
            "Procurement and Supply Chain Management": "PSCM"
        };
        const threeYearBcomYr1Folder = isThreeYearBcomYr1 &&
            threeYearBcomFolderNames[specialisation]
                ? threeYearBcomYr1Root + threeYearBcomFolderNames[specialisation] +
                  " LEVEL " + selectedLevel + "/"
                : null;

        // Separate 3YR BCOM YR1 LEVEL 200 folders, including joint option.
        const isThreeYearBcomLevel200 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "3YR BCOM YR1 LEVEL 200" &&
            String(selectedLevel) === "200";
        const threeYearBcomLevel200Folders = {
            "Accounting": "ACCOUNTING LEVEL 200/",
            "Finance": "FINANCE LEVEL 200/",
            "Human Resource Management": "HRM LEVEL 200/",
            "Management": "MANAGEMENT LEVEL 200/",
            "Marketing": "MARKETING LEVEL 200/",
            "Procurement and Supply Chain Management": "PSCM LEVEL 200/",
            "Accounting _ Finance Option": "ACCOUNTING _ FINANCE OPTION/"
        };
        const threeYearBcomLevel200Folder = isThreeYearBcomLevel200 &&
            threeYearBcomLevel200Folders[specialisation]
                ? "/BUSINESS/3YR BCOM YR1 LEVEL 200/" +
                  threeYearBcomLevel200Folders[specialisation]
                : null;

        // 2-Year DCO Level 100 uses two option folders directly beneath
        // BUSINESS / 2YR DCO LEVEL 100, independent of all BCom paths.
        const isTwoYearDcoLevel100 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "2YR DCO LEVEL 100" &&
            String(selectedLevel) === "100";
        const twoYearDcoLevel100Root = "/BUSINESS/2YR DCO LEVEL 100/";
        const twoYearDcoLevel100Folder = isTwoYearDcoLevel100
            ? dcoYear2FolderNames[specialisation]
            : null;

        // 2-Year BCom Year 1: 12 source folders across Levels 300 and 400.
        // Use exact directory names from the connected Google Drive source.
        const isTwoYearBcomYr1 =
            selectedSemester === "firstSemester" &&
            selectedProgramme === "2YR BCOM YR1 LEVEL 300 _ LEVEL 400" &&
            ["300", "400"].includes(String(selectedLevel));
        const twoYearBcomYr1Folders = {
            "Accounting": "ACCOUNTING",
            "Finance": "FINANCE",
            "Human Resource Management": "HRM",
            "Management": "MANAGEMENT",
            "Marketing": "MARKETING",
            "Procurement and Supply Chain Management": "PSCM"
        };
        const twoYearBcomYr1Folder =
            isTwoYearBcomYr1 && twoYearBcomYr1Folders[specialisation]
                ? "/BUSINESS/2YR BCOM YR1 LEVEL 300 _ LEVEL 400/" +
                  twoYearBcomYr1Folders[specialisation] +
                  " LEVEL " + selectedLevel + "/"
                : null;

        const activeBusinessFolder =
            twoYearBcomYr1Folder ? twoYearBcomYr1Folder :
            twoYearDcoLevel100Folder ? twoYearDcoLevel100Root + twoYearDcoLevel100Folder :
            threeYearBcomLevel200Folder ? threeYearBcomLevel200Folder :
            threeYearBcomYr1Folder ? threeYearBcomYr1Folder :
            dcoYear3Folder ? dcoYear3Level200Root + dcoYear3Folder :
            dcoYear2Folder ? dcoYear2Level200Root + dcoYear2Folder :
            selectedLevel400Folder ? businessLevel400Root + selectedLevel400Folder :
            selectedLevel300Folder ? businessLevel300Root + selectedLevel300Folder :
            selectedLevel200Folder ? businessLevel200Root + selectedLevel200Folder :
            selectedFolder ? businessLevel100Root + selectedFolder : null;

        const relativePath = item.relativePath ||
            (activeBusinessFolder && item.filename
                ? activeBusinessFolder + item.filename
                : "");

        // A course may contain several unit PDFs within one Nextcloud folder.
        // Show one course card with separate direct-download controls per unit.
        let downloadControl = button;
        if (
            activeBusinessFolder &&
            Array.isArray(item.units) &&
            item.units.length > 0
        ) {
            const unitList = document.createElement("div");
            unitList.className = "course-unit-downloads";
            unitList.style.display = "grid";
            unitList.style.gridTemplateColumns =
                "repeat(auto-fit, minmax(150px, 1fr))";
            unitList.style.gap = "10px";
            unitList.style.marginTop = "14px";

            item.units.forEach(unit => {
                const unitButton = document.createElement("button");
                unitButton.type = "button";
                unitButton.className = "open-btn";
                unitButton.textContent = unit.label
                    ? `DOWNLOAD ${unit.label}`
                    : `DOWNLOAD UNIT ${unit.number}`;

                const unitPath =
                    activeBusinessFolder +
                    (item.unitFolder || "") +
                    unit.filename;

                unitButton.addEventListener("click", () => {
                    const params = new URLSearchParams({
                        semester: semesterApiKeys[selectedSemester],
                        path: unitPath
                    });
                    window.location.assign(
                        `${MODULE_API_BASE}/module/view?${params.toString()}`
                    );
                });
                unitList.appendChild(unitButton);
            });
            downloadControl = unitList;
        }

        if (downloadControl !== button) {
            // Multiple PDFs are grouped within a single course card.
        }
        // Level 400 course subfolders can contain multiple unit PDFs.
        // Resolve only indexed files in this exact specialisation folder,
        // and render each PDF as a button in the SAME course card.
        else if (item.folderPending && activeBusinessFolder && item.unitFolder) {
            const holder = document.createElement("div");
            holder.className = "course-unit-downloads";
            holder.style.display = "grid";
            holder.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
            holder.style.gap = "10px";
            holder.style.marginTop = "14px";
            const note = document.createElement("div");
            note.className = "course-unit-status";
            note.style.gridColumn = "1 / -1";
            note.textContent = "";
            button.textContent = "VIEW UNIT DOWNLOADS";
            button.disabled = false;
            holder.appendChild(button);
            holder.appendChild(note);
            downloadControl = holder;

            button.addEventListener("click", async () => {
                button.disabled = true;
                button.textContent = "FINDING COURSE FILES";
                note.textContent = "";
                try {
                    const folderPrefix = activeBusinessFolder + item.unitFolder;
                    const files = await findBusinessFolderPdfFiles(folderPrefix, item);
                    if (!files.length) {
                        note.textContent = "No PDFs were found in the index for this course folder. Please verify the Nextcloud index.";
                        return;
                    }
                    // Keep one course card and show ALL discovered unit PDFs here.
                    holder.replaceChildren();
                    files.forEach(file => {
                        const unitButton = document.createElement("button");
                        unitButton.type = "button";
                        unitButton.className = "open-btn";
                        const n = indexedBusinessUnitNumber(file.filename);
                        unitButton.textContent = n === null
                            ? `DOWNLOAD ${file.filename.replace(/\.pdf$/i, "")}`
                            : `DOWNLOAD UNIT ${n}`;
                        unitButton.title = file.filename;
                        unitButton.addEventListener("click", () => {
                            const params = new URLSearchParams({
                                semester: semesterApiKeys[selectedSemester],
                                path: file.relativePath
                            });
                            window.location.assign(
                                `${MODULE_API_BASE}/module/view?${params.toString()}`
                            );
                        });
                        holder.appendChild(unitButton);
                    });
                    // Never pretend the index is complete when only part
                    // of a confirmed six-unit folder was returned.
                    if (
                        item.title === "Project Management" ||
                        item.title === "Entrepreneurship (SBU 408D / ENT 302D)"
                    ) {
                        const numbers = new Set(
                            files.map(file => indexedBusinessUnitNumber(file.filename))
                                .filter(n => n !== null && n >= 1 && n <= 6)
                        );
                        if (numbers.size < 6) {
                            const missing = [1, 2, 3, 4, 5, 6]
                                .filter(n => !numbers.has(n));
                            note.textContent = `Units ${missing.join(", ")} could not be found in the Nextcloud search index. The other units remain available.`;
                            holder.appendChild(note);
                        }
                    }
                } catch (error) {
                    console.warn("Unable to discover Business course units:", error);
                    note.textContent = "Could not load the indexed PDFs. Please try again or check the module index.";
                } finally {
                    // On success the button is removed from holder.
                    button.disabled = false;
                    button.textContent = "VIEW UNIT DOWNLOADS";
                }
            });
        }
        // A folder whose path is not known should not show a false download.
        else if (item.folderPending) {
            button.textContent = "FOLDER CONTENTS PENDING";
            button.disabled = true;
        }
        // Unknown exact filename: select one unambiguous PDF from
        // the Nextcloud index, and only from the expected department folder.
        else if (activeBusinessFolder && item.lookupQuery) {
            button.textContent = "DOWNLOAD MODULE";
            button.disabled = false;
            button.addEventListener("click", async () => {
                button.disabled = true;
                button.textContent = "FINDING MODULE";
                try {
                    const query = new URLSearchParams({ q: item.lookupQuery });
                    const response = await fetch(
                        `${MODULE_API_BASE}/modules/search?${query.toString()}`,
                        { headers: { Accept: "application/json" } }
                    );
                    if (!response.ok) throw new Error("Catalogue search unavailable");
                    const found = await response.json();
                    const prefix = activeBusinessFolder.toLowerCase();
                    const matches = (Array.isArray(found.results) ? found.results : [])
                        .filter(record => {
                            const path = String(record.relative_path || "").replace(/\\/g, "/");
                            const name = String(record.filename || path.split("/").pop());
                            return path.toLowerCase().startsWith(prefix) &&
                                name.toLowerCase().startsWith(item.lookupPrefix.toLowerCase()) &&
                                name.toLowerCase().endsWith(".pdf");
                        });
                    if (matches.length !== 1) {
                        throw new Error(matches.length === 0
                            ? "No matching PDF found in this specialisation folder"
                            : "Multiple matching PDFs require review");
                    }
                    const params = new URLSearchParams({
                        semester: semesterApiKeys[selectedSemester],
                        path: matches[0].relative_path
                    });
                    window.location.assign(`${MODULE_API_BASE}/module/view?${params.toString()}`);
                } catch (error) {
                    console.warn("Could not resolve Level 300 PDF:", error);
                    showModuleMessage(
                        "Module filename needs verification",
                        "The PDF could not be matched uniquely in the permitted Nextcloud folder."
                    );
                } finally {
                    button.disabled = false;
                    button.textContent = "DOWNLOAD MODULE";
                }
            });
        }
        else if (
            relativePath &&
            semesterApiKeys[selectedSemester]
        ) {

            button.textContent = "DOWNLOAD MODULE";
            button.disabled = false;

            button.addEventListener("click", () => {

                const params = new URLSearchParams({
                    semester: semesterApiKeys[selectedSemester],
                    path: relativePath
                });

                const downloadUrl =
                    `${MODULE_API_BASE}/module/view?${params.toString()}`;

                window.location.assign(downloadUrl);

            });

        } else {

            button.disabled = true;
            button.textContent = "MODULE UNAVAILABLE";

        }

        card.append(title, downloadControl);
        list.appendChild(card);

    });

    showView("courseView");

    if (addHistory) {
        savePortalHistory("businessCourses");
    }
}





function showBusinessSpecialisations(level, addHistory = true) {

    selectedLevel = String(level);
    selectedSpecialisation = null;

    const heading =
        document.getElementById("specialisationHeading");

    const subheading =
        document.getElementById("specialisationSubheading");

    const list =
        document.getElementById("specialisationList");

    if (!list) return;

    heading.textContent =
        `${selectedProgramme} · Level ${selectedLevel}`;

    const isDcoOptionProgramme =
        selectedProgramme === "DCO YR2 LEVEL 200" ||
        selectedProgramme === "3YR DCO YR3 LEVEL 200" ||
        selectedProgramme === "2YR DCO LEVEL 100";
    subheading.textContent = isDcoOptionProgramme
        ? "Select Accounting Option or Management Option to view its courses."
        : "Select your specialisation to view its courses.";

    list.innerHTML = "";

    const availableOptions = isDcoOptionProgramme
        ? dcoYear2Options
        : selectedProgramme === "3YR BCOM YR1 LEVEL 200"
            ? threeYearBcomLevel200Options
            : businessSpecialisations;
    availableOptions.forEach(name => {

    const courses =
        businessCourseCatalogue[selectedSemester]
            ?.[selectedProgramme]
            ?.[selectedLevel]
            ?.[name] || [];

    const card = document.createElement("button");
    card.type = "button";
    card.className = "programme-card";

    const title = document.createElement("h3");
    title.textContent = name;

    const action = document.createElement("span");

    if (courses.length > 0) {
        action.textContent = "View Courses →";

        card.addEventListener("click", () => {
            showBusinessCourseCards(name);
        });

    } else {
        action.textContent = "Courses being added";
        card.disabled = true;
    }

    card.append(title, action);
    list.appendChild(card);

});


    showView("specialisationView");

   if (addHistory) {
    savePortalHistory("specialisations");
}
}

function backToProgrammeLevels() {

    if (selectedProgramme) {
        showProgrammeLevels(selectedProgramme);
    } else {
        goHome();
    }

}


function showProgrammeLevels(
    programme,
    addHistory = true
) {

    if (!selectedSemester || !isPublishedDepartment(selectedSemester, selectedDepartment)) return;

    const semesterData =
        undergraduateData[selectedSemester] || {};

   
const availableLevels =
    selectedDepartment === "Business"
        ? (businessProgrammeLevels[programme] || [])
        : selectedDepartment === "Education" && selectedSemester === "firstSemester"
            ? (educationProgrammeLevels[programme] || [])
            : selectedDepartment === "Mathematics and Science" && selectedSemester === "firstSemester"
                ? (mathsScienceProgrammeLevels[programme] || [])
            : ["100", "200", "300", "400"].filter(
                level => Array.isArray(
                    semesterData[level]?.[programme]
                )
            );


    if (!availableLevels.length) return;

    selectedProgramme = programme;
    selectedLevel = null;

    const heading =
        document.getElementById("levelHeading");

    const subheading =
        document.getElementById("levelSubheading");

    if (heading) {
        heading.textContent = programme;
    }

    if (subheading) {
        subheading.textContent =
            `${semesterLabels[selectedSemester]} · Select your level`;
    }

    document.querySelectorAll(
        "#levelView .level-card"
    ).forEach(button => {

        const level =
            button.querySelector(".level-number")
                ?.textContent.trim();

       button.style.display =
    availableLevels.includes(level) ? "" : "none";
        
       const action =
            button.querySelector(".level-action");

        if (action) {
            action.textContent = "View Courses →";
        }

        button.onclick = () => {

            if (!availableLevels.includes(level)) {
                return;
            }

           selectedLevel = level;

if (
    selectedDepartment === "Business" &&
    (programme === "4YR BCOM 100,200,300,400" ||
     programme === "DCO YR2 LEVEL 200" ||
     programme === "3YR DCO YR3 LEVEL 200" ||
     programme === "3YR BCOM YR1 LEVEL 300 _ LEVEL 400" ||
     programme === "3YR BCOM YR1 LEVEL 200" ||
     programme === "2YR DCO LEVEL 100" ||
     programme === "2YR BCOM YR1 LEVEL 300 _ LEVEL 400")
) {
    showBusinessSpecialisations(level);
} else if (
    selectedDepartment === "Mathematics and Science" &&
    selectedSemester === "firstSemester" &&
    mathsScienceCourseCatalogue[programme]?.[String(level)]
) {
    const entry=mathsScienceCourseCatalogue[programme][String(level)];
    if(Array.isArray(entry))showMathsScienceCourseCards();
    else showMathsScienceOptions(level);
} else if (
    selectedDepartment === "Education" &&
    selectedSemester === "firstSemester" &&
    educationCourseCatalogue[programme]?.[String(level)]
) {
    showEducationCourseCards(programme);
} else {
    showCourses(programme);
}

        };

    });

    showView("levelView");

    if (addHistory) {
        savePortalHistory("levels");
    }

}


function showLevels(
    semesterKey,
    addHistory = true
) {
    if (!legacyUndergraduateCataloguePublished) {
        showDepartments(semesterKey, false);
        return;
    }
    if (
        !undergraduateData[semesterKey]
    ) {
        return;
    }


    navigationType =
        "undergraduate";


    selectedSemester =
        semesterKey;


    selectedLevel =
        null;


    selectedProgramme =
        null;


    const heading =
        document.getElementById(
            "levelHeading"
        );


    const subheading =
        document.getElementById(
            "levelSubheading"
        );


    if (heading) {
        heading.textContent =
            semesterLabels[semesterKey];
    }


    if (subheading) {
        subheading.textContent =
            "Select your level";
    }


      showView("levelView");

    if (addHistory) {
        savePortalHistory("levels");
    }



}


function showProgrammes(
    level,
    addHistory = true
) {

    if (!legacyUndergraduateCataloguePublished) return;
    if (
        !selectedSemester ||
        !undergraduateData[
            selectedSemester
        ]?.[level]
    ) {
        return;
    }


    navigationType =
        "undergraduate";


    selectedLevel =
        level;


    selectedProgramme =
        null;


    const programmes =
        undergraduateData[
            selectedSemester
        ][level];


    const heading =
        document.getElementById(
            "programmeHeading"
        );


    if (heading) {

        heading.textContent =
            `${semesterLabels[selectedSemester]} · Level ${level}`;

    }


    const list =
        document.getElementById(
            "programmeList"
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    Object.keys(programmes)
        .sort(
            (a, b) =>
                a.localeCompare(b)
        )
        .forEach(programme => {

            const courses =
                programmes[programme];


            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "programme-card";


            card.innerHTML = `
                <h3>
                    ${escapeHtml(programme)}
                </h3>

                <p>
                    ${courses.length}
                    ${
                        courses.length === 1
                            ? "course"
                            : "courses"
                    }
                </p>

                <span>
                    View Courses →
                </span>
            `;


            card.addEventListener(
                "click",
                () => {
                    showCourses(programme);
                }
            );


            list.appendChild(card);

        });


       showView("programmeView");

    if (addHistory) {
        savePortalHistory("programmes");
    }

}



/* =========================================================
   COURSE LIST
   ========================================================= */


function showCourses(
    programme,
    addHistory = true
) {

    if (!legacyUndergraduateCataloguePublished) return;
    navigationType =
        "undergraduate";


    selectedProgramme =
        programme;


    const courses =
        undergraduateData[
            selectedSemester
        ]?.[
            selectedLevel
        ]?.[
            programme
        ];


    if (!courses) {
        return;
    }


    const heading =
        document.getElementById(
            "courseHeading"
        );


    const subheading =
        document.getElementById(
            "courseSubheading"
        );


    if (heading) {
        heading.textContent =
            programme;
    }


    if (subheading) {

        subheading.textContent =
            `${
                semesterLabels[
                    selectedSemester
                ]
            } · Level ${selectedLevel}`;

    }


    const list =
        document.getElementById(
            "courseList"
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    courses.forEach(courseItem => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "course-card";


        const code =
            document.createElement(
                "div"
            );


        code.className =
            "course-code";


        code.textContent =
            courseItem.code;


        const title =
            document.createElement(
                "div"
            );


        title.className =
            "course-title";


        title.textContent =
            courseItem.title;


        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "open-btn";


        button.textContent =
            "OPEN MODULES";


        button.addEventListener(
            "click",
            event => {

                openUndergraduateModule(
                    event,
                    {
                        ...courseItem,

                        semesterKey:
                            selectedSemester,

                        level:
                            selectedLevel,

                        programme:
                            selectedProgramme
                    }
                );

            }
        );


        card.append(
            code,
            title,
            button
        );


        list.appendChild(card);

    });


       showView("courseView");

    if (addHistory) {
        savePortalHistory("courses");
    }

}



/* =========================================================
   SWITCH
   ========================================================= */


function loadSwitchProgrammes() {

    const list =
        document.getElementById(
            "switchProgrammeList"
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    Object.keys(switchData)
        .forEach(programme => {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "switch-card";


            card.innerHTML = `
                <span class="switch-name">
                    ${escapeHtml(programme)}
                </span>

                <span class="semester-action">
                    View Modules →
                </span>
            `;


            card.addEventListener(
                "click",
                () => {
                    showSwitchCourses(
                        programme
                    );
                }
            );


            list.appendChild(card);

        });

}


function showSwitchCourses(
    programme,
    addHistory = true
) {
    navigationType =
        "switch";


    selectedProgramme =
        programme;


    const courses =
        switchData[programme] || [];


    const heading =
        document.getElementById(
            "courseHeading"
        );


    const subheading =
        document.getElementById(
            "courseSubheading"
        );


    if (heading) {
        heading.textContent =
            programme;
    }


    if (subheading) {
        subheading.textContent =
            "SWITCH Modules";
    }


    const list =
        document.getElementById(
            "courseList"
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    courses.forEach(courseItem => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "course-card";


        const code =
            document.createElement(
                "div"
            );


        code.className =
            "course-code";


        code.textContent =
            courseItem.code;


        const title =
            document.createElement(
                "div"
            );


        title.className =
            "course-title";


        title.textContent =
            courseItem.title;


        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "open-btn";


        button.textContent =
            "OPEN MODULES";


        button.addEventListener(
            "click",
            event => {
                openDirectModule(
                    event,
                    courseItem.link
                );
            }
        );


        card.append(
            code,
            title,
            button
        );


        list.appendChild(card);

    });


        showView("courseView");

    if (addHistory) {
        savePortalHistory("courses");
    }



}
/* =========================================================
   DIRECT LINK HANDLING
   ========================================================= */


function openDirectModule(
    event,
    link
) {

    event?.stopPropagation();


    if (
        isPlaceholderLink(link)
    ) {

        showModuleMessage(
            "This module is not available yet.",
            "The module link has not been added yet."
        );

        return;
    }


    window.open(
        link,
        "_blank",
        "noopener,noreferrer"
    );

}



/* =========================================================
   API LOADING STATE
   ========================================================= */


function setModuleButtonLoading(
    button,
    loading
) {

    if (!button) {
        return;
    }


    if (loading) {

        button.dataset.originalText =
            button.textContent;


        button.disabled = true;


        button.classList.add(
            "loading-module"
        );


        button.textContent =
            "FINDING MODULE";

    }
    else {

        button.disabled = false;


        button.classList.remove(
            "loading-module"
        );


        button.textContent =
            button.dataset.originalText ||
            "OPEN MODULES";

    }

}



/* =========================================================
   UNDERGRADUATE API SEARCH
   ========================================================= */


async function openUndergraduateModule(
    event,
    courseInfo
) {

    event?.stopPropagation();


    const button =
        event?.currentTarget;


    const semester =
        semesterApiKeys[
            courseInfo.semesterKey
        ];


    if (!semester) {

        showModuleMessage(
            "Unable to identify the semester.",
            "Please return to the course list and try again."
        );

        return;
    }


    /*
    Open a temporary tab immediately while the
    click is still a direct browser user action.

    This prevents browsers from blocking the PDF
    after the asynchronous API request finishes.
    */

   // Downloads no longer need a temporary tab.
let moduleWindow = null;


    setModuleButtonLoading(
        button,
        true
    );


    const params =
        new URLSearchParams();


    params.set(
        "semester",
        semester
    );


    params.set(
        "code",
        courseInfo.code || ""
    );


    params.set(
        "title",
        courseInfo.title || ""
    );


    params.set(
        "programme",
        courseInfo.programme || ""
    );


    params.set(
        "level",
        courseInfo.level || ""
    );


    try {

        const response =
            await fetch(
                `${MODULE_API_BASE}/module/search?${params.toString()}`,
                {
                    method: "GET",
                    headers: {
                        "Accept":
                            "application/json"
                    }
                }
            );


        let data = {};


        try {

            data =
                await response.json();

        }
        catch (jsonError) {

            data = {};

        }


        if (
            !response.ok ||
            !data.found
        ) {

            closeTemporaryModuleWindow(
                moduleWindow
            );


            if (
                semester === "second"
            ) {

                showModuleMessage(
                    "Second Semester modules are not yet available.",
                    "The Second Semester module library will become available when its Nextcloud collection is added."
                );

            }
            else {

                showModuleMessage(
                    "This module is not available yet.",
                    `${courseInfo.code || ""} ${courseInfo.title || ""}`.trim()
                );

            }


            return;

        }



        /* =========================
           SINGLE PDF
           ========================= */


        if (
            data.type === "single" &&
            data.file &&
            data.file.url
        ) {

            openResolvedModuleUrl(
                data.file.url,
                moduleWindow,
                courseInfo,
                data.file
            );


            return;

        }



        /* =========================
           MULTIPLE UNIT FILES
           ========================= */


        if (
            data.type === "multiple" &&
            Array.isArray(data.files) &&
            data.files.length
        ) {

            closeTemporaryModuleWindow(
                moduleWindow
            );


            showModuleFiles(
                courseInfo,
                data.files
            );


            return;

        }



        closeTemporaryModuleWindow(
            moduleWindow
        );


        showModuleMessage(
            "No downloadable module was returned.",
            "Please try again later."
        );

    }
    catch (error) {

        closeTemporaryModuleWindow(
            moduleWindow
        );


        showModuleMessage(
            "The module service is temporarily unavailable.",
            "Please check your internet connection and try again."
        );


        console.error(
            "Module API request failed:",
            error
        );

    }
    finally {

        setModuleButtonLoading(
            button,
            false
        );

    }

}



/* =========================================================
   OPEN RESOLVED SINGLE MODULE
   ========================================================= */


function openResolvedModuleUrl(
    url,
    moduleWindow,
    courseInfo,
    file
) {

    if (!url) {

        closeTemporaryModuleWindow(
            moduleWindow
        );


        showModuleMessage(
            "This module could not be opened.",
            "No download address was returned."
        );


        return;

    }


    if (
        moduleWindow &&
        !moduleWindow.closed
    ) {

        try {

            moduleWindow.location.replace(
                url
            );


            return;

        }
        catch (error) {

            closeTemporaryModuleWindow(
                moduleWindow
            );

        }

    }


    /*
    Popup blockers can occasionally prevent the
    temporary tab.

    In that case, give the student a normal
    clickable result instead of failing silently.
    */

   window.location.assign(url);

}



/* =========================================================
   CLOSE TEMPORARY TAB
   ========================================================= */


function closeTemporaryModuleWindow(
    moduleWindow
) {

    if (
        moduleWindow &&
        !moduleWindow.closed
    ) {

        try {
            moduleWindow.close();
        }
        catch (error) {
            // No action needed.
        }

    }

}



/* =========================================================
   SINGLE PDF FALLBACK
   ========================================================= */


function showSingleModuleFallback(
    courseInfo,
    file
) {

    const heading =
        document.getElementById(
            "moduleResultsHeading"
        );


    const subheading =
        document.getElementById(
            "moduleResultsSubheading"
        );


    const list =
        document.getElementById(
            "moduleFilesList"
        );


    if (!list) {
        return;
    }


    if (heading) {

        heading.textContent =
            `${courseInfo.code} · ${courseInfo.title}`;

    }


    if (subheading) {

        subheading.textContent =
            `${
                semesterLabels[
                    courseInfo.semesterKey
                ] || ""
            } · Level ${
                courseInfo.level || ""
            } · ${
                courseInfo.programme || ""
            }`;

    }


    list.innerHTML = "";


    const card =
        createModuleFileCard(
            {
                ...file,
                unit: null
            },
            0
        );


    list.appendChild(card);


    showView(
        "moduleResultsView"
    );

}



/* =========================================================
   MULTIPLE MODULE / UNIT RESULTS
   ========================================================= */


function showModuleFiles(
    courseInfo,
    files
) {

    const heading =
        document.getElementById(
            "moduleResultsHeading"
        );


    const subheading =
        document.getElementById(
            "moduleResultsSubheading"
        );


    const list =
        document.getElementById(
            "moduleFilesList"
        );


    if (!list) {
        return;
    }


    if (heading) {

        heading.textContent =
            `${courseInfo.code} · ${courseInfo.title}`;

    }


    if (subheading) {

        subheading.textContent =
            `${
                semesterLabels[
                    courseInfo.semesterKey
                ] || ""
            } · Level ${
                courseInfo.level || ""
            } · ${
                courseInfo.programme || ""
            }`;

    }


    list.innerHTML = "";


    files
        .slice()
        .sort(
            (a, b) => {

                const aUnit =
                    Number(a.unit) || 9999;


                const bUnit =
                    Number(b.unit) || 9999;


                if (
                    aUnit !== bUnit
                ) {

                    return (
                        aUnit - bUnit
                    );

                }


                return String(
                    a.filename || ""
                ).localeCompare(
                    String(
                        b.filename || ""
                    )
                );

            }
        )
        .forEach(
            (
                file,
                index
            ) => {

                list.appendChild(
                    createModuleFileCard(
                        file,
                        index
                    )
                );

            }
        );


    showView(
        "moduleResultsView"
    );

}



/* =========================================================
   MODULE FILE CARD
   ========================================================= */


function createModuleFileCard(
    file,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "module-file-card";


    const badge =
        document.createElement(
            "span"
        );


    badge.className =
        "module-file-number";


    if (
        file.unit !== undefined &&
        file.unit !== null &&
        file.unit !== ""
    ) {

        badge.textContent =
            `UNIT ${file.unit}`;

    }
    else {

        badge.textContent =
            index === 0
                ? "FULL MODULE"
                : `MODULE ${index + 1}`;

    }


    const title =
        document.createElement(
            "div"
        );


    title.className =
        "module-file-title";


    title.textContent =
        file.filename ||
        `Module ${index + 1}`;


    const button =
        document.createElement(
            "button"
        );


    button.type =
        "button";


    button.className =
        "open-btn";


   button.textContent =
    "DOWNLOAD MODULE";


    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            if (!file.url) {

                showModuleMessage(
                    "This module cannot be opened.",
                    "No download link was returned."
                );

                return;

            }


           window.location.assign(file.url);
            

        }
    );


    card.append(
        badge,
        title,
        button
    );


    return card;

}



/* =========================================================
   MODULE MESSAGE VIEW
   ========================================================= */


function showModuleMessage(
    title,
    message
) {

    const heading =
        document.getElementById(
            "moduleResultsHeading"
        );


    const subheading =
        document.getElementById(
            "moduleResultsSubheading"
        );


    const list =
        document.getElementById(
            "moduleFilesList"
        );


    if (!list) {

        alert(
            `${title}\n\n${message}`
        );

        return;
    }


    if (heading) {
        heading.textContent =
            title;
    }


    if (subheading) {
        subheading.textContent =
            message;
    }


    list.innerHTML = "";


    const box =
        document.createElement(
            "div"
        );


    box.className =
        "module-message module-message-error";


    const strong =
        document.createElement(
            "strong"
        );


    strong.textContent =
        title;


    const text =
        document.createElement(
            "span"
        );


    text.textContent =
        message;


    box.append(
        strong,
        text
    );


    list.appendChild(box);


    showView(
        "moduleResultsView"
    );

}



/* =========================================================
   SEARCH
   ========================================================= */


function searchAllCourses(
    query
) {

    const normalizedQuery =
        String(query || "")
            .trim()
            .toLowerCase();


    if (!normalizedQuery) {
        return [];
    }


    const results = [];



    /* Search ONLY the reviewed and published First Semester catalogues. */
    Object.entries(educationCourseCatalogue).forEach(([programme, levels]) => {
        Object.entries(levels).forEach(([level, courses]) => {
            courses.forEach(item => {
                const searchable = [
                    "First Semester", "Education", programme, "Level " + level,
                    item.code || "", item.title || "", item.filename || ""
                ].join(" ").toLowerCase();
                if (searchable.includes(normalizedQuery)) {
                    results.push({
                        type: "Published", department: "Education",
                        semesterKey: "firstSemester", semester: "First Semester",
                        programme, level, code: item.code || "", title: item.title
                    });
                }
            });
        });
    });
    Object.entries(businessCourseCatalogue.firstSemester || {}).forEach(([programme, levels]) => {
        Object.entries(levels).forEach(([level, options]) => {
            Object.entries(options).forEach(([specialisation, courses]) => {
                courses.forEach(item => {
                    const searchable = [
                        "First Semester", "Business", programme, "Level " + level,
                        specialisation, item.code || "", item.title || "", item.filename || ""
                    ].join(" ").toLowerCase();
                    if (searchable.includes(normalizedQuery)) {
                        results.push({
                            type: "Published", department: "Business",
                            semesterKey: "firstSemester", semester: "First Semester",
                            programme, level, specialisation,
                            code: item.code || "", title: item.title
                        });
                    }
                });
            });
        });
    });

    /* =========================
       SWITCH
       ========================= */


    Object.entries(
        switchData
    ).forEach(
        (
            [
                programme,
                courses
            ]
        ) => {


            courses.forEach(
                courseItem => {


                    const searchable =
                        [
                            courseItem.code,
                            courseItem.title,
                            programme,
                            "switch"
                        ]
                            .join(" ")
                            .toLowerCase();


                    if (
                        searchable.includes(
                            normalizedQuery
                        )
                    ) {

                        results.push({
                            type:
                                "SWITCH",

                            programme,

                            code:
                                courseItem.code,

                            title:
                                courseItem.title,

                            link:
                                courseItem.link
                        });

                    }

                }
            );

        }
    );


    return results;

}



/* =========================================================
   SEARCH UI
   ========================================================= */


let cloudSearchRequestNumber = 0;


/* ---------------------------------------------------------
   SEARCH CLOUD MODULE INDEX
   --------------------------------------------------------- */


async function searchCloudModules(query) {

    const trimmed =
        String(query || "").trim();


    if (trimmed.length < 2) {
        return [];
    }


    const params =
        new URLSearchParams();


    params.set(
        "q",
        trimmed
    );


    try {

        const response =
            await fetch(
                `${MODULE_API_BASE}/modules/search?${params.toString()}`,
                {
                    method: "GET",
                    headers: {
                        "Accept":
                            "application/json"
                    }
                }
            );


        if (!response.ok) {
            return [];
        }


        const data =
            await response.json();


        if (
            !data.found ||
            !Array.isArray(data.results)
        ) {
            return [];
        }


        /*
        The same PDF may exist in several programme
        folders in Nextcloud.

        For student search, show only one copy of an
        identical filename.
        */

        const uniqueFiles =
            new Map();


        data.results.forEach(
            file => {

                const key =
                    String(
                        file.filename || ""
                    )
                        .trim()
                        .toLowerCase();


                if (
                    key &&
                    !uniqueFiles.has(key)
                ) {

                    uniqueFiles.set(
                        key,
                        {
                            type:
                                "Cloud",

                            filename:
                                file.filename,

                            title:
                                cleanCloudModuleTitle(
                                    file.filename
                                ),

                            semester:
                                file.semester,

                            semesterName:
                                file.semester_name,

                            folder:
                                file.folder,

                            relativePath:
                                file.relative_path,

                            url:
                                file.url
                        }
                    );

                }

            }
        );


        return Array.from(
            uniqueFiles.values()
        );

    }
    catch (error) {

        console.error(
            "Cloud module search failed:",
            error
        );


        /*
        A cloud-search failure must not prevent
        the normal frontend catalogue search
        from continuing to work.
        */

        return [];

    }

}



/* ---------------------------------------------------------
   CLEAN CLOUD PDF TITLE
   --------------------------------------------------------- */


function cleanCloudModuleTitle(
    filename
) {

    return String(filename || "")
        .replace(/\.pdf$/i, "")
        .replace(/_/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}



/* ---------------------------------------------------------
   NORMALISE TITLE FOR DUPLICATE CHECKING
   --------------------------------------------------------- */


function normalizeSearchTitle(
    value
) {

    return String(value || "")
        .toLowerCase()
        .replace(/\.pdf$/i, "")
        .replace(/[_-]+/g, " ")
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}

/* ---------------------------------------------------------
   EXTRACT UNIT / SESSION NUMBER
   --------------------------------------------------------- */


function extractCloudUnitInfo(
    filename
) {

    const title =
        cleanCloudModuleTitle(
            filename
        );


    const match =
        title.match(
            /^(unit|session|chapter|part)\s*(\d+)\s*[-:._]?\s*(.+)$/i
        );


    if (!match) {

        return {
            isUnit: false,
            type: null,
            number: null,
            baseTitle: title
        };

    }


    return {
        isUnit: true,
        type: match[1],
        number: Number(match[2]),
        baseTitle: match[3].trim()
    };

}



/* ---------------------------------------------------------
   GROUP RELATED CLOUD MODULE FILES
   --------------------------------------------------------- */


function groupCloudModuleResults(
    cloudResults
) {

    const groups =
        new Map();


    const singles =
        [];


    cloudResults.forEach(
        item => {

            const unitInfo =
                extractCloudUnitInfo(
                    item.filename
                );


            if (!unitInfo.isUnit) {

                singles.push(
                    item
                );

                return;
            }


            const groupKey = [
                String(
                    item.semester || ""
                ).toLowerCase(),

                normalizeSearchTitle(
                    unitInfo.baseTitle
                ),

                String(
                    item.folder || ""
                )
                    .toLowerCase()
                    .replace(
                        /\/[^/]+$/,
                        ""
                    )
            ].join("|");


            if (!groups.has(groupKey)) {

                groups.set(
                    groupKey,
                    {
                        type:
                            "CloudGroup",

                        title:
                            unitInfo.baseTitle,

                        semester:
                            item.semester,

                        semesterName:
                            item.semesterName,

                        folder:
                            item.folder,

                        files:
                            []
                    }
                );

            }


            groups.get(groupKey)
                .files
                .push({
                    ...item,
                    unitType:
                        unitInfo.type,

                    unitNumber:
                        unitInfo.number
                });

        }
    );


    const groupedResults =
        [];


    groups.forEach(
        group => {

            group.files.sort(
                (a, b) =>
                    a.unitNumber -
                    b.unitNumber
            );


            /*
            Only convert to a grouped card if at
            least two related files exist.
            */

            if (
                group.files.length >= 2
            ) {

                groupedResults.push(
                    group
                );

            }
            else {

                singles.push(
                    group.files[0]
                );

            }

        }
    );


    return [
        ...singles,
        ...groupedResults
    ];

}



/* ---------------------------------------------------------
   CREATE GROUPED CLOUD MODULE CARD
   --------------------------------------------------------- */


function createCloudGroupCard(
    item
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "search-result-card cloud-group-card";


    const code =
        document.createElement(
            "div"
        );


    code.className =
        "search-result-code";


    code.textContent =
        "CLOUD MODULE";


    const title =
        document.createElement(
            "div"
        );


    title.className =
        "search-result-title";


    title.textContent =
        item.title;


    const meta =
        document.createElement(
            "div"
        );


    meta.className =
        "search-result-meta";


    meta.textContent =
        `${item.files.length} files available · ${
            item.semesterName ||
            "Module Library"
        } · ${
            getCloudFolderLabel(
                item.folder
            )
        }`;


    const fileList =
        document.createElement(
            "div"
        );


    fileList.className =
        "cloud-unit-list";


    item.files.forEach(
        file => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "cloud-unit-row";


            const label =
                document.createElement(
                    "span"
                );


            label.className =
                "cloud-unit-label";


            const unitType =
                String(
                    file.unitType || "Unit"
                );


            label.textContent =
                `${unitType.charAt(0).toUpperCase()}${unitType.slice(1)} ${file.unitNumber}`;


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "open-btn cloud-unit-button";


           button.textContent = "DOWNLOAD";


            button.addEventListener(
                "click",
                event => {

                    openCloudModule(
                        event,
                        file.url
                    );

                }
            );


            row.append(
                label,
                button
            );


            fileList.appendChild(
                row
            );

        }
    );


    card.append(
        code,
        title,
        meta,
        fileList
    );


    return card;

}

/* ---------------------------------------------------------
   REMOVE CLOUD RESULTS ALREADY REPRESENTED
   BY FRONTEND COURSE RESULTS
   --------------------------------------------------------- */


function removeFrontendCloudDuplicates(
    frontendResults,
    cloudResults
) {

    const frontendTitles =
        new Set();


    frontendResults.forEach(
        item => {

            frontendTitles.add(
                normalizeSearchTitle(
                    item.title
                )
            );

        }
    );


    return cloudResults.filter(
        item => {

            const cloudTitle =
                normalizeSearchTitle(
                    item.title
                );


            return !frontendTitles.has(
                cloudTitle
            );

        }
    );

}



/* ---------------------------------------------------------
   SHORTEN CLOUD FOLDER DISPLAY
   --------------------------------------------------------- */


function getCloudFolderLabel(
    folder
) {

    const parts =
        String(folder || "")
            .split("/")
            .filter(Boolean);


    if (!parts.length) {
        return "Cloud module library";
    }


    /*
    Showing the entire Nextcloud path would make
    cards unnecessarily long.

    Keep only the final two useful folder names.
    */

    return parts
        .slice(-2)
        .join(" · ");

}



/* ---------------------------------------------------------
   OPEN CLOUD PDF
   --------------------------------------------------------- */


function openCloudModule(event, url) {

    event?.stopPropagation();

    if (!url) {
        showModuleMessage(
            "Unable to download this module.",
            "The PDF download link is unavailable."
        );
        return;
    }

    // Download without opening another browser tab.
    window.location.assign(url);

}






/* ---------------------------------------------------------
   RENDER COMBINED SEARCH
   --------------------------------------------------------- */


async function renderSearchResults(
    query
) {

    const resultsBox =
        document.getElementById(
            "searchResults"
        );


    const resultsList =
        document.getElementById(
            "searchResultsList"
        );


    const count =
        document.getElementById(
            "searchResultCount"
        );


    const noResults =
        document.getElementById(
            "noSearchResults"
        );


    if (
        !resultsBox ||
        !resultsList ||
        !count ||
        !noResults
    ) {
        return;
    }


    const trimmed =
        String(query || "").trim();


    /*
    Incrementing this number lets us ignore an
    older API response if the student continues
    typing before that response finishes.
    */

    const requestNumber =
        ++cloudSearchRequestNumber;


    if (!trimmed) {

        resultsBox.hidden =
            true;


        resultsList.innerHTML =
            "";


        noResults.hidden =
            true;


        count.textContent =
            "";


        return;
    }


    resultsBox.hidden =
        false;


    if (trimmed.length < 2) {

        resultsList.innerHTML =
            "";


        noResults.hidden =
            true;


        count.textContent =
            "Type at least 2 characters to search.";


        return;
    }


    /*
    Frontend results are immediate.
    */

    const frontendResults =
        searchAllCourses(
            trimmed
        );


    resultsList.innerHTML =
        "";


    noResults.hidden =
        true;


    count.textContent =
        "Searching published Business and Education modules…";


    /*
    Search the Nextcloud index through our API.
    */

    // Do not expose the unreviewed Nextcloud index via public search.
    let cloudResults = [];


    /*
    Ignore this response if a newer search has
    already started.
    */

    if (
        requestNumber !==
        cloudSearchRequestNumber
    ) {
        return;
    }


    cloudResults =
        removeFrontendCloudDuplicates(
            frontendResults,
            cloudResults
        );
   
   cloudResults =
    groupCloudModuleResults(
        cloudResults
    );


    const combinedResults = [
        ...frontendResults,
        ...cloudResults
    ];


    resultsList.innerHTML =
        "";


    if (!combinedResults.length) {

        count.textContent =
            "0 results found";


        noResults.hidden =
            false;


        return;
    }


    noResults.hidden =
        true;


    count.textContent =
        `${combinedResults.length} ${
            combinedResults.length === 1
                ? "result"
                : "results"
        } found`;



    combinedResults.forEach(
        item => {
           
           if (
    item.type ===
    "CloudGroup"
) {

    resultsList.appendChild(
        createCloudGroupCard(
            item
        )
    );

    return;
}


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "search-result-card";



            const code =
                document.createElement(
                    "div"
                );


            code.className =
                "search-result-code";



            const title =
                document.createElement(
                    "div"
                );


            title.className =
                "search-result-title";



            const meta =
                document.createElement(
                    "div"
                );


            meta.className =
                "search-result-meta";



            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "open-btn";



            /* =========================
               CLOUD PDF RESULT
               ========================= */


            if (
                item.type ===
                "Cloud"
            ) {

                code.textContent =
                    "CLOUD MODULE";


                title.textContent =
                    item.title;


                meta.textContent =
                    `${
                        item.semesterName ||
                        "Module Library"
                    } · ${
                        getCloudFolderLabel(
                            item.folder
                        )
                    }`;


              button.textContent = "DOWNLOAD PDF";


                button.addEventListener(
                    "click",
                    event => {

                        openCloudModule(
                            event,
                            item.url
                        );

                    }
                );

            }



            /* =========================
               UNDERGRADUATE RESULT
               ========================= */


            else if (item.type === "Published") {
                code.textContent = item.code || "COURSE MODULE";
                title.textContent = item.title;
                meta.textContent = item.semester + " · " + item.department +
                    " · " + item.programme + " · Level " + item.level +
                    (item.specialisation ? " · " + item.specialisation : "");
                button.textContent = "VIEW COURSE";
                button.addEventListener("click", () => {
                    navigationType = "undergraduate";
                    selectedSemester = item.semesterKey;
                    selectedDepartment = item.department;
                    showDepartmentProgrammes(item.department, false);
                    showProgrammeLevels(item.programme, false);
                    selectedLevel = String(item.level);
                    if (item.department === "Business") {
                        showBusinessSpecialisations(item.level, false);
                        showBusinessCourseCards(item.specialisation);
                    } else {
                        showEducationCourseCards(item.programme);
                    }
                    const searchInput = document.getElementById("courseSearch");
                    if (searchInput) searchInput.value = "";
                    const searchBox = document.getElementById("searchResults");
                    if (searchBox) searchBox.hidden = true;
                });
            }

            else if (
                item.type ===
                "Undergraduate"
            ) {

                code.textContent =
                    item.code;


                title.textContent =
                    item.title;


                meta.textContent =
                    `${item.semester} · Level ${item.level} · ${item.programme}`;


                button.textContent =
                    "OPEN MODULES";


                button.addEventListener(
                    "click",
                    event => {


                        navigationType =
                            "undergraduate";


                        selectedSemester =
                            item.semesterKey;


                        selectedLevel =
                            item.level;


                        selectedProgramme =
                            item.programme;


                        openUndergraduateModule(
                            event,
                            item
                        );

                    }
                );

            }



            /* =========================
               SWITCH RESULT
               ========================= */


            else {

                code.textContent =
                    item.code;


                title.textContent =
                    item.title;


                meta.textContent =
                    `SWITCH · ${item.programme}`;


                button.textContent =
                    "OPEN MODULES";


                button.addEventListener(
                    "click",
                    event => {


                        navigationType =
                            "switch";


                        selectedProgramme =
                            item.programme;


                        openDirectModule(
                            event,
                            item.link
                        );

                    }
                );

            }



            card.append(
                code,
                title,
                meta,
                button
            );


            resultsList.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   STARTUP
   ========================================================= */


function initialisePortal() {

    loadSwitchProgrammes();

    const upcomingSemester = document.querySelector(
        '#homeView .semester-card[onclick*="secondSemester"]'
    );
    if (upcomingSemester) {
        upcomingSemester.disabled = true;
        upcomingSemester.style.opacity = ".65";
        upcomingSemester.style.cursor = "not-allowed";
        upcomingSemester.setAttribute("aria-label", "Second Semester — coming soon");
        const action = upcomingSemester.querySelector(".semester-action");
        if (action) action.textContent = "Coming Soon · Not Yet Published";
    }

    const searchInput =
        document.getElementById(
            "courseSearch"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            event => {

                renderSearchResults(
                    event.target.value
                );

            }
        );

    }


       showView(
        "homeView"
    );


    const bookmarkedState=readPortalHashState();
    if(bookmarkedState){
        restorePortalHistory(bookmarkedState);
        replacePortalHistory(bookmarkedState.view);
    }else{
        replacePortalHistory("home");
    }

}


if (
    typeof document !==
    "undefined"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialisePortal
    );

}



/* =========================================================
   NODE / TEST EXPORTS
   ========================================================= */


if (
    typeof module !==
    "undefined" &&
    module.exports
) {

    module.exports = {

        undergraduateData,

        switchData,

        semesterLabels,

        semesterApiKeys,

        searchAllCourses,

        isPlaceholderLink

    };

}
