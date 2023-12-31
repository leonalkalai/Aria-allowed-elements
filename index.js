
    document.addEventListener('DOMContentLoaded', function() {
        const h2Elements = document.querySelectorAll('h2');

        const colorClasses = [
            'blue', 'red', 'orange', 'green', 'medium-blue',
            'medium-red', 'yellow', 'medium-green', 'light-blue',
            'light-red', 'light-yellow', 'light-green', 'light-grey',
            'grey', 'black'
        ];

        h2Elements.forEach((h2, index) => {
            // Create a span element
            const span = document.createElement('span');

            // Apply the color class to the span
            const colorClass = colorClasses[index % colorClasses.length];
            span.classList.add(colorClass);

            // Add "html element name:" to the h2
            const prefix = document.createElement('span');
            prefix.textContent = h2.textContent;
            span.appendChild(prefix);

            h2.textContent = `html element name: `;
            h2.appendChild(span);
            
            
        });
    });
