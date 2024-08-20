// // middleware.ts or src/middleware.ts
// import { clerkMiddleware } from "@clerk/nextjs/server";
// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Apply middleware to all routes except those in `_next`, static files, and API routes
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Apply middleware to all API routes
//     "/api/:path*",
//     // Exclude specific webhook routes from middleware
//     "/api/webhooks/:path*",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

// // middleware.ts or src/middleware.ts
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);


// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: [
//     // Apply middleware to all routes except those in `_next`, static files, and API routes
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Apply middleware to all API routes
//     "/api/:path*",
//     // Exclude specific webhook routes from middleware
//     "/api/webhooks/:path*",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/login(.*)", "/register(.*)", "/"]);

export default clerkMiddleware((auth, req) => {
    if (!isPublicRoute(req)) auth().protect();
  });


// export default clerkMiddleware({
//   publicRoutes: [ '/'], // Include homepage as a public route
// });

export const config = {
  matcher: [
    "/((?!_next|[^?].*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
     "/(api|trpc)(.*)",
  ],
};
