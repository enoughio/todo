import db from "../config/dbConfig.js";


export const fetchData = async () => {
    try {
        const response = await db.query("SELECT * FROM todo");
        // Return the fetched rows
        return response.rows || []; // Fallback to an empty array if undefined
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Internal server error");  // Let the calling function handle the response
    }
};
