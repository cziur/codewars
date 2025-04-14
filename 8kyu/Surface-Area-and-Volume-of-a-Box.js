// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.


function getSize(width, height, depth) {
    const surfaceArea = 2 * (width * height) + 2 * (width * depth) + 2 * (depth * height)
    const volume = width * height * depth
    return [surfaceArea, volume]
  }