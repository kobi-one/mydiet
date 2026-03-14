import { useState } from "react";

const dietData = {
  principles: [
    { icon: "🫐", label: "Anti-Inflammatory", color: "#4a90d9" },
    { icon: "🧠", label: "Brain Health", color: "#7c5cbf" },
    { icon: "❤️", label: "Heart Health", color: "#d94a4a" },
  ],
  meals: {
    Monday: {
      breakfast: {
        name: "Blueberry Walnut Oatmeal",
        desc: "Steel-cut oats with wild blueberries, walnuts, flaxseed & cinnamon",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Blueberries reduce oxidative stress; walnuts provide omega-3s for brain & heart; oats lower LDL cholesterol",
      },
      lunch: {
        name: "Wild Salmon Avocado Bowl",
        desc: "Grilled wild salmon over arugula, avocado, cucumber, lemon-tahini dressing",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Salmon EPA/DHA support cognition & reduce inflammation; avocado monounsaturated fats protect arteries",
      },
      dinner: {
        name: "Turmeric Lentil Soup",
        desc: "Red lentils, spinach, turmeric, ginger, garlic in bone broth",
        tags: ["anti-inflam", "heart"],
        why: "Curcumin in turmeric is a powerful anti-inflammatory; lentils provide soluble fiber to reduce cholesterol",
      },
      snack: {
        name: "Celery & Almond Butter",
        desc: "Celery sticks with 2 tbsp almond butter + a small handful of pumpkin seeds",
        tags: ["anti-inflam", "brain"],
        why: "Celery contains apigenin which combats gut inflammation; magnesium in seeds supports neural function",
      },
    },
    Tuesday: {
      breakfast: {
        name: "Smoked Salmon Egg Scramble",
        desc: "Omega-3 eggs, smoked salmon, spinach, dill, on sourdough",
        tags: ["brain", "heart"],
        why: "Choline in eggs is essential for acetylcholine (memory); sourdough fermentation improves gut-brain axis",
      },
      lunch: {
        name: "Mediterranean Chickpea Salad",
        desc: "Chickpeas, cherry tomatoes, olives, feta, red onion, extra-virgin olive oil",
        tags: ["heart", "anti-inflam"],
        why: "Olive oil polyphenols reduce CRP inflammation markers; chickpeas provide plant protein that lowers blood pressure",
      },
      dinner: {
        name: "Baked Cod with Roasted Beets & Greens",
        desc: "Herb-crusted cod, roasted beets, kale chips, lemon",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Beets contain nitrates that improve cerebral blood flow; kale's vitamin K supports vascular health",
      },
      snack: {
        name: "Dark Chocolate & Berries",
        desc: "1 oz 85%+ dark chocolate with a cup of mixed berries",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Flavanols in dark chocolate boost BDNF (brain growth factor) and improve endothelial function",
      },
    },
    Wednesday: {
      breakfast: {
        name: "Green Smoothie Bowl",
        desc: "Spinach, frozen mango, banana, hemp seeds, chia seeds, topped with kiwi & granola",
        tags: ["anti-inflam", "brain"],
        why: "Hemp seeds provide GLA (anti-inflammatory omega-6); chia seeds' ALA converts to brain-supporting DHA",
      },
      lunch: {
        name: "Sardine & White Bean Toast",
        desc: "Whole grain toast with mashed white beans, sardines, capers, lemon zest",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Sardines are among the most anti-inflammatory foods; white beans reduce postprandial blood sugar spikes",
      },
      dinner: {
        name: "Grass-Fed Beef Stir-Fry",
        desc: "Lean grass-fed beef, broccoli, bell peppers, snap peas in ginger-tamari sauce",
        tags: ["brain", "heart"],
        why: "Grass-fed beef contains CLA which reduces arterial inflammation; broccoli sulforaphane activates Nrf2 pathway",
      },
      snack: {
        name: "Kefir with Walnuts",
        desc: "1 cup plain kefir with a handful of walnuts and a drizzle of raw honey",
        tags: ["anti-inflam", "brain"],
        why: "Kefir probiotics reduce gut-derived inflammation; walnuts are the only nut high in plant omega-3s",
      },
    },
    Thursday: {
      breakfast: {
        name: "Chia Pudding with Pomegranate",
        desc: "Chia seeds soaked in almond milk, topped with pomegranate arils & pistachios",
        tags: ["heart", "anti-inflam"],
        why: "Pomegranate punicalagins are potent antioxidants that lower blood pressure; pistachios reduce LDL oxidation",
      },
      lunch: {
        name: "Miso Soup with Edamame & Brown Rice",
        desc: "White miso broth, tofu, wakame seaweed, edamame, short-grain brown rice",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Miso fermentation produces natto-kinase precursors; seaweed iodine supports thyroid-brain connection",
      },
      dinner: {
        name: "Roasted Chicken with Cauliflower & Herbs",
        desc: "Herb-marinated chicken thighs, roasted cauliflower, fresh parsley & rosemary",
        tags: ["anti-inflam", "brain"],
        why: "Rosemary carnosic acid protects brain from oxidative damage; cauliflower sulforaphane reduces neuroinflammation",
      },
      snack: {
        name: "Apple with Almond Butter",
        desc: "1 medium apple sliced with 2 tbsp almond butter",
        tags: ["heart", "anti-inflam"],
        why: "Apple quercetin reduces inflammatory cytokines; almond vitamin E prevents LDL oxidation",
      },
    },
    Friday: {
      breakfast: {
        name: "Avocado Toast with Poached Eggs",
        desc: "Sourdough rye, smashed avocado, 2 poached omega-3 eggs, red pepper flakes, microgreens",
        tags: ["brain", "heart"],
        why: "Avocado lutein crosses blood-brain barrier to improve cognitive performance; rye reduces post-meal insulin",
      },
      lunch: {
        name: "Rainbow Quinoa Salad",
        desc: "Tri-color quinoa, roasted sweet potato, kale, dried cranberries, pumpkin seeds, lemon vinaigrette",
        tags: ["anti-inflam", "heart", "brain"],
        why: "Quinoa is a complete protein reducing inflammation; sweet potato beta-carotene converts to neuroprotective vitamin A",
      },
      dinner: {
        name: "Shrimp & Zucchini Noodles",
        desc: "Wild shrimp, zucchini noodles, cherry tomatoes, basil, garlic, white wine reduction",
        tags: ["heart", "anti-inflam"],
        why: "Shrimp astaxanthin is 6,000x stronger than vitamin C as antioxidant; tomato lycopene protects arterial walls",
      },
      snack: {
        name: "Beet Hummus & Veggies",
        desc: "Homemade beet hummus with carrots, radishes & cucumber spears",
        tags: ["heart", "anti-inflam"],
        why: "Beet nitrates dilate blood vessels; chickpea fiber feeds beneficial gut bacteria that regulate inflammation",
      },
    },
    Saturday: {
      breakfast: {
        name: "Buckwheat Pancakes with Berry Compote",
        desc: "Buckwheat & oat flour pancakes, mixed berry compote, a dollop of Greek yogurt",
        tags: ["brain", "anti-inflam"],
        why: "Buckwheat rutin strengthens capillary walls supporting cerebral circulation; berries reduce amyloid plaque accumulation",
      },
      lunch: {
        name: "Grilled Mackerel Niçoise",
        desc: "Grilled mackerel, green beans, hard-boiled eggs, olives, capers, whole grain mustard dressing",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Mackerel has one of the highest omega-3 concentrations of any fish; this classic combo is a heart-disease-fighting powerhouse",
      },
      dinner: {
        name: "Lamb & Root Vegetable Tagine",
        desc: "Lean lamb, carrots, turnips, apricots, cinnamon, cumin, harissa, chickpeas",
        tags: ["anti-inflam", "brain"],
        why: "Lamb is rich in zinc (supports neurotransmitter synthesis); spices like cumin and cinnamon have potent anti-inflammatory properties",
      },
      snack: {
        name: "Matcha Latte & Brazil Nuts",
        desc: "Unsweetened matcha oat milk latte with 2-3 Brazil nuts",
        tags: ["brain", "heart"],
        why: "Matcha L-theanine + caffeine improves focus without jitteriness; Brazil nuts provide selenium for thyroid & heart enzyme production",
      },
    },
    Sunday: {
      breakfast: {
        name: "Shakshuka with Feta & Herbs",
        desc: "Eggs poached in spiced tomato-pepper sauce, crumbled feta, fresh herbs, crusty sourdough",
        tags: ["anti-inflam", "brain"],
        why: "Tomato sauce lycopene and capsaicin from peppers reduce systemic inflammation; eggs provide all essential amino acids for neurotransmitters",
      },
      lunch: {
        name: "Walnut & Beet Grain Bowl",
        desc: "Farro, roasted beets, walnuts, goat cheese, arugula, balsamic glaze",
        tags: ["brain", "heart"],
        why: "Farro ancient grain fiber supports the microbiome-heart axis; goat cheese is easier to digest than cow dairy",
      },
      dinner: {
        name: "Whole Roasted Trout with Asparagus",
        desc: "Whole trout stuffed with lemon, dill & garlic, asparagus, roasted fingerling potatoes",
        tags: ["brain", "heart", "anti-inflam"],
        why: "Trout is rich in tryptophan for serotonin production; asparagus prebiotic fiber supports gut microbiome diversity",
      },
      snack: {
        name: "Golden Milk",
        desc: "Warm oat milk with turmeric, ginger, cinnamon, black pepper, raw honey",
        tags: ["anti-inflam", "brain"],
        why: "Piperine in black pepper increases curcumin bioavailability by 2,000%; this drink actively crosses the blood-brain barrier",
      },
    },
  },
  keyFoods: [
    {
      food: "Wild Fatty Fish",
      emoji: "🐟",
      benefit: "Omega-3 EPA/DHA for brain & arterial health",
    },
    {
      food: "Leafy Greens",
      emoji: "🥬",
      benefit: "Nitrates, folate & K2 for vascular & cognitive function",
    },
    {
      food: "Berries",
      emoji: "🫐",
      benefit: "Anthocyanins reduce oxidative stress & amyloid plaques",
    },
    {
      food: "Olive Oil",
      emoji: "🫒",
      benefit: "Oleocanthal mimics ibuprofen's anti-inflammatory effect",
    },
    {
      food: "Walnuts",
      emoji: "🪨",
      benefit: "Only nut with significant ALA omega-3 for brain structure",
    },
    {
      food: "Turmeric",
      emoji: "🌿",
      benefit: "Curcumin is the gold standard anti-inflammatory compound",
    },
    {
      food: "Fermented Foods",
      emoji: "🥛",
      benefit: "Probiotic diversity reduces systemic & neuroinflammation",
    },
    {
      food: "Dark Chocolate",
      emoji: "🍫",
      benefit: "Flavanols boost BDNF & improve endothelial function",
    },
  ],
  avoid: [
    {
      item: "Refined Sugar",
      reason: "Spikes insulin → triggers inflammatory cascade",
    },
    {
      item: "Trans Fats",
      reason: "Directly damages arterial walls & disrupts neural membranes",
    },
    {
      item: "Processed Meats",
      reason: "Nitrites & AGEs accelerate vascular & neurodegeneration",
    },
    {
      item: "Refined Grains",
      reason: "Rapid glucose spikes promote brain insulin resistance",
    },
    {
      item: "Seed Oils",
      reason: "High omega-6 disrupts omega-3 ratio, promoting inflammation",
    },
    {
      item: "Excessive Alcohol",
      reason: "Depletes B vitamins critical for myelin sheath integrity",
    },
  ],
};

const tagConfig = {
  brain: { color: "#7c5cbf", bg: "rgba(124,92,191,0.15)", label: "Brain" },
  heart: { color: "#d94a4a", bg: "rgba(217,74,74,0.15)", label: "Heart" },
  "anti-inflam": {
    color: "#4a90d9",
    bg: "rgba(74,144,217,0.15)",
    label: "Anti-Inflam",
  },
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function DietPlan() {
  const [activeDay, setActiveDay] = useState("Monday");
  const [activeTab, setActiveTab] = useState("plan");
  const [expandedMeal, setExpandedMeal] = useState(null);

  const dayMeals = dietData.meals[activeDay];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#e8e0d4",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d1117 0%, #1a1f2e 50%, #0d1117 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "48px 32px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 50% -20%, rgba(74,144,217,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {["🫐", "🧠", "❤️"].map((e, i) => (
            <span key={i} style={{ fontSize: "28px" }}>
              {e}
            </span>
          ))}
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "400",
            letterSpacing: "0.04em",
            margin: "0 0 8px",
            color: "#f0ebe3",
            fontStyle: "italic",
          }}
        >
          The Restorative Diet
        </h1>
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6b7a99",
            margin: "0 0 28px",
          }}
        >
          Reduce Inflammation · Nourish the Brain · Protect the Heart
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {dietData.principles.map((p) => (
            <div
              key={p.label}
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                border: `1px solid ${p.color}40`,
                background: `${p.color}12`,
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: p.color,
              }}
            >
              {p.icon} {p.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0",
          padding: "0 32px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "#10151e",
        }}
      >
        {[
          { id: "plan", label: "Weekly Meal Plan" },
          { id: "foods", label: "Key Foods" },
          { id: "avoid", label: "Foods to Avoid" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "16px 24px",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #4a90d9"
                  : "2px solid transparent",
              color: activeTab === tab.id ? "#e8e0d4" : "#5a6580",
              fontSize: "13px",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}
      >
        {/* MEAL PLAN TAB */}
        {activeTab === "plan" && (
          <>
            {/* Day Selector */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setActiveDay(day);
                    setExpandedMeal(null);
                  }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor:
                      activeDay === day ? "#4a90d9" : "rgba(255,255,255,0.08)",
                    background:
                      activeDay === day
                        ? "rgba(74,144,217,0.15)"
                        : "rgba(255,255,255,0.02)",
                    color: activeDay === day ? "#7ab8f5" : "#6b7a99",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                  }}
                >
                  {day.slice(0, 3).toUpperCase()}
                </button>
              ))}
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "italic",
                color: "#c8bfb0",
                marginBottom: "24px",
                letterSpacing: "0.05em",
              }}
            >
              {activeDay}
            </h2>

            {/* Meals */}
            {Object.entries(dayMeals).map(([mealType, meal]) => {
              const isOpen = expandedMeal === mealType;
              const mealColors = {
                breakfast: "#f5a623",
                lunch: "#4a90d9",
                dinner: "#7c5cbf",
                snack: "#50a875",
              };
              const mealColor = mealColors[mealType] || "#888";

              return (
                <div
                  key={mealType}
                  style={{
                    marginBottom: "12px",
                    borderRadius: "12px",
                    border: `1px solid ${
                      isOpen ? mealColor + "40" : "rgba(255,255,255,0.06)"
                    }`,
                    background: isOpen
                      ? `${mealColor}08`
                      : "rgba(255,255,255,0.02)",
                    overflow: "hidden",
                    transition: "all 0.3s",
                  }}
                >
                  <button
                    onClick={() => setExpandedMeal(isOpen ? null : mealType)}
                    style={{
                      width: "100%",
                      padding: "18px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: mealColor,
                        minWidth: "70px",
                        fontWeight: "600",
                      }}
                    >
                      {mealType === "snack"
                        ? "Snack"
                        : mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "16px",
                          color: "#e8e0d4",
                          marginBottom: "3px",
                        }}
                      >
                        {meal.name}
                      </div>
                      <div style={{ fontSize: "12px", color: "#5a6580" }}>
                        {meal.desc}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                      }}
                    >
                      {meal.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "9px",
                            padding: "3px 7px",
                            borderRadius: "100px",
                            background: tagConfig[tag]?.bg,
                            color: tagConfig[tag]?.color,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            fontWeight: "600",
                          }}
                        >
                          {tagConfig[tag]?.label}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        color: "#5a6580",
                        fontSize: "16px",
                        marginLeft: "8px",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 20px",
                        borderTop: `1px solid ${mealColor}20`,
                      }}
                    >
                      <p
                        style={{
                          margin: "16px 0 0",
                          fontSize: "13px",
                          lineHeight: "1.8",
                          color: "#8a96b0",
                          fontStyle: "italic",
                        }}
                      >
                        💡{" "}
                        <strong
                          style={{ color: "#a0a8bc", fontStyle: "normal" }}
                        >
                          Why it works:
                        </strong>{" "}
                        {meal.why}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* KEY FOODS TAB */}
        {activeTab === "foods" && (
          <>
            <h2
              style={{
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "italic",
                color: "#c8bfb0",
                marginBottom: "8px",
              }}
            >
              Foundation Foods
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#5a6580",
                marginBottom: "32px",
              }}
            >
              Build every meal around these nutrient-dense powerhouses
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {dietData.keyFoods.map((f) => (
                <div
                  key={f.food}
                  style={{
                    padding: "24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                    {f.emoji}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#e8e0d4",
                      marginBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    {f.food}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#5a6580",
                      lineHeight: "1.7",
                    }}
                  >
                    {f.benefit}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* AVOID TAB */}
        {activeTab === "avoid" && (
          <>
            <h2
              style={{
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "italic",
                color: "#c8bfb0",
                marginBottom: "8px",
              }}
            >
              Foods to Minimize
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#5a6580",
                marginBottom: "32px",
              }}
            >
              These foods actively work against your three core goals
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {dietData.avoid.map((a) => (
                <div
                  key={a.item}
                  style={{
                    padding: "20px 24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(217,74,74,0.15)",
                    background: "rgba(217,74,74,0.04)",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>⚠️</span>
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "#e0b0b0",
                        marginBottom: "4px",
                      }}
                    >
                      {a.item}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6b5a5a",
                        lineHeight: "1.6",
                      }}
                    >
                      {a.reason}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Footer note */}
        <div
          style={{
            marginTop: "48px",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.04)",
            background: "rgba(255,255,255,0.01)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#3a4055",
              lineHeight: "1.8",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            This plan is for general wellness guidance only. Consult a
            registered dietitian or physician before making significant dietary
            changes, especially if you have existing health conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
