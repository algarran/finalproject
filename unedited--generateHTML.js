module.exports = {

    generateHTML: function (data) {
      return `<!DOCTYPE html>
  <html lang="en">
     <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css">
     <link href="stylesheets/style2.css" rel="stylesheet">
     <title>NJS Roofing Contract PDF</title>
        <style>
           
        </style>

        </head>
     <body>
     <header>
     <img src="NJS-header.jpg">
   </header>
   <div class="wrapper"></div>
   <!-- <div class="photo-header"> -->
   <!-- <main> -->
   <div class="container">
     <div class="row">
       <h1>NJS Roofing Contract</h1>
     </div>
     <div><button onclick="myFunction()">Print</button>
       <script>
         function myFunction() {
           window.print();
         }
       </script>
     </div>
   </div>
   <div class="row">
     <table style="width:100%">
       <tr>
         <th>Name</th>
         <th colspan="2">Telephone</th>
       </tr>
       <tr>
         <td></td>
         <td></td>
         <td></td>
       </tr>
       <th>Name</th>
       <th colspan="2">Telephone</th>
     </table>
     </body>
  </html>`;
    }
}