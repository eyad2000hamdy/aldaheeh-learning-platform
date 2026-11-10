/* =====================================
   سنتر الدحيح - App JavaScript
   الملف الرئيسي للتطبيق
   ===================================== */


/* =====================================
   عناصر شاشة البداية
   ===================================== */

const startBtn = document.getElementById("startBtn");
const studentModal = document.getElementById("studentModal");
const closeModal = document.getElementById("closeModal");
const studentForm = document.getElementById("studentForm");


/* =====================================
   فتح نافذة بيانات الطالب
   ===================================== */

if (startBtn) {

    startBtn.addEventListener("click", function () {

        studentModal.classList.add("active");

    });

}


/* =====================================
   إغلاق نافذة بيانات الطالب
   ===================================== */

if (closeModal) {

    closeModal.addEventListener("click", function () {

        studentModal.classList.remove("active");

    });

}


/* =====================================
   إغلاق النافذة عند الضغط خارجها
   ===================================== */

if (studentModal) {

    studentModal.addEventListener("click", function (event) {

        if (event.target === studentModal) {

            studentModal.classList.remove("active");

        }

    });

}


/* =====================================
   التحقق من بيانات الطالب
   ===================================== */

if (studentForm) {

    studentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const studentName =
            document.getElementById("studentName").value.trim();

        const studentGrade =
            document.getElementById("studentGrade").value;


        /* التأكد من إدخال البيانات */

        if (!studentName || !studentGrade) {

            alert("من فضلك اكتب اسمك واختر الصف الدراسي.");

            return;

        }


        /* =================================
           حفظ بيانات الطالب محليًا
           ================================= */

        const studentData = {

            name: studentName,

            grade: studentGrade

        };


        localStorage.setItem(
            "studentData",
            JSON.stringify(studentData)
        );


        /* =================================
           تجهيز بيانات التطبيق الأساسية
           ================================= */

        if (!localStorage.getItem("subscriptions")) {

            localStorage.setItem(
                "subscriptions",
                JSON.stringify([])
            );

        }


        if (!localStorage.getItem("schedule")) {

            localStorage.setItem(
                "schedule",
                JSON.stringify([])
            );

        }


        /* =================================
           الانتقال للصفحة الرئيسية
           ================================= */

        window.location.href = "home.html";

    });

}