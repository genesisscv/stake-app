## Design and Implementation Notes

## Design Assumptions:
- The layout follows a mobile-first approach since the Stake product is primarily experienced on mobile devices.

- Horizontal scrolling was added for the Trending Stocks section to improve usability on smaller screens.

- Cards and chips are styled with flexible SCSS vars to support future design updates 

- The chip logic currently supports Stock and ETF, but the structure can easily extend to other types later.

- When the performance change is negative, the UI displays the value in red to match standard financial design patterns. 

## Component Structure and Future Updates:
- Components are built using Angular’s standalone architecture to keep dependencies local and improve modularity. Shared UI components such as card, chip-type, and instrument are located under /shared/components, while data-facing components like holdings follow the same structure for consistency.

- All visual rules are managed in SCSS files, ensuring templates and TypeScript remain simple and focused on logic. This allows easy global updates to spacing, color, and typography, as well as extending visual states through enums or host classes.

- The CardComponent supports optional inputs (title, subtitle, chipType) so it can adapt to multiple use cases without refactoring. The TabsComponent handles layout for Invest and Discover and is ready to integrate routing in future versions.

## Data Source and API Design:
- Mock data is served from /assets/data/holdings.json. The HoldingsApi service uses Angular’s HttpClient with shareReplay(1) to cache the request and reuse the last response for all subscribers. catchError is included to handle errors gracefully and return an empty list if the fetch fails.

- This pattern mirrors a production API design and can easily transition to a backend service by updating the base URL. Observables such as instruments$, and totalEquity$ are consumed using the async pipe, which handles subscriptions automatically and keeps change detection efficient. This design is also prepared for future real-time data features like live pricing or portfolio updates.

## Time Trade-offs:
- A shared module was not created to save time since standalone components already provide modular separation.

- The Trending Stocks section currently uses static mock data instead of a live API.

- Given more time, I would have liked to create a more accurate design implementation and complete the planned animations and routing setup.  