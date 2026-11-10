/* =========================================
   سنتر الدحيح
   صفحة مدرسيني
========================================= */


/* =========================================
   عناصر الصفحة
========================================= */

const myTeachersContainer =
    document.getElementById("myTeachersContainer");

const emptyMyTeachers =
    document.getElementById("emptyMyTeachers");

const myTeachersCount =
    document.getElementById("myTeachersCount");


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
   عرض المدرسين
========================================= */

function displayMyTeachers() {

    const subscriptions =
        getSubscriptions();


    /* =====================================
       تحديث عدد المدرسين
    ===================================== */

    if (myTeachersCount) {

        myTeachersCount.textContent =
            subscriptions.length;

    }


    /* =====================================
       لو مفيش مدرسين
    ===================================== */

    if (subscriptions.length === 0) {

        if (myTeachersContainer) {

            myTeachersContainer.innerHTML = "";

        }


        if (emptyMyTeachers) {

            emptyMyTeachers.style.display =
                "block";

        }

        return;

    }


    /* =====================================
       إخفاء رسالة عدم وجود مدرسين
    ===================================== */

    if (emptyMyTeachers) {

        emptyMyTeachers.style.display =
            "none";

    }


    /* =====================================
       تنظيف القائمة
    ===================================== */

    if (myTeachersContainer) {

        myTeachersContainer.innerHTML = "";

    }


    /* =====================================
       إنشاء Cards
    ===================================== */

    subscriptions.forEach(
        function (subscription) {


            const teacherCard =
                document.createElement("article");


            teacherCard.className =
                "my-teacher-card";


            /* =================================
               الحصول على جدول الطالب
            ================================= */

            const schedule =
                getSchedule();


            /* =================================
               البحث عن حصص المدرس
            ================================= */

            const teacherLessons =
                schedule.filter(
                    function (lesson) {

                        return String(
                            lesson.teacherId
                        ) === String(
                            subscription.teacherId
                        );

                    }
                );


            /* =================================
               السعر
            ================================= */

            let teacherPrice =
                subscription.price;


            /*
               لو السعر مش موجود في الاشتراك
               نحاول نجيبه من الحصص
            */

            if (
                teacherPrice === undefined ||
                teacherPrice === null ||
                teacherPrice === ""
            ) {

                if (
                    teacherLessons.length > 0 &&
                    teacherLessons[0].price !== undefined
                ) {

                    teacherPrice =
                        teacherLessons[0].price;

                } else {

                    teacherPrice =
                        "غير محدد";

                }

            }


            /* =================================
               عرض المواعيد
            ================================= */

            let schedulesHTML = "";


            if (teacherLessons.length > 0) {


                teacherLessons.forEach(
                    function (lesson) {


                        schedulesHTML += `

                            <div class="my-teacher-schedule">

                                <span>
                                    📅 ${lesson.day}
                                </span>

                                <span>
                                    🕐 ${lesson.time}
                                </span>

                            </div>

                        `;

                    }
                );


            } else {


                schedulesHTML = `

                    <p class="no-teacher-schedule">
                        لا توجد حصص مضافة حاليًا
                    </p>

                `;

            }


            /* =================================
               الصورة
            ================================= */

            const teacherImage =
                subscription.image ||
                "https://via.placeholder.com/400x400?text=Teacher";


            /* =================================
               اسم المدرس
            ================================= */

            const teacherName =
                subscription.teacherName ||
                "مدرس";


            /* =================================
               المادة
            ================================= */

            const teacherSubject =
                subscription.subject ||
                "غير محددة";


            /* =================================
               HTML للكارت
            ================================= */

            teacherCard.innerHTML = `

                <div class="my-teacher-image">

                    <img
                        src="${teacherImage}"
                        alt="${teacherName}"
                        onerror="this.src='https://via.placeholder.com/400x400?text=Teacher'"
                    >

                </div>


                <div class="my-teacher-info">

                    <h3>
                        ${teacherName}
                    </h3>


                    <p class="my-teacher-subject">
                        ${teacherSubject}
                    </p>


                    <div class="my-teacher-price">

                        💰
                        ${teacherPrice}
                        جنيه للحصة

                    </div>


                    <div class="my-teacher-schedules">

                        ${schedulesHTML}

                    </div>


                    <div class="my-teacher-buttons">


                        <button
                            class="view-schedule-btn"
                            onclick='viewTeacherSchedule(${JSON.stringify(
                                String(subscription.teacherId)
                            )})'
                        >

                            عرض الجدول

                        </button>


                        <button
                            class="cancel-subscription-btn"
                            onclick='cancelSubscription(${JSON.stringify(
                                String(subscription.teacherId)
                            )})'
                        >

                            إلغاء الاشتراك

                        </button>


                    </div>

                </div>

            `;


            /* =================================
               إضافة الكارت للصفحة
            ================================= */

            if (myTeachersContainer) {

                myTeachersContainer.appendChild(
                    teacherCard
                );

            }

        }
    );

}


/* =========================================
   عرض جدول مدرس معين
========================================= */

function viewTeacherSchedule(teacherId) {


    const schedule =
        getSchedule();


    const teacherLessons =
        schedule.filter(
            function (lesson) {

                return String(
                    lesson.teacherId
                ) === String(
                    teacherId
                );

            }
        );


    if (teacherLessons.length === 0) {

        alert(
            "لا توجد حصص لهذا المدرس في جدولك حاليًا."
        );

        return;

    }


    let message =
        "📚 مواعيد المدرس في جدولك:\n\n";


    teacherLessons.forEach(
        function (lesson) {

            message +=
                `📅 ${lesson.day} - 🕐 ${lesson.time}\n`;

        }
    );


    alert(message);

}


/* =========================================
   إلغاء الاشتراك
========================================= */

function cancelSubscription(teacherId) {


    const subscriptions =
        getSubscriptions();


    const teacher =
        subscriptions.find(
            function (subscription) {

                return String(
                    subscription.teacherId
                ) === String(
                    teacherId
                );

            }
        );


    if (!teacher) {

        return;

    }


    /* =====================================
       رسالة التأكيد
    ===================================== */

    const confirmCancel =
        confirm(
            `هل أنت متأكد من إلغاء الاشتراك مع ${teacher.teacherName}؟\n\nسيتم أيضًا حذف حصص هذا المدرس من جدولك.`
        );


    if (!confirmCancel) {

        return;

    }


    /* =====================================
       حذف المدرس من الاشتراكات
    ===================================== */

    const newSubscriptions =
        subscriptions.filter(
            function (subscription) {

                return String(
                    subscription.teacherId
                ) !== String(
                    teacherId
                );

            }
        );


    saveSubscriptions(
        newSubscriptions
    );


    /* =====================================
       حذف حصص المدرس من الجدول
    ===================================== */

    const schedule =
        getSchedule();


    const newSchedule =
        schedule.filter(
            function (lesson) {

                return String(
                    lesson.teacherId
                ) !== String(
                    teacherId
                );

            }
        );


    saveSchedule(
        newSchedule
    );


    /* =====================================
       رسالة نجاح
    ===================================== */

    alert(
        "تم إلغاء الاشتراك وحذف حصص المدرس من جدولك ✅"
    );


    /* =====================================
       تحديث الصفحة
    ===================================== */

    displayMyTeachers();

}


/* =========================================
   تشغيل الصفحة
========================================= */

displayMyTeachers();