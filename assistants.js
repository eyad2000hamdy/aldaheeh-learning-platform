/* =========================================
   سنتر الدحيح
   بيانات الـ Assistants
========================================= */

const assistants = [

    /* =====================================
       1 - ندى وليد
    ===================================== */

    {
        id: "nada-walid",

        name: " nada-walid",

        role: " assistant ",

        image: "images/nada.jpeg",

        whatsapp: "201282736020"
    },


    /* =====================================
       2 - محمد فاروق
    ===================================== */

    {
        id: "mohamed-farouk",

        name: "mohamed farouk ",

        role: "  assistant",

        image: "images/m faroq.jpeg",

        whatsapp: "201002733207"
    },


    /* =====================================
       3 - عمرو السقا
    ===================================== */

    {
        id: "amr-el-sakka",

        name: " 3Mr El SaQa",

        role: "   assistant",

        image: "images/amr elsaqa.jpeg",

        whatsapp: "201142871590"
    }

];


/* =========================================
   الحصول على Assistant بالـ ID
========================================= */

function getAssistantById(id) {

    return assistants.find(
        function (assistant) {

            return String(assistant.id) ===
                String(id);

        }
    );

}


/* =========================================
   إنشاء رابط واتساب
========================================= */

function getWhatsAppLink(number) {

    return `https://wa.me/${number}`;

}