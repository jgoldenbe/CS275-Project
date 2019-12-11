function resetVal() {
    div.innerHTML = '';
    document.getElementById('name').value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('age').value = "";
    document.getElementById('sedentary').selected = true;
}
function calculate() {
    var fullname = document.getElementById('name').value;
    var sex = "";
    var age = document.getElementById('age').value;
    var activelevel = "";
    var calories = 0;
    var breakfast = [];
    var lunch = [];
    var dinner = [];
    var windowObjectReference;
    div = document.getElementById('plan');
    if (/^[A-Za-z\s]+$/.test(document.getElementById('name').value)) {
        if (document.getElementById('male').checked == true) {
            sex = "Male";
        } else if (document.getElementById('female').checked == true) {
            sex = "Female";
        }
        if (document.getElementById('sedentary').selected == true) {
            activelevel = "Sedentary";
        } else if (document.getElementById('moderately-active').selected == true) {
            activelevel = "Moderately Active";
        } else if (document.getElementById('active').selected == true) {
            activelevel = "Active";
        }
        if (sex == "Female" && (age >= 2 && age <= 3)  && activelevel == "Sedentary") {
            calories = 1000;
            breakfast = ["Oatmeal, Apple slices"];
            lunch = ["Carrot soup, Milk"];
            dinner = ["Granola"];
        } else if (sex == "Female" && (age >= 4 && age <= 8)  && activelevel == "Sedentary") {
            calories = 1200;
            breakfast = ["Bagel, Apple slices", "Oatmeal cookies",  "Yogurt Smoothie", "Banana Pudding"];
            lunch = ["Pork, Tuna Salad", ];
            dinner = ["Chicken and broccoli, Whole milk"];
        } else if ((sex == "Female" && (age >= 9 && age <= 13)  && activelevel == "Sedentary") || (sex == "Female" && age >= 51 && activelevel == "Sedentary") || (sex == "Female" && (age >= 4 && age <= 8) && activelevel == "Moderately Active")) {
            calories = 1600;
            breakfast = ["Peanut butter banana toast", "Coconut muffin", "Chocolate chips cookies"];
            lunch = ["Ham sandwich", "Cheesy Potato Salad", "Thai Curry Soup", "Sesame Noodle"];
            dinner = ["Chicken spinach salad, Ice cream", "Tomato Basil Soup", "Cabbage and Smoked Sausage Pasta", "Roasted Tomato Soup"];
        } else if ((sex == "Female" && (age >= 9 && age <= 18)  && activelevel == "Sedentary") || (sex == "Female" && (age >= 31 && age <= 50)  && activelevel == "Sedentary") || (sex == "Female" && (age >= 51)  && activelevel == "Moderately Active") || (sex == "Male" && (age >= 14 && age <= 18)  && activelevel == "Sedentary")) {
            calories = 1800;
            breakfast = ["Bacon, Strawbery yogurt", "Oatmeal cup", "Granola bar", "Chocolate chips muffin", "Fruit salad"];
            lunch = ["Sausage, Red pepper soup", "Roasted Cauliflower Soup", "Steak and Noodle Bowl", "Chicken Salad", "Fried chicken", "Baked Mac and Cheese", "Mandarin Chicken Pasta"];
            dinner = ["Sweet potato fries, Beef pasta, salad", "Noodles and Shredded Vegetables", "Steak Soup", "Parmesan and Basil Chicken Salad"];
        } else if ((sex == "Female" && (age >= 14 && age <= 18)  && activelevel == "Moderately Active") || (sex == "Female" && (age >= 19 && age <= 30)  && activelevel == "Sedentary") || (sex == "Female" && (age >= 31 && age <= 50)  && activelevel == "Moderately Active") || (sex == "Male" && (age >= 51)  && activelevel == "Sedentary")) {
            calories = 2000;
            breakfast = ["2 Banana Oatmeal", "Bread Oatmeal", "Apple pie", "Fruit salad"];
            lunch = ["Lemon peper tuna, 2 Carrots servings", "Steak and Noodle Bowl, Steak and Noodle Bowl", "Lemon Chicken Soup, Lemon Salmon Burgers", "2 Parmesan Brussels Sprouts", "2 Roasted Cauliflower Soup"];
            dinner = ["Pork chops, Strawberry toast"];
        } else if ((sex == "Female" && (age >= 31 && age <= 50)  && activelevel == "Active") || ((sex == "Male" && (age >= 14 && age<=18) && activelevel == "Sedentary")) || ((sex == "Male" && (age >= 31 && age<=50) && activelevel == "Sedentary")) || (sex == "Female" && (age >= 19 && age <= 30)  && activelevel == "Moderately Active")) {
            calories = 2200;
            breakfast = ["Cottage cheese, Yogurt", "Blueberry muffin", "Tofu scramble", "Strawberry waffle"];
            lunch = ["2 Omelette with cheese, chocolate pudding", "3 Sausage Egg Rolls", "2 Skillet Burrito Bowls", "2 Pad Thai Salad", "2 Thai Curry Noodle Bowls"];
            dinner = ["2 Chicken bagaels, 2 Green bean servings, Grapes fruit", "2 Sweet Potato Bowls", "2 Beef and Broccoli Noodle Bowls", "2 Teriyaki Chickens"];
        } else if ((sex == "Female" && (age >= 14 && age <= 18)  && activelevel == "Active") || ((sex == "Female" && (age >= 19 && age<=30) && activelevel == "Active")) || ((sex == "Male" && (age >= 19 && age<=30) && activelevel == "Sedentary")) ||(sex == "Male" && age > 50 && activelevel == "Moderately Active")) {
            calories = 2400;
            breakfast = ["2 Spinach, pepper, tomato scramble on toast", "2 Strawberry banana Smoothies", "Granola Bar", "Scrambled eggs"];
            lunch = ["2 Almond butter sandwich, Banana", "Lemon Salmon Burgers", "Lemon Chicken Soup, Grilled peanut butter", "2 Chicken Salad"];
            dinner = ["Mozzarella grilled cheese, 2 steam broccoli", "Egg drop soup, Steak and Noodle Bowl", "2 Korean Ground Beef Bowls", "2 Pad Thai Quinoa bowls", "Grilled Shrimp Rice Noodle, Fried chicken"];
        } else if ((sex == "Male" && (age >= 9 && age <= 13) && activelevel == "Active") || (sex == "Male" && (age >= 31 && age <= 50) && activelevel == "Moderately Active")) {
            calories = 2600;
            breakfast = ["2 Scrambled eggs with pepper", "2 Nut butter toast", "2 Banana Smoothie"];
            lunch = ["2 Tuna wraps", "Roasted Cauliflower Soup, Hot Dog Chili", "Turkey Carcass Soup, Mandarin Chicken Pasta Salad", "Chicken Club Pasta Salad, Grilled Chicken", "2 Stromboli, Cheesy Potato Salad"]
            dinner = ["2 Smoked sausage with pepper", "Thai Curry Soup, Lasagna", "2 Sesame Noodle", "2 Gourmet Chicken Sandwiches", "Baked Mac and Cheese, Parmesan Brussels Sprouts"]
        } else if ((sex == "Male" && (age >= 14 && age <= 30) && activelevel == "Moderately Active") || (sex == "Male" && (age > 50) && activelevel == "Active")) {
            calories = 2800;
            breakfast = ["2 Vanilla banana milkshake", "2 Pumpkin Granola Yogurt Parfait", "Ham and Cheese Quinoa Cups"];
            lunch = ["2 Cottage cheese with tuna, 2 banana ice cream"];
            dinner = ["2 Grilled steak with pepper, coconut yogurt"];
        } else if (sex == "Male" && (age >= 19 && age <= 50) && activelevel == "Active") {
            calories = 3000;
            breakfast = ["2 Oregano eggs, 2 fruit salad", "3 Sausage and Egg Casserole", "2 Cheesy Spinach Baked Eggs"];
            lunch = ["2 Barbecue tuna sandwich, yogurt and strawberry", "2 Italian Bean Soups, Tuna salad", "Zuppa Toscana, Chicken salad", "Chicken Fried Steak, Egg drop soup"];
            dinner = ["3 Balsamic chicken with spinach", "BBQ Chicken, 2 Sausage, Potato and Kale Soups", "Cucumber Sandwich, Lemon Salmon Burgers", "2 Parmesan Brussels Sprouts, Margarita Grilled Shrimp"];
        } else if (sex == "Male" && (age >= 14 && age <= 18) && activelevel == "Active") {
            calories = 3200;
            breakfast = ["2 Oatmeal cheese pancake, 2 buttered toast", "2 Chocolate Quinoa Bowls, Chocolate Peanut Butter Granola"];
            lunch = ["2 Corn tuna salad, 2 peanut butter and celery", "Noodles and Shredded Vegetables", "2 Grilled Chikens", "2 Mandarin Chicken Pasta Salad"];
            dinner = ["2 Ham and cheese sandwiches, toast with tomato and hummus", "2 Chicken Sandwiches, Panzanella Salad", "Spicy Grilled Cheese Sandwich, Turkish Chicken Kebabs", "Sweet Potato, Spinach, and Halloumi Curry"];
        }
        
        div.innerHTML = '<h2>Your Plan:</h2> <table><tr><td>Name: </td><td>' + fullname + '</td></tr><tr><td>Sex: </td><td>' + sex + '</td></tr><tr><td>Age: </td><td>' + age + '</td></tr><tr><td>Active Level: </td><td>' + activelevel + '</td></tr><tr><td>Calories Needed: </td><td>' + calories + '</td></tr></table><hr></hr><table><tr><td>Day 1: </td><td>Monday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td></tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td></tr></table><hr></hr><table><tr><td>Day 2: </td><td>Tuesday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td></tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td></tr></table><hr></hr><table><tr><td>Day 3: </td><td>Wednesday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td></tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td></tr></table><hr></hr><table><tr><td>Day 4: </td><td>Thursday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td></tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td></tr></table><hr></hr><table><tr><td>Day 5: </td><td>Friday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td> </tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td> </tr></table><hr></hr><table><tr><td>Day 6: </td><td>Saturday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td></tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td></tr></table><hr></hr><table><tr><td>Day 7: </td><td>Sunday</td></tr><tr><td>Breakfast: </td><td>' + randommeal(breakfast) + '</td></tr><tr><td>Lunch: </td><td>' + randommeal(lunch) + '</td></tr><tr><td>Dinner: </td><td>' + randommeal(dinner) + '</td></tr><tr><td>Calories: </td><td>' + calories + '</td></tr></table><hr></hr>';
    
    }
        //alert(fullname + " " + sex + " " + age + " " + activelevel + " " + calories);
     else {
        alert("Invalid name! Please re-enter name and try again.")
    }
}
function randommeal(meal){
    return meal[Math.floor(Math.random()*meal.length)];
}
