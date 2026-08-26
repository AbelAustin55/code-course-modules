/* =========================================================
   UCC CoDE COURSE MODULES PORTAL

   Undergraduate:
   Semester -> Level -> Programme -> Course

   SWITCH remains separate.
   ========================================================= */


const PLACEHOLDER_LINK =
    "https://YOUR-NEXTCLOUD-LINK-HERE";


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
                    "ESC402D",
                    "Nuclear and Environmental Science Education"
                ),

                course(
                    "ESC405D",
                    "Computer Application in Science Education"
                ),

                course(
                    "MBB416D",
                    "Applications of Biotechnology"
                ),

                course(
                    "PHY401D",
                    "Nuclear and Particle Physics"
                ),

                course(
                    "PHY405D",
                    "Electromagnetic Field Theory"
                )

            ],



            "B.Sc Psychology": [

                course(
                    "BPS421D",
                    "Seminar in Psychology"
                ),

                course(
                    "BPS422D",
                    "Instructional Psychology"
                ),

                course(
                    "BPS423D",
                    "Cognitive Psychology"
                ),

                course(
                    "BPS425D",
                    "Organisational Leadership"
                ),

                course(
                    "BPS426D",
                    "Crisis Management"
                )

            ],



            "Information Technology": [

                course(
                    "EBS416D",
                    "Database Management II"
                ),

                course(
                    "INF402D",
                    "Introduction to Intelligent Systems"
                ),

                course(
                    "INF406D",
                    "E-Commerce II"
                ),

                course(
                    "INF408D",
                    "Systems Security and Administration"
                ),

                course(
                    "INF410D",
                    "Project Management"
                )

            ],



            "B.Com Accounting / Management": [

                course(
                    "ACC402D",
                    "Advanced Financial Reporting II"
                ),

                course(
                    "ACC404D",
                    "Audit and Assurance Practice"
                ),

                course(
                    "ADM402D",
                    "Public Sector Management and Administration"
                ),

                course(
                    "ADM404D",
                    "Administrative Law"
                ),

                course(
                    "EMG404D",
                    "Business and Society"
                ),

                course(
                    "SBU402D",
                    "Strategic Management"
                ),

                course(
                    "SBU406D",
                    "Business Ethics and Corporate Governance"
                )

            ],



            "B.Com Human Resource Management": [

                course(
                    "HUM404D",
                    "Industrial Relations"
                ),

                course(
                    "HUM407D",
                    "International Human Resource Management"
                ),

                course(
                    "MGT404D",
                    "Industrial Relations"
                )

            ],



            "B.Com Finance": [

                course(
                    "FIN402D",
                    "Financial Risk Management"
                ),

                course(
                    "FIN404D",
                    "International Finance"
                )

            ],



            "Procurement & Supply Chain Management": [

                course(
                    "PCM402D",
                    "Strategic Supply Chain Management"
                ),

                course(
                    "PCM405D",
                    "International Procurement"
                ),

                course(
                    "PCM406D",
                    "Procurement Audit and Investigations"
                )

            ],



            "Marketing": [

                course(
                    "MKT401D",
                    "Marketing Communications"
                ),

                course(
                    "MKT402D",
                    "International Marketing"
                )

            ],



            "BA Social Behaviour & Conflict Management": [

                course(
                    "SBC405D",
                    "Challenges of Refugees"
                ),

                course(
                    "SBC406D",
                    "Crime and Justice"
                ),

                course(
                    "SBC410D",
                    "Community Relations"
                ),

                course(
                    "SBC411D",
                    "Gender and Development"
                )

            ],



            "Home Economics": [

                course(
                    "EBS430D",
                    "Housing and Home Improvement"
                ),

                course(
                    "EBS431D",
                    "Introduction to Freehand Cutting"
                ),

                course(
                    "EBS434D",
                    "Post-Harvest Handling of Agricultural Produce"
                )

            ],



            "Social Studies / Geography": [

                course(
                    "ESS406D",
                    "Social Studies in Basic Education"
                ),

                course(
                    "ESS423D",
                    "Physical and Social Relations in Social Studies"
                ),

                course(
                    "GEO408D",
                    "Population and Development"
                )

            ],



            "Visual / Creative Education": [

                course(
                    "EBS425D",
                    "Visual Communication"
                )

            ],



            "General / Liberal Studies": [

                course(
                    "LSS401D",
                    "Man and His Environment"
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
            "Introduction to Accounting",
            "https://codemodules.dedyn.io"
        )

    ],


    "ARTS": [

        course(
            "SW-ART101",
            "Arts Module"
        )

    ],


    "HOME ECONOMICS": [

        course(
            "SW-HEC101",
            "Home Economics Module"
        )

    ],


    "INFORMATION TECHNOLOGY": [

        course(
            "SW-INF101",
            "Information Technology Module"
        )

    ],


    "MATHEMATICS": [

        course(
            "SW-MATH101",
            "Mathematics Module"
        )

    ],


    "SCIENCE": [

        course(
            "SW-SCI101",
            "Science Module"
        )

    ],


    "SOCIAL SCIENCES": [

        course(
            "SW-SES101",
            "Social Sciences Module"
        )

    ],


    "SOCIAL STUDIES": [

        course(
            "SW-SST101",
            "Social Studies Module"
        )

    ]

};



/* =========================================================
   SEMESTER LABELS
   ========================================================= */


const semesterLabels = {

    firstSemester:
        "First Semester",

    secondSemester:
        "Second Semester"

};



/* =========================================================
   NAVIGATION STATE
   ========================================================= */


let selectedSemester = null;

let selectedLevel = null;

let navigationType = null;



/* =========================================================
   LINK CHECKER
   ========================================================= */


function isPlaceholderLink(link) {

    return (
        !link ||
        String(link).includes(
            "YOUR-NEXTCLOUD-LINK-HERE"
        )
    );

}



/* =========================================================
   SEARCH ALL COURSES
   ========================================================= */


function searchAllCourses(

    query,

    undergraduateSource =
        undergraduateData,

    switchSource =
        switchData

) {


    const term =
        String(query || "")
            .trim()
            .toLowerCase();


    if (term.length < 2) {

        return [];

    }


    const results = [];



    /* SEARCH UNDERGRADUATE */


    Object.entries(
        undergraduateSource
    ).forEach(
        ([semesterKey, levels]) => {


            Object.entries(
                levels
            ).forEach(
                ([level, programmes]) => {


                    Object.entries(
                        programmes
                    ).forEach(
                        ([programme, courseList]) => {


                            courseList.forEach(
                                course => {


                                    const searchText = [

                                        course.code,

                                        course.title,

                                        programme,

                                        level,

                                        `Level ${level}`,

                                        semesterLabels[
                                            semesterKey
                                        ],

                                        "Undergraduate"

                                    ]
                                    .join(" ")
                                    .toLowerCase();


                                    if (
                                        searchText.includes(
                                            term
                                        )
                                    ) {


                                        results.push({

                                            ...course,

                                            type:
                                                "Undergraduate",

                                            semesterKey,

                                            semester:
                                                semesterLabels[
                                                    semesterKey
                                                ],

                                            level,

                                            programme

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



    /* SEARCH SWITCH */


    Object.entries(
        switchSource
    ).forEach(
        ([programme, courseList]) => {


            courseList.forEach(
                course => {


                    const searchText = [

                        course.code,

                        course.title,

                        programme,

                        "SWITCH"

                    ]
                    .join(" ")
                    .toLowerCase();


                    if (
                        searchText.includes(
                            term
                        )
                    ) {


                        results.push({

                            ...course,

                            type:
                                "SWITCH",

                            programme

                        });

                    }

                }
            );

        }
    );


    return results;

}



/* =========================================================
   HANDLE SEARCH INPUT
   ========================================================= */


function handleCourseSearch(event) {


    const query =
        event.target.value.trim();


    const resultsContainer =
        document.getElementById(
            "searchResults"
        );


    const resultsList =
        document.getElementById(
            "searchResultsList"
        );


    const resultCount =
        document.getElementById(
            "searchResultCount"
        );


    const noResults =
        document.getElementById(
            "noSearchResults"
        );



    if (!query) {


        resultsContainer.hidden =
            true;


        resultsList.innerHTML =
            "";


        noResults.hidden =
            true;


        return;

    }



    resultsContainer.hidden =
        false;



    if (query.length < 2) {


        resultsList.innerHTML =
            "";


        noResults.hidden =
            true;


        resultCount.textContent =
            "Type at least 2 characters to search.";


        return;

    }


    renderSearchResults(
        searchAllCourses(query)
    );

}



/* =========================================================
   DISPLAY SEARCH RESULTS
   ========================================================= */


function renderSearchResults(results) {


    const resultsList =
        document.getElementById(
            "searchResultsList"
        );


    const resultCount =
        document.getElementById(
            "searchResultCount"
        );


    const noResults =
        document.getElementById(
            "noSearchResults"
        );


    resultsList.innerHTML =
        "";



    if (!results.length) {


        resultCount.textContent =
            "0 courses found";


        noResults.hidden =
            false;


        return;

    }



    noResults.hidden =
        true;


    resultCount.textContent =
        `${results.length} course${
            results.length === 1
                ? ""
                : "s"
        } found`;



    results.forEach(course => {


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "search-result-card";



        const meta =

            course.type ===
            "Undergraduate"

                ?

                `${course.semester} • Level ${course.level} • ${course.programme}`

                :

                `SWITCH • ${course.programme}`;



        card.innerHTML = `

            <div class="search-result-code">
                ${course.code}
            </div>

            <div class="search-result-title">
                ${course.title}
            </div>

            <div class="search-result-meta">
                ${meta}
            </div>

            <button class="open-btn">
                OPEN MODULES
            </button>

        `;



        card
            .querySelector(
                ".open-btn"
            )
            .addEventListener(
                "click",
                event =>
                    openModule(
                        event,
                        course.link
                    )
            );


        resultsList.appendChild(
            card
        );

    });

}



/* =========================================================
   SET ACTIVE VIEW
   ========================================================= */


function setActiveView(viewId) {


    document
        .querySelectorAll(
            ".view"
        )
        .forEach(
            view =>
                view.classList.remove(
                    "active"
                )
        );


    document
        .getElementById(
            viewId
        )
        .classList.add(
            "active"
        );


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

}



/* =========================================================
   SHOW LEVELS
   ========================================================= */


function showLevels(semesterKey) {


    selectedSemester =
        semesterKey;


    selectedLevel =
        null;


    navigationType =
        "undergraduate";


    document.getElementById(
        "levelHeading"
    ).textContent =
        semesterLabels[
            semesterKey
        ];


    document.getElementById(
        "levelSubheading"
    ).textContent =
        "Select your level";


    setActiveView(
        "levelView"
    );

}



/* =========================================================
   SHOW PROGRAMMES
   ========================================================= */


function showProgrammes(level) {


    selectedLevel =
        String(level);


    navigationType =
        "undergraduate";


    const programmes =

        undergraduateData[
            selectedSemester
        ][
            selectedLevel
        ];



    const programmeList =

        document.getElementById(
            "programmeList"
        );


    programmeList.innerHTML =
        "";



    document.getElementById(
        "programmeHeading"
    ).textContent =

        `${semesterLabels[selectedSemester]} – Level ${selectedLevel}`;



    Object.entries(
        programmes
    ).forEach(
        ([programme, courseList]) => {


            const card =

                document.createElement(
                    "button"
                );


            card.className =
                "programme-card";


            card.innerHTML = `

                <h3>
                    ${programme}
                </h3>

                <p>
                    ${courseList.length}
                    course${
                        courseList.length === 1
                            ? ""
                            : "s"
                    }
                </p>

                <span>
                    View Courses →
                </span>

            `;


            card.addEventListener(

                "click",

                () =>
                    showCourses(
                        programme
                    )

            );


            programmeList.appendChild(
                card
            );

        }
    );


    setActiveView(
        "programmeView"
    );

}



/* =========================================================
   SHOW COURSES
   ========================================================= */


function showCourses(programme) {


    navigationType =
        "undergraduate";


    const courseList =

        document.getElementById(
            "courseList"
        );



    const courses =

        undergraduateData[
            selectedSemester
        ][
            selectedLevel
        ][
            programme
        ];



    courseList.innerHTML =
        "";



    document.getElementById(
        "courseHeading"
    ).textContent =

        `${programme} – Level ${selectedLevel}`;



    document.getElementById(
        "courseSubheading"
    ).textContent =

        semesterLabels[
            selectedSemester
        ];



    courses.forEach(course => {


        const card =

            document.createElement(
                "div"
            );


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



        card
            .querySelector(
                ".open-btn"
            )
            .addEventListener(

                "click",

                event =>
                    openModule(
                        event,
                        course.link
                    )

            );


        courseList.appendChild(
            card
        );

    });


    setActiveView(
        "courseView"
    );

}



/* =========================================================
   LOAD SWITCH PROGRAMMES
   ========================================================= */


function loadSwitchCards() {


    const switchList =

        document.getElementById(
            "switchProgrammeList"
        );


    if (!switchList) {

        return;

    }


    switchList.innerHTML =
        "";



    Object.keys(
        switchData
    ).forEach(programme => {


        const card =

            document.createElement(
                "button"
            );


        card.className =
            "switch-card";


        card.innerHTML = `

            <span class="switch-name">
                ${programme}
            </span>

            <span class="level-action">
                View Modules →
            </span>

        `;



        card.addEventListener(

            "click",

            () =>
                showSwitchCourses(
                    programme
                )

        );


        switchList.appendChild(
            card
        );

    });

}



/* =========================================================
   SHOW SWITCH COURSES
   ========================================================= */


function showSwitchCourses(programme) {


    navigationType =
        "switch";


    const courseList =

        document.getElementById(
            "courseList"
        );


    courseList.innerHTML =
        "";



    document.getElementById(
        "courseHeading"
    ).textContent =

        `${programme} – SWITCH`;



    document.getElementById(
        "courseSubheading"
    ).textContent =

        "SWITCH Modules";



    switchData[
        programme
    ].forEach(course => {


        const card =

            document.createElement(
                "div"
            );


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



        card
            .querySelector(
                ".open-btn"
            )
            .addEventListener(

                "click",

                event =>
                    openModule(
                        event,
                        course.link
                    )

            );


        courseList.appendChild(
            card
        );

    });


    setActiveView(
        "courseView"
    );

}



/* =========================================================
   OPEN NEXTCLOUD MODULE
   ========================================================= */


function openModule(
    event,
    link
) {


    if (event) {

        event.stopPropagation();

    }



    if (
        isPlaceholderLink(
            link
        )
    ) {


        alert(
            "The Nextcloud module link for this course has not been added yet."
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
   HOME
   ========================================================= */


function goHome() {


    selectedSemester =
        null;


    selectedLevel =
        null;


    navigationType =
        null;


    setActiveView(
        "homeView"
    );

}



/* =========================================================
   BACK TO LEVELS
   ========================================================= */


function backToLevels() {


    if (!selectedSemester) {

        return goHome();

    }


    setActiveView(
        "levelView"
    );

}



/* =========================================================
   BACK TO PROGRAMMES
   ========================================================= */


function backToProgrammes() {


    if (
        navigationType ===
        "switch"
    ) {

        return goHome();

    }


    setActiveView(
        "programmeView"
    );

}



/* =========================================================
   START WEBSITE
   ========================================================= */


if (
    typeof document !==
    "undefined"
) {


    document.addEventListener(

        "DOMContentLoaded",

        () => {


            loadSwitchCards();


            const searchInput =

                document.getElementById(
                    "courseSearch"
                );


            if (searchInput) {


                searchInput.addEventListener(

                    "input",

                    handleCourseSearch

                );

            }

        }

    );

}



/* =========================================================
   NODE TEST SUPPORT
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

        searchAllCourses,

        isPlaceholderLink

    };

}
