import { Config, Context } from "https://edge.netlify.com";

export default async (req: Request, { cookies, geo }: Context) => {
    const url = new URL(req.url);
    const path = url.pathname;
    const searchParams = url.searchParams;

    console.log(`Edge Function triggered for path: ${path}`);

    // Handle category redirects with complex logic
    if (path === "/category") {
        console.log("Category path detected, processing redirect...");
        const type = searchParams.get("type");
        console.log(`Type parameter: ${type}`);

        if (type) {
            // Validate and transform the type parameter
            const validTypes = ["food", "drinks", "other"];
            const normalizedType = type.toLowerCase().trim();

            if (validTypes.includes(normalizedType)) {
                console.log(`Redirecting to /blog?type=${normalizedType}`);
                // Redirect to blog with the category
                return new URL(`/blog?type=:${normalizedType}`, req.url);
            }
        }

        // If no valid type, redirect to blog without category
        console.log("No valid type, redirecting to /blog");
        return new URL("/blog", req.url);
    }

    // Handle old blog format redirects (example of regex-like logic)
    if (path.startsWith("/old-blog/")) {
        const slug = path.replace("/old-blog/", "");
        if (slug) {
            return new URL(`/blog?slug=${slug}`, req.url);
        }
    }

    // Handle date-based redirects (example of complex pattern matching)
    const datePattern = /^\/blog\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/;
    const match = path.match(datePattern);
    if (match) {
        const [, year, month, day, slug] = match;
        return new URL(`/archive/${year}/${month}/${day}/${slug}`, req.url);
    }

    // No redirect needed, continue with normal processing
    console.log("No redirect needed for this path");
    return;
};

export const config: Config = {
    path: "/category"
};
