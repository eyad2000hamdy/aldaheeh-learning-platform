/* =========================================
   سنتر الدحيح
   بيانات المدرسين والمواد
========================================= */

const teachers = [

    /* =====================================
       1 - أ/ أحمد حلمي
       عربي
    ===================================== */

    {
        id: "ahmed-helmy",
        name: "أ/ أحمد حلمي",
        subject: "عربي",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/a h.jpeg",

        description:
            "مدرس اللغة العربية.",

        schedules: [

            {
                grade: "ثالثة ثانوي",
                days: ["السبت", "الثلاثاء"],
                time: "1:00 م",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                days: ["السبت", "الثلاثاء"],
                time: "2:30 م",
                price: 25
            },

            {
                grade: "ثانية ثانوي",
                days: ["السبت", "الثلاثاء"],
                time: "4:00 م",
                price: 25
            }

        ]
    },


    /* =====================================
       2 - مستر إبراهيم كامل
       English
    ===================================== */

    {
        id: "ibrahim-kamel",
        name: "مستر إبراهيم كامل",
        subject: "English",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي",
            "ثالثة ثانوي",
            "ثالثة إعدادي"
        ],

        image: "images/e.jpeg",

        description:
            "مدرس اللغة الإنجليزية.",

        schedules: [

            {
                grade: "أولى ثانوي",
                days: ["السبت", "الثلاثاء"],
                time: "5:30 م",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "5:30 م",
                price: 25
            },

            {
                grade: "ثانية ثانوي",
                days: ["السبت", "الثلاثاء"],
                time: "2:00 م",
                price: 30
            },

            {
                grade: "ثانية ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "4:00 م",
                price: 30
            },

            {
                grade: "ثالثة ثانوي",
                days: ["السبت", "الثلاثاء"],
                time: "4:00 م",
                price: 30
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الإثنين", "الأربعاء"],
                time: "11:00 ص",
                price: 30
            },

            {
                grade: "ثالثة إعدادي",
                days: ["السبت", "الثلاثاء"],
                time: "1:00 م",
                price: 25
            }

        ]
    },


    /* =====================================
       3 - مستر رضا إمام
       فلسفة ومنطق
    ===================================== */

    {
        id: "reda-emam",
        name: "مستر رضا إمام",
        subject: "فلسفة ومنطق",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي"
        ],

        image: "images/r e.jpeg",

        description:
            "مدرس الفلسفة والمنطق وعلم النفس وإدارة الأعمال.",

        schedules: [

            /* أولى ثانوي */

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["السبت", "الثلاثاء"],
                time: "1:00 م",
                category: "بنات",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["السبت", "الثلاثاء"],
                time: "2:00 م",
                category: "بنين",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["السبت", "الثلاثاء"],
                time: "3:00 م",
                category: "بنات",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["السبت", "الثلاثاء"],
                time: "4:00 م",
                category: "بنات",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["الأحد", "الأربعاء"],
                time: "2:00 م",
                category: "بنين",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["الأحد", "الأربعاء"],
                time: "4:00 م",
                category: "بنات",
                price: 25
            },

            {
                grade: "أولى ثانوي",
                subject: "فلسفة ومنطق",
                days: ["الإثنين", "الخميس"],
                time: "1:00 م",
                category: "أزهر بنين وبنات",
                price: 25
            },

            /* ثانية ثانوي */

            {
                grade: "ثانية ثانوي",
                subject: "فلسفة ومنطق",
                days: ["الأحد", "الأربعاء"],
                time: "5:00 م",
                category: "أزهر بنين وبنات",
                price: 25
            },

            {
                grade: "ثانية ثانوي",
                subject: "علم نفس",
                days: ["الأحد", "الأربعاء"],
                time: "1:00 م",
                price: 25
            },

            {
                grade: "ثانية ثانوي",
                subject: "إدارة أعمال",
                days: ["الإثنين", "الخميس"],
                time: "2:00 م",
                price: 25
            }

        ]
    },


    /* =====================================
       4 - أ/ أحمد حمدي
       كيمياء وعلوم متكاملة
    ===================================== */

    {
        id: "ahmed-hamdy",
        name: "أ/ أحمد حمدي",
        subject: "كيمياء وعلوم متكاملة",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/a h k.jpeg",

        description:
            "مدرس الكيمياء والعلوم المتكاملة.",

        schedules: [

            {
                grade: "ثالثة ثانوي",
                subject: "كيمياء",
                days: ["السبت", "الثلاثاء"],
                time: "2:00 م",
                price: 35
            },

            {
                grade: "أولى ثانوي",
                subject: "علوم متكاملة",
                days: ["الأحد", "الأربعاء"],
                time: "3:00 م",
                price: 30
            },

            {
                grade: "ثانية ثانوي",
                subject: "كيمياء",
                days: ["الإثنين", "الخميس"],
                time: "2:00 م",
                price: 30
            }

        ]
    },


    /* =====================================
       5 - مستر محمود بكر
       فيزياء
    ===================================== */

    {
        id: "mahmoud-bakr",
        name: "مستر محمود بكر",
        subject: "فيزياء",

        grades: [
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/m b.jpeg",

        description:
            "مدرس الفيزياء.",

        schedules: [

            {
                grade: "ثانية ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "2:30 م",
                price: 35
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "4:00 م",
                price: 35
            }

        ]
    },


    /* =====================================
       6 - مستر ياسر عبد القادر
       كيمياء وعلوم متكاملة
    ===================================== */

    {
        id: "yasser-abdelkader",
        name: "مستر ياسر عبد القادر",
        subject: "كيمياء وعلوم متكاملة",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/y a.jpeg",

        description:
            "مدرس الكيمياء والعلوم المتكاملة.",

        schedules: [

            {
                grade: "ثالثة ثانوي",
                subject: "كيمياء",
                days: ["الإثنين", "الخميس"],
                time: "3:00 م",
                price: 35
            },

            {
                grade: "ثانية ثانوي",
                subject: "كيمياء",
                days: ["الإثنين", "الخميس"],
                time: "4:30 م",
                price: 30
            },

            {
                grade: "أولى ثانوي",
                subject: "علوم متكاملة",
                days: ["الإثنين", "الخميس"],
                time: "6:30 م",
                price: 30
            }

        ]
    },


    /* =====================================
       7 - مستر محمد جودة
       عربي
    ===================================== */

    {
        id: "mohamed-gouda",
        name: "مستر محمد جودة",
        subject: "عربي",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/m g.jpeg",

        description:
            "مدرس اللغة العربية.",

        schedules: [

            {
                grade: "ثالثة ثانوي",
                days: [],
                time: "2:30 م",
                price: 30
            },

            {
                grade: "ثانية ثانوي",
                days: [],
                time: "4:00 م",
                price: 30
            },

            {
                grade: "أولى ثانوي",
                days: [],
                time: "5:30 م",
                price: 25
            }

        ]
    },


    /* =====================================
       8 - مستر رأفت سبع الليل
       عربي
    ===================================== */

    {
        id: "rafat-seb3-el-leil",
        name: "مستر رأفت سبع الليل",
        subject: "عربي",

        grades: [
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/r a.jpeg",

        description:
            "مدرس اللغة العربية.",

        schedules: [

            {
                grade: "ثانية ثانوي",
                days: ["الأحد", "الثلاثاء", "الأربعاء"],
                time: "8:00 ص",
                category: "بنات",
                price: 30
            },

            {
                grade: "ثانية ثانوي",
                days: ["الأحد", "الثلاثاء", "الأربعاء"],
                time: "9:30 ص",
                category: "بنين",
                price: 30
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الأحد", "الثلاثاء", "الأربعاء"],
                time: "11:00 ص",
                category: "بنات",
                price: 30
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الأحد", "الثلاثاء", "الأربعاء"],
                time: "12:30 م",
                category: "بنين",
                price: 30
            }

        ]
    },


    /* =====================================
       9 - مسيو إبراهيم البحيري
       فرنساوي
    ===================================== */

    {
        id: "ibrahim-elbehairy",
        name: "مسيو إبراهيم البحيري",
        subject: "فرنساوي",

        grades: [
            "أولى ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/e b.jpeg",

        description:
            "مدرس اللغة الفرنسية.",

        schedules: [

            {
                grade: "أولى ثانوي",
                days: ["الجمعة"],
                time: "4:00 م",
                price: 30
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الجمعة"],
                time: "5:30 م",
                price: 30
            }

        ]
    },


    /* =====================================
       10 - مسيو محمد درويش
       فرنساوي
    ===================================== */

    {
        id: "mohamed-darwish",
        name: "مسيو محمد درويش",
        subject: "فرنساوي",

        grades: [
            "أولى ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/d r.jpeg",

        description:
            "مدرس اللغة الفرنسية.",

        schedules: [

            {
                grade: "أولى ثانوي",
                days: ["الجمعة"],
                time: "2:00 م",
                price: 25
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الجمعة"],
                time: "3:00 م",
                price: 30
            }

        ]
    },


    /* =====================================
       11 - مستر أحمد سعد
       رياضيات وإحصاء
    ===================================== */

    {
        id: "ahmed-saad",
        name: "مستر أحمد سعد",
        subject: "رياضيات وإحصاء",

        grades: [
            "ثالثة ثانوي"
        ],

        image: "images/a s.jpeg",

        description:
            "مدرس الرياضيات والإحصاء.",

        schedules: [

            {
                grade: "ثالثة ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "11:30 ص",
                price: 30
            }

        ]
    },


    /* =====================================
       12 - مستر أحمد عادل
       دراسات اجتماعية
    ===================================== */

    {
        id: "ahmed-adel",
        name: "مستر أحمد عادل",
        subject: "دراسات اجتماعية",

        grades: [
            "أولى إعدادي",
            "ثانية إعدادي",
            "ثالثة إعدادي"
        ],

      image: "images/images.jfif",

        description:
            "مدرس الدراسات الاجتماعية.",

        schedules: [

            {
                grade: "أولى إعدادي",
                days: [],
                time: "7:00 م",
                price: 10
            },

            {
                grade: "ثالثة إعدادي",
                days: [],
                time: "8:30 م",
                price: 10
            },

            {
                grade: "ثانية إعدادي",
                days: ["الجمعة"],
                time: "2:00 م",
                price: 10
            },

            {
                grade: "ثانية إعدادي",
                days: ["السبت"],
                time: "5:00 م",
                price: 10
            }

        ]
    },


    /* =====================================
       13 - ميس فاطمة
       تاريخ
    ===================================== */

    {
        id: "miss-fatma",
        name: "ميس فاطمة",
        subject: "تاريخ",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي"
        ],

        image: "images/images (1).jfif",

        description:
            "مدرسة التاريخ.",

        schedules: [

            {
                grade: "أولى ثانوي",
                days: ["الأحد", "الأربعاء"],
                time: "4:00 م",
                price: 25
            },

            {
                grade: "ثانية ثانوي",
                days: ["الأحد", "الأربعاء"],
                time: "11:00 ص",
                category: "أزهر",
                price: 30
            }

        ]
    },


    /* =====================================
       14 - ميس عبير يسري
       تاريخ
    ===================================== */

    {
        id: "miss-abeer-yosry",
        name: "ميس عبير يسري",
        subject: "تاريخ",

        grades: [
            "أولى ثانوي",
            "ثانية ثانوي",
            "ثالثة ثانوي"
        ],

        image: "images/images (13).jfif",

        description:
            "مدرسة التاريخ.",

        schedules: [

            {
                grade: "أولى ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "2:00 م",
                price: 30
            },

            {
                grade: "ثانية ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "3:00 م",
                category: "عام",
                price: 30
            },

            {
                grade: "ثانية ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "4:30 م",
                category: "أزهر",
                price: 30
            },

            {
                grade: "ثالثة ثانوي",
                days: ["الإثنين", "الخميس"],
                time: "6:00 م",
                price: 40
            }

        ]
    }

];


/* =========================================
   المواد الدراسية
========================================= */

const subjects = [

    {
        name: "عربي",
        icon: "📖"
    },

    {
        name: "English",
        icon: "🇬🇧"
    },

    {
        name: "فلسفة ومنطق",
        icon: "🧠"
    },

    {
        name: "علم نفس",
        icon: "🧠"
    },

    {
        name: "إدارة أعمال",
        icon: "💼"
    },

    {
        name: "كيمياء",
        icon: "⚗️"
    },

    {
        name: "علوم متكاملة",
        icon: "🔬"
    },

    {
        name: "فيزياء",
        icon: "⚡"
    },

    {
        name: "فرنساوي",
        icon: "🇫🇷"
    },

    {
        name: "رياضيات وإحصاء",
        icon: "📐"
    },

    {
        name: "دراسات اجتماعية",
        icon: "🌍"
    },

    {
        name: "تاريخ",
        icon: "🏛️"
    }
];


/* =========================================
   الحصول على مدرس بالـ ID
========================================= */

function getTeacherById(id) {

    return teachers.find(
        function (teacher) {

            return String(teacher.id) === String(id);

        }
    );

}


/* =========================================
   الحصول على المدرسين حسب المادة
========================================= */

function getTeachersBySubject(subject) {

    if (subject === "all") {

        return teachers;

    }


    return teachers.filter(
        function (teacher) {

            if (teacher.subject === subject) {

                return true;

            }


            return teacher.schedules.some(
                function (schedule) {

                    return schedule.subject === subject;

                }
            );

        }
    );

}


/* =========================================
   البحث عن المدرسين
========================================= */

function searchTeachers(searchText) {

    const text =
        searchText.trim().toLowerCase();


    if (!text) {

        return teachers;

    }


    return teachers.filter(
        function (teacher) {

            const teacherName =
                teacher.name.toLowerCase();

            const teacherSubject =
                teacher.subject.toLowerCase();

            const teacherGrades =
                teacher.grades.join(" ").toLowerCase();

            const scheduleSubjects =
                teacher.schedules
                    .map(
                        function (schedule) {

                            return schedule.subject || "";

                        }
                    )
                    .join(" ")
                    .toLowerCase();


            return (

                teacherName.includes(text) ||

                teacherSubject.includes(text) ||

                teacherGrades.includes(text) ||

                scheduleSubjects.includes(text)

            );

        }
    );

}