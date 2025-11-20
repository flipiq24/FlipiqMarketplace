// User Types
export enum UserTier {
  TIER_0 = 0,  // Unverified
  TIER_1 = 1,  // Active/Not Verified
  TIER_2 = 2,  // Active/Verified with POF
  TIER_3 = 3,  // Certified Pro
  TIER_4 = 4,  // Certified VIP
}

export enum UserRole {
  BUYER = "BUYER",
  SELLER = "SELLER",
  AGENT = "AGENT",
  WHOLESALER = "WHOLESALER",
  OPERATOR = "OPERATOR",
  ADMIN = "ADMIN",
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  tier: UserTier;
  sponsorId?: string;
}

// Property Types
export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  listingType: "FOR_SALE_BY_OWNER" | "POSTED_BY_AGENT" | "WHOLESALER";
}

// Bid Types
export enum BidStatus {
  NEW = "NEW",
  VIEWED = "VIEWED",
  OFFER_SUBMITTED = "OFFER_SUBMITTED",
  OPEN_ESCROW = "OPEN_ESCROW",
  CLOSED = "CLOSED",
}

export interface Bid {
  id: string;
  propertyId: string;
  buyerId: string;
  amount: number;
  status: BidStatus;
  createdAt: Date;
}

// Entity Types
export interface BuyerEntity {
  id: string;
  name: string;
  entityType: "LLC" | "TRUST" | "CORP";
  state: string;
  verified: boolean;
}
