# Interactive-University-Dashboard-
Data Insights Dashboard
This project implements a fully interactive data visualization dashboard built with Python and JavaScript, designed to analyze and explore multiple datasets related to employee performance, student performance, and departmental information. The dashboard provides users with detailed insights and the ability to explore the data through a dynamic and intuitive interface. The project uses Flask for backend processing, amCharts 5 for data visualizations, and various CSV files for data handling.





# Project Structure
The project consists of several key files and directories:
server.py: This script is responsible for handling the backend logic, serving data, and rendering the charts on the frontend.
/static: This directory contains the static files required by the project, such as JavaScript libraries and CSS styles.
/templates: This directory contains the HTML files for rendering the frontend of the dashboard.





# Various CSV Files:
Department_Information.csv
Employee_Information.csv
Student_Counseling_Information.csv
Student_Performance_Data.csv
Student_Performance_Data_Wide_Version.csv






# Server.py
The server.py script serves as the core of the application, providing the backend functionality for loading datasets and rendering visualizations. The script uses Flask to create the web server and handle routes, and it integrates with the frontend to provide users with interactive charts.

Key features:

Dataset Handling: Loads multiple CSV files into pandas DataFrames for easy manipulation.
Chart Integration: Processes data and sends it to the frontend where charts are rendered using JavaScript and the amCharts 5 library.
Routing: Manages the routing for different charts and data views, allowing users to switch between various data visualizations seamlessly.
Data Manipulation: Handles necessary data preprocessing to ensure the information is presented in a clear and concise manner.







# Key Functionalities
Dynamic Data Visualizations:

The project uses amCharts 5 to display interactive and engaging visualizations such as bar charts, pie charts, and line graphs. Users can hover over data points, filter data, and explore various aspects of the datasets.
Data Exploration:

Users can switch between different datasets and explore employee performance, student progress, and departmental information in a user-friendly manner. The visualizations provide detailed insights, allowing users to make data-driven decisions.
Flask Backend:

The project uses a Flask server to process and serve data to the frontend. This allows the application to load large datasets, preprocess them, and deliver the results to the user in a structured format.
Interactive Charts:

The visualizations include features like tooltips, axis zooming, and filtering to provide users with a detailed and dynamic experience. Users can explore trends, compare performance metrics, and examine key data points.
Responsive Design:

The dashboard is designed to be responsive, ensuring a smooth experience across various devices, including desktops, tablets, and smartphones.







# Note
This project is designed for educational and demonstration purposes. While it offers interactive and insightful data visualizations, it is not intended for production use. The project can be extended by adding more datasets, creating new visualizations, or enhancing the user interface for a more polished experience.

