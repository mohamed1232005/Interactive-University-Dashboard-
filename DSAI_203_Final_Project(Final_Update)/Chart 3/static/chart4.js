function fetchDataAndUpdateChart4() {
  fetch('/get-datachart4')
    .then(response => response.json())
    .then(data => {
      updateChart4(data);
    })
    .catch(error => console.error('Error:', error));
}

function updateChart4(data_df) {
  am5.ready(function() {

    // Create root element
    var root = am5.Root.new("chartdiv4");

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    // Add Scrollbar for controlling chart view
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"  // Horizontal scrollbar at the bottom
    }));

    // Create X-axis (Department Names)
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "Department_Name",
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
      })
    }));

    // Create Y-axis (Year of Establishment)
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 1940,  // Adjust minimum year based on your dataset
      max: 2020,  // Adjust maximum year based on your dataset
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    // Create the line series
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "DOE",  // Year of establishment
      categoryXField: "Department_Name",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    series.strokes.template.setAll({
      strokeWidth: 2
    });

    series.bullets.push(function() {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill")
        })
      });
    });

    // Set data for X-axis and series
    xAxis.data.setAll(data_df);
    series.data.setAll(data_df);

    // Add a cursor for better user experience
    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: yAxis
    }));

    // Add chart animation
    series.appear(1000);  // Animation for series
    chart.appear(1000, 100);  // Animation for chart
  }); // end am5.ready()
}

// Fetch and update chart when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchDataAndUpdateChart4();
});
