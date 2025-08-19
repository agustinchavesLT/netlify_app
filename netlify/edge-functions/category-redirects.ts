import { Config, Context } from "https://edge.netlify.com";

export default async (req: Request, { cookies, geo }: Context) => {
    const url = new URL(req.url);
    const path = url.pathname;
    const searchParams = url.searchParams;

    // If URL contains the word "food" anywhere, redirect to /blog?type=food
    // Guard against infinite loops when we're already at /blog?type=food
    const hrefLower = url.href.toLowerCase();
    const typeLower = (searchParams.get("type") || "").toLowerCase();
    if (hrefLower.includes("food")) {
        if (!(path === "/blog" && typeLower === "food")) {
            return Response.redirect("/blog?type=food", 302);
        }
    }

    // Handle category redirects with complex logic
    if (path === "/category") {
        const type = searchParams.get("type");

        if (type) {
            // Validate and transform the type parameter
            const validTypes = ["food", "drinks", "other"];
            const normalizedType = type.toLowerCase().trim();

            if (validTypes.includes(normalizedType)) {
                // Use Response.redirect() for proper HTTP redirects
                return Response.redirect(`/blog?type=${normalizedType}`, 302);
            }
        }

        return Response.redirect("/blog", 302);
    }

    // Handle old blog format redirects (example of regex-like logic)
    if (path.startsWith("/old-blog/")) {
        const slug = path.replace("/old-blog/", "");
        if (slug) {
            return Response.redirect(`/blog?type=${slug}`, 302);
        }
    }

    // Handle date-based redirects (example of complex pattern matching)
    const datePattern = /^\/blog\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/;
    const match = path.match(datePattern);
    if (match) {
        return Response.redirect(`/archive`, 302);
    }

    // No redirect needed, continue with normal processing
    return;
};

export const config: Config = {
    path: "/*"
};
