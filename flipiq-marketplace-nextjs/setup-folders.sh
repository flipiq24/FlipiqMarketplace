#!/bin/bash
mkdir -p app/info/{seller,wholesaler,agent}
mkdir -p app/our-leadership
mkdir -p app/login
mkdir -p app/onboarding
mkdir -p app/user/{profile,verify-now,contact,notifications,inbox,buy,my-bids,bid-details,seller-counter,counter-bid,my-offers,offer-details}
mkdir -p app/user/buy/preference
mkdir -p "app/user/contact/[id]"
mkdir -p "app/user/property-details/[id]"
mkdir -p "app/user/bid-details/[id]"
mkdir -p "app/user/offer-details/[id]"
mkdir -p app/find-your-next-deal
mkdir -p app/sell/add
mkdir -p app/affiliate
mkdir -p app/property-details-admin
mkdir -p app/upload-contacts
mkdir -p components lib types public/images
echo "✅ All folders created successfully!"
ls -la app/ | head -20
