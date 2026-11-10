/* =========================================
   سنتر الدحيح
   صفحة تفاصيل المدرس
========================================= */


/* =========================================
   معرفة المدرس المختار
========================================= */

const selectedTeacherId =
    localStorage.getItem("selectedTeacherId");


/* =========================================
   البحث عن المدرس
========================================= */

const selectedTeacher =
    teachers.find(function (teacher) {

        return String(teacher.id) ===
            String(selectedTeacherId);

    });


/* =========================================
   عناصر الصفحة
========================================= */

const teacherDetailsContainer =
    document.getElementById(
        "teacherDetailsContainer"
    );

const availableSchedules =
    document.getElementById(
        "availableSchedules"
    );

const addScheduleBtn =
    document.getElementById(
        "addScheduleBtn"
    );

const chooseScheduleSection =
    document.getElementById(
        "chooseScheduleSection"
    );


/* =========================================
   الموعد المختار
========================================= */

let selectedScheduleIndex = null;


/* =========================================
   لو المدرس غير موجود
========================================= */

if (!selectedTeacher) {

    if (teacherDetailsContainer) {

        teacherDetailsContainer.innerHTML = `

            <div class="not-found">

                <div class="not-found-icon">
                    ⚠️
                </div>

                <h2>
                    المدرس غير موجود
                </h2>

                <p>
                    حصلت مشكلة في تحميل بيانات المدرس.
                </p>

                <button
                    onclick="goBackHome()"
                    class="details-home-btn"
                >
                    العودة للرئيسية
                </button>

            </div>

        `;

    }

    if (chooseScheduleSection) {

        chooseScheduleSection.style.display =
            "none";

    }

}


/* =========================================
   عرض بيانات المدرس
========================================= */

function displayTeacherDetails() {

    if (
        !selectedTeacher ||
        !teacherDetailsContainer
    ) {

        return;

    }


    const gradesText =
        selectedTeacher.grades.join(" - ");


    teacherDetailsContainer.innerHTML = `

        <div class="teacher-details-top">

            <img
                src="${selectedTeacher.image || ""}"
                alt="${selectedTeacher.name}"
                class="teacher-details-image"
                onerror="this.style.display='none'"
            >

            <div class="teacher-details-main-info">

                <h2>
                    ${selectedTeacher.name}
                </h2>

                <p class="details-subject">
                    ${selectedTeacher.subject}
                </p>

            </div>

        </div>


        <div class="teacher-details-info">

            <div class="details-info-item">

                <span>
                    🎓 الصفوف
                </span>

                <strong>
                    ${gradesText}
                </strong>

            </div>


            <div class="details-info-item">

                <span>
                    💰 أسعار الحصص
                </span>

                <strong>
                    حسب الموعد
                </strong>

            </div>

        </div>


        <div class="teacher-description">

            <h3>
                نبذة عن المدرس
            </h3>

            <p>
                ${selectedTeacher.description || ""}
            </p>

        </div>

    `;

}


/* =========================================
   عرض مواعيد المدرس
========================================= */

function displaySchedules() {

    if (
        !selectedTeacher ||
        !availableSchedules
    ) {

        return;

    }


    availableSchedules.innerHTML = "";


    if (
        !selectedTeacher.schedules ||
        selectedTeacher.schedules.length === 0
    ) {

        availableSchedules.innerHTML = `

            <p class="no-schedules">
                لا توجد مواعيد متاحة حاليًا.
            </p>

        `;

        return;

    }


    selectedTeacher.schedules.forEach(
        function (schedule, index) {


            const scheduleCard =
                document.createElement("button");


            scheduleCard.type = "button";


            scheduleCard.className =
                "available-schedule";


            /* =================================
               الصف
            ================================= */

            const gradeText =
                schedule.grade
                    ? schedule.grade
                    : "غير محدد";


            /* =================================
               الأيام
            ================================= */

            const daysText =
                schedule.days &&
                schedule.days.length > 0

                    ? schedule.days.join(" + ")

                    : "اليوم غير محدد";


            /* =================================
               التصنيف
            ================================= */

            const categoryText =
                schedule.category
                    ? ` • ${schedule.category}`
                    : "";


            /* =================================
               المادة
            ================================= */

            const subjectText =
                schedule.subject
                    ? schedule.subject
                    : selectedTeacher.subject;


            /* =================================
               السعر
            ================================= */

            const priceText =
                schedule.price !== undefined
                    ? `${schedule.price} جنيه`
                    : "غير محدد";


            /* =================================
               شكل الموعد
            ================================= */

            scheduleCard.innerHTML = `

                <div class="schedule-grade">

                    🎓 ${gradeText}

                </div>


                <div class="schedule-subject">

                    📚 ${subjectText}

                </div>


                <div class="schedule-day">

                    📅 ${daysText}${categoryText}

                </div>


                <div class="schedule-time">

                    🕐 ${schedule.time}

                </div>


                <div class="schedule-price">

                    💰 ${priceText}

                </div>

            `;


            /* =================================
               اختيار الموعد
            ================================= */

            scheduleCard.addEventListener(
                "click",
                function () {


                    document
                        .querySelectorAll(
                            ".available-schedule"
                        )
                        .forEach(
                            function (item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    scheduleCard.classList.add(
                        "selected"
                    );


                    selectedScheduleIndex =
                        index;

                }
            );


            availableSchedules.appendChild(
                scheduleCard
            );

        }
    );

}


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

function saveSubscriptions(
    subscriptions
) {

    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );

}


/* =========================================
   إضافة الموعد المختار
========================================= */

if (addScheduleBtn) {

    addScheduleBtn.addEventListener(
        "click",
        function () {


            /* =============================
               التأكد من اختيار موعد
            ============================= */

            if (
                selectedScheduleIndex === null
            ) {

                alert(
                    "من فضلك اختر موعد الحصة أولاً."
                );

                return;

            }


            const selectedSchedule =
                selectedTeacher.schedules[
                    selectedScheduleIndex
                ];


            if (!selectedSchedule) {

                alert(
                    "الموعد غير موجود."
                );

                return;

            }


            /* =============================
               البيانات الحالية
            ============================= */

            let schedule =
                getSchedule();


            let subscriptions =
                getSubscriptions();


            /* =============================
               الأيام
            ============================= */

            const days =
                selectedSchedule.days || [];


            /* =============================
               التأكد من عدم التكرار
            ============================= */

            const alreadyExists =
                schedule.some(
                    function (lesson) {

                        return (

                            String(
                                lesson.teacherId
                            ) ===
                            String(
                                selectedTeacher.id
                            )

                            &&

                            lesson.time ===
                            selectedSchedule.time

                            &&

                            lesson.grade ===
                            selectedSchedule.grade

                        );

                    }
                );


            if (alreadyExists) {

                alert(
                    "الموعد ده موجود بالفعل في جدولك."
                );

                return;

            }


            /* =============================
               إضافة كل يوم للجدول
            ============================= */

            if (days.length > 0) {

                days.forEach(
                    function (day) {

                        schedule.push({

                            id:
                                Date.now() +
                                Math.random(),

                            teacherId:
                                selectedTeacher.id,

                            teacherName:
                                selectedTeacher.name,

                            subject:
                                selectedSchedule.subject ||
                                selectedTeacher.subject,

                            grade:
                                selectedSchedule.grade,

                            day:
                                day,

                            time:
                                selectedSchedule.time,

                            price:
                                selectedSchedule.price,

                            category:
                                selectedSchedule.category ||
                                "",

                            image:
                                selectedTeacher.image ||
                                ""

                        });

                    }
                );

            } else {

                /* =========================
                   لو مفيش أيام محددة
                ========================= */

                schedule.push({

                    id:
                        Date.now() +
                        Math.random(),

                    teacherId:
                        selectedTeacher.id,

                    teacherName:
                        selectedTeacher.name,

                    subject:
                        selectedSchedule.subject ||
                        selectedTeacher.subject,

                    grade:
                        selectedSchedule.grade,

                    day:
                        "",

                    time:
                        selectedSchedule.time,

                    price:
                        selectedSchedule.price,

                    category:
                        selectedSchedule.category ||
                        "",

                    image:
                        selectedTeacher.image ||
                        ""

                });

            }


            /* =============================
               حفظ الجدول
            ============================= */

            saveSchedule(
                schedule
            );


            /* =============================
               الاشتراك بالمدرس
            ============================= */

            const teacherAlreadySubscribed =
                subscriptions.some(
                    function (subscription) {

                        return String(
                            subscription.teacherId
                        ) === String(
                            selectedTeacher.id
                        );

                    }
                );


            if (!teacherAlreadySubscribed) {

                subscriptions.push({

                    teacherId:
                        selectedTeacher.id,

                    teacherName:
                        selectedTeacher.name,

                    subject:
                        selectedSchedule.subject ||
                        selectedTeacher.subject,

                    price:
                        selectedSchedule.price,

                    image:
                        selectedTeacher.image ||
                        "",

                    grade:
                        selectedSchedule.grade,

                    days:
                        days,

                    time:
                        selectedSchedule.time,

                    category:
                        selectedSchedule.category ||
                        ""

                });


                saveSubscriptions(
                    subscriptions
                );

            }


            /* =============================
               رسالة نجاح
            ============================= */

            alert(
                `تمت إضافة موعد ${selectedTeacher.name} إلى جدولك بنجاح ✅`
            );


            /* =============================
               الانتقال للجدول
            ============================= */

            window.location.href =
                "schedule.html";

        }
    );

}


/* =========================================
   الرجوع للرئيسية
========================================= */

function goBackHome() {

    window.location.href =
        "home.html";

}


/* =========================================
   تشغيل الصفحة
========================================= */

displayTeacherDetails();

displaySchedules();