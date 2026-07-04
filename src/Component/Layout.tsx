 // Layout Component (Master Layout)
 // This component serves as the parent/wrapper layout for all pages
 // It provides consistent header, navigation, and footer across all routes
 // Imports: Link for navigation, Outlet to render different page content

 import { Link, Outlet } from "react-router-dom";

 function Layout() {
   return (
     <>
       {/* Fragment <> allows multiple root elements without adding extra DOM node */}
       <div>
         {/* Header section with app branding */}
         <header>
           {/* Application title */}
           <h1>My App</h1>
           {/* Navigation bar with links to different pages */}
           {/* style prop applies inline CSS for flex layout */}
           <nav style={{ display: "flex", gap: "10px" }}>
             {/* Link to="/" navigates to home page */}
             <Link to="/">Home</Link>
             {/* Link to="/about" navigates to about page */}
             <Link to="/about">About</Link>
             {/* Link to="/products" navigates to product page */}
             <Link to="/products">Products</Link>
           </nav>
         </header>
         {/* Main content area */}
         <main>
           {/* Outlet component renders the current page's content */}
           {/* The page content changes based on the current route while Layout stays constant */}
           <Outlet />
         </main>
         {/* Footer section with copyright info */}
         <footer>
           {/* Copyright information */}
           <p>&copy; 2023 My App. All rights reserved.</p>
         </footer>
       </div>
     </>
   );
 };

 // Export component as default
 export default Layout;