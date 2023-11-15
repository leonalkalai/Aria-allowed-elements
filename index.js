// JavaScript to dynamically assign colors to strong elements
        document.addEventListener('DOMContentLoaded', function() {
            const strongElements = document.querySelectorAll('h2 strong');

            const colors = [
                '#174EA6', '#A50E0E', '#E37400', '#0D652D', '#4285F4',
                '#EA4335', '#FBBC04', '#34A853', '#D2E3FC', '#D2E3FC',
                '#FAD2CF', '#FEEFC3', '#CEEAD6', '#F1F3F4', '#9AA0A6', '#202124'
            ];

            strongElements.forEach((strong, index) => {
                const colorClass = colors[index % colors.length];
                strong.classList.add(colorClass);
            });
        });
