// import necessary modules
import { createConnection, getConnection } from "typeorm";
import { Order } from "../entity/order.entity";
import { HelixOrder } from "../entity/helixOrder.entity";

// Define a function to fetch data from the order table and insert into helix_orders table
async function fillHelixOrders() {
    try {
        // Establish database connection
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "Amma@431",
            database: "nbc",
            entities: [
                Order,
                HelixOrder,
            ]
        });

        // Fetch data from the order table
        const orders = await getConnection().getRepository(Order).find();

        // Map fetched data to HelixOrder entities
        const helixOrders = orders.map(order => {
            const helixOrder = new HelixOrder();
            helixOrder.date = order.createdAt; // Set the date from the order's createdAt field
            helixOrder.clients = order.company; // Set the clients from the order's company field
            // Set the remaining columns to 0
            helixOrder.totalOrdersForTheDay = 0;
            helixOrder.totalOrdersForNonPointsRedemptions = 0;
            helixOrder.lastDayOrdersTotalOrdersNotSentForPointsRedemptions = 0;
            helixOrder.totalOrdersForPointsRedemptions = 0;
            helixOrder.totalPointsLastDayOrdersCombinedForPointsRedemptions = 0;
            helixOrder.totalOrdersSentInRedemptionFileOrAPI = 0;
            helixOrder.totalPointsFromRedemptionFileOrAPI = 0;
            helixOrder.totalPointsBalance = 0;
            helixOrder.totalOrdersNotSentForPointsRedemptions = 0;
            helixOrder.totalPointsFromTotalOrdersNotSentForPointsRedemptions = 0;
            helixOrder.status = "good"; // Assuming status is a string column, set it to "0"
            return helixOrder;
        });

        // Insert data into the helix_orders table
        await getConnection().getRepository(HelixOrder).save(helixOrders);

        console.log("Data inserted into helix_orders table successfully!");
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        // Close the database connection
        await getConnection().close();
    }
}

// Call the function to fill helix_orders table
fillHelixOrders();
