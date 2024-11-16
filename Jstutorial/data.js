export const calisthenicsWorkout = [
  {
    id: 0,
    name: "Push-Up",
    targetMuscles: ["chest", "shoulders", "triceps"],
    level: "Beginner",
    description: "Push-ups are a foundational bodyweight exercise that works the chest, shoulders, and triceps. Starting in a high plank position, you lower your body toward the ground by bending your elbows, keeping your body in a straight line from head to heels. Engaging your core and pressing back up, you complete one repetition. Push-ups are versatile and can be modified in countless ways to target different muscle groups or adjust difficulty. For example, incline push-ups shift focus to the lower chest, while diamond push-ups intensify tricep engagement. They require no equipment, making them perfect for at-home workouts.",
    variations: [
      {
        name: "Incline Push-Up",
        tutorial: {
          Setup: "Find a stable elevated surface such as a bench or sturdy table. Place your hands shoulder-width apart on the surface and position your body at an incline with your feet on the ground, forming a straight line from head to heels.",
          Execution: "Lower your chest toward the elevated surface by bending your elbows, keeping your body straight. Push back up to the starting position, maintaining control throughout the movement.",
          Tips: "Ensure the elevated surface is secure to avoid slipping. Engage your core to maintain proper alignment. Adjust the height of the surface to modify difficulty.",
          Progression: "Gradually lower the height of the surface to increase intensity. Transition to standard push-ups as strength improves."
        }
      },
      {
        name: "Decline Push-Up",
        tutorial: {
          Setup: "Find a stable elevated surface for your feet, such as a bench or sturdy chair. Place your feet on the surface and your hands shoulder-width apart on the ground in a high plank position.",
          Execution: "Lower your body toward the ground by bending your elbows, keeping your core tight and body straight. Push back up to the starting position.",
          Tips: "Keep your head aligned with your spine and avoid arching your back. Engage your core and legs for stability. Adjust the height of the surface for desired intensity.",
          Progression: "Increase the decline angle by elevating your feet higher or attempt one-arm decline push-ups for advanced strength."
        }
      },
      {
        name: "Diamond Push-Up",
        tutorial: {
          Setup: "Begin in a high plank position with your hands placed close together under your chest, forming a diamond shape with your thumbs and index fingers.",
          Execution: "Lower your chest toward your hands by bending your elbows, keeping your body in a straight line. Push back up to the starting position, fully extending your arms.",
          Tips: "Focus on keeping your elbows close to your sides for maximum tricep engagement. Maintain a tight core to prevent sagging or arching your back.",
          Progression: "Start with knee-supported diamond push-ups if needed. Progress to standard or weighted diamond push-ups for greater challenge."
        }
      }
    ]
  },
  {
    id: 1,
    name: "Pull-Up",
    targetMuscles: ["back", "biceps", "shoulders"],
    level: "Intermediate",
    description: "Pull-ups are a fundamental upper-body exercise that engages the back, biceps, and shoulders. Starting by gripping a bar with an overhand grip, you pull your body upward until your chin is above the bar. This exercise is essential for building upper body strength and muscle definition, as it requires lifting your body weight using only your arms and upper back. Variations like wide-grip pull-ups focus more on the lats, while narrow-grip targets the lower lats and biceps. Pull-ups can be challenging for beginners, but resistance bands can help as strength builds.",
    variations: [
      {
        name: "Wide Grip Pull-Up",
        tutorial: {
          Setup: "Grip the pull-up bar with your hands wider than shoulder-width apart, palms facing away from you.",
          Execution: "Pull your body upwards while keeping your chest forward, ensuring your chin rises above the bar. Lower back down with control.",
          Tips: "Engage your back muscles to avoid relying too much on your arms. Keep your chest open and avoid swinging your body.",
          Progression: "Start with assisted pull-ups using a resistance band, then gradually increase the range of motion and reduce assistance."
        }
      },
      {
        name: "Narrow Grip Pull-Up",
        tutorial: {
          Setup: "Grip the pull-up bar with your hands closer than shoulder-width apart, palms facing away from you.",
          Execution: "Pull yourself upwards until your chin passes the bar, keeping your body straight and controlled. Lower yourself slowly to the starting position.",
          Tips: "Keep your elbows tight to your body to maximize the engagement of the biceps and lower lats.",
          Progression: "Try using a neutral grip (palms facing each other) for a more comfortable pull-up variation."
        }
      },
      {
        name: "Commando Pull-Up",
        tutorial: {
          Setup: "Position your body sideways to the bar and grip the bar with one hand in front of the other.",
          Execution: "Pull your body upwards, alternating sides as you reach your chin to the bar. Lower yourself slowly with control after each rep.",
          Tips: "Ensure an even distribution of effort between both arms. Avoid excessive swinging of the body.",
          Progression: "Start with assisted commando pull-ups using a resistance band to build strength before progressing to unassisted reps."
        }
      }
    ]
  },
  {
    id: 2,
    name: "Dip",
    targetMuscles: ["chest", "shoulders", "triceps"],
    level: "Intermediate",
    description: "Dips are a fantastic exercise for targeting the triceps, shoulders, and chest. Typically performed on parallel bars, you start by gripping the bars and supporting your weight with straight arms. By bending your elbows, you lower your body until your arms reach a 90-degree angle, then push back up to the starting position. Dips are highly effective for building upper body strength, and variations can increase intensity. Bench dips can be done by beginners using a bench for support. Advanced practitioners might try ring dips, which require additional balance and activate stabilizing muscles.",
    variations: [
      {
        name: "Bench Dips",
        tutorial: {
          Setup: "Sit on a bench with your hands placed beside your hips. Place your feet flat on the ground, knees bent.",
          Execution: "Lower your body by bending your elbows to 90 degrees, keeping your elbows close to your body. Push back up until your arms are fully extended.",
          Tips: "Keep your shoulders away from your ears and avoid letting your elbows flare out to the sides.",
          Progression: "Start with your feet closer to the bench for easier dips, then gradually extend your legs for more difficulty."
        }
      },
      {
        name: "Ring Dips",
        tutorial: {
          Setup: "Grip the rings with your hands and lift your body off the ground, keeping your arms fully extended.",
          Execution: "Bend your elbows to lower your body, keeping your torso upright. Once your arms are at 90 degrees, press back up to the starting position.",
          Tips: "Keep your core engaged to maintain stability. Control your body throughout the movement to avoid swinging.",
          Progression: "Start with assisted ring dips using a resistance band for support before advancing to unassisted ring dips."
        }
      }
    ]
  },
  {
    id: 3,
    name: "Handstand",
    targetMuscles: ["shoulders", "core"],
    level: "Advanced",
    description: "A handstand is an advanced bodyweight exercise focusing on balance, shoulder strength, and core stability. Starting from a standing or crouched position, the aim is to kick or press your legs overhead and support your weight with your arms, keeping your body aligned and balanced upside down. It can be performed against a wall for beginners, or freestanding for more advanced calisthenics athletes. This movement challenges balance, coordination, and mental focus, as even a slight shift in weight can cause a loss of balance. Practicing handstands enhances shoulder endurance and builds control.",
    variations: [
      {
        name: "Wall Handstand",
        tutorial: {
          Setup: "Stand facing a wall, placing your hands shoulder-width apart on the floor. Kick your legs up into the wall, keeping your body straight.",
          Execution: "Push against the wall with your feet for support, focusing on maintaining balance and core stability.",
          Tips: "Keep your core engaged to avoid arching your back. Practice kicking up gently and gradually build your confidence.",
          Progression: "Gradually work toward freestanding handstands by reducing reliance on the wall."
        }
      },
      {
        name: "Freestanding Handstand",
        tutorial: {
          Setup: "Start by placing your hands on the floor, shoulder-width apart, with your body aligned.",
          Execution: "Kick your legs up into the air, maintaining control of your body as you balance upside down. Engage your core and shoulders to keep stable.",
          Tips: "Use your fingertips to make small adjustments for balance. Keep your body straight and avoid arching your back.",
          Progression: "Work on holding the handstand for longer durations, and try to reduce the use of walls as support."
        }
      }
    ]
  },
  {
    id: 4,
    name: "Plank",
    targetMuscles: ["core"],
    level: "Beginner",
    description: "The plank is an isometric hold that primarily targets the core muscles. Holding a position resembling the top of a push-up, with your arms straight and your body in a straight line from head to heels, the plank targets your abdominals, obliques, and lower back. The goal is to hold the position for as long as possible while maintaining proper form. Planks are essential for building stability and endurance in the core, which is crucial for many other exercises and overall posture.",
    variations: [
      {
        name: "Forearm Plank",
        tutorial: {
          Setup: "Lie face down and place your forearms on the ground, elbows directly beneath your shoulders. Lift your body off the floor, keeping a straight line from your head to your heels.",
          Execution: "Hold this position while engaging your core and glutes to prevent your hips from sagging.",
          Tips: "Keep your neck in a neutral position and avoid looking up. Engage your core muscles to hold the position.",
          Progression: "Start by holding the position for 20 seconds and gradually increase the duration."
        }
      },
      {
        name: "Side Plank",
        tutorial: {
          Setup: "Lie on your side with your elbow directly beneath your shoulder. Stack your feet on top of each other and lift your hips off the floor.",
          Execution: "Maintain a straight body from head to heels, keeping your core tight.",
          Tips: "Keep your hips elevated and avoid letting them sag towards the floor. Add leg raises or hip dips for extra intensity.",
          Progression: "Hold the side plank for longer periods as your strength improves."
        }
      }
    ]
  }
];
