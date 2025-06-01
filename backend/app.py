from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


food_db = {
    'indian': {
        'muscle gain': {
            'vegetarian': ['Paneer Bhurji with Roti', 'Mixed Lentil Dosa', 'Protein-Rich Chickpea Curry'],
            'non-vegetarian': ['Chicken Breast Tikka', 'Egg Bhurji with Rice', 'Fish Curry with Brown Rice'],
            'vegan': ['Tofu Bhurji', 'Soybean Curry with Brown Rice', 'Vegan Protein Dal with Quinoa']
        },
        'weight gain': {
            'vegetarian': ['Aloo Paratha with Butter', 'Paneer Butter Masala', 'Vegetable Pulao with Raita'],
            'non-vegetarian': ['Butter Chicken with Naan', 'Egg Curry with Rice', 'Mutton Korma'],
            'vegan': ['Avocado Roti Wrap', 'Banana Peanut Smoothie Bowl', 'Chickpea & Sweet Potato Curry']
        },
        'weight loss': {
            'vegetarian': ['Lauki Soup', 'Cabbage Stir Fry', 'Moong Dal Khichdi'],
            'non-vegetarian': ['Grilled Chicken Salad', 'Boiled Egg Whites', 'Steamed Fish with Veggies'],
            'vegan': ['Zucchini Sabzi', 'Lentil Soup', 'Steamed Veggie Bowl']
        },
        'fat loss': {
            'vegetarian': ['Keto Paneer Stir Fry', 'Low Fat Palak Soup', 'Cucumber Salad'],
            'non-vegetarian': ['Boiled Chicken & Greens', 'Egg White Omelet', 'Grilled Fish with Veggies'],
            'vegan': ['Tofu Veggie Wrap', 'Broccoli Soup', 'Kale Chana Salad']
        },
        'low calorie': {
            'vegetarian': ['Oats Chilla', 'Vegetable Soup', 'Boiled Moong Salad'],
            'non-vegetarian': ['Chicken Clear Soup', 'Steamed Fish with Herbs', 'Egg White Sandwich'],
            'vegan': ['Carrot Ginger Soup', 'Lettuce Wraps with Tofu', 'Fruit Salad Bowl']
        },
        'normal': {
            'vegetarian': ['Dal Tadka with Rice', 'Veg Biryani', 'Paneer Bhurji with Roti'],
            'non-vegetarian': ['Chicken Curry with Rice', 'Egg Masala with Paratha', 'Fish Fry with Lemon Rice'],
            'vegan': ['Lentil Dal with Brown Rice', 'Soy Chunks Masala', 'Tofu Stir Fry']
        }

        
    },
    'chinese': {
        'muscle gain': {
            'vegetarian': ['Tofu Stir Fry', 'Edamame Fried Rice', 'Broccoli Manchurian'],
            'non-vegetarian': ['Kung Pao Chicken', 'Egg Fried Rice', 'Steamed Fish in Soy Sauce'],
            'vegan': ['Schezwan Tofu Noodles', 'Vegan Dumplings', 'Spicy Veg Stir Fry']
        },
        'weight gain': {
            'vegetarian': ['Hakka Noodles', 'Chili Paneer Gravy', 'Manchurian Fried Rice'],
            'non-vegetarian': ['Sweet & Sour Chicken', 'Chicken Hakka Noodles', 'Egg Chowmein'],
            'vegan': ['Soy Sauce Tofu Stir Fry', 'Vegan Fried Rice', 'Vegetable Spring Rolls']
        },
        'weight loss': {
            'vegetarian': ['Boiled Veg Soup', 'Tofu Cabbage Rolls', 'Steamed Veggies'],
            'non-vegetarian': ['Clear Chicken Soup', 'Boiled Egg Soup', 'Grilled Fish'],
            'vegan': ['Lettuce Wraps', 'Steamed Dumplings', 'Broccoli Tofu Stir Fry']
        },
        'fat loss': {
            'vegetarian': ['Stir Fried Mushrooms', 'Cabbage Noodle Soup', 'Tofu Veg Stir Fry'],
            'non-vegetarian': ['Egg White Stir Fry', 'Chicken Lettuce Wraps', 'Steamed Shrimp Salad'],
            'vegan': ['Soybean Veggie Stir Fry', 'Tofu Bok Choy Bowl', 'Celery Soup']
        },
        'low calorie': {
            'vegetarian': ['Vegetable Soup', 'Tofu Noodle Bowl', 'Steamed Spinach Dumplings'],
            'non-vegetarian': ['Chicken Clear Soup', 'Grilled Chicken with Veggies', 'Egg Broccoli Wrap'],
            'vegan': ['Veggie Stir Fry', 'Zucchini Noodles with Tofu', 'Sautéed Bok Choy']
        },
        'normal': {
            'vegetarian': ['Veg Fried Rice', 'Spring Rolls', 'Manchurian'],
            'non-vegetarian': ['Chicken Manchurian', 'Egg Fried Noodles', 'Sweet Chili Fish'],
            'vegan': ['Schezwan Veggies', 'Tofu Chowmein', 'Vegan Fried Dumplings']
        }
    },
    'italian': {
        'muscle gain': {
            'vegetarian': ['Whole Wheat Pasta with Chickpeas', 'Ricotta Cheese Lasagna', 'Vegetable Risotto'],
            'non-vegetarian': ['Grilled Chicken Pasta', 'Tuna Spaghetti', 'Egg Frittata'],
            'vegan': ['Vegan Protein Pasta', 'Tofu Pizza', 'Chickpea Caesar Salad']
        },
        'weight gain': {
            'vegetarian': ['Cheese Ravioli', 'Pesto Pasta with Pine Nuts', 'Creamy Mushroom Lasagna'],
            'non-vegetarian': ['Chicken Alfredo Pasta', 'Meatball Marinara', 'Bacon Mac & Cheese'],
            'vegan': ['Avocado Pasta', 'Vegan Lasagna', 'Nutty Spinach Spaghetti']
        },
        'weight loss': {
            'vegetarian': ['Zucchini Pasta', 'Tomato Basil Soup', 'Steamed Veggie Bowl'],
            'non-vegetarian': ['Grilled Chicken Salad', 'Baked Fish Fillet', 'Eggplant Rollatini'],
            'vegan': ['Cauliflower Pizza', 'Lentil Soup', 'Tofu Tomato Pasta']
        },
        'fat loss': {
            'vegetarian': ['Low Carb Cauliflower Gnocchi', 'Tomato Bruschetta', 'Green Bean Salad'],
            'non-vegetarian': ['Chicken Salad', 'Egg White Omelet with Veggies', 'Lean Turkey Pasta'],
            'vegan': ['Vegan Caprese Salad', 'Roasted Veggie Bowl', 'Spinach Mushroom Pasta']
        },
        'low calorie': {
            'vegetarian': ['Tomato Soup', 'Grilled Veggie Panini', 'Minestrone Soup'],
            'non-vegetarian': ['Chicken Zoodle Soup', 'Tuna Veggie Wrap', 'Egg Salad Sandwich'],
            'vegan': ['Zoodle Bowl with Tofu', 'Vegan Minestrone', 'Steamed Broccoli Pasta']
        },
        'normal': {
            'vegetarian': ['Cheese Pizza', 'Pasta Alfredo', 'Mushroom Risotto'],
            'non-vegetarian': ['Chicken Pizza', 'Meatball Pasta', 'Fish Risotto'],
            'vegan': ['Vegan Pizza', 'Tofu Lasagna', 'Pasta Primavera']
        }
    },

        'mexican': {
        'muscle gain': {
            'vegetarian': ['Black Bean Burrito Bowl', 'Tofu Tacos', 'Cheese Enchiladas'],
            'non-vegetarian': ['Grilled Chicken Fajitas', 'Beef Burrito', 'Egg Quesadilla'],
            'vegan': ['Quinoa Avocado Bowl', 'Vegan Bean Tacos', 'Tofu Enchiladas']
        },
        'weight gain': {
            'vegetarian': ['Cheese Nachos', 'Churros with Chocolate Sauce', 'Creamy Veg Quesadillas'],
            'non-vegetarian': ['Chicken Enchiladas with Cheese', 'Loaded Beef Nachos', 'Egg Tacos with Salsa'],
            'vegan': ['Refried Bean Burrito', 'Guacamole Tostadas', 'Sweet Potato Tacos']
        },
        'weight loss': {
            'vegetarian': ['Grilled Veggie Tacos', 'Black Bean Lettuce Wraps', 'Zucchini Nachos'],
            'non-vegetarian': ['Chicken Lettuce Tacos', 'Fish Ceviche', 'Grilled Chicken Salad'],
            'vegan': ['Veggie Burrito Bowl', 'Tofu Lettuce Tacos', 'Low-Cal Bean Soup']
        },
        'fat loss': {
            'vegetarian': ['Roasted Corn Salad', 'Low-Fat Veggie Wraps', 'Cauliflower Tacos'],
            'non-vegetarian': ['Grilled Shrimp Tacos', 'Boiled Egg Salsa Bowl', 'Chicken Bean Salad'],
            'vegan': ['Tofu Avocado Wrap', 'Spicy Veg Soup', 'Zucchini Bean Stir Fry']
        },
        'low calorie': {
            'vegetarian': ['Cabbage Tacos', 'Corn Soup', 'Grilled Veg Burrito'],
            'non-vegetarian': ['Chicken Veg Wrap', 'Egg Salad Tacos', 'Fish Soup'],
            'vegan': ['Chickpea Tacos', 'Lentil Salsa Bowl', 'Steamed Bean Salad']
        },
        'normal': {
            'vegetarian': ['Veg Quesadilla', 'Nachos with Beans', 'Chili Corn Carne'],
            'non-vegetarian': ['Chicken Tacos', 'Beef Burrito', 'Egg Nachos'],
            'vegan': ['Vegan Quesadilla', 'Tofu Burrito Bowl', 'Black Bean Soup']
        }
    },
    'japanese': {
        'muscle gain': {
            'vegetarian': ['Tofu Miso Soup', 'Vegetable Sushi Roll', 'Rice with Edamame'],
            'non-vegetarian': ['Grilled Salmon Teriyaki', 'Chicken Udon Noodles', 'Egg Sushi'],
            'vegan': ['Avocado Sushi Rolls', 'Miso Tofu Stir Fry', 'Soy Ramen Bowl']
        },
        'weight gain': {
            'vegetarian': ['Fried Rice with Veggies', 'Cheesy Ramen', 'Tempura Veggies'],
            'non-vegetarian': ['Pork Katsu Curry', 'Egg Fried Rice', 'Chicken Yakitori'],
            'vegan': ['Fried Tofu Rice Bowl', 'Veg Tempura Ramen', 'Sweet Soy Noodles']
        },
        'weight loss': {
            'vegetarian': ['Clear Veg Soup', 'Rice Balls with Seaweed', 'Steamed Veg Sushi'],
            'non-vegetarian': ['Grilled Fish with Rice', 'Boiled Egg Soup', 'Chicken Veg Bowl'],
            'vegan': ['Zucchini Miso Soup', 'Tofu Noodle Soup', 'Steamed Edamame']
        },
        'fat loss': {
            'vegetarian': ['Seaweed Salad', 'Low-Sodium Tofu Soup', 'Broccoli Rice Bowl'],
            'non-vegetarian': ['Fish Salad', 'Egg White Sushi', 'Chicken Miso Soup'],
            'vegan': ['Clear Miso Soup', 'Steamed Bok Choy', 'Tofu & Cabbage Rolls']
        },
        'low calorie': {
            'vegetarian': ['Miso Soup', 'Veg Sushi', 'Steamed Veggies'],
            'non-vegetarian': ['Grilled Chicken Yakitori', 'Fish Clear Soup', 'Boiled Egg Rice'],
            'vegan': ['Zucchini Sushi', 'Tofu Salad Bowl', 'Lettuce Wrap Maki']
        },
        'normal': {
            'vegetarian': ['Veg Tempura', 'Udon Noodles', 'Tofu Rice Bowl'],
            'non-vegetarian': ['Chicken Sushi', 'Salmon Ramen', 'Egg Fried Rice'],
            'vegan': ['Tofu Noodles', 'Soy Ramen', 'Veggie Sushi Rolls']
        }
    },
    'thai': {
        'muscle gain': {
            'vegetarian': ['Tofu Green Curry', 'Veg Pad Thai', 'Peanut Veg Bowl'],
            'non-vegetarian': ['Chicken Thai Curry', 'Prawn Stir Fry', 'Egg Fried Rice'],
            'vegan': ['Soy Tofu Thai Bowl', 'Vegan Peanut Pad Thai', 'Vegetable Red Curry']
        },
        'weight gain': {
            'vegetarian': ['Coconut Milk Thai Curry', 'Sticky Rice with Mango', 'Veg Spring Rolls'],
            'non-vegetarian': ['Fried Chicken with Rice', 'Egg Pad Thai', 'Shrimp Fried Rice'],
            'vegan': ['Sweet Coconut Veg Curry', 'Fried Tofu Rolls', 'Peanut Noodle Bowl']
        },
        'weight loss': {
            'vegetarian': ['Clear Veg Soup', 'Lemongrass Tofu Bowl', 'Veg Thai Salad'],
            'non-vegetarian': ['Thai Chicken Salad', 'Boiled Fish with Herbs', 'Egg Veg Wrap'],
            'vegan': ['Steamed Tofu Salad', 'Thai Veg Soup', 'Broccoli Peanut Wrap']
        },
        'fat loss': {
            'vegetarian': ['Zoodle Thai Bowl', 'Low Fat Green Curry', 'Veg Soup'],
            'non-vegetarian': ['Chicken Lettuce Wraps', 'Boiled Shrimp Salad', 'Egg White Omelet'],
            'vegan': ['Cucumber Thai Salad', 'Lime Veg Soup', 'Steamed Veg Stir Fry']
        },
        'low calorie': {
            'vegetarian': ['Veg Thai Soup', 'Cabbage Wraps', 'Steamed Rice with Tofu'],
            'non-vegetarian': ['Lemongrass Chicken Bowl', 'Shrimp Soup', 'Egg Tofu Salad'],
            'vegan': ['Thai Veg Stir Fry', 'Tofu Soup Bowl', 'Veg Coconut Broth']
        },
        'normal': {
            'vegetarian': ['Veg Green Curry', 'Pad Thai Noodles', 'Thai Fried Rice'],
            'non-vegetarian': ['Chicken Green Curry', 'Shrimp Pad Thai', 'Egg Fried Noodles'],
            'vegan': ['Vegan Red Curry', 'Soy Pad Thai', 'Thai Tofu Fried Rice']
        }
    }


}

@app.route('/api/food-recommendation', methods=['POST'])
def recommend_food():
    data = request.json
    diet = data.get('dietType', '').lower()
    cuisine = data.get('cuisine', '').lower()
    goal = data.get('goal', '').lower()

    suggestions = (
        food_db.get(cuisine, {})
        .get(goal, {})
        .get(diet, [])
    )

    if not suggestions:
        suggestions = [f"No specific dish found for {goal.title()} - {diet.title()} in {cuisine.title()} cuisine."]

    return jsonify({'suggestions': suggestions})

if __name__ == '__main__':
    app.run(debug=True)
