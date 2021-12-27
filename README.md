# Module 12 JS, HTML and JSON Data: Plotly &amp; Belly Button Biodiversity

We have a completed panel for demographic information and now need to visualize the bacterial data for each volunteer. Specifically, we should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, these volunteers will be able to identify whether that species is found in their navel.

Challenge 12 focused on building an interactive webpage with sample demographic data and visualization of the bacterial data present within the belly button for each volunteer whose records can be accessed by Volunteer ID number. The top ten bacterial cultures are included as a bar chart while the rest of the bacterial cultures per sample are plotted as a bubble plot. A graphic is also shown for frequency of belly button washing per week for each volunteer. The data and plots automatically update with choosing a different ID number.

Each dataset can be accessed by Volunteer ID number and gives the following information with each selection. When selected a drop down menu of different IDs appear which can be selected to change the visualisations of the respective ID number.

<img width="163" alt="Screenshot 2021-12-27 at 15 46 49" src="https://user-images.githubusercontent.com/87828174/147506367-eab8eb3e-de57-4ae8-8c1e-77839fb22bb9.png">

## Deliverable 1: Create a Horizontal Bar Chart
Given the sample dataset of Volunteer ID 940. The y values are the otu_ids in descending order. The x values are the sample_values in descending order. The hover text is the otu_labels. The graph shows the top ten sample values in descending order with OTU IDs as labels. 

When hovering the mouse on the bar we see a descriptive label.

<img width="459" alt="Screenshot 2021-12-27 at 15 47 07" src="https://user-images.githubusercontent.com/87828174/147508921-911f6d6b-e805-4420-ae74-afc8157e5cd4.png">

## Deliverable 2: Create a Bubble Chart
Using JavaScript, Plotly, and D3.js, we create a bubble chart that displays the following when an individual’s ID is selected from the dropdown menu webpage:

- The otu_ids as the x-axis values.
- The sample_values as the y-axis values.
- The sample_values as the marker size.
- The otu_ids as the marker colors.
- The otu_labels as the hover-text values.

When hovering the mouse on the bubble we see a descriptive label.

<img width="1001" alt="Screenshot 2021-12-27 at 15 47 35" src="https://user-images.githubusercontent.com/87828174/147509042-eac130cd-33b9-451a-9356-1fcd4db5f0a8.png">

## Deliverable 3: Create a Gauge Chart
We create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu. The indicator shows the level for the washing frequency on the gauge.

<img width="497" alt="Screenshot 2021-12-27 at 15 47 15" src="https://user-images.githubusercontent.com/87828174/147509242-3d6c1134-ccac-4cc4-b12d-61fa375e02b3.png">

## Deliverable 4: Customize the Dashboard
We customize the web page for it to be visibly appealing and when the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and all three charts work according to the requirements when a sample is selected from the dropdown menu. The web page is in Github Pages for this repository and can be accessed with this link: 

      https://taimuri99.github.io/
      
Here is how the webpage looks:

<img width="1440" alt="Screenshot 2021-12-27 at 16 52 41" src="https://user-images.githubusercontent.com/87828174/147509526-d23351f4-f6fd-4f41-b186-dc6ee721ae3b.png">
<img width="1440" alt="Screenshot 2021-12-27 at 16 52 51" src="https://user-images.githubusercontent.com/87828174/147509529-5e45f6d2-58c7-48c1-bfcb-762bff978972.png">
