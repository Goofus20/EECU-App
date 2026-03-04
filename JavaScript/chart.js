        const careerSelect = document.getElementById('career-select');
        const careerInfo = document.getElementById('career-info');

        const careers = {
            'software-engineer': {
                salary: '$100,000',
                outlook: 'Growing rapidly'
            },
            'nurse': {
                salary: '$70,000',
                outlook: 'Stable with growth'
            },
            'teacher': {
                salary: '$50,000',
                outlook: 'Stable'
            },
            'data-scientist': {
                salary: '$120,000',
                outlook: 'Growing rapidly'
            }
        };

        careerSelect.addEventListener('change', function() {
            const selectedCareer = this.value;
            if (selectedCareer) {
                const info = careers[selectedCareer];
                careerInfo.innerHTML = `<h2>${this.options[this.selectedIndex].text}</h2><p>Average Salary: ${info.salary}</p><p>Job Outlook: ${info.outlook}</p>`;
            } else {
                careerInfo.innerHTML = '';
            }
        });