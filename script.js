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


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

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

        const title = document.createElement("h3");
        title.textContent = department;

        const action = document.createElement("span");
        action.textContent = "View Programmes →";

        card.append(title, action);

        card.addEventListener("click", () => {
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

        const activeBusinessFolder =
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
        else if (selectedLevel300Folder && item.lookupQuery) {
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
                    const prefix = (businessLevel300Root + selectedLevel300Folder).toLowerCase();
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
        selectedProgramme === "3YR DCO YR3 LEVEL 200";
    subheading.textContent = isDcoOptionProgramme
        ? "Select Accounting Option or Management Option to view its courses."
        : "Select your specialisation to view its courses.";

    list.innerHTML = "";

    const availableOptions = isDcoOptionProgramme ? dcoYear2Options : businessSpecialisations;
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

    if (!selectedSemester) return;

    const semesterData =
        undergraduateData[selectedSemester] || {};

   
const availableLevels =
    selectedDepartment === "Business"
        ? (businessProgrammeLevels[programme] || [])
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
     programme === "3YR DCO YR3 LEVEL 200")
) {
    showBusinessSpecialisations(level);
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



    /* =========================
       UNDERGRADUATE
       ========================= */


    Object.entries(
        undergraduateData
    ).forEach(
        (
            [
                semesterKey,
                levels
            ]
        ) => {


            Object.entries(
                levels
            ).forEach(
                (
                    [
                        level,
                        programmes
                    ]
                ) => {


                    Object.entries(
                        programmes
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
                                            level,
                                            semesterLabels[
                                                semesterKey
                                            ],
                                            "undergraduate"
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
                                                "Undergraduate",

                                            semesterKey,

                                            semester:
                                                semesterLabels[
                                                    semesterKey
                                                ],

                                            level,

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

                }
            );

        }
    );



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
        "Searching course catalogue and cloud modules…";


    /*
    Search the Nextcloud index through our API.
    */

    let cloudResults =
        await searchCloudModules(
            trimmed
        );


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


    /*
    Make the initially loaded Home screen the first
    portal state in browser history.
    */

    replacePortalHistory(
        "home"
    );

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
