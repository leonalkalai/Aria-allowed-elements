document.addEventListener('DOMContentLoaded', function() {
        const strongElements = document.querySelectorAll('h2 strong');

        const colorClasses = [
            'blue', 'red', 'orange', 'green', 'medium-blue',
            'medium-red', 'yellow', 'medium-green', 'light-blue',
            'light-red', 'light-yellow', 'light-green', 'light-grey',
            'grey', 'black'
        ];

        strongElements.forEach((strong, index) => {
            const colorClass = colorClasses[index % colorClasses.length];
            strong.classList.add(colorClass);
        });
    });
