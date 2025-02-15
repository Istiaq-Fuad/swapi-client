# Star Wars Character Explorer

A Next.js application that fetches data from the Star Wars API (SWAPI) and displays character cards with pagination, search functionality, and detailed character pages.

## 🚀 Features

- **Pagination** – Browse through Star Wars characters with proper pagination.
- **Search Bar** – Filter characters by name using a debounced search input.
- **Character Cards** – Display character details such as name, height, birth year, and gender.
- **Character Details Page** – Clicking on a character navigates to `/character/[id]`, displaying more details.
- **Clean UI** – Styled with TailwindCSS for a modern and responsive look.

## 🛠 Tech Stack

- **Next.js 15** – React framework for server-side rendering and routing.
- **React 19** – For UI components.
- **TailwindCSS** – Styling for a clean and responsive design.
- **React Query** – Efficient data fetching and caching.
- **Axios / Fetch API** – Handling API requests.
- **Debounced Search** – Improved search experience with minimal API calls.
- **Next.js Dynamic Routing** – Character details page (`/character/[id]`).
- **PNPM** – Used as the package manager for faster and efficient dependency management.

## 📦 Installation & Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Istiaq-Fuad/swapi-client.git
   cd swapi-client
   ```

2. **Install Dependencies**

   ```sh
   pnpm install
   ```

3. **Run the Development Server**

   ```sh
   pnpm run dev
   ```

   The app will be available at `http://localhost:3000`.

4. **Build for Production**

   ```sh
   pnpm run build && pnpm run start
   ```

## 🔍 API Fetching, Pagination & Search

- **Fetching Data:** Data fetching is handled using React Query for better state management, error handling, and caching.
  - Multiple URLs are fetched in parallel to enhance user experience.
- **Pagination Logic:**
  - Uses `next` and `previous` page URLs from the API response.
  - The pagination component works by:
    1. Taking current page, page size, and total item count as inputs.
    2. Calculating total pages based on these values.
    3. Building navigation links by manipulating URL query parameters.
    4. Displaying an adaptive page number layout (showing all numbers for few pages, or using ellipses for many pages).
    5. Providing Previous/Next buttons with proper disabling at boundaries.
    6. Optionally offering a page size dropdown that preserves URL structure.
    7. Maintaining all existing query parameters during navigation.
    8. Using proper accessibility attributes for keyboard navigation.
  - The key advantage is that it uses URL-based navigation rather than state, making pages shareable and bookmarkable.
- **Search Implementation:**
  - The search functionality uses the `useDebounce` hook from the `@uidotdev/usehooks` package, debouncing the input by 400ms.
  - This reduces the number of API calls by only sending a request after the user stops typing for 400ms, improving efficiency and performance.
  - Filters results based on character names.

## 📽️ Video Walkthrough

[🔗 Project Walkthrough Video](https://drive.google.com/file/d/13FHOhQVT9zfLQKi9LWHwxJZuhFv2mEmF/view?usp=sharing)

## 📜 License

This project is licensed under the MIT License.

---

Happy Coding! 🚀
