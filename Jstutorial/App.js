import { list } from './list.js'; // Import the list HTML structure
import { calisthenicsWorkout } from './data.js'; // Import workout data
import { nav } from '../JsHome/header_nav.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Header').innerHTML = nav;
    const listContainer = document.getElementById('list-container');
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
                        <h1>${'over all'.toUpperCase()}</h1>
                        <p>Calisthenics is a dynamic and minimalist form of exercise that uses bodyweight movements to build strength, endurance, flexibility, and overall fitness, making it one of the most accessible and effective training methods available today. This form of training emphasizes natural, functional movements such as push-ups, pull-ups, squats, planks, dips, and lunges, which target multiple muscle groups simultaneously. One of the greatest appeals of calisthenics is its scalability; beginners can start with modified versions of exercises, like knee push-ups or assisted pull-ups, while advanced practitioners can progress to challenging movements such as one-arm push-ups, muscle-ups, or even handstand push-ups.</p>
                        <p>Requiring little to no equipment—often just a pull-up bar or a flat surface—calisthenics eliminates barriers like gym fees or bulky workout equipment, making it an ideal choice for people who prefer to train at home, outdoors, or while traveling. It not only builds physical strength but also improves flexibility, coordination, and balance, fostering a well-rounded, functional fitness level that translates into everyday activities. The routines can also be tailored to combine cardio and strength training, which enhances heart health, burns calories, and builds lean muscle.</p>
                        <p>Calisthenics’ benefits extend beyond physical fitness. Its simplicity and emphasis on controlled body movements foster a deep connection between mind and body. The discipline required to master challenging moves such as levers, planches, or the human flag cultivates perseverance and focus, which can carry over into other aspects of life.</p>
                        <p>With the rise of social media, calisthenics has seen a surge in popularity, inspiring communities worldwide as enthusiasts share their progress and showcase creative freestyle routines. This accessibility and versatility have positioned calisthenics as not just a workout style but a lifestyle, empowering individuals to harness their body’s potential without relying on external tools. Whether you’re a fitness novice or an experienced athlete, calisthenics offers a path to a stronger, healthier, and more agile body.</p> 
                `;

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
                    
                        <h1>${selectedWorkout.name.toUpperCase()}</h1>
                        <p>
                            With exercises like <strong>${selectedWorkout.variations.map(ele => ele.name).join(", ")}</strong>, 
                            you can target muscles like <strong>${selectedWorkout.targetMuscles.join(', ')}</strong>.
                        </p>
                        <h2>Description</h2>
                        <p>${selectedWorkout.description}</p>

                        <div>
                        <h2>${"tutorial".toUpperCase()}</h2>
                        ${selectedWorkout.variations.map(ele => `
                            <div>
                            <h2 style="margin-bottom: 20px;">${ele.name.toUpperCase()}</h2>
                            <h3>Setup</h3>
                            <p>${ele.tutorial.Setup}</p>
                            <h3>Execution</h3>
                            <p>${ele.tutorial.Execution}</p>
                            <h3>Tips</h3>
                            <p>${ele.tutorial.Tips}</p>
                            <h3>Progression</h3>
                            <p>${ele.tutorial.Progression}</p>
                            </div>
                            <hr>
                        `).join('')}
                        </div>
                                            
                `;
            }
        }
    });

    
});
