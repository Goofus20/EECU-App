let allCareers = []; // Store the data globally for easy access

async function fetchData(url) {
    try {
        const response = await fetch(url);
        allCareers = await response.json(); // Save data to our global variable

        const dropdown = document.getElementById("career-dropdown");
        
        // Populate dropdown
        allCareers.forEach((career, index) => {
            const option = document.createElement("option");
            option.value = index; // Use the array index to find the object later
            option.textContent = career.name; 
            dropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// 3. Listen for changes
document.getElementById("career-dropdown").addEventListener("change", function(event) {
    const selectedIndex = event.target.value;
    const nameSpan = document.getElementById("display-name");
    const salarySpan = document.getElementById("display-salary");

    if (selectedIndex !== "") {
        const selectedCareer = allCareers[selectedIndex];
        
        // Update the HTML with the specific data
        nameSpan.textContent = selectedCareer.Occupation;
        salarySpan.textContent = selectedCareer.Salary; 
    } else {
        nameSpan.textContent = "N/A";
        salarySpan.textContent = "N/A";
    }
});

fetchData("https://eecu-data-server.vercel.app/data/2023");