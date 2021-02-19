# Counting Cookies

## Summary

Counting Cookies is a simple app to help people keep track of their calories throughout the day while keeping their eye on the prize, cookies!

After a user submits their daily calorie goal, they can begin keeping a record of how many calories they consumed for the day along with an update of how many calories they can still consume. Once an item and the item's calories information is submitted, the daily record will update to show the new total.

If the user wants to delete an item from the daily record, the total will update with a new total. The user can also delete a day if they want to forget about their cheat day.

## Install and Run

Please run bundle install for the necessary gems to be installed. Most importantly, this includes Rack-Cors to allow communcation between the backend API and frontend webpage. The GemFile also includes Fast_JsonAPI to allow for easy serialization of the data to be readable in JSON.

In order to start up the backend, make sure the terminal is in the correct directory, Counting_Calories_API. Then run 'rails s' to initialize the backend server. Run "npm start" to allow for the frontend to be displayed, which is currently programmed for the localhost on port:3001 in order for the API to also run. This can be altered in Package.Json if need be.

## Contributing

Pull requests are encouraged on [GitHub](https://github.com/indiejesus2/counting-cookies) as well as any bug reports. This project is intended to be a safe, welcoming space for colloration, and contributors are expected to adhere to the Contributor Covenant Code of Conduct.

## License

This gem is an open source under the terms of the [MIT License](https://github.com/indiejesus2/counting-cookies/blob/main/LICENSE).
