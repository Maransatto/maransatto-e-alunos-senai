function showJson() {
    var obj_form = {
        "name": document.getElementById('name').value,
        "nickname": document.getElementById('nickname').value,
        "day": document.getElementById('day').value,
        "month": document.getElementById('month').value,
        "year": document.getElementById('year').value,
        "document": document.getElementById('document').value,
        "team_id": document.getElementById('team_id').value,
        "sports": mountSports(),
    }

    function mountSports() {
        const sportChecks = document.getElementsByName('sport');
        const sports = [];

        sportChecks.forEach(sport => {
            if (sport.checked) {
            sports.push(sport.id);
            }
        })
        return sports;
    }

    var json = JSON.stringify(obj_form)
    document.write(json);
}
