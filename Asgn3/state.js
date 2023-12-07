function populateState() {
    var stateSelect = document.getElementById("stateSelect");
    stateSelect.innerHTML = '<option value="Maharashtra">Maharashtra</option>';
}

// Function to populate the districts dropdown
function populateDistricts() {
    var districtSelect = document.getElementById("districtSelect");
    districtSelect.innerHTML = '';

    var districts = [
        "Mumbai", "Pune", "Nagpur", "Thane", "Nashik",
        "Aurangabad", "Solapur", "Amravati", "Nanded", "Kolhapur"
    ];

    districts.forEach(function (district) {
        var option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtSelect.add(option);
    });
}

// Function to populate the cities dropdown
function populateCities() {
    var citySelect = document.getElementById("citySelect");
    citySelect.innerHTML = '';

    var cities = [
        "Mumbai", "Pune", "Nagpur", "Thane", "Nashik",
        "Aurangabad", "Solapur", "Amravati", "Nanded", "Kolhapur",
        "Latur", "Sangli", "Jalgaon", "Akola", "Dhule",
        "Ahmednagar", "Chandrapur", "Parbhani", "Jalna", "Bhiwandi"
    ];

    cities.forEach(function (city) {
        var option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.add(option);
    });
}