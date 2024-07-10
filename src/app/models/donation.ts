export interface Donor {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  
  export interface Donation {
    id: number;
    amount: string;
    donationDate: string;
    donor: Donor;
  }
  