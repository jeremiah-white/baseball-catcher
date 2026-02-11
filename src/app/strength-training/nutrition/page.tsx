import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutrition for Baseball Players",
  description:
    "Proper nutrition guidelines for baseball catchers and players to maximize performance and recovery.",
  keywords: [
    "baseball",
    "catcher",
    "nutrition",
    "diet",
    "sports nutrition",
    "performance",
  ],
};

export default function NutritionPage() {
  return (
    <>
      <h1 className="page-header">Proper Nutrition</h1>

      <p>
        Proper nutrition is essential for competing and performing at the
        highest level. You&apos;ve heard stories of great baseball players who
        paid little attention to their health and wellness while playing. The
        fact is, had they maintained a proper diet and trained correctly, they
        would have been even better.
      </p>

      <p>
        In today&apos;s competitive atmosphere, an athlete needs to maintain a
        healthy edge, which means eating right.
      </p>

      <p>
        <em>
          Be sure to consult your doctor before beginning any diet or nutrition
          program.
        </em>
      </p>

      <h2>Baseball Nutrition Basics</h2>
      <p>
        What drives the ball and body around the field is energy. The
        physiological energy source for playing baseball is primarily
        anaerobic—which means carbohydrate energy is key for performance, plus a
        daily dose of high-quality protein for the muscle power required for
        strength, endurance, and recovery.
      </p>

      <h2>Eating for Performance</h2>
      <p>
        Like baseball, eating well requires skill—coordination of meals and
        snacks and reaction time. Dietary reaction time means eating three meals
        plus two snacks every few hours throughout the day, with the goal of
        meeting calorie needs and maintaining muscle mass.
      </p>

      <p>
        Without a steady dose of protein, roughly 25 grams per meal, along with
        substantial calories from foods like grains, pasta, rice, potatoes,
        beans, peas, corn, bread, vegetables, fruits, and low-fat dairy, injury,
        stress, and illness become your personal three strikes towards dietary
        disaster.
      </p>

      <h2>Vitamins and Minerals</h2>
      <p>
        Getting a variety of foods throughout the day—lean meats, chicken, fish,
        pork, eggs, and milk plus whole grains, colorful fruits, and
        vegetables—ensures that players will get enough vitamins and
        minerals. These micronutrients assist the body in using energy from
        carbohydrates, protein, and fat.
      </p>

      <p>
        Just like the glove helps to catch the ball, vitamins and minerals from
        fresh foods, grilled meats, deep green veggies, and fruits help the body
        use the energy from food easier. You can still eat fast foods, chips,
        soda, and candy, but without enough vitamins and minerals—and with too
        much fat, salt, and additives—it will be more difficult to feel
        energized, stay fit, and quickly recover.
      </p>

      <h2>Hydration</h2>
      <p>
        Ample fluids and sports drinks are critical for performance. Without
        fluids, your muscles will buckle, your mind will melt, and the batter
        will be out! Make hydration a priority before, during, and after
        practice and games.
      </p>

      <h2>Eating on the Road</h2>
      <p>
        The key to getting enough food on the road, regardless of travel or late
        games, is to plan ahead. Take a stash of supplies with you:
      </p>
      <ul>
        <li>Sport bars or breakfast bars</li>
        <li>Shakes and sports drinks</li>
        <li>Crackers and trail mix</li>
        <li>Healthy soups (vegetable, bean, noodle, minestrone)</li>
        <li>Small cereal boxes</li>
        <li>Fresh fruit and mini bagels</li>
      </ul>

      <h3>Restaurant Choices</h3>
      <ul>
        <li>
          <strong>Fast food:</strong> Grilled chicken salad or sandwich, grilled
          burger without excessive toppings
        </li>
        <li>
          <strong>Sub shops:</strong> Lean meat sub with all the vegetable
          fixings, light mayo or mustard
        </li>
        <li>
          <strong>Restaurants:</strong> Soup, salad, warm dinner rolls, grilled
          fish, seafood, poultry, or lean meat
        </li>
        <li>
          <strong>Dessert:</strong> Sorbet or frozen yogurt
        </li>
        <li>
          <strong>Snacks:</strong> Pretzels, baked chips with salsa, fresh fruit
        </li>
      </ul>

      <h2>Sample 3,000 Calorie Day</h2>
      <p>
        The typical college baseball player needs roughly 3,000 calories: 50% from
        carbohydrates (375 grams), about half their body weight in protein grams
        (for a 200-pound player, about 100-150 grams), and no more than 70 grams
        of dietary fat.
      </p>

      <h3>Morning</h3>
      <ul>
        <li>
          Scrambled egg whites with light cheese, greens, tomato, and mushrooms
        </li>
        <li>Whole wheat raisin bagel or wheat toast with jam and light cream cheese</li>
        <li>1 cup low-fat milk</li>
        <li>1 cup orange juice</li>
        <li>1 cup fresh fruit or banana</li>
      </ul>

      <h3>Mid-Morning</h3>
      <ul>
        <li>Sport shake or bar, small bag trail mix, or yogurt smoothie</li>
      </ul>

      <h3>Lunch</h3>
      <ul>
        <li>
          12&quot; turkey sub with greens, tomato, pepper, onions, and light
          mayo on whole wheat
        </li>
        <li>Bag of baked chips</li>
        <li>Apple</li>
        <li>Sports drink or water</li>
      </ul>

      <h3>Afternoon Training</h3>
      <ul>
        <li>Sports drink or water throughout</li>
      </ul>

      <h3>Immediately After Training (within 30 minutes)</h3>
      <ul>
        <li>Smoothie, fruit bar, orange slices, or banana</li>
      </ul>

      <h3>Dinner</h3>
      <ul>
        <li>
          Deep green salad with tomatoes, carrots, croutons, and light dressing
        </li>
        <li>A few dinner rolls</li>
        <li>Grilled half chicken</li>
        <li>Peas and corn</li>
        <li>Baked potato with light butter and chives</li>
        <li>1 glass low-fat milk</li>
      </ul>

      <h3>Late Night</h3>
      <ul>
        <li>
          Light popcorn, fresh fruit, pretzels, baked chips, light ice cream,
          yogurt, or sorbet
        </li>
      </ul>

      <p>
        <Link href="/strength-training/sample-program">
          View a Sample Workout Program →
        </Link>
      </p>
    </>
  );
}
