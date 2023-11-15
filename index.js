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
            
            // Extract the text after "html element name:"
            const restOfString = h2.innerText.split('html element name: ')[1];
            
            // Apply the color class to the span
            const colorClass = colorClasses[index % colorClasses.length];
            span.classList.add(colorClass);

            // Add the rest of the string as text content to the span
            span.textContent = restOfString;

            // Empty the content of the h2
            h2.innerHTML = '';

            // Append the span to the h2
            h2.appendChild(span);
        });
    });
