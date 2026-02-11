/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let total = 0;

  // 1️
  if (size === "small") total = 3.0;
  else if (size === "medium") total = 4.0;
  else if (size === "large") total = 5.0;
  else return -1; // invalid size

  // 2️
  if (type === "regular") total += 0;
  else if (type === "latte") total += 1.0;
  else if (type === "cappuccino") total += 1.5;
  else if (type === "mocha") total += 2.0;
  else return -1; // invalid type

  // 3️
  if (extras.whippedCream === true) {
    total += 0.5;
  }

  if (extras.extraShot === true) {
    total += 0.75;
  }

  // 4️ return result
  return Number(total.toFixed(2));
}
