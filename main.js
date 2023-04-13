    //Fetch Block
    function updateChart(){
        async function fetchJSON() {
          const url = 'http://127.0.0.1:5500/archivos.json';
          const response = await fetch(url);
          const datapoints = await response.json();
          console.log(datapoints);
          return datapoints;
      };
  
      fetchJSON().then(datapoints => {
          const longitud_latitud = datapoints.report.map(function(index) {
              return index.longitud_latitud;
          });
          myChart.config.data.labels = longitud_latitud;
          myChart.update();
      });
  
      fetchJSON().then(datapoints => {
          const humedad = datapoints.report.map(function(index) {
              return index.humedad;
          });
          myChart.config.data.datasets[0].data = humedad;
          myChart.update();
      });
      };
   
  
      // setup 
      const data = {
        
        datasets: [{
          label: 'Humedad vs Longitud_latitud',
          
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  
      // Instantly assign Chart.js version
      const chartVersion = document.getElementById('chartVersion');
      chartVersion.innerText = Chart.version;