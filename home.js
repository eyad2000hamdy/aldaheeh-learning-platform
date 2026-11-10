/* =========================================
   سنتر الدحيح
   الصفحة الرئيسية - Home
========================================= */


/* =========================================
   التأكد من وجود بيانات الطالب
========================================= */

const studentData =
    JSON.parse(localStorage.getItem("studentData"));

if (!studentData) {

    window.location.href = "index.html";

}


/* =========================================
   عناصر الصفحة
========================================= */

const welcomeStudent =
    document.getElementById("welcomeStudent");

const searchInput =
    document.getElementById("searchInput");

const teachersContainer =
    document.getElementById("teachersContainer");

const teachersCount =
    document.getElementById("teachersCount");

const emptySearch =
    document.getElementById("emptySearch");

const subjectCards =
    document.querySelectorAll(".subject-card");


/* =========================================
   عرض اسم الطالب
========================================= */

if (studentData && welcomeStudent) {

    welcomeStudent.textContent =
        `أهلاً يا ${studentData.name} 👋`;

}


/* =========================================
   المادة المختارة حاليًا
========================================= */

let selectedSubject = "all";


/* =========================================
   الحصول على الاشتراكات
========================================= */

function getSubscriptions() {

    return JSON.parse(
        localStorage.getItem("subscriptions")
    ) || [];

}


/* =========================================
   حفظ الاشتراكات
========================================= */

function saveSubscriptions(subscriptions) {

    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );

}


/* =========================================
   عرض المدرسين
========================================= */

function displayTeachers() {

    if (!teachersContainer) {
        return;
    }


    /* تنظيف المكان */

    teachersContainer.innerHTML = "";


    /* =====================================
       البحث
    ===================================== */

    const searchText =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    /* =====================================
       فلترة المدرسين
    ===================================== */

    const filteredTeachers =
        teachers.filter(function (teacher) {


            /* =================================
               فلترة المادة
            ================================= */

            const subjectMatch =
                selectedSubject === "all" ||

                teacher.subject === selectedSubject ||

                teacher.schedules.some(function (schedule) {

                    return schedule.subject === selectedSubject;

                });


            /* =================================
               البحث
            ================================= */

            const searchMatch =

                teacher.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                teacher.subject
                    .toLowerCase()
                    .includes(searchText)

                ||

                teacher.grades.some(function (grade) {

                    return grade
                        .toLowerCase()
                        .includes(searchText);

                })

                ||

                teacher.schedules.some(function (schedule) {

                    return (
                        schedule.subject &&
                        schedule.subject
                            .toLowerCase()
                            .includes(searchText)
                    );

                });


            return subjectMatch && searchMatch;

        });


    /* =====================================
       عدد المدرسين
    ===================================== */

    if (teachersCount) {

        teachersCount.textContent =
            `${filteredTeachers.length} مدرس`;

    }


    /* =====================================
       لو مفيش نتائج
    ===================================== */

    if (filteredTeachers.length === 0) {

        if (emptySearch) {

            emptySearch.style.display =
                "block";

        }

        return;

    }


    /* =====================================
       إخفاء رسالة عدم وجود النتائج
    ===================================== */

    if (emptySearch) {

        emptySearch.style.display =
            "none";

    }


    /* =====================================
       إنشاء Cards المدرسين
    ===================================== */

    filteredTeachers.forEach(function (teacher) {

        const card =
            createTeacherCard(teacher);

        teachersContainer.appendChild(card);

    });

}


/* =========================================
   إنشاء Card المدرس
========================================= */

function createTeacherCard(teacher) {

    const card =
        document.createElement("article");


    card.className =
        "teacher-card";


    /* =====================================
       معرفة الاشتراك
    ===================================== */

    const subscriptions =
        getSubscriptions();


    const isSubscribed =
        subscriptions.some(function (subscription) {

            return String(subscription.teacherId) ===
                String(teacher.id);

        });


    /* =====================================
       المواعيد والأسعار
    ===================================== */

    let schedulesHTML = "";


    teacher.schedules.forEach(function (schedule) {


        /* =================================
           تحويل الأيام إلى نص
        ================================= */

        const daysText =
            schedule.days
                ? schedule.days.join(" و ")
                : "غير محدد";


        /* =================================
           السعر
        ================================= */

        const price =
            schedule.price !== undefined
                ? schedule.price
                : "غير محدد";


        /* =================================
           المادة الخاصة بالموعد
        ================================= */

        const scheduleSubject =
            schedule.subject
                ? `<span>📚 ${schedule.subject}</span>`
                : "";


        /* =================================
           الصف الخاص بالموعد
        ================================= */

        const scheduleGrade =
            schedule.grade
                ? `<span>🎓 ${schedule.grade}</span>`
                : "";


        /* =================================
           نوع المجموعة
        ================================= */

        const scheduleCategory =
            schedule.category
                ? `<span>👥 ${schedule.category}</span>`
                : "";


        /* =================================
           إنشاء موعد واحد
        ================================= */

        schedulesHTML += `

            <div class="schedule-item">

                ${scheduleSubject}

                ${scheduleGrade}

                <span>
                    📅 ${daysText}
                </span>

                <span>
                    🕐 ${schedule.time}
                </span>

                ${scheduleCategory}

                <span>
                    💰 ${price} جنيه
                </span>

            </div>

        `;

    });


    /* =====================================
       الصفوف
    ===================================== */

    const gradesText =
        teacher.grades.join(" - ");


    /* =====================================
       HTML الخاص بالكارت
    ===================================== */

    card.innerHTML = `

        <div class="teacher-image-container">

            <img
                src="${teacher.image}"
                alt="${teacher.name}"
                class="teacher-image"
                onerror="this.src='images/default-teacher.png'"
            >

        </div>


        <div class="teacher-info">

            <h3>
                ${teacher.name}
            </h3>


            <p class="teacher-subject">

                ${teacher.subject}

            </p>


            <p class="teacher-grades">

                🎓 ${gradesText}

            </p>


            <div class="teacher-schedules">

                ${schedulesHTML}

            </div>


            <div class="teacher-buttons">

                <button
                    class="details-btn"
                    onclick="openTeacherDetails('${teacher.id}')"
                >

                    عرض التفاصيل

                </button>


                <button
                    class="subscribe-btn"
                    onclick="subscribeTeacher('${teacher.id}')"
                >

                    ${
                        isSubscribed
                            ? "مشترك ✓"
                            : "اشترك"
                    }

                </button>

            </div>

        </div>

    `;


    return card;

}


/* =========================================
   فتح تفاصيل المدرس
========================================= */

function openTeacherDetails(teacherId) {

    localStorage.setItem(
        "selectedTeacherId",
        String(teacherId)
    );


    window.location.href =
        "teacher-details.html";

}


/* =========================================
   الاشتراك في المدرس
========================================= */

function subscribeTeacher(teacherId) {

    const teacher =
        teachers.find(function (teacher) {

            return String(teacher.id) ===
                String(teacherId);

        });


    if (!teacher) {

        alert("لم يتم العثور على المدرس.");

        return;

    }


    let subscriptions =
        getSubscriptions();


    /* =====================================
       التأكد أن الطالب مشترك بالفعل
    ===================================== */

    const alreadySubscribed =
        subscriptions.some(function (subscription) {

            return String(subscription.teacherId) ===
                String(teacher.id);

        });


    if (alreadySubscribed) {

        alert(
            "أنت مشترك بالفعل مع هذا المدرس."
        );

        return;

    }


    /* =====================================
       أول حصة
    ===================================== */

    const firstSchedule =
        teacher.schedules[0];


    if (!firstSchedule) {

        alert(
            "لا توجد مواعيد متاحة لهذا المدرس."
        );

        return;

    }


    /* =====================================
       الأيام
    ===================================== */

    const days =
        firstSchedule.days || [];


    /* =====================================
       إضافة الاشتراك
    ===================================== */

    const newSubscription = {

        teacherId:
            teacher.id,

        teacherName:
            teacher.name,

        subject:
            firstSchedule.subject ||
            teacher.subject,

        price:
            firstSchedule.price,

        image:
            teacher.image,

        grade:
            firstSchedule.grade,

        days:
            days,

        time:
            firstSchedule.time

    };


    subscriptions.push(
        newSubscription
    );


    saveSubscriptions(
        subscriptions
    );


    /* =====================================
       إضافة أول حصة للجدول
    ===================================== */

    let schedule =
        JSON.parse(
            localStorage.getItem("schedule")
        ) || [];


    days.forEach(function (day) {

        schedule.push({

            id:
                Date.now() +
                Math.random(),

            teacherId:
                teacher.id,

            teacherName:
                teacher.name,

            subject:
                firstSchedule.subject ||
                teacher.subject,

            grade:
                firstSchedule.grade,

            day:
                day,

            time:
                firstSchedule.time,

            price:
                firstSchedule.price,

            image:
                teacher.image

        });

    });


    localStorage.setItem(
        "schedule",
        JSON.stringify(schedule)
    );


    /* =====================================
       رسالة نجاح
    ===================================== */

    alert(
        `تم الاشتراك مع ${teacher.name} بنجاح ✅`
    );


    /* تحديث الكروت */

    displayTeachers();

}


/* =========================================
   البحث
========================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            displayTeachers();

        }
    );

}


/* =========================================
   فلترة المواد
========================================= */

subjectCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {


            /* إزالة Active */

            subjectCards.forEach(function (item) {

                item.classList.remove("active");

            });


            /* إضافة Active للكارت المختار */

            card.classList.add("active");


            /* معرفة المادة */

            selectedSubject =
                card.dataset.subject;


            /* عرض المدرسين */

            displayTeachers();

        }
    );

});


/* =========================================
   تشغيل الصفحة
========================================= */

displayTeachers();