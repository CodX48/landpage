import { calisthenicsWorkout } from './data.js'; // Import workout data

let list = '<div class="list-cont"><ul class="list">';
calisthenicsWorkout.forEach(item => {
    list += `
        <li>
            <p target="${item.id}" tabindex="0">${item.name}</p>
        </li>`;
});
list += '</ul></div>';

export { list };
