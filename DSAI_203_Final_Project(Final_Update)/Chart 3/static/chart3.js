am5.ready(function() {

  // Create root element
  var root = am5.Root.new("chartdiv3");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  // Create chart
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    paddingLeft: 0,
    layout: root.verticalLayout
  }));

  // Add scrollbar
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));

  // Fetch data from the Flask API
  fetch('/get-datachart3')
    .then(response => response.json())
    .then(data => {
      // Create axes
      var xRenderer = am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true
      });

      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "Semster_Name",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      xRenderer.grid.template.setAll({
        location: 1
      });

      xAxis.data.setAll(data);

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        numberFormat: "#'%'",
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
      }));

      // Add legend
      var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      }));

      // Add series for each paper
      function createSeries(name, field) {
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          categoryXField: "Semster_Name"
        }));
      
        series.columns.template.setAll({
          tooltipText: "{name}, {categoryX}: {valueY}",
          tooltipY: am5.percent(10)
        });
        
        series.data.setAll(data);
      }

      // Assuming papers are named 'Paper 1', 'Paper 2', etc.
      createSeries("Paper 1", "Paper 1");
      createSeries("Paper 2", "Paper 2");
      createSeries("Paper 3", "Paper 3");
      createSeries("Paper 4", "Paper 4");
      createSeries("Paper 5", "Paper 5");
      createSeries("Paper 6", "Paper 6");
      createSeries("Paper 7", "Paper 7");

      // Animate the chart on load
      chart.appear(1000, 100);
    })
    .catch(error => console.error('Error fetching data:', error));
});
