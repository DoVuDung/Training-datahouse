const csv = require('csvtojson');
const fs = require('fs');
const csvFilePath = './input.csv';


csv()
	.fromFile(csvFilePath)
	.then((jsonObj) => {
	
		const [date] = [jsonObj];
		
		const fullName = date[0].first_name + " " + date[0].last_name;
		const dateOfBirth = date[0].date_of_birth.split("/");

		let month = dateOfBirth[0];
		let day = dateOfBirth[1];
		let year = dateOfBirth[2];

		switch (month) {
			case 1:
				month = 'Jan';
				break;
			case 2:

				month = 'Feb';
				break;
			case 3:

				month = 'Mar';
				break;
			case 4:

				month = 'Apr';
				break;
			case 5:

				month = 'May';
				break;
			case 6:

				month = 'Jun';
				break;
			case 7:

				month = 'Jul';
				break;
			case 8:

				month = 'Aug';
				break;
			case 9:
				month = 'Sep';
				break;
			case 10:
				month = 'Oct';
				break;
			case 11:
				month = 'Nov';
				break;

			default:
				month = 'Dec';
				break;
		}

		const writeObj = {
			'fullName': fullName,
			'dateOfBirth': day + "-" + month + "-" + year
		}

		fs.writeFile("output.json", JSON.stringify(writeObj), 'utf-8', function (err) {
			if (err) {
				console.log("An error occured while writing JSON Object to File.");
				return console.log(err);
			}

			console.log("JSON file has been saved.");
		})
	})