# **📏 Unit Conversion Tool (Metric/Imperial)**

This is a simple, browser-based web application designed to quickly convert values between the Metric (Matric) and Imperial unit systems for Length, Volume, and Mass.

## **✨ Features**

* **Length Conversion:** Meters ↔ Feet  
* **Volume Conversion:** Liters ↔ Gallons  
* **Mass Conversion:** Kilograms ↔ Pounds  
* **Real-time Output:** Provides converted values for all three categories simultaneously based on a single numerical input.  
* **Simple UI:** Clean and straightforward user interface for quick use.

## **🛠️ How to Use**

1. **Enter a Value:** In the input field, type the numerical value you wish to convert (e.g., 20).  
2. **Click Convert:** Press the "Convert" button.  
3. **View Results:** The application instantly calculates and displays the conversion results across all three categories, rounding each conversion to three decimal places.

### **Example Conversion Logic**

If you enter the number 20:

* **Length:** It will show you how many feet are in **20 Meters** AND how many meters are in **20 Feet**.  
* **Volume:** It will show you how many gallons are in **20 Liters** AND how many liters are in **20 Gallons**.  
* **Mass:** It will show you how many pounds are in **20 Kilos** AND how many kilos are in **20 Pounds**.

## **💻 Technical Stack**

The application is built using standard web technologies:

* **HTML:** Provides the basic structure and layout of the converter.  
* **CSS (style.css):** Styles the application for a modern and clean look, using a distinct blue/purple color theme.  
* **JavaScript (script.js):** Handles the core logic:  
  * Reads the user input.  
  * Performs the mathematical unit conversions using hardcoded conversion factors.  
  * Updates the results in the designated output paragraphs (\#p1, \#p2, \#p3).  
  * Includes basic validation to ensure the input is a valid number.

### **Conversion Factors Used:**

| Conversion | Factor |  
| Meter to Feet | x \* 3.2808 |  
| Feet to Meter | x \* 0.3048 |  
| Liter to Gallon | x / 3.785 |  
| Gallon to Liter | x \* 3.785411784 |  
| Kilo to Pounds | x \* 2.20462 |  
| Pound to Kilo | x / 2.20462 |

## **🚀 Running the Project**

To run this project, simply open the index.html file in any web browser. Since all resources (HTML, CSS, JS) are local files, no web server is required.