const mysql = require('mysql');
const inquirer = require('inquirer');
const Product = require('./product.js');
const connection = require('./database');

connection.connect(function (err) {
    if (err) console.log(err);
    console.log(`Connected as ID ${connection.threadId}\n`);
    menu();
});

// Menu options
function menu() {

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'Welcome! Please select from the following options: ',
                choices: ['View Available Products', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Exit']
            }
        ]).then(function (response) {

            if (response.menu === 'View Available Products') {
                // This will list available items 
                displayAll(function (err, products) {
                    if (err) console.log(err);
                    console.log(products);
                    menu();
                });

            } else if (response.menu === 'View Low Inventory') {
                // List all items where inventory is less than 5
                displayLowInventory(function (err, products) {
                    if (err) console.log(err);
                    console.log(products);
                    menu();
                });

            } else if (response.menu === 'Add to Inventory') {
                // Prompt to let the manager add more of any item currently in the store
                inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'selectItem',
                            message: 'Which item you would you like to restock?',
                            choices: ['', '', '', '', '', '', '', '', '', '']
                        }
                    ]).then(function (selectedItem) {

                    });

            } else if (response.menu === 'Add New Product') {
                // Allow manager to add completely new product to store
                const newProduct = Product(name, department, price, stock);

            } else {
                console.log('You have exited the program.');
            }
        });
}

function displayAll(callback) {
    connection.query(`
    SELECT item_id, product_name, price, stock_quantity 
    FROM products
    `, callback);
}

function displayLowInventory(callback) {
    connection.query(`
    SELECT item_id, product_name, stock_quantity
    FROM products
    WHERE stock_quantity < 5
    `, callback);
}