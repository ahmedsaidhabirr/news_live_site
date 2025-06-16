function showNews() {
    document.getElementById("content").innerHTML = `
        <h2>📰 أحدث الأخبار</h2>
        <ul style="text-align:right;">
            <li>📌 خبر عاجل: إطلاق مشروع جديد للتكنولوجيا في مصر.</li>
            <li>📌 انخفاض سعر الدولار أمام الجنيه اليوم.</li>
            <li>📌 تحديث جديد لتطبيقات التواصل الاجتماعي.</li>
        </ul>
    `;
}

function showLive() {
    document.getElementById("content").innerHTML = `
        <h2>📺 بث مباشر للقنوات</h2>
        <iframe src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig" allowfullscreen></iframe>
    `;
}