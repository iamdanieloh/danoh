var React = require('react');

var Layout = React.createClass({
  render: function() {
    return (
		<html lang="en">
		  <head>
		    <meta charset="utf-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		    <meta name="viewport" content="width=device-width, initial-scale=1" />
		    <meta name="description" content="Site of the Daniel Oh" />
		    <meta name="author" content="Daniel Oh" />
		    <link rel="icon" href="/images/favicon.ico" />

		    <title>I Am Daniel Oh</title>

          	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
          	<link href='http://fonts.googleapis.com/css?family=Pacifico|Bangers|Playball' rel='stylesheet' />
          	<link rel="stylesheet" href="/stylesheets/cover.css" />
          	<link rel="stylesheet" href="/stylesheets/layout.css" />


        </head>




        <body>
          {this.props.children}



          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        </body>




      </html>
    );
  }
})

module.exports = Layout;