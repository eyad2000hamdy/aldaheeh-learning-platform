/* =========================================
   سنتر الدحيح
   صفحة جدولي
   ========================================= */


/* =========================================
   أيام الأسبوع
   ========================================= */

const weekDays = [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة"
];


/* =========================================
   اليوم المختار
   ========================================= */

let selectedDay = "السبت";


/* =========================================
   عناصر الصفحة
   ========================================= */

const dayButtons =
    document.querySelectorAll(".day-btn");

const scheduleContainer =
    document.getElementById("scheduleContainer");

const emptySchedule =
    document.getElementById("emptySchedule");

const currentDayTitle =
    document.getElementById("currentDayTitle");

const weeklyLessonsCount =
    document.getElementById("weeklyLessonsCount");

const scheduleTeachersCount =
    document.getElementById("scheduleTeachersCount");


/* =========================================
   الحصول على جدول الطالب
   ========================================= */

function getSchedule() {

    return JSON.parse(
        localStorage.getItem("schedule")
    ) || [];

}


/* =========================================
   حفظ جدول الطالب
   ========================================= */

function saveSchedule(schedule) {

    localStorage.setItem(
        "schedule",
        JSON.stringify(schedule)
    );

}


/* =========================================
   عرض عدد الحصص والمدرسين
   ========================================= */

function displaySummary() {

    const schedule =
        getSchedule();


    /* عدد الحصص */

    if (weeklyLessonsCount) {

        weeklyLessonsCount.textContent =
            schedule.length;

    }


    /* =====================================
       حساب عدد المدرسين المختلفين
       ===================================== */

    const teacherIds =
        new Set();


    schedule.forEach(function (lesson) {

        teacherIds.add(
            lesson.teacherId
        );

    });


    if (scheduleTeachersCount) {

        scheduleTeachersCount.textContent =
            teacherIds.size;

    }

}


/* =========================================
   عرض حصص اليوم
   ========================================= */

function displayDaySchedule() {

    const schedule =
        getSchedule();


    /* تحديث عنوان اليوم */

    if (currentDayTitle) {

        currentDayTitle.textContent =
            `حصص ${selectedDay}`;

    }


    /* تنظيف الحصص القديمة */

    if (scheduleContainer) {

        scheduleContainer.innerHTML = "";

    }


    /* =====================================
       فلترة حصص اليوم
       ===================================== */

    const todayLessons =
        schedule.filter(function (lesson) {

            return lesson.day === selectedDay;

        });


    /* =====================================
       لو مفيش حصص
       ===================================== */

    if (todayLessons.length === 0) {

        if (emptySchedule) {

            emptySchedule.style.display =
                "block";

        }

        return;

    }


    /* إخفاء رسالة عدم وجود حصص */

    if (emptySchedule) {

        emptySchedule.style.display =
            "none";

    }


    /* =====================================
       عرض الحصص
       ===================================== */

    todayLessons.forEach(function (lesson) {

        const lessonCard =
            document.createElement("article");


        lessonCard.className =
            "lesson-card";


        lessonCard.innerHTML = `

            <div class="lesson-time">

                <span>
                    🕐
                </span>

                <strong>
                    ${lesson.time}
                </strong>

            </div>


            <div class="lesson-info">

                <h3>
                    ${lesson.subject}
                </h3>

                <p>
                    👨‍🏫 ${lesson.teacherName}
                </p>

                <span class="lesson-price">
                    💰 ${lesson.price} جنيه
                </span>

            </div>


            <button
                class="delete-lesson-btn"
                onclick="deleteLesson(${lesson.id})"
                title="حذف الحصة"
            >
                🗑️
            </button>

        `;


        scheduleContainer.appendChild(
            lessonCard
        );

    });

}


/* =========================================
   حذف حصة
   ========================================= */

function deleteLesson(lessonId) {

    const confirmDelete =
        confirm(
            "هل أنت متأكد أنك تريد حذف هذه الحصة من جدولك؟"
        );


    if (!confirmDelete) {

        return;

    }


    let schedule =
        getSchedule();


    schedule =
        schedule.filter(function (lesson) {

            return lesson.id !== lessonId;

        });


    saveSchedule(schedule);


    /* تحديث الصفحة */

    displaySummary();

    displayDaySchedule();


    alert(
        "تم حذف الحصة من جدولك ✅"
    );

}


/* =========================================
   تغيير اليوم
   ========================================= */

dayButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {


            /* إزالة Active من كل الأيام */

            dayButtons.forEach(function (item) {

                item.classList.remove("active");

            });


            /* إضافة Active لليوم المختار */

            button.classList.add("active");


            /* حفظ اليوم */

            selectedDay =
                button.dataset.day;


            /* عرض حصص اليوم */

            displayDaySchedule();

        }
    );

});


/* =========================================
   تشغيل الصفحة
   ========================================= */

displaySummary();

displayDaySchedule();