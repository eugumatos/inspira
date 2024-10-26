import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/public(.*)"]);

// Middleware function
export default clerkMiddleware(async (auth, request) => {
  // Check if the route is public
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // Get the authenticated user
  const { userId } = await auth();

  // If no user is authenticated, redirect to the sign-in page
  if (!userId) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

// Matcher config to specify which routes the middleware applies to
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
