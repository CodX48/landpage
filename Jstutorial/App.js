import { list } from './list.js'; // Import the list HTML structure
import { calisthenicsWorkout } from './data.js'; // Import workout data

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('list-container');
    const contentContainer = document.getElementById('content-container');

    // Render the list in the list container
    listContainer.innerHTML = list;

    // Add event listeners to the list items
    listContainer.addEventListener('click', (event) => {
        const targetElement = event.target;

        // Ensure the clicked element is a <p> tag inside the list
        if (targetElement.tagName === 'P') {
            const targetId = +targetElement.getAttribute('target'); // Get the `id`
            const selectedWorkout = calisthenicsWorkout.find(item => item.id === targetId);

            if (selectedWorkout) {
                // Render the specific content into the content container
                contentContainer.innerHTML = `
                    <div>
                        <h1>${selectedWorkout.name}</h1>
                        <p>
                            With exercises like <strong>${selectedWorkout.variations.join(', ')}</strong>, 
                            you can target muscles like <strong>${selectedWorkout.targetMuscles.join(', ')}</strong>.
                        </p>
                        <h5>Description</h5>
                        <p>${selectedWorkout.description}</p>
                    </div>
                `;
            }
        }
    });
});
