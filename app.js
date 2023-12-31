// const carLightsContainer = document.getElementById("car-lights");
// const carLightsContainerRed = document.getElementById("red-light");
// const leftDiv = document.getElementById("left-div");


// const carLights = [];
// const carRedLights = [];

// const text = "constcar!@#$%^&*()_+{}|:<>?/;";
// index = 0;

// function makeLight(className) {
//   for (let i = 0; i < 10; i++) {
//     const carLight = document.createElement("div");
//     carLight.classList.add(className);
//     carLight.style.top = "0";
//     carLight.style.left = `${Math.random() * 100}%`;
//     carLight.style.opacity = "0";
//     carLight.style.width = "50px"; // Set initial size
//     carLight.style.height = "50px"; // Set initial size
//     carLightsContainer.appendChild(carLight);
//     carLights.push({
//       element: carLight,
//       speed: Math.random() * 0.005 + 0.001,
//       scale: Math.random() * 0.5 + 0.5,
//       size: 100, // Add size property
//     });
//   }
// }

// function shiftText(item, index) {
//   index = index % text.length;
//   item.textConent = item.textConent + text[index];
//   console.log("item.textConent", item.textConent);
// }

// function animate() {
//   frame++;
//   makeLight("car-light");
//   if (carLights.length > 100) {
//     carLights.shift();
//   }
//   carLights.forEach((light) => {
//     const rect = light.element.getBoundingClientRect();
//     index++;
//     // shiftText(light, index);

//     if (rect.top > window.innerHeight) {
//       light.element.style.top = "0";
//       light.element.style.opacity = "0";
//       light.speed = Math.random() * 0.005 + 0.001;
//       light.scale = Math.random() * 0.5 + 0.5;
//       light.size = 50; // Reset size
//     } else {
//       light.element.style.top = `${
//         rect.top + light.speed * window.innerHeight
//       }px`;
//       light.element.style.opacity = Math.min(
//         light.scale,
//         rect.top / window.innerHeight
//       );
//       light.size += light.speed * 100; // Increase size
//       light.element.style.width = `${light.size}px`; // Apply new size
//       light.element.style.height = `${light.size}px`; // Apply new size
//     }
//   });
//   animate2();

//   requestAnimationFrame(animate);
// }

// function makeLight_left(className) {
//   const carLight = document.createElement("div");
//   carLight.classList.add(className);
//   carLight.style.position = "absolute";
//   carLight.style.bottom = "0px"; // Start from the bottom
//   carLight.style.left = Math.floor(Math.random() * 45) + "%";
//   carLight.style.width = "10px"; // Size of the light
//   carLight.style.height = "10px";
//   carLight.style.backgroundColor = "red"; // Ensure light is red and visible
//   carLight.style.opacity = "1";
//   leftDiv.appendChild(carLight); // Append to leftDiv
//   carRedLights.push({
//     element: carLight,
//     speedX: 1, // Horizontal speed
//     speedY: 1, // Vertical speed
//   });
// }

// let frame = 0;
// function animate2() {
//   if(frame % 100 === 0)
//     makeLight_left("red-light2");
  
//     carRedLights.forEach((light) => {
//     //   let bottomValue = parseInt(light.element.style.bottom, 10);
//     //   let leftValue = parseInt(light.element.style.left, 10);
  
//     //   light.speedX = 1;
//     //   light.speedY = 3; // Adjust the vertical speed
//     //   light.element.style.position = "fixed";
  
//     //   light.element.style.bottom = `${bottomValue + light.speedY * 2}px`;
//     //   light.element.style.left = `${leftValue - light.speedX}px`;
  
//     //   // Adjust the rate of fading and shrinking
//     //   let fadeRate = 0.005; // Smaller value for slower fading
//     //   let sizeReductionRate = 0.1; // Smaller value for slower shrinking
  
//     //   // Calculate new opacity and size
//     //   let newOpacity = Math.max(0, parseFloat(light.element.style.opacity) - fadeRate);
//     //   let newSize = Math.max(10, parseInt(light.element.style.width, 10) - sizeReductionRate);
  
//     //   // Apply new opacity and size
//     //   light.element.style.opacity = newOpacity;
//     //   light.element.style.width = `${newSize}px`;
//     //   light.element.style.height = `${newSize}px`;
  
//     //   // Reset the light when it goes off-screen
//     //   if (bottomValue > window.innerHeight || leftValue < 0) {
//     //     light.element.style.bottom = "0px";
//     //     light.element.style.left = `${Math.random() * 100}%`;
//     //     light.element.style.opacity = "1";
//     //     light.element.style.width = "40px";
//     //     light.element.style.height = "40px";
//     //   }
//     });
// }

// // Start the animation
// animate();
