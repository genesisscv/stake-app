Design and Implementation Notes
Design Assumptions

The layout follows a mobile-first approach since the Stake product is primarily experienced on mobile. Horizontal scrolling was added for the Trending Stocks section as an assumption to improve usability on smaller screens. Tabs for Invest and Discover are placed outside the scrollable content to behave like a native bottom navigation bar. Each card and chip was built with flexible styling to allow for future design variations such as light and dark themes or new asset types. The chip color and label logic currently handle Stock and ETF, but the structure supports adding more types without changes to HTML or TypeScript. Another assumption made was that when the performance change is negative, the UI will display the value in red to match typical financial design conventions.

Component Structure and Future Updates

All components are standalone to keep dependencies local and make the project easy to scale or refactor. Shared UI elements such as card, chip-type, and instrument are located under /shared/components, while data-driven components like holdings are grouped under the same structure for consistency. Styles are isolated in SCSS files to keep logic clean and minimize template complexity. This approach makes it simple to modify spacing, colors, or typography globally and to extend visual states through enums or host classes. The CardComponent supports multiple inputs such as title, subtitle, footer, and chipType, allowing it to adapt to new card formats without rewriting the component. Tabs are handled through a single TabsComponent, which is ready to connect to routing in the future.

Data Source and API Design

Mock data is served from /assets/data/holdings.json. The HoldingsApi uses Angular’s HttpClient and shareReplay(1) to cache responses so the request only runs once, and catchError to return an empty list if the call fails. This structure mirrors a real API service and can be swapped for a backend endpoint by updating the URL. Observables such as holdings$, instruments$, and totalEquity$ stream directly into templates using the async pipe, which keeps change detection efficient and avoids manual subscription management. This pattern also prepares the project for future data integrations like live market updates or portfolio tracking.

Trade-offs

For time reasons, no shared module was implemented since standalone components already provide modular separation. The trending stocks section currently uses static data instead of an API. Styling was focused on readability and structure rather than pixel-perfect matching.