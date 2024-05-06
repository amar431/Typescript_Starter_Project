/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"order"})
export class Order {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @PrimaryGeneratedColumn({ comment: "Order ID" , name:"id"})
    id: number;

    @Column({ nullable: true, comment: "Orbitz Order ID" })
    orbitzOrderId: string;

    @Column({ nullable: true, comment: "New Orbitz Order ID" })
    newOrbitzOrderId: string;

    @Column({ nullable: true, comment: "Encrypted Order ID" })
    encryptedOrderId: string;

    @Column({ comment: "Site ID" })
    siteSiteId: number;

    @Column({ comment: "Order Status ID" })
    orderStatusId: number;

    @Column({ nullable: true, comment: "Member ID" })
    memberMemberId: number;

    @Column({ nullable: true, comment: "Old Member ID" })
    oldMemberId: number;

    @Column({ nullable: true, comment: "User ID" })
    userId: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", comment: "Created At" })
    createdAt: Date;

    @Column({ nullable: true, comment: "Old Created At" })
    oldCreatedAt: string;

    @Column({ default: true, comment: "Active" })
    active: boolean;

    @Column({ nullable: true, comment: "Billing Email" })
    billingEmail: string;

    @Column({ nullable: true, comment: "Company" })
    company: string;

    @Column({ nullable: true, comment: "First Name" })
    firstName: string;

    @Column({ nullable: true, comment: "Last Name" })
    lastName: string;

    @Column({ nullable: true, comment: "Address" })
    address: string;

    @Column({ nullable: true, comment: "Address 2" })
    address2: string;

    @Column({ nullable: true, comment: "Postal Code" })
    postalCode: string;

    @Column({ nullable: true, comment: "City" })
    city: string;

    @Column({ nullable: true, comment: "State" })
    state: string;

    @Column({ nullable: true, comment: "State ID" })
    stateId: number;

    @Column({ nullable: true, comment: "Country ID" })
    countryId: number;

    @Column({ nullable: true, comment: "Company Shipping" })
    companyShipping: string;

    @Column({ nullable: true, comment: "First Name Delivery" })
    firstNameDelivery: string;

    @Column({ nullable: true, comment: "Last Name Delivery" })
    lastNameDelivery: string;

    @Column({ nullable: true, comment: "Delivery Address" })
    deliveryAddress: string;

    @Column({ nullable: true, comment: "Delivery Address 2" })
    deliveryAddress2: string;

    @Column({ nullable: true, comment: "Postal Code Delivery" })
    postalCodeDelivery: string;

    @Column({ nullable: true, comment: "City Delivery" })
    cityDelivery: string;

    @Column({ nullable: true, comment: "State Delivery" })
    stateDelivery: string;

    @Column({ nullable: true, comment: "State ID Delivery" })
    stateIdDelivery: number;

    @Column({ nullable: true, comment: "Country ID Delivery" })
    countryIdDelivery: number;

    @Column({ nullable: true, comment: "Telephone" })
    telephone: string;

    @Column({ default: "en", comment: "Language" })
    language: string;

    @Column({ nullable: true, comment: "Comment" })
    comment: string;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Subtotal Amount" })
    subTotalAmount: number;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Total Amount" })
    totalAmount: number;

    @Column({ nullable: true, comment: "Amount Total Point" })
    amountTotalPoint: number;

    @Column({ default: 0, comment: "Original Point" })
    originalPoint: number;

    @Column({ nullable: false, comment: "Promo Code Name" })
    promoCodeName: string;

    @Column({ default: 0, comment: "Promo Code ID" })
    promoCodeId: number;

    @Column({ default: 1, comment: "Discount Type" })
    discountType: number;

    @Column({ default: 0, comment: "Promo Discount" })
    promoDiscount: string;

    @Column({ default: 0, comment: "Promo Type" })
    promoType: number;

    @Column({ nullable: true, comment: "Tax ID 1" })
    taxId1: string;

    @Column({ nullable: true, comment: "Shipping Tax ID" })
    shippingTaxId: string;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Amount Tax 1" })
    amountTax1: number;

    @Column({ nullable: true, comment: "Tax ID 2" })
    taxId2: number;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Amount Tax 2" })
    amountTax2: number;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Fresh Delivery" })
    freshDelivery: number;

    @Column({ nullable: false, comment: "Is Paid" })
    isPaid: boolean;

    @Column({ nullable: true, comment: "Netbanx Confirmation Number" })
    netbanxConfirmationNumber: string;

    @Column({ nullable: true, comment: "Transaction ID" })
    transactionId: string;

    @Column({ nullable: true, comment: "Auth Code" })
    authCode: string;

    @Column({ default: 0, comment: "Export" })
    export: number;

    @Column({ nullable: true, comment: "Export Date" })
    exportDate: string;

    @Column({ nullable: true, comment: "Import" })
    import: number;

    @Column({ nullable: true, comment: "Old Order No" })
    oldOrderNo: number;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Amount Total Statement Credit" })
    amountTotalStatementCredit: number;

    @Column({ nullable: true, comment: "Amount Point Total Points Com" })
    amountPointTotalPointsCom: number;

    @Column({ nullable: true, comment: "Email Points Com" })
    emailPointsCom: string;

    @Column({ nullable: true, comment: "Amount Total Travel Credit Point" })
    amountTotalTravelCreditPoint: number;

    @Column({ nullable: true, comment: "Date Travel Credit" })
    dateTravelCredit: Date;

    @Column({ nullable: true, comment: "Name Merchant Travel Credit" })
    nameMerchantTravelCredit: string;

    @Column({ type: "decimal", precision: 19, scale: 4, nullable: true, comment: "Cash Travel Credit Value" })
    cashTravelCreditvalue: number;

    @Column({ nullable: true, comment: "Export Order" })
    exportOrder: number;

    @Column({ nullable: true, comment: "Date Export Order" })
    dateExportOrder: Date;

    @Column({ nullable: true, comment: "Is Refund" })
    isRefund: number;

    @Column({ nullable: true, comment: "Date Refund" })
    dateRefund: Date;

    @Column({ nullable: true, comment: "Member Address ID" })
    memberAddressId: number;

    @Column({ nullable: true, comment: "Payment Status" })
    paymentStatus: string;

    @Column({ nullable: true, comment: "Other Order Confirmation Email" })
    otherOrderConfirmationEmail: string;

    @Column({ nullable: true, comment: "Recipient Account Name" })
    recipientAccountName: string;

    @Column({ nullable: true, comment: "Account Number" })
    accountNumber: string;

    @Column({ nullable: true, comment: "Account Type" })
    accountType: string;

    @Column({ nullable: true, comment: "Transit Value" })
    transitValue: string;

    @Column({ nullable: true, comment: "Investment Type" })
    investmentType: string;

    @Column({ nullable: true, comment: "SID" })
    sid: string;

    @Column({ nullable: true, comment: "SCIN" })
    SCIN: string;

    @Column({ nullable: true, comment: "Telephone Delivery" })
    telephoneDelivery: string;

    @Column({ nullable: true, comment: "Who Referred You" })
    whoReferredYou: string;

    @Column({ nullable: true, comment: "Occupation" })
    occupation: string;

    @Column({ nullable: true, comment: "Group Affiliation" })
    groupAffiliation: string;

    @Column({ nullable: true, comment: "Ethnic Group" })
    ethnicGroup: string;

    @Column({ nullable: true, comment: "Online Pass For Yr Global Village Portal" })
    onlinePassForYrGlobalVillagePortal: string;

    @Column({ nullable: true, comment: "Name Yr Bank Fr Yr Rewards Deposited" })
    nameYrBankFrYrRewardsDeposited: string;

    @Column({ nullable: true, comment: "Bank Routing Number" })
    bankRoutingNum: string;

    @Column({ nullable: true, comment: "Bank Account Number" })
    bankAccountNum: string;

    @Column({ nullable: true, comment: "Other" })
    other: string;

    @Column({ nullable: true, comment: "PMR Code Holder" })
    pmrCodeHolder: string;

    @Column({ nullable: true, comment: "Associate Code Holder" })
    associateCodeHolder: string;

    @Column({ nullable: true, comment: "Tracking Number" })
    trackingNumber: string;

    @Column({ nullable: true, comment: "No Credit" })
    noCredit: string;

    @Column({ nullable: true, comment: "Target Date" })
    targetDate: string;

    @Column({ nullable: true, comment: "Coupon Approval Status" })
    couponApprovalStatus: number;

    @Column({ nullable: false, default: 0, comment: "Check Threshold Status" })
    checkthresholdStatus: number;

    @Column({ nullable: true, comment: "Coupon Approval Date" })
    couponApprovalDate: Date;

    @Column({ nullable: true, comment: "Email Coupon" })
    emailCoupon: string;

    @Column({ nullable: true, comment: "Phone Coupon" })
    phoneCoupon: string;

    @Column({ nullable: true, comment: "Auto Redemption Frequency" })
    autoRedemptionFrequency: number;

    @Column({ nullable: true, comment: "Auto Type Item ID" })
    autoTypeItemId: number;

    @Column({ nullable: true, comment: "Auto Schedule" })
    autoSchedule: boolean;

    @Column({ nullable: false, default: 0, comment: "RPFSend" })
    rPFSend: number;

    @Column({ nullable: false, default: 0, comment: "CPFSend" })
    cPFSend: number;

    @Column({ nullable: false, default: 0, comment: "Confirmation Email Send" })
    confirmationEmailSend: number;

    @Column({ nullable: true, comment: "Cancel User ID" })
    cancelUserId: number;

    @Column({ nullable: true, comment: "RPFSend Date" })
    rPFSendDate: string;

    @Column({ nullable: false, default: 0, comment: "Send From" })
    sendFrom: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", comment: "Updated At" })
    updatedAt: Date;

    @Column({ nullable: true, comment: "Import By" })
    importBy: number;

    @Column({ nullable: true, comment: "Other Order ID" })
    otherOrderId: number;

    @Column({ type: "decimal", precision: 19, scale: 2, nullable: true, comment: "Total Dollar Value" })
    totalDollerValue: number;

    @Column({ nullable: true, comment: "Total Point Value" })
    totalPointValue: number;

    @Column({ nullable: true, comment: "Asked Point Value" })
    askedPointValue: number;

    @Column({ nullable: false, default: 0, comment: "Is Best Buy" })
    isBestBuy: boolean;

    @Column({ nullable: false, default: 0, comment: "Best Buy Margin" })
    bestBuyMargin: number;

    @Column({ nullable: true, comment: "ERP Order Number" })
    erpOrderNumber: string;

    @Column({ nullable: true, comment: "Exported ERP" })
    exportedErp: boolean;

    @Column({ nullable: true, comment: "Exported Date ERP" })
    exportedDateErp: Date;

    @Column({ nullable: false, comment: "Charge ID" })
    chargeId: string;

    @Column({ type: "text", nullable: false, comment: "Charge Data" })
    chargeData: string;
}
