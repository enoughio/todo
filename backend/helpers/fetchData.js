import db from "../config/dbConfig.js";


export const fetchData = async () => {
    try {
        const response = await db.query("SELECT * FROM todo ORDER BY task_id ASC");
        // Return the fetched rows
        return response.rows;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Internal server error");  // Let the calling function handle the response
    }
};
