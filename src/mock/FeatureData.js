import {
    PiBoundingBoxLight,
    PiUsersFourThin,
    PiTreasureChest,
    PiMedalMilitaryLight,
  } from 'react-icons/pi';
  
  export const iconMap = {
    referral: PiBoundingBoxLight,
    rebates: PiUsersFourThin,
    rewards: PiTreasureChest,
    tier: PiMedalMilitaryLight,
  };
  
  export const featureData = [
    {
      title: "1. Two-Level Referral System",
      description: "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
      type: "referral",
    },
    {
      title: "2. Earn Rebates & Commissions",
      description: "Earn rebates on your trades and commissions from F1 and F2.",
      type: "rebates",
    },
    {
      title: "3. Claim Daily Rewards",
      description: "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
      type: "rewards",
    },
    {
      title: "4. Referral Tier System",
      description: "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days",
      type: "tier",
    },
  ];
  