/* =========================================
   سنتر الدحيح
   صفحة حسابي
   ========================================= */


/* =========================================
   عناصر الصفحة
   ========================================= */

const accountStudentName =
    document.getElementById("accountStudentName");

const accountStudentGrade =
    document.getElementById("accountStudentGrade");

const accountTeachersCount =
    document.getElementById("accountTeachersCount");

const accountLessonsCount =
    document.getElementById("accountLessonsCount");


const editDataBtn =
    document.getElementById("editDataBtn");

const resetDataBtn =
    document.getElementById("resetDataBtn");


const editModal =
    document.getElementById("editModal");

const closeEditModal =
    document.getElementById("closeEditModal");

const editStudentForm =
    document.getElementById("editStudentForm");


const editStudentName =
    document.getElementById("editStudentName");

const editStudentGrade =
    document.getElementById("editStudentGrade");


/* =========================================
   الحصول على بيانات الطالب
   ========================================= */

function getStudentData() {

    return JSON.parse(
        localStorage.getItem("studentData")
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
   الحصول على الجدول
   ========================================= */

function getSchedule() {

    return JSON.parse(
        localStorage.getItem("schedule")
    ) || [];

}


/* =========================================
   عرض بيانات الطالب
   ========================================= */

function displayStudentData() {

    const studentData =
        getStudentData();


    if (!studentData) {

        window.location.href =
            "index.html";

        return;

    }


    /* الاسم */

    if (accountStudentName) {

        accountStudentName.textContent =
            studentData.name;

    }


    /* الصف */

    if (accountStudentGrade) {

        accountStudentGrade.textContent =
            studentData.grade;

    }


    /* =====================================
       عدد المدرسين
       ===================================== */

    const subscriptions =
        getSubscriptions();


    if (accountTeachersCount) {

        accountTeachersCount.textContent =
            subscriptions.length;

    }


    /* =====================================
       عدد الحصص
       ===================================== */

    const schedule =
        getSchedule();


    if (accountLessonsCount) {

        accountLessonsCount.textContent =
            schedule.length;

    }

}


/* =========================================
   فتح نافذة تعديل البيانات
   ========================================= */

if (editDataBtn) {

    editDataBtn.addEventListener(
        "click",
        function () {


            const studentData =
                getStudentData();


            if (!studentData) {

                return;

            }


            /* وضع البيانات الحالية */

            editStudentName.value =
                studentData.name;

            editStudentGrade.value =
                studentData.grade;


            /* إظهار النافذة */

            editModal.classList.add(
                "show"
            );

        }
    );

}


/* =========================================
   إغلاق نافذة التعديل
   ========================================= */

if (closeEditModal) {

    closeEditModal.addEventListener(
        "click",
        function () {

            editModal.classList.remove(
                "show"
            );

        }
    );

}


/* =========================================
   إغلاق النافذة عند الضغط خارجها
   ========================================= */

if (editModal) {

    editModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                editModal
            ) {

                editModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =========================================
   حفظ تعديلات الطالب
   ========================================= */

if (editStudentForm) {

    editStudentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const newName =
                editStudentName.value.trim();


            const newGrade =
                editStudentGrade.value;


            /* التأكد من البيانات */

            if (
                newName === "" ||
                newGrade === ""
            ) {

                alert(
                    "من فضلك أكمل البيانات."
                );

                return;

            }


            /* =================================
               تحديث بيانات الطالب
               ================================= */

            const studentData = {

                name: newName,

                grade: newGrade

            };


            localStorage.setItem(
                "studentData",
                JSON.stringify(studentData)
            );


            /* إغلاق النافذة */

            editModal.classList.remove(
                "show"
            );


            /* تحديث البيانات */

            displayStudentData();


            alert(
                "تم تحديث بياناتك بنجاح ✅"
            );

        }
    );

}


/* =========================================
   إعادة ضبط البيانات
   ========================================= */

if (resetDataBtn) {

    resetDataBtn.addEventListener(
        "click",
        function () {


            const firstConfirm =
                confirm(
                    "هل أنت متأكد من إعادة ضبط بيانات التطبيق؟"
                );


            if (!firstConfirm) {

                return;

            }


            const secondConfirm =
                confirm(
                    "سيتم حذف اسمك وصفك وجميع المدرسين والحصص المحفوظة. هل تريد الاستمرار؟"
                );


            if (!secondConfirm) {

                return;

            }


            /* =================================
               حذف البيانات المحلية
               ================================= */

            localStorage.removeItem(
                "studentData"
            );


            localStorage.removeItem(
                "subscriptions"
            );


            localStorage.removeItem(
                "schedule"
            );


            localStorage.removeItem(
                "selectedTeacherId"
            );


            /* =================================
               العودة لشاشة البداية
               ================================= */

            alert(
                "تمت إعادة ضبط البيانات بنجاح ✅"
            );


            window.location.href =
                "index.html";

        }
    );

}


/* =========================================
   تشغيل الصفحة
   ========================================= */

displayStudentData();