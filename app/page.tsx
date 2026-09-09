"use client";

import { useState } from "react";

type Store = [string, string, string, string, string[], boolean?, string?];

const stores: Store[] = [
  ["Laundry Shop", "Laundry Shop", "/store/laundry.jpg", "Laundry essentials", ["Order and pickup tracking", "Inventory for detergents and supplies", "Pickup and delivery scheduling", "Customer loyalty and payment records"], false, "Manage laundry orders, customer pickups, and repeat services without missing a single ticket."],
  ["Restobar", "Restobar", "/store/restobar.jpg", "Food and drinks", ["Drink and inventory tracking", "Table service and order management", "Sales reports and promotions", "Fast and secure checkout"], false, "Track drinks, table service, and nightly sales with a smoother bar operations workflow."],
  ["Restaurant", "Restaurant", "/store/restaurant.jpg", "Dining and hospitality", ["Menu and stock management", "Table and kitchen coordination", "Order tracking and sales insights", "Service-ready checkout flow"], false, "Run a smoother restaurant with digital orders, inventory control, and faster service from kitchen to cashier."],
  ["Salon and Spa", "Salon and Spa", "/store/salon&spa.jpg", "Beauty and wellness", ["Appointment scheduling", "Service package management", "Product inventory and retail sales", "Customer records and loyalty"], false, "Keep appointments, beauty inventory, and client bookings organized in one polished system."],
  ["Cafe and Coffee Shop", "Cafe and Coffee Shop", "/store/cafe&coffee shop.jpg", "Coffee and café essentials", ["Drink and food prep tracking", "Fast cashier and order flow", "Ingredient and stock monitoring", "Loyalty and repeat-customer sales"], false, "Serve coffee, pastries, and quick orders faster with smart tracking and smoother daily operations."],
  ["Fast Food and Food Stall", "Fast Food and Food Stall", "/store/food stall.jpg", "Quick meals and snacks", ["Queue and order management", "Combo meal bundles", "Ingredient stock control", "Peak-hour sales tracking"], false, "Keep lines moving with faster orders, bundled promos, and better control over fast-turn inventory."],
  ["Meat Shop and Frozen Food", "Meat Shop and Frozen Food", "/store/meat.jpg", "Fresh goods and frozen items", ["Batch and inventory tracking", "Cold storage and expiry monitoring", "Supplier and receiving records", "Fast checkout by weight and unit"], false, "Track fresh stock, frozen items, and daily sales from receiving to checkout with full visibility."],
  ["Bakery and Pastry", "Bakery and Pastry", "/store/bakery.jpg", "Fresh baked goods", ["Production and batch planning", "Ingredient usage tracking", "Order pickup management", "Daily sales and stock insights"], false, "Manage baking schedules, ingredient usage, and daily orders with efficient production and sales tracking."]
];

const storeLogos = [
  "/storelogo/laundry.png",
  "/storelogo/resto.png",
  "/storelogo/restau.png",
  "/storelogo/spa&salon.png",
  "/storelogo/coffee.png",
  "/storelogo/food.png",
  "/storelogo/meat.png",
  "/storelogo/bake.png"
];
const clientLogos = [
  "Outback_Servo.png",
  "Poppers_Pop.png",
  "Verified_Lounge.png",
  "SeaOil.png",
  "Soul_Sierra.png",
  "Black_Smokehaus.png",
  "Steezy_Gadgets_Hub_CDO.png",
  "HestiaPrime_Pharmacy_Minimart.png",
  "TGP.png",
  "Tapawarma.png",
  "Petron.png",
  "The_Perfume_Refilling_Station.png",
  "ArgaCool_Auto_Services.png",
  "Beaut6Derm.png",
  "Bulasa_Mangroves_Beach_Resort_and_Restaurant.png",
];

const storeCardColors = [
  "#d2f2fa",
  "#f3eadf",
  "#ccd4da",
  "#f8f7e1",
  "#f8e3c7",
  "#f7e8df",
  "#fccfcd",
  "rgb(252, 223, 200)"
];

export default function Home() {
  const [selected, setSelected] = useState(4);
  const store = stores[selected] ?? stores[4];

  return (
    <main className="page">
      <section className="chooser" aria-label="Choose your industry">
        <header className="chooser-header">
          <div className="title-wrap">
            <span className="title-line" />
            <div className="title-copy">
              <h1>Choose Your <span>Industry</span></h1>
              <p>Select the type of business you operate</p>
              <span className="title-accent" />
            </div>
            <span className="title-line" />
          </div>
        </header>
        <div className="chooser-body">
          <div className="store-grid">
            {stores.map((item, index) => (
              <button
                key={item[0]}
                className={`store-option ${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
                style={{ background: selected === index ? storeCardColors[index % storeCardColors.length] : "#ffffff" }}
              >
                <div className="store-card-inner">
                  <div className="store-icon-wrap" style={{ backgroundColor: selected === index ? "#f7f9fb" : storeCardColors[index % storeCardColors.length] }}>
                    <img className="store-photo" src={storeLogos[index]} alt="" />
                  </div>
                  <strong>{item[1]}</strong>
                  <span className={`store-card-arrow ${selected === index ? "selected" : ""}`} aria-hidden="true">
                    ›
                  </span>
                </div>
              </button>
            ))}
          </div>
          <aside className="preview">
            <img
              className={`preview-photo ${[4, 6, 7].includes(selected) ? "preview-photo-full" : ""}`}
              src={store[2]}
              alt={`${store[0]} storefront`}
            />
            <h2>{store[0]}</h2>
            <p className={`preview-copy ${store[5] ? "coming-soon-copy" : ""}`}>
              {store[5] ? store[3] : "Complete POS Solution for Your Store"}
            </p>
            <p className="preview-details">{store[6]}</p>
            <h3>Key features</h3>
            <ul>
              {store[4].map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <button className="continue" disabled={Boolean(store[5])}>
              {store[5] ? store[3] : "Access Your Store"} <span>{store[5] ? "•" : "→"}</span>
            </button>
            <section className="trusted" aria-label="Trusted by retailers">
              <p>Trusted by retailers</p>
              <div className="logo-marquee">
                <div className="logo-track">
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <img
                      key={`${logo}-${index}`}
                      src={`/client-logos/${logo}`}
                      alt=""
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
