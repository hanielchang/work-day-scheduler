var schedule = document.getElementById('schedule')
var data = [];

function saveItem(event) {
    if (event.target.id === 'save') {
        var parent = event.target.parentNode;
        var description = parent.children[1].value;
        var timeId = parent.id;
        var task = [timeId, description];
        data.push(task);
        localStorage.setItem("data", JSON.stringify(data));
        window.alert('Note saved');
    }
};

function loadSchedule() {
    loadedData = localStorage.getItem("data");
    if (loadedData) {
        data = JSON.parse(loadedData);
        scheduleCount = schedule.childElementCount;

        for (let outer = 0; outer < data.length; outer++) {
            var currentId = data[outer][0];
            var currentText = data[outer][1];
            for (let inner = 0; inner < scheduleCount; inner++) {
                var scheduleEl = schedule.children[inner];
                var scheduleId = schedule.children[inner].id;
                if (currentId === scheduleId) {
                    scheduleEl.children[1].value = currentText;
                }
            }
        }
    }
};

loadSchedule();
schedule.addEventListener("click", saveItem);