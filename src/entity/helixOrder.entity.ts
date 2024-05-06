/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// helixOrder.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"helix_orders"})
export class HelixOrder {
    @Column({ primary: true })
    date: Date;

    @Column()
    clients: string;
    @Column({ name: "total_orders_for_the_day" })
    totalOrdersForTheDay: number;

    @Column({ name: "total_orders_for_non_points_redemptions" })
    totalOrdersForNonPointsRedemptions: number;

    @Column({ name: "last_day_orders_total_orders_not_sent_for_points_redemptions" })
    lastDayOrdersTotalOrdersNotSentForPointsRedemptions: number;

    @Column({ name: "total_orders_for_points_redemptions" })
    totalOrdersForPointsRedemptions: number;

    @Column({ name: "total_points_last_day_orders_combined_for_points_redemptions" })
    totalPointsLastDayOrdersCombinedForPointsRedemptions: number;

    @Column({ name: "total_orders_sent_in_redemption_file_or_api" })
    totalOrdersSentInRedemptionFileOrAPI: number;

    @Column({ name: "total_points_from_redemption_file_or_api" })
    totalPointsFromRedemptionFileOrAPI: number;

    @Column({ name: "total_points_balance" })
    totalPointsBalance: number;

    @Column({ name: "total_orders_not_sent_for_points_redemptions" })
    totalOrdersNotSentForPointsRedemptions: number;

    @Column({ name: "total_points_from_total_orders_not_sent_for_points_redemptions" })
    totalPointsFromTotalOrdersNotSentForPointsRedemptions: number;

    @Column()
    status: string;
}