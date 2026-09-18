type IceCreamSize = "small" | "large";
type IceCreamTopping = "chocolate" | "caramel" | "berries";

interface IceCreamOrder {
  size: IceCreamSize;
  toppings: IceCreamTopping[];
  hasMarshmallow: boolean;
}

const SIZE_PRICES: Record<IceCreamSize, number> = {
  small: 10,
  large: 25
};

const TOPPING_PRICES: Record<IceCreamTopping, number> = {
  chocolate: 5,
  caramel: 6,
  berries: 10
};

const MARSHMALLOW_PRICE = 5;

function calculateIceCreamCost(order: IceCreamOrder): number {
  if (order.toppings.length === 0) {
    throw new Error("Необхідно обрати хоча б одну начинку!");
  }

  let total = SIZE_PRICES[order.size];

  for (const topping of order.toppings) {
    total += TOPPING_PRICES[topping];
  }

  if (order.hasMarshmallow) {
    total += MARSHMALLOW_PRICE;
  }

  return total;
}

// Запуск у середовищі з prompt (браузер)
function runIceCreamPrompt(): void {
  const sizeInput = prompt("Оберіть розмір (small/large):")?.toLowerCase() as IceCreamSize;
  const toppingsInput = prompt("Введіть начинки через кому (chocolate, caramel, berries):");
  const marshmallowInput = prompt("Додати маршмелоу? (yes/no):")?.toLowerCase();

  const selectedToppings = (toppingsInput?.split(",").map(t => t.trim().toLowerCase()) || []) as IceCreamTopping[];

  const order: IceCreamOrder = {
    size: sizeInput === "large" ? "large" : "small",
    toppings: selectedToppings.filter(t => t in TOPPING_PRICES),
    hasMarshmallow: marshmallowInput === "yes"
  };

  try {
    const cost = calculateIceCreamCost(order);
    alert(`Загальна вартість морозива: ${cost} грн`);
  } catch (error) {
    alert((error as Error).message);
  }
}

runIceCreamPrompt();